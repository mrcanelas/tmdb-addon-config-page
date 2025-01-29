interface Integration {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const integrations: Integration[] = [
  {
    id: "tmdb",
    name: "TMDB Lists",
    icon: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    id: "rpdb",
    name: "Rating Poster Database",
    icon: "https://github.com/RatingPosterDB.png",
    description: "RPDB is an easy-to-use media center ratings solution.",
  },
  {
    id: "mdblist",
    name: "MDBList",
    icon: "https://mdblist.com/static/mdblist.png",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    id: "trakt",
    name: "Trakt",
    icon: "https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    id: "streaming",
    name: "Streaming Catalogs",
    icon: "https://www.svgrepo.com/show/303341/netflix-1-logo.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  }
]; 