import { StarIcon } from '@heroicons/react/24/outline';

export default function Order() {
  return (
    <div className="fixed right-40 top-40 z-10 w-fit">
      <section className="w-80 rounded-xl border border-[rgba(0,0,0,0.1)] bg-white px-6 py-8 text-[#707070] shadow-xl">
        <h3 className="text-xl font-bold">예비 IT 개발자를 위한 취업 준비 가이드 : 자기소개서 특강</h3>
        <div className="space-y-1 py-2 text-sm">
          <p>현직자와 함께하는 IT개발분야 자기소개서 특강</p>
          <p>1회 멘토링 : 1시간 30분 / 55,000원 / 3명</p>
        </div>
        <div className="flex items-stretch py-4">
          <div className="h-14 w-14 rounded-full bg-[#989898]"></div>
          <div className="flex flex-col items-start justify-center pl-3">
            <p>신기용</p>
            <p className="text-sm">7년차 / 백엔드 개발</p>
          </div>
        </div>
        <div className="rounded-md bg-[#f2f2f2] p-4 text-sm">
          <p>현) 카카오뱅크 개발자</p>
          <p>전) LINE+ 신입 공채 합격 및 입사</p>
          <p>전) 삼성전자 무선사업부 신입 공채 합격</p>
        </div>
      </section>
      <nav className="mt-6 flex h-fit items-stretch justify-between">
        <button className="h-20 rounded-xl bg-[#a272de] px-10 text-3xl text-white">신청하기</button>
        <button className="flex h-20 w-20 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.1)] bg-white shadow-md">
          <StarIcon className="h-6 w-6"></StarIcon>
        </button>
      </nav>
    </div>
  );
}