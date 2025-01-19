import * as migration_20250119_023253_initial from './20250119_023253_initial';
import * as migration_20250119_023548_initial from './20250119_023548_initial';

export const migrations = [
  {
    up: migration_20250119_023253_initial.up,
    down: migration_20250119_023253_initial.down,
    name: '20250119_023253_initial',
  },
  {
    up: migration_20250119_023548_initial.up,
    down: migration_20250119_023548_initial.down,
    name: '20250119_023548_initial'
  },
];
