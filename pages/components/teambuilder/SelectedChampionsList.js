import React from 'react';
import SelectedChampion from './SelectedChampion';
import { useSelector } from 'react-redux';

const SelectedChampionsList = () => {
  const selectedChampionsList = useSelector(
    (state) => state.counter.selectedList,
  );
  const sortedList = [...selectedChampionsList].sort((a, b) => {
    if (a.cost > b.cost) {
      return 1;
    }
    if (a.cost < b.cost) {
      return -1;
    }
    return -1;
  });
  if (selectedChampionsList.length === 0)
    return (
      <div className="h-[159.3px] dark:bg-[#222222] dark:border-[#121212] bg-white border border-b-0 shadow w-[1050px]"></div>
    );
  else
    return (
      <div className="flex justify-center py-10 dark:bg-[#222222] dark:border-[#121212] bg-white border border-b-0 shadow flex-nowrap ">
        {sortedList?.map((champion) => (
          <SelectedChampion
            key={champion.id}
            id={champion.id}
            urn={champion.urn}
            name={champion.name}
            cost={champion.cost}
          />
        ))}
      </div>
    );
};

export default SelectedChampionsList;
