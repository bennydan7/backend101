import { getAllLaunches,addNewLaunch,existsLaunchWithId, abortLaunchById } from '../../models/launches.model.js';

// export function httpGetAllLaunches(req, res) {
//   return res.status(200).json(Array.from(getAllLaunches.values()));
// }
export function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}


export function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
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

export function httpAbortLaunch(req,res){
  const launchId = Number(req.params.id);

  if(!existsLaunchWithId(launchId)){
    return res.status(400).json({
      error: 'Launch not found'
    })
  }

  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted)

}