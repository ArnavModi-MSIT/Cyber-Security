import React from "react";

function About() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div class="about-land">
        <div className="text-2xl md:text-7xl font-bold underline mb-7">
          ABOUT US
        </div>
        </div>
        <p className="pl-4 pr-4 md:pl-24 md:pr-24 text-sm md:text-xl mt-14">
        We are a team of three passionate and driven students from Maharaja Surajmal Institute of Technology, New Delhi—Arnav Kumar, Arnav Modi, and Harjot Singh. Our project, a cutting-edge credit card fraud detection system, is the culmination of our combined skills and dedication to the field of technology. This project is a reflection of our commitment to addressing real-world challenges through innovative solutions..
        </p>
        <ul className="pl-4 pr-4 md:pl-24 md:pr-24 text-sm md:text-xl">
          <li className="mt-5">
            <b>Frontend Development:</b>Arnav Kumar has meticulously crafted the user interface for our fraud detection system. With a focus on user experience, he has developed an intuitive and visually appealing interface that allows users to navigate the application with ease. His design ensures that users can efficiently interact with the system, making the complex task of fraud detection more accessible.
          </li>
          <li className="mt-5">
            <b>Machine Learning:</b>Arnav Modi has spearheaded the machine learning aspect of our project. He has developed a robust ML model that serves as the brain of our system, analyzing vast amounts of transaction data to detect fraudulent activities with high accuracy. His expertise in data analysis and algorithm development has been crucial in creating a model that can adapt and improve over time.
          </li>
          <li className="mt-5">
            <b>Backend Development:</b>Harjot Singh has expertly managed the backend of our fraud detection system. He has implemented the server-side logic, database management, and API integration, ensuring that the application is secure, reliable, and scalable. His work ensures that the system can handle large volumes of data and deliver real-time results to users.
          </li>
        </ul>
        <p className="pl-4 pr-4 md:pl-24 md:pr-24 text-sm md:text-xl mt-5">
          Together, we've combined our skills to create a project that we're
          proud to present.
        </p>
      </div>
    </>
  );
}

export default About;
