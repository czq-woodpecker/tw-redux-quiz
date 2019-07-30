export const GET_NOTES = 'GET_NOTES';

export const getNotesAction = () => (dispatch => {
  fetch('http://localhost:8080//api/posts')
    .then(reponse => reponse.json())
    .then(notes => {
      dispatch({
        type: GET_NOTES,
        payload: notes
      })
    })
});