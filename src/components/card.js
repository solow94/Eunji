import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Point from './point.js'
import '../custom.css';

class card extends Component {
  render() {
    const type = this.props.type;
    const point = this.props.point;
    const text = this.props.text;
    return (
      <div>
      {type === 0 
         ? <Card>
           <div className="row">
            <div className="col-sm-12"><Card.Img src="/images/mong.png" alt="Logo"/></div>
            <Card.Body>
            <Card.Subtitle><small className="text-muted">Card Label</small></Card.Subtitle>
            <p className="title">Card Title</p>
           <Card.Text className="hilight">Hilight <span className="small">Cross Out</span></Card.Text>
         </Card.Body>
           </div>
           
         {(point!==false || text !== false) && <Card.Footer>
           {point === true && <Point num={3}/>}
           {text === true && <p><small className="text-muted">Lorem ipsum dolor sit amet...</small></p>}
         </Card.Footer>}
       </Card>
      :<Card>
        <div className="row">
          <div className="col-sm-6" ><Card.Img src="/images/mong.png" alt="Logo"/></div>
          <div className="col-sm-6">
            <Card.Body>
              <p className="title">Lorem ipsum dolor sit amet...</p>
              <Card.Subtitle><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing eilt...</small></Card.Subtitle>
              <Point num={3}/>
            </Card.Body>
          </div>
        </div>
      </Card>
      }
      </div>
    );
  }
}

card.defaultProps={
  type:0,
  text:true,
  point:true
}

export default card;