import React from 'react'

const NewsComponent = (props) => {
    return (
        <div className="newsContainer" key={props.i}>
            <h2> {props.title} </h2>
            <div className='hContainer'>
                <img className='imgContainer' src={props.img} />
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default NewsComponent