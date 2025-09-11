import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Collaborate with brand <br/> and agencies to create <br/> impactful results
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 justify-items-center'>
            <div>
                <ServiceCard 
                    icon='/images/s1.png' 
                    name='UI and UX' 
                    description='Designing user interfaces and experiences that are both visually appealing and easy to use.'
                />
            </div>
            <div>
                <ServiceCard 
                    icon='/images/s2.png' 
                    name='Web and Mobile' 
                    description='Building responsive and user-friendly web and mobile applications using the latest technologies.'
                />
            </div>
            <div>
                <ServiceCard 
                    icon='/images/s3.png' 
                    name='Creative' 
                    description='Creating visually stunning designs that effectively communicate your brand message.'
                />
            </div>
            <div>
                <ServiceCard 
                    icon='/images/s4.png' 
                    name='Development' 
                    description='Providing high-quality development services to bring your digital products to life.'
                />
            </div>
        </div>
    </div>
  )
}

export default Services