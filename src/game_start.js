import { chooseAction, fillMarket } from "./player_actions/actions.js";
import { display } from "./display_market_and_player.js";
import { isGameEnded, winnerAmong } from "./game_end.js";

export const runGame = (gameState) => {
  let currentPlayer = 0;

  fillMarket(gameState);

  while (!isGameEnded(gameState.deck, gameState.goods)) {
    const player = gameState.players[currentPlayer];
    display(gameState);

    const action = chooseAction();
    action(player, gameState);

    fillMarket(gameState);
    
    prompt("Go to next player, press enter");
    currentPlayer = 1 - currentPlayer;
  }

  winnerAmong(gameState.players);
};
