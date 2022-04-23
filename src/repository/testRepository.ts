import {Questionnary} from "../models/models";

export const fetchQuestionnaire = (id: number): Promise<Questionnary> => {
    return fetch(`http://localhost:3000/questionnaires/${id}`)
        .then(response => response.json())
}