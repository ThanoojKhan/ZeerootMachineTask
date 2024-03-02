import React from 'react';
import { useInView } from 'react-intersection-observer';

const BlockCard = ({ title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75
  });

  return (
    <div ref={ref} className={`block-card bg-slate-300 py-10 px-5 rounded-3xl ${inView ? 'animate__fadeInUp' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-out, transform 1s ease-out', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
        <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
        <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
      </svg>
      <h2 className="text-4xl mb-5">{title}</h2>
      <h2 className="text-2xl text-center">{description}</h2>
    </div>
  );
};

function Blocks() {
  return (
    <div className="mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="mx-auto text-center pb-12 md:pb-20">
          <h2 className="text-4xl mb-4">The majority our customers do not understand their workflows.</h2>
          <p className="text-2xl text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <BlockCard
              key={index}
              title="Instant Features"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
            />
          ))}
        </div>
        <div className="mt-10 mx-auto text-center bottom-0">
          <h1 className="mb-4 text-3xl">The majority our customers do not understand their workflows.</h1>
          <p className="text-xl mx-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}
export default Blocks;