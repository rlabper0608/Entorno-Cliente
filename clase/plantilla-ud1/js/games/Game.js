import { GameSubmarine } from './GameSubmarine.js';

const GAMES = {
    Submarine: 'Submarine'
}

const Game = (game, UIcontrol) => {
    if (game === GAMES.Submarine) {
        return new GameSubmarine(UIcontrol);
    }
}

export { GAMES, Game };