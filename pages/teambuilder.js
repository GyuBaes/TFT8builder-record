import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { reset } from '../redux/counterSlice';
import ChampionsList from './components/teambuilder/ChampionsList';
import SelectedChampionsList from './components/teambuilder/SelectedChampionsList';
import ActiveSynergyList from './components/teambuilder/ActiveSynergyList';
import ChampionsSynergyList from './components/teambuilder/ChampionSynergyList';

const Teambuilder = () => {
  const dispatch = useDispatch();
  const selectedChampionsListLength = useSelector(
    (state) => state.counter.selectedList,
  ).length;
  const [username, setUsername] = useState('');
  const [dpTooltip, setDpTooltip] = useState(false);
  const [dpSynergyList, setDpSynergyList] = useState(false);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDpTooltip = () => {
    setDpTooltip(!dpTooltip);
  };
  const handleDpSynergyList = () => {
    setDpSynergyList(!dpSynergyList);
  };

  return (
    <div className="flex flex-col justify-center">
      <nav className="flex items-center justify-center py-4 bg-white dark:bg-[#222222] dark:text-zinc-200 shadow-sm">
        <Link href={'/'}>
          <span className="text-7xl font-gangwonEdu">TFT</span>
          <span className="-ml-1 text-6xl font-netmarbleB">builder</span>
        </Link>
      </nav>
      <div className="flex justify-center mt-12">
        <div className="relative">
          <input
            type="text"
            className="p-3 text-[#767676] dark:text-zinc-200 dark:bg-[#222222] dark:border-[#121212]  w-[300px] h-[50px] border rounded-sm shadow-sm focus:outline-none bg-gray-50"
            placeholder="소환사 검색"
            value={username}
            onChange={handleChange}
          />
          <Link className="absolute top-4 right-4" href={`/${username}`}>
            <FaSearch />
          </Link>
        </div>
        <button
          className="w-[300px] font-ibm bg-white dark:bg-[#222222] dark:border-[#121212] dark:text-zinc-300 rounded-sm border shadow-sm h-[50px]"
          onClick={() => {
            dispatch(reset());
          }}
        >
          초기화
        </button>
        <button
          className="w-[300px] font-ibm bg-white dark:bg-[#222222] dark:border-[#121212] dark:text-zinc-300  rounded-sm border shadow-sm h-[50px]"
          onClick={handleDpTooltip}
        >
          가이드
        </button>
        <button
          className="w-[300px] font-ibm border bg-white dark:bg-[#222222] dark:border-[#121212] dark:text-zinc-300  rounded-sm shadow-sm h-[50px]"
          onClick={handleDpSynergyList}
        >
          정렬 변경
        </button>
      </div>
      <div className="text-2xl text-center pl-[150px] font-netmarbleB dark:text-zinc-200 my-10">
        {selectedChampionsListLength === 0 ? 'ㅤ' : selectedChampionsListLength}
      </div>

      <div className="flex justify-center ">
        <ActiveSynergyList />
        <div className="flex flex-col">
          <SelectedChampionsList />
          {!dpSynergyList && <ChampionsList dpTooltip={dpTooltip} />}
          {dpSynergyList && <ChampionsSynergyList dpTooltip={dpTooltip} />}
        </div>
      </div>
    </div>
  );
};

export default Teambuilder;
