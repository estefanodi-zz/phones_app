import React from 'react'
import { Image } from 'semantic-ui-react'

export default ({ index,changePage, phone: { model, price, _id, image }}) => {
		return(
      <div className='small_phone_container'>
        <div className='small_phone_header'>{model}</div>

        <div className='small_phone_image_container'>
           <Image src={image}/>
        </div>

        <div className='small_phone_footer'>
          <div className='small_phone_footer_left'>{price} €</div>
          <div className='small_phone_footer_right'>
            <button 
              onClick  = { ()=> changePage('details',index,_id )}
              className='button footer_button'>DETAILS</button>
          </div>
        </div>
       </div>
		)
}