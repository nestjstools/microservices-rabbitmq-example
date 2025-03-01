import { configDotenv } from 'dotenv';
import * as process from 'node:process';

configDotenv();

class Env {
  public readonly isHttpServer: boolean;

  constructor(
    public readonly isWorker: boolean,
  ) {
    this.isHttpServer = !isWorker;
  }
}

const { env } = process;

export const Environment = new Env(
  env.SERVER_TYPE === 'worker',
);
