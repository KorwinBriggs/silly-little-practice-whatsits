/*
Eloquent Javascript, page 179, write something like the roads and buildGraph functions
from chapter 7, but this time as a CommonJS module. It should depend on another module,
./graph, which exports a function buildGraph 

...so I'm not actually rewriting buildGraph, just hand-waving it while doing the roads thing.

.....which will make this un-testable, I think? Hoo boy.
*/

const buildGraph = require("./graph");

let roads = [
        "Alice's House-Bob's House",   "Alice's House-Cabin",
        "Alice's House-Post Office",   "Bob's House-Town Hall",
        "Daria's House-Ernie's House", "Daria's House-Town Hall",
        "Ernie's House-Grete's House", "Grete's House-Farm",
        "Grete's House-Shop",          "Marketplace-Farm",
        "Marketplace-Post Office",     "Marketplace-Shop",
        "Marketplace-Town Hall",       "Shop-Town Hall"
];

exports.roadGraph = function() {return buildGraph(roads)};


//AND the ES module, assuming I understand how that works:

import buildGraph from "./graph";

let roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

export function roadGraph() {return buildGraph(roads)};