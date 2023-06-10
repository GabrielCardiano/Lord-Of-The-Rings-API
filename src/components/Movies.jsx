import styles from './movies.module.css'

function Movies(props) {
    const { data } = props;
    return (
        <div className={styles.movieDashboard} >
            {data.docs.map((movie, index) => {
                const keys = Object.keys(movie).filter((el) => {
                    if (el === 'name' || el === '_id') {
                        return false
                    }
                    return true
                })

                return (
                    <div key={index}>
                        <h2>{movie.name}</h2>

                        {keys.map((title) => (
                            <div key={title} className={styles.keyValue}>
                               <p>{title}: {movie[title]}</p>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    );
}

export default Movies;