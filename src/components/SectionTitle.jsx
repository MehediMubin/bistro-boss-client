import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="mx-auto text-center w-10/12 md:w-5/12 lg:w-4/12 my-10">
            <p className="text-[#D99904] tracking-wider text-lg italic mb-3">---{subHeading}---</p>
            <h3 className="text-3xl uppercase tracking-wider border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
