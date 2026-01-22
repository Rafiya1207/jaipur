import { sumOf } from "jsr:@std/collections";

export const isDeckEmpty = (deck) => !deck.length;

export const are3CoinColorsFinished = (goods) => {
  const emptyCoins = Object.values(goods).reduce(
    (count, { coins }) => (!coins.length) ? ++count : count,
    0,
  );

  return emptyCoins >= 3;
};

export const assignCamelToken = ([player1, player2]) => {
  if (player1.herd.length === player2.herd.length) {
    return;
  }
  const playerWithMoreCamels = player1.herd.length > player2.herd.length
    ? player1
    : player2;

  playerWithMoreCamels.points += 5;
};

export const assignSealOfExcellence = (winner) =>
  winner.sealOfExcellenceCount++;

const highScorePlayerOf = ([player1, player2]) => {
  player1.points += sumOf(
    [...player1.goodsCoins, ...player1.bonusCoins],
    (x) => x,
  );
  player2.points += sumOf(
    [...player2.goodsCoins, ...player2.bonusCoins],
    (x) => x,
  );

  if (player1.points === player2.points) {
    if (player1.bonusCoins.length === player2.bonusCoins.length) {
      return player1.goodsCoins.length > player2.goodsCoins.length
        ? player1
        : player2;
    }

    return player1.bonusCoins.length > player2.bonusCoins.length
      ? player1
      : player2;
  }
  return player1.points > player2.points ? player1 : player2;
};

const displayMessage = (message) => {
  console.log(message);
};

export const winnerAmong = (players) => {
  assignCamelToken(players);
  const winner = highScorePlayerOf(players);

  if (!winner) {
    displayMessage(`TIE!!!, no one won.`);
    return;
  }
  assignSealOfExcellence(winner);

  displayMessage(
    `Hurray!!!! ${winner.playerName}, you WON.\nwith score ${winner.points}`,
  );
};

export const isGameEnded = (deck, goods) =>
  isDeckEmpty(deck) || are3CoinColorsFinished(goods);
