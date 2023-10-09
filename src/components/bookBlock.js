import React, {memo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles.module/BookBlock.module.css"
import BookCards from "./BookCards";
import LoadingAnim from "./UI/loadingAnim";
import Button from "./UI/button";
import {useQuerry} from "../Logic/allRTKquerry";
import {changeStartIndex} from "../app/reducers";
import {Outlet} from "react-router-dom";

const BookBlock = () => {
    // console.log('BookBlock RENDER')
    const dispatch = useDispatch()

    const items = useSelector(state => state.sortReducer)
    const {data} = items
    const {isFetching: isLoading, isError} = useQuerry()
    // console.log(isLoading);

    function Iteration() {
        if (!data || !data.items) return
        return data.items.filter((el) => {
            if (el == null || el == undefined) return false
            else return true
        }).map((el, ind) => {
                return <BookCards data={el} key={el.etag}/>
        })
    }

    function displayBtn() {
        if (!data) {return true}
        if ((data?.totalItems - data?.items?.length) <= 0 || isNaN(data?.totalItems - data?.items?.length)) {
            return true
        }
        else {
            return false
        }
    }
    function loadMore() {
        let temp = items.startIndex+30
        dispatch(changeStartIndex(temp))
    }

    return (
        <div className={styles.generalBlock}>
            {isError && <div className={styles.itemsFound}>Some error was occurred</div>}
            {!data && <div className={styles.itemsFound}>Type to search</div>}
            {isLoading === false && !isError && data &&
                <div className={styles.itemsFound}>Finded {data.totalItems ?? 0} books</div>}
            <div className={styles.contentBlock}>
                {Iteration()}
            </div>
            {isLoading && <div style={{justifyContent: 'center', display: 'flex'}}><LoadingAnim/></div>}
            <div className={styles.buttonBlock}><Button content={'Load More'} onClick={loadMore} disabled={displayBtn}/></div>
        </div>
    );
}

export default BookBlock;