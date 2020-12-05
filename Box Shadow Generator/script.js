inputs = document.querySelectorAll('input[type="range"],input[type="color"]');
code = document.querySelector('.gen-code');

let inset = '',
    x = '0'
    y = '0',
    blur = '15px',
    spread = '0px',
    color = '#000000';

inputs.forEach(input => {

    input.addEventListener('input', (e) => {
        const el = e.target;
        const suffix = el.dataset['sizing'] || '';
        const prop = el.value + suffix;

        document.documentElement.style.setProperty(`--${el.name}`, prop);
        el.parentElement.lastElementChild.innerText = el.value;

        if (el.name === 'x') {
            x = el.value + 'px';
        } else if (el.name === 'y') {
            y = el.value + 'px';
        } else if (el.name === 'blur') {
            blur = el.value + 'px';
        } else if (el.name === 'spread') {
            spread = el.value + 'px';
        } else {
            color = el.value;
        }

        code.innerText = `box-shadow: ${inset} ${x} ${y} ${blur} ${spread} ${color};`;
    });
});

document.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
    const el = e.target;
    if (el.checked) {
        document.documentElement.style.setProperty('--inset', 'inset');
        inset = 'inset'; 
        code.innerText = `box-shadow: ${inset} ${x} ${y} ${blur} ${spread} ${color};`;
    } else {
        document.documentElement.style.setProperty('--inset', '');      
        inset = '';
        code.innerText = `box-shadow: ${inset} ${x} ${y} ${blur} ${spread} ${color};`;
    }
});

const copyBtn = document.querySelector('.fa-copy');

copyBtn.addEventListener('click', () => {
    var text = code.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    document.querySelector('.info').classList.remove('hidden');
    setTimeout(() => {
        document.querySelector('.info').classList.add('hidden');
    }, 1000);

});