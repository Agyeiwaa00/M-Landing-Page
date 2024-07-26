import React from 'react'

const Contact = () => {
  return (
    <div name='class' className='w-full h-screen flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Contact</p>
                <p className='text-gray-300 py-4 '>Please feel free to contact me</p>
            </div>
                    <input className='rounded-full bg-gray-700 focus:border-blue-500  focus: bg-gray-700 focus: outline-none text-gray- 300 py-2 px-4 'type="text" placeholder='Name' name='name'/>
                    <input className='rounded-full bg-gray-700 focus:border-blue-500  focus: bg-gray-700 focus: outline-none text-gray- 300 py-2 px-4 my-4'type="email" placeholder='Email' name='email'/>
                    <textarea className= 'rounded-3xl resize-none bg-gray-500 focus:bg-gray-700 ' name='message' row='10' placeholder='Message'></textarea>
                    <button className='text-white rounded-full border-2 hover:bg-teal-600 px-4 py-3 my-8 mx-auto flex'>Contact Me</button>
        </form>
      
    </div>
  )
}

export default Contact
