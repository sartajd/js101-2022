const content = {
    "first": "<h1>First Page</h1><main>akdsjflakdj flakdj flakd f</main>",
    "second": "Second Page",
    "third": "<h1>Third Page</h1> <form><input placeholder='email'></input></form>",
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