import Image from 'next/image';
import React from 'react';

const Synergy = ({ name, style }) => {
  if (style)
    return (
      <div>
        <div className="relative">
          <Image
            alt={style}
            src={`/../public/ex/${style}.svg`}
            width={30}
            height={30}
          />
          <Image
            className="absolute top-2 left-2"
            alt={name}
            src={`/../public/ex/${name}.svg`}
            width={14}
            height={14}
          />
        </div>
      </div>
    );
};

export default Synergy;
