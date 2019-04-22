import React from 'react'
import ZaposleniAPI from './api'
import {Link} from 'react-router-dom';

const Zaposleni = (props) => {
    const zaposleni = ZaposleniAPI.get(
        parseInt(props.match.params.number, 10))
        if(!zaposleni){
            return <div>Zaposlen Nije pronadjen</div>
        }
        return (<div>
            <h1>{zaposleni.name}(#{zaposleni.number})</h1>
            <h2>Position: {zaposleni.position}</h2>
            <Link to='/Zaposleni'>Back</Link>
        </div>)
}
export default Zaposleni