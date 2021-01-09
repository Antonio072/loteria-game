const users = []

const addUser = ({id, username, room}) =>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    if(!username||!room){
        return {
            error: 'Username and Room are Required!'
        }
    }    
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })
    if(existingUser){
        return {
            error: 'Username is already taken!'
        }
    }
    const user = {id, username, room}
    users.push(user)
    return { user }
} 

const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })

    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id)=>{
    const user = users.find((u)=>{
        return u.id === id
    })
    return user    
}

const getUsersInRoom = (room)=>{
    room = room.trim().toLowerCase()
    const user = users.filter((u)=>{
        return u.room === room
    })
    return user
}

const generateMessage = (username, text)=>{
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}


// const res1 = addUser({
//     id: 23,
//     username: 'Sayan',
//     room: 'deonaro'
// })

// const res2 = addUser({
//     id: 21,
//     username: 'Leo',
//     room: 'deonaro'
// })


module.exports = {
    addUser, 
    removeUser, 
    getUser, 
    getUsersInRoom,
    generateMessage   
}