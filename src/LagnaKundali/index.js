import React,{useState,useEffect, useReducer} from 'react'
import './lagnakundali.css'
import PlanetDescription from '../PlanentDescription'
import {zodiac_sign,houseCoordinate as houseCoordinate,houseList} from '../constant/constant'
import TextGenerator from './textgenerator';

function calculateLagna(planets){
  var personLagna=0;
  planets.map(function(item,index){
      if(item.name==="Ascendant"){
       personLagna=zodiac_sign[item.sign]
      }
      return []
  })
  return personLagna;
}


export default function LagnaKundali ({planets}) {
var housePlanets={

};
const array = Array(12) // array size is 12
				.fill()
				.map(() => Math.floor(50 * Math.random())); 

console.log(array);
var personLagna=calculateLagna(planets)
planets.map(function(item,index){
  if(housePlanets[item.house]!==undefined){
    console.log(housePlanets[item.house])
    let updated=housePlanets[item.house]+" "+item.name.substring(0,2);
    housePlanets[item.house]=updated;
  }
  else{
    console.log(housePlanets[item.house])
    housePlanets[item.house]=item.name.substring(0,2)
  }
  return [];
});
console.log(array)
console.log(housePlanets)
return (
    <div className="chart">
      <h1>LagnaKundali</h1>
        <svg height={400} width={600} style={{border:"4px solid black"}}>
            <line x1={0} y1={0} x2={600} y2={400} style={{stroke:"black",strokeWidth:2}}/>
            <line x1={600} y1={0} x2={0} y2={400} style={{stroke:"black",strokeWidth:2}}/>
            <polygon points="300,0 0,200 300,400 600,200" style={{fill:"none",stroke:"black",strokeWidth:2}}/>
            {
              array.map((item,index)=>{
                return(
                <>
                  <TextGenerator x={houseCoordinate[index+1].x} y={houseCoordinate[index+1].y}  house={index+1} lagna={personLagna} planetName={housePlanets[index+1]}/>
                </>
                )
              })
            } 
        </svg>
      <PlanetDescription planets={planets}/>
    </div>
  )
}
