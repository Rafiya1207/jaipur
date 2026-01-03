import { chooseAction, fillMarket } from "./player_actions/actions.js";
import { displayMarket, displayPlayer } from "./display_market_and_player.js";
import { isGameEnded, winnerAmong } from "./game_end.js";

export const runGame = (gameState) => {
  let currentPlayer = 0;

  while (!isGameEnded(gameState.deck, gameState.goods)) {
    console.clear();

    fillMarket(gameState);

    const player = gameState.players[currentPlayer];

    displayMarket(gameState);
    displayPlayer(player);

    const action = chooseAction();

    action(player, gameState);

    // displayMarket(gameState);
    // displayPlayer(player);

    prompt("Go to next player, press enter");
    currentPlayer = 1 - currentPlayer;
  }

  winnerAmong(gameState.players);
};
