import React,{useState,useEffect, useReducer} from 'react'
import './lagnakundali.css'
import PlanetDescription from '../PlanentDescription'

function TextGenerator(props){
  return(
    <text >
      <tspan x={props.x} y={props.y} > {props.planetName} {props.house===1?props.lagna:props.lagna+props.house-1%12===0?1:props.lagna+props.house-1>12?props.lagna+props.house-1-12:props.lagna+props.house-1}</tspan>
     </text>
  )
}

export default function LagnaKundali ({planets}) {
var personLagna=0
var houseList=[1,2,3,4,5,6,7,8,9,10,11,12]
var tempDict={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[]}
var houseInitialCoordinate={
    1:{x:260,y:120},
    2:{x:120,y:40},
    3:{x:50,y:100},
    4:{x:150,y:200},
    5:{x:40,y:300},
    6:{x:100,y:370},
    7:{x:280,y:300},
    8:{x:400,y:350},
    9:{x:530,y:290},
    10:{x:420,y:200},
    11:{x:520,y:110},
    12:{x:420,y:40}
}
var zodiac_sign={
    Aries:1,
    Taurus:2,
    Gemini:3,
    Cancer:4,
    Leo:5,
    Virgo:6,
    Libra:7,
    Scorpio:8,
    Sagittarius:9,
    Capricorn:10,
    Aquarius:11,
    Pisces:12
  }
planets.map(function(item,index){

  if(item.name==="Ascendant"){
   personLagna=zodiac_sign[item.sign]
  }
  else{
  if(tempDict[item.house].length!==0){
   let prev_planet_index=tempDict[item.house].length-1
   let {x,y}=tempDict[item.house][prev_planet_index].coordinate_pos

   tempDict[item.house].push({
     planetName:item.name,
     sign:item.sign,
    coordinate_pos:{x:x,y:y+15}
   })
  }
  else{
     tempDict[item.house].push({
       planetName:item.name,
       sign:item.sign,
       coordinate_pos:houseInitialCoordinate[item.house]
     })
  }
}
  return [];
  })
return (
    <div className="chart">
      <h1>LagnaKundali</h1>
     
        <svg height={400} width={600} style={{border:"4px solid black"}}>
            <line x1={0} y1={0} x2={600} y2={400} style={{stroke:"black",strokeWidth:2}}/>
            <line x1={600} y1={0} x2={0} y2={400} style={{stroke:"black",strokeWidth:2}}/>
            <polygon points="300,0 0,200 300,400 600,200" style={{fill:"none",stroke:"black",strokeWidth:2}}/>
           
           {
             houseList.map(house=>{
              return(
              tempDict[house].length===0?<TextGenerator x={houseInitialCoordinate[house].x} y={houseInitialCoordinate[house].y} planetName={""} house={house} lagna={personLagna}/>
                :
              tempDict[house].map((planet)=> <TextGenerator x={planet['coordinate_pos'].x} y={planet['coordinate_pos'].y} planetName={planet.planetName} house={house} lagna={personLagna}/>
             )

           )
           })
          }
        </svg>
      <PlanetDescription planets={planets}/>
    </div>
  )
}
