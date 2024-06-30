import styles from './style.module.css'

function WeatherDisplay({ weathe }) {

    return (
        <div className={styles.wrapper}>
            {weathe.name !== undefined ?
                <>
                    <h2 className={styles.weatherCity}>{weathe.name}</h2>
                    <p className={styles.weatherTemp}>{Math.round(weathe.main.temp - 273.15)} °C</p>
                    <div className={styles.wrapperInfo}>
                        <img src={'http://openweathermap.org/img/w/' + weathe.weather[0].icon + '.png'} alt='Icon depicting current weather.' className={styles.img} />
                        <p className={styles.weatherInfo}>{weathe.weather[0].description}</p>
                    </div>
                </>
                : null
            }
        </div>
    );
}

export default WeatherDisplay;