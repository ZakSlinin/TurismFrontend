ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.326797, 44.006516],
        zoom: 10,
    });

    // Нижегородский Кремль
    var Kremlin = new ymaps.Placemark([56.3287, 44.0020], {
        balloonContent: 'Нижегородский Кремль'
    });

    // Чкаловская лестница
    var ChkalovStaircase = new ymaps.Placemark([56.330322, 43.973112], {
        balloonContent: 'Чкаловская лестница'
    });

    myMap.geoObjects.add(Kremlin);
    myMap.geoObjects.add(ChkalovStaircase);
}