import { useState, useEffect } from 'react'; //hooks do react para estados e disparar efeitos quando algo aocntecer
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
    //variavel de stado
    const[time, setTime] = useState(23 * 60);
    const[active, setActive]=useState(false);
    //Calculo dos minutos
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    //desestrurando os minutos e segunos em arrays
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setActive(true);
    }

    //Função de efeito que é ativada sempre que o botão é iniciado (active =true)
    //recursiva e tira um segundo no contador a cada ciclo
    useEffect(() =>{
        if(active && time >0){
            setTimeout(() => {
                setTime(time-1);
            },1000) //roda a cada 1000 milisegundos = 1segundo
        }
    }, [active, time])

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

        <button 
            type="button"
            className ={styles.countdownButton}
            onClick={startCountdown}
            >
            Iniciar um ciclo
        </button>
    </div>
    );
}