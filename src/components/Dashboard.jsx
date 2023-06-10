import { useState } from 'react';
import Options from './Options';
import styles from './dashboard.module.css'
import useFetchData from '../hook/useFetchData';
import Characters from './Characters';
import Movies from './Movies';
import Books from './Books';
import Loader from './Loader';

function Dashboard() {
    const [selection, setSelection] = useState(null)
    const { data, isLoading, error } = useFetchData(selection)

    function onClickHandler(clickedButton) {
        return () => { setSelection(clickedButton) }
    }

    const dataRender = {
        'character': <Characters data={data} />,
        'movie': <Movies data={data} />,
        'book': <Books data={data} />,
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.layout}>
                <h1 style={{margin: '0 auto'}}>Lord of the Rings</h1>
                <Options selection={selection} setSelection={onClickHandler} />
                {isLoading && <Loader />}
                {(data && !isLoading) && (
                    dataRender[selection]
                )}
            </div>
        </div>
    );
}

export default Dashboard;