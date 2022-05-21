import { API_SEARCH, API_DETAIL, API_TRAILER } from "../commons/contants";
export const searchMovie = async (search) => {
  try {
    console.log(API_SEARCH(search));
    const data = await mockSeach; //  (await fetch(API_SEARCH(search))).json();
    //console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const detailMovie = async (id) => {
  try {
    console.log(API_DETAIL(id));
    const data = await detailMock; //  (await fetch(API_DETAIL(id))).json();
    //console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const mockSeach = {
  searchType: "Title",
  expression: "game",
  results: [
    {
      id: "tt0119174",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.7273_AL_.jpg",
      title: "The Game",
      description: "(1997)",
    },
    {
      id: "tt1034032",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_Ratio0.7273_AL_.jpg",
      title: "Gamer",
      description: "(2009)",
    },
    {
      id: "tt0479199",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZjNmZWQ2N2MtOGM2MS00YWU0LTkzMjctZGMyMWEyNGQyNGUzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_Ratio0.7273_AL_.jpg",
      title: "Buried Alive",
      description: '(2007) aka "Game"',
    },
    {
      id: "tt0944947",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7273_AL_.jpg",
      title: "Game of Thrones",
      description: "(2011) (TV Series)",
    },
    {
      id: "tt2704998",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_Ratio0.7273_AL_.jpg",
      title: "Game Night",
      description: "(I) (2018)",
    },
    {
      id: "tt1848902",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTQwNjkzNzg4NV5BMl5BanBnXkFtZTcwODIxMTM0Nw@@._V1_Ratio0.7273_AL_.jpg",
      title: "Game Change",
      description: "(2012) (TV Movie)",
    },
    {
      id: "tt0245712",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZjUxNmEwOGItMTBmYi00MWQ1LWExY2MtNDUxMjI0OWM4M2NiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
      title: "Amores perros",
      description: '(2000) aka "Game Phan Du Khon Phan Hoad"',
    },
    {
      id: "tt3317234",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTUxNjI4MDU2OF5BMl5BanBnXkFtZTgwMDAzMzA1NDM@._V1_Ratio0.7273_AL_.jpg",
      title: "Game Over, Man!",
      description: "(2018)",
    },
    {
      id: "tt4154796",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.7273_AL_.jpg",
      title: "Avengers: Endgame",
      description: "(2019)",
    },
    {
      id: "tt2084970",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_Ratio0.7273_AL_.jpg",
      title: "The Imitation Game",
      description: "(2014)",
    },
  ],
  errorMessage: "",
};
const detailMock = {
  id: "tt0944947",
  title: "Game of Thrones",
  originalTitle: "",
  fullTitle: "Game of Thrones (TV Series 2011–2019)",
  type: "TVSeries",
  year: "2011",
  image:
    "https://imdb-api.com/images/original/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.6751_AL_.jpg",
  releaseDate: "2011-04-17",
  runtimeMins: null,
  runtimeStr: null,
  plot: "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",
  plotLocal: "",
  plotLocalIsRtl: false,
  awards:
    "Top rated TV #13 | Won 59 Primetime Emmys, 386 wins & 632 nominations total",
  directors: "",
  directorList: [],
  writers: "",
  writerList: [],
  stars: "Emilia Clarke, Peter Dinklage, Kit Harington",
  starList: [
    { id: "nm3592338", name: "Emilia Clarke" },
    { id: "nm0227759", name: "Peter Dinklage" },
    { id: "nm3229685", name: "Kit Harington" },
  ],
  actorList: [
    {
      id: "nm3592338",
      image:
        "https://imdb-api.com/images/original/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_Ratio1.0000_AL_.jpg",
      name: "Emilia Clarke",
      asCharacter: "Daenerys Targaryenas Daenerys Targaryen",
    },
    {
      id: "nm0227759",
      image:
        "https://imdb-api.com/images/original/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_Ratio1.0000_AL_.jpg",
      name: "Peter Dinklage",
      asCharacter: "Tyrion Lannisteras Tyrion Lannister",
    },
    {
      id: "nm3229685",
      image:
        "https://imdb-api.com/images/original/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_Ratio1.0000_AL_.jpg",
      name: "Kit Harington",
      asCharacter: "Jon Snowas Jon Snow",
    },
    {
      id: "nm0372176",
      image:
        "https://imdb-api.com/images/original/MV5BMzIwMjIwNjg0M15BMl5BanBnXkFtZTgwOTI3MDEzMDE@._V1_Ratio1.0000_AL_.jpg",
      name: "Lena Headey",
      asCharacter: "Cersei Lannisteras Cersei Lannister",
    },
    {
      id: "nm3849842",
      image:
        "https://imdb-api.com/images/original/MV5BMjM5Mjg4MDQ3MF5BMl5BanBnXkFtZTgwMDA2MjkxMjI@._V1_Ratio1.0000_AL_.jpg",
      name: "Sophie Turner",
      asCharacter: "Sansa Starkas Sansa Stark",
    },
    {
      id: "nm3586035",
      image:
        "https://imdb-api.com/images/original/MV5BMTQ5NjM3ZDYtNzZjOS00YTdmLWJlMjEtMmNjNjczOGRiYWQwXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio1.0000_AL_.jpg",
      name: "Maisie Williams",
      asCharacter: "Arya Starkas Arya Stark",
    },
    {
      id: "nm0182666",
      image:
        "https://imdb-api.com/images/original/MV5BMzczZWMxYTItZDZhZC00ZTQ4LWE2OTMtYzI1ODhkYmViN2YyXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_Ratio1.0000_AL_.jpg",
      name: "Nikolaj Coster-Waldau",
      asCharacter: "Jaime Lannisteras Jaime Lannister",
    },
    {
      id: "nm0322513",
      image:
        "https://imdb-api.com/images/original/MV5BMTk2NzU2NjI2MF5BMl5BanBnXkFtZTcwMzI1OTQ3Mw@@._V1_Ratio1.5000_AL_.jpg",
      name: "Iain Glen",
      asCharacter: "Jorah Mormontas Jorah Mormont",
    },
    {
      id: "nm4263213",
      image:
        "https://imdb-api.com/images/original/MV5BOGQyODY2YTUtNTBhYy00NGY1LThlNmItYzkyODBiYjI2YTU3XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio1.0000_AL_.jpg",
      name: "John Bradley",
      asCharacter: "Samwell Tarlyas Samwell Tarly",
    },
    {
      id: "nm0654295",
      image:
        "https://imdb-api.com/images/original/MV5BMjAyMTI1OGYtNWQxMC00ZWJmLTgyOGMtN2RmNDUwZTQ2NTM3XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_Ratio1.0000_AL_.jpg",
      name: "Alfie Allen",
      asCharacter: "Theon Greyjoyas Theon Greyjoy",
    },
    {
      id: "nm0384152",
      image:
        "https://imdb-api.com/images/original/MV5BNDM3NDYyNDE5NV5BMl5BanBnXkFtZTcwNDIxNzQyOA@@._V1_Ratio1.0000_AL_.jpg",
      name: "Conleth Hill",
      asCharacter: "Lord Varysas Lord Varys",
    },
    {
      id: "nm0192377",
      image:
        "https://imdb-api.com/images/original/MV5BMjEyMDM0NzQ5NV5BMl5BanBnXkFtZTcwNDkyODQyNw@@._V1_Ratio1.0000_AL_.jpg",
      name: "Liam Cunningham",
      asCharacter: "Davos Seaworthas Davos Seaworth",
    },
    {
      id: "nm3729225",
      image:
        "https://imdb-api.com/images/original/MV5BMzA3MTcxMTMzM15BMl5BanBnXkFtZTcwMDI2MDg0Nw@@._V1_Ratio1.0000_AL_.jpg",
      name: "Gwendoline Christie",
      asCharacter: "Brienne of Tarthas Brienne of Tarth",
    },
    {
      id: "nm0318821",
      image:
        "https://imdb-api.com/images/original/MV5BMjMwNzE4MzMxNl5BMl5BanBnXkFtZTgwOTYwMTEyMDE@._V1_Ratio1.0000_AL_.jpg",
      name: "Aidan Gillen",
      asCharacter:
        "Petyr 'Littlefinger' Baelishas Petyr 'Littlefinger' Baelish",
    },
    {
      id: "nm3652842",
      image:
        "https://imdb-api.com/images/original/MV5BMjE0MjM5MDkwMV5BMl5BanBnXkFtZTgwMTM0NzkwNTE@._V1_Ratio1.0000_AL_.jpg",
      name: "Isaac Hempstead Wright",
      asCharacter: "Bran Starkas Bran Stark",
    },
    {
      id: "nm0564920",
      image:
        "https://imdb-api.com/images/original/MV5BYmIzMjdkZmEtMDA0Yy00YzVhLWEzYmEtOWRmZmMzODYxZDQ5XkEyXkFqcGdeQXVyMTAwMDczMTU3._V1_Ratio1.0000_AL_.jpg",
      name: "Rory McCann",
      asCharacter: "Sandor 'The Hound' Cleganeas Sandor 'The Hound' Clegane",
    },
    {
      id: "nm2812026",
      image:
        "https://imdb-api.com/images/original/MV5BMTM3NzQ4ODU0M15BMl5BanBnXkFtZTcwMDM4Njg3OA@@._V1_Ratio1.0000_AL_.jpg",
      name: "Nathalie Emmanuel",
      asCharacter: "Missandeias Missandei",
    },
    {
      id: "nm0283492",
      image:
        "https://imdb-api.com/images/original/MV5BMjMxMTE3Nzg1N15BMl5BanBnXkFtZTgwNTc2MTk4MjI@._V1_Ratio1.0000_AL_.jpg",
      name: "Jerome Flynn",
      asCharacter: "Bronnas Bronn",
    },
  ],
  fullCast: null,
  genres: "Action, Adventure, Drama",
  genreList: [
    { key: "Action", value: "Action" },
    { key: "Adventure", value: "Adventure" },
    { key: "Drama", value: "Drama" },
  ],
  companies: "Home Box Office (HBO), Television 360, Grok! Studio",
  companyList: [
    { id: "co0008693", name: "Home Box Office (HBO)" },
    { id: "co0335036", name: "Television 360" },
    { id: "co0167350", name: "Grok! Studio" },
  ],
  countries: "USA, UK",
  countryList: [
    { key: "USA", value: "USA" },
    { key: "UK", value: "UK" },
  ],
  languages: "English",
  languageList: [{ key: "English", value: "English" }],
  contentRating: "TV-MA",
  imDbRating: "9.2",
  imDbRatingVotes: "1986556",
  metacriticRating: "86",
  ratings: null,
  wikipedia: null,
  posters: null,
  images: null,
  trailer: null,
  boxOffice: {
    budget: "",
    openingWeekendUSA: "",
    grossUSA: "",
    cumulativeWorldwideGross: "",
  },
  tagline: "Winter is coming.",
  keywords: "based on novel,dragon,politics,nudity,incest",
  keywordList: ["based on novel", "dragon", "politics", "nudity", "incest"],
  similars: [
    {
      id: "tt0903747",
      title: "Breaking Bad",
      image:
        "https://imdb-api.com/images/original/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.5",
    },
    {
      id: "tt4574334",
      title: "Stranger Things",
      image:
        "https://imdb-api.com/images/original/MV5BODZlYjQ4NzYtZTg1MC00NGY4LTg4NjQtNGE3ZjRkMjk3YjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.8019_AL_.jpg",
      imDbRating: "8.7",
    },
    {
      id: "tt7366338",
      title: "Chernobyl",
      image:
        "https://imdb-api.com/images/original/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt2442560",
      title: "Peaky Blinders",
      image:
        "https://imdb-api.com/images/original/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.8",
    },
    {
      id: "tt2306299",
      title: "Vikings",
      image:
        "https://imdb-api.com/images/original/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.5",
    },
    {
      id: "tt1520211",
      title: "The Walking Dead",
      image:
        "https://imdb-api.com/images/original/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.2",
    },
    {
      id: "tt13380510",
      title: "Game of Thrones",
      image:
        "https://imdb-api.com/images/original/MV5BYTM3N2ZiZTgtYjlhOC00NGI2LTk5MWItNDBiOGVhZmNhMzZkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_Ratio1.0048_AL_.jpg",
      imDbRating: "9.6",
    },
    {
      id: "tt1475582",
      title: "Sherlock",
      image:
        "https://imdb-api.com/images/original/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.1",
    },
    {
      id: "tt0386676",
      title: "The Office",
      image:
        "https://imdb-api.com/images/original/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      id: "tt0108778",
      title: "Friends",
      image:
        "https://imdb-api.com/images/original/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6860_AL_.jpg",
      imDbRating: "8.9",
    },
    {
      id: "tt0475784",
      title: "Westworld",
      image:
        "https://imdb-api.com/images/original/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.6",
    },
    {
      id: "tt8111088",
      title: "The Mandalorian",
      image:
        "https://imdb-api.com/images/original/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "8.7",
    },
  ],
  tvSeriesInfo: {
    yearEnd: "2019",
    creators: "David Benioff, D.B. Weiss",
    creatorList: [
      { id: "nm1125275", name: "David Benioff" },
      { id: "nm1888967", name: "D.B. Weiss" },
    ],
    seasons: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  tvEpisodeInfo: null,
  errorMessage: null,
};
const trailerMock = {
  imDbId: "tt0944947",
  title: "Game of Thrones",
  fullTitle: "Game of Thrones (TV Series 2011–2019)",
  type: "TVSeries",
  year: "2011",
  videoId: "vi59490329",
  videoTitle: "Official Series Trailer",
  videoDescription: "It’s time to return to Westeros.",
  thumbnailUrl:
    "https://m.media-amazon.com/images/M/MV5BZTg4YzdjNTctNDg5Mi00ZmU1LTkzOWEtNmMyNDBjZjNhNTJiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
  uploadDate: null,
  link: "https://www.imdb.com/video/vi59490329",
  linkEmbed: "https://www.imdb.com/video/imdb/vi59490329/imdb/embed",
  errorMessage: "",
};
