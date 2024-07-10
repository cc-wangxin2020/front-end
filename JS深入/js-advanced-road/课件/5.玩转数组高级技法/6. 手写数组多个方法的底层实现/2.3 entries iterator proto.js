
Array.prototype[Symbol.iterator] = function () {
    const O = Object(this);
    let index = 0;
    const length = O.length;

    function next() {
        if (index < length) {
            return { value: [index, O[index++]], done: false }
        }
        return { value: undefined, done: true };
    }

    return {
        next
    }
}


Array.prototype.entries = function () {
    const iter = this[Symbol.iterator]();
    return {
        next: iter.next,
        [Symbol.iterator]() { return iter }
    }
}

const arr = [1, 2, 3];

const iter = arr.entries();
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);
console.log("iter.next().value:", iter.next().value);

// 依旧报错
for (let [k, v] of arr.entries()) {
    console.log(`k:${k}`, `v:${v}`)
}


