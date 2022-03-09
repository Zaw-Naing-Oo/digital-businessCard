import react from "react";
import fb from '../assets/images/Facebook Icon.png'
import instragm from "../assets/images/Instagram Icon.png"
import twitter from "../assets/images/Twitter Icon.png"
import github from "../assets/images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="">
               <div className="img-div">
                <img src={fb} className="facebook"></img>
                <img src={instragm}></img>
                <img src={twitter}></img>
                <img src={github}></img>
               </div>
            </div>
        </div>
    )
}