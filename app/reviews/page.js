'use client';
async function fetchReviews() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return data.slice(0, 20);
}

const Reviews = async () => {
    const reviews = await fetchReviews();
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
                            <div key={res.id} className='review'>
                                {res.id}){' '}
                                {`${res.body.slice(0, 90)}...`}
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}


// export async function getServerSideProps(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//     const data = await response.json();
//
//     return {
//         props: {
//             reviews:data.slice(0,20)
//         }
//     }
// }

export default Reviews;