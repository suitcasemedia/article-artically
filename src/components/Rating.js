import React from 'react'

const Rating = props => {


        let ratings = []
        for( let i = 1 ; i < 11 ; i++){
            ratings.push(i)
        }
       
        return( 
                <div className="rating">
                    <h2>We would like to hear your opinion </h2>
                    <p class="rating__lead">How would you rate this article?</p>
                    <div className="">
                        <ul >
                            {
                                ratings.map(rating =>{
                                    return(
                                        <li><a href="">{rating}</a></li>
                                    )
                                })
                            }            
                        </ul>
                        <div className="rating__desc">
                                <div className="rating__desc-one">
                                    Waste of time 
                                </div>
                                <div  className="rating__desc-ten">
                                    Excellent read
                                </div>
                        </div>      
                    </div>
                </div>
                
           
             
             )
            


        
         
   }


    

   

    
    


export default Rating