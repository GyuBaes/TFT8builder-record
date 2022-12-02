import React from 'react';
import Champion from './Champion';
import championsData from '../../../championsData';

const ChampionsList = ({ dpTooltip }) => {
  return (
    <div className="flex justify-center flex-wrap border  dark:bg-[#222222] dark:border-[#121212]  shadow py-10 bg-white w-[1050px]">
      {championsData.map((champion) => (
        <Champion
          key={champion.urn}
          urn={champion.urn}
          item={champion.item}
          name={champion.name}
          cost={champion.cost}
          synergy1={champion.synergy[0]}
          synergy2={champion.synergy[1]}
          synergy3={champion?.synergy[2]}
          dpTooltip={dpTooltip}
        />
      ))}
    </div>
  );
};

export default ChampionsList;
