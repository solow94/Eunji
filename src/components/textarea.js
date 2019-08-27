import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import '../custom.css';

class textarea extends Component {
    state = {
        text1:"초기값이 있을 수 있습니다",
        text2:"초기값이 있을 수 있습니다",
        text3:"",
        save:true,
        maxLength:500
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});

        if(event.target.name === "text2"){
            this.setState({save:false});
        }
    }

    render() {
        const max=this.state.maxLength
        return (
            <div>
                <div className="wrap">
                    <textarea maxLength={max} name="text1" style={{width:"100%"}} value={this.state.text1} onChange={this.handleChange} rows={3}></textarea>                
                    <span>{max-(this.state.text1.length)}</span>
                </div>
                
                <div className="row">
                    <div className="col-sm-11">
                        <div className="wrap">
                            <textarea maxLength={max} name="text2" style={{width:"100%"}} value={this.state.text2} onChange={this.handleChange} rows={3} />
                            <span>{max-(this.state.text2.length)}</span>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <Button disabled={this.state.save} style={{width:"100%"}}>Save</Button>
                    </div>
                </div>
                <div className="wrap">
                    <textarea placeholder="주문 요청사항을 입력해주세요" disabled={true} maxLength={max} name="text3" style={{width:"100%"}}  value={this.state.text3} onChange={this.handleChange} rows={3}/>
                    <span>{max-(this.state.text3.length)}</span>
                </div>
            </div>
        );
    }
}

export default textarea;