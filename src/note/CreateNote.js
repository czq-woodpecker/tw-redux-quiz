import React, {Component} from 'react';
import './createNote.less';
import {createNote} from "../api/note";

class CreateNote extends Component {

  constructor(props, context) {
    super(props, context);
    this.createNote = this.createNote.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.state = {
      title: '',
      description: '',
      disableSubmit: true
    }
  }

  render() {
    return (
      <main id="addNote">
        <h2>创建笔记</h2>
        <hr/>
        <label id="">标题</label>
        <input value={this.state.title} onChange={this.changeTitle}/>
        <label>正文</label>
        <textarea value={this.state.description} onChange={this.changeDescription}/>
        <div className={'noteOperation'}>
          <button className={'operateBtn'} disabled={this.state.disableSubmit} onClick={this.createNote}>提交</button>
          <button className={'backBtn'} onClick={this.backToHome}>返回</button>
        </div>
      </main>
    );
  }

  createNote() {
    createNote({
      title: this.state.title,
      description: this.state.description
    })
      .then(reponse => {
        if(reponse.status == 201) {
          alert('创建成功');
          this.backToHome();
        } else {
          alert('创建失败');
        }
      })
      .catch(error => {
        alert('连接失败');
      })
  }

  backToHome() {
    this.props.history.push('/');
  }

  changeTitle(event) {
    const title = event.target.value;
    const disableSubmit = title && this.state.description ? false : true;
    console.log('changeTitle: ' + disableSubmit);
    this.setState({
      title: title,
      disableSubmit: disableSubmit
    })
  }

  changeDescription(event) {
    const description = event.target.value;
    const disableSubmit = this.state.title && description ? false : true;
    console.log('changeDescription: ' + disableSubmit);
    this.setState({
      description: description,
      disableSubmit: disableSubmit
    })
  }
}

export default CreateNote;