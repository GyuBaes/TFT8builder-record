import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const Home = () => {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="">
      <nav className="flex items-center justify-center py-4 bg-white dark:bg-[#222222] dark:text-zinc-200 shadow-sm">
        <Link href={`/`}>
          <span className="text-7xl font-gangwonEdu">TFT</span>
          <span className="-ml-1 text-6xl font-netmarbleB">snap</span>
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center py-10">
        <span className="text-[#767676]">ㅡ</span>
        <div className="flex flex-col p-7">
          <span className="text-[#767676] font-netmarbleB">
            TFTSNAP은 최근 전적검색과 캡쳐
          </span>
          <span className="text-[#767676] font-netmarbleB">
            팀 빌드툴을 제공하는 사이트입니다.
          </span>
        </div>
        <span className="text-[#767676]">ㅡ</span>
      </div>
      <div className="flex justify-center pt-5">
        <div className="h-[600px] w-[600px] flex rounded rounded-r-none justify-center dark:border-[#222222] items-center border">
          <div className="relative">
            <Image
              className="rounded rounded-l-none "
              alt="teambuilder"
              src={`/../public/images/mainImage.png`}
              height={600}
              width={600}
            />

            <input
              type="text"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 text-[#767676] border rounded-lg focus:outline-none bg-gray-50"
              placeholder="소환사 검색"
              value={username}
              onChange={handleChange}
            />
            <Link
              className="absolute transform -translate-y-1/2 top-1/2 left-[370px]"
              href={`/${username}`}
            >
              <FaSearch />
            </Link>
          </div>
        </div>
        <Link href={`/teambuilder`}>
          <div className="relative">
            <Image
              className="rounded rounded-l-none "
              alt="teambuilder"
              src={`/../public/images/mainImage2.png`}
              height={600}
              width={600}
            />
            <span className="absolute font-ibm font-bold text-zinc-200 dark:text-zinc-300 text-[40px] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              팀빌드
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
