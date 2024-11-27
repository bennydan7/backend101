import {planets} from '../../models/planets.model.js'; // Correct file extension

export function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}
