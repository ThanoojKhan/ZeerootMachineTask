import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Blocks from '../../components/homePage/blocks';
import Features from '../../components/homePage/features';
import Hero from '../../components/homePage/hero';
import Newsletter from '../../components/homePage/newsletter';
import Testimonials from '../../components/homePage/testimonials';
import Goals from '../../components/homePage/goals';
import Loader from '../../components/loader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Blocks />
          <Testimonials />
          <Goals />
          <Features />
          <Newsletter />
        </>
      )}
    </>
  );
}

export default Home;
