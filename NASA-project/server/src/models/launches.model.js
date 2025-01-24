import launchesdb  from "./launches.mongo.js";
import planets from "./planet.mongo.js";

const launches = new Map();

const DEFAULT_FLIGHT_NUMBER = 100;


export const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

saveLaunch(launch);

async function existsLaunchWithId(launchId){
  return await launchesdb.findOne({
    flightNumber : launchId
  })
}

async function getLatestFlightNumber(){
  const latestLaunch = await launchesdb
  .findOne()
  .sort('flightNumber');

  if(!latestLaunch){
    return DEFAULT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
}

export async function getAllLaunches(){
    return await launchesdb.
    find({},
      {
        '_id': 0, '__v': 0
      })
}

async function saveLaunch(launch){
  const planet = await planets.findOne({keplerName: launch.target});
  
  if(!planet){
    throw new Error('No matching planet found');
  }

  await launchesdb.findOneAndUpdate({
    flightNumber: launch.flightNumber,
  },launch,{
    upsert:true
  })

}

export async function scheduleNewLaunch(launch){
  const newFlightNumber = await getLatestFlightNumber() + 1;

  const newLaunch = Object.assign(launch,{
    success: true,
    upcoming: true,
    customers: ['ZTM','NASA'],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
}



function abortLaunchById(launchId){
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;

}

// Exporting the `launches` map
export { launches,
  existsLaunchWithId,
  abortLaunchById };
