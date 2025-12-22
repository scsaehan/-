import React from 'react';
import { Calendar, CheckCircle, ArrowDown, Trophy, Medal, Users, RefreshCw } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 uppercase break-keep">
          세부사항 및 커리큘럼 안내
        </h2>

        {/* Curriculum Roadmap */}
        <h3 className="text-3xl sm:text-4xl font-black mb-10 text-center uppercase break-keep">커리큘럼 로드맵</h3>

        <div className="space-y-6 mb-24 max-w-3xl mx-auto">
           <div className="bg-zinc-900 p-6 rounded-xl border-l-8 border-yellow-500">
              <h4 className="font-bold text-white text-xl mb-2 break-keep">🔥 상시 진행</h4>
              <p className="text-zinc-300 text-lg sm:text-xl break-keep">1일 차부터 캠프 종료시까지 <strong className="text-white border-b border-white">스레드(Threads) 1일 1포스팅</strong>은 '숨 쉬듯이' 수행합니다.</p>
           </div>

           <div className="flex flex-col gap-6">
              {[
                { week: "Week 1", title: "브랜딩 + 랜딩페이지 제작", items: ["고도화된 AI 프롬프트를 활용해 ‘브랜딩 청사진’을 완성", "브랜딩 청사진에 기초한 SNS 세팅 및 랜딩페이지 제작"] },
                { week: "Week 2", title: "SEO 땅따먹기 (검색어 장악)", items: ["검색 상위노출 장악하는 실전 노하우 방출", "AI 활용 SEO 공략 콘텐츠 3개 생산"] },
                { week: "Week 3", title: "트래픽 & 확산", items: ["스레드, 유튜브를 연계하여 트래픽을 모으는 전술", "조회수/전환 두 마리 토끼를 잡는 콘텐츠 제작 실습"] },
                { week: "Week 4", title: "시스템화 & 확장 전략", items: ["지속가능한 AI, 마케팅 시스템 구축", "향후 비즈니스 확장을 위한 CRM 및 재구매 전략"] }
              ].map((w, i) => (
                <div key={i} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
                   <div className="text-highlight font-black text-2xl mb-3">{w.week}</div>
                   <h4 className="text-2xl font-bold text-white mb-4 break-keep">{w.title}</h4>
                   <ul className="space-y-4 text-zinc-300 text-lg sm:text-xl">
                      {w.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className="w-6 h-6 mr-3 mt-0.5 text-zinc-500 shrink-0"/> 
                          <span className="break-keep">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>

        {/* Operation Details */}
        <h3 className="text-3xl sm:text-4xl font-black mb-10 text-center border-t border-zinc-800 pt-16 uppercase break-keep">운영 상세 안내</h3>
        
        <div className="flex flex-col gap-8 mb-20">
          {/* 1. Period */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight flex items-center break-keep">
                <Calendar className="w-8 h-8 mr-3 shrink-0" /> 1기 운영 기간
             </h3>
             <p className="text-xl sm:text-2xl font-bold break-keep">2025. 1. 5.(월)~31(토)</p>
          </div>

          {/* 2. Weekly Mission */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">주간 미션 및 핵심 강의</h3>
             <div className="text-zinc-300 text-lg sm:text-xl leading-relaxed space-y-6 break-keep">
               <p>
                 각 주 커리큘럼에 맞는 강의와 미션이 <span className="text-white font-bold">매주 월요일 오전 9시</span>에 <span className="text-highlight font-bold">‘공지 단톡방’</span>을 통해 공지됩니다.
               </p>
               <p className="bg-black/30 p-5 rounded-xl border-l-4 border-zinc-700">
                 각자 일정 되는대로 미션을 수행한 후, <span className="text-white font-bold">일요일까지 ‘조별 단톡방’에 인증</span>하시면 미션이 완료됩니다.
               </p>
             </div>
          </div>
          
          {/* 3. Daily Mission (Restored Content) */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">일일 미션</h3>
             <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep mb-8">
               <strong className="text-white block mb-2 text-xl sm:text-2xl">1일 1스레드 포스팅</strong>
               매일 ‘터지는 스레드 콘텐츠 템플릿’을 제공합니다. 회원은 해당 템플릿을 본인의 비즈니스에 맞는 내용으로 채우기만 하면 됩니다.
             </p>

             <div className="flex flex-col gap-4 mt-6">
                {/* Card 1: Template */}
                <div className="bg-black/40 border border-zinc-700 rounded-xl overflow-hidden flex flex-col">
                   <div className="bg-zinc-800 px-5 py-3 border-b border-zinc-700 font-bold text-white text-lg">
                     템플릿 (Neutral Tone Ver.)
                   </div>
                   <div className="p-6 text-zinc-300 space-y-4 text-base leading-relaxed">
                      <p>
                        <span className="text-yellow-400 font-bold">" [고객이 들었던 부정적인 말/거절/무시 인용] "</span>
                      </p>
                      <p>
                        상담 오신 고객님이 <span className="text-yellow-400 font-bold">[경쟁사/지인/이전 업체]</span> 에게 들었던 이야기라고 합니다. 전문가로서 이 이야기를 듣고 <span className="text-yellow-400 font-bold">[전문가적 반응: 오기/안타까움/책임감]</span> 을 느꼈습니다.
                      </p>
                      <p>
                        결국 저희는 <span className="text-yellow-400 font-bold">[불가능해 보였던 제약 조건]</span> 임에도 불구하고, <span className="text-yellow-400 font-bold">[내가 이뤄낸 구체적 성과/수치]</span> 로 <span className="text-yellow-400 font-bold">[결과 강조 부사]</span> 증명해냈습니다.
                      </p>
                      <p>
                        혹시 <span className="text-yellow-400 font-bold">[핵심 니즈]</span> (을)를 원하지만 <span className="text-yellow-400 font-bold">[고객의 망설임 포인트]</span> 때문에 고민이신가요?
                      </p>
                      <p>
                         지금 <span className="text-yellow-400 font-bold">[브랜드명]</span> 에서 제공하는 <span className="text-yellow-400 font-bold">[진입장벽 낮은 혜택]</span> 을 먼저 경험해보세요.
                      </p>
                   </div>
                </div>

                <div className="flex flex-col items-center justify-center py-2 text-zinc-400">
                    <ArrowDown className="w-8 h-8 text-yellow-500 animate-bounce" />
                </div>

                {/* Card 2: Example */}
                <div className="bg-black/40 border border-zinc-700 rounded-xl overflow-hidden flex flex-col border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                   <div className="bg-zinc-800 px-5 py-3 border-b border-zinc-700 font-bold text-white text-lg flex items-center justify-between">
                     <span>적용 예시: 입시 컨설팅/교육</span>
                     <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded font-black">AFTER</span>
                   </div>
                   <div className="flex flex-col sm:flex-row h-full">
                     <div className="p-6 text-zinc-300 space-y-4 text-base leading-relaxed flex-1">
                        <p>
                          <span className="text-yellow-400 font-bold">" 그 내신 등급으로는 인서울 절대 불가능해요. "</span>
                        </p>
                        <p>
                          학부모님이 <span className="text-yellow-400 font-bold">다른 대형 입시 학원</span> 에서 듣고 오신 말입니다. 학생의 잠재력을 점수로만 판단하는 게 <span className="text-yellow-400 font-bold">너무 안타깝고 오기가 생겼습니다.</span>
                        </p>
                        <p>
                          모두가 포기하라고 할 때, 저희는 <span className="text-yellow-400 font-bold">4등급이라는 불리한 내신</span> 조건 속에서도 <span className="text-yellow-400 font-bold">생기부 전략으로 서울 상위권 대학 2곳 합격을</span> <span className="text-yellow-400 font-bold">보란 듯이</span> 만들어 냈습니다.
                        </p>
                        <p>
                          <span className="text-yellow-400 font-bold">대학 합격</span> 을 간절히 원하지만 <span className="text-yellow-400 font-bold">부족한 성적</span> 때문에 벌써 포기하려 하시나요?
                        </p>
                        <p>
                           지금 <span className="text-yellow-400 font-bold">스카이멘토</span> 에서 <span className="text-yellow-400 font-bold">1:1 생기부 무료 진단</span> 을 받아보고 가능성을 확인하세요.
                        </p>
                     </div>
                     <div className="w-full sm:w-1/3 min-h-[200px] sm:min-h-0 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="공부하는 학생" 
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 4. Scoring System */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 overflow-hidden">
             <h3 className="text-2xl font-bold mb-4 text-highlight break-keep">채점 시스템 안내</h3>
             <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed break-keep mb-10">
               일일 및 주간 미션 수행에 따른 개인 점수가 채점됩니다. 개인 점수는 <span className="text-white font-bold">조별 점수로 합산</span>됩니다. 이 점수는 실시간으로 <span className="text-white font-bold">스코어보드와 연동</span>되어 상시 확인이 가능합니다.
             </p>

             {/* Scoreboard Mockup UI */}
             <div className="bg-[#0f1117] rounded-3xl p-4 sm:p-8 border border-zinc-800 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-lg sm:text-xl tracking-tight">부트캠프 스코어보드</span>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 bg-zinc-800/50 px-3 py-1.5 rounded-lg">
                    <RefreshCw className="w-3 h-3" /> 새로고침
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Team Ranking */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Medal className="w-5 h-5 text-yellow-500" />
                      <span className="font-black text-lg">팀 순위 경쟁</span>
                    </div>
                    
                    {/* Rank 1 Card */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/50 overflow-hidden">
                       <div className="absolute top-4 right-8 text-yellow-500/20">
                         <Trophy className="w-32 h-32" />
                       </div>
                       <div className="relative z-10 text-center">
                         <p className="text-yellow-500 font-black mb-2 uppercase tracking-widest">현재 1위</p>
                         <h4 className="text-7xl font-black text-white mb-6">1조</h4>
                         <div className="flex justify-center gap-4">
                            <div className="bg-black/40 px-6 py-3 rounded-2xl border border-white/5">
                               <p className="text-xs text-zinc-500 mb-1">팀 평균 점수</p>
                               <p className="text-2xl font-black text-yellow-500">957</p>
                            </div>
                            <div className="bg-black/40 px-6 py-3 rounded-2xl border border-white/5">
                               <p className="text-xs text-zinc-500 mb-1">최고 기여자</p>
                               <p className="text-2xl font-black text-white">박*현</p>
                            </div>
                         </div>
                       </div>
                    </div>

                    {/* Rank 2, 3 List */}
                    <div className="space-y-3">
                       <div className="flex items-center justify-between p-5 bg-zinc-800/30 rounded-2xl border border-zinc-800">
                          <div className="flex items-center gap-4">
                             <span className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full font-black text-zinc-500">2</span>
                             <div>
                                <p className="font-bold text-lg">2조</p>
                                <p className="text-xs text-zinc-500">ACE: 정*윤</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-xl font-black text-zinc-300">907</p>
                             <p className="text-[10px] text-zinc-600 uppercase">평균 점수</p>
                          </div>
                       </div>
                       <div className="flex items-center justify-between p-5 bg-zinc-800/30 rounded-2xl border border-zinc-800">
                          <div className="flex items-center gap-4">
                             <span className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full font-black text-zinc-500">3</span>
                             <div>
                                <p className="font-bold text-lg">4조</p>
                                <p className="text-xs text-zinc-500">ACE: 한*인</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-xl font-black text-zinc-300">785</p>
                             <p className="text-[10px] text-zinc-600 uppercase">평균 점수</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Right: Personal MVP & Hall of Fame */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 relative overflow-hidden h-full flex flex-col justify-center">
                       <div className="text-center">
                         <div className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-black mb-4 border border-purple-500/20 uppercase tracking-widest">현재 전체 MVP</div>
                         <h4 className="text-5xl font-black text-white mb-2">한*인</h4>
                         <p className="text-purple-400 font-bold mb-8">4조</p>
                         <div className="bg-black/40 p-6 rounded-2xl border border-white/5 inline-block min-w-[180px]">
                            <p className="text-xs text-zinc-500 mb-1 uppercase tracking-tighter">누적 총점</p>
                            <p className="text-4xl font-black text-white">1,080</p>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
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
        
        <div className="mt-16 text-center">
            <a href="#main-pricing-card" className="cta-button inline-block text-xl sm:text-2xl font-black py-6 px-12 rounded-xl w-full sm:w-auto break-keep">
                지금 신청하기
            </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;