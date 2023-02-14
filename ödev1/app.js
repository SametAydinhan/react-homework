import axios from "axios"

/**
 * @param {number} user_id - The number
 */
const getData = user_id => {
    return new Promise( async (resolve, reject) => {
        if( typeof(user_id) == "number" ){
            var { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
                .catch( e => reject(e.axiosError))
            var { data: userPosts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
                .catch( e => e.axiosError)
            user.posts = userPosts
            resolve(user)
        }else{
            reject("Parametre tipi number olmalı")
        }
    } )
    
}
export default getData