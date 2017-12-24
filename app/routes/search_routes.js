module.exports = function(app, db) {
	 app.post('/offers', (req, res) => {
		 
		    // You'll search your offers here
		 
		 // if amount request send
		  if (req.body.amount) {
			  
			  // declare obj variable from json file
			  let obj = db.asks;
              
			  // check the price base on amount send
			  function checPrice(obj) {
			      return obj[0] <= req.body.amount;
			  }

			  // create the myFilter function and use filter method from
				// checkPrice method out put
			  function myFilter() {
				 return db.asks.filter(checPrice);
			  }
			  
			  // declare filter object to a variable
			  let arrayFound = myFilter();
			  
			  // if oderby request send
			  if(req.body.orderby){
				  
			  if(req.body.orderby == 'desc'){
				  
			  let descending = arrayFound.sort((a, b) => b[0] - a[0]);
			  res.json({'asks':descending});
			  
		       } else{
		    	   
		      let ascending = arrayFound.sort((a, b) => a[0] - b[0]);
			  res.json({'asks':ascending}); 
			  
		       }
			  // else just send out put base on price filter
			  } else {
				  res.json({'asks': arrayFound});  
			  }
		      // show json daata without filter if there is no amount request
		      } else {
		        res.json(db.asks);
		      }
			 
		   res.end('end');
		  });
};