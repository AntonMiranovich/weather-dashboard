import styles from './style.module.css'

function WeatherDisplay({ weather }) {

    return (
        <div className={styles.wrapper}>
            {weather.name !== undefined ?
                <>
                    <h2 className={styles.weatherCity}>{weather.name}</h2>
                    <p className={styles.weatherTemp}>{Math.round(weather.main.temp - 273.15)} °C</p>
                    <p className={styles.weatherInfo}>{weather.weather[0].main}</p>
                </>
                : null
            }
        </div>
    );
}

export default WeatherDisplay;