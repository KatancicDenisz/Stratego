import { cards } from "./cards";

const cardsCollection = cards;
const lineup = [
  { id: 25, figure: 1, tile: "player2", x: 0, y: 4 },
  { id: 26, figure: 2, tile: "player2", x: 1, y: 4 },
  { id: 27, figure: 9, tile: "player2", x: 2, y: 4 },
  { id: 28, figure: 4, tile: "player2", x: 3, y: 4 },
  { id: 29, figure: 2, tile: "player2", x: 4, y: 4 },
  { id: 30, figure: 9, tile: "player2", x: 5, y: 4 },
  { id: 31, figure: 5, tile: "player2", x: 0, y: 5 },
  { id: 32, figure: 7, tile: "player2", x: 1, y: 5 },
  { id: 33, figure: 11, tile: "player2", x: 2, y: 5 },
  { id: 34, figure: 10, tile: "player2", x: 3, y: 5 },
  { id: 35, figure: 12, tile: "player2", x: 4, y: 5 },
  { id: 36, figure: 12, tile: "player2", x: 5, y: 5 },
];
/*
const lineup = [
  { id: 1, figure: 2, tile: "player1", x: 0, y: 0, originalID: 1 },
  { id: 2, figure: 9, tile: "player1", x: 1, y: 0, originalID: 2 },
  { id: 3, figure: 4, tile: "player1", x: 2, y: 0, originalID: 3 },
  { id: 4, figure: 2, tile: "player1", x: 3, y: 0, originalID: 4 },
  { id: 5, figure: 9, tile: "player1", x: 4, y: 0, originalID: 5 },
  { id: 6, figure: 5, tile: "player1", x: 5, y: 0, originalID: 6 },
  { id: 7, figure: 7, tile: "player1", x: 0, y: 1, originalID: 7 },
  { id: 8, figure: 11, tile: "player1", x: 1, y: 1, originalID: 8 },
  { id: 9, figure: 10, tile: "player1", x: 2, y: 1, originalID: 9 },
  { id: 10, figure: 12, tile: "player1", x: 3, y: 1, originalID: 10 },
  { id: 11, figure: 12, tile: "player1", x: 4, y: 1, originalID: 11 },
  { id: 12, figure: 1, tile: "player1", x: 5, y: 1, originalID: 12 },
  { id: 13, figure: 0, tile: "empty", x: 0, y: 2 },
  { id: 14, figure: 0, tile: "empty", x: 1, y: 2 },
  { id: 15, figure: 0, tile: "empty", x: 2, y: 2 },
  { id: 16, figure: 0, tile: "empty", x: 3, y: 2 },
  { id: 17, figure: 0, tile: "empty", x: 4, y: 2 },
  { id: 18, figure: 0, tile: "empty", x: 5, y: 2 },
  { id: 19, figure: 0, tile: "empty", x: 0, y: 3 },
  { id: 20, figure: 0, tile: "empty", x: 1, y: 3 },
  { id: 21, figure: 0, tile: "empty", x: 2, y: 3 },
  { id: 22, figure: 0, tile: "empty", x: 3, y: 3 },
  { id: 23, figure: 0, tile: "empty", x: 4, y: 3 },
  { id: 24, figure: 0, tile: "empty", x: 5, y: 3 },
  { id: 25, figure: 2, tile: "player2", x: 0, y: 4, originalID: 25 },
  { id: 26, figure: 9, tile: "player2", x: 1, y: 4, originalID: 26 },
  { id: 27, figure: 4, tile: "player2", x: 2, y: 4, originalID: 27 },
  { id: 28, figure: 2, tile: "player2", x: 3, y: 4, originalID: 28 },
  { id: 29, figure: 9, tile: "player2", x: 4, y: 4, originalID: 29 },
  { id: 30, figure: 5, tile: "player2", x: 5, y: 4, originalID: 30 },
  { id: 31, figure: 7, tile: "player2", x: 0, y: 5, originalID: 31 },
  { id: 32, figure: 11, tile: "player2", x: 1, y: 5, originalID: 32 },
  { id: 33, figure: 10, tile: "player2", x: 2, y: 5, originalID: 33 },
  { id: 34, figure: 12, tile: "player2", x: 3, y: 5, originalID: 34 },
  { id: 35, figure: 3, tile: "player2", x: 4, y: 5, originalID: 35 },
  { id: 36, figure: 12, tile: "player2", x: 5, y: 5, originalID: 36 },
];
*/
export let player2lineup = [];

lineup.forEach((el) => {
  let curr = cardsCollection.find((c) => el.figure === c.id);
  player2lineup.push({
    id: el.id,
    tile: el.tile,
    title: curr.title,
    power: curr.power,
    icon: curr.icon,
    skill: curr.skill,
    x: el.x,
    y: el.y,
    figure: el.figure,
    originalID: el.originalID,
  });
});
