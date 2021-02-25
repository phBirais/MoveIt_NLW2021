import { useState, useEffect, useContext } from 'react'; //hooks do react para estados e disparar efeitos quando algo aocntecer
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext);


    //desestrurando os minutos e segunos em arrays
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



    return(
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

        {hasFinished ? ( //if ternário - IF THEN, sem ifelse
            <button
                disabled 
                className ={`${styles.countdownButton}`}
                >
                Ciclo encerrado
            </button>
        ): (
            <> 
                { // <> fragment - div que não é exibida no html, só serve para suprir o problema do react em precisar de algo cobrindo os htmls }
                isActive ? (  //se contador esta ativo, botão desativar, senão, botão ativar
                    <button 
                    type="button"
                    className ={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>
                ) : (
                    <button 
                    type="button"
                    className ={styles.countdownButton}
                    onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                ) }
            </>
        )}

    </div>
    );
}