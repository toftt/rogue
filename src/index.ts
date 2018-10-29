import Square from "./square";
import { GRID_HEIGHT, GRID_WIDTH } from "./constants";

const canvas = <HTMLCanvasElement>document.getElementById('game');
export const context = <CanvasRenderingContext2D>canvas.getContext('2d');

const player = new Square();
const monster = new Square();
monster.location.x = GRID_WIDTH - 1;
monster.location.y = GRID_HEIGHT - 1;

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    context.fillStyle = '#FF0000';
    monster.draw();
    context.fillStyle = '#000000';
}

draw();

const drawMap = () => {
    const map = new Array(GRID_WIDTH);
    for (let i = 0; i < map.length; i++) {
        map[i] = new Array(GRID_HEIGHT);
        for (let j = 0; j < map[i].length; j++) map[i][j] = 10000;
    }
    
    map[player.location.x][player.location.y] = 0;
    
    let didChange;

    const run = () => {
        didChange = false;
        for (let i = 0; i < map.length; i++)
            for (let j = 0; j < map[0].length; j++) {
                const current = map[i][j];
                const neighbors = [
                    map[i + 1 >= map.length ? i : i + 1][j], // E
                    map[i - 1 < 0 ? 0 : i - 1][j], // W
                    map[i][j + 1], // S
                    map[i][j - 1], // N
                ].filter(elem => elem !== undefined);
        
                const min = Math.min(...neighbors);
                if (current > min + 1) {
                    map[i][j] = min + 1;
                    didChange = true;
                }
            }
    }

    run();
    while(didChange) run();

    return map;
};

const chooseMonsterDirection = (p: Point, m: any) => {
    const i = p.x;
    const j = p.y;
    const cur = m[i][j];

    if (j - 1 >= 0 && m[i][j - 1] < cur) return 'N';
    if (i - 1 >= 0 && m[i - 1][j] < cur) return 'W';
    if (i + 1 < m.length && m[i + 1][j] < cur) return 'E';
    if (j + 1 < m[0].length && m[i][j + 1] < cur) return 'S';
    return 'NW';
}

addEventListener('keypress', (event: KeyboardEvent) => {
    const pMap = drawMap();
    const dir = chooseMonsterDirection(monster.location, pMap);
    monster.move(dir);
    console.log(pMap);
    switch(event.keyCode) {
        case 52:
            player.move('W');
            break;
        case 56:
            player.move('N');
            break;
        case 54:
            player.move('E');
            break;
        case 50:
            player.move('S');
            break;
        case 55:
            player.move('NW');
            break;
        case 57:
            player.move('NE');
            break;
        case 49:
            player.move('SW');
            break;
        case 51:
            player.move('SE');
            break;
    }
    draw();
});