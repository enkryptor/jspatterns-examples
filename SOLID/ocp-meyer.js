
// Пример задачи с собеседования, варианты решений
// ===============================================

// плохо
const avg = (a, b, c) => {
	if (c === undefined) {
		return (a + b) / 2;
	}
	return (a + b + c) / 3;
}

// лучше
const betterAvg = (...args) => args.reduce((a, b) => a + b, 0) / args.length;




// лучше и проще (KISS)
function sum(a, b, c=0) {
	return a + b + c;
}




// Пример того, как функции обрастают флагами
// ==========================================

class Example {
    validateForm(form) {
        // логика валидации и возврат булева
        // также содержит сайд-эффект (показ ошибки)
    }
  
    validateForm(form, showError=true) {
        if (showError) {
        // ... сайд-эффект вызываем по условию
        // Уже сомнительно и наводит на мысль о размазанной ответственности
        }
    }
  
    validateForm(form, showError=true, useNewValidators=false) {
        // ещё хуже, лучше разделить на несколько функций
    }
}



// Как можно переделать:

// это переименованная функция validateForm:
function processForm(form) {
	const errors = validateForm();
	showError(form, errors);
}
function validateForm() { /* ... */ } // новая validateForm занимается только валидацией
function  showError() { /* ... */ }
