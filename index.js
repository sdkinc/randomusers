const containerElement = document.getElementById("container");
const picimgElement = document.getElementById("picimg");
const bioElement = document.getElementById("bio");
const contactsElement = document.getElementById("contacts");

async function getUserData() {
    const response = await fetch("https://randomuser.me/api/");
    const obj = await response.json();
    const { results } = obj;
    console.log(results);
    if (results.length > 0) {
        const profile = results[0];
        const { gender, picture, name, email, phone, cell, nat } = profile;
        const { title, first, last } = name;
        const { large } = picture;
        picimgElement.src = large;
        bioElement.innerText = `${title} ${first} ${last} (${gender})`;
        contactsElement.innerText = `e-mail:\t${email}\nphone:\t${phone}\ncell:\t${cell}`;

        const natElement = document.createElement("p");
        natElement.textContent = "Country: " + nat;
        containerElement.append(natElement);
    }
}

getUserData();