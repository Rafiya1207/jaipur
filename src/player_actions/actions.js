import { take } from "./take.js";
import { exchange } from "./exchange.js";
import { sellGoods } from "./sell.js";

export const fillMarket = ({ market, deck }) => {
  if (deck.length < 1) return market;

  while (market.length < 5 || deck.length !== 0) {
    const good = deck.pop();
    if (good) market.push(good);
  }
  return market;
};

const validateAction = (userInput) => {
  let action = parseInt(userInput);

  if (![1, 2, 3].includes(action)) {
    action = prompt("Enter valid action number");
    return validateAction(action);
  }
  return action;
};

export const chooseAction = () => {
  const marketFns = [take, exchange, sellGoods];
  
  const action = validateAction(prompt('Enter action(number): '));

  return marketFns[action - 1];
};
