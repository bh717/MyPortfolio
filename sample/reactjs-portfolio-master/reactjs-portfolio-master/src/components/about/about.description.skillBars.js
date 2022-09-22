import React, {useState} from "react";

export default function SkillBars() {

    //state for specific techs you know
    const [technologies, setTechnologies] = useState([
        {
            name: "HTML5",
            percentage: 90
        },
        {
            name: "CSS3",
            percentage: 90
        },
        {
            name: "Javascript",
            percentage: 80
        },
        {
            name: "Solidity",
            percentage: 95
        },
        {
            name: "ReactJS",
            percentage: 90
        },
        {
            name: "NodeJS",
            percentage: 80
        },
        {
            name: "TypeScript",
            percentage: 90
        },
        {
            name: "Web3",
            percentage: 95
        },
        {
            name: "Rust",
            percentage: 95
        },
    ]);

    return(
        <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
            {
                technologies.map((tech, index) => {
                    return (
                        <div className="progress mb-3" key={index}>
                            <div
                                className={"progress-bar fill-"+ tech.percentage.toString() +"-bar"}
                                role="progressbar"
                                style={{ width: tech.percentage + "%" }}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {tech.name}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}