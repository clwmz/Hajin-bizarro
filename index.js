const sim = document.querySelector('#sim');
const nao = document.querySelector('#nao');
let size = 0;

let timeout = null

const setRandomPosition = () => {
    nao.style.top = Math.floor(Math.random() * document.documentElement.clientHeight) + 'px';
    nao.style.left = Math.floor(Math.random() * document.documentElement.clientWidth) + 'px';
}

const onInteraction = () => {
    if (timeout) {
        clearTimeout(timeout);
    }

    size++;

    console.log(size)

    sim.style.transform = `scale(${1 + size / 5})`;
    nao.style.position = 'absolute';

    timeout = setTimeout(() => {
        sim.style.transform = 'scale(1)';
        size = 0;
    }, 1000)

    setRandomPosition();
}

nao.addEventListener('click', onInteraction)
nao.addEventListener('touchstart', onInteraction)
nao.addEventListener('mouseover', onInteraction)