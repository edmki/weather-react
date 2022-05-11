import './CityCardList.css';
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CityCard from './CityCard';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CityCardList() {
    const [cities, setCities] = useState([]);
    const [searchCard, setSearchCard] = useState(false);
    const [error, setError] = useState({ alert: false, message: "" });

    const citiesLimit = 5;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    useEffect(() => {
        setCities(JSON.parse(localStorage.getItem("weather_cities")) || []);
    }, []);
    useEffect(() => {
        console.log("dark", prefersDarkMode);
    });

    useEffect(() => {
        localStorage.setItem("weather_cities", JSON.stringify(cities));
    }, [cities]);

    const addCity = function (cityName) {
        if (cities.length < citiesLimit)
        setCities([...cities, cityName]);
        setSearchCard(false);
    }

    const addSearchCard = function () {
        setSearchCard(<CityCard key={(searchCard.key || 0) + 1} onDelete={removeSearchCard} onSuccessQuery={addCity} onError={onCityError} />);
    }

    const removeSearchCard = function () {
        setSearchCard(false);
    }

    const deleteCard = function (index) {
        if (!cities.indexOf(index)) return;
        setCities(cities.filter((el, i) => {
            return i != index;
        }));
    }

    const onCityError = function (message) {
        setError({ alert: true, message });
        setSearchCard(false);
    }

    const errorAlertClose = function (event, reason) {
        if (reason === 'clickaway') {
            return;
          }
          setError({ alert: false, message: "" });
    }

    return (
        <div className='CityCardList'>
            {cities.map((cityName, index) => {
                return <CityCard key={index.toString()} id={index.toString()} name={cityName} onDelete={deleteCard} />;
            })}
            {searchCard}
            { cities.length < citiesLimit && <AddButton onClick={addSearchCard} /> }
            <Snackbar open={error.alert} autoHideDuration={6000} onClose={errorAlertClose}>
                <Alert severity="error">
                    {error.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

function AddButton(props) {
    return (
        <div className='AddButton'>
            <Tooltip title="Adicionar cidade">
                <div className='add-icon' onClick={props.onClick}>
                    <svg stroke="white" width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54 4L54 104" strokeWidth="8" strokeLinecap="round" />
                        <path d="M4 54H104" strokeWidth="8" strokeLinecap="round" />
                    </svg>
                </div>
            </Tooltip>
        </div>
    );
}

export default CityCardList;