import React from "react";
import "../css/Slider.css";

export default function BtnSlider({ direction, moveSlide, staticData }) {

  const icon = staticData && Object.keys(staticData).length !== 0 ? staticData.icon : false

  const left_array = icon.length !== 0 ? icon.filter((icon)=>icon.name==='Left-arrow') : false
  const right_array = icon.length !== 0 ? icon.filter((icon)=>icon.name==='Right-arrow') : false
  
  // const left_array = icon.filter((icon)=>icon.name==='Left-arrow')
  // const right_array = icon.filter((icon)=>icon.name==='Right-arrow')

  const leftArrow = left_array !== false && left_array.length !== 0 ? left_array[0].image : false
  const rightArrow = right_array !== false && right_array.length !== 0 ? right_array[0].image : false

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {rightArrow !== false && rightArrow.length !== 0 && direction==="next" ? <img src={`${rightArrow}`}/> : ''}
      {leftArrow !== false && leftArrow.length !== 0 && direction!=="next" ? <img src={`${leftArrow}`}/> : ''}

      {/* <img src={direction === "next" ? `${rightArrow}` : `${leftArrow}`} /> */}
    </button>
  );
}