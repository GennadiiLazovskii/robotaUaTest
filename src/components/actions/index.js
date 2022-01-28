export const vacancyFetching = () => {
    return {
        type: 'VACANCY_FETCHING'
    }
}

export const vacancyFetched = (vacancy) => {
    return {
        type: 'VACANCY_FETCHED',
        payload: vacancy
    }
}

export const vacancyFetchingError = () => {
    return {
        type: 'VACANCY_FETCHING_ERROR'
    }
}