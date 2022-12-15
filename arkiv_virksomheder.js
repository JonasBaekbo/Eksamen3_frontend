async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/getArchivedCorporations',
		{
			method: 'GET',
			
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
    $('#virksomheder').html('');
    data.forEach(element => { 
        updatePage(element);
    });
}

function updatePage(element) { 
    const elementa = document.getElementById("virksomheder");
    
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.setAttribute("title", element.name);
    const imgtag = document.createElement("img");
    imgtag.src = element.logo;
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    const paragraph = document.createElement("p");
    const addressnode = document.createTextNode("Adresse: " +element.address);
    const citynode = document.createTextNode("By: " + element.city);
    const countrynode = document.createTextNode(element.country);
    var contactPersonnode;
    const cplink = document.createElement("a");
    if(element.currentEmployments[0] != undefined){
        cplink.href = "kontaktpersoner.html?name=" + element.currentEmployments[0].contactPersonName;
        cplink.innerHTML = element.currentEmployments[0].contactPersonName;
        contactPersonnode = document.createTextNode("Kontaktperson: ");

    }else if(element.currentEmployments[0] == undefined){
        cplink.href ="#";
        cplink.hidden = true;
        contactPersonnode = document.createTextNode("Ingen kontaktperson");
    }
    paragraph.appendChild(addressnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(citynode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(countrynode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(contactPersonnode);
    paragraph.appendChild(cplink);
    paragraph.classList.add("ignore-me");


    div.appendChild(imgtag);
    div.appendChild(titletag);
    div.appendChild(paragraph);
    elementa.appendChild(div);
    console.log(div);
    
}

getResponse();


