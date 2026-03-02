import React, { useState, useEffect, useRef } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import ai from '../assets/ai.png'
import { RiMicAiFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { serverUrl } from '../App';
import start from "../assets/start.mp3"

function SearchWithAi() {
    const startSound = useRef(new Audio(start))
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [recommendations, setRecommendations] = useState([])
    const [listening, setListening] = useState(false)
    const recognitionRef = useRef(null)

    // Initialize speech recognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        
        if (!SpeechRecognition) {
            toast.error("Speech recognition not supported")
            return
        }

        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'en-US'

        // Cleanup
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop()
            }
        }
    }, [])

    function speak(message) {
        let utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance)
    }

    const handleVoiceSearch = async () => {
        if (!recognitionRef.current) {
            toast.error("Speech recognition not supported")
            return
        }

        setListening(true)
        
        try {
            recognitionRef.current.start()
            startSound.current.play().catch(err => console.log("Audio play failed:", err))

            recognitionRef.current.onresult = async (e) => {
                const transcript = e.results[0][0].transcript.trim()
                setInput(transcript)
                await handleRecommendation(transcript)
            }

            recognitionRef.current.onerror = (e) => {
                console.error("Speech recognition error:", e.error)
                setListening(false)
                toast.error(`Speech recognition error: ${e.error}`)
            }

            recognitionRef.current.onend = () => {
                setListening(false)
            }

        } catch (error) {
            console.error("Failed to start speech recognition:", error)
            setListening(false)
            toast.error("Failed to start speech recognition")
        }
    }

    const handleRecommendation = async (query) => {
        if (!query.trim()) {
            toast.warning("Please enter a search query")
            setRecommendations([]) // Clear recommendations if query is empty
            return
        }

        try {
            const result = await axios.post(
                serverUrl + "/api/course/search", 
                { input: query }, 
                { withCredentials: true }
            )
            
            console.log(result.data)
            setRecommendations(result.data)
            
            if (result.data.length > 0) {
                speak("These are the top courses I found for you")
            } else {
                speak("No courses found")
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch recommendations")
            setRecommendations([])
        }
    }

    const handleManualSearch = () => {
        if (input.trim()) {
            handleRecommendation(input)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            handleRecommendation(input)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center px-4 py-16'>
    
            {/* search Container */}
            <div className='bg-white shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-2xl text-center relative'>
                <FaArrowLeftLong 
                    className='text-black w-[22px] h-[22px] cursor-pointer absolute' 
                    onClick={() => navigate("/")}
                />
                
                <h1 className='text-2xl sm:text-3xl font-bold text-gray-600 mb-6 flex items-center justify-center gap-2'>
                    <img src={ai} alt="" className='w-8 h-8 sm:w-[30px] sm:h-[30px]' />
                    Search with <span className='text-[#CB99C7]'>AI</span>
                </h1>

                <div className='flex items-center bg-gray-700 rounded-full overflow-hidden shadow-lg relative w-full'>
                    <input 
                        type="text" 
                        className='flex-grow px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base'
                        placeholder='What do you want to learn? (e.g. AI, MERN, Cloud...)' 
                        onChange={(e) => {
                            setInput(e.target.value)
                            // Clear recommendations when input becomes empty
                            if (e.target.value.trim() === "") {
                                setRecommendations([])
                            }
                        }} 
                        value={input}
                        onKeyPress={handleKeyPress}
                        disabled={listening}
                    />

                    {input && (
                        <button 
                            className='absolute right-14 sm:right-16 bg-white rounded-full hover:bg-gray-100 transition-colors'
                            onClick={handleManualSearch}
                            disabled={listening}
                        >
                            <img src={ai} alt="" className='w-10 h-10 p-2 rounded-full' />
                        </button>
                    )}

                    <button 
                        className={`absolute right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center transition-all ${
                            listening ? 'animate-pulse bg-red-100' : 'hover:bg-gray-100'
                        }`}
                        onClick={handleVoiceSearch}
                        disabled={listening}
                    >
                        <RiMicAiFill className={`w-5 h-5 ${listening ? 'text-red-500' : 'text-[#cb87c5]'}`} />
                    </button>
                </div>
            </div>

            {/* Results Section - Exactly as your original UI */}
            {recommendations.length > 0 ? (
                <div className='w-full max-w-6xl mt-12 px-2 sm:px-4'>
                    <h1 className='text-xl sm:text-2xl font-semibold mb-6 text-white text-center'>AI Search Results</h1>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
                        {recommendations?.map((course, index) => (
                            <div 
                                key={index} 
                                className='bg-white text-black p-5 rounded-2xl shadow-md hover:shadow-indigo-500/30 transition-all duration-200 border border-gray-200 cursor-pointer hover:bg-gray-200' 
                                onClick={() => navigate(`/viewcourse/${course._id}`)}
                            >
                                <h2 className='text-lg font-bold sm:text-xl'>{course.title}</h2>
                                <p className='text-sm text-gray-600 mt-1'>{course.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                listening ? (
                    <h1 className='text-center text-xl sm:text-2xl mt-10 text-gray-400 flex items-center gap-2'>
                        <RiMicAiFill className='w-6 h-6 text-red-400 animate-pulse' />
                        Listening ...
                    </h1>
                ) : (
                    <h1 className='text-center text-xl sm:text-2xl mt-10 text-gray-400'>No Courses Found Yet</h1>
                )
            )}
        </div> 
    )
}

export default SearchWithAi