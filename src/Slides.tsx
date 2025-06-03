import { Slide } from "./slide";

export const Slides = ({ currentSlide, slides }: { currentSlide: number, slides: Slide[] }) => {
    return (
        <>
            {slides.map(({ slide, slideIndex }) => (
                <div key={slideIndex} className={`slide ${slideIndex === currentSlide ? 'active' : ''} ${slideIndex === 1 ? 'title-slide' : ''}`}>
                    {slide}
                </div>
            ))}
        </>
    )
}