import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const Comparison: React.FC = () => {
  const data = [
    {
      label: "콘텐츠 생산",
      before: <>"어떤 콘텐츠를 만들어야 하지?"<br /><br />"시간 없는데..."</>,
      after: <>"주제는 이렇게<br />찾는 거구나!"<br /><br />"AI랑 하니까<br />1시간이면 끝나네!"</>,
    },
    {
      label: "마케팅 비용",
      before: <>대행사 수수료/마케터<br /><span className="whitespace-nowrap">인건비 월 300만 원</span></>,
      after: <>고정비 0원<br /><span className="text-xl sm:text-2xl opacity-80">(AI 구독료만 있으면 됩니다)</span></>,
    },
    {
      label: "인지도",
      before: <>"나 잘하는데<br /><br />왜 사람들이 몰라주지?"</>,
      after: <>"이렇게 해야<br />알아주는구나!"</>,
    },
    {
      label: "영업 방식",
      before: <>직접 발로 뛰어야만<br />고객이 모이는 구조</>,
      after: <>SNS가 24시간<br /><span className="whitespace-nowrap">잠재 고객을 데려옴</span></>,
    },
  ];

  return (
    <section className="py-32 bg-black border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-10 text-white break-keep text-balance leading-[1.3] sm:leading-[1.4]">
            4주 뒤, <span className="text-highlight">당신의 비즈니스는 완전히 달라집니다.</span>
          </h2>
          <p className="text-xl sm:text-3xl text-zinc-400 font-bold leading-relaxed break-keep max-w-4xl italic text-balance">
            "실력이 문제가 아닙니다. <span className="text-white">시스템이 문제입니다.</span> <br className="sm:hidden" /> 그 시스템을 만들어드립니다."
          </p>
        </div>

        {/* Comparison List */}
        <div className="space-y-16">
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 ml-4">
                <div className="h-10 w-2 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{item.label}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                
                {/* BEFORE Card */}
                <div className="bg-zinc-900/40 border-2 border-zinc-800 rounded-[3rem] p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden group hover:border-red-900/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <AlertCircle className="w-40 h-40 text-red-500" />
                  </div>
                  <div className="text-red-500 font-black text-xl sm:text-2xl mb-8 flex items-center gap-3">
                    <AlertCircle className="w-7 h-7 shrink-0" /> 참여 전 (BEFORE)
                  </div>
                  <p className="text-zinc-400 text-2xl sm:text-[2.5rem] font-bold break-keep leading-[1.3] tracking-tight">
                    {item.before}
                  </p>
                </div>

                {/* Desktop Arrow */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black border-4 border-zinc-800 rounded-full p-6 shadow-[0_0_40px_rgba(0,0,0,1)]">
                   <ArrowRight className="w-14 h-14 text-yellow-500" />
                </div>

                {/* AFTER Card */}
                <div className="bg-zinc-900 border-4 border-yellow-500/40 rounded-[3rem] p-10 sm:p-14 flex flex-col justify-center shadow-[0_40px_80px_rgba(234,179,8,0.12)] relative overflow-hidden group hover:border-yellow-500 transition-all duration-300">
                   <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-25 transition-opacity">
                    <CheckCircle2 className="w-40 h-40 text-yellow-500" />
                  </div>
                  <div className="text-highlight font-black text-2xl sm:text-3xl mb-8 flex items-center gap-4">
                    <CheckCircle2 className="w-10 h-10 shrink-0" /> 4주 후 (AFTER)
                  </div>
                  <p className="text-white text-3xl sm:text-[3.25rem] font-black break-keep leading-[1.2] tracking-tight drop-shadow-xl">
                    {item.after}
                  </p>
                </div>

                {/* Mobile Arrow */}
                <div className="lg:hidden flex justify-center -my-8 relative z-20">
                   <div className="bg-black border-2 border-zinc-800 rounded-full p-4 shadow-2xl">
                    <ArrowRight className="w-10 h-10 text-yellow-500 rotate-90" />
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Updated Final Impact Section - Robust Centering */}
        <div className="mt-40 text-center pb-20 flex flex-col items-center justify-center w-full gap-8 sm:gap-14 overflow-hidden">
          <p className="text-[2.2rem] sm:text-6xl font-black text-white italic tracking-tight leading-none w-full">
            "이제는
          </p>
          <div className="inline-block border-b-[6px] sm:border-b-[12px] border-yellow-500 pb-2 sm:pb-4 max-w-full">
             <p className="text-[1.8rem] xs:text-[2.2rem] sm:text-6xl font-black text-highlight italic tracking-tight leading-none break-keep px-2">
               시스템이 당신을 위해 일하게
             </p>
          </div>
          <p className="text-[2.2rem] sm:text-6xl font-black text-white italic tracking-tight leading-none w-full">
            만들 차례입니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;