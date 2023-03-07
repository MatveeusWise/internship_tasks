function kebabize(str) {
    return str.replace(/\d/g, '').replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
}