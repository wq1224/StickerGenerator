import React from 'react';
import Show from './Show';
import { Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "./data.js";
import { calendar } from "./date.js"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentData: 0,
            currentDate: new Date()
        };
    }

    handleClick() {
        debugger;
    }
    handleTimeChange(date) {
        this.setState({
            currentDate: date
        });
    }
    handleContentChange(event) {
        this.setState({
            currentData: event.target.value
        })
    }

    render() {
        const { currentData, currentDate } = this.state;
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
                            <Form.Control as="select" defaultValue={currentData} onChange={ this.handleContentChange.bind(this) } >
                                {data.map((value, index) => (
                                    <option key={index} value={index}> {index} {value.title}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>               
                <Show title={data[currentData].title}
                    content={data[currentData].content}
                    time_text={calendar.toTextDate(currentDate)}
                    time_number={calendar.toNumberDate(currentDate)}/>

                <Button onClick={this.handleClick.bind(this)}>生成小贴士图片</Button>
            </div>
        )
    }
}

export default App;