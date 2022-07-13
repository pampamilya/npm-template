import { rm } from 'node:fs/promises';

const directory = new URL('../dist/', import.meta.url);

await rm(directory, { recursive: true, force: true });
