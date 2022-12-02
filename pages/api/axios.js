import axios from 'axios';

export const axiosId = axios.create({
  baseURL: 'https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/',
});

export const axiosLeague = axios.create({
  baseURL: 'https://kr.api.riotgames.com/tft/league/v1/entries/by-summoner/',
});

export const axiosMatches = axios.create({
  baseURL: 'https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/',
});

export const axiosMatchInfo = axios.create({
  baseURL: 'https://asia.api.riotgames.com/tft/match/v1/matches/',
});

axiosId.interceptors.response.use((res) => {
  return res.data;
});

axiosLeague.interceptors.response.use((res) => {
  return res.data[0];
});

axiosMatches.interceptors.response.use((res) => {
  return res.data;
});

axiosMatchInfo.interceptors.response.use((res) => {
  const { info } = res.data;
  return info;
});
