function Hero() {
    return (
        <div className="mx-auto px-4 sm:px-6 relative bghero-image h-screen">
            <div className="absolute inset-x-0 bottom-0 px-6 py-16 flex flex-col items-center text-center">
                <h1 className="h1 mb-4" data-aos="fade-up">Landing template for startups</h1>
                <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div data-aos="fade-up" data-aos-delay="400">
                        <a className="btn btn-primary" href="#0">Start free trial</a>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <a className="btn btn-secondary" href="#0">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;