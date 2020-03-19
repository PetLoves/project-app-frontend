import React from 'react';
import battersea from '../images/battersea.png';
import bluecross from '../images/bluecross.png';
import rspca from '../images/rspca.png';
import dogstrust from '../images/dogstrust.jpg';
import dogowner from '../images/dogowner.jpg';
import vet from '../images/vet.jpg';
class Carousel extends React.Component {
  render() {
    return (
      // Testimonials
      <div>
        <section class="info-section" id="testimonials">
          <div
            id="testimonal-carousel"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h2 class="testimonial-text">
                  PetLoves is helping us to find suitable owners for some of our
                  neediest cats and dogs.
                </h2>
                <img class="testimonal-img" src={vet} alt="dog-profile" />
                <em>Alex, Battersea Dogs Home</em>
              </div>
              <div class="carousel-item">
                <h2 class="testimonial-text">
                  "I had plenty of time on my hands, Churchill needed lots of
                  company. We're a perfect match!"
                </h2>
                <img class="testimonal-img" src={dogowner} alt="dog-profile" />
                <em>Peter, Brighton</em>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#testimonal-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#testimonal-carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

        {/* Partners  */}

        <section class="info-section" id="partners">
          <img class="partner-logo" src={rspca} alt="rspca-logo" />
          <img class="partner-logo" src={dogstrust} alt="dogstrust-logo" />
          <img class="partner-logo" src={battersea} alt="battersea-logo" />
          <img class="partner-logo" src={bluecross} alt="bluecross-logo" />
        </section>
      </div>
    );
  }
}
export default Carousel;
