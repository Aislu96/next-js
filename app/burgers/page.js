import Link from "next/link";
import styles from '../burgers.module.css';
import Image from "next/image";

// export const getStaticProps = async () => {
//     const res = await fetch('https://localhost:5000/items');
//     const data = await res.json();
//
//     return {
//         props: {
//             burger: data
//         }
//     }
// }
const Burgers = async () => {
    const res = await fetch('http://localhost:5000/items');
    const burgers = await res.json();

    return (
        <div>
            <h1>
                {burgers.map(burger => {
                    return (
                        <Link href={`/burgers/${burger.id}`} key={burger.id}>
                            <div className={styles.burgerCard}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={burger.image}
                                        alt={burger.name}
                                        width={300}
                                        height={100}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <h3>{burger.name}</h3>
                                    <p>{burger.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                Наши Бургеры
            </h1>
        </div>
    );
}

export default Burgers;