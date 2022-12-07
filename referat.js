

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
    const employeenode = document.createTextNode(element.employee)
    const contactPersonnode = document.createTextNode(element.currentContactPerson);
    const corporation = document.createTextNode(element.currentCorporation);
    const reflink = document.createElement("a");
    reflink.href = "se_referat.html?id=" + element.id;
    reflink.innerHTML = "Se referat"

const nuller = document.createTextNode("Ingenting");

    const tabledev1 = document.createElement("td")
    const tabledev2 = document.createElement("td")
    const tabledev3 = document.createElement("td")
    const tabledev4 = document.createElement("td")
    const tabledev5 = document.createElement("td")
    const tabledev6 = document.createElement("td")

    tabledev1.appendChild(datenode)
    div.appendChild(tabledev1)
    tabledev1.setAttribute("title", element.date);

    tabledev2.appendChild(employeenode)
    div.appendChild(tabledev2)
    tabledev2.setAttribute("title", nuller);

    tabledev3.appendChild(corporation)
    div.appendChild(tabledev3)
    tabledev3.setAttribute("title", corporation);

    tabledev4.appendChild(contactPersonnode)
    div.appendChild(tabledev4)
    tabledev4.setAttribute("title", contactPersonnode);

    tabledev5.appendChild(subjectnode)
    div.appendChild(tabledev5)
    tabledev5.setAttribute("title", subjectnode);

    tabledev6.appendChild(reflink)
    div.appendChild(tabledev6)


    elementa.appendChild(div)

    
        
    });





}
getResponse();


