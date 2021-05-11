import OpenCVService from "./OpenCVService"

class EventService {
    onStart() {
        window.addEventListener('opencv-load', () => {
            const cv = OpenCVService.getOpenCV()
            cv.onRuntimeInitialized = () => {
                OpenCVService.setOpenCVLoaded()
            }
        }, false)
    }
}

export default new EventService()