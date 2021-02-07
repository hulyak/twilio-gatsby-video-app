import React, { useEffect, useRef } from "react"
import TwilioVideo from "twilio-video"
import "./video.css"

const Video = ({ token, name }) => {
  const localVideoRef = useRef()
  const remoteVideoRef = useRef()

  useEffect(() => {
    TwilioVideo.connect(token, { video: true, audio: true, name: "SVA" }).then(
      result => {
        TwilioVideo.createLocalVideoTrack().then(track => {
          localVideoRef.current.appendChild(track.attach())
        })
        const addParticipant = participant => {
          participant.tracks.forEach(publication => {
            if (publication.isSubscribed) {
              const track = publication.track
              remoteVideoRef.current.appendChild(track.attach())
            }
          })
          participant.on("trackSubscribed", track => {
            remoteVideoRef.current.appendChild(track.attach())
          })
        }
        result.participants.forEach(addParticipant)
        result.on("participantConnected", addParticipant)
      }
    )
  }, [token])

  return (
    <>
      <h2>Organizer</h2>
      <div ref={localVideoRef} />
      <h2>Remote Participants</h2>
      <div ref={remoteVideoRef} className="remoteVideo" />
      <p>Connected: {name}</p>
    </>
  )
}
export default Video
