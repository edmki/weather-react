import './CityCardList.css';
import { useState, useEffect, useRef } from 'react';
import CityCard from './CityCard';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CityCardList() {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState({ alert: false, message: "" });
    const citiesRef = useRef([]);

    const citiesLimit = 5;

    useEffect(() => {
        const cityNames = JSON.parse(localStorage.getItem("weather_cities")) || [];
        setCities(cityNames.map((name) => { return { name } }));
    }, []);

    useEffect(() => {
        citiesRef.current = cities;
        const cityNames = cities.filter((city) => { return city.name; }).map((city) => {
            return city.name 
        });
        localStorage.setItem("weather_cities", JSON.stringify(cityNames));
    }, [cities]);

    const onSuccessQuery = function (cityName, index) {
        if (typeof citiesRef.current[index] === 'undefined') return;
        const newCities = citiesRef.current;
        newCities[index].name = cityName;
        setCities([...newCities]);
    }

    const newCity = function () {
        if (typeof cities[cities.length - 1] !== 'undefined' && cities[cities.length - 1].name === "") return;
        const cityComponent = <CityCard key={cities.length} id={cities.length} onDelete={deleteCard} onSuccessQuery={onSuccessQuery} onError={onCityError} />;
        setCities([...cities, { name: "", component: cityComponent }]);
    }

    const deleteCard = function (index) {
        if (typeof citiesRef.current[index] === 'undefined') return;
        setCities(citiesRef.current.filter((el, i) => {
            return i != index;
        }));
    }

    const onCityError = function (message, index) {
        setError({ alert: true, message });
        deleteCard(index);
    }

    const errorAlertClose = function (event, reason) {
        if (reason === 'clickaway') {
            return;
          }
          setError({ alert: false, message: "" });
    }

    return (
        <div className='CityCardList'>
            {cities.map((city, index) => {
                if (city.component) {
                    return city.component;
                } 
                if (!city.name) return;
                return <CityCard key={index.toString()} id={index.toString()} name={city.name} onDelete={deleteCard} />;
            })}
            { cities.length < citiesLimit && <AddButton onClick={newCity} /> }
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