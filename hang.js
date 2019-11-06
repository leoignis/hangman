//создание массива со словами для игры
var words = [
    "program",
    "people",
    "apple",
    "deck",
    "butter",
    "witness"
];
// выбор случайного слова из массива
var randomWord = words[Math.floor(Math.random() * words.length)];
//создаем игровой массив 
var answerArray = [];
for (var i = 0; i < words.length; i++){
    answerArray[i] = "_";
    }
var remainingLetters = randomWord.length;
var guesses = 20;
//игровой цикл
while (remainingLetters > 0 && guesses > 0) {
    //показываем состояние игры
    alert(answerArray.join(" "));
    //записываем вариант ответа
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        //выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста,введите одну букву.");
    } else {
        //обновляем состояние игры
        guess = guess.toLowerCase();
        for (var j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
//конец игрового цикла
}
//отображаем ответ и приветствуем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + randomWord);
