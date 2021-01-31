import React from "react"
import BGImg from "../../assets/sc_bg.webp"
import BGVideoMp4 from "../../assets/sc_bg.mp4"
import BGVideoWbm from "../../assets/sc_bg.webm"
import useDeviceDetect from "../hooks/use-device-detect"

const BackgroundVideo = () => {
  const { isMobile } = useDeviceDetect()
  if (isMobile) {
    return (
      <div className="absolute inset-0 z-negative">
        <img className="w-full object-cover h-full" src={BGImg} />
      </div>
    )
  } else {
    return (
      <div className="absolute inset-0 z-negative">
        <video
          className="w-full h-full object-cover"
          autoPlay="autoplay"
          loop="loop"
          muted
        >
          <source type="video/mp4" src={BGVideoMp4} />
          <source type="video/webm" src={BGVideoWbm} />
        </video>
      </div>
    )
  }
}

export default BackgroundVideo
