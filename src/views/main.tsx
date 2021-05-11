import React, { useEffect, useState } from 'react'
import OpenCVService from '../service/OpenCVService'
import ImageView from './image-view'
import './main.css'

const Main: React.FC = () => {
    const [openCVLoaded, setOpenCVLoaded] = useState(false)

    useEffect(() => {
      let onLoad = () => {
        const isOpenCVLoaded = OpenCVService.isOpenCVLoaded()        
        if (isOpenCVLoaded) {
          setOpenCVLoaded(isOpenCVLoaded)
        }
      }

      OpenCVService.addListenner(onLoad)

      return () => {
        onLoad = () => {}
      }
    }, [])
    
    return (
        <div className="main">
          <header className="main-header">
            <h1>Image</h1>
          </header>
          <div className="main-body">
            {openCVLoaded && <ImageView />}
          </div>
        </div>
    )
}

export default Main
