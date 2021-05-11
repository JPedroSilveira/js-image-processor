import CallbackService from "./CallbackService"

class OpenCVService extends CallbackService {
    private openCVLoaded: boolean

    constructor() {
        super()
        this.openCVLoaded = false
    }

    setOpenCVLoaded() {
        this.openCVLoaded = true
        this.resolve()
    }

    isOpenCVLoaded() {
        return this.openCVLoaded
    }

    getOpenCV() {
        return (window as any).cv
    }
}

export default new OpenCVService()

