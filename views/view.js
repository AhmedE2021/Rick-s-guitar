import Guitar from "../utils/guitarclass.js";

export default class View {
    constructor(controller){
        const self = this;
        const snSearchform = document.getElementById("snSearchform");
        const snField = document.getElementById("snField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm")
        const builder = document.getElementById("builder")
        const model = document.getElementById("model")
        const type = document.getElementById("type")
        const backwood = document.getElementById("backwood")
        const topwood = document.getElementById("topwood")
        const price = document.getElementById("price")
        const showAllGuitarsButton = document.getElementById("showAllGuitarsButton");
        const guitarDialogForm = document.getElementById("guitarDialogForm");
        const addGuitarButton = document.getElementById("addGuitarButton");
        const guitarDialog = document.getElementById("guitarDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnField = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm")
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn")

        self.controller = controller;

        /*  showAllGuitarsButton.onclick = function() {
            self.controller.showAllGuitars();
        }  */


         // show and hide toggle button
        showAllGuitarsButton.onclick = function () {
            const data= showAllGuitarsButton.getAttribute('data-value');
        
            if (data==="Show all guitars"){
                showAllGuitarsButton.innerHTML="Hide all guitars";
                showAllGuitarsButton.setAttribute('data-value', 'Hide all guitars');
                self.controller.showAllGuitars(Guitar);
               
        }
        
        else{
            showAllGuitarsButton.innerHTML="Show all guitars"
            showAllGuitarsButton.setAttribute('data-value', 'Show all guitars');
            searchResult.innerHTML = ""
        }
        }


        snSearchform.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalGuitar = new Guitar ("", price.value, builder.value,
            model.value, type.value, backwood.value, topwood.value);
            self.controller.search(optimalGuitar);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }
        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim")
        }

        // Dialog event handler
        addGuitarButton.onclick = function() {
            guitarDialogForm.reset();
            guitarDialog.showModal();
        }

        cancelButton.onclick = function() {
            guitarDialog.close()
        }

        guitarDialogForm.onsubmit = function() {
            self.controller.newGuitar({
                serialNumber: document.getElementById("snfield").value,
                builder: document.getElementById("builderfield").value,
                model: document.getElementById("modelfield").value,
                type: document.getElementById("typefield").value,
                backwood: document.getElementById("snfield").value,
                topwood: document.getElementById("snfield").value,
                price: parseFloat(document.getElementById("pricefield").value)

            })
        }
        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON"){
                hiddenSnField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function() {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function() {
            self.controller.deleteGuitar(hiddenSnField.value);
            self.controller.showAllGuitars();
        }

       
        


    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element 
        element.insertAdjacentHTML("beforeend", template)
    }

    snackbar(snackmessage){
        const snackbar = document.getElementById("snackbar")
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className=snackbar.className.replace("show","");
        },3000)
        }



    }

