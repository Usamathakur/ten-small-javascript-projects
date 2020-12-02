const sounds = [
    'Tiger(1)',
    'Tiger(5)',
    'Tiger(6)',
    'Tiger(4)',
];
sounds.forEach((sound) =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});