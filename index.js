var dugme = document.querySelector('#dugme');
var opis = document.querySelector('#opis');
var select = document.querySelector('#select');
var iznos = document.querySelector('#iznos');
var prihodContainer = document.querySelector('#prihodiLista');
var rashodiContainer = document.querySelector('#rashodiLista');
var ulPrihodi = document.querySelector('#listaP')
var ulRashodi = document.querySelector('#listaR')
var iznosSaldo = document.querySelector('#iznosSaldo')
var total = 0;
var totalR = 0;

dugme.addEventListener('click', function () {

    var liContent = document.createElement('li') // <li></li>
    liContent.textContent = opis.value + ' ' + iznos.value// <li>fgldgd</li>
    let num = Number(iznos.value);
    console.log(num);
    console.log(typeof num)
    if (select.value == 'PRIHOD') {
        prihodContainer.appendChild(liContent);

        total += num;
    } else {
        let newLi = document.createElement('li');
        newLi.appendChild(liContent);

        rashodiContainer.appendChild(newLi);

        totalR += num
    };

    console.log(total)
    console.log(totalR)
    let razlika = total - totalR;
    console.log(razlika)
    let saldoContent = document.createElement('li')
    saldoContent.textContent=razlika;
    
    saldoContent.appendChild(iznosSaldo)
});








