import DataObject from "../Model/data.js"
import StudentsPage from "./ViewStudents.js";

export default class ViewHome {
  constructor() {
    this.root = document.getElementById("root");
    this.root.innerHTML += this.header();
    this.root.innerHTML += this.nav();
    this.root.innerHTML += this.main();
    this.selectedPageStyle();
    this.pageChanger();
    this.data = new DataObject();
  }

  header = () => {
    let header = `
        <header>
        <a href="#">
            <h2><strong>Web</strong>App&trade;</h2>
        </a>
        <div class="user-info">
            <div class="icon"><i class="far fa-bell"></i></div>
            <img src="assets/images/member-1.jpg" alt="profile picture"/>
            <span>Student Name</span>
        </div>
    </header>
        `;

    return header;
  };

  nav = () => {
    let nav = `
        <nav>
      <div class="nav-buttons">
          <h2><strong>Web</strong>App&trade;</h2>
          <a id="#1" class="selected" href="#1"><i class="fas fa-home"></i></a>
          <a id="#2" href="#2"><i class="fas fa-people-arrows"></i></a>
          <a id="#3" href="#3"><i class="fas fa-hand-holding-heart"></i></a>
          <a id="#4" href="#4"><i class="fas fa-cogs"></i></a>
      </div>
    </nav>
        `;

    return nav;
  };

  main = () => {
    let main = `
        <main class="mainSection"></main>
        `;

    return main;
  };

  selectedPageStyle = () => {
    let navButtons = document.querySelector(".nav-buttons");

    navButtons.addEventListener("click", (e) => {
      let obj = e.target;
      if (
        obj.id == "#1" ||
        obj.id == "#2" ||
        obj.id == "#3" ||
        obj.id == "#4" ||
        obj.parentElement.id == "#1" ||
        obj.parentElement.id == "#2" ||
        obj.parentElement.id == "#3" ||
        obj.parentElement.id == "#4"
      ) {
        let allSelected = document.querySelectorAll(".selected");
        allSelected.forEach((i) => {
          i.classList.remove("selected");
        });

        if (obj.nodeName == "A") {
          obj.classList.add("selected");
        } else {
          obj.parentElement.classList.add("selected");
        }
      }
    });
  };

  dashboard = () => {
    let dashboard = `
        <section class="page page-1">
        <p>Here will be the dashboard</p>
        <br />
        <p>UNDER CONSTRUCTION</p>
        <br />
        <p>
          In meanwhile check out the RSVP page (third page on the site).
        </p>
      </section>
        `;

    return dashboard;
  };

  students = () => {
    let students = new StudentsPage();
    return students.students();
  };

  rsvp = () => {
    let rsvp = `
        <section class="page page-3">
        <div class="section-header">
            <div class="header-left">
                <div class="svg"><i class="fas fa-hand-holding-heart"></i></div>
                <div class="text-rsvp">
                    <h2>RSVP</h2>
                    <h4>MyCodeSchool App</h4>
                </div>
            </div>
            <div class="header-right">
                <form class="entry-form">
                    <input type="text" placeholder="Invite Someone" id="addPerson">
                    <button id="btnSubmit">Submit</button>
                </form>
            </div>
        </div>
        <div class="section-main">
            <div class="invitees-header">
                <h2>Invitees</h2>
                <label for="hide-people">Hide those who haven't responded <input type="checkbox" name="hide-people" id="hidePeople"></label>
            </div>
            <div class="people-cards">
                <div class="card">
                    <h3 class="card-header">John Doe</h3>
                    <label for="confirmed" class="confirmed-label">
                        Confirmed
                        <input type="checkbox" name="confirmed" class="confirmed-check">
                    </label>
                    <div class="card-buttons">
                        <button class="btnEdit">Edit</button>
                        <button class="btnRemove">Remove</button>
                    </div>
                </div>
                <div class="card">
                    <h3 class="card-header">Jane Doe</h3>
                    <label for="confirmed" class="confirmed-label">
                        Confirmed
                        <input type="checkbox" name="confirmed" class="confirmed-check">
                    </label>
                    <div class="card-buttons">
                        <button class="btnEdit">Edit</button>
                        <button class="btnRemove">Remove</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
        `;

    return rsvp;
  };

