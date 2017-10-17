export default function converter(operations) {

    const semiResultObj = {};

    // Заполняем массивы операций и ссылок
    operations.forEach(function(item, i, operations) {

        // Инициируем свойства объекта
        if (semiResultObj[item.date] === undefined) {
            semiResultObj[item.date] = { "operations": [], "links": [] };
        };

        // Заполняем массив операций
        semiResultObj[item.date]["operations"].push(item);

        // Заполняем массив ссылок
        const links = item['links'];
        links.forEach(function(item2, i2, links) {
            semiResultObj[item.date]["links"].push(item2);
        });

    });

    // Сортируем свойства объекта по датам в порядке убывания
    const resultObj = {};

    Object.keys(semiResultObj)
          .sort()
          .reverse()
          .map(
              function(key) {
                  resultObj[key] = semiResultObj[key];
              }
          );

    console.log(resultObj);

    return resultObj;

}
