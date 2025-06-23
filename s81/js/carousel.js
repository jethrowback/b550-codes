export function createCarousel() {
  return `

    
    <section class="py-4" >
      <div class="container">
        <div class="row align-items-center">
   
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div id="promoCarousel" class="carousel slide rounded-3 overflow-hidden" data-bs-ride="carousel">

              <!-- Indicators -->
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                </button>
                
                <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Slide 2">
                </button>

                <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="2" aria-label="Slide 3">
                </button>
              </div>

              <!-- Slides -->
              <div class="carousel-inner" style="height: 400px;">
                <div class="carousel-item active h-100">
                  <img src="images/slide1.jpg" class="d-block w-100 h-100" style="object-fit: cover;" alt="Promo 1"/>
                </div>
                <div class="carousel-item h-100">
                  <img src="images/slide2.jpg" class="d-block w-100 h-100" style="object-fit: cover;" alt="Promo 2"/>
                </div>

                <div class="carousel-item h-100">
                  <img src="images/slide3.jpg" class="d-block w-100 h-100" style="object-fit: cover;" alt="Promo 3"/>
                </div>
              </div>

              <!-- Controls -->
              <button class="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button class="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Next</span>
              </button>

            </div>
          </div>

          <!-- RIGHT: Text Column -->
          <div class="col-lg-6">
            <h1 class="fw-bold mb-3"> Bestseller Blizzard </h1>
            <p class="text-muted mb-4">Our hottest picks are swirling in—snag them before they melt away!</p>
          </div>

        </div>
      </div>
    </section>




`;
}
