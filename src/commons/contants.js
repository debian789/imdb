export const API_KEY = ""; //  "k_c2c8swew"; //k_aaaaaaaa //k_aaaaaaaa
export const API_SEARCH = (search) =>
  `https://imdb-api.com/es/API/Search/${API_KEY}/${search}`;

export const API_DETAIL = (id) =>
  `https://imdb-api.com/en/API/Title/${API_KEY}/${id}/Trailer`;

export const API_TRAILER = (id) =>
  `https://imdb-api.com/en/API/Trailer/${API_KEY}/${id}`;
