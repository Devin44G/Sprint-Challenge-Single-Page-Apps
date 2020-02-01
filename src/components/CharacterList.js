import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './styles.css';

export default function Characters() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results);
        const results = res.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
        setData(results);
      });
  }, [search]);
  const changeHandler = event => {
    setSearch(event.target.value);
  };

  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  `;
  const IndCard = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    background-color: #c0ffb6;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 10px;
  `;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Ah gee, you should do a search!"
          onChange={changeHandler}
          value={search}
        />
      </form>
      <Card>
        {data.map(data => {
          return (
            <IndCard key={data.id}>
              <h2>{data.name}</h2>
              <ul>
                <li>Species: {data.species}</li>
                <li>Status: {data.status}</li>
                <li>Location: {data.location.name}</li>
              </ul>
            </IndCard>
          );
        })}
      </Card>
    </div>
  );
}
