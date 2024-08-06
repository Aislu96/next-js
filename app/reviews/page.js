'use client';
import {useEffect, useState} from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getData = async () => {
               const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
               const data = await response.json();
               setReviews(data);
        }
        getData();
    }, []);

    console.log(reviews);
    return (
        <>
            <head>
                <title>Жирные бургеры | Главная</title>
                <meta name="title" content="Жирные бургеры"/>
            </head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className="reviews">
                    {!!reviews.length && reviews.map(res => {
                        return (
                            <div key={res.id}></div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Reviews;