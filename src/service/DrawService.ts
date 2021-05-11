import ImageService from "./ImageService"
import OpenCVService from "./OpenCVService"

class DrawService {
    drawImageFromOpenCV(img: any, outputElement: HTMLCanvasElement) {
        const cv = OpenCVService.getOpenCV()
        cv.imshow(outputElement, img)
    }
    
    drawImageFromElement(img: HTMLImageElement, outputElement: HTMLCanvasElement) {
        const cv = OpenCVService.getOpenCV()
        const src  = cv.imread(img)
        cv.imshow(outputElement, src)
    }

    async drawImageFromSource(imgSrc: string, outputElement: HTMLCanvasElement) {
        const imgEl = await ImageService.createImageElement(imgSrc)
        this.drawImageFromElement(imgEl, outputElement)
    }
}

export default new DrawService()