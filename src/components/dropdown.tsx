
// AnimatedText.tsx
import React from 'react';

const AnimatedText: React.FC = () => {
    return (
        <div className="relative">
            <h1 className="text-4xl font-bold text-center text-gray-800">
                <span className="block">Welcome to</span>
                <span className="block text-blue-600 transition duration-500 transform hover:-translate-y-1 hover:scale-110">Your Website</span>
            </h1>
        </div>
    );
};

export default AnimatedText;