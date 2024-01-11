'use client';
import Link from 'next/link';
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AI_Image() {
    const [inputText, setInputText] = useState('');
    const [generatedImage, setGeneratedImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const generateImage = async () => {
        setIsLoading(true);
    
        // Replace these with your actual API key and endpoint values
        const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
        const apiEndpoint = process.env.NEXT_PUBLIC_OPENAI_ENDPOINT;
    
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'dall-e-3',
                    prompt: inputText,
                    n: 1,
                    size: '1024x1024',
                }),
            });
    
            if (!response.ok) {
                // Handle 429 Too Many Requests specifically
                if (response.status === 429) {
                    console.error('Error: Too many requests. Please wait and try again.');
                } else {
                    throw new Error('Failed to generate image');
                }
            }
    
            const data = await response.json();
            setGeneratedImage(data.data[0].url);
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="flex" style={{height: 'calc(100vh - 100px)' }}>
            <Sidebar />
            <div className="flex flex-col mt-4 px-24 py-12">
                <div className="flex flex-col flex-grow max-w-l">
                    {generatedImage && (
                        <p className="">{`Generated image is ${inputText}`}</p>
                    )}
                    {/* Display the generated image */}
                    <img src={isLoading ? '' : generatedImage} className="mb-2" />
                    <div className="flex justify-center">
                        {/* Conditional rendering for download link */}
                        {generatedImage && (
                            <a
                                href={generatedImage}
                                download='generated_image.png' // You might want to give a more dynamic name
                                className="border border-gray-300 py-2 px-12 mt-2 mb-2"
                            >
                                Download
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex p-2 ml-1">
                    <div className="border rounded-full border-gray-300 flex-grow flex items-center px-4">
                        <input
                            className="w-full outline-none p-2"
                            placeholder="Enter your message here..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <div className='icon-border-c'></div>
                            <button
                                type="button"
                                className="ml-2"
                                onClick={() => generateImage()}
                            >
                            Send
                            </button>
                    </div>
                </div>
                <div className="px-2 flex justify-between gap-2">
                    <Link 
                        className="flex justify-center items-center description" 
                        href={'https://www.getbind.co/?utm_source=chat-app-bottom&utm_medium=chat-bot&utm_campaign=chat-bot'}
                    >
                        <span className='sidebar-how-text-hover'>Created with Bind</span>
                    </Link>
                    <div className='flex-1'></div>
                    <div className='flex justify-between items-center description hidden sm:block disable-text'>
                        Bind can provide inaccurate information, including about people. Always double-check its answers. Your 
                    <span className='privacy mx-1 sidebar-how-text-hover'>privacy</span>
                        in Bind
                    </div>
                    <div className='block sm:hidden disable-text'>
                        Always check its answers. 
                        <span className='privacy'>privacy</span>
                        in Bind
                    </div>
                </div>
            </div>
        </div>
    )
}
