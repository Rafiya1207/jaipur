import { gameState } from "../DS/game_state.js";

const makeEmojiMarket = (market) => {
  const emojiMarket = [];
  for (const item of market) {
    emojiMarket.push(gameState.goods[item].symbol);
  }
  return emojiMarket.join("");
};

export const displayMarket = (market) => {
  const emojiMarket = makeEmojiMarket(market);
  const marketInfo = `  Market Goods
  ${emojiMarket}
  ${market.join("  ")}
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
