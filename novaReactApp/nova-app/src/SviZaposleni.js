import React from 'react'
import ZaposleniAPI from './api'
import { Link } from 'react-router-dom'

const SviZaposleni = () => (
    <div> <ul>  {
    ZaposleniAPI.all().map(p => (
    <li key={p.number}>
    <Link to={`/Zaposleni/${p.number}`}>{p.name}</Link>
    </li>   ))   }   
    </ul>
</div>   
)

export default SviZaposleni