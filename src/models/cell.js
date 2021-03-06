import { immerable } from 'immer';
import { BOARD_SIZE } from '../utils/board';

export class Cell {
  constructor(number, row, column, isMarked = false) {
    this[immerable] = true;
    this.number = number;
    this.row = row;
    this.column = column;
    this.isMarked = isMarked;
  }

  mark() {
    this.isMarked = true;
  }

  isDownwardDiagonal() {
    return this.row === this.column
  }

  isUpwardDiagonal() {
    return this.row + this.column === BOARD_SIZE - 1;
  }
}