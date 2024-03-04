import React from "react";
import style from "./style.module.scss";
import { ProjectListItem } from "../ProjectListItem";
import { v4 } from "uuid";
import poster from "../../assets/alex_films.jpg";

const project = [
  {
    id: v4(),
    title: "AlexFilms",
    desc: "A multipage movie search site. Used the TMDB API. Sort by genre, search, trailers, sliders.",
    languages: ["ReactJS, Typescript", "Redux toolkit", "Axios", "RestAPI"],
    poster: "/../../assets/alex_films.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: v4(),
    title: "AlexFilms",
    desc: "A multipage movie search site. Used the TMDB API. Sort by genre, search, trailers, sliders.",
    languages: ["ReactJS, Typescript", "Redux toolkit", "Axios", "RestAPI"],
    poster: "/public/assets/alex_films.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: v4(),
    title: "AlexFilms",
    desc: "A multipage movie search site. Used the TMDB API. Sort by genre, search, trailers, sliders.",
    languages: ["ReactJS, Typescript", "Redux toolkit", "Axios", "RestAPI"],
    poster: "/public/assets/alex_films.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: v4(),
    title: "AlexFilms",
    desc: "A multipage movie search site. Used the TMDB API. Sort by genre, search, trailers, sliders.",
    languages: ["ReactJS, Typescript", "Redux toolkit", "Axios", "RestAPI"],
    poster: "/public/assets/alex_films.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectList: React.FC = () => {
  return (
    <ul className={style.container}>
      {project.map((el) => (
        <ProjectListItem
          key={el.id}
          title={el.title}
          desc={el.desc}
          // poster={el.poster}
          poster={poster}
          languages={el.languages}
          liveUrl={el.liveUrl}
          githubUrl={el.githubUrl}
        />
      ))}
    </ul>
  );
};

export { ProjectList };