  settings = () => {
    let settings = `
        <div class="settings-page">
      <section class="messages">
        <h3>MESSAGE USER</h3>
        <div class="messages-container">
          <input type="text" placeholder="Search for user">
          <textarea name="message" rows="7" cols="45" placeholder="Message for User"></textarea>
          <button>SEND</button>
        </div>
        </section>
      <section class="settings">
      <h3>SETTINGS</h3>
      <div class="settings-container">
            <div class="toggle notifications">
              <span>Send Email Notifications</span>
              <input type="checkbox" name="checkbox" class="cm-toggle">
            </div>
            <div class="toggle profile-public">
              <span>Set Profile to Public</span>
              <input type="checkbox" name="checkbox" class="cm-toggle">
            </div>
            <select class="timeZones">
                <option value="none">Select a Time Zone</option>
                <option value="tz-1">Time Zone 1</option>
                <option value="tz-2">Time Zone 2</option>
                <option value="tz-3">Time Zone 3</option>
                <option value="tz-4">Time Zone 4</option>
            </select>
            <div class="settings-buttons">
                <button>SAVE</button>
                <button>CANCEL</button>
            </div>
        </div>
        </div>
      </section>
    </div>
        `;

    return settings;
  };

  pageChanger = () => {
    let main = document.querySelector(".mainSection");
    let navButtons = document.querySelector(".nav-buttons");
    main.innerHTML = "";
    main.innerHTML += this.dashboard();

    navButtons.addEventListener("click", (e) => {
      let obj = e.target;

      if (obj.id == "#1" || obj.parentElement.id == "#1") {
        main.innerHTML = "";
        main.innerHTML += this.dashboard();
        return;
      }
      if (obj.id == "#2" || obj.parentElement.id == "#2") {
        main.innerHTML = "";
        main.innerHTML += this.students();
        return;
      }
      if (obj.id == "#3" || obj.parentElement.id == "#3") {
        main.innerHTML = "";
        main.innerHTML += this.rsvp();
        this.rsvpFunction();
        return;
      }
      if (obj.id == "#4" || obj.parentElement.id == "#4") {
        main.innerHTML = "";
        main.innerHTML += this.settings();
        return;
      }
    });
  };

  rsvpFunction = () => {

    function createCard(text) {
      let card = document.createElement("div");
      card.classList.add("card");

      let nameTag = document.createElement("h3");
      nameTag.textContent = text;

      let label = document.createElement("label");
      label.for = "confirmed";
      label.className = "confirmed-label";
      label.textContent = "Confirmed ";

      let input = document.createElement("input");
      input.type = "checkbox";
      input.name = "confirmed";
      input.className = "confirmed-check";

      label.appendChild(input);

      let buttonDiv = document.createElement("div");
      buttonDiv.className = "card-buttons";

      let btnEdit = document.createElement("button");
      btnEdit.className = "btnEdit";
      btnEdit.textContent = "Edit";
      buttonDiv.appendChild(btnEdit);

      let btnRemove = document.createElement("button");
      btnRemove.className = "btnRemove";
      btnRemove.textContent = "Remove";
      buttonDiv.appendChild(btnRemove);

      card.appendChild(nameTag);
      card.appendChild(label);
      card.appendChild(buttonDiv);

      return card;
    }

    const form = document.querySelector(".entry-form");
    const input = document.querySelector("input");
    const peopleCards = document.querySelector(".people-cards");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!input.value) {
        alert("Please enter a name!");
      } else {
        let card = createCard(input.value);
        peopleCards.appendChild(card);
        input.value = "";
      }
    });

    //Highlight on Checkbox

    peopleCards.addEventListener("change", (e) => {
      const checkbox = e.target;
      const checked = checkbox.checked;
      const card = checkbox.parentNode.parentNode;
      if (checked) {
        card.classList.add("responded");
      } else {
        card.classList.remove("responded");
      }
    });

    //Edit and Remove

    peopleCards.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const card = button.parentNode.parentNode;
        const cardHolder = card.parentNode;
        if (button.textContent == "Remove") {
          cardHolder.removeChild(card);
        } else if (button.textContent == "Edit") {
          const h3 = card.firstElementChild;
          const input = document.createElement("input");
          input.type = "text";
          input.value = h3.textContent;
          card.insertBefore(input, h3);
          card.removeChild(h3);
          button.textContent = "Save";
        } else if (button.textContent == "Save") {
          const input = card.firstElementChild;
          const h3 = document.createElement("h3");
          h3.className = "card-header";
          h3.textContent = input.value;
          card.insertBefore(h3, input);
          card.removeChild(input);
          button.textContent = "Edit";
        }
      }
    });

    // Filter Confirmed

    let hidePeople = document.querySelector("#hidePeople");

    hidePeople.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      const allCards = peopleCards.children;

      if (isChecked) {
        for (let i = 0; i < allCards.length; i++) {
          let checkedCards = allCards[i];
          if (checkedCards.className == "card responded") {
            checkedCards.style.display = "";
          } else {
            checkedCards.style.display = "none";
          }
        }
      } else {
        for (let i = 0; i < allCards.length; i++) {
          let cards = allCards[i];
          cards.style.display = "";
        }
      }
    });
  };


}
