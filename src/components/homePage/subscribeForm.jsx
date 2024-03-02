import React, { useState } from 'react';

function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setEmail('');
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
    };

    return (
        <>
            <form className="w-full lg:w-1/2 relative" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                    <input
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        className="w-full appearance-none bg-white border focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-purple-400"
                        placeholder="Your best email…"
                        aria-label="Your best email…"
                    />
                    <button type="submit" className="btn text-black bg-purple-100 hover:bg-white shadow">
                        Subscribe
                    </button>
                </div>
            </form>
            {showMessage && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-gray-900 text-white p-8 rounded-md flex justify-between items-center relative">
                        <p className="mr-10">Thanks for subscribing!</p>
                        <button onClick={handleCloseMessage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

            )}
        </>
    );
}

export default SubscribeForm;
