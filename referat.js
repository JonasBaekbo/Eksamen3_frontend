

async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/getAllConversations',
		{
			method: 'GET',
			
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
    const elementa = document.getElementById("indhold");
    data.forEach(element => {
        const div = document.createElement("tr");
    //const titletag = document.createElement("h4");
    //const titlenode = document.createTextNode(element.name);
    //titletag.appendChild(titlenode);
    const subjectnode = document.createTextNode(element.subject);
    const summarynode = document.createTextNode(element.summary);
    const datenode = document.createTextNode(element.date);
    const contactPersonnode = document.createTextNode(element.currentEmployments);
    const corporation = document.createTextNode(element.currentcorporation);
    
    const tabledev1 = document.createElement("td")
    const tabledev2 = document.createElement("td")
    const tabledev3 = document.createElement("td")
    const tabledev4 = document.createElement("td")
    const tabledev5 = document.createElement("td")
    const tabledev6 = document.createElement("td")

    tabledev1.appendChild(datenode)
    div.appendChild(tabledev1)

    tabledev2.appendChild(corporation)
    div.appendChild(tabledev2)

    tabledev3.appendChild(contactPersonnode)
    div.appendChild(tabledev3)

    tabledev4.appendChild(subjectnode)
    div.appendChild(tabledev4)

    tabledev5.appendChild(summarynode)
    div.appendChild(tabledev5)

    tabledev6.appendChild(subjectnode)
    div.appendChild(tabledev6)


    elementa.appendChild(div)

    
        
    });





}
getResponse();


