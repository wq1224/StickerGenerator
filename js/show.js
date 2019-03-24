import React from 'react';
require ('../css/show.css');
function Show(props) {
    const { title, content, time_text,time_number } = props;
    return (
        <div className="image_container">
            <div className="text">
                <p>林师每日答</p>
            </div>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="content">
                <h1>{content}</h1>
            </div>
            <div className="footer">
                <div className="time">
                    <p>{time_text}</p>
                    <p>{time_number}</p>
                </div>
                <div className="code">
                    <img src="../image/qrcode.png"/>
                </div>
            </div>
        </div>
    );
}
export default Show;