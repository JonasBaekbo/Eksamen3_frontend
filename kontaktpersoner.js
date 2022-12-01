async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/getAllContactPersons',
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
    const imgtag = document.createElement("img");
    imgtag.src = element.logo;
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    const paragraph = document.createElement("p");
    const corpnode = document.createTextNode("Kontaktperson for: " +element.corporation);
    const positionnode = document.createTextNode("Stilling: " + element.position);
    const phonenrnode = document.createTextNode("Telefonnummer: " + element.phone_number);
    const emailnode = document.createTextNode("E-mail: "+element.mail);
    paragraph.appendChild(corpnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(positionnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(phonenrnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(emailnode);
    const editbutton = document.createElement("button");
    const removebutton = document.createElement("button");
    const editlink = document.createElement("a");
    const removelink = document.createElement("a");
    editlink.href = element.id;
    editbutton.innerHTML = "Ret";
    removebutton.innerHTML = "Slet";
    removelink.href = "";
    editlink.appendChild(editbutton);
    removelink.appendChild(removebutton);


    div.appendChild(imgtag);
    div.appendChild(titletag);
    div.appendChild(paragraph);
    div.appendChild(editlink);
    div.appendChild(removelink);
    elementa.appendChild(div);
    console.log(div);
        
    });





}
getResponse();


