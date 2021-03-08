import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = (props) => {
    const {id} = useParams();
    const [friend ,setFriend] =useState({});
    
    useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/users/${id}`
       fetch(url) 
       .then(res =>res.json())
       .then(data=>setFriend(data))
    },[])
    return (
        <div className="detailBox">
            <h1>this is detail of {id}</h1>
            <h5>{friend.name}</h5>
            <h5>{friend.email}</h5>
            <h5>{friend.phone}</h5>
        </div>
    );
};

export default FriendDetail;