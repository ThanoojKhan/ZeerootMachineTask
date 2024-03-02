import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import FeatImage01 from '../../assets/images/features-03-image-01.png';
import FeatImage02 from '../../assets/images/features-03-image-02.png';
import FeatImage03 from '../../assets/images/features-03-image-03.png';

const BlockCard = ({ imageSrc, alt, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const blockCardRef = useRef(null);

  useEffect(() => {
    if (inView && blockCardRef.current) {
      blockCardRef.current.classList.add('animate__fadeInUp');
    } else {
      blockCardRef.current.classList.remove('animate__fadeInUp');
    }
  }, [inView]);

  return (
    <div ref={ref} className={`block-card py-5 ${inView ? 'animate__fadeInUp' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-out, transform 1s ease-out', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img ref={blockCardRef} className="max-w-full rounded-3xl mx-auto md:max-w-none h-auto" src={imageSrc} alt={alt} />
      <div className="md:pr-4 lg:pr-12 xl:pr-16 p-10">
        <div className="font-architects-daughter text-3xl text-green-600 mb-2">More speed. Less spend</div>
        <h3 className="h3 mb-3">Keep projects on schedule</h3>
        <p className="text-xl text-black mb-4">{text}</p>
        <ul className="text-lg text-black -mb-2">
          <li className="flex items-center mb-2">
            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>Duis aute irure dolor in reprehenderit</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>Excepteur sint occaecat</span>
          </li>
          <li className="flex items-center">
            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>Amet consectetur adipiscing elit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

function Goals() {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-lg font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="text-4xl mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>
          <div className="grid gap-20">
            <BlockCard imageSrc={FeatImage01} alt="Feature 01" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <BlockCard imageSrc={FeatImage02} alt="Feature 02" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <BlockCard imageSrc={FeatImage03} alt="Feature 03" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
