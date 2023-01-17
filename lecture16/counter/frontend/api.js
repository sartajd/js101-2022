function getCount(){
    const promise = new Promise((resolve, reject) => {
        fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(data => {
            resolve(data.counter)
        })
    })

    return promise
}

function increment(){
    const promise = new Promise((resolve, reject) => {
        fetch("http://localhost:3000/increment", {
            method: "POST"
        })
        .then(res => res.json())
        .then(data => {
            resolve(data.counter)
        })
    })

    return promise
}

function decrement(){
    const promise = new Promise((resolve, reject) => {
        fetch("http://localhost:3000/decrement", {
            method: "POST"
        })
        .then(res => res.json())
        .then(data => {
            resolve(data.counter)
        })
    })
    
    return promise
}