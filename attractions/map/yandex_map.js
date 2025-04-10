ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.326797, 44.006516],
        zoom: 10,
        controls: [],
    });

    // Нижегородский Кремль
    var Kremlin = new ymaps.Placemark([56.331226, 44.008872], {
        balloonContent: 'Нижегородский Кремль'
    });

    // Чкаловская лестница
    var ChkalovStaircase = new ymaps.Placemark([56.330322, 43.973112], {
        balloonContent: 'Чкаловская лестница'
    });

    var football = new ymaps.Placemark([56.337146, 43.963765], {
        balloonContent: 'Стадион'
    })

    myMap.geoObjects.add(Kremlin);
    myMap.geoObjects.add(ChkalovStaircase);
    myMap.geoObjects.add(football);
}