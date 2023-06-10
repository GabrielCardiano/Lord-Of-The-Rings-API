import styles from './options.module.css'

function Options(props) {
    const { selection, setSelection } = props

    const questions = ['character', 'movie', 'book'];

    return (
        <div className={styles.buttonContainer}>
            {
                questions.map((question, index) => (
                    <button
                        key={index}
                        className={
                            `${styles.button} 
                            ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`
                        }
                        onClick={setSelection(question)}
                    >
                        {question}
                    </button>
                ))
            }

        </div>
    );
}

export default Options;