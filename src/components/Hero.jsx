import React from 'react'
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
             window.open("https://openai.com/blog/chatgpt", "_blank")
          }
          className='black_btn'
        >
          OpenAI
        </button>
      </nav>

      <h1 className='head_text'>
        <span className='orange_gradient '>Simplify Complexity, Embrace Clarity.</span>
      </h1>
      <h2 className='desc'>
      Discover a new way to navigate the vast sea of information with 
      <span className='ss'> SnapSum</span>.
      Our cutting-edge platform transforms lengthy articles into succinct and engaging summaries.
      </h2>
    </header>
  );
};

export default Hero