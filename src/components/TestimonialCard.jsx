import React from 'react';

const TestimonialCard = ({ avatar, text, gradient }) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-full shadow-lg min-w-[300px] md:min-w-[400px] ${gradient}`}
      style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.2))' }}
    >
      <img
        src={avatar}
        alt="User Avatar"
        className="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
      <p className="text-white text-md font-medium flex-grow">{text}</p>
    </div>
  );
};

export default TestimonialCard;
