'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo DocGuard"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/plans" className="text-gray-700 hover:text-blue-600">
              Planos
            </Link>
            <Link href="/funciona" className="text-gray-700 hover:text-blue-600">
              Como Funciona
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#planos">
            <a className="block text-gray-700 hover:text-blue-600 px-4 py-2">Planos</a>
          </Link>
          <Link href="#funciona">
            <a className="block text-gray-700 hover:text-blue-600 px-4 py-2">Como Funciona</a>
          </Link>
        </div>
      )}
    </nav>
  );
};