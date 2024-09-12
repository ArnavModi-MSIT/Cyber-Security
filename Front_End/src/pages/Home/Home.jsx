import React from "react";
import Carousel from "../../Components/Carousel";
import CarouselText from "../../Components/Carousel-text";

function Home() {
  return (
    <>
      <div className="flex bg-white rounded-xl shadow-lg p-10">
        <div className="m-auto mt-5 text-center md:text-left md:w-1/2 p-20">
          <h1 className="text-4xl md:text-9xl font-extrabold leading-tight mb-20">
            CyberGuardAI
          </h1>
          <p className="text-3xl font-semibold mt-4 md:mt-6">
            Protect Your Online Identity with Advanced Fraud Detection
          </p>
          <p className="mt-4 text-xl leading-relaxed">
            In today’s digital world, online fraud is a growing threat. Our
            platform leverages state-of-the-art machine learning models to
            protect you from fraudulent URLs, phishing emails, and credit card
            fraud. Stay ahead of cybercriminals and keep your sensitive
            information secure.
          </p>
          <div className="mt-10">
            <button className="bg-black text-xl text-white p-5 rounded-full mt-10">
              Get Started
            </button>
            <button className="text-black text-xl border-2 border-black p-5 rounded-full mt-10 ml-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:rounded-full">
          <img
            src="download3.png"
            alt="download"
            className="h-[60vh] m-auto mt-10"
          />
        </div>
      </div>
      <div className="w-full bg-white">
        <Carousel />
      </div>
      <div className="bg-white flex flex-col md:flex-row p-10 md:p-20 space-y-10 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-8 uppercase text-center border-2 border-black">
            Features Overview
          </h1>

          <div className="space-y-6 text-lg md:text-xl">
            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                URL Fraud Detection
              </h3>
              <p className="mt-2 leading-relaxed">
                Enter a URL and instantly check for potential phishing, malware,
                and other online threats using our powerful machine learning
                algorithm.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Email Fraud Detection
              </h3>
              <p className="mt-2 leading-relaxed">
                Detect suspicious email patterns, spoofing attempts, and
                phishing schemes by pasting email content or uploading email
                headers.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Credit Card Fraud Cases
              </h3>
              <p className="mt-2 leading-relaxed">
                Access a comprehensive database of credit card fraud incidents.
                Learn about trends, real-world fraud cases, and how our platform
                helps detect and mitigate these risks.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Real-time Monitoring
              </h3>
              <p className="mt-2 leading-relaxed">
                Stay informed with real-time alerts as our platform monitors
                suspicious activity across multiple threat vectors.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <video
            src="/banner.mp4"
            className="w-[40rem] h-72 md:h-[32rem] rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className="bg-white flex p-20">
        <div className="w-[50%]">
          <img src="banner-1.gif" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-8 uppercase text-center border-2 border-black">
            Why Choose Us?
          </h1>
          <div className="space-y-6 text-lg md:text-xl">
            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                AI-Powered Detection:
              </h3>
              <p className="mt-2 leading-relaxed">
                Our platform harnesses the power of machine learning to provide
                precise and real-time analysis, helping you identify potential
                fraud before it happens.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Comprehensive Fraud Prevention:
              </h3>
              <p className="mt-2 leading-relaxed">
                We don’t just stop at URLs and emails. Our platform also offers
                insights into credit card fraud and how to protect yourself from
                it.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Easy-to-Use Interface:
              </h3>
              <p className="mt-2 leading-relaxed">
                Our intuitive platform is designed for everyone, from
                individuals to businesses, with a simple, user-friendly
                dashboard.
              </p>
            </div>

            <div>
              <h3 className="block text-xl md:text-2xl font-semibold uppercase">
                Trustworthy & Secure:
              </h3>
              <p className="mt-2 leading-relaxed">
                Built with the latest cybersecurity protocols, your data remains
                safe and protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-x-2 m-auto mt-5 p-10 bg-white">
        <div><h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 uppercase text-center border-2 border-black">Testimonials & Case Studies</h1></div>
        <div className="p-6 md:p-12 bg-gray-100">
    <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-8 uppercase text-gray-900 mt-10">
        Case Study: Preventing a Large-Scale Phishing Attack with AI
    </h2>
    
    <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold uppercase text-gray-800">
            Background
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
            In the digital age, phishing attacks have become increasingly sophisticated, targeting thousands of users and posing significant risks to businesses. Recently, our AI-powered fraud detection system played a crucial role in thwarting a large-scale phishing attack that threatened over 1,000 users within a 24-hour window.
        </p>
    </div>

    <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold uppercase text-gray-800">
            Challenge
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
            The attack began with a well-coordinated phishing campaign aimed at deceiving users into revealing sensitive information through fraudulent emails and websites. The potential impact was severe: compromised data, financial losses, and damage to business reputations.
        </p>
    </div>

    <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold uppercase text-gray-800">
            Solution
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
            Our AI-driven system was equipped with advanced algorithms designed to identify and mitigate phishing threats in real-time. Here’s how it effectively prevented the attack:
        </p>
        <h4 className="text-lg font-semibold mt-4">1. Real-Time Detection:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Algorithmic Analysis: Our system utilized machine learning models to analyze incoming emails and websites for signs of phishing. It evaluated various factors, including suspicious links, domain mismatches, and unusual content patterns.</li>
            <li>Pattern Recognition: By learning from historical attack patterns, the system quickly identified anomalies that indicated phishing attempts.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">2. Automated Response:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Immediate Alerts: Once a potential phishing threat was detected, the system generated instant alerts for the affected users and system administrators.</li>
            <li>Blocking Malicious Content: The system automatically blocked access to identified phishing websites and flagged malicious emails, preventing them from reaching users’ inboxes.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">3. User Awareness:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Education and Notifications: Users were promptly informed about the phishing attempt through security notifications. Our system provided guidance on how to recognize phishing and take preventive actions.</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold uppercase text-gray-800">
            Results
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
            Within just 24 hours, the AI-powered system had:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Identified and Neutralized: Detected and neutralized over 1,000 phishing attempts, preventing any successful attacks.</li>
            <li>Saved Potential Losses: By preventing data breaches and financial losses, the system safeguarded businesses from significant potential damage.</li>
            <li>Enhanced Security Posture: Strengthened overall security awareness and resilience against future phishing threats.</li>
        </ul>
    </div>

    <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold uppercase text-gray-800">
            Conclusion
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
            The rapid response of our AI-powered fraud detection system proved essential in mitigating a large-scale phishing attack. By leveraging advanced machine learning and real-time analysis, we not only prevented immediate damage but also enhanced the security posture of businesses against evolving threats. This case study highlights the importance of robust, AI-driven solutions in protecting against sophisticated cyber threats.
        </p>
    </div>
</div>

        <div><h2 className="text-2xl md:text-4xl font-bold leading-tight mb-8 uppercase text-center mt-10">What Our Users Say:</h2>
        <CarouselText/>
        </div>
      </div>
    </>
  );
}

export default Home;
