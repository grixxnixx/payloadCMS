import * as migration_20250119_013817_initial from './20250119_013817_initial';

export const migrations = [
  {
    up: migration_20250119_013817_initial.up,
    down: migration_20250119_013817_initial.down,
    name: '20250119_013817_initial'
  },
];
