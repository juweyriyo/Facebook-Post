import React from 'react';

function Post(props) {
  const { username, timestamp, content, image,imageContext } = props;

  return (
    <div className='border-0 p-2.5 my-2.5 relative w-[600px] ml-[450px] rounded-lg shadow-md'>
      <img src={image} alt="Profile" className="w-10 h-10 rounded-full absolute top-2 left-2" />
      <div className='font-bold ml-12'>{username}</div>
      <i class="fa-solid fa-x absolute right-3 top-2 "></i>
      <i class="fa-solid fa-ellipsis absolute right-10 top-2"></i>
      <div className='text-sm text-gray-700 ml-10'>{timestamp}</div>
      <p className='ml-3'>{content}</p>
      <img src={imageContext} alt=" contex" className=' w-full' />

      <div className='flex justify-around mt-4'>
        <button className="mr-5" /*onClick={onLike}*/><i class="fa-regular fa-thumbs-up mr-3"></i>Like</button>
        <button /*onClick={onComment}*/> <i class="fa-regular fa-comment mr-3"></i>Comment</button>
        <button /*onClick={onComment}*/><i class="fa-solid fa-share mr-3"></i>Share</button>
      </div>
    </div>
  );
}

export default Post;
