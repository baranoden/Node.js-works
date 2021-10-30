import axios from "axios"



function getUsers(post_id){
    return new Promise(async (resolve, reject) => { 
        const { data } =  await axios("https://jsonplaceholder.typicode.com/users/" + post_id)
        resolve(data)
        
    })
    
}
function getPosts(post_id){
    return new Promise(async (resolve, reject) => { 
        const { data } =  await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve(data)

    })
    
}
// (async() => {
//  const users = await getUsers(1)


// const posts = await getPosts(1)

// console.log(users)
// console.log(posts)
// })()



export function getData() { const result = Promise.all([getUsers(1), getPosts(1)])
.then(console.log)
.catch(console.log)
}

















