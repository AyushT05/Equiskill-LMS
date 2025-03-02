import React from 'react';
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi";
import EditChapters from './EditChapters';

function ChapterList({ course,refreshData }) {
  return (
    <div className='mt-3'>
      <h2 className='font-medium text-xl'>Chapters</h2>
      <div className='mt-2'>
        {course?.courseOutput?.Chapters.map((Chapter, index) => (
          <div 
            key={index} // Add a unique key prop here
            className='border p-5 rounded-lg mb-2 flex items-center justify-between'
          >
            <div className='flex gap-2 items-center'>
              <h2 className='bg-primary flex-none h-10 w-10 text-white rounded-full text-center p-2'>{index + 1}</h2>
              <div>
                <h2 className='font-medium text-lg'>{Chapter?.["Chapter Name"]} 
                    <EditChapters course={course} index={index} refreshData={refreshData} /></h2>
                <p className='text-sm text-gray-500'>{Chapter?.About}</p>
                <p className='flex gap-2 text-primary items-center'><HiOutlineClock /> {Chapter.Duration}</p>
              </div>
            </div> 
            <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
