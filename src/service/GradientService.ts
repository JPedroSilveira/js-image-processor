import DrawService from "./DrawService"
import ImageService from "./ImageService"
import OpenCVService from "./OpenCVService"

class GradientService {
    async sobel(imgSrc: string, outputElement: HTMLCanvasElement) {
        const imgEl = await ImageService.createImageElement(imgSrc)
        const cv = OpenCVService.getOpenCV()
        const src  = cv.imread(imgEl)
        const dst = new cv.Mat()
        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0)
        cv.Sobel(src, dst, cv.CV_8U, 1, 0, 3, 1, 0, cv.BORDER_DEFAULT)
        DrawService.drawImageFromOpenCV(dst, outputElement)
        src.delete()
        dst.delete()
    }
}

export default new GradientService()