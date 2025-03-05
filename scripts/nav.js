let nav = document.getElementById("nav");
let navFooter = document.getElementById("nav-footer");
//<i class="bi bi-share"></i>
nav.innerHTML = `
<nav class="shadow-sm navbar navbar-light bg-light fixed-top nav-border">
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <!-- Left Spacer (empty) to push the brand to the center -->
    
      <a class="navbar-brand" href="#" style="font-weight:600;">Uveitis Tree</a>
    

    <!-- Button container (right side) -->
    <div class="button-container d-flex align-items-center">
      <button style="margin-right:5px;" class="navbar-toggler install-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShare" aria-controls="offcanvasNavbar">
        <i class="bi bi-download"></i>
      </button>

      <button class="navbar-toggler" id="signOutBtn" type="button">
        <i class="bi bi-power"></i>
      </button>
    </div>
  </div>

  <!-- Offcanvas -->
  <div class="offcanvas offcanvas-end" style="width: 100%;" tabindex="-1" id="offcanvasShare" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header nav-border">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Installation</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex p-2"></div>
      
      <div style="padding-bottom: 100px">
        <span style="font-size: 1.25rem;">How to install UVEITIS TREE</span>
        <br><br><b>On iOS</b> (Safari only)<br><br>
        <ol>
          <li>Tap the share icon <i class="bi bi-box-arrow-up"></i> located at the bottom centre or top right corner of the browser.</li>
          <li>Scroll down in the share sheet and look for the "Add to Home Screen" option.</li>
          <li>Tap on "Add to Home Screen <i class="bi bi-plus-square"></i>".</li>
          <li>A confirmation message will appear, asking if you want to add <b>Uveitis Tree</b> to your home screen. Tap "Add" or "Install."</li>
          <li>The app icon will now be added to your iOS device's home screen for quick access.</li>
        </ol>
        <br><br><b>On Android</b> (Chrome)<br>
        <div><i>Some devices recognize Uveitis Tree as PWA and will automatically ask users for installation.</i></div><br>
        <ol>
          <li>Tap the menu icon (usually three dots) located at the top right corner of the browser.</li>
          <li>From the menu options, select "Add to Home screen"</li>
          <li>A confirmation message will appear, asking if you want to add <b>Uveitis Tree</b> to your home screen. Tap "Add" or "Install."</li>
          <li>The app icon will now be added to your Android device's home screen for quick access.</li>
        </ol>

        <br><br><b>On Windows</b><br><br>
        <ol>
          <li>Tap the install icon located at the top right corner of the browser.</li>
          <li>A pop-up will appear, asking if you want to add <b>Uveitis Tree</b>, click "install"</li>
          <li><b>Uveitis Tree</b> PWA will appear</li>
          <li>The app icon will now be added to your Desktop home screen for quick access.</li>
        </ol>
      </div>
    </div>
  </div>
</nav>
`
/*
<nav class=" shadow-sm navbar navbar-light bg-light fixed-top nav-border">
  <div class="container-fluid d-flex justify-content-between align-items-center">

  


  
    <div style="padding-right: 32px;" ></div>

      <div class="d-flex flex-grow-1 justify-content-center">
        <a class="navbar-brand" href="#" style="font-weight:600">Uveitis Tree</a>
      </div>

    <!-- Button container -->
    <div class="button-container d-flex align-items-center ">

      <button style="margin-right:5px;" class="navbar-toggler install-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasShare" aria-controls="offcanvasNavbar">
        <i class="bi bi-download"></i>
      </button>

      <button class="navbar-toggler" id="signOutBtn" type="button">
        <i class="bi bi-power"></i>
      </button>
    </div>
  </div>

  
    <div class="offcanvas offcanvas-end" style="width: 100%;" tabindex="-1" id="offcanvasShare" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header nav-border">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Installation</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="d-flex p-2" ></div>
        
        <div style="padding-bottom: 100px">
          <span style="font-size: 1.25rem;">How to install UVEITIS TREE</span>
          <br><br><b>On iOS</b> (Safari only)<br><br>
          <ol>
            <li>Tap the share icon <i class="bi bi-box-arrow-up"></i> located at the bottom centre or top right corner of the browser.</li>
            <li>Scroll down in the share sheet and look for the "Add to Home Screen" option.</li>
            <li>Tap on "Add to Home Screen <i class="bi bi-plus-square"></i>".</li>
            <li>A confirmation message will appear, asking if you want to add <b>Uveitis Tree</b> to your home screen. Tap "Add" or "Install."</li>
            <li>The app icon will now be added to your iOS device's home screen for quick access.</li>
          </ol>
          <br><br><b>On Android</b> (Chrome)<br>
          <div><i>Some devices recognize Uveitis Tree as PWA and will automatically ask users for installation.</i></div><br>
          <ol>
            <li>Tap the menu icon (usually three dots) located at the top right corner of the browser.</li>
            <li>From the menu options, select "Add to Home screen"</li>
            <li>A confirmation message will appear, asking if you want to add <b>Uveitis Tree</b> to your home screen. Tap "Add" or "Install."</li>
            <li>The app icon will now be added to your Android device's home screen for quick access.</li>
          </ol>

          <br><br><b>On Windows</b><br><br>
          <ol>
            <li>Tap the install icon located at the top right corner of the browser.</li>
            <li>A pop up will appear, asking if you want to add <b>Uveitis Tree</b>, click "install"</li>
            <li><b>Uveitis Tree</b> PWA will appear</li>
            <li>The app icon will now be added to your Desktop home screen for quick access.</li>
          </ol>
        </div>
      </div>
    </div>


    
  </div>
</nav>
`
*/

navFooter.innerHTML = `
<nav class="shadow-sm navbar navbar-light bg-light fixed-bottom nav-border" style="border-top: 1px solid #dddddd;">
  <!--div class="container-fluid" style="padding: 0px 30px 20px 30px; color: #6b6b6a"-->
  <div class="container-fluid" style="padding: 0px 30px 20px 30px; color: #6b6b6a">
    <a class="nav-link active" aria-current="page" href="/">
      <div id='home-icon' style="display:flex; flex-direction: column; align-items: center; color: '#cfcdca';"><i style="font-size: 1.5rem;" class="bi bi-house-door"></i><span style="font-size:0.9rem;">Home</span></div>
    </a>
   

    <div class="nav-icon">
    <a class="nav-link" href="/html/classification.html">
      <div id='class-icon' style="display:flex; flex-direction: column; align-items: center; color: '#cfcdca';"><i style="font-size: 1.5rem;" class="bi bi-card-list"></i><span style="font-size:0.9rem;">Criteria</span></div>
    </a>
    </div>

    <!--a class="nav-link" href="#">
      <div id='info-icon' style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-diagram-3"></i><span style="font-size:0.9rem;">Tree</span></div>
    </a-->


    <a class="nav-link" href="#">
      <div style="display:flex; flex-direction: column; align-items: center;"><i style="font-size: 1.5rem;" class="bi bi-info-circle"></i><span style="font-size:0.9rem;">Info</span></div>
    </a>
  </div>
</nav>
`

