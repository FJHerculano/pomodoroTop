import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } =  useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer} >
            <img src="https://scontent.fjdo1-1.fna.fbcdn.net/v/t31.0-8/21949947_1253043004800510_6070915243040881094_o.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=QyeejZVS5PkAX_Zqw9O&_nc_ht=scontent.fjdo1-1.fna&oh=04b7a1425089bd443a9b8dbd51bd34a1&oe=6059AF52" 
            alt="Francisco Herculano"/>
            <div>
                <strong> Francisco Herculano</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div> 
    );
}