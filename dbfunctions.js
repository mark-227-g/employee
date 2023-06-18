const mysql = require('mysql2');

function connecttodb(){
    const db = mysql.createConnection({
      host: 'localhost',  //process.env.DB_HOST,
      //port: process.env.DB_PORT,
      //connectTimeout:30000,
      port:3306,
      user: 'root', //process.env.DB_USER,
      password: 'BootCamp', //process.env.DB_PASSWORD,
      database: 'tracker_db' //process.env.DB_NAME
      /* connect */
    });
      db.connect((err)=> {
        if (err) {
          console.log('Error '+ err)
          return;
        }
        console.log("connected")
       
      });
      return db;
    }
    function closedb(db){
      db.end((err)=> {
        if (err) {
          console.log("Error "+err)
        }
        console.log("closed")
        return;
      })
    }

/****************************************
Exports
 ****************************************/
module.exports={connecttodb,closedb}