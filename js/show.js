import React from 'react';
require ('../css/show.css');
function Show(props) {
    const { title, content, time_text,time_number } = props;
    const length = title.length + content.length;
    let class_name = "large"
    let content_pos = "up"
    if (length >= 200){
        class_name = "small_size"
    }else if (length < 200 && length >= 130){
        class_name = "middle_size"
    }else{
        class_name = "large_size"
    }
    if (title.length > 22){
        content_pos = "down"
    }else{
        content_pos = "up"
    }
    return (
        <div className="image_container">
            <div className="text">
                <p>林师每日答</p>
            </div>
            <div className="title">
                <h1 className={class_name}>{title}</h1>
            </div>
            <div className={content_pos + " content"}>
                <h1 className={class_name}>{content}</h1>
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