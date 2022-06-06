import { useState } from "react";
import { createContext } from "react";

export const playerContext = createContext();
export const PlayerProvider = ({children}) => {
    const [playerNameOne, setPlayerNameOne] = useState('');
    const [playerNameTwo, setPlayerNameTwo] = useState('');
    const [firstDice, setFirstDice] = useState('');
    const [secondDice, setSecondDice] = useState('');
    const [winner, setWinner] = useState('');

    return(
        <playerContext.Provider value={{winner,
            setWinner,
            playerNameOne,
            setPlayerNameOne,
            playerNameTwo,
            setPlayerNameTwo,
            firstDice,
            setFirstDice,
            secondDice,
            setSecondDice}}>
            {children}
        </playerContext.Provider>
    )
}