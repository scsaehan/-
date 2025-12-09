import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-black text-center border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="animate-fade-in text-4xl sm:text-7xl font-black tracking-tight leading-tight mb-12 text-white uppercase break-keep text-balance">
          <span className="text-highlight">4주 안에</span><br />
          24시간 고객을 모아 오는<br />
          마케팅 시스템을 만드세요.
        </h1>

        {/* Contrast Section: Pain (Cost) */}
        <div className="animate-fade-in delay-100 w-full mb-8">
          <div className="flex flex-col gap-2 text-zinc-400 break-keep">
             <p className="text-xl sm:text-3xl font-medium line-through decoration-red-600 decoration-4 opacity-70">
               마케터 인건비 월 300만 원
             </p>
             <p className="text-xl sm:text-3xl font-medium line-through decoration-red-600 decoration-4 opacity-70">
               대행사 광고비 월 200만 원
             </p>
             <p className="text-3xl sm:text-4xl font-black text-red-500 mt-2">
               필요 없습니다.
             </p>
          </div>
        </div>

        {/* Contrast Section: Gain (Solution) */}
        <div className="animate-fade-in delay-200 bg-zinc-900/80 border-2 border-green-500 p-8 rounded-3xl w-full mb-12 shadow-[0_0_40px_rgba(34,197,94,0.15)] transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col items-center justify-center gap-4">
             <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 break-keep justify-center">
                <span className="text-3xl sm:text-5xl font-black text-white whitespace-nowrap">고정비 0원</span>
                <span className="hidden sm:block text-zinc-600 text-4xl">|</span>
                <span className="text-3xl sm:text-5xl font-black text-white whitespace-nowrap">하루 1~2시간</span>
             </div>
             <p className="text-xl sm:text-2xl text-green-400 font-bold mt-2 break-keep">
               이거면 충분합니다.
             </p>
          </div>
        </div>

        {/* Call Out */}
        <p className="animate-fade-in delay-300 text-xl sm:text-2xl text-zinc-400 font-semibold leading-relaxed break-keep">
          SNS, AI를 활용해<br className="hidden sm:block" />
          <span className="text-white border-b-4 border-yellow-500 pb-1 inline-block mt-1 sm:mt-0">‘디지털 레버리지’를 발휘하세요.</span>
        </p>

      </div>
    </section>
  );
};

export default Hero;