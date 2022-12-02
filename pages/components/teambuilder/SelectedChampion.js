import React, { memo } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { del } from '../../../redux/counterSlice';

const SelectedChampion = ({ name, urn, cost, id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(del(id))}
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
      {/* <span className="absolute font-ibm font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_100%)] bottom-0 text-[12px]  text-center whitespace-nowrap text-zinc-50 left-1/2 translate-x-[-50%]	">
        {name}
      </span> */}
    </button>
  );
};

export default memo(SelectedChampion);
