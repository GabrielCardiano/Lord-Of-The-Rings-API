import styles from './movies.module.css'

function Books(props) {
    const { data } = props;
    return (
        <div className={styles.movieDashboard}>
            {data.docs.map((book, index) => {
                return (
                    <div key={index}>
                        <h2>{index +1}: {book.name}</h2>
                        </div>
                )
            })}

        </div>
    );
}

export default Books;