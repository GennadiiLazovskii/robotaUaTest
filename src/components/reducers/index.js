const initialstate = {
    vacancy: [],
    vacancyLoadingStatus: 'idle'
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'VACANCY_FETCHING':
            return {
                ...state,
                vacancyLoadingStatus: 'loading'
            }
        case 'VACANCY_FETCHED':
            return {
                ...state,
                vacancy: action.payload,
                vacancyLoadingStatus: 'idle'
            }
        case 'VACANCY_FETCHING_ERROR':
            return {
                ...state,
                vacancyLoadingStatus: 'error'
            }
        default: return state
    }
}

export default reducer;