export function createNavbar() {
  return `
<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid" style="padding:0 190px;">
   
    <ul class="navbar-nav me-auto" >
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="locationDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Philippines, Manila
        </a>
        <ul class="dropdown-menu" aria-labelledby="locationDropdown">
          <li><a class="dropdown-item" href="#">Philippines, Manila</a></li>
          <li><a class="dropdown-item" href="#">Philippines, Cebu</a></li>
          <li><a class="dropdown-item" href="#">USA, New York</a></li>
          <!-- add more locations here -->
        </ul>
      </li>
    </ul>

    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navMenu"
      aria-controls="navMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Delivery</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
`;
}

