import { getAllLaunches,addNewLaunch } from '../../models/launches.model.js';

// export function httpGetAllLaunches(req, res) {
//   return res.status(200).json(Array.from(getAllLaunches.values()));
// }
export function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}


export function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination){
    return res.status(400).json({
      error: 'Missing required launch property'
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)){
    return res.status(400).json({
      error: "Invalid launch date"
    })
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}