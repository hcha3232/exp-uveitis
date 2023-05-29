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
        <div class="d-flex p-2" ><img src="img/qrcode.png" style="max-width:100%;"/></div>
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
<ul class="nav bg-light fixed-bottom" style="border-top: 1px rgb(226, 229, 230) solid; padding: 10px 20px 20px 20px;">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">
        Home
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Criteria
    </a>
  </li>
</ul>
`

/*nav.innerHTML = `

<div class="container-fluid">
  <a class="navbar-brand" href="/" style="font-weight: 600">Uveitis</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Uveitis Diagnostic Tree</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Not Yet Developed</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Not Yet Developed
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex mt-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</div>
`
*/
