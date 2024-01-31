const textInput = document.querySelector('input')
const defaultText = document.querySelector('.default')
const debounceText = document.querySelector('.debounce')
const throttleText = document.querySelector('.throttle')


const debounce = (cb, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

const throttle = ((cb, delay) => {

    let shouldWait = false
    let remainingArgs;
    const timeOutFunc = () => {
        if (remainingArgs === null) {
            shouldWait = false
        }
        else {
            cb(remainingArgs)
            remainingArgs = null
            setTimeout(timeOutFunc, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            remainingArgs = args
            return;
        }
        cb(...args)
        shouldWait = true
        setTimeout(timeOutFunc, delay)
    }
})

const updateTextDebounce = debounce((text) => {
    debounceText.textContent = text
}, 1000)

const updateTextThrottle = throttle((text) => {
    throttleText.textContent = text
}, 1000)

textInput.addEventListener('input', (e) => {
    defaultText.textContent = e.target.value
    updateTextDebounce(e.target.value)
    updateTextThrottle(e.target.value)
})
