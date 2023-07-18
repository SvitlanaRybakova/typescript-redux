import React, { FC } from 'react';

interface IInput {
  text: string;
  handleSubmit: () => void;
  handleInput: (e: string) => void;
}

const Input: FC<IInput> = ({ text, handleSubmit, handleInput }) => {
  return (
    <div className='container mx-auto'>
      <form className='rounded-lg bg-white p-10 shadow-lg'>
        <div className='mb-4 flex items-center'>
          <input
            value={text}
            onChange={(e) => handleInput(e.target.value)}
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2'
            placeholder='Write todo ...'
          />
          <button
            className='ml-2 rounded-lg bg-gray-400 p-2 text-white hover:bg-blue-600'
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
