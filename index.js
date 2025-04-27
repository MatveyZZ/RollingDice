const dice = document.querySelector('.dice'); // Получает элемент с классом 'dice' (кубик) из документа
const rollBtn = document.querySelector('.roll'); // Получает элемент с классом 'roll' (кнопка для броска) из документа

const randomDice = () => { // Определяет функцию randomDice для генерации случайного числа

    const random = Math.floor(Math.random() * 10); // Генерирует случайное число от 0 до 9 и округляет его вниз до ближайшего целого

    if (random >= 1 && random <= 6) { // Проверяет, находится ли случайное число в диапазоне от 1 до 6
        rollDice(random); // Если да, вызывает функцию rollDice с сгенерированным числом
    } else {
        randomDice(); // Если нет, повторно вызывает randomDice для генерации нового числа
    }
}

const rollDice = random => { // Определяет функцию rollDice, которая принимает случайное число как аргумент

    dice.style.animation = 'rolling 4s'; // Устанавливает анимацию 'rolling' для кубика на 4 секунды

    setTimeout(() => { // Устанавливает таймер, который выполнит код внутри через 4050 миллисекунд (4.05 секунды)

        switch (random) { // Начинает оператор switch для определения действия в зависимости от значения random

            case 1: // Если random равно 1
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Устанавливает поворот кубика для отображения 1
                break; // Завершает текущий случай
            
            case 6: // Если random равно 6
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)'; // Устанавливает поворот кубика для отображения 6
                break; // Завершает текущий случай
            
            case 2: // Если random равно 2
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)'; // Устанавливает поворот кубика для отображения 2
                break; // Завершает текущий случай

            case 5: // Если random равно 5
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)'; // Устанавливает поворот кубика для отображения 5
                break; // Завершает текущий случай

            case 3: // Если random равно 3
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)'; // Устанавливает поворот кубика для отображения 3
                break; // Завершает текущий случай

            case 4: // Если random равно 4
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)'; // Устанавливает поворот кубика для отображения 4
                break; // Завершает текущий случай

            default: // Если random не соответствует ни одному из случаев
                break; // Ничего не делает
        }
        dice.style.animation = 'none'; // Убирает анимацию после завершения броска
    }, 4050); // Устанавливает задержку перед выполнением кода внутри setTimeout
}

rollBtn.addEventListener('click', randomDice); // Добавляет обработчик событий для кнопки, который вызывает randomDice при нажатии