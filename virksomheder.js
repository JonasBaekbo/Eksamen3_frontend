async function getResponse() {
	const response = await fetch(
		'http://localhost:8080/showCorporations',
		{
			method: 'GET',
			
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
    const elementa = document.getElementById("virksomheder");
    data.forEach(element => {
        const div = document.createElement("div");
    div.classList.add("col-md-3");
    const imgtag = document.createElement("img");
    imgtag.src = element.logo;
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    const paragraph = document.createElement("p");
    const addressnode = document.createTextNode("Adresse: " +element.address);
    const citynode = document.createTextNode("By: " + element.city);
    const countrynode = document.createTextNode(element.country);
    const contactPersonnode = document.createTextNode("Kontaktperson: "+element.currentEmployments);
    paragraph.appendChild(addressnode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(citynode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(countrynode);
    paragraph.innerHTML += "<br>";
    paragraph.appendChild(contactPersonnode);
    const editbutton = document.createElement("button");
    const removebutton = document.createElement("button");
    const editlink = document.createElement("a");
    const removelink = document.createElement("a");
    editlink.href = "opdater_virksomhed.html?id=" +element.id;
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


