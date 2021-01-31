export function parseImageName(imageSrc) {
    return imageSrc.split('/').pop()
}