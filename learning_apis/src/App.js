import React, {useState, useEffect} from 'react';
import { getposts, getRandomUser } from './api';
import './App.css';
import PostCard from './components/postCard';
import UserCard from './components/userCard';


function App() {

  const [data,setData]  =  useState(null);
  const [userData,setUserData] = useState(null);

  useEffect(()=>{
    getposts().then((posts) => setData(posts));
  },[]);

  useEffect(()=>
  {
    getRandomUser().then((user) => setUserData(user.results[0]));
  },[]);

  return (
    <div className="App">

      <div>
        {userData && <UserCard data={userData}/>}
        <button
          onClick={()=>{getRandomUser().then((user) =>
               setUserData(user.results[0]));}} >
                Refresh
        </button>
      </div>

      {
        data
          ? data.map((e) =>
          <PostCard title={e.title} body={e.body} />)
          : <p>No data found</p>
      }
    </div>
  );
}

export default App;