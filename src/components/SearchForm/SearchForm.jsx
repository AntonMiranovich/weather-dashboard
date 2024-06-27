import { useState } from "react";
import styles from './style.module.css'

function SearchForm({ setCityName, setWeather }) {
    const [city, setCity] = useState('')

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Weather</h1>
            <input className={styles.weatherInput} type="text" onChange={(e) => setCity(e.target.value)} placeholder="Your city" value={city} />
            <button className={styles.weatherButton} onClick={() => setCityName(city)}>Search</button>
            <button className={styles.weatherButton} onClick={() => {
                setCity('')
                setWeather({})
            }}>Reset</button>
        </div>
    );
}

export default SearchForm;