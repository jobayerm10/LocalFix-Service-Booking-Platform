import React from 'react';

const ReviewCard = ({
  id,
  userName = 'User Name',
  rating = 5,
  text = 'Great service!',
  date = 'Recently',
  avatar = '/default-avatar.jpg'
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-start gap-4">
        <img src={avatar} alt={userName} className="w-12 h-12 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-800">{userName}</h4>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
            <span className="text-yellow-500">★★★★★ {rating}/5</span>
          </div>
          <p className="text-gray-600 mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
