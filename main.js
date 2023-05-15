const start = () => {


	gapi.client.init({
		'apiKey': 'AIzaSyDNy4dlPtoBqdqQdKlWEPeIFZLHuO9Y3l8',
		'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
	  })
	  .then(() => {
		return gapi.client.sheets.spreadsheets.values.get({
		  spreadsheetId: '1S7MatGXsAqN38W92Mb6C3GjawGFXXNZZmmhN65wX_iU',
		  range: 'task!A:C', // for example: List 1!A1:Bc
		})
	  })
	  .then((response) => {
		// parse the response data
		const loadedData = response.result.values;
		console.log(loadedData);
	
		// populate the HTML table with the data
		const table = document.getElementsByTagName('table')[0];
		
		// add column headers
		const columnHeaders = document.createElement('tr');
		for (let i = 0; i < loadedData[i].length; i++) {
		columnHeaders.innerHTML += `<th>${loadedData[0][i]}</th>`};
		table.appendChild(columnHeaders);
	
		// add table data rows
		for (let i = 1; i < loadedData.length; i++) {			
		  const tableRow = document.createElement('tr');
		  for (let j = 0; j < loadedData[i].length; j++) {
		  	tableRow.innerHTML += `<td>${loadedData[i][j]}</td>`
			};
		  table.appendChild(tableRow);
		}
	  }).catch((err) => {
		  console.log(err.error.message);
	  });

};

  gapi.load('client', start);
		
