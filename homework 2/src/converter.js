export default function converter(operations) {

    const semiResultObj = {};

    // Заполняем массивы операций и ссылок
    operations.forEach(function(item, i, operations) {

        if (semiResultObj[item.date] === undefined) {

            semiResultObj[item.date] = { "operations": [], "links": [] };
            semiResultObj[item.date]["operations"].push(item);

            const links = item['links'];
            links.forEach(function(item2, i2, links) {
                semiResultObj[item.date]["links"].push(item2);
            });

        } else {

            semiResultObj[item.date]["operations"].push(item);

            const links = item['links'];
            links.forEach(function(item2, i2, links) {
                semiResultObj[item.date]["links"].push(item2);
            });

        };

    });

    // Сортируем свойства объекта по датам в порядке убывания
    const resultObj = {};

    const sortedSemiObj = Object.keys(semiResultObj)
                                .sort()
                                .reverse()
                                .map(
                                     function(key) {

                                         resultObj[key] = semiResultObj[key]

                                     }
                                );

    console.log(resultObj);

    return resultObj;

}
