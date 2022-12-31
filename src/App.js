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
  const [isNewyear,setNewyear] = useState(false)
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
      <h1>{"Happy new year \nto you and your family"}</h1>
         <img src={require('./images/fireworks-celebrate.gif')} alt="my-gif" height={"100%"} width={"100%"}/>
         <h1 >{"from \nShankhadeep Sarkar"}</h1>
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
