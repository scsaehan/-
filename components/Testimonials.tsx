import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-lg sm:text-2xl font-medium mb-4 leading-tight text-zinc-400 break-keep">디지털 레버리지 부트캠프는 이번이 최초 런칭입니다.</h2>
           <p className="text-white text-2xl sm:text-3xl font-black leading-relaxed break-keep">
             그러나, <span className="text-highlight">부트캠프 교육 내용은 처음이 아닙니다.</span> <br />
             동일하게 ‘사업자’를 대상으로 진행했던 교육 수강생들의<br />
             이야기를 그대로 전해드립니다.
           </p>
        </div>
        
        {/* KakaoTalk Style Container */}
        <div className="bg-[#bacee0] p-4 sm:p-8 rounded-3xl mx-auto shadow-inner w-full flex flex-col gap-8">
           
           {/* Review 1: 오다겸 (Ryan) */}
           <div className="flex flex-col items-start animate-fade-in">
              <div className="flex items-center mb-2 ml-1">
                 <img 
                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/character/X190710165939_11.png" 
                    alt="Ryan" 
                    className="w-10 h-10 rounded-[14px] object-cover mr-2 shadow-sm bg-white"
                 />
                 <span className="text-sm text-zinc-600 font-bold">오*겸 회원님</span>
              </div>
              <div className="bg-white text-black p-4 rounded-xl rounded-tl-none shadow-sm text-lg leading-relaxed break-keep relative max-w-[95%]">
                 <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">마케팅의 이해도가 확실히 올라갔습니다.</span> 구매여정에 대해서 사람들에게 설명도 할수있게 되었습니다.
                 <br /><br />
                 프롬프트를 주셔서 좋았습니다. 다른사람들도 이 걸로 과제 수행도가 많이 올라갔습니다.
                 <br /><br />
                 북토크님의 1인 기업 운영하면서 알게된 노하우를 알게되어 좋습니다. 프롬프트는 어떻게 만드는지, 어떤 메세지를 어떻게 보내는지, 실제로 쓰고있는 것을 알려주셔서 엄청 도움됐습니다.
              </div>
           </div>

           {/* Review 2: 박대근 (Apeach) */}
           <div className="flex flex-col items-start animate-fade-in delay-100">
              <div className="flex items-center mb-2 ml-1">
                 <img 
                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/character/X190710170054_13.png" 
                    alt="Apeach" 
                    className="w-10 h-10 rounded-[14px] object-cover mr-2 shadow-sm bg-white"
                 />
                 <span className="text-sm text-zinc-600 font-bold">박*근 회원님</span>
              </div>
              <div className="bg-white text-black p-4 rounded-xl rounded-tl-none shadow-sm text-lg leading-relaxed break-keep relative max-w-[95%]">
                 <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">5년째 준비만하다가 강의 신청을 계기로 드디어 유튜브 스레드 인스타 블러그 틱톡까지 시작하게 되었습니다.</span> 이제 멈춤없이 시작해보려고합니다.
                 <br /><br />
                 성과로는 1, 마켓팅에 대한 중요성을 더욱깨닫고 외부마켓팅을시작하게 되었으며 
                 <br />
                 2. 어디서 매출이 상승햇는지는 성과분석을 해보지 않앗지만 <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">25년도매출을 강의 중간이 9월에 달성하게 되었습니다.</span>
                 <br />
                 3. 고객db도 시작한지 얼마안되지만 2천명의 채널가입자도 확보하였고 제품에 정품등록을 의무화해 12월부터 db는 기하급수적으로 늘것으로 기대합니다
                 <br />
                 4. 마켓팅을 배우기에는 늦은 나이이지만 생존에 필수불가결한 행동으로믿고 새롭게 시작하는 제품군에 보다 많은에너지를 쏟아볼생각입니다.
              </div>
           </div>

           {/* Review 3: 남형석 (Muzi) */}
           <div className="flex flex-col items-start animate-fade-in delay-200">
              <div className="flex items-center mb-2 ml-1">
                 <img 
                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/character/X190710170205_14.png" 
                    alt="Muzi" 
                    className="w-10 h-10 rounded-[14px] object-cover mr-2 shadow-sm bg-white"
                 />
                 <span className="text-sm text-zinc-600 font-bold">남*석 회원님</span>
              </div>
              <div className="bg-white text-black p-4 rounded-xl rounded-tl-none shadow-sm text-lg leading-relaxed break-keep relative max-w-[95%]">
                 SNS마케팅 활용에 대한 전반적 이해, <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">블로그방문 약 2~30% 증가</span>, <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">문의상담연락 20%정도 증가</span>
              </div>
           </div>

           {/* Review 4: 박아빈 (Frodo) */}
           <div className="flex flex-col items-start animate-fade-in delay-300">
              <div className="flex items-center mb-2 ml-1">
                 <img 
                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/character/X190710170347_16.png" 
                    alt="Frodo" 
                    className="w-10 h-10 rounded-[14px] object-cover mr-2 shadow-sm bg-white"
                 />
                 <span className="text-sm text-zinc-600 font-bold">박*빈 회원님</span>
              </div>
              <div className="bg-white text-black p-4 rounded-xl rounded-tl-none shadow-sm text-lg leading-relaxed break-keep relative max-w-[95%]">
                 <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">요즘 시대에 딱맞는 sns 마케팅</span>을 고민 만하고 적당히 하는 척 만 하고 있었는데, <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">진짜 "시작"을 하게 되었고 진짜 "하는" 회사가 될수 있었습니다.</span>
                 <br />
                 {">>"}요즘 트렌드의 정확한 파악 + 투입
              </div>
           </div>

           {/* Review 5: 박봉수 (Neo) */}
           <div className="flex flex-col items-start animate-fade-in delay-300">
              <div className="flex items-center mb-2 ml-1">
                 <img 
                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/character/X190710170438_17.png" 
                    alt="Neo" 
                    className="w-10 h-10 rounded-[14px] object-cover mr-2 shadow-sm bg-white"
                 />
                 <span className="text-sm text-zinc-600 font-bold">박*수 회원님</span>
              </div>
              <div className="bg-white text-black p-4 rounded-xl rounded-tl-none shadow-sm text-lg leading-relaxed break-keep relative max-w-[95%]">
                 가장 크게 얻은 성과는 매출 상승, 그리고 동시에 매출의 안정성이 확보된 점입니다. 오프라인 영업만으로는 더 이상 안된다는 한계를 느껴 교육에 참가했는데, 그에 대한 <span className="bg-yellow-200 font-black text-xl px-1 box-decoration-clone">확실한 보상을 받게 되었습니다.</span>
              </div>
           </div>

        </div>

        <p className="mt-8 text-zinc-500 text-base text-center break-keep">
          * 회원들이 실제 제출한 후기를 내용 수정 없이 디자인만 카카오톡 형식으로 재편집한 이미지입니다.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;