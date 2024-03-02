import React from 'react';
import { useInView } from 'react-intersection-observer';
import TestimonialImage01 from '../../assets/images/testimonial-01.jpg';
import TestimonialImage02 from '../../assets/images/testimonial-02.jpg';
import TestimonialImage03 from '../../assets/images/testimonial-03.jpg';

const Testimonial = ({ imageSrc, alt, text }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    return (
        <div ref={ref} className={`flex flex-col h-full p-6 bg-gray-800 rounded-3xl ${inView ? 'animate__fadeInUp' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-out, transform 1s ease-out' }}>
            <div>
                <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={imageSrc} width={150} alt={alt} />
                </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">{text}</blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <section>
            <div className="mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    <div className="mx-auto text-center pb-12 md:pb-20">
                        <h2 className="text-4xl mb-4">Don't take our word for it</h2>
                        <p className="text-2xl text-gray-600">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
                    </div>
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                        <Testimonial imageSrc={TestimonialImage01} alt="Testimonial 01" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                        <Testimonial imageSrc={TestimonialImage02} alt="Testimonial 02" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                        <Testimonial imageSrc={TestimonialImage03} alt="Testimonial 03" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                        <Testimonial imageSrc={TestimonialImage01} alt="Testimonial 01" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                        <Testimonial imageSrc={TestimonialImage02} alt="Testimonial 02" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                        <Testimonial imageSrc={TestimonialImage03} alt="Testimonial 03" text="Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before." />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;