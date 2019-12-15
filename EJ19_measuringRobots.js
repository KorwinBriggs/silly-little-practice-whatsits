/*
Eloquent Javascript, page 126, write a little function to compare the efficiency of each
of these "robots" in delivering a bunch of packages to houses. The tricky part looks to be
designing it so the robots are each doing the same tasks - which means randomly generating
VillageStates, and then making a copy for each robot to try.

The book says to design it to compare two robots, but I'ma make one that compares any number instead.

Of note: I changed the book-provided runRobot function so that it returns the total number of turns.
*/

//PROJECT FILES BEGIN HERE

var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  
  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  var roadGraph = buildGraph(roads);
  
  var VillageState = class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }
  
  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }
  
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }
  
  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
  };
  
  var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];
  
  function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }
  
  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }
  
  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

//MY FUNCTION BEGINS HERE

// console.log(runRobot(VillageState.random(), randomRobot, []))

function compareRobots(...robots) {
    console.log(robots);
    
    //this array holds all the results - separated into a pile for each robot later on
    let resultsList = []

    //the tests themselves start here
    for (let i = 0; i < 100; i++) {

        let testVillagePrototype = VillageState.random(); //create a test village
        for (robot of robots) {

            //build a duplicate village to avoid altering the testVillagePrototype
            let testStartPlace = testVillagePrototype.place; 
            let testParcelLocations = [];
            for (parcel of testVillagePrototype.parcels) {
                let parcelCopy = {place: parcel.place, address: parcel.address};
                testParcelLocations.push(parcelCopy);
            }
            let testVillageCopy = new VillageState(testStartPlace, testParcelLocations);

            //run the robot
            let turnsTaken = runRobot(testVillageCopy, robot, []);
            console.log(turnsTaken);
            resultsList.push(turnsTaken); //add turns taken to the total result list array
        }
    }

    let results = {};
    //and now deal with the results list
    for (let i = 0; i < robots.length; i++) {
        let robotTotalTurns = 0;
        //populate new array with the results that apply to this robot
        //calculated by taking every xth result, where x is the number of robots
        for (let j = 0; j < resultsList.length; j++) {
            if (j % robots.length == i) {
                robotTotalTurns = robotTotalTurns + resultsList[j]; //add turns to total
            }
        }
        robotAverageTurns = robotTotalTurns / (resultsList.length/robots.length); //divide by number of runs per robot
        results["Robot"+[i]] = robotAverageTurns; //add average to result
    }

    return results;
}


console.log(compareRobots(randomRobot, routeRobot, goalOrientedRobot));



