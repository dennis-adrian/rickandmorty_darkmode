import { useState, useEffect } from 'react';
import './character.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className="characters__grid">
      {characters.map(character => (
        <div className="character character__card">
          <img src={character.image} alt={character.name} />
          <section className="character__info">
            <h2 className="title" key={character.id}>{character.name}</h2>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Characters;