import React from 'react';
import Image from 'next/image';

const Champion = ({ name, itemNames, rarity, tier }) => {
  return (
    <div className="flex flex-col items-center mr-[3px] mb-[3px] ">
      <Image
        alt={tier}
        src={`/../public/ex/${rarity}${tier}.png`}
        width={25}
        height={25}
      />
      <Image
        className={
          rarity === 0
            ? 'border-[2px] rounded-md border-[#7B7B7B]'
            : rarity === 1
            ? 'border-[2px] rounded-md border-[#13AE86]'
            : rarity === 2
            ? 'border-[2px] rounded-md border-[#217AC7]'
            : rarity === 3
            ? 'border-[2px] rounded-md border-[#C440DA]'
            : rarity === 4
            ? 'border-[2px] rounded-md border-[#FEB93C]'
            : rarity === 5
            ? 'border-[2px] rounded-md border-[#FEB93C]'
            : rarity === 6
            ? 'border-[2px] rounded-md border-[#FEB93C]'
            : 'border-[2px] rounded-md border-[#FEB93C]'
        }
        width={40}
        height={40}
        src={`/../public/ex/${name}.png`}
        alt={name}
      />
      <div className="flex">
        {itemNames.map((item) => {
          return (
            <Image
              key={item}
              alt={item}
              src={`/../public/ex/${item}.png`}
              width={20}
              height={20}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Champion;
