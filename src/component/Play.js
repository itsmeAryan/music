import React from 'react'
import Spot from 'react-spotify-web-playback'
const Play = ({ac,uri}) => {
    if(!ac) return null
    return (
        <Spot token={ac}  uris={uri?[uri]:[]} />
    )
}

export default Play
