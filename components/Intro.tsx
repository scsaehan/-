import React from 'react';
import { Play } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section className="py-20 bg-black border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* VSL Placeholder */}
        <div className="w-full aspect-video bg-zinc-900 border-2 border-zinc-800 rounded-xl flex items-center justify-center mb-16 shadow-2xl relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center group-hover:bg-zinc-800/40 transition-colors">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white fill-current ml-1" />
            </div>
          </div>
          <p className="text-zinc-500 font-bold text-xl mt-32">VSL (소개 영상)</p>
        </div>

        {/* Text Content */}
        <div className="text-center mb-16">
          <p className="text-xl sm:text-3xl font-bold leading-relaxed text-zinc-100 break-keep text-balance">
            디지털 레버리지 부트캠프는 <br className="hidden sm:block"/>
            내 지식과 노하우를 파는 <span className="text-highlight">‘전문가’</span>들이 <br className="hidden sm:block"/>
            <span className="underline decoration-yellow-500 decoration-4 underline-offset-[8px] decoration-skip-ink-none inline-block my-1 sm:my-0">‘AI 활용 SNS 마케팅 시스템’</span>을 <br className="hidden sm:block"/>
            4주 만에 완성하는 온라인 부트캠프입니다.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="cta-button inline-block text-xl sm:text-2xl font-black py-6 px-12 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse w-full sm:w-auto break-keep"
          >
            지금 신청하기 👉
          </a>
        </div>

      </div>
    </section>
  );
};

export default Intro;