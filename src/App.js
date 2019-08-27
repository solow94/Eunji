import React, { Component } from 'react';
import Card from './components/card.js';
import TextArea from './components/textarea.js';

class App extends Component {
  render() {
    return (
      <div>
        <h2>과제 1. 카드 UI</h2>
        <div className="row">
          <div className="col-sm-2">
            <Card/>
          </div>
          <div className="col-sm-2">
            <Card text={false}/>
          </div>
          <div className="col-sm-2">
            <Card text={false} point={false}/>
          </div>
          <div className="col-sm-5">
            <Card type={1}/>
          </div>
        </div>

        <h2>과제 2. 입력폼 UI</h2>
        <div>
          <TextArea/>
          {/* <TextArea save={true}/>
          <TextArea/> */}
        </div>
      </div>
    );
  }
}

export default App;
