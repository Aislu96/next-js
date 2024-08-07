// app/burgers/[id]/page.tsx
import { notFound } from 'next/navigation';
import styles from '../../burgers.module.css';
import Image from "next/image";

const Page = async ({ params }) => {
    const { id } = params;

    // Загрузка данных с сервера
    const res = await fetch(`http://localhost:5000/items/${id}`);

    // Проверка на успешный ответ
    if (!res.ok) {
        notFound(); // Показать 404 страницу, если данные не найдены
    }

    const data = await res.json();
    // Рендеринг данных
    return (
        <div className={styles.singleBurger}>
            <h1>{data.name}</h1>
            <div className={styles.imageContainer}>
                <Image
                    src={data.image}
                    alt={data.name}
                    width={300}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div>
                <p>{data.desc}</p>
            </div>
        </div>
    );
};

export default Page;
