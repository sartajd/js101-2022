const getPosts = async (start=0, end=start+9) => {
    let promises = []
    
    // add promises to array
    for(let i = start; i < end; i++){
        promises.push(
            fetch("https://jsonplaceholder.typicode.com/posts/"+i)
            .then(response => response.json())
        )
    }

    return await Promise.all(promises)

}









// const getPosts = (start=0, end=start+9) => {
//     let data = []
    
//     const promise = new Promise((resolve, reject)=> {
//         try{
//             for(let i = start; i <= end; i++){
//                 data.push("Post " + i)
//             }
//             resolve(data);
//         }
//         catch(e) {
//             reject("Error while loading posts")
//         }
//     })
    
//     return promise
// }
