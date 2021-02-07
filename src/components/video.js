import React, { useEffect, useRef } from "react"
import TwilioVideo from "twilio-video"

const Video = ({ token }) => {
  const localVideoRef = useRef()

  useEffect(() => {
    TwilioVideo.connect(token, { video: true, audio: true, name: "SVA" }).then(
      result => {
        TwilioVideo.createLocalVideoTrack().then(track => {
          localVideoRef.current.appendChild(track.attach())
        })
      }
    )
  }, [token])

  return <div ref={localVideoRef} />
}
export default Video
