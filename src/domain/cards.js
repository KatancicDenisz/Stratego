import flag from "../assets/icons/flag.png";
import bomb from "../assets/icons/bomb.png";
import eye from "../assets/icons/eye.png";
import helmet from "../assets/icons/helmet.png";
import knight from "../assets/icons/knight.png";
import soldier from "../assets/icons/soldier.png";
import soldier2 from "../assets/icons/soldier2.png";
import soldier3 from "../assets/icons/soldier3.png";
import soldier4 from "../assets/icons/soldier4.png";
import soldier5 from "../assets/icons/soldier5.png";
import soldier6 from "../assets/icons/soldier6.png";
import soldier7 from "../assets/icons/soldier7.png";

export const cards = [
  {
    id: 0,
    title: "",
    count: 12,
    icon: null,
    power: null,
    skill: "",
  },
  {
    id: 1,
    title: "Zászló",
    count: 1,
    icon: flag,
    power: 0,
    skill: "Ha megszerzik a zászlód vége a játéknak :(",
  },
  {
    id: 2,
    title: "Tábornagy",
    count: 1,
    icon: knight,
    power: 10,
    skill: "",
  },
  {
    id: 3,
    title: "Tábornok",
    count: 0,
    icon: soldier,
    power: 9,
    skill: "",
  },
  {
    id: 4,
    title: "Ezredes",
    count: 1,
    icon: soldier2,
    power: 8,
    skill: "",
  },
  {
    id: 5,
    title: "Őrnagy",
    count: 0,
    icon: helmet,
    power: 7,
    skill: "",
  },
  {
    id: 6,
    title: "Kapitány",
    count: 1,
    icon: soldier3,
    power: 6,
    skill: "",
  },
  {
    id: 7,
    title: "Főhadnagy",
    count: 0,
    icon: soldier4,
    power: 5,
    skill: "",
  },
  {
    id: 8,
    title: "Őrmester",
    count: 1,
    icon: soldier5,
    power: 4,
    skill: "",
  },
  {
    id: 9,
    title: "Aknász",
    count: 2,
    icon: soldier6,
    power: 3,
    skill: "Hatástalanítani tudja a Bombát",
  },
  {
    id: 10,
    title: "Felderítő",
    count: 2,
    icon: eye,
    power: 2,
    skill: "Bármennyi lépést tud előre és oldalra lépni",
  },
  {
    id: 11,
    title: "Kém",
    count: 1,
    icon: soldier7,
    power: 1,
    skill: "Meg tudja ölni a Tábornagyot(10)",
  },
  {
    id: 12,
    title: "Bomba",
    count: 2,
    icon: bomb,
    power: 0,
    skill: "Leveszi az összes ellenséget kivéve az Aknászt(3)",
  },
];
