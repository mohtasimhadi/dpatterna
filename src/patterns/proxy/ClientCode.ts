import Image from "./image"
import ProxyImage from "./ProxyImage"

const image: Image = new ProxyImage('testImage.jpg')
image.display() //Image will be loaded from disk
image.display() //Image won't be loaded from disk
