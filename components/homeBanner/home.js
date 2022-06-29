import React from 'react'
import styles from './home.module.css'


 
 





 


const HomePage = (props) => {
       const { imgUrl} = props
       const homeP = 'Welcome to physiotherapy clinic'
       const homeH = 'We&aposre Here to Save Lives and Properties'
       
  return (
    <div 
     className={styles.container}
    style= {{
      backgroundImage:`url(${imgUrl})`,
      width: '100%',
      height: '100%',
      
      backgroundSize:'cover',
      backgroundPosition:'50% 50%'
   }}>

      <div className={styles.subContainer}>
           <div className={styles.content}>
               <p>{homeP}</p>
                <h1>{homeH}</h1>
                <button>
                     Discover More
                </button>
           </div>
      </div>  
       

        
      
       
     
       
    </div>
  )
}

export default HomePage