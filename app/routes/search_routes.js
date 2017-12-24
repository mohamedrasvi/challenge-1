module.exports = function(app, db) {
	 app.post('/offers', (req, res) => {
		 
		    // You'll search your offers here
		 
		 // if amount request send
		  if (req.body.amount) {
			  
			
              // filter by amount
			  
			  let arrayFound = db.asks.filter(function (el) {
				  return el[0] <= req.body.amount
				});
		
			  
			  // if oderby request send
			  if(req.body.orderby){
				  
			  if(req.body.orderby == 'desc'){
				  
			  let descending = arrayFound.sort((a, b) => b[0] - a[0]);
			  res.send({'asks':descending});
			  
		       } else{
		    	   
		      let ascending = arrayFound.sort((a, b) => a[0] - b[0]);
			  res.send({'asks':ascending}); 
			  
		       }
			  // else just send out put base on price filter
			  } else {
				  res.send({'asks': arrayFound});  
			  }
		      // show json daata without filter if there is no amount request
		      } else {
		        res.send({'ask':db.asks});
		      }
			 
		   res.end('end');
		  });
};