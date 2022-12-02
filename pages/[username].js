import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {
  axiosId,
  axiosMatches,
  axiosMatchInfo,
  axiosLeague,
} from './api/axios';
import Synergy from './components/record/Synergy';
import Champion from './components/record/Champion';

const exMatchInfo = {
  game_datetime: 1669516867624,
  game_length: 2152.599853515625,
  tft_game_type: 'standard',
  participants: [
    {
      augments: [
        'TFT7_Agument_BirthdayPresents',
        'TFT6_Agument_Diversify3',
        'TFT6_Agument_CyberneticUplink2',
      ],
      gold_left: 5,
      last_round: 38,
      level: 9,
      placement: 1,
      puuid:
        'sgripKXHXkG88q-6K3JBCIFjImftZUFoHSrynelvQYtqG4GOec4gKwxlmC8IMImKtYPJFB1K8CMwgA',
      time_eleiminated: 2144,
      traits: [
        {
          name: 'Set7_Assassin',
          num_units: 1,
          style: 0,
          tier_current: 0,
          tier_total: 3,
        },
        {
          name: 'Set7_Bard',
          num_units: 1,
          style: 3,
          tier_current: 1,
          tier_total: 1,
        },
        {
          name: 'Set7_Bruiser',
          num_units: 1,
          style: 0,
          tier_current: 0,
          tier_total: 4,
        },
        {
          name: 'Set7_Dragon',
          num_units: 1,
          style: 1,
          tier_current: 1,
          tier_total: 6,
        },
        {
          name: 'Set7_Evoker',
          num_units: 2,
          style: 1,
          tier_current: 1,
          tier_total: 3,
        },
        {
          name: 'Set7_Guild',
          num_units: 1,
          style: 1,
          tier_current: 1,
          tier_total: 8,
        },
        {
          name: 'Set7_Lagoon',
          num_units: 6,
          style: 2,
          tier_current: 2,
          tier_total: 4,
        },
        {
          name: 'Set7_Mage',
          num_units: 5,
          style: 2,
          tier_current: 2,
          tier_total: 4,
        },
        {
          name: 'Set7_Mystic',
          num_units: 2,
          style: 1,
          tier_current: 1,
          tier_total: 4,
        },
        {
          name: 'Set7_Shimmerscale',
          num_units: 1,
          style: 0,
          tier_current: 0,
          tier_total: 4,
        },
        {
          name: 'Set7_SpellThief',
          num_units: 1,
          style: 3,
          tier_current: 1,
          tier_total: 1,
        },
        {
          name: 'Set7_Whispers',
          num_units: 2,
          style: 1,
          tier_current: 1,
          tier_total: 3,
        },
      ],
      units: [
        {
          character_id: 'TFT7_Taliyah',
          itemNames: [],
          items: [],
          name: '',
          rarity: 0,
          tier: 2,
        },
        {
          character_id: 'TFT7_Zyra',
          itemNames: [
            'TFT_Item_JeweledGauntlet',
            'TFT7_Item_MageEmblemItem',
            'TFT_Item_Morellonomicon',
          ],
          items: [39, 2311, 37],
          name: '',
          rarity: 1,
          tier: 2,
        },
        {
          character_id: 'TFT7_Sylas',
          itemNames: [
            'TFT_Item_WarmogsArmor',
            'TFT_Item_DragonsClaw',
            'TFT_Item_IonicSpark',
          ],
          items: [77, 66, 36],
          name: '',
          rarity: 2,
          tier: 2,
        },
        {
          character_id: 'TFT7_Seraphine',
          itemNames: [],
          items: [],
          name: '',
          rarity: 2,
          tier: 1,
        },
        {
          character_id: 'TFT7_Nilah',
          itemNames: [
            'TFT_Item_HextechGunblade',
            'TFT_Item_GuardianAngel',
            'TFT_Item_UnstableConcoction',
          ],
          items: [13, 94, 49],
          name: '',
          rarity: 4,
          tier: 3,
        },
        {
          character_id: 'TFT7_AquaticDragon',
          itemNames: [
            'TFT_Item_SpearOfShojin',
            'TFT_Item_Morellonomicon',
            'TFT_Item_RabadonsDeathcap',
          ],
          items: [14, 37, 33],
          name: '',
          rarity: 5,
          tier: 2,
        },
        {
          character_id: 'TFT7_Zoe',
          itemNames: ['TFT_Item_ZekesHerald'],
          items: [17],
          name: '',
          rarity: 6,
          tier: 2,
        },
        {
          character_id: 'TFT7_Bard',
          itemNames: ['TFT_Item_Redemption'],
          items: [47],
          name: '',
          rarity: 6,
          tier: 1,
        },
      ],
    },
  ],
};
const exTier = 'CHALLENGER';
const exLeaguePoints = 1808;
const exUsername = '꼴픽이';
const exPuuid =
  'sgripKXHXkG88q-6K3JBCIFjImftZUFoHSrynelvQYtqG4GOec4gKwxlmC8IMImKtYPJFB1K8CMwgA';
