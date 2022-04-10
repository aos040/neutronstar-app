import React, {useState} from 'react'
import '../css/Slider.css'
import BtnSlider from './BtnSlider'

const dataSlider = [
    {
        id: 1,
        title: "Samsung",
    },
    {
        id: 2,
        title: "Samsung",
    },
    {
        id: 3,
        title: "Samsung",
    },
    {
        id: 4,
        title: "Samsung",
    },
];

export default function Slider({staticData}) {

    const cover = staticData && Object.keys(staticData).length !== 0 ? staticData.cover : false
    const pic_url = cover.length !== 0 ? cover[0].image : false

    // find index of img character in url
    let imgStartIndex =  cover.length !== 0 ? pic_url.indexOf("img") : 1
    
    // replace the numebr that comes after img with a specific a number
    // for e.g change img1 to imag2
    function replaceAt(str, index, newChar) {
        function replacer(origChar, strIndex) {
            if (strIndex === index)
                return newChar;
            else
                return origChar;
        }
        return str.replace(/./g, replacer);
    }


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

   
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        {pic_url && <img src={replaceAt(pic_url, imgStartIndex+3, `${index+1}`)} />}
                    </div>
                )
            })}
            
            {staticData && Object.keys(staticData).length !== 0 ? <BtnSlider moveSlide={nextSlide} direction={"next"} staticData={staticData} /> : ''}
            {staticData && Object.keys(staticData).length !== 0 ? <BtnSlider moveSlide={prevSlide} direction={"prev"} staticData={staticData}/> : ''}
        
            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}