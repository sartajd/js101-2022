
const signinPage = `
<main>
<form>
<input name="name" placeholder="Name" />
</form>
</main>
`

const aboutPage = `<main>
    <h2>About us</h2>
    <hr>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, atque. Accusantium dolorum, dignissimos odio deserunt ab perferendis nihil non in et voluptate dolore iste laudantium quas nulla illo qui reprehenderit!</p>
</main>`

const content = {
    "first": "First Page",
    "second": "Second Page",
    "third": "Third Page",
    "signin": signinPage, 
    "about": aboutPage
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