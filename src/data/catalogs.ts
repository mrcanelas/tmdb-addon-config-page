export interface ExtraOption {
  name: string;
  options?: string[];
  isRequired?: boolean;
}

export interface Catalog {
  id: string;
  type: "movie" | "series";
  name: string;
  pageSize: number;
  extra: ExtraOption[];
  extraSupported: string[];
  extraRequired?: string[];
}

export const catalogs: Catalog[] = [
  {
    id: "tmdb.top",
    type: "movie",
    name: "Popular",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Animação",
          "Aventura",
          "Ação",
          "Cinema TV",
          "Comédia",
          "Crime",
          "Documentário",
          "Drama",
          "Família",
          "Fantasia",
          "Faroeste",
          "Ficção científica",
          "Guerra",
          "História",
          "Mistério",
          "Música",
          "Romance",
          "Terror",
          "Thriller"
        ]
      },
      {
        name: "search"
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip",
      "search"
    ]
  },
  {
    id: "tmdb.year",
    type: "movie",
    name: "Ano",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "2025",
          "2024",
          "2023",
          "2022",
          "2021",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
          "2005"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.language",
    type: "movie",
    name: "Idioma",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Portuguese",
          "Afrikaans",
          "Albanian",
          "Arabic",
          "Basque",
          "Belarusian",
          "Bengali",
          "Breton",
          "Bulgarian",
          "Catalan",
          "Chamorro",
          "Croatian",
          "Czech",
          "Danish",
          "Dutch",
          "English",
          "Esperanto",
          "Estonian",
          "Finnish",
          "French",
          "Gaelic",
          "Galician",
          "Georgian",
          "German",
          "Greek",
          "Hebrew",
          "Hindi",
          "Hungarian",
          "Indonesian",
          "Irish",
          "Italian",
          "Japanese",
          "Kannada",
          "Kazakh",
          "Kirghiz",
          "Korean",
          "Kurdish",
          "Latvian",
          "Lithuanian",
          "Malay",
          "Malayalam",
          "Mandarin",
          "Marathi",
          "Norwegian",
          "Norwegian Bokmål",
          "Persian",
          "Polish",
          "Punjabi",
          "Romanian",
          "Russian",
          "Serbian",
          "Sinhalese",
          "Slovak",
          "Slovenian",
          "Somali",
          "Spanish",
          "Swahili",
          "Swedish",
          "Tagalog",
          "Tamil",
          "Telugu",
          "Thai",
          "Turkish",
          "Ukrainian",
          "Urdu",
          "Uzbek",
          "Vietnamese",
          "Welsh",
          "Zulu"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.trending",
    type: "movie",
    name: "Tendências",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Day",
          "Week"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.favorites",
    type: "movie",
    name: "Favoritos",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Top"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.watchlist",
    type: "movie",
    name: "Interesses",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Top"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.top",
    type: "series",
    name: "Popular",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Action & Adventure",
          "Animação",
          "Comédia",
          "Crime",
          "Documentário",
          "Drama",
          "Família",
          "Faroeste",
          "Kids",
          "Mistério",
          "News",
          "Reality",
          "Sci-Fi & Fantasy",
          "Soap",
          "Talk",
          "War & Politics"
        ]
      },
      {
        name: "search"
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip",
      "search"
    ]
  },
  {
    id: "tmdb.year",
    type: "series",
    name: "Ano",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "2025",
          "2024",
          "2023",
          "2022",
          "2021",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
          "2005"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.language",
    type: "series",
    name: "Idioma",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Portuguese",
          "Afrikaans",
          "Albanian",
          "Arabic",
          "Basque",
          "Belarusian",
          "Bengali",
          "Breton",
          "Bulgarian",
          "Catalan",
          "Chamorro",
          "Croatian",
          "Czech",
          "Danish",
          "Dutch",
          "English",
          "Esperanto",
          "Estonian",
          "Finnish",
          "French",
          "Gaelic",
          "Galician",
          "Georgian",
          "German",
          "Greek",
          "Hebrew",
          "Hindi",
          "Hungarian",
          "Indonesian",
          "Irish",
          "Italian",
          "Japanese",
          "Kannada",
          "Kazakh",
          "Kirghiz",
          "Korean",
          "Kurdish",
          "Latvian",
          "Lithuanian",
          "Malay",
          "Malayalam",
          "Mandarin",
          "Marathi",
          "Norwegian",
          "Norwegian Bokmål",
          "Persian",
          "Polish",
          "Punjabi",
          "Romanian",
          "Russian",
          "Serbian",
          "Sinhalese",
          "Slovak",
          "Slovenian",
          "Somali",
          "Spanish",
          "Swahili",
          "Swedish",
          "Tagalog",
          "Tamil",
          "Telugu",
          "Thai",
          "Turkish",
          "Ukrainian",
          "Urdu",
          "Uzbek",
          "Vietnamese",
          "Welsh",
          "Zulu"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.trending",
    type: "series",
    name: "Tendências",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Day",
          "Week"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.favorites",
    type: "series",
    name: "Favoritos",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Top"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  },
  {
    id: "tmdb.watchlist",
    type: "series",
    name: "Interesses",
    pageSize: 20,
    extra: [
      {
        name: "genre",
        options: [
          "Top"
        ],
        isRequired: true
      },
      {
        name: "skip"
      }
    ],
    extraSupported: [
      "genre",
      "skip"
    ],
    extraRequired: [
      "genre"
    ]
  }
]; 