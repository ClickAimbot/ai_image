import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='flex justify-between items-center py-3'>
                <div className='flex'>
                    <img src="/logo-black.svg" />
                </div>
                <div className='icon-border my-2 mx-3'></div>
                <div className='web-chat-default-text'>AI Image Generator</div>
                <div className='flex-1'></div>
                <div className='hidden sm:block'>
                    <Link 
                        className="web-chat-default-text mr-5" 
                        href={'https://app.getbind.co/login?utm_source=chat-app-top&utm_medium=chat-bot&utm_campaign=chat-bot'} 
                        target='_blank'
                    >Create your own app</Link>
                    <Link 
                        className='mr-5 clone-bot-btn' 
                        href={'https://www.getbind.co/?utm_source=chat-app-top&utm_medium=chat-bot&utm_campaign=chat-bot'} 
                        target='_blank'
                    >Clone this bot</Link>
                </div>
            </div>
        </div>
    )
}