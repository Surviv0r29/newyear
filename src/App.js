import React,{useState,useEffect} from 'react';
import './App.css';
const NEWS_YEARS_EVE =new Date(2022,11,31,0,0,0)

const getTimedata = ()=>{
  const now = new Date();
  const timedata = NEWS_YEARS_EVE.getTime() - now.getTime();
  const days ="00"
  const hours = 24+Math.floor((timedata%(24*60*60*1000))/(60*60*1000))
  const minutes = 60+ Math.floor((timedata%(60*60*1000))/(60*1000))
  const seconds = 60+Math.floor((timedata%(60*1000))/1000)
  const year = now.getFullYear()
  return{
    days,
    hours,
    minutes,
    seconds,
    year
  }
}
function App() {
  const [countdown,setCountdown] = useState()
  const [isloading,setLoading] =useState(true)
  const [isNewyear,setNewyear] = useState(true)
  useEffect(()=>{
    const interval = setInterval(()=>{
      const timedelta = getTimedata()
      setCountdown(timedelta)
      setLoading(false)
      if(timedelta.year===2023){
        setNewyear(true)
      }
    },1000)
    return ()=>clearInterval(interval)
  })
  if(isloading){
    return <h1>Loading...</h1>
  }

  if(isNewyear){
    return <div className='container-new'>
      <div style={{ justifyContent:"center"}}>
        <img src={require('./images/fireworks-celebrate.gif')} alt="my-gif" height={"60%"} width={"100%"}/>
      <h1 className='font-medium'>{"In this light of the new year, may you find yourself as the best survivor. Know that every inch of you is carrying the courage to have all the success you have ever dreamt of. May this new year comes with all the resources to make your life a meaningful one in the upcoming days."}</h1>
         
         <h1 className='font-medium' >{"from \nShankhadeep Sarkar"}</h1>
      </div>
        
    </div>
  }
  return (
    <div className="container">
      
      <div className="flex">
          <span className="font-big">{countdown.days}</span>
          <span className="font-small">DAYS</span>
      </div>
      <div className="flex">
          <span className="font-big">{countdown.hours}</span>
          <span className="font-small">HOURS</span>
      </div>
      <div className="flex">
          <span className="font-big">{countdown.minutes}</span>
          <span className="font-small">MINUTES</span>
      </div>
      <div className="flex">
          <span className="font-big">{countdown.seconds}</span>
          <span className="font-small">SECONDS</span>
      </div>
    </div>
  );
}

export default App;
