export const API_KEY = ""; //  "k_c2c8swew";
export const API_SEARCH = (search) =>
  `https://imdb-api.com/es/API/Search/${API_KEY}/${search}`;

export const API_DETAIL = (id) =>
  `https://imdb-api.com/en/API/Title/${API_KEY}/${id}`;

export const API_TRAILER = (id) =>
  `https://imdb-api.com/en/API/Trailer/${API_KEY}/${id}`;
