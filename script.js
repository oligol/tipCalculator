let amount = document.querySelector('#amount'),
    guest = document.querySelector('#guest'),
    quality = document.querySelector('#quality'),
    calculate = document.querySelector('.btn'),
    tipAmount = document.querySelector('.tip-amount');

    calculate.addEventListener('click', function(){
        let tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
        amount.value = '';
        guest.value = '';
        quality.value = '';
        if(tip === 'NaN') {
            tipAmount.innerHTML = 'Tip $0 esch';
            showTipAmount();
        }
        else{
            tipAmount.innerHTML = 'Tip $' + tip + " each";
            showTipAmount(); 
        }
     });

     function showTipAmount() {
        let x = tipAmount;
        x.classList.add('show');
        setTimeout(function() {
            x.className = x.className.replace('show', "");
        }, 3000);
     }

     