import React, {useEffect} from 'react'
import First from './First'
import Second from './Second'
import List from './List'
import Buy from './Buy'
import Show from './Show'
import Dream from './Dream'
import Designers from './Designers'
import Texts from './Texts'
import Texture from './Texture'
import Item from './Item'
import './style.scss'
import Text from '../effects/Text'
import TextSlideUp from '../effects/TextSlideUp'
import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from 'imagesloaded';

function Detail() {

  useEffect(() => {
    let scrollContainer = document.querySelector("[data-scroll-container]");
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      mobile: {
        smooth: true
      },
      tablet: {
          smooth: true
      }
    });

    // setTimeout(() => {
    //   scroll.update();
    // }, 500); 

    // return () => {
    //   scroll.destroy()
    // }

    imagesLoaded(scrollContainer, { background: true }, function () {
      scroll.update();
    });

  }, []);

  return (
    <div className='detail' data-scroll-container>
        <First />
        <div className="title">
            <h1>
              <Text text="Royal Family"/>
            </h1>
            <h3>
              <TextSlideUp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, felis, diam placerat mattis eget vel curabitur sed. tortor turpis neque vitae adipiscing orci. Faucibus quam enim sociis lectus dictum enim</TextSlideUp>
            </h3>
        </div>
        <Second />
        <Texts />
        <List />
        <Item />
        <Buy/>
        <Texture />
        <Show />
        <Dream />
        <Designers />
    </div>
  )
}

export default Detail