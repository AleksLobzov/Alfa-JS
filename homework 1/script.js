function parseAmount(str) {
    if (typeof(str) === 'string') {
        console.log(parseFloat(str.replace(',', '.')) * 100)
    } else {
        console.log('Wrong argument type')
    }
}

console.log('Task 1');
parseAmount('10');
parseAmount('10,5');
parseAmount('10,55');



function count(str, substring) {
    let counter = 0;
    let i = 0;
    str = str.toLowerCase();
    substring = substring.toLowerCase();
    while (i != -1) {
        i = str.indexOf(substring, i);
        if (i != -1) {
            counter++;
            i++;
        }
    }
    return counter
}

function converter(str) {
    if (typeof(str) === 'string') {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (count(str, str[i]) === 1) {
                result += '('
            } else {
                result += ')'
            }
        }
        console.log(result);
    } else {
        console.log('Wrong argument type')
    }
}

console.log('Task 2');
converter('din');
converter('recede');
converter('Success');
converter('(( @');
