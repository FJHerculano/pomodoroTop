import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {

    const {
        
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown,

    } = useContext(CountdownContext)
    
    // String converte meus minutos para string, o padStart confere se tem dois caracteres a serem convertidos 
    // exemplo 25 minutos '2' '5' , ja se for 5 minutos '5' não tem dois parametro então será preenchido com zero
    // o split encapsula as opções em aspas simples, o split tbm devolve um array com 1º char e 2º char
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                    >
                        Ciclo Encerrado                
                </button>

            ): (

        <>
            {isActive ? (
                <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                >
                        Abandonar ciclo   
                </button>
            ) : (
                <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                >
                        Iniciar um ciclo
                </button>
            )}
        </>
            )}
        </div>
    );
}