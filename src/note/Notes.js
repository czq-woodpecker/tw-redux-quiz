import React, {Component} from 'react';
import './notes.less';
import {NavLink, Route} from "react-router-dom";
import {getNotesAction} from "../actions/noteAction";
import {connect} from "react-redux";
import NoteDetail from "./NoteDetail";
import { MdNoteAdd } from "react-icons/md";

class Notes extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <main id="noteList">
        <ul>
          {this.props.notes.map((note, index) => (
            <li key={index}>
              <NavLink to={{
                pathname: `/notes/${note.id}`,
                state: {
                  note: note
                }
              }} className="menu-link" activeClassName="active">
                {note.title}
              </NavLink>
            </li>
          ))}
          <li id="addNote">
            <NavLink to={'/notes/create'} className="menu-link" activeClassName="active">
              <MdNoteAdd></MdNoteAdd>
            </NavLink>
          </li>
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
})

const mapDispatchToProps = dispatch => ({
  getNotes: () => (dispatch(getNotesAction()))
})

export default Notes = connect(mapStateToProps, mapDispatchToProps)(Notes);