import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Content.module.css';

const Content = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/food')
        .then(response => {
            setFoodItems(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
    }, []);

    return (
    <>
    <div className={styles.FoodCardContainer}>
        
        {foodItems.map(item => (<>
            <div className={styles.innerBox}>
                <div className={styles.images}>
                    <img className={styles.imgInfo} src={`http://localhost:3002/${item.image}`} alt="image"  />
                </div>
                <div className={styles.nameAndRating}>
                    <span>{item.name}</span>
                    <span>{4.1}</span>
                </div>
                <div className={styles.hotelAndprice}>
                    <span>{item.text}</span>
                    <span>{item.text}</span>
                </div>
                <span>{item.price} min</span>
            </div>
        </>))}
        
    </div>
    </>
    );
}

export default Content;


{/* <div className={styles.Window}>
            <div className={styles.foodcard}>
                {data?.map(({ name, image, text, price }) => (
                <div key={name} className={styles.foodCard}>
                <div className={styles.food_img}>
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
        </div> */}