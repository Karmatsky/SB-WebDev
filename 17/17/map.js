// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.87944680963443, 2.349567954060662],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [48.87944680963443, 2.349567954060662]
            }
        });
        
        var myPlacemark = new ymaps.Placemark([48.87944680963443, 2.349567954060662], {}, {

            iconLayout: 'default#image',
            iconImageHref: '/img/Subtract.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]

        })
        
        // myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }