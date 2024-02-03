import React from 'react'
import './home.css'
import Post from '/src/IMG/Post.png'
import Post2 from '/src/IMG/Post2.png'
import Post3 from '/src/IMG/Post3.png'
import Post4 from '/src/IMG/Post4.png'
import Post5 from '/src/IMG/Post5.png'
import Post6 from '/src/IMG/Post6.png'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="introduction">
          <p>👋 HELLO</p>
          <h2>Insight about my personal work <br/> life, and the in-betweens</h2>
        </div>
      </div>

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
              <img src={Post} alt=""/>
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
              <img src={Post2} alt=""/>
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
              <img src={Post3} alt=""/>
            </div>
          </div>
      </div>

      <div className="card">
        <div className="design">
            <h1>Weekly Updates</h1>
            <hr/>
          </div>
        <div className="card-link">
              <button className="bttn">Weekly Updates</button>
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
              <img src={Post4} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Weekly Updates</button>
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
              <img src={Post5} alt=""/>
            </div>
          </div>

          <div className="card-link">
              <button className="bttn">Weekly Updates</button>
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
              <img src={Post6} alt=""/>
            </div>
          </div>
      </div> 

      <div>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
