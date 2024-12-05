import React, { useState } from 'react';

function StepCard({ number, title, description }) {
  return (
    <div className="flex gap-3 bg-white p-6 rounded-lg ">
      <div className="text--small-number font-bold text-black mb-2 w-fit h-fit px-[20px] py-[11px] rounded-full bg-gray-100" aria-hidden="true">{number}</div>
        <div>
            <h3 className=" font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    </div>
  );
}

function HowItWorks() {
  const [activeTab, setActiveTab] = useState('PFA');

  const tabs = ['Retiree', 'PFA', 'MDA'];

  const steps = {
    Retiree: [
      {
        title: "Create Your Profile",
        description: `Start by creating an account. Youll be asked to provide basic personal information to get started.`
      },
      {
        title: "Submit Employment History",
        description: `Enter relevant employment details, through a simple, guided form. This information helps verify your eligibility for retirement payments.`
      },
      {
        title: "Verify and Confirm",
        description: `Once submitted, your information is reviewed for accuracy. Additional verification documents may be required.`
      },
      {
        title: "Receive Your Benefits",
        description: `Once your history is confirmed, you can begin receiving your retirement payments seamlessly, right into your bank account.`
      }
    ],
    PFA: [
      {
        title: "Verify Retiree Information",
        description: "As a PFA, your role is to review and verify the employment history submitted by retirees. Cross-check the data provided to ensure it aligns with official records, ensuring accuracy and eligibility."
      },
      {
        title: "Capture Biometric Data",
        description: "Once the retiree's employment details have been verified, PFAs are responsible for capturing biometric data, such as fingerprints and facial recognition. This added layer of security helps prevent fraud and ensures the authenticity of the retiree's claims."
      },
      {
        title: "Submit and Approve",
        description: "After validating the information and capturing biometrics, submit the data to the platform for final approval. This step ensures that the retiree can start receiving their payments seamlessly."
      }
    ],
    MDA: [
      {
        title: "Upload Employee Records",
        description: "Employers can log in and upload employee data for compliance and verification purposes. This helps ensure that former employees' records are correctly matched to receive retirement benefits."
      },
      {
        title: "Review and Validate",
        description: "Our platform automatically validates the uploaded records against internal databases, making sure the information is accurate and up to date."
      },
      {
        title: "Ensure Compliance",
        description: "By completing this process, you'll meet regulatory requirements while ensuring your employees have access to the benefits they've earned."
      }
    ]
  };

  return (
    <section className="pt-12 pb-0 md:pt-20 lg:pt-14 bg-white">
      <div className=" mx-auto px-4 ">
        <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 font-bold mb-3 md:mb-2 text-center">How it <span className="text-green-600">works </span></h2>
        <p className="text-center mb-6 md:mb-6">Follow these easy steps to get started</p>
        <div class="block md:grid grid-cols-12 gap-4 items-end self">
            <div class="col-span-3 hidden md:block w-[15rem] lg:w-[25rem]">
                <img src="/assets/file11.png" alt="CEO_img"  className='object object-cover'/>
            </div>

          <div className='col-span-6 pb-10'>
            {/* middle */}
            <div className="grid grid-cols-3 mb-3 md:mb-3 bg-gray-100 rounded-2xl gap-0 md:gap-6 px-3 md:px-0">
                {tabs.map((tab) => (
                    <button
                    key={tab}
                    className={` m-2  ${activeTab === tab ? 'px-8 py-1 w-[7rem] md:w-[8rem] rounded-xl bg-white text-green-500 font-semibold' : ' text-black'}`}
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={activeTab === tab}
                    aria-label={`Show steps for ${tab}`}
                    >
                    {tab}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 ">
                {steps[activeTab].map((step, index) => (
                    <StepCard key={index} number={index + 1} title={step.title} description={step.description} />
                ))}
            </div>
          </div>

            <div class="col-span-3  hidden md:block">
                <img src="/assets/file9.png" alt="CTO_img" />
            </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;