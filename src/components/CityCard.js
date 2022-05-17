import './CityCard.css';
import { ReactComponent as Waterdrop} from '../assets/waterdrop.svg';
import { useState, useEffect } from 'react';
import HorizontalScroll from '../utils/HoizontalScroll';
import CircularProgress from '@mui/material/CircularProgress';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

const appid = "02717570ae161f36b367bfd021863328";

function CityCard(props) {
    const [query, setQuery] = useState("");
    const [weatherData, setWeatherData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (props.name)
            loadCurrentWeather(props.name);
    }, []);

    useEffect(() => {
        if (weatherData && props.onSuccessQuery) {
            props.onSuccessQuery(query, props.id);
        }
    }, [weatherData]);

    useEffect(() => {
        if (error && props.onError) {
            props.onError(error, props.id);
        }
    }, [error]);

    const submitHandler = async function (e) {
        e.preventDefault();
        loadCurrentWeather(query);
    }

    const loadCurrentWeather = async function (cityName) {
        setLoading(true);
        try {
            const [lat, lon] = await fetchGeolocation(cityName);
            const data = await fetchWeather(lat, lon);
            data.name = cityName;
            setWeatherData(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError(err.message)
        }
    }

    const fetchGeolocation = async function (cityName) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${appid}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.length == 0) {
            throw new Error("Cidade não encontrada");
        }

        if (data.cod && data.cod != 200) {
            throw new Error(data.message || "Unknown error");
        }

        return [data[0].lat, data[0].lon];
    }

    const fetchWeather = async function (lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}&exclude=minutely&units=metric&lang=pt_br`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.cod && data.cod != 200) {
            throw new Error(data.message || "Unknown error");
        }

        return data;
    }

    const searchForm = (
        <FormControl component="form" onSubmit={submitHandler} name="city" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", flexDirection: "row" }}>
            <Input autoFocus={true} placeholder="Cidade" required={true} color={"primary"} sx={{ ml: 1, flex: 1 }} onInput={(e) => setQuery(e.target.value)} />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </FormControl>
    );

    return (
        <div className='CityCard'>
            <div className='CityCard-content'>
                <Tooltip title='Excluir cidade'>
                    <IconButton onClick={() => props.onDelete(props.id)} className='CityCard-delete' size='small'>
                        <CloseIcon fontSize='small' />
                    </IconButton>
                </Tooltip>
                {error
                    ? <Alert severity="error">{error}</Alert>   
                    : weatherData && Object.keys(weatherData).length > 0
                        ? (<>
                            <CurrentWeather data={weatherData.current} dayData={weatherData.daily[0]} name={weatherData.name} />
                            <WeatherNext data={weatherData.hourly}></WeatherNext>
                        </>)
                        : loading
                            ? <CircularProgress className='CityCard-loader' />
                            : searchForm
                }
            </div>
        </div>
    );
}

function CurrentWeather(props) {
    const iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`;
    const temp = Math.round(parseFloat(props.data.temp));
    const tempMin = Math.round(parseFloat(props.dayData.temp.min));
    const tempMax = Math.round(parseFloat(props.dayData.temp.max));

    return (
        <div className='CurrentWeather'>
            <div className='CityCard-name'>{props.name}</div>
            <Tooltip title={props.data.weather[0].description}><div className='CityCard-icon'><img src={iconUrl} alt="weather icon"></img></div></Tooltip>
            <div className='CityCard-temperature'>{temp}</div>
            <div className='CityCard-range'>
                <Tooltip title='mínima'><div className='CityCard-min'>{tempMin}</div></Tooltip>
                <Tooltip title='máxima'><div className='CityCard-max'>{tempMax}</div></Tooltip>
            </div>
        </div>
    )
}

function WeatherNext(props) {
    const numHours = 12;
    const hourlyData = props.data.filter((item, i) => {
        return i > 0 && i <= numHours + 1;
    });

    return (
        <HorizontalScroll className='WeatherNext'>
            {hourlyData.map((data, key) => {
                const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                const temp = Math.round(parseFloat(data.temp));
                const precipitation = Math.round(parseFloat(data.pop) * 100);

                return (
                    <div className='WeatherNext-item' key={key}>
                        <div className='WeatherNext-time'>{new Date(data.dt * 1000).getHours()}:00</div>
                        <Tooltip title={data.weather[0].description}><div className='WeatherNext-icon'><img draggable="false" src={iconUrl} alt="weather icon" /></div></Tooltip>
                        <div className='WeatherNext-temperature'>{temp}°</div>
                        <Tooltip title="Chuva"><div className='WeatherNext-rain'><Waterdrop /> {precipitation}%</div></Tooltip>
                    </div>
                );
            })}
        </HorizontalScroll>
    );
}

export default CityCard;