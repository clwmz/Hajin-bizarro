const nao = document.querySelector('#nao');
const sim = document.querySelector('#sim');

nao.onclick = () => {
    nao.style.position = 'absolute';
    nao.style.left = '1vw';
    nao.style.top = (Math.floor(Math.random()*50) + 1) + 'vh';
    nao.style.left = (Math.floor(Math.random()*50) + 1) + 'vw';
}
sim.onclick = () => {
    window.location = "muitobem.html"
}