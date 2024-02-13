import Link from 'next/link';

export default function Footer() {
    return (
        <div className='mt-4 hidden sm:block'>
            <div className="w-[300px] flex flex-col py-2 mt-8">
                <Link 
                    href={'/createAI'} 
                    className="flex justify-center items-center web-chat-default-text create-app-btn"
                    target="_blank"
                >Create your chatGPT app
                </Link>
                <Link 
                    href={'/'}
                    className="flex justify-center items-center description mt-2"
                    target="_blank"
                >
                    <span className='sidebar-how-text-hover'>Powered by bind</span>
                </Link>
            </div>
        </div>
    )
}