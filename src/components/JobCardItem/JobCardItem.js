import { useHttp } from "../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { vacancyFetching, vacancyFetched, vacancyFetchingError } from '../actions/index';
import JobCard from "../JobCard/JobCard";

const JobCardItem = () => {
    const {vacancy, vacancyLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(vacancyFetching());
        request("http://localhost:3001/vacancy")
            .then(data => dispatch(vacancyFetched(data)))
            .catch(() => dispatch(vacancyFetchingError()))
    }, []);

    if (vacancyLoadingStatus === "loading") {
        return <h5 className="text-center mt-5">загрузка</h5>;
    } else if (vacancyLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderVacancy = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Вакансий пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <JobCard key={id} {...props}/>
        })
    }

    const elements = renderVacancy(vacancy);
    return(
        <>
            {elements}
        </>
    );
}

export default JobCardItem;