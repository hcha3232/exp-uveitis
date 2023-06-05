let disAntGroup = ['cmv','hsv','vzv','fus','jia','hlab27','tinu']

let x = ``

x += `<div class="accordion" id="accordionExample">`
x += `
<div style="padding: 1.25rem;">
    <h2>Anterior Uveitis</h2>
</div>
`

for (let i = 0; i < disAntGroup.length; i++){
    x += accor_item(disAntGroup[i]);
}

x += `</div>`

document.getElementById("accor").innerHTML = x;

function accor_item(dis){
    let accorDiv = `
    <div class="accordion-item">
    <h2 class="accordion-header" id='heading-${dis}'>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${dis}" aria-expanded="false" aria-controls="collapse${dis}">
        ${diseases[dis].realName}
      </button>
    </h2>
    <div id="collapse${dis}" class="accordion-collapse collapse" aria-labelledby="heading-${dis}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${database[dis]}
      </div>
    </div>
  </div>
    `
    return accorDiv;
}