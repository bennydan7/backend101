import {getAllPlanets} from '../../models/planets.model.js'; // Correct file extension

export function httpgGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}
