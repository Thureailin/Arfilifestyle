import  { useState } from 'react';

const TextTruncate = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className=''>
      {isTruncated ? (
        <p>{text.substring(0, maxLength)}  ............</p>
      ) : (
        <p>{text}</p>
      )}
      <div className='text-right'>
      <button onClick={toggleTruncate} className='bg-cus-primary px-5 py-2 text-white rounded-xl mt-5 '>
        {isTruncated ? 'See More' : 'See Less'}
      </button>
      </div>
    </div>
  );
};

export default TextTruncate;