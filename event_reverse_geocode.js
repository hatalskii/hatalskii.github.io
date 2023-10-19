ymaps.ready(init);
const button = document.querySelector('.form-button');
const input = document.querySelector('.form-input')

button.addEventListener('click', function(){
    console.log('btn')
    const form = document.querySelector('.main-form')
    console.log(form);
    const input = document.querySelector('.form-input')
    console.log(input.value)
})

function init() {

    var myPlacemark,
        myMap = new ymaps.Map('map', {
            center: [53.90828,27.56895],
            zoom: 14.5
        }, 
        {
            controls: ['zoomControl'],
        },{
            suppressMapOpenBlock: true,
        restrictMapArea: [
            [27.53788,53.91009],
            [27.59109,53.89398 ]
        ]});
        myMap.setType('yandex#map');
        myMap.geoObjects
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.920568, 27.598176]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Академия наук',
                balloonContent:

                '<h1>Академия наук</h1>' +
                '<img src="../images/2023-10-19 22.32.06.jpg" height="330" width="270">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.916309, 27.583955]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Площадь Якуба Коласа',
                balloonContent:

                '<h1>Площадь Якуба Коласа</h1>' +
                '<img src="../images/коласа.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.909800, 27.577291]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Проспект Независимости',
                balloonContent:

                '<h1>Проспект Независимости</h1>' +
                '<img src="../images/белкарт.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.901164, 27.561014]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'улица Энгельса',
                balloonContent:

                '<h1>улица Энгельса</h1>' +
                '<img src="../images/витязь.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.905096, 27.556253]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'собор Сошествия Свято-Духа',
                balloonContent:

                '<h1>собор Сошествия Свято-Духа</h1>' +
                '<img src="../images/церковь.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.901635, 27.564987]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Дом Офицеров',
                balloonContent:

                '<h1>Дом Офицеров</h1>' +
                '<img src="../images/паркгорького.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.894193, 27.542957]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Советская улица',
                balloonContent:

                '<h1>Советская улица</h1>' +
                '<img src="../images/горящийдом.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
        .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.902130, 27.557573]
               
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'улица Ленина',
                balloonContent:

                '<h1>улица Ленина</h1>' +
                '<img src="../images/втб.jpg" height="330" width="300">',
    
            }
        }, {
            preset: 'islands#blackStretchyIcon'     
        }))
//     // Слушаем клик на карте.
//         myMap.events.add('click', function (e) {
//         console.log('clickmap');
//         var coords = e.get('coords');

//         // Если метка уже создана – просто передвигаем ее.
//         if (myPlacemark) {
//             myPlacemark.geometry.setCoordinates(coords);
//         }
//         // Если нет – создаем.
//         else {
//             myPlacemark = createPlacemark(coords);
//             myMap.geoObjects.add(myPlacemark);
//             // Слушаем событие окончания перетаскивания на метке.
//         }
//         // getAddress(coords);
//     });


    
//     // Создание метки.
//     function createPlacemark(coords) {
//         return new ymaps.Placemark(coords, {
//             iconCaption: 'поиск!...',
//             balloonContent: input.value
//         }, {
//         });
//     }
   
//     // Определяем адрес по координатам (обратное геокодирование).
//     function getAddress(coords) {
//         myPlacemark.properties.set('iconCaption', 'поиск!!...');
//         ymaps.geocode(coords).then(function (res) {
//             var firstGeoObject = res.geoObjects.get(0);

//             myPlacemark.properties
//                 .set({
//                     // Формируем строку с данными об объекте.
//                     iconCaption: [
//                         // Название населенного пункта или вышестоящее административно-территориальное образование.
//                         firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
//                         // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
//                         firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
//                     ].filter(Boolean).join(', '),
//                     // В качестве контента балуна задаем строку с адресом объекта.
//                     balloonContent: firstGeoObject.getAddressLine()
//                 });
//         });
//     }
// }
    }
