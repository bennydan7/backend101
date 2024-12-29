import {getAllPlanets} from '../../models/planets.model.js'; 

export async function httpgGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets());
}
 