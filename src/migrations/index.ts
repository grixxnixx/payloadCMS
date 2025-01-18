import * as migration_20250118_170656_change_schema_2 from './20250118_170656_change_schema_2';

export const migrations = [
  {
    up: migration_20250118_170656_change_schema_2.up,
    down: migration_20250118_170656_change_schema_2.down,
    name: '20250118_170656_change_schema_2'
  },
];
