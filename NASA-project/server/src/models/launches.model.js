const launches = new Map();

let latestFlightNumber = 100;


export const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

export function getAllLaunches(){
    return Array.from(launches.values())
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

// Exporting the `launches` map
export { launches,addNewLaunch };
