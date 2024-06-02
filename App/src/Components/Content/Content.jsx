import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Content.module.css';
import { FaStar } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";

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
                {foodItems.map((item, index) => (
                    <div className={styles.innerBox} key={index}>
                        <div className={styles.images}>
                            <img className={styles.imgInfo} src={`http://localhost:3002/${item.image}`} alt="food item" />
                        </div>
                        <div className={styles.shopAnadRate}>
                            <span>{item.shop}</span>
                            <span className={styles.rate}>
                                {item.rate}<FaStar className={styles.starIcon}/>
                            </span>
                        </div>
                        <div className={styles.typeAndPrice}>
                            <span>{item.type}</span>
                            <span><LuIndianRupee className={styles.RuppeIcon}/>{item.price}</span>
                        </div>
                        <span className={styles.time}>{item.time}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Content;


