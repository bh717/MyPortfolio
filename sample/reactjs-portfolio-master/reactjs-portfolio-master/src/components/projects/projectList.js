import React, { useState } from 'react';


//import images
import Bbb from "../../img/bbb.jpg";
import Hpd from "../../img/hpd.png";
import Nv from "../../img/nv.png";
import Dfp from "../../img/dfp.png";
import Ef from "../../img/ef.JPG";
import todo from "../../img/img_20220612.png";

export default function ProjectList() {

    const [projects] = useState([
        {
            name: "Nft MarketPlace",
            image: Bbb,
            button: "Bbb"
        },
        {
            name: "Blockchain Game",
            image: Hpd,
            button: "Hpd"
        },
        {
            name: "Nft Game",
            image: Nv,
            button: "Nv"
        },
        {
            name: "Nft Mint",
            image: Dfp,
            button: "Dfp"
        },
        {
            name: "Solana",
            image: Ef,
            button: "Ef"
        },
        {
            name: "Nft Staking",
            image: todo,
            button: "todo"
        }
    ]);


    function showModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "block";
        modal.style.display = "block";
    }

    function addbackground(image) {
        const style = {
            backgroundImage: `url(${image})`
            }
        return style;
    }

    return (
        <div className="row my-5">
            {
                projects.map((project, index) => {
                return(
                    <div className={"testbg col-12 col-sm-12 col-md-4 wow fadeIn"}  key={index} style={addbackground(project.image)}>
                        <div className="overlay">
                            <div className="text">
                                <h2>{project.name}</h2>
                            </div>
                            <div>
                                <button id={project.button + "-button"} className="project-button" onClick={() => showModal(project.name)}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
    );
}