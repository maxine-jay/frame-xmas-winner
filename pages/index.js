import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import Confetti from 'react-confetti';

const Home = () => {
  const [people, setPeople] = useState(
    initialPeopleList
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(people[0]);
  const [winnerSelected, setWinnerSelected] = useState(false);
  var intervalHandle = null;
  const announceWinner = () => {
    clearInterval(intervalHandle);
    setTimeout(() => {
      setWinnerSelected(true)
    }, 100);
  }

  const updatePeople = () => {
    setIsSpinning(false);
    const newArr = people.filter(p => p.id !== winner.id);
    setPeople(newArr);
    setWinnerSelected(false)
  }

  const randomiseWinner = () => {
    setIsSpinning(true);
    intervalHandle = setInterval(() => {
      const randomPerson = people[Math.floor(Math.random() * people.length)];
      setWinner(randomPerson);
    }, 75)
  }

  const chooseWinner = () => {
    randomiseWinner();
    setTimeout(announceWinner, 3500);
  }


  return (
    <>
      <div className={`${styles.wrapper} ${isSpinning ? styles.spinning : styles.notSpinning}`}>
        {winnerSelected &&
          <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#FFFFFF', '#C0C0C0', '#fafafa87', '#fafafa54', '#FFFF00bf', '#ff460773']}
        />
        }
        <div className={styles.wrapperInner}>
          {isSpinning && <h1 className={`${styles.homeHeader} ${winnerSelected ? styles.flash : styles.noFlash}`}>{winner.name}</h1>}
          {(!isSpinning && !winnerSelected) && <button className={`${styles.btn} ${styles.btnSpinner}`} onClick={chooseWinner}>Spin!</button>}
          {(winnerSelected) && <button className={`${styles.btn} ${styles.btnNext}`} onClick={updatePeople}>Next Prize</button>
          }
        </div>
      </div>
    </>
  )
}

const initialPeopleList = [
  { name: 'Andy Murray', id: 2 },
  { name: 'Anna Quinn', id: 3 },
  { name: 'Brooke Stirling', id: 4 },
  { name: 'Caitlin Connolly', id: 5 },
  { name: 'Craig Jones', id: 7 },
  { name: 'Daniel Nielsen', id: 8 },
  { name: 'Darren Healy', id: 9 },
  { name: 'David Calder', id: 11 },
  { name: 'Emma Lees', id: 13 },
  { name: 'Ewan MacGill', id: 14},
  { name: 'Florence Millar', id: 15},
  { name: 'Gill Wylie', id: 16},
  { name: 'Gordon Sheach', id: 17},
  { name: 'Graeme Thewliss', id: 18},
  { name: 'Graham Ferguson', id: 19},
  { name: 'Hannah Wilson', id: 20},
  { name: 'Heather Dewar', id: 22},
  { name: 'James Henighen', id: 23},
  { name: 'James Moran', id: 24},
  { name: 'James Pais', id: 25},
  { name: 'Jamie Ellis', id: 26},
  { name: 'Jennifer McCall', id: 27},
  { name: 'John Macfarlane', id: 28},
  { name: 'Katie Brunsmann', id: 29},
  { name: 'Katie Kelly', id: 30},
  { name: 'Kevin Githwe', id: 32},
  { name: 'Kevin Hickey', id: 33},
  { name: 'Kieran Frew', id: 34},
  { name: 'Laura Phillips', id: 35},
  { name: 'Lauren Brogan', id: 36},
  { name: 'Libby Keiller', id: 37},
  { name: 'Mark Hume', id: 38},
  { name: 'Mark McMullan', id: 39},
  { name: 'Matthew Wiseman', id: 40},
  { name: 'Maxine Simpson', id: 41},
  { name: 'Niamh Coffey', id: 42},
  { name: 'Nicola Devine', id: 43},
  { name: 'Olivia Lynch', id: 44},
  { name: 'Paddy Baxter', id: 45},
  { name: 'Paul Fotheringham', id: 46},
  { name: 'Peter Horne', id: 47},
  { name: 'Peter McFarlane', id: 48},
  { name: 'Raymond Rigby', id: 49},
  { name: 'Roisin Tolmie', id: 50},
  { name: 'Ruaridh Maclean', id: 51},
  { name: 'Simon Parker', id: 52},
  { name: 'Sophie Finch', id: 53},
  { name: 'Stacey Lang', id: 54},
  { name: 'Stephen Cooper', id: 55},
  { name: 'Stuart Argue', id: 57},
  { name: 'Suzanne Bennett', id: 58},
  { name: 'Duncan Seller', id: 59},
  { name: 'Stevie McNair', id: 60},
  { name: 'Roslynn Mackay', id: 61},
  { name: 'Gill Currie', id: 62},
  { name: 'Tina Marchetti ', id: 63}

]
export default Home;