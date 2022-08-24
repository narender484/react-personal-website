import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG1} alt=""/>
          </div>
            <h3> Dice Game</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/deicegame/" className='btn' target='_blank'>Github</a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG2} alt=""/>
          </div>
            <h3> Random Quote Generator</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/randomequote/" className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG3} alt=""/>
          </div>
            <h3> Infinite Scroll</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/infinite-scroll/" className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG4} alt=""/>
          </div>
            <h3> Drum Kit</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/drum-kit/" className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG5} alt=""/>
          </div>
            <h3>Calculator</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/calculator/" className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item">
         <img src={IMG6} alt=""/>
          </div>
            <h3>My first Website</h3>
           <div className="portfolio_item_cta">
            <a href="https://narender484.github.io/personal-site/" className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        
      </div>

    </section>
  )
}

export default Portfolio