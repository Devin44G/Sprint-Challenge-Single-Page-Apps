import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <div>
        {data.map(data => {
          return (
            <div className="char-card" key={data.id}>
              <h2>{data.name}</h2>
              <ul>
                <li>Species: {data.species}</li>
                <li>Status: {data.status}</li>
                <li>Location: {data.location.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
