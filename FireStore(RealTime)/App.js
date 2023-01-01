import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from 'ethers';

import { db } from "./firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

function App() {
  const [name, setName] = useState("");
  const [messege, setMessege] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const [account, setAccount] = useState("");
  const usersCollectionRef = collection(db, "12345");

  

  const createUser = async ({name,messege}) => {
    await addDoc(usersCollectionRef, { name:name,messege:messege });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    // const getUsers = async () => {
    //   const data = await getDocs(usersCollectionRef);
     
    //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    // getUsers();
    const unsubscribe=onSnapshot(usersCollectionRef,snapshot=>{
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    })
    return ()=>{
      unsubscribe();
    }
  }, []);

  return (
    <div className="App">
      {account==""?<div>

      <button onClick={async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const accounts = await provider.listAccounts();
        console.log(accounts[0]);
        await addDoc(usersCollectionRef, { account: accounts[0]});
        setAccount(accounts[0])
      }}>Connect Wallet</button>
      </div>:<div>
        {account}
        </div>}
      
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>{user.name} says {user.messege}</h1>
            
            
          
          </div>
        );
      })}
     
      <br></br>
      name{name}
      <input onChange={(e)=>{
        setName(e.target.value);
      }}></input>
      messege
      {messege}
      <input onChange={(e)=>{
        setMessege(e.target.value);
      }}></input>
      <button onClick={()=>{createUser({name,messege})}}>send</button>
   <br></br>
   
    </div>
  );
}

export default App;
