import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData{
    minutes : number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){
    
    const {startNewChallenge} = useContext(ChallengesContext);
    //variavel de stado
    const[time, setTime] = useState(25 * 60);
    const[isActive, setIsActive]=useState(false);
    const[hasFinished, setHasFinished] = useState(false);
    //Calculo dos minutos
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);//tirar o delay de 1s após o click do botão
        setIsActive(false);
        setTime(25*60);
        setHasFinished(false);
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
    <CountdownContext.Provider value ={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    }}>
        {children}
    </CountdownContext.Provider>    
    )
}