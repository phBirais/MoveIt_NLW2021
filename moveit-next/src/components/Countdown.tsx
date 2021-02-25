import { useState, useEffect, useContext } from 'react'; //hooks do react para estados e disparar efeitos quando algo aocntecer
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const {startNewChallenge} = useContext(ChallengesContext);
    //variavel de stado
    const[time, setTime] = useState(0.1 * 60);
    const[isActive, setIsActive]=useState(false);
    const[hasFinished, setHasFinished] = useState(false);
    //Calculo dos minutos
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    //desestrurando os minutos e segunos em arrays
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);//tirar o delay de 1s após o click do botão
        setIsActive(false);
        setTime(0.1*60);
    }

    //Função de efeito que é ativada sempre que o botão é iniciado (active =true)
    //recursiva e tira um segundo no contador a cada ciclo
    useEffect(() =>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            },1000) //roda a cada 1000 milisegundos = 1segundo
        }else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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