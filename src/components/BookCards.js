import React, {useState} from 'react';
import styles from '../styles.module/BookCards.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";

const BookCards = ({data}) => {
    const navigate = useNavigate()
    let temporaryObj = {
        img: data.volumeInfo.imageLinks?.smallThumbnail ?? null,
        categories: data.volumeInfo.categories?.[0] ?? ' ',
        title: data.volumeInfo.title ?? ' ',
        authors: data.volumeInfo.authors?.join(', ') ?? ' '
    }
    function navTo() {
        navigate(`single?id=${data.id}`)
    }

    return (
            <div className={styles.general} onClick={navTo}>
                    <img src={temporaryObj.img} alt="Book Image" className={styles.imageContainer}/>
                    <p className={styles.Text1}>{temporaryObj.categories}</p>
                    <h2 className={styles.TextH}>{temporaryObj.title}</h2>
                    <p className={styles.Text2}>{temporaryObj.authors}</p>
            </div>
    );
};

export default BookCards;