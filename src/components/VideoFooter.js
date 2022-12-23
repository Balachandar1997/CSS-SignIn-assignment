import React from 'react'
import "./VideoFooter.css"
//import MusicNoteIcon from '@material-ui/icons/MusicNote'
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
//import Ticker from 'react-ticker'


const VideoFooter = () => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@Bala Chandar</h3>
            <p>Mern Stack Developer</p>
            <div className='videoFooter_ticker'>
                <MusicNoteSharpIcon className="videoFooter_icon" />
                {/* <Ticker mode="smooth">
                    {({index})=>(
                        <>
                           <p>Iam a Windows PC</p>
                        </>
                    )}
                </Ticker> */}
            </div>
        </div>

        
    </div>
  )
}

export default VideoFooter