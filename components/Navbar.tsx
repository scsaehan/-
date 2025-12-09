import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter">
            Digital<span className="text-blue-500">Leverage</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#curriculum" className="hover:text-white text-zinc-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                커리큘럼
              </a>
              <a href="#target" className="hover:text-white text-zinc-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                참가자격
              </a>
              <a href="#pricing" className="bg-white text-zinc-900 hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-bold transition-colors">
                신청하기
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <a href="#pricing" className="bg-white text-zinc-900 px-4 py-1.5 rounded-full text-sm font-bold">
              신청하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;