import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p> With my nonprofit Women in Action Against Malnutrition SL we are ensuring to empower rural smallholder farmers so that they can provide for themselves their basic needs like food, housing, schools fee and medical services.</p>

        <div className="gpt3__header-content__input">
          <input type= "email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src= {people} alt="people" />
          <p>1,600 people requested access avisit in the last 24 hours</p>
        </div>

      </div>
      
      <div className="gpt3__header-image">
        <img src= {ai} alt="ai" />
      </div>

    </div>
  )
}

export default Header