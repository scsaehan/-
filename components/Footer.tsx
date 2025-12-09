import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-xl tracking-tighter">
            Digital<span className="text-blue-500">Leverage</span>
          </span>
          <p className="text-zinc-500 text-sm mt-2">© 2025 Digital Leverage Bootcamp. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">문의하기</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;