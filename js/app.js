import React from 'react';
import Show from './Show';
import { Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "./data.js";
import { calendar } from "./date.js"
class App extends React.Component {

    render() {
        return (
            <div>
                <div className="config_container">
                    <DatePicker/>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </div>
                <Button>test</Button>
                <Show title="问：生肖龙2019己亥年运势"
                    content="答：龙在2019年凡事要非常小心，可能会有小人的出现破财，或是对自己的工作有阻碍，这一年出现的创业机会可能只是水中捞月，在这新的一年里，一定要步步为营，为下一年作好万全的准备。"
                    time_text="己亥年丙寅月己卯日"
                    time_number="2019年2月11日"/>
            </div>
        )
    }
}

export default App;