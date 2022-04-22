import './home.scss';
import { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

export default function Home({type}) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNThhZDQ1YTEyNjlmM2MwY2RiMDViYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDU4MzM4NCwiZXhwIjoxNjUxMDE1Mzg0fQ.BBRKyby1Eu5BWAvURZqf40-dakHjhLMbgGfxcuHA-2Q"
          },
        });
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type, genre]);

  return (
    <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list, index) => (
          <List list={list} key={index} />
        ))}
    </div>
  )
}
