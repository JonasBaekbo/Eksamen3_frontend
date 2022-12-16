async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/getArchivedContactPersons ',
		{
			method: 'GET',
			
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
    $('#kontaktpersoner').html('');
    data.forEach(element => {
        updatePage(element);
    });
}

function updatePage(element) {
    const elementa = document.getElementById("kontaktpersoner");
    
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.setAttribute("title", element.name);

    const imgtag = document.createElement("img");
    //imgtag.src = element.logo;
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    
    div.appendChild(imgtag);
    div.appendChild(titletag);
    

    element.employmentHistory.forEach(employment => {
        const paragraph = document.createElement("p");
        
        const corptext = document.createTextNode("Kontaktperson for: " +employment.corporationName);
        const startDate = (new Date((employment.addedToCorporation)).toISOString().substring(0, 10));
        const endDate=(new Date((employment.movedFromCorporation)).toISOString().substring(0, 10))
        const positionnode = document.createTextNode("Stilling: " + employment.position);
        const phonenrnode = document.createTextNode("Telefonnummer: " + employment.phonenumber);
        const emailnode = document.createTextNode("E-mail: "+employment.email);
        const startNode = document.createTextNode("Påbegyndt samarbejde: "+startDate);
        const endnode = document.createTextNode("Ophørt samarbejde: "+endDate);    
        
        paragraph.appendChild(corptext);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(positionnode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(phonenrnode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(emailnode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(startNode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(endnode);
    
        div.appendChild(paragraph);
    });

    elementa.appendChild(div);
    console.log(div);
}

getResponse();

