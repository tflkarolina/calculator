// pobieram wszystkie elementy kalkulatora - przyciski i ekran
const buttons = document.querySelectorAll('button') // zwraca liste elementow
const screen = document.querySelector('.screen')      //zwraca pierwszy element 

let arr_buttons = [];                   //tablica do przechowywania wartosci przyciskow
let result;                             //zmienna ktora bedzie przechowywac ostateczny wynik
const operators = /[\+\-\*\/\.]/;       // wyrazenie regular expression (regexp/regex)
//przy tych specjalnych znakach trzeba uzywac \ - escape sequence
    // The test() method is a RegExp expression method.
    // It searches a string for a pattern, and returns true or false, 
    // depending on the result.
let previousIsOperator = false;         //flaga

function calculate(button) {

    const buttonValue = button.textContent

    if(buttonValue === "c") {           // === - strict equality - sprawdza czy zmienne maja te same wartosci i czy sa tego samego typu

        arr_buttons = []                //czyscimy tablice
        screen.textContent = '0'          //wtsawiam na ekraan 0 tak jak bylo na poczatku
        previousIsOperator = false;

    } else if (buttonValue === "="){

        screen.textContent = eval(result)     //w eval string
        previousIsOperator = false;

    } else if (operators.test(buttonValue)) {       //sprawdzam czy button jest operatorem

        if(previousIsOperator === false) {            // gdy wczesniejszy przycisk nie byl operatorem to wtedy idziemy dalej i obliczamy

            arr_buttons.push(buttonValue)
            result = arr_buttons.join('')           //zwraca tablica jako string, '' - nie ma przecinkow miedzy wartosciami
            screen.textContent = result
            previousIsOperator = true;              //ustawiam flage ze teraz byl operator
        }

    } else {                           //jak inny przycisk to nadal mozemy pisac
        arr_buttons.push(buttonValue)
        result = arr_buttons.join('')
        screen.textContent = result                   //to co wyswietla sie na ekranie
        previousIsOperator = false;
        
    }

}

//kiedy jakis przycisk zostaje wcisniety to wywoluje sie calculate z parametrem ktorym jest wcisniety przycisk
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))