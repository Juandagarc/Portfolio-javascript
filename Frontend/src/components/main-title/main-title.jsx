import React, { useState, useEffect } from 'react';
import './main-title.css';
import ParticleComponent from '../particles/particles.jsx';

const MainTitle = () => {
  const [currentColor, setCurrentColor] = useState(getRandomGreenColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomGreenColor();
      setCurrentColor(newColor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  function getRandomGreenColor() {
    const greenValue = Math.floor(Math.random() * 230 + 25);
    const greenColor = `rgb(0, ${greenValue}, 0)`;
    return greenColor;
  }

  return (
    <div className='main-title'>
    <div style={{ padding: '20px', textAlign: 'center' }} className='main-title'>
      <h1 style={{ color: currentColor, transition: 'color 1.5s ease-in-out' }} className='main-title'>
        Juanda
      </h1>
      <div className='content'>
        <div className='content__container'>
          <ul className='content__container__list'>
            <li className='content__container__list__item'>garc</li><br />
            <li className='content__container__list__item'>Dev</li>
          </ul>
        </div>
      </div>
    </div>
    

      {/* <div
        style={{
          boxShadow: `0px 0px 10px 0px ${currentColor}`,
          transition: 'box-shadow 0.8s ease-in-out',
        }}
        className='file-container'
      ></div> */}
    </div>
  );
};

export default MainTitle;
