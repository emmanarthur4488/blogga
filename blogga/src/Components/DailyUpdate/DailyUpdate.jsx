import React from 'react'
import HomeUpdate from '../HomeUpdate/HomeUpdate'
import Post10 from '/src/IMG/Post10.png'
import Post11 from '/src/IMG/Post11.png'
import Post12 from '/src/IMG/Post12.png'
import Post13 from '/src/IMG/Post13.png'
import Post14 from '/src/IMG/Post14.png'
import More from '../More/More'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const DailyUpdate = () => {
  return (
    <div>
      <HomeUpdate/>

      <div className="card">
        <div className="design">
          <h1>Design Tools</h1>
          <hr/> 
        </div>
        <div className="card-link">
          <button className="bttn">Design Tools</button>
          <h4>August 13, 2021</h4>
        </div>
        <div className="card-box">
            <div className="card-note">
                <h1>
                    10 hilarious cartoons the depict real-life <br/> problems in programmers
                </h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>

            <div className="image">
              <img src={Post10} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Design Tools</button>
              <h4>August 13, 2021</h4>
          </div>

          <div className="card-box">
            <div className="card-note">
                <h1>
                    10 hilarious cartoons the depict real-life <br/> problems in programmers
                </h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>

            <div className="image">
              <img src={Post11} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Design Tools</button>
              <h4>August 13, 2021</h4>
          </div>

          <div className="card-box">
            <div className="card-note">
                <h1>
                    10 hilarious cartoons the depict real-life <br/> problems in programmers
                </h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>

            <div className="image">
              <img src={Post12} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Design Tools</button>
              <h4>August 13, 2021</h4>
          </div>

          <div className="card-box">
            <div className="card-note">
                <h1>
                    10 hilarious cartoons the depict real-life <br/> problems in programmers
                </h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>

            <div className="image">
              <img src={Post13} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Design Tools</button>
              <h4>August 13, 2021</h4>
          </div>

          <div className="card-box">
            <div className="card-note">
                <h1>
                    10 hilarious cartoons the depict real-life <br/> problems in programmers
                </h1>
                <p>Redefined the user acquisition and redesigned the onboarding <br/> experience, all within 3 working weeks</p>
            </div>

            <div className="image">
              <img src={Post14} alt=""/>
            </div>
          </div>
        <div/>
      </div>

      <div>
        <More/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default DailyUpdate
