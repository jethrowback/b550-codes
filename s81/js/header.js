export function createHeader() {
  return `

  	<div class="container-fluid py-3 bg-white" style="padding: 0 190px;">
  	  <div class="row align-items-center">
  	    <!-- Brand -->
  	    <div class="col-auto">
  	      <span class="fs-5 fw-bold">Bihis-Bagyo</span>
  	    </div>

  	    <!-- Center: Catalog button + Search -->
  	    <div class="col d-flex align-items-center">
  	      <!-- Catalog pill -->
  	      <button class="btn btn-outline-secondary rounded-pill px-4 py-2 me-3">
  	        Catalog
  	      </button>

  	      <!-- Search input -->
  	      <div class="flex-grow-1">
  	        <input
  	          type="search"
  	          class="form-control rounded-pill"
  	          placeholder="Search…"
  	        />
  	      </div>
  	    </div>

  	    <!-- Right: icons (example placeholders) -->
  	    <div class="col-auto d-flex align-items-center gap-3">
  	      <i class="bi bi-person fs-4"></i>
  	      <i class="bi bi-heart fs-4"></i>
  	      <i class="bi bi-cart fs-4"></i>
  	    </div>
  	  </div>
  	</div>

         
`;
}
