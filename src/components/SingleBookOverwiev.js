import React, {useRef} from 'react';
import {useSearchParams} from "react-router-dom";
import {booksApi} from "../app/API/booksAPIts";
import styles from "../styles.module/singleBookOverview.module.css"
import LoadingAnim from "./UI/loadingAnim";
const parse = require('html-react-parser');

const SingleBookOverwiev = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const getSearchUrl = searchParams.get('id');
    const useApi = booksApi.endpoints.getOneBook.useQuery({id: getSearchUrl, key: process.env.REACT_APP_MYPASS}, {
        skip: !getSearchUrl || getSearchUrl.length === 0
    })

    const {isFetching, isError, data} = useApi

    const temporary = {
        img: data?.volumeInfo?.imageLinks?.thumbnail ?? null,
        category: data?.volumeInfo?.categories?.[0] ?? ' ',
        title: data?.volumeInfo?.title ?? ' ',
        authors: data?.volumeInfo?.authors?.join(', ') ?? ' ',
        description: data?.volumeInfo?.description ?? ' '
    }

    const parser = txt => parse(txt)

    return (
        <div className={styles.general}>
            {isError && <div>Some Error was occured</div>}
            {isFetching && <div style={{justifyContent: 'center', display: 'flex', position: 'relative', left: '50%'}}><LoadingAnim/></div>}
            <div className={styles.imgContainer}><img src={temporary.img} alt={'Book Image'} className={styles.image}/></div>
            <div className={styles.texts}>
                <h3 className={styles.category}>{temporary.category}</h3>
                <h2 className={styles.title}>{temporary.title}</h2>
                <h3 className={styles.category}>{temporary.authors}</h3>
                <div className={styles.title}>{parser(temporary.description)}</div>
            </div>
        </div>
    );
};

export default SingleBookOverwiev;