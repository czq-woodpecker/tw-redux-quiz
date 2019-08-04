import {deleteData, getData} from "./http";

const BASE_URL = 'http://localhost:8080/api/posts/';
export const deleteNoteById = id => deleteData(BASE_URL + id);

export const getNotes = () => getData(BASE_URL);





