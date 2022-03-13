'use strict';

let contacts = {
    "people": [
        {
            "name": "Adam Wright",
            "email": "adam.wright@email.com",
            "photo": "./images/adam_wright.jpg",
            "education": [
                {
                    "institution": "NC State University",
                    "startYear": 2001,
                    "endYear": 2004,
                    "degree": "Bachelor's, Computer Science"
                }
            ],

            "workExperience": [
                {
                    "institution": "Megacorp",
                    "startYear": 2001,
                    "title": "Software Developer"
                }
            ]
        },
        {
            "name": "Joe Manfrey",
            "email": "joe.manfrey@email.com",
            "photo": "./images/joe_manfrey.jpg",
            "education": [
                {
                    "institution": "Clemson University",
                    "startYear": 1990,
                    "endYear": 1995,
                    "degree": "Bachelor's, Computer Science"
                }
            ],

            "workExperience": [
                {
                    "institution": "Food Inc.",
                    "startYear": 1998,
                    "title": "Software Developer"
                }
            ]
        },
        {
            "name": "Douglas Cho",
            "email": "douglas.cho@email.com",
            "photo": "./images/douglas_cho.jpg",
            "education": [
                {
                    "institution": "University of NC, Chapel Hill",
                    "startYear": 1990,
                    "endYear": 1995,
                    "degree": "Marketing"
                }
            ],

            "workExperience": [
                {
                    "institution": "Food Inc.",
                    "startYear": 1998,
                    "title": "Software Developer"
                }
            ]
        },
        {
            "name": "Allison Murray",
            "email": "allison.murray@email.com",
            "photo": "./images/allison_murray.jpg",
            "education": [
                {
                    "institution": "University of Southern California",
                    "startYear": 2001,
                    "endYear": 2005,
                    "degree": "Sociology"
                }
            ],

            "workExperience": [
                {
                    "institution": "United Products",
                    "startYear": 1998,
                    "title": "Directory of IT"
                }
            ]
        }
    ]
};

let contactInfo = document.getElementById('contact-info');
let contactInfoCont = document.getElementById('contact-info-cont');
const listOfContacts = document.getElementById('list-of-contacts');
let contactName = document.getElementById('contact-name');
let contactEmail = document.getElementById('contact-email');
let contactEmailA = document.getElementById('contact-email-a');
let contactEducationStart = document.getElementById('contact-education-start');
let contactEducationEnd = document.getElementById('contact-education-end');
let contactEducationInstitution = document.getElementById('contact-education-institution');
let contactEducationDegree = document.getElementById('contact-education-degree');
let contactExperienceStart = document.getElementById('contact-experience-start');
let contactExperienceInstitution = document.getElementById('contact-experience-institution');
let contactExperienceTitle = document.getElementById('contact-experience-title');
let contactPhoto = document.getElementById('contact-photo');
let sortOrderDiv = document.getElementById('sort-order-div');

console.log(contacts); 
console.log(contacts.people);
console.log(contacts.people[0].name);
console.log(contacts.people[0].education[0].institution);

for (let i = 0; i < contacts.people.length; i++) {
    let btnContact = document.createElement('button');
    btnContact.classList.add('btn-contact');
    btnContact.innerHTML = contacts.people[i].name;
    listOfContacts.appendChild(btnContact);
    btnContact.onclick = function () {
        contactInfo.classList.remove("hidden");
        welcomeText.classList.add('hidden');
        const btnContacts = document.getElementsByClassName("btn-contact");
        for (let i = 0; i < btnContacts.length; i++) {
            btnContacts[i].classList.remove("active");
        }
        btnContact.classList.add("active");
        for (let i = 0; i < contacts.people.length; i++) {
            if (contacts.people[i].name == btnContact.innerHTML) {
                contactName.innerHTML = contacts.people[i].name;
                contactEmail.innerHTML = contacts.people[i].email;
                contactEmailA.href = `mailto:${contacts.people[i].email}`;
                contactEducationStart.innerHTML = contacts.people[i].education[0].startYear;
                contactEducationEnd.innerHTML = contacts.people[i].education[0].endYear;
                contactEducationInstitution.innerHTML = contacts.people[i].education[0].institution;
                contactEducationDegree.innerHTML = contacts.people[i].education[0].degree;
                contactExperienceStart.innerHTML = contacts.people[i].workExperience[0].startYear;
                contactExperienceInstitution.innerHTML = contacts.people[i].workExperience[0].institution;
                contactExperienceTitle.innerHTML = contacts.people[i].workExperience[0].title;
                contactPhoto.style.backgroundImage = `url('${contacts.people[i].photo}')`;
                console.log(contacts.people[i].photo);
            }
        }
    }
};

