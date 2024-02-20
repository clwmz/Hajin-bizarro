const nao = document.querySelector('#nao');
const sim = document.querySelector('#sim');
let sim_size = 10;

nao.onclick = () => {
    sim.style.width = (sim_size+1) + 'vw';
    nao.style.position = 'absolute';
    nao.style.left = '1vw';
    nao.style.top = (Math.floor(Math.random()*50) + 1) + 'vh';
    nao.style.left = (Math.floor(Math.random()*50) + 1) + 'vw';
}
sim.onclick = () => {
    window.location = "muitobem.html"
}