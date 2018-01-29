import React, { Component } from 'react';
import Logo from './images/Logo.svg';
import './custom-scss/main.css';
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import content from './utils/content-data'
class App extends Component {


  state = {bodyImgFullWidth : false}

  toggleBodyImg = () =>{

    this.setState({ bodyImgFullWidth: !this.state.bodyImgFullWidth})
  }
  render() {
    const{ title, 
           introduction, 
           mainBody,
           headerImg,
           img1,
           p1,p2,p3,p4,p5,p6
        } = content

   
    return (
      <div className="container">
     
        
        <div class="top-title"><img src={Logo} /></div>
        <div className="row">
       
          <div className="main-content col-12">
            <div className="meta-strip">
              <div className="meta-strip__subject col-12 col-md-1">
                Animals
              </div>
              <div className="meta-strip__auth-date col-12 col-md-3">
                <i>by Philip Hoare</i> • 11 Dec 2018
              </div>
            </div>
        
            <div className="inner-container">
              <MainContent introduction={introduction} 
                          title={title} 
                          p1={p1}
                          p2={p2}
                          p3={p3}
                          p4={p4}
                          p5={p5}
                          p6={p6}
                          headerImg={headerImg}
                          img1={img1}
                          bodyImgFullWidth={this.state.bodyImgFullWidth}
                          toggleBodyImg= {this.toggleBodyImg}
                          /> 
 
            </div>
           
          </div> 
         
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
