import React from 'react';
import { Fingerprint, FolderCheck, Bot, Users, CheckCircle2, Check } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white uppercase leading-tight break-keep text-balance">
            부트캠프 종료시 <br className="hidden sm:block" />
            <span className="text-highlight">다음과 같은 결과물을 얻게 됩니다.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Benefit 1: 설계도 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 p-3 sm:p-4 rounded-2xl mr-4 sm:mr-6 shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <Fingerprint className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-4xl font-black text-white break-keep leading-tight">
                1. 나만의 브랜딩 & 마케팅 설계도
              </h3>
            </div>
            <div className="text-zinc-300 space-y-8 text-lg sm:text-xl leading-relaxed break-keep">
              <p className="font-bold text-white text-xl sm:text-2xl">
                고객이 3초 만에 <span className="text-highlight">‘내가 누구인지’</span> 파악하게 됩니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                  <span><strong className="text-white">브랜딩 설계도 완성:</strong> 고객 페르소나, 브랜드 스토리, 수익화 로드맵을 1주 차에 바로 확정합니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                  <span><strong className="text-white">SNS 자동 세팅:</strong> 결정된 컨셉에 맞춰 인스타그램/스레드/유튜브 계정의 '문패(프로필)'를 전문가답게 세팅합니다.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-highlight font-black text-base xs:text-lg sm:text-2xl italic leading-tight">
                  결과: 잠재 고객이 내 콘텐츠를 ‘놓치면 안 되겠다’ 생각하게 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2: 시스템 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center mb-8">
              <div className="bg-purple-600 p-3 sm:p-4 rounded-2xl mr-4 sm:mr-6 shrink-0 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                <FolderCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-4xl font-black text-white break-keep leading-tight">
                2. 24시간 일하는 마케팅 시스템
              </h3>
            </div>
            <div className="text-zinc-300 space-y-8 text-lg sm:text-xl leading-relaxed break-keep">
              <p className="font-bold text-white text-xl sm:text-2xl mb-4 sm:mb-8">
                만드는 법을 알려드리는 게 아닙니다. <br className="sm:hidden" /> <span className="text-highlight">4주 간 함께 만듭니다.</span>
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { text: "잠재 고객이 모이는 '랜딩페이지' 1개" },
                  { text: "검색을 공략하는 '블로그/유튜브' 콘텐츠 3개" },
                  { text: "전문가 포스가 느껴지는 '유튜브 롱폼 영상' 1개" },
                  { text: "조회수를 돈으로 바꾸는 콘텐츠 경로 설계" },
                  { text: "1일 1개 이상의 스레드 콘텐츠" }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-950/40 p-4 sm:p-5 rounded-2xl border border-zinc-800/50 flex items-center gap-4 group-hover:border-purple-500/30 transition-colors">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0 border border-purple-500/30">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 font-black" />
                    </div>
                    <span className="text-zinc-200 font-bold text-lg sm:text-2xl leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <p className="text-highlight font-black text-base xs:text-lg sm:text-2xl italic leading-tight">
                  결과: 요소들이 완성되는 순간 24시간 나를 발견할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3: AI 도구 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 p-3 sm:p-4 rounded-2xl mr-4 sm:mr-6 shrink-0 shadow-[0_0_20px_rgba(22,163,74,0.3)]">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-4xl font-black text-white break-keep leading-tight">
                3. AI 프롬프트 & 템플릿 (300만 원 가치)
              </h3>
            </div>
            <div className="text-zinc-300 space-y-8 text-lg sm:text-xl leading-relaxed break-keep">
              <p className="font-bold text-white text-xl sm:text-2xl">
                마케터 채용 시 발생하는 <span className="text-red-500 underline decoration-red-500 underline-offset-4">월 300만 원</span>을 아껴드립니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <span><strong className="text-white">복사해서 붙여넣으세요:</strong> 랜딩페이지 문구, 원고, 대응 메시지까지 AI가 써줍니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <span><strong className="text-white">템플릿 제공:</strong> "오늘 뭐 올리지?" 걱정 끝. 마법의 템플릿을 드립니다.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-highlight font-black text-base xs:text-lg sm:text-2xl italic leading-tight">
                  결과: 마케팅 문외한도 AI로 전문 마케터 이상의 글을 쓰게 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4: 동료 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center mb-8">
              <div className="bg-red-600 p-3 sm:p-4 rounded-2xl mr-4 sm:mr-6 shrink-0 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-4xl font-black text-white break-keep leading-tight">
                4. 함께 성장하는 동료 커뮤니티
              </h3>
            </div>
            <div className="text-zinc-300 space-y-8 text-lg sm:text-xl leading-relaxed break-keep">
              <p className="font-bold text-white text-xl sm:text-2xl">
                멀리 가려면 함께 가야 합니다. <br className="sm:hidden" /> 처음 도전해보는 마케팅의 길을 함께 가는 동료들을 만나게 됩니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span><strong className="text-white">6인 1조 소그룹:</strong> 내가 안 하면 팀원에게 피해가 가는 시스템으로 서로를 끌어줍니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span><strong className="text-white">게임처럼 하는 미션:</strong> 매일 점수가 쌓이고, '북토크 식사 미팅권'이 주어집니다.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-highlight font-black text-base xs:text-lg sm:text-2xl italic leading-tight">
                  결과: 혼자 작심삼일 → 함께 작심 10년
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;