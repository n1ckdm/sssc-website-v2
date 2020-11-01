import React from "react"
import BGImg from "../../assets/sc_bg.jpg"
import BGVideoMp4 from "../../assets/sc_bg.mp4"
import BGVideoWbm from "../../assets/sc_bg.webm"

const BackgroundVideo = () => {
    return (
        <div className="absolute inset-0 z-negative" >
            <video className="w-full object-cover h-full hidden md:block" autoPlay="autoplay" loop="loop" muted>
                <source type="video/mp4" src={BGVideoMp4} />
                <source type="video/webm" src={BGVideoWbm} />
            </video>
            <img className="w-full object-cover h-full md:hidden" src={BGImg} />
        </div>
    )
}

export default BackgroundVideo