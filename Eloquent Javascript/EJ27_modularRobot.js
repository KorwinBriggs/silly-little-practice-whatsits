/*
Eloquent Javascript, page 178 -- NOT A PROGRAM; just a question about program structure:

If I were writing all that robot stuff from Chapter 7 as a modular program,
what modules would I create? What would depend on what, what would their interfaces look like,
and which pieces do I think I could find on the NPM -- and would I want to use those?


The original program took a const roads, build a map ("graph") from it, used that
to create a VillageState(containing the locations of packages and a delivery robot),
and then had a series of functions ("robots") that, despite the name, weren't robot
objects, just packages of logic that the VillageState would use to move the robot around.

Old list of functions:
roads           - a list of roads, defined by their beginnings and ends
buildGraph      - builds a list of places and the places each place connects to
roadGraph       - the specific graph built by buildGraph and roads
VillageState    - locations of packages and robot, with a function to move them according
                  to runRobot's instructions
runRobot        - interprets a given robot function's instructions, keeps its memory

ROBOTS (and their helper functions):
randomRobot     - randomly moves about the graph
    randomPick  - pathfinder for randomRobot
routeRobot      - follows a route
    mailRoute   - the route
goalOrientedRobot - uses a pathfinding algorithm
    findRoute   - the pathfinding algorithm

So:
My guess is the NPM would have modules for:
findRoute, randomPick, and probably buildGraph (findRoute and buildGraph would likely be in the same
pathfinding function). Based on how/whether those worked, I'd try to build the rest to match their 
functionality.

Start with roads as a const (I assume this is the most likely to be case-specific)
Module Robots that imports some NPM mapbuilder/pathfinder algorithm for findRoute
Module VillageState imports Robots, and the NPM mapbuilder/pathfinder via Robots' previous import






*/