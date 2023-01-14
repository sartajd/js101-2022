const content = {
    "first": "First Page",
    "second": "Second Page",
    "third": "Third Page",
}
    
    
    


function getPage(pageName){
      
    const promise = new Promise((res, rej) => {
        try {
            res(content[pageName]); 
        }
        catch(e){
            rej(e)
        }
    })

    return promise
}