window.addEventListener("load", function () { 
var fromNewForm = decodeURIComponent(window.location.href).indexOf('https://indeavr.sharepoint.com/sites/Smartsourcing/hhristov/hp/Lists/Aanvrager/NewForm.aspx') !== -1;   
var fromEditForm = decodeURIComponent(window.location.href).indexOf('https://indeavr.sharepoint.com/sites/Smartsourcing/hhristov/hp/Lists/Aanvrager/EditForm.aspx') !== -1;
    if (fromNewForm || fromEditForm) {        //hide all necessary fields at page load        var huidigRow = document.querySelector('span[id*=Huidig_x0020_registratienr]');        huidigRow.parentElement.parentElement.style.display = "none"
        var registratienrRow = document.querySelector('span[id*=Registratienr_x0020_oud_x0020_pr]');        registratienrRow.parentElement.parentElement.style.display = "none"
        var internRow = document.querySelector('span[id*=Intern_x0020_referentienummer_x0]');        internRow.parentElement.parentElement.style.display = "none"
        var allRadioButtons = document.querySelectorAll('input[id*=Bijzondere_x0020_gebruikskenmerk]');        for (radio in allRadioButtons) {            allRadioButtons[radio].onclick = function () {                if (this.value === 'Reeds in gebruik op andere locatie' ||                    this.value === 'Reeds in gebruik maar onder andere omstandigheden') {                    huidigRow.parentElement.parentElement.style.display = "table-row";                } else {                    huidigRow.parentElement.parentElement.style.display = "none";                }    if (this.value === 'Vervangt ander product') {     registratienrRow.parentElement.parentElement.style.display = "table-row";    }    else {     registratienrRow.parentElement.parentElement.style.display = "none";    }    if (this.value === 'Nieuw product enkel bestemd voor Materialen Labo'){     internRow.parentElement.parentElement.style.display = "table-row";    }    else {     internRow.parentElement.parentElement.style.display = "none";    }            }        }    }})