import React, {useState} from 'react';
import styles from '../styles.module/HeaderNavBar.module.css'
import searchLogo from '../media/searchicon.png'
import MySelect from "./mySelect";
import {useDispatch} from "react-redux";
import {changeCategory, changeSearch, changeSort} from "../app/reducers";
import book from "../media/bvbook.jpg";
import {useNavigate} from "react-router-dom";


const HeaderNavBar = () => {

    const selectCategory = ["all", "art", "biography", "computers", "history", "medical", "poetry"]
    const sortBy = ["relevance", "newest"]
    const dispatch = useDispatch()
    const [valueInput, setValueInput] = useState('')
    const navigate = useNavigate()

    function onSelectCategory(e) {
        dispatch(changeCategory(e.target.value))
    }

    function onSelectSort(e) {
        console.log(e.target.value)
        dispatch(changeSort(e.target.value))
    }

    function search (e) {
        e.preventDefault()
        console.log(valueInput);
        dispatch(changeSearch(valueInput.trim()))
        navigate('/')
    }

    return (
        <div className={styles.header} style={{backgroundImage: `url(${book})`}}>
            <div className={styles.SFB}>Search for books</div>
            <div className={styles.inputGroup}>
                <form onSubmit={(e)=> {search(e)}}>
                <input placeholder={'Search any book'} className={styles.inputs}
                       value={valueInput} onChange={(e) => {setValueInput(e.target.value)}} />
                <img src={searchLogo} className={styles.inputGroupImg} alt={'searchLogo'} onClick={(e) => {search(e)}}/>
                </form>
            </div>
            <div className={styles.inputGroup}>
                <div className={styles.sortGroup}>
                    <div className={styles.sortText}>Category</div>
                    <select onChange={onSelectCategory}>
                            {selectCategory.map((el, ind) => {
                                return <MySelect options={el} ind={ind} key={ind + el}/>
                            })}
                    </select>
                    <div className={styles.sortText}>Sorting by</div>
                    <select onChange={onSelectSort}>
                            {sortBy.map((el, ind) => {
                                return <MySelect options={el} ind={ind} key={ind + el}/>
                            })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavBar;