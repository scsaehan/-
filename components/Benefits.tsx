import React from 'react';
import { Fingerprint, FolderCheck, Bot, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white uppercase leading-tight break-keep text-balance">
            디지털 레버리지 부트캠프에선 <br className="hidden sm:block" />
            <span className="text-highlight">이런 것들을 얻으실 수 있습니다.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Benefit 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-4 rounded-xl mr-5 shrink-0">
                <Fingerprint className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white break-keep">#1: 퍼스널 브랜딩 청사진 및 SNS 계정 세팅</h3>
            </div>
            <div className="text-zinc-300 space-y-6 text-lg sm:text-xl leading-relaxed break-keep">
              <p>
                <strong className="text-white text-2xl block mb-2">‘내가 누구인가’를 명확히 해야 합니다.</strong>
                그래야 고객이 이해하고 돈을 낼 수 있습니다.
              </p>
              <p>
                고객 페르소나, 브랜드 스토리, SNS 콘텐츠 홍보 전략, 수익화 로드맵까지 망라하는 
                브랜딩 청사진을 ‘첫 주’에 함께 완성합니다.
              </p>
              <p>
                그리고, 브랜딩 청사진에 맞게 SNS 계정을 함께 세팅합니다.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-4 rounded-xl mr-5 shrink-0">
                <FolderCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white break-keep">#2: 확실한 결과물</h3>
            </div>
            <div className="text-zinc-300 space-y-6 text-lg sm:text-xl leading-relaxed break-keep">
              <p>
                "잘 배웠다, 앞으로 할 수 있겠다."는 의미 없습니다.<br />
                <strong className="text-white text-2xl block mb-2 mt-2">"다 했다" 상태로 만들어 드립니다.</strong>
                4주 뒤 당신의 손에는 다음 결과물이 쥐어져 있습니다.
              </p>
              <ul className="list-disc list-inside text-white space-y-3 pl-2 font-medium">
                <li>랜딩페이지 최소 1개</li>
                <li>SNS 3종 세트(스레드/블로그/유튜브) 기초 세팅 완료</li>
                <li>SEO 최적화 콘텐츠 최소 3개(블로그 혹은 유튜브)</li>
                <li>유튜브 롱폼 영상 최소 1개</li>
                <li>1일 1개 이상의 스레드 콘텐츠</li>
              </ul>
              <p className="italic border-l-4 border-yellow-500 pl-6 py-2 text-zinc-400 bg-zinc-950/50 rounded-r-lg">
                이 콘텐츠들은 주 7일, 24시간 잠 안자고, 월급도 안 받고 고객을 모아옵니다.
              </p>
              <p className="text-base text-zinc-500 mt-2">
                ※ 주간, 일간 미션을 모두 수행해야 얻어갈 수 있는 결과물입니다.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-4 rounded-xl mr-5 shrink-0">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white break-keep">#3: 월 300만 원 아껴주는 디지털 자산</h3>
            </div>
            <div className="text-zinc-300 space-y-6 text-lg sm:text-xl leading-relaxed break-keep">
              <p>
                SNS 마케팅에 돈 쓰지 마세요.<br />
                마케터 채용시 발생할 <strong className="text-white border-b-2 border-yellow-500">월 300만 원 이상 비용을 아껴드립니다.</strong>
              </p>
              <p>
                랜딩페이지 제작, 롱폼/숏폼 원고 생성, CRM 메시지 생성 등, 
                마케터가 해야할 일 다 해주는 AI 프롬프트를 드립니다.
              </p>
              <p>
                ‘콘텐츠 어떻게 만들지?’도 걱정하지 마세요.<br />
                검증된 콘텐츠 형식에 ‘내 이야기’만 채워넣으면 되는 
                콘텐츠 템플릿을 제공해드립니다.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-4 rounded-xl mr-5 shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white break-keep">#4: 실패가 불가능한 환경</h3>
            </div>
            <div className="text-zinc-300 space-y-6 text-lg sm:text-xl leading-relaxed break-keep">
              <p>
                의지력을 믿지 마세요.<br />
                인간은 환경의 지배를 받습니다.<br />
                우리는 <strong className="text-white text-2xl block mt-2">'할 수밖에 없는 환경’</strong>을 제공합니다.
              </p>
              <ul className="list-disc list-inside text-white ml-2">
                <li>
                  <strong>6인 1조 소그룹 시스템을 운영합니다.</strong><br />
                  <span className="text-base sm:text-lg text-zinc-400 pl-6 block mt-2">내가 안 하면 남에게 피해가 가는, 눈치보여서라도 할 수 밖에 없는 환경을 만들어드립니다.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;