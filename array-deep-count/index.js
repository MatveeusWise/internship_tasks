function deepCount(a){
    let counter = 0;
    a.forEach(element => (Array.isArray(element)) ? counter += deepCount(element) + 1 : counter++);
    return counter;
}