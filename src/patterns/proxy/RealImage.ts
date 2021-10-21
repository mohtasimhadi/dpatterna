import Image from "./image"

class RealImage implements Image {
    private fileName: string

    constructor(fileName: string) {
        this.fileName = fileName
    }

    display(): void {
        console.log("Displaying"+this.fileName)
    }

    loadFromDisk(fileName: string) {
        console.log("Loading"+fileName)
    }
}

export default RealImage