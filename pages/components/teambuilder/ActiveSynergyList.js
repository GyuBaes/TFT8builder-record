import React from 'react';
import { useSelector } from 'react-redux';
import ActiveSynergy from './ActiveSynergy';

const ActiveSynergyList = () => {
  const selectedChampionsList = useSelector(
    (state) => state.counter.selectedList,
  );

  const uniqList = selectedChampionsList.reduce((acc, cur) => {
    if (acc.findIndex(({ name }) => name === cur.name) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);

  const admin = uniqList.filter((champ) => {
    return (
      '자동방어체계' === champ.synergy1 ||
      '자동방어체계' === champ.synergy2 ||
      '자동방어체계' === champ.synergy3
    );
  });
  const animaSquad = uniqList.filter((champ) => {
    return (
      '동물특공대' === champ.synergy1 ||
      '동물특공대' === champ.synergy2 ||
      '동물특공대' === champ.synergy3
    );
  });
  const arsenal = uniqList.filter((champ) => {
    return (
      '병기고' === champ.synergy1 ||
      '병기고' === champ.synergy2 ||
      '병기고' === champ.synergy3
    );
  });
  const civilian = uniqList.filter((champ) => {
    return (
      '민간인' === champ.synergy1 ||
      '민간인' === champ.synergy2 ||
      '민간인' === champ.synergy3
    );
  });
  const gadgeteen = uniqList.filter((champ) => {
    return (
      '기계유망주' === champ.synergy1 ||
      '기계유망주' === champ.synergy2 ||
      '기계유망주' === champ.synergy3
    );
  });
  const lasercorps = uniqList.filter((champ) => {
    return (
      '레이저단' === champ.synergy1 ||
      '레이저단' === champ.synergy2 ||
      '레이저단' === champ.synergy3
    );
  });
  const mechaprime = uniqList.filter((champ) => {
    return (
      '메카:프라임' === champ.synergy1 ||
      '메카:프라임' === champ.synergy2 ||
      '메카:프라임' === champ.synergy3
    );
  });
  const oxforce = uniqList.filter((champ) => {
    return (
      '황소부대' === champ.synergy1 ||
      '황소부대' === champ.synergy2 ||
      '황소부대' === champ.synergy3
    );
  });
  const starguardian = uniqList.filter((champ) => {
    return (
      '별 수호자' === champ.synergy1 ||
      '별 수호자' === champ.synergy2 ||
      '별 수호자' === champ.synergy3
    );
  });
  const supers = uniqList.filter((champ) => {
    return (
      '우세' === champ.synergy1 ||
      '우세' === champ.synergy2 ||
      '우세' === champ.synergy3
    );
  });
  const threat = uniqList.filter((champ) => {
    return (
      '위협' === champ.synergy1 ||
      '위협' === champ.synergy2 ||
      '위협' === champ.synergy3
    );
  });
  const underground = uniqList.filter((champ) => {
    return (
      '지하세계' === champ.synergy1 ||
      '지하세계' === champ.synergy2 ||
      '지하세계' === champ.synergy3
    );
  });

  const ace = uniqList.filter((champ) => {
    return (
      '에이스' === champ.synergy1 ||
      '에이스' === champ.synergy2 ||
      '에이스' === champ.synergy3
    );
  });
  const aegis = uniqList.filter((champ) => {
    return (
      '방패대' === champ.synergy1 ||
      '방패대' === champ.synergy2 ||
      '방패대' === champ.synergy3
    );
  });
  const brawler = uniqList.filter((champ) => {
    return (
      '싸움꾼' === champ.synergy1 ||
      '싸움꾼' === champ.synergy2 ||
      '싸움꾼' === champ.synergy3
    );
  });
  const corrupted = uniqList.filter((champ) => {
    return (
      '타락' === champ.synergy1 ||
      '타락' === champ.synergy2 ||
      '타락' === champ.synergy3
    );
  });
  const defender = uniqList.filter((champ) => {
    return (
      '엄호대' === champ.synergy1 ||
      '엄호대' === champ.synergy2 ||
      '엄호대' === champ.synergy3
    );
  });
  const duelist = uniqList.filter((champ) => {
    return (
      '결투가' === champ.synergy1 ||
      '결투가' === champ.synergy2 ||
      '결투가' === champ.synergy3
    );
  });
  const forecaster = uniqList.filter((champ) => {
    return (
      '기상캐스터' === champ.synergy1 ||
      '기상캐스터' === champ.synergy2 ||
      '기상캐스터' === champ.synergy3
    );
  });
  const hacker = uniqList.filter((champ) => {
    return (
      '해커' === champ.synergy1 ||
      '해커' === champ.synergy2 ||
      '해커' === champ.synergy3
    );
  });
  const heart = uniqList.filter((champ) => {
    return (
      '선의' === champ.synergy1 ||
      '선의' === champ.synergy2 ||
      '선의' === champ.synergy3
    );
  });
  const mascot = uniqList.filter((champ) => {
    return (
      '마스코트' === champ.synergy1 ||
      '마스코트' === champ.synergy2 ||
      '마스코트' === champ.synergy3
    );
  });
  const prankster = uniqList.filter((champ) => {
    return (
      '익살꾼' === champ.synergy1 ||
      '익살꾼' === champ.synergy2 ||
      '익살꾼' === champ.synergy3
    );
  });
  const recon = uniqList.filter((champ) => {
    return (
      '정찰단' === champ.synergy1 ||
      '정찰단' === champ.synergy2 ||
      '정찰단' === champ.synergy3
    );
  });
  const renegade = uniqList.filter((champ) => {
    return (
      '무법자' === champ.synergy1 ||
      '무법자' === champ.synergy2 ||
      '무법자' === champ.synergy3
    );
  });
  const spellslinger = uniqList.filter((champ) => {
    return (
      '주문투척자' === champ.synergy1 ||
      '주문투척자' === champ.synergy2 ||
      '주문투척자' === champ.synergy3
    );
  });
  const sureshot = uniqList.filter((champ) => {
    return (
      '특등사수' === champ.synergy1 ||
      '특등사수' === champ.synergy2 ||
      '특등사수' === champ.synergy3
    );
  });

  const synergyArr = [
    {
      name: '자동방어체계',
      urn: 'admin',
      activeNum: admin?.length,
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      grade:
        admin?.length < 2
          ? 0
          : admin?.length < 4
          ? 1
          : admin?.length < 6
          ? 3
          : 4,
    },
    {
      name: '동물특공대',
      urn: 'animaSquad',
      activeNum: animaSquad?.length,
      firstActive: 3,
      secondActive: 5,
      thirdActive: 7,
      grade:
        animaSquad?.length < 3
          ? 0
          : animaSquad?.length < 5
          ? 1
          : animaSquad?.length < 7
          ? 3
          : 4,
    },
    {
      name: '병기고',
      urn: 'arsenal',
      activeNum: arsenal?.length,
      firstActive: 1,
      grade: arsenal?.length < 1 ? 0 : 3,
    },
    {
      name: '민간인',
      activeNum: civilian?.length,
      urn: 'civilian',
      firstActive: 1,
      secondActive: 2,
      thirdActive: 3,
      grade:
        civilian?.length < 1
          ? 0
          : civilian?.length < 2
          ? 1
          : civilian?.length < 3
          ? 2
          : 3,
    },
    {
      name: '기계유망주',
      urn: 'gadgeteen',
      activeNum: gadgeteen?.length,
      firstActive: 3,
      secondActive: 5,
      grade: gadgeteen?.length < 3 ? 0 : gadgeteen?.length < 5 ? 3 : 4,
    },
    {
      name: '레이저단',
      activeNum: lasercorps?.length,
      urn: 'lasercorps',
      firstActive: 3,
      secondActive: 6,
      thirdActive: 9,
      grade:
        lasercorps?.length < 3
          ? 0
          : lasercorps?.length < 6
          ? 1
          : lasercorps?.length < 9
          ? 3
          : 4,
    },
    {
      name: '메카:프라임',
      activeNum: mechaprime?.length,
      urn: 'mechaprime',
      firstActive: 3,
      secondActive: 5,
      grade: mechaprime?.length < 3 ? 0 : mechaprime?.length < 5 ? 3 : 4,
    },
    {
      name: '황소부대',
      activeNum: oxforce.length,
      urn: 'oxforce',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      fourthActive: 8,
      grade:
        oxforce?.length < 2
          ? 0
          : oxforce?.length < 4
          ? 1
          : oxforce?.length < 6
          ? 2
          : oxforce?.length < 8
          ? 3
          : 4,
    },
    {
      name: '별 수호자',
      activeNum: starguardian?.length,
      urn: 'starguardian',
      firstActive: 3,
      secondActive: 5,
      thirdActive: 7,
      fourthActive: 9,
      grade:
        starguardian?.length < 3
          ? 0
          : starguardian?.length < 5
          ? 1
          : starguardian?.length < 7
          ? 2
          : starguardian?.length < 9
          ? 3
          : 4,
    },
    {
      name: '우세',
      activeNum: supers?.length,
      urn: 'supers',
      firstActive: 3,
      grade: supers?.length < 3 ? 0 : 3,
    },
    {
      name: '위협',
      activeNum: threat.length,
      urn: 'threat',
      firstActive: 1,
      grade: threat?.length < 1 ? 0 : 3,
    },
    {
      name: '지하세계',
      activeNum: underground?.length,
      urn: 'underground',
      firstActive: 3,
      secondActive: 5,
      grade: underground?.length < 3 ? 0 : underground?.length < 5 ? 3 : 4,
    },
    {
      name: '에이스',
      activeNum: ace?.length,
      urn: 'ace',
      firstActive: 1,
      secondActive: 4,
      grade: ace?.length < 1 ? 0 : ace?.length < 4 ? 3 : 4,
    },
    {
      name: '방패대',
      activeNum: aegis?.length,
      urn: 'aegis',
      firstActive: 2,
      secondActive: 3,
      thirdActive: 4,
      fourthActive: 5,
      grade:
        aegis?.length < 2
          ? 0
          : aegis?.length < 3
          ? 1
          : aegis?.length < 4
          ? 2
          : aegis?.length < 5
          ? 3
          : 4,
    },
    {
      name: '싸움꾼',
      activeNum: brawler?.length,
      urn: 'brawler',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      fourthActive: 8,
      grade:
        brawler?.length < 2
          ? 0
          : brawler?.length < 4
          ? 1
          : brawler?.length < 6
          ? 2
          : brawler?.length < 8
          ? 3
          : 4,
    },
    {
      name: '타락',
      activeNum: corrupted?.length,
      urn: 'corrupted',
      firstActive: 1,
      grade: corrupted?.length < 1 ? 0 : 3,
    },
    {
      name: '엄호대',
      activeNum: defender?.length,
      urn: 'defender',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      grade:
        defender?.length < 2
          ? 0
          : defender?.length < 4
          ? 1
          : defender?.length < 6
          ? 3
          : 4,
    },
    {
      name: '결투가',
      activeNum: duelist?.length,
      urn: 'duelist',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      fourthActive: 8,
      grade:
        duelist?.length < 2
          ? 0
          : duelist?.length < 4
          ? 1
          : duelist?.length < 6
          ? 2
          : duelist?.length < 8
          ? 3
          : 4,
    },
    {
      name: '기상캐스터',
      activeNum: forecaster?.length,
      urn: 'forecaster',
      firstActive: 1,
      grade: forecaster?.length < 1 ? 0 : 3,
    },
    {
      name: '해커',
      activeNum: hacker?.length,
      urn: 'hacker',
      firstActive: 2,
      secondActive: 3,
      thirdActive: 4,
      grade:
        hacker?.length < 2
          ? 0
          : hacker?.length < 3
          ? 1
          : hacker?.length < 4
          ? 3
          : 4,
    },
    {
      name: '선의',
      activeNum: heart?.length,
      urn: 'heart',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      grade:
        heart?.length < 2
          ? 0
          : heart?.length < 4
          ? 1
          : heart?.length < 6
          ? 3
          : 4,
    },
    {
      name: '마스코트',
      activeNum: mascot?.length,
      urn: 'mascot',
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      fourthActive: 8,
      grade:
        mascot?.length < 2
          ? 0
          : mascot?.length < 4
          ? 1
          : mascot?.length < 6
          ? 2
          : mascot?.length < 8
          ? 3
          : 4,
    },
    {
      name: '익살꾼',
      activeNum: prankster?.length,
      urn: 'prankster',
      firstActive: 2,
      secondActive: 3,
      grade: prankster?.length < 2 ? 0 : prankster?.length < 3 ? 3 : 4,
    },
    {
      name: '정찰단',
      urn: 'recon',
      activeNum: recon?.length,
      firstActive: 2,
      secondActive: 3,
      thirdActive: 4,
      grade:
        recon?.length < 2
          ? 0
          : recon?.length < 3
          ? 1
          : recon?.length < 4
          ? 3
          : 4,
    },
    {
      name: '무법자',
      urn: 'renegade',
      activeNum: renegade?.length,
      firstActive: 3,
      secondActive: 6,
      grade: renegade?.length < 3 ? 0 : renegade?.length < 6 ? 3 : 4,
    },
    {
      name: '주문투척자',
      urn: 'spellslinger',
      activeNum: spellslinger?.length,
      firstActive: 2,
      secondActive: 4,
      thirdActive: 6,
      fourthActive: 8,
      grade:
        spellslinger?.length < 2
          ? 0
          : spellslinger?.length < 4
          ? 1
          : spellslinger?.length < 6
          ? 2
          : spellslinger?.length < 8
          ? 3
          : 4,
    },
    {
      name: '특등사수',
      urn: 'sureshot',
      activeNum: sureshot?.length,
      firstActive: 2,
      secondActive: 4,
      grade: sureshot?.length < 2 ? 0 : sureshot?.length < 4 ? 3 : 4,
    },
  ];

  const getActiveSynergy = synergyArr
    ?.filter((champ) => champ.firstActive <= champ.activeNum)
    ?.sort((a, b) => {
      if (a.grade > b.grade) {
        return -1;
      }
      if (a.grade < b.grade) {
        return 1;
      }
      return -1;
    });

  const getInactiveSynergy = synergyArr?.filter(
    (champ) => champ.firstActive > champ.activeNum && champ.activeNum > 0,
  );

  if (getActiveSynergy.length === 0 && getInactiveSynergy.length === 0)
    return <div className="mr-[150px]"></div>;
  else
    return (
      <div className="flex flex-col">
        <div className="">
          {getActiveSynergy?.map((synergy) => (
            <ActiveSynergy
              key={synergy.name}
              name={synergy.name}
              grade={synergy.grade}
              urn={synergy.urn}
              activeNum={synergy.activeNum}
              firstActive={synergy?.firstActive}
              secondActive={synergy?.secondActive}
              thirdActive={synergy?.thirdActive}
              fourthActive={synergy?.fourthActive}
            />
          ))}
        </div>
        <div className="">
          {getInactiveSynergy?.map((synergy) => (
            <ActiveSynergy
              key={synergy.name}
              name={synergy.name}
              grade={synergy.grade}
              urn={synergy.urn}
              activeNum={synergy.activeNum}
              firstActive={synergy?.firstActive}
              secondActive={synergy?.secondActive}
              thirdActive={synergy?.thirdActive}
              fourthActive={synergy?.fourthActive}
            />
          ))}
        </div>
      </div>
    );
};

export default ActiveSynergyList;
