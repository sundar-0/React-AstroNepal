export default function TextGenerator(props){
    var {x,y,house,lagna,planetName}=props;
    console.log(x,y,house,lagna,planetName)
    return(
        <text>
          <tspan x={x} y={y} >
          {planetName}&nbsp;
          ({
          house===1  ?
          lagna
          :
          lagna+house-1%12===0 ?
          1
          :
          lagna+house-1>12 ?
          lagna+house-1-12
          :
          lagna+house-1
          })
          </tspan>
         </text>
      )
    }