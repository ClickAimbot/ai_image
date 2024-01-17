import Link from "next/link";

export default function Sidebar() {
    return (
            <div className="w-[300px] hidden: sm:flex flex-col " style={{ borderRight: '1px solid rgb(235, 235, 235)' }}>
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
                                href={'https://app.getbind.co/webbot/6566ca04cc7b2badce6c3d0f'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >Yoda GPT
                            </Link>
                            <Link 
                                href={'https://app.getbind.co/webbot/6566c389cc7b2badce6c3d0d'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >B2B Sales Lead Bot
                            </Link>
                            <Link 
                                href={'https://app.getbind.co/webbot/6566c5aff7b5b4fae6758940'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover" 
                                target="_blank"
                            >DomiKnows Pizza Order Bot
                            </Link>
                            <Link 
                                href={'https://app.getbind.co/webbot/6566c73cb1b175dccb8652bb'} 
                                className="mb-2 flex items-center web-chat-default-text webbot-sidebar-item-default link-hover"
                                target="_blank" 
                            >Data Extractor to JSON
                            </Link>
                    </div>
                    <div className="mt-4 mx-6 mb-6 flex flex-col text-left">
                        <p className="sidebar-description" >HOW TO</p>
                            <Link 
                                href={'https://app.getbind.co/webbot/6566c5aff7b5b4fae6758940'}
                                className="mb-2 flex items-center sidebar-how-text"
                                target="_blank"
                            >
                                <span className="sidebar-how-text-hover">How to build your own ChatGPT</span>
                            </Link>
                            <Link 
                                href={'https://medium.com/@getbind.co/how-to-build-complex-llm-applications-with-your-own-data-and-services-c9186e92d926'}
                                className="mb-2 flex items-center sidebar-how-text"
                                target="_blank"
                            >
                                <span className="sidebar-how-text-hover">The basics of generative AI</span>
                            </Link>
                            <Link 
                                href={'https://medium.com/@getbind.co/how-to-create-a-pizza-ordering-ai-bot-using-llms-b3763b1c8d5c'}
                                className="mb-2 flex items-center sidebar-how-text sidebar-how-text-hover"
                                target="_blank"
                            >
                                <span className="">A step-by-step guide to building a ChatGPT-like model</span>
                            </Link>
                    </div>
            </div>
    )
}