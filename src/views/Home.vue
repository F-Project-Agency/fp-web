<template>
  <div class="home site-wrap">
    <!--<div class="top-bar py-3 bg-light" id="home-section">
      <div class="container">
        <div class="row">
          <div class="col-6 text-left">
            <ul class="social-media">
              <li><a href="#" class="p-2"><span class="icon-facebook"></span></a></li>
              <li><a href="#" class="p-2"><span class="icon-twitter"></span></a></li>
              <li><a href="#" class="p-2"><span class="icon-instagram"></span></a></li>
              <li><a href="#" class="p-2"><span class="icon-linkedin"></span></a></li>
            </ul>
          </div>
          <div class="col-6">
            <p class="mb-0 float-right">
              <span class="mr-3"><a href="tel://#"> <span class="icon-phone mr-2"></span><span class="d-none d-lg-inline-block">+1 234 5678 9101</span></a></span>
              <span><a href="#"><span class="icon-envelope mr-2"></span><span
                class="d-none d-lg-inline-block">info@yourdomain.com</span></a></span>
            </p>

          </div>
        </div>
      </div>
    </div>-->

    <nav-bar></nav-bar>

    <section class="overlay">
      <carousel :autoPlay="true" :perPage="1" :paginationEnabled="false"
                :navigationEnabled="true" navigationNextLabel="" navigationPrevLabel="">
        <slide class="overflow-hidden">
          <div class="site-blocks-cover overlay" v-background="`/images/heroes/hero.jpg`">
            <div class="container">
              <div class="row align-items-center justify-content-center">

                <div class="col-md-12">

                  <div class="row mb-4">
                    <div class="col-md-6">
                      <h1>We Are The Best Agency</h1>
                      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate
                        facere
                        deleniti fuga officia.</p>
                      <div>
                        <a href="#" class="btn btn-underline mr-2 mb-2">Get Started</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="overflow-hidden">
          <div class="site-blocks-cover overlay" v-background="`https://images.unsplash.com/photo-1508381592917-f70a660e413e?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=115aec28a10c8fd2de48b7a0b6e65479`">
            <div class="container">
              <div class="row align-items-center justify-content-center">

                <div class="col-md-12">

                  <div class="row mb-4">
                    <div class="col-md-6">
                      <h1>We Are The Best Consulting Agency</h1>
                      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate
                        facere
                        deleniti fuga officia.</p>
                      <div>
                        <a href="#" class="btn btn-underline mr-2 mb-2">Get Started</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
      <div></div>
    </section>

    <div class="site-section" id="">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-md-12 ml-auto text-center">
            <h3 class="section-sub-title">Some Mini Title</h3>
            <h2 class="section-title mb-3">Welcome To F Project</h2>
            <p class="m+b-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil,
              consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero
              vel!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section white-section bg-light" id="about-sectin">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-md-4">
            <h3 class="section-sub-title">About Us</h3>
            <h2 class="section-title mb-3">Who We Are</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><a href="#" class="btn btn-underline btn-black--hover">Learn More</a></p>
          </div>
          <div class="col-md-8 mb-5 mb-lg-0 position-relative text-right pl-lg-5">
            <img src="/images/about/who-we-are.jpg" class="img-fluid" alt="Image">
          </div>
        </div>
      </div>
    </div>

    <section class="site-section border-bottom " id="services-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="section-sub-title">About Us</h3>
            <h2 class="section-title mb-3">Services</h2>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary icon-autorenew"></span></div>
              <div>
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary icon-backspace"></span></div>
              <div>
                <h3>Market Analysis</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary icon-av_timer"></span></div>
              <div>
                <h3>User Monitoring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="site-section border-bottom" id="team-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="section-sub-title">Team</h3>
            <h2 class="section-title mb-3">Our Team</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div class="person text-center">
              <img src="images/person_2.jpg" alt="Image" class="img-fluid rounded-circle w-50 mb-5">
              <h3>John Rooster</h3>
              <p class="position text-muted">Co-Founder, President</p>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem
                provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore
                deserunt tenetur.</p>
              <ul class="ul-social-circle">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div class="person text-center">
              <img src="images/person_3.jpg" alt="Image" class="img-fluid rounded-circle w-50 mb-5">
              <h3>Tom Sharp</h3>
              <p class="position text-muted">Co-Founder, COO</p>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem
                provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore
                deserunt tenetur.</p>
              <ul class="ul-social-circle">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div class="person text-center">
              <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded-circle w-50 mb-5">
              <h3>Winston Hodson</h3>
              <p class="position text-muted">Marketing</p>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem
                provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore
                deserunt tenetur.</p>
              <ul class="ul-social-circle">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h3 class="section-sub-title">How it works</h3>
            <h2 class="section-title mb-3">How It Works</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class=" box-with-humber">
              <h2 class="text-black">Innovate</h2>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur
                beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul class="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class=" box-with-humber">
              <h2 class="text-black">Create</h2>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur
                beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul class="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class=" box-with-humber">
              <h2 class="text-black">Scale</h2>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur
                beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul class="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-section testimonial-wrap" id="testimonials-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="section-sub-title">People Says</h3>
            <h2 class="section-title mb-3">Testimonials</h2>
          </div>
        </div>
      </div>
      <div class="slide-one-item home-slider owl-carousel">
        <div>
          <div class="testimonial">

            <blockquote class="mb-5">
              <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;</p>
            </blockquote>

            <figure class="mb-4 d-flex align-items-center justify-content-center">
              <div><img src="images/person_3.jpg" alt="Image" class="w-50 img-fluid mb-3"></div>
              <p>John Smith</p>
            </figure>
          </div>
        </div>
        <div>
          <div class="testimonial">

            <blockquote class="mb-5">
              <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;</p>
            </blockquote>
            <figure class="mb-4 d-flex align-items-center justify-content-center">
              <div><img src="images/person_2.jpg" alt="Image" class="w-50 img-fluid mb-3"></div>
              <p>Christine Aguilar</p>
            </figure>

          </div>
        </div>

        <div>
          <div class="testimonial">

            <blockquote class="mb-5">
              <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;</p>
            </blockquote>
            <figure class="mb-4 d-flex align-items-center justify-content-center">
              <div><img src="images/person_4.jpg" alt="Image" class="w-50 img-fluid mb-3"></div>
              <p>Robert Spears</p>
            </figure>

          </div>
        </div>

        <div>
          <div class="testimonial">

            <blockquote class="mb-5">
              <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;</p>
            </blockquote>
            <figure class="mb-4 d-flex align-items-center justify-content-center">
              <div><img src="images/person_4.jpg" alt="Image" class="w-50 img-fluid mb-3"></div>
              <p>Bruce Rogers</p>
            </figure>

          </div>
        </div>

      </div>
    </section>

    <section class="site-section" id="about-section">
      <div class="container">
        <div class="row mb-5">

          <div class="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
            <img src="images/about_1.jpg" alt="Image" class="img-fluid rounded">
          </div>
          <div class="col-md-6 order-md-1" data-aos="fade">

            <div class="row">

              <div class="col-12 mb-4">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos
                  harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi
                  doloribus, nemo dignissimos recusandae.</p>
              </div>
              <div class="col-md-12 mb-md-5 mb-0 col-lg-6">
                <div class="unit-4">
                  <div class="unit-4-icon mr-4 mb-3"><span class="text-primary icon-adb"></span></div>
                  <div>
                    <h3>Web &amp; Mobile Specialties</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                    <p class="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mb-md-5 mb-0 col-lg-6">
                <div class="unit-4">
                  <div class="unit-4-icon mr-4 mb-3"><span class="text-primary icon-assignment"></span></div>
                  <div>
                    <h3>Intuitive Thinkers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                    <p class="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="site-section" id="blog-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="section-sub-title">Blog</h3>
            <h2 class="section-title mb-3">Our Blog Posts</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <img src="images/img_1.jpg" alt="Image" class="img-fluid">
              <h2 class="font-size-regular"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
              <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a
                href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
                reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <img src="images/img_2.jpg" alt="Image" class="img-fluid">
              <h2 class="font-size-regular"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
              <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a
                href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
                reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <img src="images/img_1.jpg" alt="Image" class="img-fluid">
              <h2 class="font-size-regular"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
              <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a
                href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
                reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
              <p><a href="#">Continue Reading...</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="section-sub-title">Services</h3>
            <h2 class="section-title mb-3">Our Services</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 mb-5">

            <form action="#" class="p-5 bg-white">

              <h2 class="h4 text-black mb-5">Contact Form</h2>

              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label>
                  <input type="email" id="email" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label>
                  <input type="subject" id="subject" class="form-control">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control"
                            placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white">
                </div>
              </div>

            </form>
          </div>
          <div class="col-md-5">

            <div class="p-4 mb-3 bg-white">
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">youremail@domain.com</a></p>

            </div>

          </div>
        </div>
      </div>
    </section>

    <a href="#" class="bg-primary py-5 d-block">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md10"><h2 class="text-white">Let's Get Started</h2></div>
        </div>
      </div>
    </a>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-5">
                <h2 class="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet
                  aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div class="col-md-3 ml-auto">
                <h2 class="footer-heading mb-4">Quick Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h2 class="footer-heading mb-4">Follow Us</h2>
                <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post" class="footer-subscribe">
              <div class="input-group mb-3">
                <input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Enter Email"
                       aria-label="Enter Email" aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
              <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a
                href="https://colorlib.com" target="_blank">Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>

  </div> <!-- .site-wrap -->
