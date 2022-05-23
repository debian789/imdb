export const ACTIVE_MOCK = false;
export const API_KEY = ACTIVE_MOCK ? "" : "k_20mjzmqi"; //k_aaaaaaaa //k_aaaaaaaa
export const API_SEARCH = (search) =>
  `https://imdb-api.com/es/API/Search/${API_KEY}/${search}`;

export const API_DETAIL = (id) =>
  `https://imdb-api.com/en/API/Title/${API_KEY}/${id}/Trailer`;

export const API_TRAILER = (id) =>
  `https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${id}`;

export const KEY_STORAGE_SEARCH = "KEY_STORAGE_SEARCH";
