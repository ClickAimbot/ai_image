'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className='flex justify-between items-center py-3'>
                <div className='flex items-center'>
                    <Link href={'https://app.getbind.co/webbot?utm_source=bind-image-generator&utm_medium=web&utm_campaign=bind-image-generator'}>
                        <Image src="/logo-black.svg" alt='logo' height={26} width={81}/>
                    </Link>
                </div>
                <div className='icon-border my-2 mx-3'></div>
                <div className='web-chat-default-text'>AI Image Generator</div>
                <div className='flex-1'></div>

                {/* Desktop Menu */}
                <div className={`hidden lg:block ${isMobileMenuOpen ? 'hidden' : ''}`}>
                    <Link 
                        className="web-chat-default-text mr-5" 
                        href={'https://app.getbind.co/register?utm_source=bind-image-generator&utm_medium=web&utm_campaign=image-gen-create-bot'} 
                        target='_blank'
                    >Create your own bot</Link>
                    <Link 
                        className='mr-5 clone-bot-btn' 
                        href={'https://app.getbind.co/register?utm_source=bind-image-generator&utm_medium=web&utm_campaign=image-gen-clone-bot'} 
                        target='_blank'
                    >Clone this bot</Link>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={() => toggleMobileMenu()}>
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - shown/hidden based on isMobileMenuOpen */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white z-50 shadow">
                        <ul className="py-2 flex flex-col items-center">
                            <li className="mb-2">
                                <Link 
                                    className='web-chat-default-text'
                                    href={'https://app.getbind.co/register?utm_source=bind-image-generator&utm_medium=web&utm_campaign=bind-image-generator'} 
                                    target='_blank'
                                    onClick={toggleMobileMenu}
                                >
                                    Create your own app
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link 
                                    className='clone-bot-btn'
                                    href={'https://app.getbind.co/register?utm_source=bind-image-generator&utm_medium=web&utm_campaign=bind-image-generator'} 
                                    target='_blank'
                                    onClick={toggleMobileMenu}
                                >
                                    Clone this bot
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
