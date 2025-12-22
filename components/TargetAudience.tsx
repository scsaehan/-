import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6 bg-black border-b border-zinc-900">
       <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase text-white break-keep">참가 자격</h2>
          <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-relaxed break-keep">
             아무나 안 받습니다.<br />
             아래 기준에 부합하는 분들만 모십니다.
          </p>
       </div>

      <div className="flex flex-col gap-10">
        {/* Yes */}
        <div className="bg-zinc-900/30 border-2 border-green-600 rounded-2xl p-8 sm:p-10">
          <h3 className="text-3xl font-black mb-8 flex items-center text-green-500 break-keep">
            <Check className="w-10 h-10 mr-4 bg-green-500 text-black rounded-full p-1 shrink-0" /> 환영합니다
          </h3>
          
          <p className="font-bold text-white text-xl sm:text-2xl mb-8 leading-snug break-keep">자신의 이름과 기술을 걸고 비즈니스를 하는 전문가</p>
          
          <div className="space-y-8">
            <div>
               <span className="bg-zinc-800 text-green-400 px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wide">Group A</span>
               <div className="mt-3 text-lg sm:text-xl leading-relaxed break-keep">
                 <strong className="text-white text-xl block mb-3">지식/크리에이티브 전문가</strong>
                 <ul className="list-disc list-inside text-zinc-300 space-y-2 pl-1">
                    <li>세무사, 변호사 등 전문직</li>
                    <li>강사, 전자책/VOD 강의 판매자, 코치, 학원, 상담사, 컨설턴트 등 지식 판매자</li>
                    <li>디자인, 영상, 마케팅, 코딩 등 프리랜서/에이전시</li>
                 </ul>
               </div>
            </div>
            <div>
               <span className="bg-zinc-800 text-green-400 px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wide">Group B</span>
               <div className="mt-3 text-lg sm:text-xl leading-relaxed break-keep">
                 <strong className="text-white text-xl block mb-3">기술 서비스 전문가</strong>
                 <p className="text-zinc-300">
                   프리미엄 청소/세차, 인테리어 필름, 도배/타일, 차량 정비 등 개인의 노하우를 판매하는 서비스업 종사자
                 </p>
               </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-zinc-800">
             <p className="font-bold text-center text-white text-xl sm:text-2xl leading-relaxed break-keep">
                "지식, 노하우 판매자.<br />
                실력은 확실한데, 나를 알리는 방법이 고민인 분들."
             </p>
          </div>
        </div>

        {/* No */}
        <div className="bg-zinc-900/30 border-2 border-red-600 rounded-2xl p-8 sm:p-10">
          <h3 className="text-3xl font-black mb-8 flex items-center text-red-500 break-keep">
            <X className="w-10 h-10 mr-4 bg-red-500 text-black rounded-full p-1 shrink-0" /> 절대 신청하지 마세요
          </h3>
          
          <ul className="space-y-8 text-zinc-300">
            <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">1.</span>
              <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">단순 소매/요식업</strong>
                이 부트캠프는 '전문가 브랜딩'에 특화되어 있습니다.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">2.</span>
               <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">상품이 없는 분</strong>
                팔 것이 없으면 마케팅을 배울 필요가 없습니다. 판매할 상품을 정하고, 나중에 참여하시기 바랍니다.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">3.</span>
               <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">PC/스마트폰 활용이 어려운 분</strong>
                타자, SNS 가입, 어플리케이션 설치 및 이용, AI 도구(Gemini) 회원 가입 및 단순 이용조차 어려운 분은 따라올 수 없습니다.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">4.</span>
               <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">부업/광고수익 희망자</strong>
                애드센스, 외부 광고 수익을 목표로 하는 분은 사양합니다. 우리는 '내 비즈니스'의 매출을 올리는데 집중합니다.
              </span>
            </li>
             <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">5.</span>
               <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">하루 1시간도 여유시간이 안 나오는 사람</strong>
              </span>
            </li>
             <li className="flex items-start">
              <span className="text-red-500 font-bold text-2xl mr-4 mt-0.5">6.</span>
               <span className="text-lg sm:text-xl leading-relaxed break-keep">
                <strong className="text-white text-xl sm:text-2xl block mb-2">실천할 의지 없이 남이 다 해주길 원하는 사람</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;