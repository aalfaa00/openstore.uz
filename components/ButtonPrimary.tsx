import React from 'react'

type Props = {
    btnText: string;
};


const ButtonPrimary = ({btnText}: Props) => {
  return (
    <button className='w-20 h-7 text-sm font-semibold rounded-full bg-yellow text-white hover:outline-yellow hover:bg-white hover:outline hover:outline-1 hover:text-black duration-300'>{btnText}</button>
  )
};

export default ButtonPrimary