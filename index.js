const sim = document.querySelector('#sim');
const nao = document.querySelector('#nao');
let sim_size = 10;

const setRandomPosition = () => {
    nao.style.top = Math.floor(Math.random() * document.documentElement.clientHeight) + 'px';
    nao.style.left = Math.floor(Math.random() * document.documentElement.clientWidth) + 'px';
}

const onInteraction = () => {
    sim_size += 2;

    sim.style.width = `${sim_size}vw`;
    nao.style.position = 'absolute';

    setRandomPosition();
}

nao.addEventListener('click', onInteraction)
nao.addEventListener('touchstart', onInteraction)
nao.addEventListener('mouseover', onInteraction)