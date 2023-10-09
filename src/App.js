import React from 'react';
import styles from './App.module.css'
import HeaderNavBar from "./components/HeaderNavBar";
import book from './media/bvbook.jpg'
import BookBlock from "./components/bookBlock";
import {Route, Routes} from "react-router-dom";
import SingleBookOverwiev from "./components/SingleBookOverwiev";


function App() {
    // Внезапно, ответ от апи в items.id имеет дубликаты, при рендере в значении ключа взято поле у даты "etag"
    return (
        <div className={styles.general}>
            <HeaderNavBar/>
            <Routes>
                <Route path={'/*'} element={<BookBlock/>}/>
                <Route path={'/single'} element={<SingleBookOverwiev/>}/>
            </Routes>
        </div>
    );
}

export default App;
