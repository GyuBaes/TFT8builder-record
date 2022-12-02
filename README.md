# <img src="https://capsule-render.vercel.app/api?type=transparent&fontColor=999999&height=100&section=header&text=TFT8builder-record&fontSize=80"/>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

> 전략적 팀 전투 세트8의 팀 빌더, 전적 검색을 지원하는 SPA입니다.

## 폴더구조

---

```
  root
  ┗ championsData.js // 챔피언 데이터

  pages
  ┣ api
  ┃ ┗ axios.js
  ┣ components
  ┃ ┣ record // 전적검색
  ┃ ┃ ┣ Champion.js
  ┃ ┃ ┗ Synergy.js
  ┃ ┗ teambuilder // 팀빌더
  ┃ ┃ ┣ ActiveSynergy.js
  ┃ ┃ ┣ ActiveSynergyList.js
  ┃ ┃ ┣ Champion.js
  ┃ ┃ ┣ ChampionSynergy.js
  ┃ ┃ ┣ ChampionSynergyList.js
  ┃ ┃ ┣ ChampionsList.js
  ┃ ┃ ┣ SelectedChampion.js
  ┃ ┃ ┗ SelectedChampionsList.js
  ┣ .DS_Store
  ┣ [username].js
  ┣ _app.js
  ┣ index.js
  ┗ teambuilder.js

  redux
  ┣ counterSlice.js
  ┗ store.js
```

## 프로젝트 구상

---

수많은 사람들이 게임 전적을 검색하고 그걸 인터넷 사이트에 올리기도 하며 티어가 낮으면 목소리가 아무리 커도 인정받지 못한다 티어가 높은 사람들의 전적 검색 사이트를 만들어 전적을 조금 더 깔끔하고 멋들어지게 보여주며 클릭 한 번에 전적 부분이 스샷으로 저장이 되는 사이트는 어떨까 생각에 만들게 되었다

전적을 멋있고 이쁘게 보여주는 부분은 요즘 포켓몬 카드나 스포츠 카드, 피파 선수카드가 디자인적으로 매력적이라 생각해 그 부분에 아이디어를 얻었다. 물론 구상 단에서 부터 외주를 맡겨야 하는 부분이라 생각했지만 외주는 맡기지 않았다. 라이엇 API가 1초에 20번 2분에 100번 타임 리밋이 걸려있기 때문도 있고 여타 다른 전적 검색 사이트처럼 자체 데이터 베이스를 이용하지 않기 때문도 있다

마스터,그랜드마스터,첼린저가 아니라면 메인 페이지로 리 다이렉트를 해놓았지만 여전히 전적 검색 자체는 할 수도 있고 티어가 어떤 티어인지 판단하는데도 결국 API를 이용해야 한다.

그래서 API 요청을 통해 본 데이터를 본떠 기능까지만 구현하고자 했다
