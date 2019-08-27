import React, { Component } from 'react';
import '../custom.css';

class point extends Component {
  render() {
    const numList = [1,2,3,4,5];
    const num = this.props.num;
    const nums = numList.map((item, index) => (item<=num
        ?<div className="point" key={index}></div> 
        :<div className="n_point" key={index}></div>));

    return(
        <div className="row row2">
            {nums}
        </div>
    );
  }
}

export default point;