import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'

import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '../ui/button'
import { usePrevNextButtons } from './UseCarouselNavigation'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla w-full">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="flex gap-1 ">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full justify-between gap-4">
                <Button onClick={onPrevButtonClick} className='basis-1/2' disabled={prevBtnDisabled}>Prev</Button>
                <Button onClick={onNextButtonClick} className='basis-1/2' disabled={nextBtnDisabled}>Next</Button>
                {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
                {/* <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
            </div>
        </section>
    )
}

export default EmblaCarousel
