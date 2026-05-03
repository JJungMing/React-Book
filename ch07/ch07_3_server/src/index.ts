import { createServer } from "http";
import { getPublicDirPath } from "./config/index.js";
import { makeDir } from "./utils/makeDir.js";
import { createExpressApp } from "./express/index.js";
import type { MongoDB } from "./mongodb/connectAndUseDB.js";
import { connectAndUseDB } from "./mongodb/connectAndUseDB.js";

makeDir(getPublicDirPath());

const connectCallback = (db: MongoDB) => {
  const hostname = "localhost",
    port = 4000;

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`),
  );
};

connectAndUseDB(connectCallback, "ch07");
