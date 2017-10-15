export default function converter(operations) {

    const semiResultObj = {};

    operations.forEach(function(item, i, operations) {

        // Заполняем массивы операций и ссылок
        if (semiResultObj[item.date] === undefined) {

            semiResultObj[item.date] = { "operations": [], "links": [] };
            semiResultObj[item.date]["operations"] = [item];
            semiResultObj[item.date]["links"] = [item['links']];

        } else {

            semiResultObj[item.date]["operations"].push(item);
            semiResultObj[item.date]["links"].push(item['links']);

        };

        // Сортируем свойства объекта по датам в порядке убывания
        const resultObj = Object.keys(semiResultObj)
                                .sort()
                                .reverse()
                                .map(
                                     function(key) {
                                         return { key: semiResultObj[key] }
                                     }
                                );

        return resultObj;

    });

}
