import react from "react";


export default function Main() {
    return (
        <div className="main">
            <h3>Laura Smith</h3>
            <h5>Frontend Developer</h5>
            <p>laura.website</p>
            <div className="btnDiv">
                <button className="emailBtn">Email</button>
                <button className="linkedin">Linkedin</button>
            </div>
            <h4 className="about">About</h4>
            <h6>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h6>
            <h4 className="interest">Interests</h4>
            <h6>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h6>

        </div>
    )
}