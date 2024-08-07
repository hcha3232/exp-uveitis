import { auPhenotypes } from "./phenotype.js"
import { iuPhenotypes } from "./phenotype.js"
import { puPhenotypes } from "./phenotype.js";

let phenotype = auPhenotypes;
let uveitis = ''

let x = ``

for(let k=0; k< 3; k++){
  if(k==0){phenotype = auPhenotypes; uveitis = 'Anterior Uveitis' }
  else if(k==1){phenotype = iuPhenotypes; uveitis = 'Intermediate Uveitis'}
  else if(k==2){phenotype = puPhenotypes; uveitis = 'Posterior and Panuveitis'}

  x += `<div class="accordion" id="accordionExample-${k}">`
  x += `
  <div style="padding: 1.25rem;">
      <h2>${uveitis}</h2>
  </div>
  `
  for (let i = 0; i < phenotype.length; i++){
    x += accor_item(phenotype[i],k);
  }
}

x += `</div>`

document.getElementById("accor").innerHTML = x;

function accor_item(dis,k){
    let accorDiv = `
    <div class="accordion-item">
      <h2 class="accordion-header" id='heading-${dis.name.replace(/\s+/g, '-')}'>
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${dis.name.replace(/\s+/g, '-')}" aria-expanded="false" aria-controls="collapse${dis.name.replace(/\s+/g, '-')}">
          ${dis.fullName}
        </button>
      </h2>
      <div id="${dis.name.replace(/\s+/g, '-')}" class="accordion-collapse collapse" aria-labelledby='heading-${dis.name.replace(/\s+/g, '-')}' data-bs-parent="#accordionExample-${k}">
        <div class="accordion-body">
          ${dis.criteria}
        </div>
      </div>
  </div>
    `

  
    return accorDiv;
}

// Event listener for accordion buttons to track clicks
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    // Read the aria-expanded attribute
    // Use a small delay to ensure aria-expanded is updated
    setTimeout(() => {
      let isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Fire GTM event
      if (isExpanded) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'accordionExpand',
          'accordionName': this.textContent.trim()
        });
      }
      
    }, 0)
  });
});