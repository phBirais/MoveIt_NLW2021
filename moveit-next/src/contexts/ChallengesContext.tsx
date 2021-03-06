import {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';


interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number ;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge:() => void;
    closeLevelUpModal:() => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;

}



export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
    children,
    ...rest
    } : ChallengesProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const[isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level+1 )* 4, 2) //xp baseado em rpgs

    useEffect(() =>{
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted])

    useEffect(() => {
        Notification.requestPermission();
    }, []) // useEffect - Toda vez que uma variável mudar, executa uma função
    //se o segundo parametro do useEffect é um array vazio, a função só sera executada uma vez após o evento
  
    function levelUp(){
      setLevel(level + 1);
      setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge(){
        //console.log('New challenge');
        const randomChallengeIndex = Math.floor(Math.random()* challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission ==='granted') {
            new Notification('Novo desafio :D', {
                body: `Valendo ${challenge.amount}xp!`
            }) //personalizar noticiações -> https://developer.mozilla.org/pt-BR/docs/Web/API/Notificacoes
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;

        let finalExperince = currentExperience + amount;

        if(finalExperince >= experienceToNextLevel){
            finalExperince = finalExperince - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperince);
        setActiveChallenge(null);
        setchallengesCompleted(challengesCompleted+1);
    }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeLevelUpModal,
            }}
        >
       { isLevelUpModalOpen && <LevelUpModal />}
            {children}
        </ChallengesContext.Provider>
    )
}