import React from 'react';
import { MessageSquare, Youtube, Instagram, AtSign } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-32 bg-black border-b border-zinc-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Intro: The Question */}
        <div className="mb-32 flex flex-col items-center sm:items-start">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-5 py-2.5 rounded-full text-base sm:text-lg font-black mb-12 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            <MessageSquare className="w-5 h-5 fill-yellow-500" /> 질문 하나 드리겠습니다.
          </div>
          
          <h2 className="font-black mb-16 italic break-keep text-zinc-100 tracking-tighter text-center sm:text-left w-full">
            <span className="text-2xl sm:text-4xl md:text-5xl block mb-4 opacity-90">혹시,</span>
            <span className="text-highlight text-[2.5rem] sm:text-6xl md:text-7xl block leading-[1.2] mb-4">
              "실력만 있으면 <br className="hidden sm:block" /> 홍보는 알아서 되겠지?"
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl block opacity-90">생각하셨나요?</span>
          </h2>
          
          <div className="space-y-16 text-xl sm:text-2xl text-zinc-300 font-bold leading-relaxed break-keep w-full">
            <p className="text-3xl sm:text-5xl text-white font-black italic tracking-tight mb-12 text-center sm:text-left">
              최근에 외식 한 적 있으시죠?
            </p>
            
            <div className="pl-6 border-l-4 border-zinc-700 space-y-12 py-4">
              <p className="text-zinc-100 text-2xl sm:text-4xl leading-snug">그 식당이 우리 지역 <br className="sm:hidden" /> 1등 맛집인가요?</p>
              
              <p className="text-zinc-400 text-xl sm:text-3xl">맛있긴 해도 1등인지는 <br className="sm:hidden" /> 잘 모르시겠죠?</p>

              <p className="text-white text-3xl sm:text-5xl font-black leading-tight mt-12">
                그런데 왜, 많고 많은 식당 중 <br /> <span className="text-highlight">그 식당</span>을 가셨어요?
              </p>
            </div>

            <div className="py-16 px-8 bg-zinc-900/40 rounded-[3rem] border border-zinc-800 my-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-3xl rounded-full"></div>
              <p className="text-2xl sm:text-4xl font-black text-white leading-tight mb-12">
                심플합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {["가까워서", "지나가다 보여서", "네이버 지도에 떠서", "맛있다는 리뷰가 많아서"].map((reason, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-yellow-500 text-3xl font-black">"</span>
                    <span className="text-xl sm:text-3xl font-black text-white">{reason}</span>
                    <span className="text-yellow-500 text-3xl font-black">"</span>
                  </div>
                ))}
              </div>
              <p className="mt-16 text-2xl sm:text-4xl text-zinc-400 font-black">
                즉, <span className="text-highlight border-b-4 border-yellow-500 pb-1">‘눈에 보이니까’</span> 간 겁니다.
              </p>
            </div>

            <div className="py-24 text-center italic tracking-tighter flex flex-col items-center gap-16 sm:gap-32">
              <p className="text-[1.75rem] sm:text-5xl lg:text-7xl font-black text-white leading-tight break-keep text-balance">
                사람들은 '최고의 실력자'에게 <br /> 지갑을 열지 않습니다.
              </p>
              <p className="text-[2.1rem] sm:text-6xl lg:text-8xl font-black text-highlight leading-tight break-keep drop-shadow-[0_10px_30px_rgba(252,211,77,0.15)] text-balance">
                '가장 먼저 눈에 보이는 실력자'에게 <br /> 지갑을 엽니다.
              </p>
            </div>
          </div>
        </div>

        {/* Analogy: Gangnam Section */}
        <div className="mb-48 text-center pt-24 border-t border-zinc-900 flex flex-col items-center">
          <p className="text-xl sm:text-4xl text-zinc-300 font-bold mb-16 break-keep leading-relaxed text-balance">
            실력 없는 경쟁자는 <br className="sm:hidden" /> 마케팅 잘해서 줄을 서는데, <br />
            진짜 실력 있는 당신은 <br className="sm:hidden" /> 왜 매달 모객 걱정을 해야 할까요? <br /><br />
            이제, 나를 제대로 알려야 할 시간입니다. <br />
            그렇다면 어디서 나를 알려야 할까요?
          </p>
          
          <p className="text-[1.8rem] xs:text-[2.2rem] sm:text-7xl font-black text-white italic mb-32 tracking-tight leading-[1.2] w-full max-w-full overflow-hidden text-center">
            '사람들이 <br /> 많이 모이는 곳'입니다.
          </p>

          <div className="space-y-24 w-full">
             <div className="space-y-8">
               <p className="text-xl sm:text-3xl text-zinc-400 break-keep leading-relaxed font-bold text-balance">
                 강남이 비싼 이유는 사람이 모이기 때문입니다. <br />
                 사람이 모이면 <span className="text-white">돈이 모입니다.</span>
               </p>
               <p className="text-2xl sm:text-5xl font-black text-white leading-tight break-keep text-balance">
                 그런데, 강남보다 더 많은 사람이 모이는 곳에 <br />
                 <span className="relative inline-block mt-6">
                   내 광고판을 세울 수 있다면 어떨까요?
                   <span className="absolute left-0 -bottom-3 w-full h-3 bg-yellow-500 rounded-full"></span>
                 </span>
               </p>
             </div>

             {/* Core Reveal Message */}
             <div className="py-32 flex flex-col items-center">
               <p className="text-[1.8rem] xs:text-[2.1rem] sm:text-7xl lg:text-9xl font-black text-highlight italic tracking-tighter mb-8 drop-shadow-[0_0_50px_rgba(252,211,77,0.3)] break-keep text-balance">
                 그곳은 바로 SNS입니다.
               </p>
               <div className="w-24 h-1 bg-yellow-500 mt-12 opacity-50"></div>
             </div>
          </div>
        </div>

        {/* Conclusion & CTA Section */}
        <div className="text-center mb-32 space-y-20 flex flex-col items-center">
           <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 sm:gap-16 mb-28 w-full">
              {[
                { Icon: Youtube, label: "유튜브", color: "red-600" },
                { Icon: Instagram, label: "인스타그램", color: "pink-500" },
                { Icon: AtSign, label: "스레드", color: "white" },
                { label: "네이버", isNaver: true, color: "green-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-6 group w-full">
                   <div className={`p-8 sm:p-12 bg-zinc-900 rounded-[3rem] border-2 border-zinc-800 group-hover:border-${item.color} group-hover:bg-${item.color}/5 transition-all duration-700 shadow-2xl group-hover:shadow-${item.color}/20 group-hover:-translate-y-4 flex items-center justify-center aspect-square w-full max-w-[200px]`}>
                      {item.isNaver ? (
                        <span className="text-6xl sm:text-8xl font-black text-green-500 leading-none select-none tracking-tighter">N</span>
                      ) : (
                        <item.Icon className={`w-20 h-20 sm:w-28 sm:h-28 text-${item.color}`} />
                      )}
                   </div>
                   <span className="text-xl sm:text-3xl font-black text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
           </div>

           <p className="text-2xl sm:text-5xl text-zinc-300 font-bold break-keep leading-relaxed px-4 text-balance">
             전국민이 SNS에 모입니다. <br />
             그래서 SNS 마케팅은 선택이 아닙니다. <br />
             <span className="text-red-500 text-4xl sm:text-8xl font-black italic underline underline-offset-[12px] decoration-8 inline-block mt-8 tracking-tighter mr-2">'생존 필수 요소'</span> 입니다.
           </p>
           
           <div className="pt-24 border-t border-zinc-900 mt-24 w-full">
             <p className="text-3xl sm:text-6xl font-black text-white mb-8 tracking-tight break-keep">필요한 거 아는데 <br className="sm:hidden" /> 어려우시다고요?</p>
             <p className="text-highlight text-xl sm:text-4xl font-black italic break-keep leading-tight text-balance">걱정하지 마세요. 딱 4주 만에, <br /> SNS 마케팅 기초 공사 끝내드립니다.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemStatement;