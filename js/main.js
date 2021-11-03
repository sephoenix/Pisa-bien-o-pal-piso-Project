document.addEventListener('DOMContentLoaded', () => {
    let game;

function splashSCreen(){
    let intro = document.getElementById('intro');
    intro.innerHTML = `
    <div>
        <button id="prePlay">¡Vamoh a jugar!</button>
        </div>`;
}
    splashSCreen();
})