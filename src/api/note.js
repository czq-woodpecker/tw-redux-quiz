import {deleteData, getData, postData} from "./http";

const BASE_URL = 'http://localhost:8080/api/posts/';
export const deleteNoteById = id => deleteData(BASE_URL + id);

export const getNotes = () => getData(BASE_URL);

export const createNote = note => postData(BASE_URL, note);





