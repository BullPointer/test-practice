
function analyzeArray(array) {
    let obj = {};
    let min = array[0], max = array[0];
    const key = ["average", "min", 'max', "length"]
    for (let index = 0; index < array.length; index++) {
        if (min > array[index]) min = array[index];
        if (max < array[index]) max = array[index];
    }
    const result = array.reduce((prev, next) => prev + next, 0);
    obj['average'] = result/array.length;
    obj['min'] = min;
    obj['max'] = max;
    obj['length'] = array.length;
    return obj;
}

module.exports = analyzeArray;