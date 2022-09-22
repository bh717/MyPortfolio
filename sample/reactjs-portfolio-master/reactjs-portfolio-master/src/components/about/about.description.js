import React from "react";

import myImage from "../../img/myImage.png";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                    I am a Senior Blockchain Developer and <br></br>
                    have a lot of experience Solidity, Rust, Web3.js, Node, 
                    React and TypeScript with over 5 years.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}