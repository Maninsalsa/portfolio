import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium">
          Robert Manansala
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/#about" className="hover:opacity-70 transition-opacity">About</Link></li>
            <li><Link href="/#projects" className="hover:opacity-70 transition-opacity">Projects</Link></li>
            <li><Link href="/#skills" className="hover:opacity-70 transition-opacity">Skills</Link></li>
            <li><Link href="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;