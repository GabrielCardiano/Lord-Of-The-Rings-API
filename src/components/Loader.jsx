import styles from './loader.module.css';

function Loader() {
    return (
        <div className={styles.loader} >
            <p>Loading...</p>
        </div>
    );
}

export default Loader