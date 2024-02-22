import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { ClassNameConfigurator } from '@mui/base';
import { useState } from "react";
import { Button } from '@mui/material';



// const rows = [ 
//   createData('name', ),
//   createData('xsrfCookieName', ),
//   createData('xsrfHeaderName',),
// ];

 function AccessibleTable() {
  
  const [weatherData, setWeatherData] = useState([]);
  console.log("weatherData ->",weatherData);

  async function getData(){
   // var res = axios.get("https://localhost:7253/WeatherForecast");
    

    axios.get(`https://localhost:7253/WeatherForecast`)
      .then(res => {
        setWeatherData(res.data);
      })
  }

  async function clearData(){
    setWeatherData([])
   }

    
  
  // const data =[{"name1":"xxxxxxx","name2":"yyyyyyy","name3":"zzzzzzz","name4":"mmmmmmm"},{"name1":"xxxxxxx","name2":"yyyyyyy","name3":"zzzzzzz","name4":"mmmmmmm"}  ];
  // function createData(date, summary, temperatureC, temperatureF) {
  // return { date, summary, temperatureC, temperatureF };
  // }

  return (
    <center>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
      <caption>My Agrithmics WeatherForecast</caption><center/>


            
            <TableCell align="right">date</TableCell>
            <TableCell align="right">summary</TableCell>
            <TableCell align="right">temperatureC</TableCell>
            <TableCell align="right">temperatureF</TableCell>
          
        
        <TableBody>
          {weatherData.map((row) => (
           
            <TableRow key={row.date}
            
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.date}

              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
              <TableCell align="right">{row.temperatureC}</TableCell>
              <TableCell align="right">{row.temperatureF}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      
      <Button onClick={getData}>
            click
          </Button>
          <Button onClick={clearData}>
            Clear
          </Button>
    </TableContainer>
    </center>


  );
 
}

export default AccessibleTable; 