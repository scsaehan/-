import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="pt-0 pb-24 bg-black border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Core Definition Text */}
        <div className="text-center mb-16">
          <p className="text-[1.5rem] sm:text-4xl font-black leading-[1.8] sm:leading-[2.4] text-zinc-100 break-keep">
            디지털 레버리지 부트캠프는<br />
            지식과 노하우를 파는 <span className="text-highlight">‘전문가’</span>들이<br />
            <span className="inline-block border-b-[4px] sm:border-b-[6px] border-yellow-500 leading-none pb-[2px] mb-2 sm:mb-4">
              ‘AI 활용 SNS 마케팅 시스템’
            </span>을<br />
            <span className="sm:inline-block">
              4주 만에 직접 구축하는 
              <span className="inline-block bg-zinc-800 text-white px-5 py-2 rounded-2xl mx-2 shadow-2xl mt-4 sm:mt-0">
                실행 커뮤니티
              </span>
              입니다.
            </span>
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