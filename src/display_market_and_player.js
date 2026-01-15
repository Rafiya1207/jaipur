export const displayMarket = (market) => {
  const marketInfo = `  Market Goods
  ${market.join(" ")}
`;
  console.log(marketInfo);
};

export const displayPlayer = (player) => {
  const playerInfo = `Current player = ${player.playerName}
hand = ${player.hand}
herd = ${player.herd}
`;
  console.log(playerInfo);
};

const displayActions = () => {
  console.log(
`Available actions
  1. take
  2. exchange
  3. sell
enter "actions" to get above actions`,
  );
};

export const display = (market, player) => {
  console.clear();
  displayMarket(market);
  displayPlayer(player);
  displayActions();
};
