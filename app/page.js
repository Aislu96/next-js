import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <head>
                <title>Жирные бургеры | Главная</title>
                <meta name="title" content="Жирные бургеры"/>
            </head>
            <div className={styles.container}>
                <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
                <div className={styles.mainImage}>
                    <Image src="/fatburger.png" alt="fatburgers" width={400} height={300}/>
                </div>
                <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо.
                    О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
                <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
                    обслуживания, правильная атмосфера заведения.</p>
                <Link href="/burgers" className={styles.btn}>Все бургеры</Link>
            </div>
        </>

    );
}
