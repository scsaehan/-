import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 uppercase break-keep">
          세부사항 및 커리큘럼 안내
        </h2>

        {/* Operation Details - Stacked */}
        <div className="flex flex-col gap-8 mb-20">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight flex items-center break-keep">
                <Calendar className="w-8 h-8 mr-3 shrink-0" /> 1기 운영 기간
             </h3>
             <p className="text-xl sm:text-2xl font-bold break-keep">2025. 1. 5.(월)~31(토)</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">운영방식</h3>
             <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep">
               <strong className="text-white block mb-2 text-xl sm:text-2xl">매주 월요일 주간 강의 + 주간 미션 부여</strong>
               불필요한 이론 다 빼고, ‘당장 해야할 일’이 뭔지, ‘그걸 왜, 어떻게 해야하는지’만 교육합니다. 회원은 한 주간 주간 미션을 수행해야 합니다. 주간 미션은 즉시 결과물을 산출할 수 있는 실천 위주 과제가 주어집니다.
             </p>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">일일 미션</h3>
             <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep">
               <strong className="text-white block mb-2 text-xl sm:text-2xl">1일 1스레드 포스팅</strong>
               매일 ‘터지는 스레드 콘텐츠 템플릿’을 제공합니다. 회원은 해당 템플릿을 본인의 비즈니스에 맞는 내용으로 채우기만 하면 됩니다.
             </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">전체 공지방 및 소그룹 톡방</h3>
             <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep">
               전체 공지방을 통해 강의, 미션, 동기부여 메시지가 발송됩니다. 공지방은 '소음 없는 톡방'으로 운영됩니다.<br /><br />
               소그룹 톡방은 6명으로 이루어지며, 자유로운 대화와 격려, 피드백이 오갑니다.
             </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">보상 및 마무리</h3>
             <div className="space-y-8">
                <div>
                   <strong className="block text-white text-xl sm:text-2xl mb-2 break-keep">조별 점수 측정 및 시상</strong>
                   <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep">
                     개인/조별 과제 수행도를 채점하여, 우수 소그룹 및 개인 MVP를 선정합니다. 
                     이 분들에겐 <span className="text-yellow-400 font-bold bg-yellow-400/10 px-1 rounded inline-block">38만 유튜버 '북토크'와의 식사 및 비즈니스 피드백권</span>이 제공됩니다.
                   </p>
                </div>
                <div>
                   <strong className="block text-white text-xl sm:text-2xl mb-2 break-keep">마무리 라이브 (1.31 토 10:00)</strong>
                   <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep">
                     시상, 피드백, 특별 상품 수여 등이 진행됩니다.
                   </p>
                </div>
             </div>
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black mb-10 text-center border-t border-zinc-800 pt-16 uppercase break-keep">커리큘럼 로드맵</h3>

        <div className="space-y-6">
           <div className="bg-zinc-900 p-6 rounded-xl border-l-8 border-yellow-500">
              <h4 className="font-bold text-white text-xl mb-2 break-keep">🔥 상시 진행</h4>
              <p className="text-zinc-300 text-lg sm:text-xl break-keep">1일 차부터 캠프 종료시까지 <strong className="text-white border-b border-white">스레드(Threads) 1일 1포스팅</strong>은 '숨 쉬듯이' 수행합니다.</p>
           </div>

           {/* Weekly - Single Column Stack */}
           <div className="flex flex-col gap-6">
              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                 <div className="text-highlight font-black text-2xl mb-3">Week 1</div>
                 <h4 className="text-2xl font-bold text-white mb-4 break-keep">브랜딩 + 랜딩페이지 제작</h4>
                 <ul className="space-y-4 text-zinc-300 text-lg sm:text-xl">
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">고도화된 AI 프롬프트를 활용해 ‘브랜딩 청사진’을 완성</span></li>
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">브랜딩 청사진에 기초한 랜딩페이지 설계 및 공개</span></li>
                 </ul>
              </div>

              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                 <div className="text-highlight font-black text-2xl mb-3">Week 2</div>
                 <h4 className="text-2xl font-bold text-white mb-4 break-keep">SEO 땅따먹기 (검색어 장악)</h4>
                 <ul className="space-y-4 text-zinc-300 text-lg sm:text-xl">
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">잠재 고객이 검색할 만한 키워드 추출</span></li>
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">AI로 블로그 롱폼 칼럼 및 유튜브 대본 3개 이상 생산</span></li>
                 </ul>
              </div>

              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                 <div className="text-highlight font-black text-2xl mb-3">Week 3</div>
                 <h4 className="text-2xl font-bold text-white mb-4 break-keep">트래픽 & 확산</h4>
                 <ul className="space-y-4 text-zinc-300 text-lg sm:text-xl">
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">스레드, 유튜브를 연계하여 트래픽을 모으는 전술</span></li>
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">조회수/전환 두 마리 토끼를 잡는 콘텐츠 제작 실습</span></li>
                 </ul>
              </div>

              <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                 <div className="text-highlight font-black text-2xl mb-3">Week 4</div>
                 <h4 className="text-2xl font-bold text-white mb-4 break-keep">시스템화 & 자동화</h4>
                 <ul className="space-y-4 text-zinc-300 text-lg sm:text-xl">
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">지속가능한 AI, 마케팅 시스템 구축</span></li>
                    <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> <span className="break-keep">향후 비즈니스 확장을 위한 CRM 및 재구매 전략</span></li>
                 </ul>
              </div>
           </div>
        </div>
        
        <div className="mt-16 text-center">
            <a href="#pricing" className="cta-button inline-block text-xl sm:text-2xl font-black py-6 px-12 rounded-xl w-full sm:w-auto break-keep">
                지금 신청하기
            </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;