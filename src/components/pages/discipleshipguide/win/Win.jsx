import { useState } from 'react'
import OneVerse from './expandables/OneVerse'
import Tract from './expandables/Tract'
import OneToOne from './expandables/OneToOne'
import Ebanghelyo from './expandables/Ebanghelyo'
import StoryOfGod from './expandables/StoryOfGod'
import plusIcon from '../../../../images/plusIcon.png'
import minusIcon from '../../../../images/minusIcon.png'

function Win() {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false])

  function handleClick(index) {
    setIsOpen(prevValues => {
      const tempArray = [...prevValues]
      tempArray[index] = !tempArray[index]
      return tempArray
    })
  }

  return (
    <>
    <div className='win-wrapper'>
        <div className='win-text'>
            <span>DISCIPLESHIP GUIDE</span>
            <span>WIN</span>
            <span>Introduce to the Unbelievers the basic content of the Gospel</span>
        </div>

        <div className='expandable-wrapper'>
          <OneVerse 
            isOpen={isOpen[0]} 
            handleClick={() => handleClick(0)}
            img={<img className='expandable-icon' src={isOpen[0] ? minusIcon : plusIcon}/>} 
          />

          <Tract 
            isOpen={isOpen[1]} 
            handleClick={() => handleClick(1)}
            img={<img className='expandable-icon' src={isOpen[1] ? minusIcon : plusIcon}/>} 
          />

          <OneToOne 
            isOpen={isOpen[2]} 
            handleClick={() => handleClick(2)}
            img={<img className='expandable-icon' src={isOpen[2] ? minusIcon : plusIcon}/>} 
          />

          <Ebanghelyo
            isOpen={isOpen[3]} 
            handleClick={() => handleClick(3)}
            img={<img className='expandable-icon' src={isOpen[3] ? minusIcon : plusIcon}/>} 
          />

          <StoryOfGod
            isOpen={isOpen[4]} 
            handleClick={() => handleClick(4)}
            img={<img className='expandable-icon' src={isOpen[4] ? minusIcon : plusIcon}/>} 
          />
        </div>


    </div>

    </>
  )
}

export default Win