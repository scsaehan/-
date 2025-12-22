import React from 'react';
import { ShoppingBag, Scale, Calculator, Car, Cpu } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: "최*형 회원님",
      niche: "아크릴 키링 판매",
      impact: "글 1편 → 500만 원 이상 추가 매출",
      desc: "단 1편으로 달성",
      icon: <ShoppingBag className="w-8 h-8 text-green-500" />
    },
    {
      name: "김*현 회원님",
      niche: "법무법인 마케팅",
      impact: "고객 문의 최대 7배 증가",
      desc: "'검색어 선정', '리브랜딩' 작업만으로 나온 성과",
      icon: <Scale className="w-8 h-8 text-blue-500" />
    },
    {
      name: "김*삼 회원님",
      niche: "세무사",
      impact: "추정 연 매출 3,000만 원 증가",
      desc: "스레드 팔로워 1,000명 만으로 매출 발생",
      icon: <Calculator className="w-8 h-8 text-purple-500" />
    },
    {
      name: "박*수 회원님",
      niche: "자동차 외관수리",
      impact: "매출 20% ↑, 작업시간 20% ↓",
      desc: "고단가 작업 의뢰 비중 대폭 증가",
      icon: <Car className="w-8 h-8 text-yellow-500" />
    },
    {
      name: "박*빈 회원님",
      niche: "소프트웨어",
      impact: "신규 가입자 300% 증가",
      desc: "2달 연속 폭발적인 성장세 기록",
      icon: <Cpu className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <section className="py-24 bg-black border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 break-keep">
            보다 자세한 성과 사례 중 <br className="sm:hidden" /> 일부는 다음과 같습니다.
          </h2>
          <div className="w-20 h-1.5 bg-highlight mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                  {story.icon}
                </div>
                
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 font-bold text-sm uppercase tracking-wider">{story.niche}</span>
                    <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span>
                    <span className="text-zinc-400 font-bold text-sm">{story.name}</span>
                  </div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-white break-keep leading-tight">
                    {story.impact}
                  </h3>
                  <p className="text-zinc-500 text-base sm:text-lg break-keep font-medium leading-snug">
                    {story.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl text-center">
            <p className="text-zinc-500 text-sm sm:text-base font-medium break-keep">
                * 위 사례들은 실제 교육 과정에서 발생한 성과 데이터의 일부를 발췌한 것입니다. <br className="hidden sm:block" />
                성과는 개인의 실천 의지와 시장 환경에 따라 다를 수 있습니다.
            </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;