import { GRID_SIZE, DIRECTIONS } from './constants';
import { context } from './index';

export default class Square {
    location: Point;

    constructor() {
        this.location = { x: 0, y: 0 };
    }

    draw() {
        context.fillRect(this.location.x * GRID_SIZE, this.location.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    }

    move(direction: CardinalDirection) {
        const { x, y } = DIRECTIONS[direction];
        this.location.x += x
        this.location.y += y
    }
};