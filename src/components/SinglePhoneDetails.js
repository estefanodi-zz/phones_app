import React from 'react'
import { Image } from 'semantic-ui-react'

export default ({ onRemove,index,changePage,phone:{model,price,_id,image,description,color}}) => {
    return(
       <div className='single_phone_container'>

         <div className='single_phone_container_left'>
             <Image style={{maxWidth:'300px'}} src={image}/>
         </div>

         <div className='single_phone_container_right'>
            <div className='single_phone_model'>{model}</div>
            <div className='single_phone_description'>{description}</div>
            <div className='single_phone_color'>
                <span className='span_color'>color:</span> {color}
            </div>
            <div className='single_phone_bottom'>
               <div className='single_phone_bottom_left'>{price} €</div>
               <div className='single_phone_bottom_middle'>
                 <button className='button page_back_button'
                         onClick  = {()=> changePage('update',index,_id)}>Update</button>
               </div>
               <div className='single_phone_bottom_right'>
                 <button className='button page_back_button'
                         onClick  = {()=>{onRemove(_id);changePage('phones',index,_id)}}>
                 Remove</button>
               </div>
               <div className='single_phone_back'>
                 <button className='button page_back_button'
                         onClick  = {()=>changePage('phones')}>
                 Back to phones list</button>
               </div>
            </div>
         </div>
       </div>
    )
}