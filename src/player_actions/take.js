import { chooseAction } from "./actions.js";

const takeFromMarket = (market, item) => {
  if (item === "m") {
    const camels = [];
    while (market.includes(item)) {
      camels.push(market.splice(market.indexOf(item), 1));
    }
    return camels.flat();
  }
  return market.splice(market.indexOf(item), 1);
};

const giveToPlayer = (player, good) => {
  if (good.includes("m")) {
    player.herd.push(...good);
  } else {
    player.hand.push(...good);
  }
};

export const take = (player, gameState) => {
  if (player.hand.length > 6) {
    console.log("Your hand is full, try exchange or sell");
    const action = chooseAction();
    action(player, gameState);
    return;
  }
  const item = prompt("Select good to take from market: ");
  if(item === "actions") {
    // const action = chooseAction();
    chooseAction()(player, gameState);
    return;
  }
  if (item.length > 1) {
    console.log("enter only one item");
    return take(player, gameState);
  }
  if (!gameState.market.includes(item)) {
    console.log("enter goods available in market");
    return take(player, gameState);
  }
  const good = takeFromMarket(gameState.market, item);
  console.log(`You took =  ${good.join(" ")}`);
  giveToPlayer(player, good);
};