// Wrapper to allow LangGraph CLI (Node) to load TypeScript graph files via ts-node
require("ts-node/register");
const mod = require("./src/graph/factory.ts");
// Export the `graph` export if present, otherwise default or the whole module
module.exports = mod.graph ?? mod.default ?? mod;
