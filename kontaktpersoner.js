async function getResponse() {
    // Check for id in URL
    let apiUrl = "";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if ((id != null) && (id != "")) {
        apiUrl = "http://localhost:8080/findContactPersonById?contactID=" + id;
    } else {
        apiUrl = 'http://localhost:8080/getAllContactPersons'
    }

    const response = await fetch(
        apiUrl,
        { method: 'GET' },
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    $('#kontaktpersoner').html('');

    if ($.isArray(data)) {
        data.forEach(element => {
            updatePage(element);
        });
    } else {
        updatePage(data);
    }
}

function updatePage(element) {
    const elementa = document.getElementById("kontaktpersoner");

    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.setAttribute("title", element.name);

    const imgtag = document.createElement("img");
    imgtag.setAttribute('src', element.cpimage.imageString);
    imgtag.style.width = "200px";
    imgtag.style.height = "150px";
    const titletag = document.createElement("h4");
    const titlenode = document.createTextNode(element.name);
    titletag.appendChild(titlenode);
    const paragraph = document.createElement("p");
    // const corpnode = document.createTextNode("Kontaktperson for: " +element.currentEmployments[0].corporationName);
    var corpnode;
    var positionnode
    var phonenrnode
    var emailnode
    var addedToCorpnode
    var movedFromCorpe


    if (element.currentEmployments.length >= 1) {
        corpnode = document.createTextNode("Kontaktperson for: " + element.currentEmployments[0].corporationName);
        positionnode = document.createTextNode("Stilling: " + element.currentEmployments[0].position);
        phonenrnode = document.createTextNode("Telefonnummer: " + element.currentEmployments[0].phonenumber);
        emailnode = document.createTextNode("E-mail: " + element.currentEmployments[0].email);
        addedToCorpnode = document.createTextNode("P??begyndt samarbejde: " + element.currentEmployments[0].addedToCorporation);
        movedFromCorpe = document.createTextNode("Endt samarbejde: " + element.currentEmployments[0].movedFromCorporation);
    }
    else {
        corpnode = document.createTextNode("Kontaktperson for: Ingen virksomhed");
        positionnode = document.createTextNode("Stilling: Ingen virksomhed");
        phonenrnode = document.createTextNode("Telefonnummer: Ingen virksomhed");
        emailnode = document.createTextNode("E-mail: Ingen virksomhed");
        addedToCorpnode = document.createTextNode("P??begyndt samarbejde: Ingen virksomhed");
        movedFromCorpe = document.createTextNode("Endt samarbejde: Ingen virksomhed");
    }

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
    editlink.href = "opdater_kontaktperson.html?contId=" + element.id;
    editbutton.innerHTML = "Ret";
    removebutton.innerHTML = "Arkiver";
    removebutton.setAttribute("onclick", "archive(" + element.id + ")");
    editlink.appendChild(editbutton);
    removelink.appendChild(removebutton);


    div.appendChild(imgtag);
    div.appendChild(titletag);
    div.appendChild(paragraph);
    div.appendChild(editlink);
    div.appendChild(removebutton);
    elementa.appendChild(div);
    console.log(div);

}

getResponse();

async function archive(contId) {
    if (confirm('Er du sikker p?? at du vil arkivere denne kontaktperson')) {
        const response = await fetch(
            'http://localhost:8080/archiveContact?contactID=' + contId,
            {
                method: 'PUT',

            }
        );
    }
    window.location.href = "/kontaktpersoner.html";

}
