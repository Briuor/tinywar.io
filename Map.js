export default class Map {
    constructor() {
        this.tiles = [
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
            [3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3],
        ]
    }

    get getTilesCols() { return this.tiles[0].length }
    get getTilesRows() { return this.tiles.length }
    get getMapMaxWidth() { return this.tiles[0].length*Map.TILE_SIZE }
    get getMapMaxHeight() { return this.tiles.length*Map.TILE_SIZE }


  isWalkable(x, y) {
    const col = Math.floor(x / Map.TILE_SIZE);
    const row = Math.floor(y / Map.TILE_SIZE);

    // Check if the position is within the map boundaries
    if (row >= 0 && row < this.tiles.length && col >= 0 && col < this.tiles[0].length) {
      return this.tiles[row][col] >= 1;
    }
    return false;
  }

    render(ctx) {
        for(let col = 0; col < this.getTilesCols(); col++) {
            for(let row = 0; row < this.getTilesRows(); row++) {
                if(this.tiles[row][col] == 2){
                    ctx.fillStyle = "green";
                }
                else if(this.tiles[row][col] == 3){
                    ctx.fillStyle = "blue";
                }
                ctx.beginPath();
                ctx.fillRect(col*Map.TILE_SIZE, row*Map.TILE_SIZE, Map.TILE_SIZE, Map.TILE_SIZE);
            }
        }
    }

    static TILE_SIZE = 32
}