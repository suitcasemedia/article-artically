import React from 'react'
import Rating from './Rating'
import ExpandArrow from '../images/ExpandArrow.png'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const MainContent = props =>{


    const {introduction, title, subtitle,  headerImg, img1, p1,p2,p3,p4, p5 , p6 ,bodyImgFullWidth , toggleBodyImg} = props
    return(
        <div>
            <div className="container">
                <div className="row">
                    <h1> {title}</h1>
                    <h2>{subtitle}</h2>
                </div>
           
                <div className="row">
                    <p className="lead">{introduction}</p>
                </div>
             </div>
           
            <div  className="header-img" style={{backgroundImage: 'url(/images/' + headerImg + ')'}}>
               
            </div>
                   
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <p className="first col-12"  >{ ReactHtmlParser(p1) }</p>
                        <p>{p2}</p>
                        <p>{ ReactHtmlParser(p3) }</p>


                        <div 
                            className={"body-img" + (bodyImgFullWidth ? ' body-img--full-width' : '')} 
                            style={{ backgroundImage: 'url(/images/' + img1 + ')'}}
                           
                        >
                        <img 
                            className="expand-arrow" 
                            src={ExpandArrow} 
                            onClick={toggleBodyImg}
                            
                        />
                        </div>
                        <p> { ReactHtmlParser(p4) }</p>
                        <p>{ ReactHtmlParser(p5) }</p>
                        <p>{ ReactHtmlParser(p6) }</p>
                    </div>
                </div>

                <Rating/> 
            </div>
               
               
                  
            
        </div>
    )
}

export default MainContent