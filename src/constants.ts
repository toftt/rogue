export const GRID_SIZE = 16;
export const GRID_HEIGHT = 32;
export const GRID_WIDTH = 44;

export const DIRECTIONS: DirectionMapping = {
    'N': { x: 0, y: -1 },
    'S': { x: 0, y: 1 },
    'W': { x: -1, y: 0 },
    'E': { x: 1, y: 0 },
    'NE': { x: 1, y: -1 },
    'NW': { x: -1, y: -1 },
    'SE': { x: 1, y: 1 },
    'SW': { x: -1, y: 1},
};