import React, { memo } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../redux/counterSlice';

const Champion = ({
  name,
  urn,
  cost,
  synergy1,
  synergy2,
  synergy3,
  item,
  dpTooltip,
}) => {
  const dispatch = useDispatch();
  const selectedChampionsList = useSelector(
    (state) => state.counter.selectedList,
  );
  let overlapCount = 0;
  for (let champ of selectedChampionsList) {
    if (champ.name === name) overlapCount += 1;
  }
  return (
    <button
      onClick={() => {
        overlapCount > 2
          ? ''
          : dispatch(
              add([
                {
                  name: name,
                  urn: urn,
                  id: Math.random(),
                  synergy1: synergy1,
                  synergy2: synergy2,
                  synergy3: synergy3,
                  cost: cost,
                },
              ]),
            );
      }}
      className="relative mr-[3px] mb-[3px] "
    >
      <Image
        className={
          cost === 1
            ? 'border-[2px] rounded-md border-[#7B7B7B]'
            : cost === 2
            ? 'border-[2px] rounded-md border-[#13AE86]'
            : cost === 3
            ? 'border-[2px] rounded-md border-[#217AC7]'
            : cost === 4
            ? 'border-[2px] rounded-md border-[#C440DA]'
            : cost === 5
            ? 'border-[2px] rounded-md border-[#FEB93C]'
            : 'border-[2px] rounded-md border-[#FEB93C]'
        }
        width={75.3}
        height={75.3}
        src={`/../public/images/${urn}.jpg`}
        alt={name}
      />
      <span
        className={
          cost === 1
            ? 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#7B7B7B]'
            : cost === 2
            ? 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#13AE86]'
            : cost === 3
            ? 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#217AC7]'
            : cost === 4
            ? 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#C440DA]'
            : cost === 5
            ? 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#FEB93C]'
            : 'absolute right-0 top-[-0px] px-[1px] font-ibm text-white text-[11px] rounded bg-[#FEB93C]'
        }
      >
        {dpTooltip && item}
      </span>
      <span className="absolute font-ibm font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)] bottom-0 text-[12px]  text-center whitespace-nowrap text-zinc-50 left-1/2 translate-x-[-50%]	">
        {name}
      </span>
    </button>
  );
};

export default memo(Champion);
