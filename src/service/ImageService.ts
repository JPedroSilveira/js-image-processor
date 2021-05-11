class ImageService {
    async createImageElement(imgSrc: string) {
        const img = new Image()

        img.src = imgSrc

        return new Promise<HTMLImageElement>(resolve => {
            img.onload = () => {
                resolve(img)
            }
        })
    }
}

export default new ImageService()