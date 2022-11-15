import MainBanner from '@/components/Mentoring/Main/MainBanner';
import MainList from '@/components/Mentoring/Main/MainList';
import { NextPage } from 'next';

const Mentoring: NextPage = () => {
  return (
    <main className="bg-[#f2f2f2]">
      <MainBanner />
      <MainList />
    </main>
  );
};

export default Mentoring;
