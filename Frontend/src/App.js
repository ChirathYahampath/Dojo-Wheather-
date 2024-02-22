
import './App.css'; 
import axios from 'axios';
import AccessibleTable from './Components/AccessibleTable';


function App() {

  // useEffect(()=>
  // axios.get(`https://localhost:7253/WeatherForecast`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // )

  

  return (
    <section className='Accessibletable'>
    <div className='App'>
      {/* <MainPage/> */}
      <AccessibleTable/>
      </div>
      </section>
  );
}

// var res = axios.get("https://localhost:7253/WeatherForecast");
// console.log("res",res);
///////////////////////////
// var res = {  
//   get: function ()  
//    {  
//     console.log("res :",res);  
//   }  
// // };  
// var resl = Object.create(res);  
// console.log("res :",resl);  
// res.value = ""; 
// res.get();  

 export default App;
    
