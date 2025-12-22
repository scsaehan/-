import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white break-keep">취소 및 환불 정책 안내</h2>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-base sm:text-lg text-zinc-400 space-y-8">
           
           <div className="bg-zinc-800/50 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
             <p className="text-zinc-100 font-bold text-lg sm:text-xl leading-relaxed break-keep">
               "저희 부트캠프는 단순 강의가 아니라 함께 결과물을 만드는 '실전'입니다. <br className="hidden sm:block" />
               끝까지 완주하실 분들만 신중히 신청해 주세요. <br className="hidden sm:block" />
               그만큼 확실한 퀄리티로 보답하겠습니다."
             </p>
           </div>

           <p className="leading-relaxed text-lg break-keep">
              본 프로그램은 기간제 교육 서비스와 '즉시 사용 가능한 디지털 콘텐츠(일간 템플릿, 주간 강의자료)'가 결합된 상품입니다. 
              자료가 발송되는 순간 지식 재산권의 이용 가치가 전달된 것으로 간주하여, 아래와 같이 환불 규정을 적용합니다.
           </p>

           <div>
              <h4 className="font-bold text-white text-xl mb-3 break-keep">1. 기본 원칙</h4>
              <ul className="list-disc list-inside space-y-2 leading-relaxed pl-2 break-keep">
                 <li>본 과정은 '주 단위(Week)'로 서비스가 제공 및 갱신됩니다.</li>
                 <li>매주 월요일 '주간 강의' 또는 매일 아침 '일간 템플릿'이 발송된 시점부터는 해당 주차의 서비스 이용이 개시된 것으로 봅니다.</li>
                 <li>관련 법령에 의거, 총 수업 기간의 1/2이 경과한 시점(3주 차 시작일)부터는 어떠한 경우에도 환불이 불가능합니다.</li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-white text-xl mb-3 break-keep">2. 환불 기준 금액 (총 490,000원 기준)</h4>
              <p className="text-lg pl-2 break-keep">1주 차감 금액: 122,500원</p>
           </div>

           <div>
              <h4 className="font-bold text-white text-xl mb-4 break-keep">3. 상세 환불 일정</h4>
              <div className="overflow-x-auto rounded-xl border border-zinc-700 shadow-sm">
                 <table className="w-full text-left border-collapse min-w-[600px] break-keep">
                    <thead>
                       <tr className="bg-zinc-800 text-white text-lg">
                          <th className="p-5 font-bold w-[35%]">환불 요청 시점</th>
                          <th className="p-5 font-bold w-[30%]">환불 가능액</th>
                          <th className="p-5 font-bold w-[35%]">비고</th>
                       </tr>
                    </thead>
                    <tbody className="text-base divide-y divide-zinc-700 bg-zinc-900/50">
                       <tr className="hover:bg-zinc-800/50 transition-colors">
                          <td className="p-5">
                             <span className="block text-white font-semibold mb-1">개강 전</span>
                             <span className="text-sm text-zinc-500">(~1.5. 월요일 오전 8시 59분)</span>
                          </td>
                          <td className="p-5 text-highlight font-bold">100% 환불 (490,000원)</td>
                          <td className="p-5">전액 환불</td>
                       </tr>
                       <tr className="hover:bg-zinc-800/50 transition-colors">
                          <td className="p-5">
                             <span className="block text-white font-semibold mb-1">1주 차 시작 후 ~ 2주차 시작 전</span>
                             <span className="text-sm text-zinc-500">(1.5. 월요일 오전 9시 ~ 1.12 월요일 오전 8시 59분)</span>
                          </td>
                          <td className="p-5">75% 환불 (367,500원)</td>
                          <td className="p-5">1주 차 분량 사용 간주</td>
                       </tr>
                       <tr className="hover:bg-zinc-800/50 transition-colors">
                          <td className="p-5">
                             <span className="block text-white font-semibold mb-1">2주 차 시작 후 ~ 3주차 시작 전</span>
                             <span className="text-sm text-zinc-500">(1.12. 월요일 오전 9시 ~ 1.19 월요일 오전 8시 59분)</span>
                          </td>
                          <td className="p-5">50% 환불 (245,000원)</td>
                          <td className="p-5">2주 차 분량 사용 간주</td>
                       </tr>
                       <tr className="bg-red-900/10 hover:bg-red-900/20 transition-colors">
                          <td className="p-5">
                             <span className="block text-red-400 font-semibold mb-1">3주 차 시작 후 (환불 불가)</span>
                             <span className="text-sm text-zinc-500">(1.19. 월요일 오전 9시 ~ )</span>
                          </td>
                          <td className="p-5 text-red-500 font-black">환불 불가 (0원)</td>
                          <td className="p-5 text-red-400">총 기간의 1/2 경과<br/>(환불 불가)</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>

           <div>
              <h4 className="font-bold text-red-400 text-xl mb-3 break-keep">4. 유의 사항</h4>
              <div className="bg-red-950/20 p-6 rounded-xl border border-red-900/30">
                 <ul className="list-disc list-inside space-y-3 leading-relaxed text-lg break-keep">
                    <li><strong className="text-white">[중요]</strong> 매일 제공되는 '콘텐츠 템플릿'은 복제가 가능한 디지털 재화입니다. 단 하루치라도 발송이 되었다면 해당 주차의 비용은 공제됩니다. <span className="text-zinc-500 text-base">(예: 1월 6일 화요일 환불 요청 시, 1주 차 비용 전액 차감)</span></li>
                    <li>3주 차가 시작되는 1월 19일 오전 9시부터는 남은 기간과 관계없이 환불이 절대 불가능합니다.</li>
                    <li>소수 조별 활동(6인 1조)이 포함되어 있어, 중도 하차 시 조원들에게 피해가 발생하므로 신중한 신청을 부탁드립니다.</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;