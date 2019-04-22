import React from 'react';

const Planer = ({zadaci, brisiZadatak}) => {

const listaZadataka = zadaci.length ? (
  zadaci.map(stavka => {
    return (
      <div className="zadaci" key={stavka.id}>
        <span onClick={() => {brisiZadatak(stavka.id)}}>{stavka.sadrzaj}</span>
      </div>
    )
  })
) : (
  <p className="center">Nema nicega</p>
);
return (
  <div className="zadatak">
    {listaZadataka}
  </div>
)
}


export default Planer;