import React from 'react';
import AliceCarousel from 'react-alice-carousel';

function CarouselText() {
    const items = [
        <div key="1" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"Thanks to this platform, I was able to identify and prevent a phishing attack on my business. The detection was fast and accurate."</p>
            <p className="mt-4">– Sarah K</p>
        </div>,
        <div key="2" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"The credit card fraud cases database provided me with invaluable insights into current trends. It’s a must-have for anyone concerned about online safety."</p>
            <p className="mt-4">– John D.</p>
        </div>,
        <div key="3" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"Thanks to this platform, I was able to identify and prevent a phishing attack on my business. The detection was fast and accurate."</p>
            <p className="mt-4">– Sarah K</p>
        </div>,
        <div key="4" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"The credit card fraud cases database provided me with invaluable insights into current trends. It’s a must-have for anyone concerned about online safety."</p>
            <p className="mt-4">– John D.</p>
        </div>,
        <div key="5" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"Thanks to this platform, I was able to identify and prevent a phishing attack on my business. The detection was fast and accurate."</p>
            <p className="mt-4">– Sarah K</p>
        </div>,
        <div key="6" className="w-3/4 p-10 bg-[#e8e5e5] h-96 rounded-xl text-3xl flex flex-col justify-center items-center m-auto">
            <p>"The credit card fraud cases database provided me with invaluable insights into current trends. It’s a must-have for anyone concerned about online safety."</p>
            <p className="mt-4">– John D.</p>
        </div>
    ];

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 3,
        },
    };

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={5000}
            responsive={responsive}
            infinite
            disableButtonsControls
            disableDotsControls
        />
    );
}

export default CarouselText;
