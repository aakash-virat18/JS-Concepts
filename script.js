// const textInput = document.querySelector('input')
// const defaultText = document.querySelector('.default')
// const debounceText = document.querySelector('.debounce')
// const throttleText = document.querySelector('.throttle')


// //debounce
// const debounce = (cb, delay) => {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             cb(...args)
//         }, delay)
//     }
// }

// const arr = [1, 2, 3]
// console.log(arr);

// //throttling

// const throttle = ((cb, delay) => {

//     let shouldWait = false
//     let remainingArgs;
//     const timeOutFunc = () => {
//         if (remainingArgs === null) {
//             shouldWait = false
//         }
//         else {
//             cb(remainingArgs)
//             remainingArgs = null
//             setTimeout(timeOutFunc, delay)
//         }
//     }

//     return (...args) => {
//         if (shouldWait) {
//             remainingArgs = args
//             return;
//         }
//         cb(...args)
//         shouldWait = true
//         setTimeout(timeOutFunc, delay)
//     }
// })

// const updateTextDebounce = debounce((text) => {
//     debounceText.textContent = text
// }, 1000)

// const updateTextThrottle = throttle((text) => {
//     throttleText.textContent = text
// }, 1000)

// textInput.addEventListener('input', (e) => {
//     defaultText.textContent = e.target.value
//     updateTextDebounce(e.target.value)
//     updateTextThrottle(e.target.value)
// })

//map,filter,reduce polyfills

const arr = [1, 2, 3, 4]

Array.prototype.myMap = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i))
    }
    return result;
}

Array.prototype.myFilter = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            result.push(this[i])
        }
    }
    return result
}

Array.prototype.myReduce = function (cb, initalValue) {
    let accum = initalValue
    for (let i = 0; i < this.length; i++) {
        accum = accum ? cb(accum, this[i]) : this[i]
    }
    return accum
}

const sum = arr.myReduce((accum, val) => {
    return accum + val
})

console.log(sum);
