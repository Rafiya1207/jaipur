import { chooseAction } from "./actions.js";
import { gameState } from "../../DS/game_state.js";

const isValidRequest = (hand, good, count) => {
  const minimum = "opl".includes(good) ? 1 : 2;
  return count >= minimum && hand.filter((x) => x === good).length >= count;
};

const RemoveGoods = (hand, good, count) => {
  for (let i = 0; i < count; i++) {
    hand.splice(hand.indexOf(good), 1);
  }
};

const getBonus = (bonusTokens, count, tokens) => {
  if (count < 3) {
    return;
  }
  count > 5 && (count = 5);
  return tokens.push(bonusTokens[count].pop());
};

export const sellGoods = (
  player,
  { goods, bonus },
) => {
  const good = prompt("Enter the good you want to sell");
  const count = parseInt(prompt("Enter the number of good"));
  if (!isValidRequest(player.hand, good, count)) {
    console.log("invalid input, Try again");
    const action = chooseAction();
    return action(player, gameState);
  }
  RemoveGoods(player.hand, good, count);
  player.goodsCoins.push(...goods[good].coins.splice(0, count));
  getBonus(bonus, count, player.bonusCoins);
  console.log(`successfully sold`);
};