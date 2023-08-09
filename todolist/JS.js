
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#new-task-input");
    const liste_el = document.querySelector("#taches");
    
    form.addEventListener('submit', (e) => {
        
        e.preventDefault();

        const tache = input.value;

        if(!tache){
            alert("Veuillez remplir la case svp!!!");
            return;
        }

        const tache_el = document.createElement("div");
        tache_el.classList.add("tache");

        const tache_contenu_el = document.createElement("div");
        tache_contenu_el.classList.add("contenu");
        tache_contenu_el.innerText = tache;

        tache_el.appendChild(tache_contenu_el);

        const tache_input_el = document.createElement("input");
        tache_input_el.classList.add("text");
        tache_input_el.type = "text";
        tache_input_el.value = tache;
        tache_input_el.setAttribute("readonly", "readonly");

        tache_contenu_el.appendChild("tache_input_el");

        const tache_boutons_el = document.createElement("div");
        tache_boutons_el.classList.add("boutons");

        const tache_Enregistrer_el = document.createElement("button");
        tache_Enregistrer_el.classList.add("Enregistrer");
        tache_Enregistrer_el.innerHTML="Enregistrer";

        const tache_Supp_el = document.createElement("button");
        tache_Supp_el.classList.add("Supp");
        tache_Supp_el.innerHTML = "Supp";

        tache_boutons_el.appendChild("tache_Enregistrer_el");
        tache_boutons_el.appendChild("tache_Supp_el");
        
        tache_el.appendChild("tache_boutons_el");

        liste_el.appendChild(tache_el);

        input.value = "";

        tache_Enregistrer_el.addEventListener('click', () => {
            if(tache_Enregistrer_el.innerText.toLowerCase() == "Enregistrer"){
                tache_input_el.removeAttribute("readonly");
                tache_input_el.focus();
                tache_Enregistrer_el.innerText = "Save";
            } else {
                tache_input_el.setAttribute("readonly","readonly");
                tache_Enregistrer_el.innerText = "Enregistrer"; 
            }
        });

        tache_Supp_el.addEventListener('click', () => {
            liste_el.removeChild(tache_el);
        });
    });

});