'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AI_Image() {
    const defaultImage = "https://via.placeholder.com/600x400.png?text=AI+Generated+Image";

    const [inputText, setInputText] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const generateImage = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
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
        <div className="flex w-full" >
            <div className='hidden lg:block'>
                <Sidebar />
            </div>
            <div className="flex flex-col mt-6 px-6 w-full xl:mr-96 lg:ml-16 lg:mr-16">
                <h1 className='ai-image-gen mb-2 '>AI Image Generator</h1>
                <div className="flex flex-col">
                    <p className='ai-image-description mb-8 hidden lg:block'>Enter a text description and generate an AI Image</p>
                    <form onSubmit={generateImage} className="hidden lg:flex border rounded-md border-gray-300 flex-grow items-center px-4">
                        <textarea
                        rows='4'
                        className="web-chat-default-text w-full outline-none resize-none p-2"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        />
                        {isLoading ? (
                            <p className="ml-4">Generating...</p>
                        ) : (
                            <button
                            type="submit"
                            className="clone-bot-btn ml-4"
                            >
                            Generate
                            </button>
                        )}
                    </form>

                    {/* Textarea only for mobile */}
                    <div className="lg:hidden border rounded-md border-gray-300 flex-grow px-4">
                        <textarea
                        rows='4'
                        className="web-chat-default-text w-full outline-none resize-none p-2"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        />
                    </div>

                    {/* Generate Button - Separate from textarea on mobile */}
                    <div className="mt-2 lg:hidden">
                        {isLoading ? (
                            <p>Generating...</p>
                        ) : (
                            <button
                            type="button"
                            className="clone-bot-btn w-full"
                            onClick={generateImage}
                            >
                            Generate
                            </button>
                        )}
                    </div>
                </div>
                {generatedImage && ( // Check if generatedImage has a value
                    <div className="flex flex-col flex-grow bg-white border rounded-lg border-gray-300 mt-6 ">
                        {/* Display the generated image */}
                        <Image src={generatedImage} alt="Generated" width={'600'} height={'400'} className="py-2 mt-4 px-24" />
                        <div className="flex justify-center">
                            {/* Download link */}
                            <Link href={generatedImage} download='generated_image.png' className="border border-gray-300 py-2 px-12 mb-2">
                                Download
                            </Link>
                        </div>
                    </div>
                )}
                {generatedImage && (
                    <p className="ai-image-description mt-2 mb-16">{`Generated image is a ${inputText}`}</p>
                )}
                <div className="flex justify-between gap-2 mt-2 items-center">
                    <Link 
                        className="hidden lg:flex flex-grow description" 
                        href={'https://www.getbind.co/?utm_source=chat-app-bottom&utm_medium=chat-bot&utm_campaign=chat-bot'}
                    >
                        <span className='sidebar-how-text-hover px-1'>Created with </span>
                        <Image src="/logo-black.svg" alt='img' width={40} height={15} className='object-contain'/>
                    </Link>
                    <div className='flex-1'></div>
                    <div className='description hidden lg:block disable-text'>
                        Bind can provide inaccurate information, including about people. Always double-check its answers. Your 
                        <Link href={''}>
                            <span className='privacy mx-1 sidebar-how-text-hover'>privacy</span>
                        </Link>
                        in Bind
                    </div>
                    <div className='block lg:hidden disable-text'>
                        {/* Always check its answers. 
                        <Link href={'/'} className='privacy'>privacy</Link>
                        in Bind */}
                    </div>
                </div>
            </div>
        </div>
    )
}
