import React, { useState } from 'react'
import { Images } from '../../assets/Images/Images'

const CarCard = () => {

  const [more, setMore] = useState<boolean>(true)

  const handleClick = () => {
    if (more) {
      setMore(false)
    } else {
      setMore(true)
    }
  }

  return (
    <div className='md:h-64 transition-all ease-in-out duration-200 min-h-[25em] md:w-4/12 w-10/12 shadow-md shadow-black/20 rounded-md overflow-hidden'>
      <img src={Images.Repairs} alt="" className="w-full h-56" />
      <div className="h-10 w-4/12 bg-secondary text-primary mx-auto" onClick={handleClick}>Click test</div>

      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt error exercitationem, 
        aliquid est consequatur placeat voluptatum, in voluptas, rerum doloremque autem 
        <span className={more? '': 'hidden'}>
        voluptate inventore laborum vel eos earum possimus assumenda consectetur dolor? Ad quis blanditiis commodi 
        earum velit minus tempore optio dignissimos expedita totam dolorum excepturi ullam, 
            id nisi ipsa 
          voluptas sint iusto nobis tenetur iure quia magnam laborum magni! Velit animi incidunt nostrum 
          quis cum. Nam obcaecati aliquam accusamus. Incidunt et nisi deserunt vel dicta sed aliquid animi 
          nostrum quia.
          </span>
        </div>
    </div>
  )
}

export default CarCard