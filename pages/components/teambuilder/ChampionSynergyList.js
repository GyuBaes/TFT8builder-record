import React from 'react';
import ChampionSynergy from './ChampionSynergy';
import championsData from '../../../championsData';

const synergyGadgeteen = championsData.filter(
  (champ) =>
    '기계유망주' === champ.synergy[0] ||
    '기계유망주' === champ.synergy[1] ||
    '기계유망주' === champ.synergy[2],
);

const synergyAnimaSquad = championsData.filter(
  (champ) =>
    '동물특공대' === champ.synergy[0] ||
    '동물특공대' === champ.synergy[1] ||
    '동물특공대' === champ.synergy[2],
);

const synergyLaserCorps = championsData.filter(
  (champ) =>
    '레이저단' === champ.synergy[0] ||
    '레이저단' === champ.synergy[1] ||
    '레이저단' === champ.synergy[2],
);

const synergyMechaPrime = championsData.filter(
  (champ) =>
    '메카:프라임' === champ.synergy[0] ||
    '메카:프라임' === champ.synergy[1] ||
    '메카:프라임' === champ.synergy[2],
);

const synergyCivilian = championsData.filter(
  (champ) =>
    '민간인' === champ.synergy[0] ||
    '민간인' === champ.synergy[1] ||
    '민간인' === champ.synergy[2],
);

const synergyStarGuardian = championsData.filter(
  (champ) =>
    '별 수호자' === champ.synergy[0] ||
    '별 수호자' === champ.synergy[1] ||
    '별 수호자' === champ.synergy[2],
);

const synergyArsenal = championsData.filter(
  (champ) =>
    '병기고' === champ.synergy[0] ||
    '병기고' === champ.synergy[1] ||
    '병기고' === champ.synergy[2],
);

const synergySupers = championsData.filter(
  (champ) =>
    '우세' === champ.synergy[0] ||
    '우세' === champ.synergy[1] ||
    '우세' === champ.synergy[2],
);

const synergyThreat = championsData.filter(
  (champ) =>
    '위협' === champ.synergy[0] ||
    '위협' === champ.synergy[1] ||
    '위협' === champ.synergy[2],
);

const synergyAdmin = championsData.filter(
  (champ) =>
    '자동방어체계' === champ.synergy[0] ||
    '자동방어체계' === champ.synergy[1] ||
    '자동방어체계' === champ.synergy[2],
);

const synergyUnderground = championsData.filter(
  (champ) =>
    '지하세계' === champ.synergy[0] ||
    '지하세계' === champ.synergy[1] ||
    '지하세계' === champ.synergy[2],
);

const synergyOxForce = championsData.filter(
  (champ) =>
    '황소부대' === champ.synergy[0] ||
    '황소부대' === champ.synergy[1] ||
    '황소부대' === champ.synergy[2],
);

//////

const synergyDuelist = championsData.filter(
  (champ) =>
    '결투가' === champ.synergy[0] ||
    '결투가' === champ.synergy[1] ||
    '결투가' === champ.synergy[2],
);
const synergyForecaster = championsData.filter(
  (champ) =>
    '기상캐스터' === champ.synergy[0] ||
    '기상캐스터' === champ.synergy[1] ||
    '기상캐스터' === champ.synergy[2],
);
const synergyMascot = championsData.filter(
  (champ) =>
    '마스코트' === champ.synergy[0] ||
    '마스코트' === champ.synergy[1] ||
    '마스코트' === champ.synergy[2],
);
const synergyRenegade = championsData.filter(
  (champ) =>
    '무법자' === champ.synergy[0] ||
    '무법자' === champ.synergy[1] ||
    '무법자' === champ.synergy[2],
);
const synergyDefender = championsData.filter(
  (champ) =>
    '방패대' === champ.synergy[0] ||
    '방패대' === champ.synergy[1] ||
    '방패대' === champ.synergy[2],
);
const synergyHeart = championsData.filter(
  (champ) =>
    '선의' === champ.synergy[0] ||
    '선의' === champ.synergy[1] ||
    '선의' === champ.synergy[2],
);
const synergyBrawler = championsData.filter(
  (champ) =>
    '싸움꾼' === champ.synergy[0] ||
    '싸움꾼' === champ.synergy[1] ||
    '싸움꾼' === champ.synergy[2],
);
const synergyAegis = championsData.filter(
  (champ) =>
    '엄호대' === champ.synergy[0] ||
    '엄호대' === champ.synergy[1] ||
    '엄호대' === champ.synergy[2],
);
const synergyAce = championsData.filter(
  (champ) =>
    '에이스' === champ.synergy[0] ||
    '에이스' === champ.synergy[1] ||
    '에이스' === champ.synergy[2],
);
const synergyPrankster = championsData.filter(
  (champ) =>
    '익살꾼' === champ.synergy[0] ||
    '익살꾼' === champ.synergy[1] ||
    '익살꾼' === champ.synergy[2],
);
const synergyRecon = championsData.filter(
  (champ) =>
    '정찰단' === champ.synergy[0] ||
    '정찰단' === champ.synergy[1] ||
    '정찰단' === champ.synergy[2],
);
const synergySpellslinger = championsData.filter(
  (champ) =>
    '주문투척자' === champ.synergy[0] ||
    '주문투척자' === champ.synergy[1] ||
    '주문투척자' === champ.synergy[2],
);

