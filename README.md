<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Wedding-site</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:wght@400;500;600&family=Petit+Formal+Script&display=swap" rel="stylesheet"> 

        <!-- Icon Font Stylesheet -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Libraries Stylesheet -->
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">


        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body data-bs-spy="scroll" data-bs-target="#navBar" id="weddingHome">

        <!-- Spinner Start -->
        <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" role="status"></div>
        </div>
        <!-- Spinner End -->


        <!-- Navbar start -->
        <div class="container-fluid sticky-top px-0">
            <div class="container-fluid">
                <div class="container px-0">
                    <nav class="navbar navbar-light navbar-expand-xl" id="navBar">
                        <a href="index.html" class="navbar-brand">
                            <h4 class="text-primary display-6 fw-bold mb-0">Grace<strong class="text-secondary">&</strong>Pit</h4>
                        </a>
                        <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="fa fa-bars text-primary"></span>
                        </button>
                        <div class="collapse navbar-collapse py-3" id="navbarCollapse">
                            <div class="navbar-nav mx-auto border-top">
                                <a href="#weddingHome" class="nav-item nav-link active">Home</a>
                                <a href="#weddingAbout" class="nav-item nav-link">About</a>
                                <a href="#weddingStory" class="nav-item nav-link">Story</a>
                                <a href="#weddingTimeline" class="nav-item nav-link">Wedding Informations</a>
                                <a href="#weddingGallery" class="nav-item nav-link">Gallery</a>
                                <a href="#weddingRsvp" class="nav-item nav-link">RSVP</a>
                            </div>
                            <div class="d-flex align-items-center flex-nowrap pt-xl-0">
                               <!-- <a href="#weddingRsvp" class="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4">Book Attendance</a> -->
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Navbar End -->



        <!-- Carousel Start -->
        <div class="container-fluid carousel-header px-0">
            <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="img/carosello1.jpg" class="img-fluid" alt="Image" style="object-position: 50% 40%;">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-primary"></i> Pietro</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno 2025</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/carosello2.jpg" class="img-fluid" alt="Image">
                        <style>
                            @media (max-width: 767px) {
                                .carousel-item img {
                                    object-position: 40% 50%;
                                }
                            }
                        </style>
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO, FINALMENTE!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-primary"></i> Pietro</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno2025</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/carosello3.jpg" class="img-fluid bg-secondary" alt="Image" style="object-position: 30% 67%;">
                        <style>
                            @media (max-width: 767px) {
                                /* Sposta l'immagine più in su e più a destra di una percentuale su dispositivi mobili */
                                .carousel-item img {
                                    object-position: 40% 90%;
                                }
                            }
                        </style>
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO, FINALMENTE!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-primary"></i> Pietro</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno 2025</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Carousel End -->


        <!-- Hello! Start -->
        <div class="container-fluid position-relative py-5" id="weddingAbout">
            <div class="position-absolute" style="top: -35px; right: 0;">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="position-absolute" style="top: -10px; left: 0; transform: rotate(150deg);">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="container position-relative py-5">
                <div class="mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 800;">
                    <h1 class="text-primary display-1">Hello!</h1>
                    <h4 class="text-dark mb-0">Sei ufficialmente invitato al nostro matrimonio</h4>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row g-4 align-items-center">
                            <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="d-flex">
                                    <div class="text-end my-auto pe-4">
                                        <h3 class="text-primary mb-3">Grazia</h3>
                                        <p class="text-dark mb-0" style="line-height: 30px;">Una donna semplice, senza troppe pretese. Vuole sempre e solo la luna, vive come se avesse 35 ore in un giorno.
                                        </p>
                                    </div>
                                    <img src="img/bride.jpg" class="img-fluid img-border" alt="">
                                </div>
                            </div>
                            <div class="col-lg-2 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex align-items-center justify-content-center">
                                    <i class="fa fa-heart fa-5x text-primary"></i>
                               </div>
                            </div>
                            <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="d-flex">
                                    <img src="img/Groom.jpg" class="img-fluid img-border" alt="">
                                    <div class="my-auto ps-4">
                                        <h3 class="text-primary mb-3">Pietro</h3>
                                        <p class="text-dark mb-0" style="line-height: 30px;">Un uomo semplice, senza troppe pretese. Ingegnere, chitarrista, a volte simpatico, chi più ne ha più ne metta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hello! End -->


        <!-- About Start -->
        <div class="container-fluid position-relative overflow-hidden bg-secondary py-5">
            <img src="img/bg-flower.png" class="img-fluid position-absolute top-0" style="right: -15px; transform: rotate(270deg); opacity: 0.5;" alt="">
            <img src="img/bg-flower.png" class="img-fluid position-absolute" style="bottom: 10px; left: -15px; transform: rotate(90deg); opacity: 0.5;" alt="">
            <div class="container py-5 position-relative">
                <div class="row g-5 align-items-center">
                    <div class="col-xl-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="border-white bg-primary" style="border-style: double;">
                            <img src="img/about1NUOVA.jpg" class="img-fluid w-100" alt="">
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="wow fadeIn" data-wow-delay="0.3s">
                            <h5 class="text-uppercase text-primary fw-bold mb-4">About Us</h5>
                            <h1 class="display-5 text-white mb-4">Il nostro grande momento</h1>
                            <p class="text-white fs-5 mb-4">Ama la tua moglie, come ami te stesso… o un po’ di più se possibile! (ispirato a Efesini 5:28)
                            </p>
                            <div class="tab-class bg-primary p-4">
                                <ul class="nav d-flex mb-4">
                                    <li class="nav-item">
                                        <a class="d-flex py-2 text-center bg-white active" data-bs-toggle="pill" href="#tab-1">
                                            <span class="text-dark" style="width: 150px;">Info Sposa</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="d-flex py-2 mx-3 text-center bg-white" data-bs-toggle="pill" href="#tab-2">
                                            <span class="text-dark" style="width: 150px;">Info Sposo</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-1" class="tab-pane fade show p-0 active">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-flex">
                                                    <div class="me-4">
                                                        <img src="img/bride.jpg" class="img-fluid w-100 img-border" alt="">
                                                    </div>
                                                    <div class="text-start my-auto">
                                                        <h5 class="text-white fw-bold">Grazia</h5>
                                                        <p class="text-white mb-3">Testo grazia
                                                        </p>
                                                        <div class="d-flex">
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-facebook-f"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-twitter"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-instagram"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"><i class="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2" class="tab-pane fade show p-0">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-flex">
                                                    <div class="me-4">
                                                        <img src="img/Groom.jpg" class="img-fluid w-100 img-border" alt="">
                                                    </div>
                                                    <div class="text-start my-auto">
                                                        <h5 class="text-white fw-bold">Pietro</h5>
                                                        <p class="text-white mb-3">Testo pietro
                                                        </p>
                                                        <div class="d-flex">
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-facebook-f"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-twitter"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"><i class="fab fa-instagram"></i></a>
                                                            <a href="" class="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"><i class="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->


        <!-- Story Start -->
        <div class="container-fluid story position-relative py-5" id="weddingStory">
            <div class="position-absolute" style="top: -35px; right: 0;">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="position-absolute" style="top: -15px; left: 0; transform: rotate(150deg);">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="container position-relative py-5">
                <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="text-uppercase text-primary fw-bold mb-4">Story</h5>
                    <h1 class="display-4">Our Love Story</h1>
                </div>
                <div class="story-timeline">
                    <div class="row wow fadeInUp" data-wow-delay="0.2s">
                        <div class="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img/story-1.jpg" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="mb-2 text-dark">First Meet</h4>
                                <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
                                <p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.3s">
                        <div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">First Date</h4>
                                <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
                                <p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img/story-2.jpg" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row wow fadeInUp" data-wow-delay="0.4s">
                        <div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img/story-3.jpg" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">Proposal</h4>
                                <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
                                <p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.5s">
                        <div class="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">Enagagement</h4>
                                <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p>
                                <p class="m-0 fs-5">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                            </div>
                        </div>
                        <div class="col-md-6 border border-end-0 border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img/story-4.jpg" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Story End -->


        <!--- Wedding Date -->
        <div class="container-fluid wedding-date-bg position-relative py-5">
            <div class="position-absolute" style="top: -100px; right: 0;">
            <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="position-absolute" style="top: -80px; left: 0; transform: rotate(150deg);">
            <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="container py-5 wow zoomIn" data-wow-delay="0.1s">
            <div class="wedding-date text-center bg-light p-5" style="border-style: double !important; border: 15px solid rgba(253, 93, 93, 0.5);">
                <div class="wedding-date-content">
                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                    <h4 class="text-dark text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno 2025</h4>
                </div>
                <h1 class="display-4" style="color: red;">Ma scusate, quanto manca?</h1>
                <p class="text-dark fs-5">Santuario della Madonna del Monte di Marsure, 
                    Costa di, Via del Santuario, 43, 33081 Aviano PN</p>
                <div class="d-flex align-items-center justify-content-center mb-5" id="countdown">
                    <div class="text-dark fs-2 me-4">
                    <div id="days">00</div>
                    <span>Giorni</span>
                    </div>
                    <div class="text-dark fs-2 me-4">
                    <div id="hours">00</div>
                    <span>Ore</span>
                    </div>
                    <div class="text-dark fs-2 me-4">
                    <div id="minutes">00</div>
                    <span>Minuti</span>
                    </div>
                    <div class="text-dark fs-2 me-0">
                    <div id="seconds">00</div>
                    <span>Secondi</span>
                    </div>
                </div>
           <!--     <a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">Book Your Attendance</a>-->
                </div>
                <div class="position-absolute" style="top: 15%; right: -30px; transform: rotate(320deg); opacity: 0.5; z-index: 1;">
                <img src="img/attendance-bg.png" class="img-fluid" alt="">
                </div>
                <div class="position-absolute" style="top: 15%; left: -10px; transform: rotate(-320deg); opacity: 0.5; z-index: 1;">
                <img src="img/attendance-bg.png" class="img-fluid" alt="">
                </div>
            </div>
            </div>
        </div>
        <!-- Wedding Date -->

        <script>
            // Set the date we're counting down to
            var countDownDate = new Date("2 June 2025 00:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the elements with id="days", "hours", "minutes", "seconds"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
            }, 1000);
        </script>


        <!-- Wedding Timeline start -->
    <div class="container-fluid wedding-timeline bg-secondary position-relative overflow-hidden py-5" id="weddingTimeline">
        <div class="position-absolute" style="top: 50%; left: -100px; transform: translateY(-50%); opacity: 0.5;">
            <img src="img/wedding-bg.png" class="img-fluid" alt="">
        </div>
        <div class="position-absolute" style="top: 50%; right: -160px; transform: translateY(-50%); opacity: 0.5; rotate: 335deg;">
            <img src="img/wedding-bg.png" class="img-fluid" alt="">
        </div>
        <div class="container py-5">
            <div class="text-center mb-5">
                <h1 class="display-4 text-white">Wedding Informations</h1>
            </div>
            <div class="position-relative wedding-content">
                <div class="row g-4">
                    <div class="col-12 border border-bottom-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.1s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-map-marker-alt text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Luogo della Celebrazione:</h3>
                            <p class="text-dark">Santuario della Madonna del Monte di Marsure, Costa di, Via del Santuario, 43, 33081 Aviano PN<br><br>Avendo vissuto in otto case... <br>abbiamo scelto la nona: quella del cuore. </p>
                        </div>
                    </div>
                    <div class="col-12 border border-top-0 border-start-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.3s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-clock text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Quando:</h3>
                            <p class="text-dark">Lunedi 02 Giugno 2025, ore 11:30.<br><br>Il tempo è denaro.<br>Infatti non ne abbiamo.</p>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 border border-bottom-0 border-end-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.5s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-road text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Strada:</h3>
                            <p class="text-dark">Percorrendo la Pedemontana Orientale, subito dopo l'incrocio di Aviano, troverete l'indicazione per il Santuario.<br>Dopo pochi minuti, alla fine del paese, dovrete intraprendere una leggera salita.<br>Non temete, è una strada per ogni tipo di stomaco: con qualche tornante sarete già arrivati allo spiazzo dei parcheggi!<br><br>In fondo ogni cammino verso il matrimonio può essere più o meno tortuoso, no?</p>
                        </div>
                    </div>
                    <div class="col-12 border border-top-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.7s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-parking text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Parcheggio:</h3>
                            <p class="text-dark">Appena giunti alla fine della strada che risale la collina, troverete due parcheggi disponibili: a sinistra uno asfaltato e a destra uno su sterrato.<br>
                                Dai parcheggi vedrete solo il retro del santuario: costeggiate il lato con la stradina di fiori e sassi e arriverete all'entrata principale!<br><br>Dietro ogni grande matrimonio, c'è sempre un parcheggio stra pieno: se arriverete in anticipo non avrai problemi!</p>
                        </div>
                    </div>
                </div>
                <div class="position-absolute heart-circle " style="bottom: 0; left: -18px;">
                    <div class="border border-2 border-primary rounded-circle p-1 bg-secondary"></div>
                </div>
                <div class="position-absolute heart-circle" style="top: 18px; right: -17px;">
                    <div class="border border-2 border-primary rounded-circle p-1 bg-secondary"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Wedding Timeline End -->


        <!-- Gallery Start -->
        <div class="container-fluid gallery position-relative py-5" id="weddingGallery">
            <div class="position-absolute" style="top: -95px; right: 0;">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="position-absolute" style="top: -80px; left: 0; transform: rotate(150deg);">
                <img src="img/tamp-bg-1.png" class="img-fluid" alt="">
            </div>
            <div class="container position-relative py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 800px;">
                    <h1 class="display-2 text-dark">Gallery</h1>
                    <p class="fs-5 text-dark">Qui troverai tutte le foto che cerchi, e anche di più!<br>Si beh, dopo il matrimonio</p>
                </div>
                <!--
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-1.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-1.jpg" data-lightbox="Gallery-1" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-2.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-2.jpg" data-lightbox="Gallery-2" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-3.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-3.jpg" data-lightbox="Gallery-3" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-4.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-4.jpg" data-lightbox="Gallery-4" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-5.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-5.jpg" data-lightbox="Gallery-5" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-6.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-6.jpg" data-lightbox="Gallery-6" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-7.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-7.jpg" data-lightbox="Gallery-7" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img/gallery-8.jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img/gallery-8.jpg" data-lightbox="Gallery-8" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            <div class="gallery-overlay bg-light border-secondary border-top-0 p-4" style="border-style: double;">
                                <h5>Wedding on the beach</h5>
                                <p class="text-dark mb-0">02 Giugno 2025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center wow fadeIn" data-wow-delay="0.2s">
                        <a class="btn btn-primary btn-primary-outline-0 py-3 px-5 me-2" href="#">View All <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                --> 
            </div>
        </div>
        <!-- Gallery end -->

        <!-- RSVP Form Start -->
        <div class="container-fluid RSVP-form py-5" id="weddingRsvp">
            <div class="container py-5">
                <div class="mb-5 text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style="max-width: 800px;">
                    <h1 class="display-2 text-primary">RSVP Form</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="p-5 border-secondary position-relative" style="border-style: double;">
                            <div class="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn" data-wow-delay="0.1s" style="width: 75%; border-style: double; top: 0; left: 50%; transform: translate(-50%, -50%);">
                                Kindly respond by Giugno 25, 2025 we look forward to celebrating with you!
                            </div>
                            <form>
                                <div class="row gx-4 gy-3">
                                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="Examplename" class="form-label text-dark">First Name</label>
                                            <input type="text" class="form-control py-3 border-0" id="Examplename" placeholder="First Name">
                                          </div>
                                    </div>
                                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="Examplename" class="form-label text-dark">Last Name</label>
                                            <input type="text" class="form-control py-3 border-0" id="Examplename" placeholder="Last Name">
                                          </div>
                                    </div>
                                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="Examplename" class="form-label text-dark">Enter Your Email</label>
                                            <input type="email" class="form-control py-3 border-0" id="Examplename" placeholder="Enter Your Email">
                                          </div>
                                    </div>
                                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="Examplename" class="form-label text-dark">Enter Your Phone</label>
                                            <input type="text" class="form-control py-3 border-0" id="Examplename" placeholder="Enter Your Phone">
                                          </div>
                                    </div>
                                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="exampleselect" class="form-label text-dark">Number Of Guests</label>
                                            <select class="form-control bg-white text-dark py-3 border-0" id="exampleselect" placeholder="Number Of Guests">
                                              <option>Only Me</option>
                                              <option>02 Guests</option>
                                              <option>03 Guests</option>
                                              <option>04 Guests</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="form-group">
                                            <label for="exampletextarea" class="form-label text-dark">Message</label>
                                            <textarea name="text" class="form-control border-0" id="exampletextarea" cols="30" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div class="text-center border border-secondary p-4 my-4 position-relative">
                                            <div class="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2" style="width: 50%; border-style: double; top: 0; left: 50%; transform: translate(-50%, -50%);">
                                                Will you be attending?
                                            </div>
                                            <div class="mt-4">
                                                <div class="row g-4">
                                                    <div class="col-lg-6">
                                                        <div class="d-flex justify-content-center">
                                                            <div class="form-check d-flex">
                                                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                                <label class="form-check-label text-dark" for="flexRadioDefault1">
                                                                    Accepts With Pleasure!
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="d-flex justify-content-center">
                                                            <div class="form-check d-flex">
                                                                <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                                <label class="form-check-label text-dark" for="flexRadioDefault1">
                                                                    Declines With Regret
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center wow fadeIn" data-wow-delay="0.1s">
                                        <button class="btn btn-primary btn-primary-outline-0 py-3 px-5">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                <div class="row g-5 justify-content-center text-center">
                    <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                        <div class="p-4 border-secondary" style="border-style: double;">
                            <h4>Problemi? Scrivimi</h4>
                            <a href="#" class="text-dark">Giovanni: +3318977891</a>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                        <div class="p-4 border-secondary" style="border-style: double;">
                            <h4>Quando</h4>-
                            <p class="mb-0 text-dark">
                                02. Giugno 2025. 11:30 del mattino
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                        <div class="p-4 border-secondary" style="border-style: double;">
                            <h4>Dove</h4>
                            <p class="mb-0 text-dark">
                                Santuario della Madonna del Monte di Marsure, Costa di, Via del Santuario, 43, 33081 Aviano PN. 
                            </p>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.2s">
                        <div class="border-secondary" style="border-style: double;">
                            <iframe class="w-100" 
                            style="height: 450px; margin-bottom: -6px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1158498499576!2d12.570715875795935!3d46.08822319158781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477976fd93902009%3A0x7cf785ac08477ede!2sSantuario%20della%20Madonna%20del%20Monte%20di%20Marsure%20%2F%20Madona%20da%20Mont%20di%20Marsuris!5e1!3m2!1sit!2sit!4v1735320901196!5m2!1sit!2sit"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- RSVP Form End -->


        <!-- Footer Start -->
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-4 text-center">
                        <div class="footer-item">
                            <h4 class="mb-4 text-white">Grace<strong class="text-primary">&</strong>Pit</h4>
                            <p class="text-white">Gli alberi sono alti, ci guardano passare<br>
                                Dal ciglio della strada che arriva fino al mare<br>
                                A furia di star fermi nel bosco e in mezzo ai prati<br>
                                Han messo su radici e non si sono più spostati<br>
                                Han messo su radici e non si sono più spostati<br><br>
                                Salire in cima agli alberi, magnifica avventura<br>
                                Mele, ciliegie e datteri, tutta frutta matura <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        



        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i>Grazia e Pietro</a></span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-white">
                        <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
                        <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
                        <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->



        <!-- Back to Top -->
        <a href="#" class="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i class="fa fa-arrow-up"></i></a>   

        
    <!-- JavaScript Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    </body>

</html>