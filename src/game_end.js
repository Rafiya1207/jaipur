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

const highScorePlayerOf = (players) =>
  players[0].points > players[1].points ? players[0] : players[1];

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
