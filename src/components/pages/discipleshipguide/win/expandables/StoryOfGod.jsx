import React from 'react'

function StoryOfGod(props) {
  return (
    <>  
        <div className='expandable-title whitesmoke' onClick={props.handleClick}>
            <span>The Story of God (Week 1-12)</span>
            {props.img}
        </div>

        <div className={props.isOpen ? 'expandable-content' : 'hide'}>
            <div className='content-text'>
              <span>Content Here</span>
            </div>
        </div>

    </>
  )
}

export default StoryOfGod