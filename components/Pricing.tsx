import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-black mb-6 uppercase text-white break-keep">선택지는 3가지입니다.</h2>
      </div>

      <div className="flex flex-col gap-8 mb-20">
        {/* Option 1 */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-zinc-400 text-center flex flex-col justify-center opacity-70 hover:opacity-100 transition-all">
          <h3 className="font-bold text-2xl mb-4 break-keep">1. 대행사 고용</h3>
          <div className="text-3xl font-bold text-zinc-300 mb-4">연 2,400만 원</div>
          <p className="text-lg leading-relaxed break-keep">
            월 200만 원 X 12개월<br />
            (성과 보장 없음, 소통 스트레스)
          </p>
        </div>

        {/* Option 2 */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-zinc-400 text-center flex flex-col justify-center opacity-70 hover:opacity-100 transition-all">
          <h3 className="font-bold text-2xl mb-4 break-keep">2. 마케터 채용</h3>
          <div className="text-3xl font-bold text-zinc-300 mb-4">연 3,600만 원</div>
          <p className="text-lg leading-relaxed break-keep">
            월 300만 원 X 12개월<br />
            (4대 보험, 퇴직금 별도, 교육 비용 발생)
          </p>
        </div>

        {/* Option 3 (Hero) */}
        <div className="bg-highlight text-black border-4 border-white p-10 rounded-2xl text-center relative transform shadow-[0_0_30px_rgba(252,211,77,0.3)] z-10 flex flex-col justify-center mt-4">
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-full font-black uppercase tracking-wider shadow-lg text-lg whitespace-nowrap">
            Best Choice
          </div>
          <h3 className="font-black text-3xl mb-4 mt-6 break-keep">3. 디지털 레버리지 부트캠프</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
            <span className="text-5xl sm:text-6xl font-black">490,000원</span>
            <span className="text-2xl font-bold opacity-80">(4주 해결)</span>
          </div>
          
          <p className="text-xl sm:text-2xl font-bold mb-10 leading-relaxed break-keep">
             고등학생 학원비 정도 금액으로,<br />
             평생 갈 ‘나만의 마케팅팀'을 구축하세요.
          </p>

          <button className="w-full bg-black text-white hover:bg-zinc-800 font-black py-6 rounded-xl text-2xl mb-4 transition-colors uppercase border-2 border-black break-keep">
             지금 바로 신청하기
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12">
         <div className="bg-zinc-900/50 p-8 rounded-2xl border border-red-900/50">
            <p className="text-red-500 font-bold mb-4 text-2xl break-keep">⚠ 모집 마감 안내</p>
            <div className="text-zinc-300 text-lg sm:text-xl leading-relaxed space-y-4 break-keep">
               <p>디지털 레버리지 부트캠프는 격월 혹은 분기별 모집 예정입니다.</p>
               <p className="text-red-500 font-black text-2xl decoration-white underline underline-offset-4 decoration-2 break-keep">지금 신청하지 않으시면 최소 2달을 기다리셔야 합니다.</p>
               <p>모집 마감일은 <strong className="text-white">2025. 1. 5.</strong>입니다.</p>
               <p className="text-red-400 font-bold bg-red-950/30 inline-block px-2 py-1 rounded break-keep">부트캠프 가격은 수시로 인상될 수 있습니다. 언제나 지금이 가장 저렴합니다.</p>
            </div>
         </div>

         <div className="text-zinc-300">
            <p className="text-3xl font-black leading-snug text-white break-keep">
               SNS, AI 이제는 선택이 아닙니다. <br className="hidden sm:block" />
               <span className="text-highlight">'생존필수조건'</span>입니다.<br /><br />
               더 미루지 마세요. <br className="hidden sm:block" />
               지금보다 시작하기 좋은 때는 없습니다.
            </p>
         </div>
         
         <div>
            <a
            href="#"
            className="cta-button inline-block text-2xl sm:text-3xl font-black py-8 px-16 rounded-xl shadow-xl w-full sm:w-auto break-keep"
            >
            지금 신청하기
            </a>
         </div>
      </div>
    </section>
  );
};

export default Pricing;