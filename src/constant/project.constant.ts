import { v4 } from "uuid";
import poster from "../assets/alex_films.jpg";
import poster2 from "../assets/Screenshot 2024-03-07 172320.png";
import poster3 from "../assets/Screenshot 2024-03-07 173643.png";

export const projectList = [
  {
    id: v4(),
    title: "AlexFilms",
    desc: 'A website for trailers of the latest movies, utilizing the "TMDB API" with search functionality and various filters. The design is a Netflix clone.',
    languages: ["ReactJS, Typescript", "Redux toolkit", "RestAPI"],
    poster: poster,
    liveUrl: "https://alex-films.vercel.app/",
    githubUrl: "https://github.com/BielowAlex/alex_films_react",
  },
  {
    id: v4(),
    title: "Cinema website",
    desc: "Commercial project in team Expletech. Landing page for the Cinema with admin dashboard. ",
    languages: [
      "NextJs, Typescript",
      "Redux toolkit",
      "NestJS",
      "Typeorm",
      "Aws S3",
    ],
    poster: poster2,
    liveUrl: "https://www.movieland.com.ua/",
    githubUrl: null,
  },
  {
    id: v4(),
    title: "My Portfolio",
    desc: '"My portfolio, a simple landing page with an admin dashboard, a bit of animation, and a bit of love',
    languages: ["ReactJS, Typescript", "Redux toolkit", "Axios", "RestAPI"],
    poster: poster3,
    liveUrl: null,
    githubUrl: "https://github.com/BielowAlex/portfolio-frontend",
  },
];
