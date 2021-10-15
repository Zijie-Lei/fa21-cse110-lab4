function time() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

setInterval(time, 1000);