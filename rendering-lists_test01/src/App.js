import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  // chemistとchemist以外の人を分ける
  const chemists = people.filter(person => person.profession === 'chemist');
  const others = people.filter(person => person.profession !== 'chemist');

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>

      <h2>Other Scientists</h2>
      <ul>
        {others.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}
