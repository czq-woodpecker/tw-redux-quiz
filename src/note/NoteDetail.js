import React, {Component} from 'react';
import './noteDetail.less';
import {connect} from "react-redux";
import {getNotesAction} from "../actions/noteAction";
import {NavLink} from "react-router-dom";
import Header from "../common/Header";

class NoteDetail extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const note = this.props.location.state.note;
    const currentNoteId = note.id;
    const notes = this.props.notes;
    return (
      <main id={'noteDetail'}>
        <section className="noteList">
          <ul>
            {notes.map((note, index) => {
              let activeClass = currentNoteId === note.id ? "menu-active" : "";
              return(
                <li key={index}>
                  {/*<a className={'noteTitle menu-active'}>{note.title}</a>*/}
                  <NavLink to={{
                    pathname: `/notes/${note.id}`,
                    state: {
                      note: note
                    }
                  }} className="menu-link noteTitle" activeClassName={activeClass}>{note.title}</NavLink>
                </li>
              );
            })}

          </ul>
        </section>
        <section className="noteDetail">
          <h1>{note.title}</h1>
          <hr/>
          <div id="noteContent">{note.description}</div>
        </section>
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


export default NoteDetail = connect(mapStateToProps, mapDispatchToProps)(NoteDetail);