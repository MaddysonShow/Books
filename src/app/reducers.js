const defValue = {
    sort: 'relevance',
    category: 'all',
    search: '',
    startIndex: 0,
    stopDispatchAfterReload: 1, // после перехода на другие страницы происходит выполнение условия в useEffect и дата дублирует итемы
    // в кейсе UPLOAD_DATA
    data: {
        items: [],
        totalItems: 0
    },
}

const CHANGE_SORT = 'changeSort'
const CHANGE_CATEGORY = 'changeCategory'
const SET_SEARCH = 'setSearch'
const SET_DATA = 'setData'
const UPLOAD_DATA = 'uploadData'
const CHANGE_START_INDEX = 'changeStartIndex'
const STOP_DISPATCH = 'stopDispatch'

// при изменении сортировки по категории, сорту, серч то ИНДЕКС ОБНУЛЯЕМ

export const sortReducer = (state = defValue, action) => {
    switch (action.type) {
        case CHANGE_SORT: {return {...state, startIndex: 0, sort: action.payload}}
        case CHANGE_CATEGORY: {return {...state, startIndex: 0, category: action.payload}}
        case SET_SEARCH: {return {...state, startIndex: 0, search: action.payload}}
        case SET_DATA: {return {...state, data: action.payload}}
        case UPLOAD_DATA: {return {...state, data: {...state.data,  items: [...state.data.items.concat(action.payload.items)]}}}
        case CHANGE_START_INDEX: {return {...state, startIndex: action.payload}}
        case STOP_DISPATCH: {return {...state, stopDispatchAfterReload: action.payload}}
        default: {return state}
    }
}

export const changeSort = (payload) => {return {type: CHANGE_SORT, payload: payload}}

export const changeCategory = (payload) => {return {type: CHANGE_CATEGORY, payload: payload}}

export const changeSearch = payload => {return {type: SET_SEARCH, payload: payload}}

export const setData = payload => {return {type: SET_DATA, payload: payload}}

export const uploadData = payload => {return {type: UPLOAD_DATA, payload: payload}}

export const changeStartIndex = payload => {return {type: CHANGE_START_INDEX, payload: payload}}

export const stopDispatch = payload => {return {type: STOP_DISPATCH, payload: payload}}