</template>

<script>
// @ is an alias to /src

import NavBar              from '../components/Nav'
import { Slide, Carousel } from 'vue-carousel'

export default {
  name      : 'home',
  components: { NavBar, Slide, Carousel }
}
</script>

<style lang="scss">
  @import "../assets/styles/scss/mixins/breakpoints";
  .VueCarousel-navigation {
    height: 40px;
    width: 85%;
    padding: 0 2%;
    margin: 0 auto;
    position: absolute;
    bottom: 5%;
    top: unset !important;
    transform: translateX(-50%);
    left: 50%;

    @include mobile{
      width:auto;
    }
  }

  .VueCarousel-navigation-button {
    padding: 10px 10px;
    height: 40px;
    width: 55px;
    border: 1px solid #ffa009;
    z-index: 30;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position-y: center;
    position: relative !important;
  }
  .VueCarousel-navigation-prev {
    background-image: url('../assets/images/icons/fp-right-arrow.svg');
    transform-origin: center;
    transform: rotate(-180deg) !important;
    background-position-x: right;
  }
  .VueCarousel-navigation-next {
    background-image: url('../assets/images/icons/fp-right-arrow.svg');
    transform: none !important;
    background-position-x: right;
  }
  .VueCarousel-navigation--disabled {}
</style>
