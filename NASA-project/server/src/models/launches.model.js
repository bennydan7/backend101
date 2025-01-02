import launchesdb  from "./launches.mongo.js";

const launches = new Map();

let latestFlightNumber = 100;


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

function existsLaunchWithId(launchId){
  return launches.has(launchId)
}

export async function getAllLaunches(){
    return await launchesdb.
    find({},
      {
        '_id': 0, '__v': 0
      })
}

async function saveLaunch(launch){
  await launchesdb.updateOne({
    flightNumber: launch.flightNumber,
  },launch,{
    upsert:true
  })

}

function addNewLaunch(launch){
  latestFlightNumber++;
  launches.set(launch.flightNumber,
    Object.assign(launch,{
      success: true,
      upcoming: true,
      customers: ['Zero to Mastery','NASA'],
      flightNumber: latestFlightNumber,
  }));
}

function abortLaunchById(launchId){
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;

}

// Exporting the `launches` map
export { launches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById };
