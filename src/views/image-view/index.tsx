import React, { useEffect, useRef } from 'react'
import WandaJPG from '../../assets/wanda.jpg'
import DrawService from '../../service/DrawService'
import GradientService from '../../service/GradientService'
import './styles.css'

const ImageView: React.FC = () => {
  const canvasSourceRef = useRef<HTMLCanvasElement>(null)
  const canvasTargetRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const loadSourceImage = () => {
      if (canvasSourceRef && canvasSourceRef.current) {
        const canvasSource = canvasSourceRef.current
        DrawService.drawImageFromSource(WandaJPG, canvasSource)
      }
      
      if (canvasTargetRef && canvasTargetRef.current) {
        const canvasTarget = canvasTargetRef.current
        GradientService.sobel(WandaJPG, canvasTarget)
      }
    }
    loadSourceImage()
  }, [])

  return (
    <div className="image-view">
      <div className='image-view-item'>
        <h2>Source Image</h2>
        <canvas ref={canvasSourceRef} aria-label="source image" id="canvas-source" ></canvas>
      </div>
      <div className='image-view-item'>
        <h2>Target Image</h2>
        <canvas ref={canvasTargetRef} aria-label="target image" id="canvas-target" ></canvas>
      </div>
    </div>
  )
}

export default ImageView
