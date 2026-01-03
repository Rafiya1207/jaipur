const isValidRequest = (hand, good, count) => {
  const minimum = "opl".includes(good) ? 1 : 2;
  return count >= minimum && hand.filter((x) => x === good).length >= count;
};

const RemoveGoods = (hand, good, count) => {
  for (let i = 0; i < count; i++) {
    hand.splice(hand.indexOf(good), 1);
  }
};

const getBonus = (bonusTokens, count) => {
  if (count < 3) {
    return 0;
  }
  count > 5 && (count = 5);
  return bonusTokens[count].pop() || bonusTokens[count - 1].pop() ||
    bonusTokens[count - 2].pop();
};

export const sellGoods = (
  player,
  { goods, bonus },
) => {
  const good = prompt("Enter the good you want to sell");
  const count = parseInt(prompt("Enter the number of good"));

  if (!isValidRequest(player.hand, good, count)) {
    console.log("invalid input, Try again");
    return sellGoods(player, goods, bonus);
  }
  RemoveGoods(player.hand, good, count);
  const bonusCoin = getBonus(bonus, count);
  player.points += goods[good].coins.splice(0, count).reduce((x, y) => x + y) +
    bonusCoin;

  console.log(`you got ${player.points} points`);
};
