import * as React from 'react';
import './style.css';

export default function App() {
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map((p, key) => {
        return p.isGasPlanet ? (
          <h3>
            {key} - {p.name}
          </h3>
        ) : (
          ''
        );
      })}
    </div>
  );
}

// {planets.map( (p) => (p.isGasPlanet ? <h3>{p.name}</h3> : '') )}

// {planets.map((plnt) => {
//   if (plnt.isGasPlanet == true) {
//     return <h3>{plnt.name}</h3>;
//   }
// })}
