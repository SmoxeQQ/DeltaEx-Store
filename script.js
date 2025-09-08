var tips_array = [
    "Используйте комбинацию клавиш для быстрого доступа к оружию из вашей коллекции.<br><br>Некоторые модификации оружия требуют особых условий для разблокировки.<br><br>Экспериментируйте с разными стволами и обвесами для каждого типа оружия.",
    "На сервере доступны уникательные модели оружия из популярных игр и вселенных.<br><br>Каждое оружие имеет свои характеристики и подходит для разных ситуаций.<br><br>Не забывайте пополнять боезапас у торговцев или в специальных зонах.",
    "Некоторые виды оружия можно модифицировать прямо во время игры.<br><br>Прицелы и глушители значительно меняют тактические возможности.<br><br>Тестируйте оружие в тире перед выходом на миссию.",
    "Коллекционное оружие часто имеет уникальные анимации и эффекты.<br><br>Обменивайтесь дубликатами оружия с другими игроками.<br><br>Редкое оружие можно получить в качестве награды за достижения.",
    "Разные типы патронов оказывают различное воздействие на цели.<br><br>Некоторые моды оружия добавляют специальные способности.<br><br>Создавайте свои собственные комбинации оружия для максимальной эффективности."
],
tips_headers = [
    "WEAPON CONTROL",
    "COLLECTIONS",
    "MODIFICATIONS",
    "A UNIQUE WEAPON",
    "TACTICS AND STRATEGY"
],
    tip_index = 0,
    tip_interval = 10000,
    img_index = 0,
    img_interval = 8000;

window.onload = function () {
    window.onclick = changeTip;
    changeTip();

    function changeTip() {
        tip_index = Math.floor(Math.random() * tips_array.length);
        document.getElementById('hintText').innerHTML = `${tips_array[tip_index]}`;
        document.getElementById('hintHeader').innerHTML = `${tips_headers[tip_index]}`;
    };

    changeBg();

    function changeBg() {
        img_index = Math.floor(Math.random() * 5) + 1;
        document.getElementById('background').style.backgroundImage = `url('images/${img_index}.png')`;
        setTimeout(changeBg, img_interval);
    };
}

document.addEventListener('DOMContentLoaded', function() {
            const music = document.getElementById('backgroundMusic');
            music.volume = 0.7; // Громкость 70%
            
            // Многократные попытки воспроизведения
            function attemptPlay() {
                music.play()
                    .then(() => {
                        console.log('Фоновая музыка запущена');
                    })
                    .catch(error => {
                        console.log('Попытка воспроизведения...');
                        setTimeout(attemptPlay, 1000); // Повтор через 1 секунду
                    });
            }
            
            // Запускаем первую попытку
            attemptPlay();
        });
