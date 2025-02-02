'use client'
import localFont from 'next/font/local'
import styles from './Hero.module.css';
import Carousel, { Slider, SliderContainer, ThumsSlider } from './carousel';
import { imgPreview } from '@/data';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const PS = () => {
  const OPTIONS = { loop: false };
  return (
    <div className="relative pb-32" id='problem'>
        <section className={`pt-32 ${styles.problem}`}>
            <h3>PAST EVENTS</h3>
        </section>
        <div className=" 2xl:w-[70%] bg-background sm:w-[80%] w-[90%] mx-auto">
        <div className=" 2xl:w-[70%] bg-background sm:w-[80%] w-[90%] mx-auto">
        <Carousel options={OPTIONS} className=" relative" isAutoPlay={true}>
          <SliderContainer className="gap-2">
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img1}>
              <img
                src={imgPreview.img1}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img2}>
              <img
                src={imgPreview.img2}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img3}>
              <img
                src={imgPreview.img3}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img4}>
              <img
                src={imgPreview.img4}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img5}>
              <img
                src={imgPreview.img5}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img6}>
              <img
                src={imgPreview.img6}
                width={1400}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img7}>
              <img
                src={imgPreview.img7}
                width={1200}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className="xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img8}>
              <img
                src={imgPreview.img8}
                width={1200}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img9}>
              <img
                src={imgPreview.img9}
                width={1200}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
            <Slider
              className=" xl:h-[400px] sm:h-[350px] h-[300px] w-full"
              thumnailSrc={imgPreview.img10}>
              <img
                src={imgPreview.img10}
                width={1200}
                height={800}
                alt="img"
                className="h-full object-cover rounded-lg w-full"
              />
            </Slider>
          </SliderContainer>
          <ThumsSlider />
        </Carousel>
      </div>
      </div>
        </div>
  )
}

export default PS