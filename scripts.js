const getUrlArray = (urlArray = []) => {
    for (let i = 1; i < 119; i++) {
        urlArray.push(`images/${i}_img.png`)
    }
    return urlArray
}

const choosePic = () => {
    const pic = getUrlArray()
    const randomIndex = Math.floor(Math.random() * pic.length);
    document.getElementById("lain").src = pic[randomIndex];
}

const open = (id) => window.open(`https://bit.ly/${id}`,'_self')

const urls = {
    // 'c': () => open('3anH5NK'),
    'j': () => open('3NQmfEs'),
    // 'e': () => open('3yPmGuw'),
    'g': () => open('3OQeJeg'),
    'x': () => open('3uwoRRe'),
    'u': () => open('3OPIdZr'),
    't': () => open('3ylRba8'),
}

document.addEventListener('keydown', ({ key }) => urls[key]())

window.onload = choosePic;