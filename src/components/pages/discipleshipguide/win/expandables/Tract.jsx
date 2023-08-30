import React from 'react'

function Tract(props) {
  return (
    <>  
        <div className='expandable-title white' onClick={props.handleClick}>
            <span>Huwag Sayangin ang Buhay </span>
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

export default Tract