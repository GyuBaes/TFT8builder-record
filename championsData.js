class Champion {
  constructor(item, urn, name, cost, synergy) {
    this.item = item;
    this.urn = urn;
    this.name = name;
    this.cost = cost;
    this.synergy = synergy;
  }
}

const championsData = [
  new Champion('TK', 'Galio', '갈리오', 1, ['민간인', '마스코트']),
  new Champion('AD', 'Gangplank', '갱플랭크', 1, ['결투가', '우세']),
  new Champion('TK', 'Nasus', '나서스', 1, ['동물특공대', '마스코트']),
  new Champion('SK', 'Lux', '럭스', 1, ['주문투척자', '별 수호자']),
  new Champion('TK', 'Renekton', '레넥톤', 1, ['싸움꾼', '레이저단']),
  new Champion('UT', 'Lulu', '룰루', 1, ['기계유망주', '선의']),
  new Champion('TK', 'Blitzcrank', '블리츠크랭크', 1, [
    '자동방어체계',
    '싸움꾼',
  ]),
  new Champion('TK', 'Poppy', '뽀삐', 1, ['엄호대', '기계유망주']),
  new Champion('TK', 'Sylas', '사일러스', 1, ['동물특공대', '무법자']),
  new Champion('AD', 'Ashe', '애쉬', 1, ['레이저단', '정찰단']),
  new Champion('TK', 'Wukong', '오공', 1, ['엄호대', '메카:프라임']),
  new Champion('AD', 'Kayle', '케일', 1, ['결투가', '지하세계']),
  new Champion('AD', 'Talon', '탈론', 1, ['황소부대', '무법자']),
  new Champion('AD', 'Draven', '드레이븐', 2, ['에이스', '메카:프라임']),
  new Champion('TK', 'Rell', '렐', 2, ['엄호대', '별 수호자']),
  new Champion('TK', 'LeeSin', '리신', 2, ['싸움꾼', '선의', '우세']),
  new Champion('TK', 'Malphite', '말파이트', 2, ['마스코트', '우세']),
  new Champion('TK', 'Vi', '바이', 2, ['방패대', '싸움꾼', '지하세계']),
  new Champion('AD', 'Sivir', '시비르', 2, ['민간인', '특등사수']),
  new Champion('TK', 'Annie', '애니', 2, [
    '기계유망주',
    '황소부대',
    '주문투척자',
  ]),
  new Champion('AD', 'Yasuo', '야스오', 2, ['결투가', '레이저단']),
  new Champion('UT', 'Yuumi', '유미', 2, ['선의', '마스코트', '별 수호자']),
  new Champion('SK', 'Ezreal', '이즈리얼', 2, ['정찰단', '지하세계']),
  new Champion('AD', 'Jinx', '징크스', 2, ['동물특공대', '익살꾼']),
  new Champion('TK', 'Camille', '카밀', 2, ['자동방어체계', '무법자']),
  new Champion('AD', 'Fiora', '피오라', 2, ['결투가', '황소부대']),
  new Champion('AD', 'Nilah', '닐라', 3, ['결투가', '별 수호자']),
  new Champion('TK', 'Rammus', '람머스', 3, ['위협']),
  new Champion('AP', 'Leblanc', '르블랑', 3, [
    '자동방어체계',
    '해커',
    '주문투척자',
  ]),
  new Champion('TK', 'Riven', '리븐', 3, ['동물특공대', '싸움꾼', '엄호대']),
  new Champion('AD', 'Vayne', '베인', 3, ['동물특공대', '결투가', '정찰단']),
  new Champion('SK', 'Velkoz', '벨코즈', 3, ['위협']),
  new Champion('AD', 'Senna', '세나', 3, ['레이저단', '특등사수']),
  new Champion('UT', 'Sona', '소나', 3, ['선의', '주문투척자', '지하세계']),
  new Champion('TK', 'Alistar', '알리스타', 3, [
    '방패대',
    '마스코트',
    '황소부대',
  ]),
  new Champion('TK', 'Jax', '잭스', 3, ['싸움꾼', '메카:프라임']),
  new Champion('UT', 'Zoe', '조이', 3, ['기계유망주', '해커', '익살꾼']),
  new Champion('TK', 'Chogath', '초가스', 3, ['위협']),
  new Champion('SK', 'Kaisa', '카이사', 3, ['정찰단', '별 수호자']),
  new Champion('SK', 'MissFortune', '미스 포츈', 4, ['에이스', '동물특공대']),
  new Champion('AD', 'Belveth', '벨베스', 4, ['위협']),
  new Champion('AD', 'Viego', '비에고', 4, ['황소부대', '무법자']),
  new Champion('AD', 'Samira', '사미라', 4, ['에이스', '특등사수', '지하세계']),
  new Champion('TK', 'Sejuani', '세주아니', 4, ['싸움꾼', '레이저단']),
  new Champion('AD', 'Sett', '세트', 4, ['엄호대', '메카:프라임']),
  new Champion('UT', 'Soraka', '소라카', 4, ['자동방어체계', '선의']),
  new Champion('AP', 'AurelionSol', '아우렐리온 솔', 4, ['위협']),
  new Champion('AP', 'Ekko', '에코', 4, ['방패대', '익살꾼', '별 수호자']),
  new Champion('TK', 'Zac', '자크', 4, ['위협']),
  new Champion('AD', 'Zed', '제드', 4, ['결투가', '해커', '레이저단']),
  new Champion('AP', 'Taliyah', '탈리야', 4, ['주문투척자', '별 수호자']),
  new Champion('TK', 'Nunu', '누누', 5, ['기계유망주', '마스코트']),
  new Champion('TK', 'Leona', '레오나', 5, ['방패대', '메카:프라임', '무법자']),
  new Champion('TK', 'Mordekaiser', '모데카이저', 5, ['에이스', '레이저단']),
  new Champion('AP', 'Syndra', '신드라', 5, ['선의', '별 수호자']),
  new Champion('AD', 'Aphelios', '아펠리오스', 5, [
    '병기고',
    '황소부대',
    '특등사수',
  ]),
  new Champion('SK', 'Urgot', '우르곳', 5, ['위협']),
  new Champion('AP', 'Janna', '잔나', 5, [
    '민간인',
    '기상캐스터',
    '주문투척자',
  ]),
  new Champion('AP', 'Fiddlesticks', '피들스틱', 5, ['타락', '위협']),
];

export default championsData;
