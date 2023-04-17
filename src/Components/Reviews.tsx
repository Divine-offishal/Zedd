import React from 'react'
import ReviewCard from './Cards/ReviewCard'

interface Data  {
  userName: string,
  review: string;
  star: number
}

const reviewData:Data[] = [
  {
    userName: "James Alexander",
    review: "I recently purchased a used car from this website and I couldn't be happier with the experience. The selection of cars was great, and the buying process was straightforward and easy. The car has been running smoothly ever since I got it.",
    star: 5
  },
  {
    userName: "Emily Elizabeth Clark",
    review: "I had to get some repairs done on my car, and I decided to use this website to find a reputable mechanic. I was pleasantly surprised by how easy it was to find a mechanic near me, and the reviews from other users helped me choose a trustworthy one. The repairs were done quickly and at a reasonable price.",
    star: 4
  },
  {
    userName: "Benjamin Isaac Taylor",
    review: "I needed to sell my car quickly, and this website made it really easy to list my car and find a buyer. The process was straightforward and the customer support was very helpful. I was able to sell my car for a fair price and with no hassle.",
    star: 4.5
  }
];

const Reviews = () => {
  return (
    <div className='min-h-screen w-screen mt-10'>
      <h1 className='text-center text-4xl text-secondary'>Reviews</h1>
      <div className='grid justify-items-center'>
        {
          reviewData.map((item, i) => (
            <ReviewCard key={i} name={item.userName} review={item.review} star={item.star}/>
          ))
        }
      </div>
    </div>
  )
}

export default Reviews