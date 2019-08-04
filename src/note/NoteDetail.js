import React, {Component} from 'react';
import './noteDetail.less';
import {connect} from "react-redux";
import {getNotesAction} from "../actions/noteAction";
import {NavLink} from "react-router-dom";
import Header from "../common/Header";
import {deleteNoteById} from "../api/note";

class NoteDetail extends Component {

  constructor(props, context) {
    super(props, context);
    this.deleteNoteById = this.deleteNoteById.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const note = this.props.location.state.note;
    const currentNoteId = note.id;
    const notes = this.props.notes;
    return (
      <main id={'noteDetailBox'}>
        <section className="noteList">
          <ul>
            {notes.map((note, index) => {
              let activeClass = currentNoteId === note.id ? "menu-active" : "";
              return(
                <li key={index}>
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
          <hr/>
          <div  className={'noteOperation'}>
            <button className={'deleteBtn'} onClick={this.deleteNoteById}>删除</button>
            <button className={'backBtn'} onClick={this.backToHome}>返回</button>
          </div>
        </section>
      </main>
    );
  }

  deleteNoteById() {
    const id = this.props.location.state.note.id;
    deleteNoteById(id)
      .then(response => {
        if(response.status == 200) {
          alert('删除成功');
          this.backToHome();
        } else{
          alert('删除失败');
        }
      })
      .catch(error => {
        alert("连接失败");
      })
  }

  backToHome() {
    this.props.history.push('/');
  }
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
})

const mapDispatchToProps = dispatch => ({
  getNotes: () => (dispatch(getNotesAction()))
})


export default NoteDetail = connect(mapStateToProps, mapDispatchToProps)(NoteDetail);