import {getNotes} from "../api/note";

export const GET_NOTES = 'GET_NOTES';

export const getNotesAction = () => (dispatch => {
  getNotes()
    .then(reponse => reponse.json())
    .then(notes => {
      dispatch({
        type: GET_NOTES,
        payload: notes
      })
    })
});