const exMatchInfoParticipant = exMatchInfo.participants.filter(
  (user) => user.puuid === exPuuid,
);
console.log(exMatchInfoParticipant);

const time = dayjs(exMatchInfo.game_datetime).format('YYYY-MM-DD h:m');

const Username = () => {
  const recordRef = useRef();
  const handleDownload = () => {
    const record = recordRef.current;
    html2canvas(record).then((record) => {
      saveAs(record.toDataURL('image/png'), 'snap.png');
    });
  };

  const router = useRouter();
  const username = router.query.username;
  const [puuid, setPuuid] = useState('');
  const [tier, setTier] = useState('');
  const [leaguePoints, setLeaguePoints] = useState('');
  const [matchInfo, setMatchInfo] = useState({});

  const fetchData = async () => {
    const identifiers = await axiosId.get(
      `${username}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    const { id, puuid } = identifiers;
    setPuuid(puuid);

    const leagueInfo = await axiosLeague.get(
      `${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    const { leaguePoints, tier } = leagueInfo;
    if (
      tier === 'DIAMOND' ||
      tier === 'PLATINUM' ||
      tier === 'GOLD' ||
      tier === 'SILVER' ||
      tier === 'BRONZE' ||
      tier === 'IRON'
    )
      router.push('/');
    setLeaguePoints(leaguePoints);
    setTier(tier);

    const matches =
      await axiosMatches.get(`${puuid}/ids?start=0&count=2&api_key=${process.env.NEXT_PUBLIC_API_KEY}
      `);

    const matchInfo = await axiosMatchInfo.get(
      `${matches[0]}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    setMatchInfo(matchInfo);
  };

  useEffect(() => {
    if (!router.isReady) return;
    // fetchData();
  }, [router.isReady]);

  console.log(
    matchInfo,
    matchInfo?.participants?.filter((user) => user.puuid === puuid),
    tier,
    leaguePoints,
    username,
  );
  // console.log(dayjs(1668982565504));
  // console.log(parseInt(2476.621337890625 / 60));
  // if (matchInfo.participants)
  if (exMatchInfo)
    return (
      <div className="dark:text-zinc-50">
        <nav className="flex justify-center py-4 dark:bg-[#222222] dark:text-zinc-200 bg-white shadow-sm">
          <Link href={`/`}>
            <span className="text-7xl font-gangwonEdu">TFT</span>
            <span className="-ml-1 text-6xl font-netmarbleB">snap</span>
          </Link>
        </nav>

        <div
          className="flex flex-col items-center justify-center  h-[80vh]"
          ref={recordRef}
        >
          <Image
            className=""
            alt={exTier}
            src={`/../public/images/${exTier}.png`}
            width={500}
            height={400}
          />
          <div>
            {time} {Math.floor(exMatchInfoParticipant[0].time_eleiminated / 60)}
            분 플레이
          </div>
          <div>
            {exTier} {exLeaguePoints}
          </div>
          <div>
            {exMatchInfoParticipant[0].placement}st {exUsername}
          </div>
          <div className="flex">
            {exMatchInfoParticipant[0].traits.map((synergy) => {
              return (
                <Synergy
                  key={synergy.name}
                  name={synergy.name}
                  style={synergy.style}
                />
              );
            })}
          </div>
          <div className="flex">
            {exMatchInfoParticipant[0].augments.map((agument) => {
              return (
                <Image
                  alt={agument}
                  src={`/../public/ex/${agument}.png`}
                  key={agument}
                  width={20}
                  height={20}
                />
              );
            })}
          </div>
          <div className="flex">
            {exMatchInfoParticipant[0].units.map((champion) => {
              return (
                <Champion
                  key={champion.index}
                  name={champion.character_id}
                  itemNames={champion.itemNames}
                  rarity={champion.rarity}
                  tier={champion.tier}
                />
              );
            })}
          </div>
          <button data-html2canvas-ignore={true} onClick={handleDownload}>
            스냅
          </button>
        </div>
      </div>
    );
};

export default Username;
