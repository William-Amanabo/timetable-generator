const express = require('express')
const {spawn} = require('child_process');
//const {PythonShell} = require('python-shell');
const fs = require('fs');
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())

app.post('/predict', (req, res) => {
var largeDataSet = [];
 // spawn new child process to call the python script
 console.log('req.body',req.body)
fs.writeFile('./test_files/test.json',JSON.stringify(req.body),()=>{

const python = spawn('python', ['myScheduler.py']);
 // collect data from script
 /* python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  largeDataSet.push(data);
 }); */
 // in close event we are sure that stream is from child process is closed
 python.on('exit', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 //res.send(largeDataSet.join(""))
 //res.sendFile(__dirname +'/solution_files/sol_test.json');
 let rawdata = fs.readFileSync(path.resolve(__dirname,'solution_files/sol_test.json'));
 let data = JSON.parse(rawdata)
 //let thing = require('./solution_files/sol_test.json')
 //console.log(thing)
 res.send(JSON.stringify(data));
 });

});
 
 
})

app.use(express.static('./timetable-generator-master'))

app.get('/',(req,res)=>{
    res.sendFile('./timetable-generator-master/index.html')
})

app.listen(port, () => console.log(`Example app listening on port 
${port}!`))