enum Direction {
    LEFT = 100,
    RIGHT,
    TOP,
    DOWN
}

function turnDirection(dircetion: Direction) {
    console.log(dircetion);

    switch (dircetion) {
        case Direction.LEFT:
            console.log('向左')
            break;
        case Direction.RIGHT:
            console.log('向右')
            break;
        case Direction.TOP:
            console.log('向上')
            break;
        case Direction.DOWN:
            console.log('向下')
            break;
        default:
            break;
    }
}

turnDirection(Direction.LEFT)

turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP);
turnDirection(Direction.DOWN)