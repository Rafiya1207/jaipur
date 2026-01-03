import { sumOf } from "jsr:@std/collections";

export const isDeckEmpty = (deck) => !deck.length;

export const are3CoinColorsFinished = (goods) => {
  const emptyCoins = Object.values(goods).reduce(
    (count, { coins }) => (!coins.length) ? ++count : count,
    0,
  );
  console.log(emptyCoins);

  return emptyCoins >= 3;
};

export const assignCamelToken = (players) => {
  const playerWithMoreCamels = players[0].herd.length > players[1].herd.length
    ? 0
    : 1;

  players[playerWithMoreCamels].points += 5;
};

export const assignSealOfExcellence = (winner) =>
  winner.sealOfExcellenceCount++;

const highScorePlayerOf = ([player1, player2]) => {
  const player1Points = sumOf([...player1.goodsCoins, ...player1.bonusCoins], x => x)
  const player2Points = sumOf([...player2.goodsCoins, ...player2.bonusCoins], x => x)
  return player1Points > player2Points ? player1 : player2;
}

const displayMessage = (winner) => {
  const message =
    `Hurray!!!!${winner.name}, you WON.\n with score ${winner.points}`;
  console.log(message);
};

export const winnerAmong = (players) => {
  assignCamelToken(gameState.players);
  const winner = highScorePlayerOf(players);
  assignSealOfExcellence(winner);

  displayMessage(winner);
};

export const isGameEnded = (deck, goods) =>
  isDeckEmpty(deck) || are3CoinColorsFinished(goods);
