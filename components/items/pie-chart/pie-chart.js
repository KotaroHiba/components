/* Массив с параметрами для диаграммы. 
    Color - цвет для диапозона.  
    Value - процент состовляющей. Всего 100%. 
    Каждый второй элемент - разделяющая полоса 1% и белая. Если отсуствует цвет, то значение 0.
*/
var dataset = [
    {
        value: 24,
        color: '#BC9CFF'
    }, {
        value: 1,
        color: '#ffffff'
    }, {
        value: 24,
        color: '#6FCF97'
    }, {
      value: 1,
      color: '#ffffff'
    }, {
        value: 49,
        color: '#FFE39C'
    }, {
        value: 1,
        color: '#ffffff'
    }, {
        value: 0,
        color: '#3D4975'
    }, {
        value: 0,
        color: '#ffffff'
    }  
];
  
var maxValue = 1;
var container = $('.pie-chart__container');

var addSector = function(data, startAngle, collapse) {
    var sectorDeg = 3.6 * data.value;
    var skewDeg = 90 + sectorDeg;
    var rotateDeg = startAngle;
    if (collapse) {
        skewDeg++;
    }

    var sector = $('<div>', {
        'class': 'pie-chart__section'
    }).css({
        'background': data.color,
        'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
    });
    container.append(sector);

    return startAngle + sectorDeg;
};

dataset.reduce(function (prev, curr) {
    return (function addPart(data, angle) {
        if (data.value <= maxValue) {
            return addSector(data, angle, false);
        }

        return addPart({
            value: data.value - maxValue,
            color: data.color
        }, addSector({
            value: maxValue,
            color: data.color,
        }, angle, true));
    })(curr, prev);
}, 0);
