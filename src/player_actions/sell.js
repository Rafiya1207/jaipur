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
  const input = prompt("what do you wanna sell and how many...?");
  const [good, count] = input.trim().split(/ +/);
  if (!isValidRequest(player.hand, good, count)) {
    console.log("invalid input, Try again");
    return sellGoods(player, goods, bonus);
  }
  RemoveGoods(player.hand, good, count);
  const bonusCoin = getBonus(bonus, count);
  return player.points +=
    goods[good].coins.splice(0, count).reduce((x, y) => x + y) + bonusCoin;
};