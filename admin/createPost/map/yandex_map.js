ymaps.ready(init);

function init() {
    var createPostMap = new ymaps.Map("map", {
        center: [56.326797, 44.006516],
        zoom: 10,
        controls: [],
        points: userPoint,
    });

    var userPoint = []

    createPostMap.events.add('click', function (e) {
        var coords = e.get('coords');

        var title = prompt("Введите название метки:", "Название метки");

        if (title === null) {
            return
        }

        var placemark = new ymaps.Placemark(coords, {
            balloonContent: title
        });

        userPoint.push(placemark);


        createPostMap.geoObjects.add(placemark);
    });
}