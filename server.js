var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'adminadmin',
		database : 'products',
	});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

	
app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Product Store";
	res.json(data);
});

app.get('/product',function(req,res){
	var data = {
		"error":1,
		"Products":""
	};
	
	connection.query("SELECT * from product",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["Products"] = rows;
			res.json(data);
		}else{
			data["Products"] = 'No products found..';
			res.json(data);
		}
	});
});

app.post('/product',function(req,res){
	var Productname = req.body.productname;
	var Producttype = req.body.producttype;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Products":""
	};
	if(!!Productname && !!Producttype && !!Price){
		connection.query("INSERT INTO product VALUES('',?,?,?)",[Productname,Producttype,Price],function(err, rows, fields){
			if(!!err){
				data["Products"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Products"] = "Product Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Products"] = "Please provide all required data (i.e : Productname, Producttype, Price)";
		res.json(data);
	}
});

app.put('/product',function(req,res){
	var Id = req.body.id;
	var Productname = req.body.productname;
	var Producttype = req.body.producttype;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Products":""
	};
	if(!!Id && !!Productname && !!Producttype && !!Price){
		connection.query("UPDATE product SET ProductName=?, ProductType=?, Price=? WHERE id=?",[Productname,Producttype,Price,Id],function(err, rows, fields){
			if(!!err){
				data["Products"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Products"] = "Updated Product Successfully";
			}
			res.json(data);
		});
	}else{
		data["Products"] = "Please provide all required data (i.e : id, Productname, Producttype, Price)";
		res.json(data);
	}
});

app.delete('/product',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"Products":""
	};
	if(!!Id){
		connection.query("DELETE FROM product WHERE id=?",[Id],function(err, rows, fields){
			if(!!err){
				data["Products"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Products"] = "Delete Product Successfully";
			}
			res.json(data);
		});
	}else{
		data["Products"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
});

http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});