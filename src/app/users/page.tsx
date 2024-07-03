import { link } from 'fs';
import React from 'react'

interface User {
    id: number;
    name: string;
    username: string;

}

const Userpage = async() => {

  {/*if you disabled the caching and then build your application. the server renders dynamically (at request time)
    vice versa if the cache is enabled servers will render static (at build time)*/}
  //by default if you use the fetch nextjs automatically enabled caching
  
  // const res = await fetch ('https://jsonplaceholder.typicode.com/users, {cache: no-store}');  ---> FOR DISABLING ATA CACHING 
  // const res = await fetch ('https://jsonplaceholder.typicode.com/users, {next: {revalidate: 10}'); ---> cache data for a set period of time, refresh data every 10 sec.
   const res = await fetch ('https://jsonplaceholder.typicode.com/users');
   const users : User[]= await res.json();

  return (
    <div>
        <h1>List of Users</h1>
        <p>{new Date().toLocaleDateString()}</p> {/*dispaly the time the pages are rendered*/}
        <ul>
            {users.map(user => 
            <li key={user.id}>{user.name} <span>{user.username}</span></li>
            )}
        </ul>
    </div>
  )
}

export default Userpage