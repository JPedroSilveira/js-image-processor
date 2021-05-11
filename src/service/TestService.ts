import OpenCVService from "./OpenCVService"

class TestService {
    showImage(imgElement: any) {
        const cv = OpenCVService.getOpenCV()
        let mat = cv.imread(imgElement)
        cv.imshow('canvas-output', mat)
        mat.delete()
    }
}

export default new TestService()