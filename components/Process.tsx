import React from 'react';
import { Calendar, Zap, Trophy, ArrowRight, AtSign } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-black border-b border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 text-white break-keep text-balance leading-tight">
            디지털 레버리지 부트캠프는 <br />
            <span className="text-highlight">이렇게 진행됩니다.</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          
          {/* Step 1: Weekly */}
          <div className="relative group">
            {/* Desktop only large numbers */}
            <div className="hidden sm:block absolute -left-12 top-0 text-[8rem] font-black text-zinc-900 leading-none select-none group-hover:text-zinc-800 transition-colors">01</div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative z-10 backdrop-blur-sm group-hover:border-zinc-700 transition-all">
              <div className="flex items-center gap-6 mb-8">
                {/* Icon box hidden on mobile as requested */}
                <div className="hidden sm:flex bg-yellow-500 p-4 rounded-2xl shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <Calendar className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white break-keep">
                  첫째, 매주 월요일 <span className="text-highlight">‘주간 핵심 강의’</span>와 <span className="text-highlight">‘주간 미션’</span> 부여
                </h3>
              </div>
              <div className="space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed break-keep">
                <p>
                  불필요하고 장황한 이론 강의 없습니다. <br />
                  <span className="text-white font-bold">‘무엇을, 어떻게, 왜 해야 하는지’</span>만 간략히 알려드립니다.
                </p>
                <p className="bg-zinc-800/50 p-6 rounded-2xl border-l-4 border-yellow-500 text-zinc-300">
                  주간 강의와 미션은 AI 마케팅 부서를 완성하기 위한 핵심 행동들로 구성됩니다. <br className="hidden sm:block" />
                  <span className="text-white font-bold">4주간 미션을 완료하면 SNS 마케팅 기초공사가 완료됩니다.</span>
                </p>
                <p className="text-sm sm:text-base text-zinc-500 italic">
                  * 세부 커리큘럼은 상세페이지 하단 '세부사항 및 커리큘럼 안내' 참고
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Daily */}
          <div className="relative group">
            {/* Desktop only large numbers */}
            <div className="hidden sm:block absolute -left-12 top-0 text-[8rem] font-black text-zinc-900 leading-none select-none group-hover:text-zinc-800 transition-colors">02</div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative z-10 backdrop-blur-sm group-hover:border-zinc-700 transition-all">
              <div className="flex items-center gap-6 mb-8">
                {/* Icon box hidden on mobile as requested */}
                <div className="hidden sm:flex bg-blue-500 p-4 rounded-2xl shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <AtSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white break-keep">
                  둘째, <span className="text-highlight">‘일일 미션’</span> 부여
                </h3>
              </div>
              <div className="space-y-8 text-lg sm:text-xl text-zinc-400 leading-relaxed break-keep">
                <p>
                  매일 요즘 가장 핫한 SNS인 <span className="text-white font-bold">‘스레드(Threads)’</span>에 <br className="sm:hidden" /> 1개 이상의 글을 포스팅 하셔야 합니다.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                      <span className="text-xl sm:text-2xl font-black text-zinc-600">?</span>
                    </div>
                    <p className="text-xl sm:text-3xl font-black text-zinc-500 italic">"그걸 어떻게 쓰냐?"</p>
                  </div>
                  <div className="pl-0 sm:pl-16">
                    <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      걱정하지 마세요. 빈칸 채우기만 하면 되는 <br className="sm:hidden" />
                      <span className="text-highlight">‘템플릿’</span>과, 그 조차 대신 해주는 <br className="sm:hidden" />
                      <span className="text-highlight">‘AI 프롬프트’</span>를 제공해드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Scoring & Rewards */}
          <div className="relative group">
            {/* Desktop only large numbers */}
            <div className="hidden sm:block absolute -left-12 top-0 text-[8rem] font-black text-zinc-900 leading-none select-none group-hover:text-zinc-800 transition-colors">03</div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative z-10 backdrop-blur-sm group-hover:border-zinc-700 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.05)]">
              <div className="flex items-center gap-6 mb-8">
                {/* Icon box hidden on mobile as requested */}
                <div className="hidden sm:flex bg-red-600 p-4 rounded-2xl shrink-0 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white break-keep">
                  셋째, <span className="text-highlight">개인별/조별 점수</span> 실시간 채점 및 보상
                </h3>
              </div>
              <div className="space-y-8 text-lg sm:text-xl text-zinc-400 leading-relaxed break-keep">
                <p>
                  일일 미션, 주간 미션 수행도가 <span className="text-white font-bold">실시간으로 점수화</span> 됩니다. <br className="hidden sm:block" />
                  개인 점수가 기준선을 넘어야 특별 선물을 받을 수 있습니다.
                </p>
                <div className="bg-highlight p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-black">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-black" />
                    <span className="font-black text-lg sm:text-xl uppercase tracking-wider">Ultimate Reward</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-black leading-snug">
                    부트캠프 종료 시 <span className="underline decoration-black decoration-4 underline-offset-4">‘최우수 팀’</span>과 <span className="underline decoration-black decoration-4 underline-offset-4">‘개인 점수 MVP’</span>는 <br className="hidden sm:block" />
                    <span className="text-red-700 italic">북토크 이찬양 대표와 식사 & 티타임</span>을 가지며 <br className="hidden sm:block" />
                    직접 비즈니스 피드백을 받게 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500 mb-8 font-bold text-lg sm:text-xl">이 모든 과정이 단 4주 만에 일어납니다.</p>
          <a
            href="#main-pricing-card"
            className="cta-button inline-flex items-center gap-3 text-xl sm:text-2xl font-black py-6 px-12 rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.3)] group"
          >
            함께 성장하러 가기 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;