'use strict';

function getMessage(a, b) {
  if ( typeof a === 'boolean') {
    if (a) {
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      return 'Переданное GIF-изображение не анимировано';
    }
  }

  if ( typeof a === 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' аттрибутов';
  }

  if ( Array.isArray(a) ) {
    var i = 0, sum = 0;

    if ( Array.isArray(b) ) {
      for ( i = 0; i < a.length; i++) {
        sum = sum + (a[i] * b[i]);
      }
      return 'Общая площадь артефактов сжатия: ' + sum + ' пикселей';
    }

    for ( i = 0; i < a.length; i++) {
      sum = sum + a[i];
    }
    return 'Количество красных точек во всех строчках изображения: ' + sum;
  }
}
