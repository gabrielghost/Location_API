This is the API distance calculator.

Steps to get it running:

1. Npm i in this direcotry to load all the dependencies

2. npm start to get the server running

3. To upload data and simulate the client passing JSON data to the api, we can use a REST client like Insomnia or Postman to make a POST request to the following URL:

  http://localhost:8888/location

Here is some example JSON data formatted in a way the application expects - copy and paste the json strings ('files') into the REST client to test the app.

**Please ensure that you have your mongodb server running by typing in mongod into the terminal: **

Also, the record ID's are used to retrieve the records later, so once added, store a couple to test out the distance calculator

```
  {
		"name": "Paris",
		"lat": "48.858093",
		"lng": "2.294694",
		"description": "City Of Romance",
		"notes": "Make sure you visit the Eiffel Tower"
	}
	{
		"name": "Los Angeles",
		"lat": "34.052235",
		"lng": "-118.243683",
		"description": "City Of Angels",
		"notes": "Drive down the PCH to Malibu and beyond - you'll find yourself in Eureka California!"
	}
	{
		"name": "Berlin",
		"lat": "52.520008",
		"lng": "13.404954",
		"description": "City Of Spies",
		"notes": "'First we take Manhatten, then we take Berlin!' - Leonard Cohen"
	}
	{
		"name": "London",
		"lat": "51.509865",
		"lng": "-0.118092",
		"description": "City Of The Black Cab and Red Phone Box",
		"notes": "Go for tea with the Queen!"
	}
	{
		"name": "Varanasi",
		"lat": "25.321684",
		"lng": "82.987289",
		"description": "The Hindu Capital Of The World",
		"notes": "Die here and you'll attain Mukti"
	}
```

  4. To download a list of the registered cities, make a GET request to the following endpoint:

    http://localhost:8888/locations/names

  5. To download an individual record, with the corresponding distance calculation to the Berlin office, please make a GET request. Exchange the ID part for an ID that you will have generated (and hopefully saved) above. If you failed to save any ID's for this section, then make a GET request to the following endpoint (http://localhost:8888/locations) and then select an ID for the below calculation:

    http://localhost:8888/locations/:id

  for example (it won't work with your instance, it's just for illustration):

    http://localhost:8888/locations/5cd16949346bfc2374b2cedb
