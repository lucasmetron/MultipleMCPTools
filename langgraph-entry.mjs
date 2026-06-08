import { register } from "node:module";
import { pathToFileURL } from "node:url";
// Register ts-node ESM loader for runtime TypeScript imports
register("ts-node/esm", pathToFileURL("./"));
const mod = await import("./src/graph/factory.ts");
export const graph = mod.graph ?? mod.default ?? mod;
export default graph;
