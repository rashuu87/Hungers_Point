import styles from './Content.module.css';

const Content = ({ data }) => {
    return (
    <>
        <div className={styles.Window}>
            <div className={styles.foodcard}>
                {data?.map(({ name, image, text, price }) => (
                <div key={name} className={styles.foodCard}>
                <div className="food_image">
                    <img src={ image} alt={name} />
                </div>
                <div className={styles.foodInfo}>
                    <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    </div>
                    <button>price</button>
                </div>
                </div>
            ))}
            </div>
        </div>
    </>
    );
}

export default Content;