const synergyCorrupted = championsData.filter(
  (champ) =>
    '타락' === champ.synergy[0] ||
    '타락' === champ.synergy[1] ||
    '타락' === champ.synergy[2],
);
const synergySureshot = championsData.filter(
  (champ) =>
    '특등사수' === champ.synergy[0] ||
    '특등사수' === champ.synergy[1] ||
    '특등사수' === champ.synergy[2],
);
const synergyHacker = championsData.filter(
  (champ) =>
    '해커' === champ.synergy[0] ||
    '해커' === champ.synergy[1] ||
    '해커' === champ.synergy[2],
);

const ChampionsSynergyList = ({ dpTooltip }) => {
  return (
    <div className="flex items-start justify-center border dark:bg-[#222222] dark:border-[#121212]   shadow py-5 bg-white w-[1050px]">
      <div className="flex flex-col flex-nowrap">
        <div className="flex items-center">
          <span className="w-[60.2px] text-[13px] font-ibm dark:text-zinc-50 font-bold text-center ">
            기계유망주
          </span>
          {synergyGadgeteen.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[13px] font-ibm dark:text-zinc-50 font-bold text-center ">
            동물특공대
          </span>
          {synergyAnimaSquad.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            레이저단
          </span>
          {synergyLaserCorps.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[12.5px] font-ibm dark:text-zinc-50 font-bold text-center ">
            메카:프라임
          </span>
          {synergyMechaPrime.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            민간인
          </span>
          {synergyCivilian.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            별 수호자
          </span>
          {synergyStarGuardian.map((champion) => (
            <ChampionSynergy
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
        <div className="flex">
          <div className="flex items-center">
            <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
              우세
            </span>
            {synergySupers.map((champion) => (
              <ChampionSynergy
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
          <div className="flex items-center">
            <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
              병기고
            </span>
            {synergyArsenal.map((champion) => (
              <ChampionSynergy
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
        </div>

        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            위협
          </span>
          {synergyThreat.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            자동방어체계
          </span>
          {synergyAdmin.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            지하세계
          </span>
          {synergyUnderground.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            황소부대
          </span>
          {synergyOxForce.map((champion) => (
            <ChampionSynergy
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
      </div>

      <div className="flex flex-col flex-nowrap">
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            결투가
          </span>
          {synergyDuelist.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            마스코트
          </span>
          {synergyMascot.map((champion) => (
            <ChampionSynergy
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

        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            무법자
          </span>
          {synergyRenegade.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            방패대
          </span>
          {synergyDefender.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            선의
          </span>
          {synergyHeart.map((champion) => (
            <ChampionSynergy
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

        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center  ">
            싸움꾼
          </span>
          {synergyBrawler.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            엄호대
          </span>
          {synergyAegis.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            에이스
          </span>
          {synergyAce.map((champion) => (
            <ChampionSynergy
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
        <div className="flex">
          <div className="flex items-center">
            <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
              익살꾼
            </span>
            {synergyPrankster.map((champion) => (
              <ChampionSynergy
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
          <div className="flex items-center">
            <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
              해커
            </span>
            {synergyHacker.map((champion) => (
              <ChampionSynergy
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
        </div>
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            정찰단
          </span>
          {synergyRecon.map((champion) => (
            <ChampionSynergy
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
        <div className="flex items-center">
          <span className="w-[60.2px] text-[13px] font-ibm dark:text-zinc-50 font-bold text-center ">
            주문투척자
          </span>
          {synergySpellslinger.map((champion) => (
            <ChampionSynergy
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
        <div className="flex">
          <div className="flex items-center">
            <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
              타락
            </span>
            {synergyCorrupted.map((champion) => (
              <ChampionSynergy
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
          <div className="flex items-center">
            <span className="w-[60.2px] text-[13px] font-ibm dark:text-zinc-50 font-bold text-center  ">
              기상캐스터
            </span>
            {synergyForecaster.map((champion) => (
              <ChampionSynergy
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
        </div>
        <div className="flex items-center">
          <span className="w-[60.2px] text-[14px] font-ibm dark:text-zinc-50 font-bold text-center ">
            특등사수
          </span>
          {synergySureshot.map((champion) => (
            <ChampionSynergy
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
      </div>
    </div>
  );
};

export default ChampionsSynergyList;
