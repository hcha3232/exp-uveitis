let nav = document.getElementById("nav");
let navFooter = document.getElementById("nav-footer");
//<i class="bi bi-share"></i>
nav.innerHTML = `
<nav class=" shadow-sm navbar navbar-light bg-light fixed-top nav-border">
  <div class="container-fluid">

  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShare" aria-controls="offcanvasNavbar">
  <i class="bi bi-share"></i>
  </button>
    <div class="offcanvas offcanvas-end" style="width: 80%;" tabindex="-1" id="offcanvasShare" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header nav-border">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Share</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="d-flex p-2" ></div>
        <br>
        <div>Use the QR code and share this app!</div>
      </div>
    </div>


  
    


    <a class="navbar-brand" href="#" style="font-weight:600">Uveitis Diagnostic Tree</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" style="width: 80%;" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header nav-border">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
`

navFooter.innerHTML = `
<nav class="shadow-sm navbar navbar-light bg-light fixed-bottom nav-border" style="border-top: 1px solid #dddddd;">
  <div class="container-fluid" style="padding: 0px 30px 20px 30px; color: #444444">
    <a class="nav-link active" aria-current="page" href="/">
      <div style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-house-door"></i><span style="font-size:0.9rem;">Home</span></div>
    </a>


    <a class="nav-link" href="/classification.html">
      <div style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-card-list"></i><span style="font-size:0.9rem;">Criteria</span></div>
    </a>

    <!--a class="nav-link" href="#">
      <div style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-diagram-3"></i><span style="font-size:0.9rem;">Tree</span></div>
    </a-->


    <a class="nav-link" href="#">
      <div style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-info-circle"></i><span style="font-size:0.9rem;">Info</span></div>
    </a>
  </div>
</nav>
`