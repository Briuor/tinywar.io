export default class Map {
  constructor() {
    this.tiles = [
      [
        2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 4,
      ],
      [
        6, 15, 11, 1, 13, 1, 16, 11, 16, 16, 16, 13, 15, 11, 14, 13, 10, 1, 1,
        10, 11, 11, 13, 12, 10, 11, 12, 13, 13, 5,
      ],
      [
        6, 1, 12, 11, 12, 1, 1, 1, 14, 1, 15, 1, 1, 16, 10, 1, 15, 16, 10, 14,
        10, 12, 1, 16, 1, 1, 16, 13, 14, 5,
      ],
      [
        6, 1, 1, 13, 12, 13, 1, 15, 14, 12, 14, 12, 12, 15, 14, 1, 16, 13, 12,
        13, 11, 15, 16, 14, 1, 1, 16, 16, 16, 5,
      ],
      [
        6, 12, 15, 15, 16, 1, 15, 1, 1, 10, 16, 14, 12, 16, 11, 10, 13, 1, 1, 1,
        14, 10, 12, 1, 15, 11, 1, 1, 14, 5,
      ],
      [
        6, 14, 12, 1, 1, 1, 1, 1, 1, 1, 16, 13, 12, 11, 12, 14, 16, 1, 13, 1, 1,
        1, 11, 1, 1, 1, 11, 1, 1, 5,
      ],
      [
        6, 12, 11, 1, 13, 15, 13, 13, 1, 15, 12, 15, 1, 10, 16, 1, 1, 1, 12, 1,
        10, 14, 11, 1, 1, 10, 16, 15, 14, 5,
      ],
      [
        6, 13, 10, 15, 16, 12, 1, 1, 1, 12, 1, 1, 14, 1, 15, 1, 1, 1, 12, 1, 14,
        15, 16, 16, 11, 1, 16, 1, 11, 5,
      ],
      [
        6, 1, 16, 1, 15, 14, 13, 1, 13, 10, 10, 1, 10, 14, 14, 13, 1, 1, 1, 1,
        10, 11, 14, 13, 16, 1, 10, 14, 15, 5,
      ],
      [
        6, 1, 1, 10, 14, 16, 14, 1, 1, 1, 14, 15, 11, 15, 1, 1, 10, 1, 11, 12,
        15, 13, 1, 1, 15, 15, 15, 12, 1, 5,
      ],
      [
        6, 1, 15, 12, 10, 13, 13, 11, 16, 16, 10, 15, 12, 14, 10, 10, 1, 1, 12,
        13, 13, 16, 1, 1, 1, 14, 10, 15, 1, 5,
      ],
      [
        6, 10, 13, 1, 1, 16, 15, 1, 15, 1, 12, 16, 13, 16, 15, 14, 1, 11, 15, 1,
        1, 1, 14, 15, 1, 15, 11, 16, 13, 5,
      ],
      [
        6, 14, 16, 1, 1, 12, 11, 15, 14, 1, 1, 13, 1, 10, 13, 13, 13, 11, 14,
        13, 16, 14, 15, 11, 13, 12, 1, 13, 10, 5,
      ],
      [
        6, 1, 15, 16, 1, 12, 14, 10, 15, 15, 13, 1, 1, 14, 12, 10, 1, 1, 16, 14,
        11, 16, 15, 1, 12, 16, 12, 1, 10, 5,
      ],
      [
        6, 12, 13, 1, 12, 1, 16, 1, 1, 10, 16, 15, 16, 1, 1, 11, 14, 14, 1, 1,
        1, 16, 14, 1, 14, 13, 11, 16, 11, 5,
      ],
      [
        6, 10, 13, 13, 15, 14, 1, 10, 10, 16, 11, 13, 1, 1, 12, 1, 16, 1, 1, 1,
        1, 12, 15, 16, 16, 1, 10, 11, 12, 5,
      ],
      [
        6, 1, 12, 14, 16, 12, 1, 15, 10, 11, 1, 13, 16, 13, 1, 1, 10, 13, 1, 16,
        10, 1, 12, 13, 1, 1, 15, 16, 10, 5,
      ],
      [
        6, 10, 14, 15, 15, 13, 13, 1, 1, 10, 11, 10, 12, 11, 13, 16, 11, 14, 1,
        12, 15, 1, 1, 10, 12, 1, 12, 14, 11, 5,
      ],
      [
        6, 1, 14, 10, 13, 10, 10, 1, 12, 13, 14, 12, 1, 1, 1, 16, 10, 16, 16, 1,
        12, 15, 12, 13, 13, 12, 12, 16, 13, 5,
      ],
      [
        6, 1, 1, 14, 15, 10, 16, 10, 14, 13, 16, 14, 1, 10, 13, 10, 1, 12, 12,
        14, 15, 13, 1, 14, 14, 1, 13, 15, 15, 5,
      ],
      [
        6, 14, 10, 16, 11, 12, 16, 13, 13, 11, 12, 15, 12, 13, 12, 11, 16, 16,
        11, 1, 12, 15, 1, 1, 16, 1, 1, 16, 11, 5,
      ],
      [
        6, 14, 11, 15, 16, 16, 13, 16, 16, 16, 14, 12, 13, 10, 1, 16, 1, 10, 14,
        10, 13, 16, 16, 14, 12, 16, 12, 13, 12, 5,
      ],
      [
        6, 13, 15, 13, 13, 10, 14, 1, 14, 13, 12, 16, 16, 15, 10, 15, 12, 14,
        10, 1, 15, 1, 16, 12, 16, 12, 15, 11, 1, 5,
      ],
      [
        6, 14, 14, 10, 16, 16, 11, 11, 16, 10, 1, 1, 12, 13, 16, 1, 10, 15, 12,
        13, 10, 16, 10, 10, 1, 14, 13, 1, 1, 5,
      ],
      [
        6, 1, 1, 1, 1, 12, 1, 13, 1, 14, 1, 16, 16, 1, 13, 13, 12, 15, 16, 11,
        12, 15, 11, 15, 1, 15, 11, 1, 1, 5,
      ],
      [
        6, 10, 1, 11, 15, 16, 10, 14, 1, 1, 13, 11, 1, 1, 10, 15, 16, 1, 1, 15,
        1, 12, 10, 11, 1, 1, 15, 11, 1, 5,
      ],
      [
        6, 16, 12, 1, 1, 1, 1, 11, 14, 1, 11, 15, 12, 16, 13, 1, 11, 1, 1, 1,
        11, 16, 11, 15, 1, 10, 16, 1, 1, 5,
      ],
      [
        6, 14, 13, 11, 11, 1, 1, 15, 12, 15, 10, 16, 15, 16, 16, 1, 14, 15, 1,
        10, 1, 10, 16, 11, 13, 15, 12, 10, 1, 5,
      ],
      [
        6, 1, 13, 14, 13, 1, 10, 11, 10, 15, 14, 10, 13, 1, 11, 1, 15, 11, 1, 1,
        1, 11, 14, 12, 10, 1, 1, 14, 11, 5,
      ],
      [
        7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        8, 8, 8, 8, 8, 9,
      ],
    ];
  }

  get getTilesCols() {
    return this.tiles[0].length;
  }
  get getTilesRows() {
    return this.tiles.length;
  }
  get getMapMaxWidth() {
    return this.tiles[0].length * Map.TILE_SIZE;
  }
  get getMapMaxHeight() {
    return this.tiles.length * Map.TILE_SIZE;
  }

  randomPositionX() {
    return (
      Math.random() * (this.getMapMaxWidth - 5 * Map.TILE_SIZE) +
      2 * Map.TILE_SIZE
    );
  }
  randomPositionY() {
    return (
      Math.random() * (this.getMapMaxHeight - 5 * Map.TILE_SIZE) +
      2 * Map.TILE_SIZE
    );
  }

  static AREA_SIZE = 500;

  getAreas() {
    const areas = [];
    const cols = Math.floor((this.getMapMaxWidth - Map.AREA_SIZE) / Map.AREA_SIZE);
    const rows = Math.floor((this.getMapMaxHeight - Map.AREA_SIZE) / Map.AREA_SIZE);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        areas.push({
          x: col * Map.AREA_SIZE,
          y: row * Map.AREA_SIZE,
          width: Map.AREA_SIZE,
          height: Map.AREA_SIZE
        });
      }
    }

    return areas;
  }

  isAreaEmpty(area, entities, minDistance) {
    for (const entity of entities) {
      const distX = Math.max(area.x - entity.x, entity.x - (area.x + area.width));
      const distY = Math.max(area.y - entity.y, entity.y - (area.y + area.height));
      if (distX <= minDistance && distY <= minDistance) {
        return false;
      }
    }
    return true;
  }

  isWalkable(x, y) {
    const col = Math.floor(x / Map.TILE_SIZE);
    const row = Math.floor(y / Map.TILE_SIZE);

    // Check if the position is within the map boundaries
    if (
      row >= 0 &&
      row < this.tiles.length &&
      col >= 0 &&
      col < this.tiles[0].length
    ) {
      const excludesValue = [2, 3, 4, 5, 6, 7, 8, 9];
      return !excludesValue.includes(this.tiles[row][col]);
    }
    return false;
  }

  static TILE_SIZE = 179;
}
