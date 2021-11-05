export default class ViewHome{

    constructor () {
        this.root = document.getElementById("root"); 
        this.root.innerHTML += this.header();
        this.root.innerHTML += this.nav();
        this.root.innerHTML += this.main();
        this.selectedPageStyle();
        this.pageChanger();
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
    }

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
    }

    mainOld = () => {
        let main = `
        <main class="mainSection">
      <section class="page page-1">
        <p>Here will be the dashboard</p>
        <br />
        <p>UNDER CONSTRUCTION</p>
        <br />
        <p>
          In meanwhile check out the RSVP page (third page on the site).
        </p>
      </section>
      <section class="page page-2">
        <p>Here will be the Students List</p>
        <br />
        <p>UNDER CONSTRUCTION</p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          eaque!
        </p>
      </section>
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
      <section class="page page-4 hide">
        <p>Settings Page</p>
        <br />
        <p>UNDER CONSTRUCTION</p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
        </p>
      </section>
    </main>
        `;

        return main
    }

    main = () => {
        
        let main = `
        <main class="mainSection"></main>
        `;
        
        return main;
    }

    selectedPageStyle = () => {
        let navButtons = document.querySelector(".nav-buttons");

        navButtons.addEventListener("click", e => {
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
              allSelected.forEach(i => {
                i.classList.remove("selected");
              });
              
              if(obj.nodeName == "A"){
                  obj.classList.add("selected");
              } else{
                  obj.parentElement.classList.add("selected");
              }
            }
          }); 
    }

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
    }

    students = () => {
        let students = `
        <section class="page page-2">
        <p>Here will be the Students List</p>
        <br />
        <p>UNDER CONSTRUCTION</p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          eaque!
        </p>
      </section>
        `;
        return students;
    }

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
    }

    settings = () => {
        let settings = `
        <section class="page page-4">
            <p>Settings Page</p>
            <br />
            <p>UNDER CONSTRUCTION</p>
            <br />
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum?
            </p>
        </section>
        `;

        return settings; 
    }

    pageChanger = () => {
        let main = document.querySelector(".mainSection");
        let navButtons = document.querySelector(".nav-buttons");
        main.innerHTML = "";
        main.innerHTML += this.dashboard();

        navButtons.addEventListener("click", e => {
            let obj = e.target;

            if(obj.id == "#1" || obj.parentElement.id == "#1"){
                main.innerHTML = "";
                main.innerHTML += this.dashboard();
                return;
            }
            if(obj.id == "#2" || obj.parentElement.id == "#2"){
                main.innerHTML = "";
                main.innerHTML += this.students();
                return;
            }
            if(obj.id == "#3" || obj.parentElement.id == "#3"){
                main.innerHTML = "";
                main.innerHTML += this.rsvp();
                return;
            }
            if(obj.id == "#4" || obj.parentElement.id == "#4"){
                main.innerHTML = "";
                main.innerHTML += this.settings();
                return;
            }
        })
    }
}