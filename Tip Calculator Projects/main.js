let billAMt, people, tipAmt, serviceValue, tipText;

billAmt = document.getElementById('price');
people = document.getElementById('people');
tipText = document.querySelector('.tip-amt');
tipAmt = 0;
serviceValue;

document.querySelector('.btn').addEventListener('click', () => {
    let services = document.querySelectorAll('option');

    services.forEach(service => {
        if (service.selected) {
            serviceValue = service.value;
        }
    });
    
    tipAmt = (billAmt.value * serviceValue) / people.value;
    tipAmt = tipAmt.toFixed(2);

    if (people.value > 1) {
        tipAmt += ' each';
    }

    document.querySelector('.tip').style.display = 'block';

    tipText.innerHTML = tipAmt;
});