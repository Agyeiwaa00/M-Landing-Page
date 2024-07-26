import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen about'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600'>About</p>
            </div>    
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm: text-right text-4xl font-bold'>
                    <p> I'm Esther Asomaning. Nice meeting you.
                        Take a look around.
                    </p>
            </div>
                <div>
                    <p> Esther Asomaning is Business Scientist, who is passionate about technology,software development and making stem inclusive. Her homepage 
                    communicates her works and a bit of her personality through-eye catching
                     and crative design. what would you do if you have a technology and software expert at your fingertips?</p>
                </div>
        </div>
    </div>
      
    </div>
  )
}

export default About
