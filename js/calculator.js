// calculator 
//function for evaluation
$(function(){
    $('#btnCalculate').click(function() {
        let income = parseFloat($('#income').val());
        let percent = parseFloat($('#isacontibutions').val());
        let result = 0;
        const regExp = /^\s+|-[0-9]+|[a-z]+|[`~,.*¿?<>;':"\/\[\]\|{}()=_+-]+$/gi
        let expre = regExp.test(income)
        let isnan = isNaN(income)
        if (!expre && !isnan) {
            result = percent / 100 * income;
            $('#payment-value').val(result);
        } else {
            alert('Please, Write the numbers without dots and comas. And only positive numbers')
        }
        
    });
});  
