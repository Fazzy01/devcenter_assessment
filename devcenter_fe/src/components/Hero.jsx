import React from 'react';
import Button from '../shared/Button';

function Hero() {
  return (
    // py-12 md:py-20 pt-0
    <section className="bg-white mt-mtopper md:mt-md-mtopper lg:mt-lg-mtopper mb-[4rem] lg:mb-[6rem]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row align-bottom gap-36">
        <div className='w-[95%] md:w-[80%] lg:w-[50%]'>
            <h1 className="text-h1 md:text-md-h1 lg:text-lg-h1 font-bold mb-4 font-sans">One Platform, <br className=" md:inline" />Two Solutions</h1>
            <p className="text-subheading md:text-md-subheading lg:text-lg-subheading mb-3 md:mb-5 max-w-2xl">Simplifying Benefits for Retirees and Employers</p>
            <p className="mb-6 md:mb-6 max-w-2xl md:text-justify">Whether you're a retiree claiming your benefits or an employer submitting employee data for verification, we've got you covered with a secure and seamless experience.</p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row gap-3">
                <Button
                        text="Claim Your Benefits"
                        width="w-full md:w-auto"
                        padding="py-[0.6rem] px-[2rem]"
                        />

                <Button
                    text="Upload Employee Data"
                    bgColor= 'bg-white text-green-600 border border-green-600'
                    width="w-full md:w-auto"
                    padding="py-[0.6rem] px-[1.4rem]"
                    />

            </div>

            </div>
        </div>
        <div className='hidden lg:flex w-fit max-w-[20rem] mt-10 justify-center'>
                {/* <img className="object object-cover" src='/assets/Group17.png' /> */}
                <img className="object object-cover" src='/assets/Group17.png' />
        </div>
      </div>
    </section>
  );
}

export default Hero;