import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const ActiveSynergy = ({
  name,
  activeNum,
  firstActive,
  secondActive,
  thirdActive,
  fourthActive,
  grade,
  urn,
}) => {
  const synergyGrade =
    grade < 1
      ? 'darken'
      : grade < 2
      ? 'bronze'
      : grade < 3
      ? 'silver'
      : grade < 4
      ? 'gold'
      : grade < 5
      ? 'chromatic'
      : '';

  if (activeNum >= firstActive)
    return (
      <div
        className={
          activeNum === undefined
            ? 'hidden'
            : activeNum === 0
            ? 'hidden'
            : 'flex bg-gray-300 dark:bg-[#222222] w-[150px] h-[54px] p-2 mb-1 rounded items-center'
        }
      >
        <div className="relative flex items-center">
          <Image
            alt={urn}
            className=""
            src={`/../public/images/${synergyGrade}.svg`}
            width={32}
            height={32}
          />
          <Image
            alt={urn}
            className="absolute top-2 left-2"
            src={`/../public/images/${urn}.svg`}
            width={16}
            height={16}
          />

          <span
            className={
              activeNum >= firstActive
                ? ' mx-1 font-semibold p-[5px] bg-gray-600 text-zinc-50 rounded-md text-sm'
                : 'mx-1 text-sm '
            }
          >
            {activeNum}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm dark:text-zinc-200">{name}</span>
          <div
            className={
              activeNum >= firstActive ? 'flex items-center' : 'hidden'
            }
          >
            <span
              className={
                activeNum < secondActive || secondActive === undefined
                  ? 'font-bold dark:text-zinc-200 text-[8px]'
                  : 'dark:text-zinc-200 text-[8px]'
              }
            >
              {firstActive}
            </span>
            <span
              className={
                secondActive === undefined
                  ? 'hidden'
                  : activeNum >= secondActive && activeNum < thirdActive
                  ? ' font-bold dark:text-zinc-200 text-[8px]'
                  : 'text-[8px] dark:text-zinc-200'
              }
            >
              <FaChevronRight className="inline text-[8px] mx-[3px]" />
              {secondActive}
            </span>
            <span
              className={
                thirdActive === undefined
                  ? 'hidden'
                  : activeNum >= thirdActive && activeNum < fourthActive
                  ? ' font-bold dark:text-zinc-200 text-[8px]'
                  : 'text-[8px] dark:text-zinc-200'
              }
            >
              <FaChevronRight className="inline text-[8px] mx-[3px]" />
              {thirdActive}
            </span>
            <span
              className={
                fourthActive === undefined
                  ? 'hidden'
                  : activeNum >= fourthActive
                  ? ' font-bold dark:text-zinc-200 text-[8px]'
                  : 'text-[8px] dark:text-zinc-200'
              }
            >
              <FaChevronRight className="inline text-[8px] dark:text-zinc-200 mx-[3px]" />
              {fourthActive}
            </span>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={
          activeNum === undefined
            ? 'hidden'
            : activeNum === 0
            ? 'hidden'
            : 'flex bg-gray-200 dark:bg-[#353535]  w-[150px] h-[54px] p-2 mb-1 rounded items-center'
        }
      >
        <div className="relative flex items-center mr-[5px]">
          <Image
            alt={urn}
            className=""
            src={`/../public/images/${synergyGrade}.svg`}
            width={32}
            height={32}
          />
          <Image
            alt={urn}
            className="absolute top-2 left-2"
            src={`/../public/images/${urn}.svg`}
            width={16}
            height={16}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm dark:text-zinc-200">{name}</span>
          <div className={'flex items-center'}>
            <span
              className={
                activeNum < secondActive || secondActive === undefined
                  ? 'font-bold dark:text-zinc-200 text-[8px]'
                  : 'text-[8px] dark:text-zinc-200'
              }
            >
              {activeNum} / {firstActive}
            </span>
          </div>
        </div>
      </div>
    );
};

export default ActiveSynergy;
