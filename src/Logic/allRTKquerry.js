import {useDispatch, useSelector} from "react-redux";
import {booksApi} from "../app/API/booksAPIts";
import {setData, sortReducer, stopDispatch, uploadData} from "../app/reducers";
import {useEffect, useMemo, useState} from "react";


export function useQuerry() {
    const fromInputs = useSelector(state => state.sortReducer)

    const dispatch = useDispatch()

    const searchQuerry = {
        search: fromInputs.search,
        category: fromInputs.category === 'all' ? '' : fromInputs.category, // вставлено условие здесь для поиска по ключу ALL
        maxResults: 30,
        startIndex: fromInputs.startIndex,  // меняем старт индекс из редьюсера
        sort: fromInputs.sort,
        key: process.env.REACT_APP_MYPASS
    }

    const useApi = booksApi.endpoints.getBook.useQuery(searchQuerry, {
        skip: fromInputs.search.length === 0
    })
     const {isFetching, isError, data} = useApi



    useEffect(() => {
        // если индекс  == 0 то делаем первоначально set, иначе upload
        // менять стартовый индекс будем по нажатию на кнопку в bookBlock и здесь автоматом прогрузит новые данные
        if (fromInputs.startIndex == 0) {
            dispatch(stopDispatch(1))
            dispatch(setData(data))}
        else {
            // условие чтобы uploadData после перехода на другую страницу не выполнилось
            if (fromInputs.stopDispatchAfterReload === fromInputs.startIndex) {console.log('in return'); return}
            dispatch(stopDispatch(fromInputs.startIndex))
            dispatch(uploadData(data))}
    }, [data])

    return {isFetching, isError}
}



