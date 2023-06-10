import { useState } from 'react';
import styles from './movies.module.css'

function Characters(props) {
    const [char, setChar] = useState('');

    const { data } = props;

    const mappedList = data.docs.filter((element) => {
        if (char === '') {
            return true;
        } 
        if (element.name.toLowerCase().includes(char.toLowerCase())) {
            return true;
        }
        return false;
    })

    return (
        <div className={styles.movieDashboard}>
            <input 
            className={styles.characterSelect} 
            placeholder='Search character...'
            value={char}
            onChange={ (e) => setChar(e.target.value) }
            />

            {mappedList.map((char, index) => {
                const keys = Object.keys(char).filter((element) => {
                    if (element === 'name' || element === '_id') {
                        return false
                    }
                        if (!char[element]) {
                            return false;
                        }
                    return true;
                })

                return (
                    <div key={index}>
                        <h2 key={index}> {char.name}</h2>

                        {keys.map((info) => (
                            <div key={info} className={styles.keyValue}>
                                <p>{info}: {char[info]}</p>
                            </div>
                        ))}
                    </div>


                )
            })}
        </div>
    );
}

export default Characters;