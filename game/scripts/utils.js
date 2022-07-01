export const Constants = {
    gravidade: 13,
    atrito: -0.12,
    resistenciaAr: -0.12,
    aceleration_x: 0.9,
    aceleration_y: 5,
    limit_speed: 5
}

//adicionar dados na memória local do navegador
export function setData(name, objeto) {
    localStorage.setItem(name, JSON.stringify(objeto))
}

//obter dados da memória local do navegador
export function getData(name) {
    const data = localStorage.getItem(name)

    if (data === null) return null;

    return JSON.parse(data)
}

//remove dados da memória local do navegador
export function removeData(name) {
    localStorage.removeItem(name)
}

export function loadImage(src) {
    return new Promise((resolve, reject) => {
        try {
            let img = new Image();
            img.src = src;
            img.onload = () => resolve(img)
        } catch (e) {
            reject(e)
        }
    })
}

export async function loadAssets() {
    let assets = {}
    assets.cornerLT = await loadImage("./images/molduras/corner.png")
    assets.cornerRT = await loadImage("./images/molduras/cornerLU.png")
    assets.cornerRB = await loadImage("./images/molduras/cornerLD.png")
    assets.cornerLB = await loadImage("./images/molduras/cornerRD.png")
    assets.wallT = await loadImage("./images/molduras/wall.png")
    assets.wallR = await loadImage("./images/molduras/wall2.png")
    assets.wallB = await loadImage("./images/molduras/wall3.png")
    assets.wallL = await loadImage("./images/molduras/wall4.png")
    assets.character = await loadImage("./images/character.png")
    assets.plataforma = await loadImage("./images/plataforma.png")

    return assets
}

export default { Constants, loadImage, loadAssets, setData, getData, removeData }