async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/getArchivedContactPersons',
		{
			method: 'GET',
			
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
    const elementa = document.getElementById("kontaktpersoner");
    data.forEach(element => {
        const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.setAttribute("title", element.name);

    const imgtag = document.createElement("img");
    //imgtag.src = element.logo;
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    const paragraph = document.createElement("p");
    const corpnode = document.createTextNode("Kontaktperson for: " +element.currentEmployments[0].corporationName);
    const positionnode = document.createTextNode("Stilling: " + element.currentEmployments[0].position);
    const phonenrnode = document.createTextNode("Telefonnummer: " + element.currentEmployments[0].phonenumber);
    const emailnode = document.createTextNode("E-mail: "+element.currentEmployments[0].email);
    paragraph.appendChild(corpnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(positionnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(phonenrnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(emailnode);



    div.appendChild(imgtag);
    div.appendChild(titletag);
    div.appendChild(paragraph);

    elementa.appendChild(div);
    console.log(div);
        
    });





}
getResponse();


