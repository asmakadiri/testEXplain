const groupBy = (items, key) => {
    let result =items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }),
        {},
    );
    return result
}

exports.groupBy = groupBy;