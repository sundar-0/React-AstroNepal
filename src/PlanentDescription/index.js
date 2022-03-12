import React from 'react'
import './planetdescription.css'

export default function PlanetDescription({planets}) {

  return (
    <div>
<table>
  <tr>
    <th>Planets</th>
    <th>Degree</th>
    <th>Is Retrogade </th>
    <th>Sign </th>

    <th>Is Set </th>
  </tr>
  {planets.map((item,index)=><tr key={index}>

<td>{item.name}</td>
<td>{item.normDegree}</td>
<td>{item.isRetro}</td>
<td>{item.sign}</td>
<td>{item.is_planet_set?"true":"false"}</td>
  </tr>)}

 
</table>
    </div>
  )
}
