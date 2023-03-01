import React from 'react'
import { RingLoader } from 'react-spinners'
import './loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <div className='spinner'>
                <span>W</span>
                <span>E</span>
                <span>L</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span></span>
            </div>
            <RingLoader color="#0d0d0d" />
        </div>
    )
}

export default Loading