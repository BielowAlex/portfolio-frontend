import { v4 } from "uuid";

export const languagesConstant: LanguageEl[] = [
  {
    id: v4(),
    language: "English",
    level: "A2 Pre Intermediate",
  },
  {
    id: v4(),
    language: "Polish",
    level: "C2 Proficient",
  },
  {
    id: v4(),
    language: "Ukrainian",
    level: "Native",
  },
  {
    id: v4(),
    language: "Russian",
    level: "C2 Proficient",
  },
];

type LanguageEl = {
  id: string;
  language: string;
  level: string;
};
