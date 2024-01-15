import Link from "next/link";

export default function Sidebar() {
    return (
            <div className="w-[300px] hidden: sm:flex flex-col h-full" style={{ borderRight: '1px solid rgb(235, 235, 235)' }}>
                    <div className="flex flex-col text-left mt-4 mx-6">
                        <p className="sidebar-description">THIS APPLICATION</p>
                        <Link 
                            className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-current" 
                            href={'/'}
                        >AI Image Generator</Link>
                    </div>
                    <div className="my-4 mx-6 flex flex-col flex-grow text-left">
                        <h3 className="sidebar-description">FEATURED APPLICATIONS</h3>
                            <Link 
                                href={'/'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >Yoda GPT
                            </Link>
                            <Link 
                                href={'/'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >B2B Sales Lead Bot
                            </Link>
                            <Link 
                                href={'/'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >ChatGPT for Apple Support
                            </Link>
                            <Link 
                                href={'/'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover"
                                target="_blank" 
                            >Data Extractor to JSON
                            </Link>
                    </div>
                    <div className="mt-4 mx-6 mb-6 flex flex-col text-left">
                        <p className="sidebar-description" >HOW TO</p>
                            <Link 
                                href={'/'}
                                className="mb-2 flex items-center sidebar-how-text"
                                target="_blank"
                            >
                                <span className="sidebar-how-text-hover">How to build your own ChatGPT</span>
                            </Link>
                            <Link 
                                href={'/'}
                                className="mb-2 flex items-center sidebar-how-text"
                                target="_blank"
                            >
                                <span className="sidebar-how-text-hover">The basics of generative AI</span>
                            </Link>
                            <Link 
                                href={'/'}
                                className="mb-2 flex items-center sidebar-how-text"
                                target="_blank"
                            >
                                <span className="sidebar-how-text-hover">A step-by-step guide to building a ChatGPT-like model</span>
                            </Link>
                    </div>
            </div>
    )
}