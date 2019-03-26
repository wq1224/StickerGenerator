import React from 'react';
import Show from './Show';
import { Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "./data.js";
import { calendar } from "./date.js"
import "../css/app.css"
var htmlToImage = require('dom-to-image');
var download = require("downloadjs");
var html2canvas = require('html2canvas');
class App extends React.Component {
    constructor() {
        super();
        const date = new Date();
        const data = this.getSuggestData(date);
        this.state = {
            currentData: data,
            currentDate: date,
            suggestData: data
        };
    }

    handleClick() {
        const element = document.getElementsByClassName("image_container")[0];
        html2canvas(element).then(canvas => {
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            image.style = "height:630px; width:1000px";
            document.body.appendChild(image);
        });
        // htmlToImage.toPng(element).then(function (dataUrl) {
        //     var img = new Image();
        //     img.src = dataUrl;
        //     img.style = "height:630px; width:1000px";
        //     document.body.appendChild(img);
        // });
    }
    handleTimeChange(date) {
        const suggestData = this.getSuggestData(date)
        this.setState({
            currentDate: date,
            suggestData: suggestData
        });
    }
    handleContentChange(event) {
        this.setState({
            currentData: event.target.value
        })
    }
    getSuggestData(date){
        const baseDay = new Date(2019,2,26);
        const baseData = 38;
        const diff = Math.abs(date.getTime() - baseDay.getTime());
        let distance = parseInt(diff / (1000 * 60 * 60 * 24));
        distance = (parseInt(distance / 7)) * 5 + (distance % 7);
        const total = baseData + distance ;
        return total % data.length;
    }

    render() {
        const { currentData, currentDate, suggestData } = this.state;
        return (
            <div>      
                <div className="config_container">
                    <Form>
                        <Form.Group>
                            <Form.Label>选择时间: </Form.Label>
                            <DatePicker selected={currentDate} onChange={ this.handleTimeChange.bind(this) }/>    
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>选择内容: </Form.Label>
                            <Form.Control as="select" defaultValue={suggestData} onChange={ this.handleContentChange.bind(this) } >
                                {data.map((value, index) => (
                                    <option key={index} value={index}> {suggestData == index? '建议: ':''} {index} {value.title}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>               
                <Show title={data[currentData].title}
                    content={data[currentData].content}
                    time_text={calendar.toTextDate(currentDate)}
                    time_number={calendar.toNumberDate(currentDate)}/>
                <div className="okBtn">
                    <Button onClick={this.handleClick.bind(this)}>生成小贴士图片</Button>
                </div> 
            </div>
        )
    }
}

export default App;