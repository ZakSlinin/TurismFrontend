let compilationArray = []
let currentCompilation = 0
let output = []


function setCompilation(compilationArray) {
    let item = document.getElementById('compilation_name');
    const compilation = compilationArray[currentCompilation];

    if (compilation) {
        const card = document.getElementById('compilation_name')
        card.innerText = compilation.name;

        const compilationDataUrl = compilation.data[0];

        // const image = document.getElementById('compilation_image');
        // getByNum(compilationDataUrl['image']);
        //
        //
        // image.src = http.fileParser(output.image)
    } else {
        console.error('Подборка не найдена');
    }
}