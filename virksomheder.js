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
    data.forEach(element => {
        
        updatePage(element);
    });
}


function updatePage(element) {
    console.log(element.currentEmployments)

        const elementa = document.getElementById("virksomheder");
        const div = document.createElement("div");
        div.classList.add("col-md-3");
        div.setAttribute("title", element.name);
        const imgtag = document.createElement("img");
        imgtag.setAttribute('src', element.CorporationLogo.imageString);
        imgtag.style.width = "200px";
        imgtag.style.height = "150px";
        const titletag = document.createElement("h4");
        const titlenode = document.createTextNode(element.name);
        titletag.appendChild(titlenode);
        const paragraph = document.createElement("p");
        const addressnode = document.createTextNode("Adresse: " + element.address);
        const citynode = document.createTextNode("By: " + element.city);
        const countrynode = document.createTextNode(element.country);
        const contactPersonnode =document.createTextNode("Kontaktperson(er):")
        paragraph.appendChild(addressnode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(citynode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(countrynode);
        paragraph.innerHTML += "<br>";
        paragraph.appendChild(contactPersonnode);
        paragraph.innerHTML += "<br>";

        if(element.currentEmployments.length > 1){
            element.currentEmployments.forEach(test => {
                const newlink = document.createElement('a');
                newlink.href = "kontaktpersoner.html?name=" + test.contactPersonName;
                
                newlink.innerHTML += test.contactPersonName;
                const comma = document.createTextNode(",");

                paragraph.appendChild(newlink);
                paragraph.append(comma);
                
            });
        }else if(element.currentEmployments.length = 1){
            const newlink = document.createElement('a');
                newlink.href = "kontaktpersoner.html?name=" + element.currentEmployments[0].contactPersonName;
                
                newlink.innerHTML += element.currentEmployments[0].contactPersonName;
                paragraph.appendChild(newlink);
        }else if (element.currentEmployments[0] == undefined) {
            contactPersonnode = document.createTextNode("Ingen kontaktperson");

        }
        paragraph.classList.add("ignore-me");
        const editbutton = document.createElement("button");
        const removebutton = document.createElement("button");
        const editlink = document.createElement("a");
        const removelink = document.createElement("a");
        editlink.href = "opdater_virksomhed.html?id=" + element.id;
        editbutton.innerHTML = "Ret";
        removebutton.innerHTML = "Arkiver";
        removebutton.setAttribute("onclick", "archive(" + element.id + ")");

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

    }
    getResponse();

    async function archive(corpId) {
        if (confirm('Er du sikker på at du vil arkivere denne virksomhed')) {

            const response = await fetch(
                'http://localhost:8080/archiveCorporation?corpID=' + corpId,
                {
                    method: 'PUT',

                }
            );
            window.location.href = "/virksomheder.html";
        }
    }



