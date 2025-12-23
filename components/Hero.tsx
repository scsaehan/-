import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      const progress = Math.max(0, Math.min(1, (scrollTop - containerTop) / (containerHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Headline exits much further and FASTER (divisor 0.15 -> 0.1)
  const headlineMoveProgress = Math.min(1, scrollProgress / 0.1);
  const headlineTop = 50 - (headlineMoveProgress * 250); // Moves it way off screen (up to -200%)
  const headlineScale = 1 - (headlineMoveProgress * 0.4);
  // Fade out significantly earlier (multiplier 8 -> 15) to ensure it's gone before costs appear
  const headlineOpacity = Math.max(0, 1 - (scrollProgress * 15));

  const costActive = scrollProgress >= 0.12 && scrollProgress < 0.48;
  const is300Visible = scrollProgress > 0.18;
  const is200Visible = scrollProgress > 0.24;
  const isXTriggered = scrollProgress > 0.32;

  const noNeedActive = scrollProgress >= 0.48 && scrollProgress < 0.68;
  const noNeedOpacity = noNeedActive ? 1 : 0;
  const noNeedScale = noNeedActive ? 1 + (scrollProgress - 0.48) * 0.5 : 0.8;

  const finalActive = scrollProgress >= 0.68;
  const finalOpacity = finalActive ? Math.min(1, (scrollProgress - 0.68) * 8) : 0;
  const finalTranslate = finalActive ? Math.max(0, 20 - (scrollProgress - 0.68) * 100) : 20;

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Stage 0 & 1: Headline - Increased mobile font size */}
        <div 
          className="w-full max-w-6xl text-center z-50 absolute left-0 right-0 mx-auto px-4 will-change-transform"
          style={{ 
            top: `${headlineTop}%`,
            transform: `translateY(-50%) scale(${headlineScale})`,
            opacity: headlineOpacity,
            transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            visibility: headlineOpacity <= 0 ? 'hidden' : 'visible'
          }}
        >
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.2] text-white uppercase break-keep text-balance italic">
            딱 4주, <br className="sm:hidden" />
            <span className="text-highlight">AI 마케팅 부서</span>를 <br />
            완성하세요.
          </h1>

          <div className={`mt-8 sm:mt-16 flex flex-col items-center gap-4 transition-opacity duration-500 ${scrollProgress < 0.02 ? 'opacity-100' : 'opacity-0'}`}>
             <p className="text-zinc-500 text-sm sm:text-lg font-bold uppercase tracking-[0.2em] animate-pulse">천천히 아래로 내려보세요</p>
             <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-bounce" />
          </div>
        </div>

        {/* Action Stage Container */}
        <div className="w-full h-full relative flex items-center justify-center">
          
          {/* Section 1: The Costs - Enforced one-line with whitespace-nowrap and slightly adjusted responsive sizes */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700
            ${costActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 blur-xl pointer-events-none'}`}>
             <div className="relative w-full max-w-7xl px-4 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-10 sm:gap-16 w-full relative z-10 items-center justify-center">
                  <p className={`text-[1.8rem] xs:text-[2.2rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-center transition-all duration-500 whitespace-nowrap
                    ${is300Visible ? 'text-white opacity-100 translate-y-0' : 'text-zinc-900 opacity-0 translate-y-8'}`}>
                    마케터 인건비 월 300만 원
                  </p>
                  <p className={`text-[1.8rem] xs:text-[2.2rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-center transition-all duration-500 whitespace-nowrap
                    ${is200Visible ? 'text-white opacity-100 translate-y-0' : 'text-zinc-900 opacity-0 translate-y-8'}`}>
                    대행사 광고비 월 200만 원
                  </p>
                </div>

                <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-visible">
                  <svg viewBox="0 0 1000 400" className="w-full h-full max-w-7xl overflow-visible" preserveAspectRatio="none">
                    <path 
                      d="M 50 100 L 950 300" 
                      fill="none" 
                      stroke="#EF4444" 
                      strokeWidth="32" 
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-in-out"
                      style={{
                        strokeDasharray: 2000,
                        strokeDashoffset: isXTriggered ? 0 : 2000,
                        filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.7))'
                      }}
                    />
                    <path 
                      d="M 950 100 L 50 300" 
                      fill="none" 
                      stroke="#EF4444" 
                      strokeWidth="32" 
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-in-out delay-150"
                      style={{
                        strokeDasharray: 2000,
                        strokeDashoffset: isXTriggered ? 0 : 2000,
                        filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.7))'
                      }}
                    />
                  </svg>
                </div>
             </div>
          </div>

          {/* Section 2: "필요 없습니다" */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none will-change-transform"
            style={{ 
              opacity: noNeedOpacity, 
              transform: `scale(${noNeedScale})`,
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
            }}
          >
            <p className="text-[14vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-red-600 uppercase drop-shadow-[0_0_40px_rgba(239,68,68,0.8)] italic tracking-tighter text-center leading-none px-4 break-keep text-balance">
              필요 없습니다.
            </p>
          </div>

          {/* Section 3: Final Solution */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-4 will-change-transform"
            style={{ 
              opacity: finalOpacity,
              transform: `translateY(${finalTranslate}px)`,
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
              <p className="text-[1.6rem] xs:text-[1.85rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.4] text-white break-keep text-balance">
                딱 4주면 <br className="sm:hidden" />
                <span className="text-highlight">365일, 24시간 일하는</span><br />
                <span className="inline-block mt-6 sm:mt-10 border-b-[6px] sm:border-b-[12px] border-yellow-500 pb-2 sm:pb-4">무급 AI 마케팅 부서가 완성됩니다.</span>
              </p>
              
              <div className="mt-12 sm:mt-20 flex flex-col items-center gap-4 animate-bounce">
                <p className="text-white text-lg sm:text-3xl font-black uppercase tracking-[0.2em] italic">계속해서 스크롤하세요</p>
                <ArrowDown className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;