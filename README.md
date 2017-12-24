<h2> instruction to install and run the  api</h2>
<p>I assume you already installed nodejs latest (v8.9.3) and npm so first clone the repo git@github.com:mohamedrasvi/challenge-1.git.
and then install all the dependencies (cd challenge-1 and run the npm install).
After running those commands, you will see a node_modules folder containing all of the project dependencies specified in the package.json. 

finally run the nodejs server from terminal npm run dev (from the project root directory).
</p>

<p> <b>(Method post)</b> you can then check the api from postman or whatever the rest client that you use. URL <b>(method post)</b> http://localhost:8000/offers/  (please note get method not supported  on this route)

Postman : Request Parameters
In Postman, go to the Body tab and add some key-value pairs, after selecting the x-www-form-urlencoded radio button. 
key must be (amount and orderby)
example
amount:47000
orderby:asc .
This will add encoded form data to your request, which you’ll be able to process with your API.
</p>

<p align="center">
  <a href="https://www.netlolo.com">
      <img src="https://app.netlolo.com/images/logo_vertical.png" alt="Netlolo"/>
  </a>
</p>

## Challenge for Backend Developer

A customer needs to search in our orderbook (available in this <a href="https://github.com/NetloloIncubadora/challenge/blob/master/orderbook.json">JSON</a>) and he wants to buy offers below some price also sell offer offer to recieve some money.
Based on this you will need to develop:

- a simple API to search offers in the .json available;
- it should be possible to search for offer by their amount (one or more);
- it must be possible to order the result by price (asc and desc);

The test should be done in Node(ECMAScript6). We expect at the end of the test, outside the API running, the following items:

- an explanation of what is needed to make your project work;
- an explanation of how to perform the tests;

Remember that at the time of the evaluation we will look at:

- Code organization;
- Object-Oriented Principles;
- Maintenance;

To send us your code, you must:

Make a fork of this repository, and send us a pull-request.
