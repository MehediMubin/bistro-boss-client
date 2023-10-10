import React from "react";
import coverImg from "../assets/home/chef-service.jpg";

const Cover = ({ heading }) => {
    return (
        <div
            className="bg-cover bg-center h-64 md:96 lg:h-auto xl:h-96 w-11/12 mx-auto mb-20 rounded flex justify-center items-center"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="text-center bg-white px-2 py-2 md:px-10 md:py-6 lg:px-20 lg:py-20 h-3/4 md:w-3/4 w-11/12">
                <h3 className="font-['Cinzel'] tracking-wider uppercase text-2xl md:text-3xl md:mb-2">
                    {heading}
                </h3>
                <p className="md:tracking-wider">
                    At Bistro Boss, we are passionate about creating
                    unforgettable dining experiences. With a rich culinary
                    heritage and a commitment to using the finest ingredients,
                    we invite you to indulge in a world of flavors and
                    exceptional cuisine.
                </p>
            </div>
        </div>
    );
};

export default Cover;
