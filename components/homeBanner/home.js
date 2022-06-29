import React from 'react'
import styles from './home.module.css'


 
 





 


const HomePage = (props) => {
       const { imgUrl} = props
  
  return (
    <div 
     className={styles.container}
    style= {{
      backgroundImage:`url(${imgUrl})`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundSize:'cover',
      backgroundPosition:'50% 50%'
   }}>

      <div className={styles.subContainer}>
           <div className={styles.content}>
               <p>Welcome to physiotherapy clinic</p>
                <h1>We&aposre Here to Save Lives and Properties</h1>
                <button>
                     Discover More
                </button>
           </div>
      </div>  
       

        
      
       
     
       
    </div>
  )
}

export default HomePage