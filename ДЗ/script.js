function currentTime() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)

    document.querySelector('div').innerText = hour + " : " + min + " : " + sec

    let time = setTimeout(function () {
        currentTime()
    }, 1000)
}

function updateTime(item) {
    if (item < 10) {
        return '0' + item
    }
    else {
        return item
    }
}

currentTime()