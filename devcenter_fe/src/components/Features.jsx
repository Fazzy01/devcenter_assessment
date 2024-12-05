import React from 'react';

function FeatureCard({img_src, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg ">
       <img src={img_src} className='mb-3' />
      <h3 className=" font-bold mb-2">{title}</h3>
      <p className=" text-md-small-text text-gray-600">{description}</p>
    </div>
  );
}

const features = [
  {
    img_src: "/assets/shield-check.svg",
    title: "Secure and Reliable",
    description: `We prioritize your data security with advanced
encryption and strict privacy protocols,
ensuring that your information is always
protected.`,
  },
  {
    img_src: "/assets/users-profiles-03.svg",
    title: "User-Friendly Experience",
    description: `Our platform is designed with simplicity in
mind. Whether youre a retiree submitting
your employment history or an employer
managing records, the process is quick and
easy, with clear instructions at every step.`,
  },
  {
    img_src: "/assets/bank-note-05.svg",
    title: "Account and Timely Payments",
    description: `For retirees, our system ensures that once
your employment history is verified, payments
are processed promptly and accurately. No
delays, just the benefits youve earned.`,
  },
  {
    img_src: "/assets/book-02.svg",
    title: "Comprehensive Compliance for Employers",
    description: `Employers can rest assured knowing that they
are meeting all regulatory requirements by
securely uploading employee data. Our
platform takes the guesswork out of
compliance.`,
  },
  {
    img_src: "/assets/help-circle-contained.svg",
    title: "24/7 Support",
    description: `Our dedicated support team is available
around the clock to assist with any questions
or concerns you may have, ensuring a
seamless experience from start to finish.`,
  },
];

function Features() {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 mb-8 md:mb-12 text-center">Retiree data processing  <br/> <span className="text-green-600">made easy!</span>  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} img_src={feature.img_src} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;