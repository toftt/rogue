type CardinalDirection = 'N' | 'S' | 'W' | 'E' | 'NE' | 'NW' | 'SW' | 'SE';
interface Point {
    x: number;
    y: number;
}
interface DirectionMapping {
    [direction: string]: Point
}