contactInfo.classList.add("hidden");
let welcomeText = document.createElement('div');
welcomeText.classList.add("text-center");
welcomeText.innerHTML = `<h1>Welcome to your address book!</h1><p>Start browsing your contacts now!</p>`;
let welcomeIMG = document.createElement('img');
welcomeIMG.src = './images/welcome.png';
welcomeIMG.setAttribute('id','welcome-img');
contactInfoCont.appendChild(welcomeText);
welcomeText.appendChild(welcomeIMG);

let clearSearch = document.createElement("button");
clearSearch.innerHTML = '<i class="fas fa-ban"></i> Clear Search';
clearSearch.classList.add('clear-search');
clearSearch.onclick = function () {
    let btnContacts = document.getElementsByClassName("btn-contact");
    for (let i = 0; i < btnContacts.length; i++) {
        btnContacts[i].classList.remove("hidden");
    }
    clearSearch.remove();
    noResults.remove();
}

let noResults = document.createElement('p');
noResults.classList.add('no-results');
noResults.innerHTML = 'Sorry, there are no search results.';

function searchContacts() {
    let searchInput = document.getElementById("query");
    let filter = searchInput.value.toUpperCase();
    let btnContacts = document.getElementsByClassName("btn-contact");
    let noResultsCounter = 0;
    let yesResultsCounter = 0;
    for (let i = 0; i < btnContacts.length; i++) {
        let txtValue = btnContacts[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            btnContacts[i].classList.remove("hidden");
            yesResultsCounter++;
            console.log(yesResultsCounter);
            noResults.remove();
            if (yesResultsCounter >= btnContacts.length) {
                clearSearch.remove();
            }
        } else {
            btnContacts[i].classList.add("hidden");
            noResultsCounter++;
            console.log(noResultsCounter);
            listOfContacts.appendChild(clearSearch);
            if (noResultsCounter >= btnContacts.length) {
                listOfContacts.appendChild(noResults)
            }
        }
    }

}

const successSort = document.createElement("div");
successSort.classList.add("success-sort");
successSort.innerHTML = '<p><small><i class="fas fa-check-circle"></i> Your contacts are sorted by alphabetical order.</small></p>';


function sortList() {
    let i, shouldSwitch;
    let switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      let btnContacts = document.getElementsByClassName("btn-contact");
      // Loop through all list-items:
      for (i = 0; i < (btnContacts.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (btnContacts[i].innerHTML.toLowerCase() > btnContacts[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        btnContacts[i].parentNode.insertBefore(btnContacts[i + 1], btnContacts[i]);
        switching = true;
      }
    }
    sortOrderDiv.appendChild(successSort);
    function removeSuccessSort() {
        successSort.remove();
    }
    setTimeout(removeSuccessSort, 5000);
  }




/*
async function getContactsData() {

    const requestURL = '/data/people.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const contacts = await response.json();  
    console.log(contacts); 
    console.log(contacts.people);
    console.log(contacts.people[0].name);
    let names;
    for await (let i = 0; i < contacts.people.length; i++) {
        let btnContact = document.createElement('button');
        btnContact.classList.add('btn-contact');
        btnContact.innerHTML = contacts.people[i].name;
        listOfContacts.appendChild(btnContact);
        console.log(contacts.people[i].name);
    }



  }

getContactsData();
*/





/*
async function getContactsData() {

    const requestURL = '/data/people.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const contacts = await response.json();  
    //console.log(contacts); 
    return contacts;
  }

const contactsData = await getContactsData();
//contactsData = JSON.parse(contactsData);
console.log(contactsData);
*/
/*
async function getData(url) {
    const response = await fetch(url);
  
    return response.json();
};

getData('/data/people.json');

const data = await getData('/data/people.json');
  
console.log({ data });
*/


  /*
  let contactsData;

  fetch("./data/people.json")
  .then(response => {
     return response.json();
  })
  .then(jsondata => contactsData = jsondata);

console.log(contactsData); */
