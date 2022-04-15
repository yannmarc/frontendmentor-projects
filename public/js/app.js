let totalAmountValue = document.getElementById('total-amount');
let numberOfPeople = document.getElementById('number-of-people');

let tipPerPersonValue = document.getElementById('tip_person');
let totalTipValue = document.getElementById('tip-total');
let btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset__btn');
const error = document.querySelector('.text__error');


function calculateTip () 
{
    btns.forEach( btn => {
        btn.addEventListener('click', () => {

            if( numberOfPeople.value == 0 )
            {
                error.classList.add('show');
                return;
            }
            let btnValue = btn.getAttribute('value');
            //calcualting the tip per person
            let totalTipPerPerson = ((btnValue / 100) * (totalAmountValue.value));
            
            let tipPerPerson = totalTipPerPerson / (numberOfPeople.value);
            console.log(tipPerPerson);
            let perPersonResult = tipPerPerson.toFixed(2);

            let tipPercentage = btnValue / 100;

            let totalTip = (totalAmountValue.value) * (tipPercentage+1);
            
            let totalAmountTipPerPerson = (totalTip / (numberOfPeople.value))

            let totalPerPersonResult = totalAmountTipPerPerson.toFixed(2);
            console.log(totalAmountTipPerPerson);

            totalTipValue.innerHTML = `$${totalPerPersonResult}`;
            tipPerPersonValue.innerHTML = `$${perPersonResult}`;
            

        })
    })

    resetBtn.addEventListener('click', () => {
        totalTipValue.innerHTML = `$${0}`;
        tipPerPersonValue.innerHTML = `$${0}`;
        totalAmountValue.value = 0;
        numberOfPeople.value = 0;

    })
}

calculateTip()






