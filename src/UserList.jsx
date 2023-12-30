import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState();

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUser(response.data))
        // .catch(error => console.log(error))
    }

    useEffect(() => {
        getUsers();
    }, [])

    console.log(listOfUser);

    return (

        //         {data && data.map((item) => <p>{item.title}</p>)}
        <div>

            {listOfUser.map((user) => <User key={user.id} {...user} />)}
        </div>
    )

}

export default UserList