const nao = document.querySelector('#nao');
let sim_size = 10;

nao.onclick = () => {
    sim_size += 2;

    sim.style.width = `${sim_size}vw`;
    nao.style.position = 'absolute';
    nao.style.left = '1vw';
    nao.style.top = (Math.floor(Math.random() * 50) + 1) + 'vh';
    nao.style.left = (Math.floor(Math.random() * 50) + 1) + 'vw';
}
