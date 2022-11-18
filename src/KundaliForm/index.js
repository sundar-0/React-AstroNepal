import React,{useEffect,useState,useRef} from 'react'
import './kundaliform.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import LagnaKundali from '../LagnaKundali';



export default function KundaliForm() {

 
  const [address,updateAddress]=useState([])
  const [target, setTargeted] = useState("")

  const [birthLocationGeo,updateBirthLocationGeo]=useState("");
  const [planets,setPlanets]=useState([])
  

  useEffect(() => {

  }, []);

  const fetchLocation=(e)=>{
    setTargeted(e.target.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=a08134655ca2794a028d146807010dc1`)
    .then(res=>res.json())

    .then(result=>{
      const filtered=address.filter((item,index)=>{
        return item.name!=result.name;
      })
      updateAddress([...filtered,{"country":result["sys"]["country"],'name':result["name"],"lat":result["coord"]["lat"],"lon":result["coord"]["lon"],"timezone":result["timezone"]/3600}])
    })
  }
  const generateKundali=async(e)=>{
    e.preventDefault();

      var userId = '621235';
      var apiKey = '1fffb2d17cfec746ed40ca08d6500cee';

      let dob=document.getElementById('dob').value
      let birthtime=document.getElementById('birthtime').value
      let dd=dob.split('-')[2]
      let mm=dob.split('-')[1]
      let yyyy=dob.split('-')[0]
      let hr=birthtime.split(':')[0]
      let min=birthtime.split(':')[0]
      let lat=birthLocationGeo["lat"]
      let lon=birthLocationGeo["lon"]
      let timezone=birthLocationGeo["timezone"]

      var data = {
        day:dd,
        month:mm,
        year:yyyy,
        hour:hr,
        min:min,
        lat:lat,
        lon:lon,
        tzone:timezone
        };


 

  //  await fetchastroDetails("Astro/astro_details",userId,apiKey,data);
   await fetchPlanetDetails("planets",userId,apiKey,data);
  }

  async function fetchastroDetails(api,userId,apiKey,data) {
    var options={
      url:"https://json.astrologyapi.com/v1/"+api,
      method:"POST",
      dataType:"json",
      headers:{ 
        "authorization": "Basic " + btoa(userId+":"+apiKey),
        "content-type":"application/json"      
      },
      data:JSON.stringify(data)
     
  }
 axios(options).then(res=>setPlanets(res.data))
  }


  async function fetchPlanetDetails(api,userId,apiKey,data){
    var options={
      url:"https://json.astrologyapi.com/v1/"+api,
      method:"POST",
      dataType:"json",
      headers:{ 
        "authorization": "Basic " + btoa(userId+":"+apiKey),
        "content-type":"application/json"      
      },
      data:JSON.stringify(data)
     
  }
 axios(options).then(res=>setPlanets(res.data))
  }

  return (
    <div className='kundaliformDiv'>

        <form id="kundaliform" onSubmit={generateKundali}>
        <div><h1>Kundali Form</h1></div>
            <div>
            <label>Enter Your Name</label>
            </div>
            <div>
            <input type="text" id='name'></input>
            </div>
            <div>
            <label>Date Of Birth:</label>
            </div>
            <div>
            <input type="date" id='dob'></input>
            </div>
            <div>
            <label>Birth Time</label>
            </div>
            <div>
            <input type="time" id='birthtime'></input>
            </div>
            <div>
            <label>Birth Place</label>
            </div>
            <div>
            <input  type="text" placeholder="Search location...." onChange={fetchLocation} value={target}/>
          <ul className='location'>
          {address.length!=0?address.map((item,index)=><li  className='location-item' onClick={()=>{
            updateAddress([])
            updateBirthLocationGeo(item)
            setTargeted(item.name)
          }}>{item.name} "{item.country}" ({item.lat}, {item.lon}) {item.timezone}hrs</li>):null}
          </ul>
            </div>
            <div>
            <button type="submit">Generate Kundali</button>
            </div>
        </form>
   <br/><br/>

        {planets.length!=0?<LagnaKundali planets={planets}/>:""}

    </div>
  )
}
