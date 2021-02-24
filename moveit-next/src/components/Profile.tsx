import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/phbirais.png" alt="Pedro Henrique"/>
            <div>
                <strong> Pedro H Birais</strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>     
    );
}