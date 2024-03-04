import { v4 } from "uuid";

export type Skill = {
  id: string;
  name: string;
};

export type Table = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillsConstant: Table[] = [
  {
    id: v4(),
    title: "Languages",
    skills: [
      {
        id: v4(),
        name: "Javascript",
      },
      {
        id: v4(),
        name: "Typescript",
      },
      {
        id: v4(),
        name: "Java",
      },
      {
        id: v4(),
        name: "C++",
      },
    ],
  },
  {
    id: v4(),
    title: "Frameworks",
    skills: [
      {
        id: v4(),
        name: "React",
      },
      {
        id: v4(),
        name: "NestJS",
      },
      {
        id: v4(),
        name: "Express",
      },
      {
        id: v4(),
        name: "NextJS",
      },
    ],
  },
  {
    id: v4(),
    title: "Database",
    skills: [
      {
        id: v4(),
        name: "Postgresql",
      },
      {
        id: v4(),
        name: "MySql",
      },
      {
        id: v4(),
        name: "SQLLite",
      },
      {
        id: v4(),
        name: "MongoDB",
      },
    ],
  },
  {
    id: v4(),
    title: "Other",
    skills: [
      {
        id: v4(),
        name: "AWS S3",
      },
      {
        id: v4(),
        name: "Git",
      },
      {
        id: v4(),
        name: "Figma",
      },
      {
        id: v4(),
        name: "CSS/SCSS",
      },
      {
        id: v4(),
        name: "Postman",
      },
      {
        id: v4(),
        name: "HTML",
      },
    ],
  },
  {
    id: v4(),
    title: "Libraries",
    skills: [
      {
        id: v4(),
        name: "Redux Toolkit",
      },
      {
        id: v4(),
        name: "Axios",
      },
      {
        id: v4(),
        name: "Graphql",
      },
      {
        id: v4(),
        name: "SocketIO",
      },
      {
        id: v4(),
        name: "Axios",
      },
      {
        id: v4(),
        name: "Tailwind",
      },
      {
        id: v4(),
        name: "React-router",
      },
      {
        id: v4(),
        name: "Typeorm",
      },
    ],
  },
];
