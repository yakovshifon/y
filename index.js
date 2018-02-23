var mysql = require('mysql')

var con = mysql.createConnection({
	host: "localhost",
	user: "test",
	password: "123456",
	database: "lesson"
})

con.connect(function(err){
	con.query("SELECT * FROM first", function(err,result,fields){
		console.log('Connection completed')

	})
})