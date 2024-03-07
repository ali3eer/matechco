const findMissingItems=(arr1, arr2,key)=> {
    const arr1Names = new Set(arr1.map(item => item[key]));
    return arr2.filter(item => !arr1Names.has(item[key]));
}

module.exports = findMissingItems