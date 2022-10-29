import React from 'react'
import NewsComponent from '../NewsComponent';

const News = () => {

    const newsArr = [
        {
            title:"News 1",
            img:"./img/news.jpg",
            text:"News text 1"
        },
        {
            title:"News 2",
            img:"./img/news2.jpg",
            text:"News text 2"
        },
        {
            title:"News 3",
            img:"./img/news3.jpg",
            text:"News text 3"
        }
    ]


        return (
            <>
                <h1> News </h1>
                {newsArr.map((news, i)=> <NewsComponent key={i} title={news.title} img={news.img} text={news.text}/>)}
            </>
        )
    }

    export default News