<!DOCTYPE html>
<html lang="it">

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
                            <img src="img/logoinpng.png" alt="Grace & Pit Logo" class="navbar-brand-logo" style="width: 40%;">
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
                                <a href="#weddingGiftList" class="nav-item nav-link">Lista Nozze</a>
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
                        <img src="img/carosello1alternativa.jpg" class="img-fluid" alt="Image" style="object-position: 50% 50%;">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-danger"></i> Pietro</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno 2025</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/carosello3.jpg" class="img-fluid" alt="Image">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-danger"></i> Pietro</h1>
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno2025</h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/Carosello2NUOVANUOVANUOVA.png" class="img-fluid" alt="Image">
                        <div class="carousel-caption">
                            <div class="p-3 mx-auto animated zoomIn" style="max-width: 900px;">
                                <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
                                    <h4 class="text-white text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">CI SPOSIAMO!</h4>
                                </div>
                                <h1 class="display-1 text-capitalize text-white mb-3">Grazia <i class="fa fa-heart text-danger"></i> Pietro</h1>
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
            <!-- Background (opzionale) -->
            <div class="position-absolute" style="top: -35px; right: 0;">
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="position-absolute" style="top: -10px; left: 0; transform: rotate(150deg);">
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
        
            <div class="container position-relative py-5">
            <div class="mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 800px;">
                <h1 class="display-1" style="color: #6f7f60;">Hello!</h1>
            <!--    <h4 class="text-dark mb-0">Sei ufficialmente invitato al nostro matrimonio</h4> -->
            </div>
        
            <!-- Sezione Sposa -->
            <section id="sposa" class="mb-5">
                <!-- Titolo -->
                <div class="text-center mb-3">
                <h3 style="color: #6f7f60;">Grazia</h3> <h6 style="color: #6f7f60;">Vista dalle testimoni...</h6>
                </div>
                <div class="row align-items-center">
                <!-- Colonna Foto: in mobile prima (order-1) e in desktop seconda (order-md-2) -->
                <div class="col-12 col-md-4 order-1 order-md-2 text-center">
                    <img src="img/sposa2.jpg" class="img-fluid img-border" alt=""
                        style="max-width: 60%; height: auto;">
                </div>
                <!-- Colonna Testo: in mobile dopo (order-2) e in desktop prima (order-md-1) -->
                <div class="col-12 col-md-8 order-2 order-md-1">
                    <p class="text-dark" style="line-height: 30px;">
                        Se cercate una donna piccolina, golosa di spuntini, che si sveglia (a fatica) con un covone di capelli in testa e la gentilezza del Grinch e che parla solo dopo aver bevuto un ettolitro di caffè… siete nel sito giusto! 
                        Grazia è il suo nome chiaramente ed ha un viso dolce e sorridente: 
                        è determinata, energica e intraprendente, 
                        sa essere gentile, schietta a dismisura, 
                        talvolta testarda ma devota da far paura. 
                        La nostra fanciulla nacque nella lontana Pordenone 
                        nel glorioso millenovecentonovantanove 
                        e da lì i suoi pellegrinaggi iniziò, 
                        tra Verona, Padova, Chioggia e Venezia rimbalzò. 
                        Fece, così, del treno il suo compagno d’avventura, 
                        prendendo ogni straordinario senza alcuna paura. 
                        Odia le bistecche (ma le costicine sono accette), 
                        al minestrone preferisce le bruschette, 
                        al supermercato non compra niente 
                        che non trovi super conveniente... 
                        Solo per l'ammorbidente fa un'eccezione, 
                        lo cerca dovunque con abnegazione. 
                        Ama passare il tempo libero in montagna, 
                        e una schiscia sempre la accompagna, 
                        adora i suoi amici, le gite e le cantate, 
                        riesce ad aiutare anche le famiglie disagiate. 
                        Da vera principessa ha lottato contro ogni avversità 
                        per portare all’altare la sua dolce metà
                    </p>
                </div>
                </div>
            </section>
        
            <!-- Sezione Sposo -->
            <section id="sposo">
                <!-- Titolo -->
                <div class="text-center mb-3">
                <h3 style="color: #6f7f60;">Pietro</h3> <h6 style="color: #6f7f60;">Visto dai testimoni...</h6>
                </div>
                <div class="row align-items-center">
                <!-- Colonna Foto (stessa in mobile e desktop) -->
                <div class="col-12 col-md-4 text-center">
                    <img src="img/sposo2.jpg" class="img-fluid img-border" alt=""
                        style="max-width: 70%; height: auto;">
                </div>
                <!-- Colonna Testo -->
                <div class="col-12 col-md-8">
                    <p class="text-dark" style="line-height: 30px;">
                    Udite udite, madame et messeri e drizzate le orecchie a questo stornello, 
                    che vi presentiamo ora, noi suoi alfieri, Pietro Rossetti, lagunar menestrello. 
                    Pietro, il nostro gentiluomo, è un ciosoto vero, 
                    calzerebbe infradito anche all’Arena, del tutto fiero. 
                    Il cavalier nostro si distingue per bontà e allegria, 
                    qualità, ambedue, ben rare a ingegneria! 
                    Si dice, tuttavia, che dietro tanta gentilezza e beltà, 
                    Si celi, in fondo, anche un pizzico di ingenuità. 
                    Del denaro è già molto se ne conosce l’esistenza; 
                    non stesse per sposarsi, potrebbe pure farne senza. 
                    Ma si può forse codesto chiamare un difetto? 
                    Preghiamo solo Iddio non gli faccia mai mancare un tetto. 
                    Distratto, è vero, e a volte perso nei suoi pensieri; 
                    a ben veder, però, lo era spesso anche l’Alighieri. 
                    Poiché l’esser tra le nuvole è tratto tipico dell’artista, 
                    che sempre al suo far pensa e per poco altro ha vista. 
                    Tra le sue passioni, infatti, una è quella che più lo avvince: 
                    strimpellar la chitarra, che guardar le moto per poco vince. 
                    Menestrello lo abbiamo chiamato mica per nulla, 
                    che non solo suona, ma scrive ballate per ogni fanciulla. 
                    Fanciulle alle quali, però, chiediamo ormai distanza, 
                    giacché per una sola dama, ora, il suo cuore danza. 
                    Il nostro cavaliere ha infatti il destino già segnato 
                    da Monna Grazia, colei che il suo cuor ha imprigionato. 
                    “Quanta cattiveria, codesto è amore vero!”, ci direte. 
                    Non ditelo a noi, che testimonieremo dinanzi al prete. 
                    “Nella gioia e nel dolore, nella salute e nella malattia”, 
                    Monna Grazia che conduce e messer Pietro ne segue la via. 
                    </p>
                </div>
                </div>
            </section>
            
            </div>
        </div>
        <!-- Hello! End -->
  
<!-- 
         About Start RICORDATI DI RIMETTERE IL COMMENTO QUI E SOTTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
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
        About End 
-->
        <!-- Story Start -->
        <div class="container-fluid story position-relative py-5" id="weddingStory">
            <div class="position-absolute" style="top: -35px; right: 0;">
                <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="position-absolute" style="top: -15px; left: 0; transform: rotate(150deg);">
                <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="container position-relative py-5">
                <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h5 style="color: #6f7f60;" class="text-uppercase fw-bold mb-4">Story</h5>
                    <h1 class="display-4">Our Love Story</h1>
                </div>
                <div class="story-timeline">
                    <div class="row wow fadeInUp" data-wow-delay="0.2s">
                        <div class="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img\STORY1_RAPUNZEL_SCREEN.png" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="mb-2 text-dark">Il nostro primo incontro: find the light</h4>
                                <!-- <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p> -->
                                <p class="m-0 fs-5">Una notte del luglio 2021, tra i monti trentini e sorseggiando il suo amaro, Pietro decise che era finalmente giunto il tempo di ascoltare la sua amica Paola e andare a conoscere la famosa CicciaGrace. 
                                    I due poi si rividero nella ridente Portobuffolé dove passarono l’intera notte aspettando il sorgere del sole con i loro amici, alcune coperte e una chitarra. Trascorsero i mesi e con loro anche le lunghe chiamate tra i due. Così, mentre Grazia cominciò a farsi due domande, Pietro perso per natura – anche se a lui piace definirsi solo “chioggiotto” – ancora suonava e cantava libero ed ignaro di ciò che lo avrebbe aspettato.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.3s">
                        <div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">Poi disse: "Andiamo a prenderci un <s>gelato</s> caffè?"</h4>
                                <!-- <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p> -->
                                <p class="m-0 fs-5">
                                    Un giorno, però, anche lui si illuminò! Forse capì che gli Europei non erano l’evento più importante di quell’anno… e così chiese a Grace: andiamo a prenderci un caffè? Quel caffè, cari amici, lo attese per due mesi e lo conquistò solo accettando un termos caldo in un freddo parco padovano. Si prospettava già una bella relazione di povertà (anche se a lui piace chiamarla Provvidenza). Il caffè successivo lo presero mesi dopo, nella bella e romantica Verona, che accolse nel tempo la nuova e strana coppia: in fondo ogni scarpone cerca la sua infradito!
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img\STORY2_RAPUNZEL_SCREEN.png" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row wow fadeInUp" data-wow-delay="0.4s">
                        <div class="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img\STORY3_RAPUNZEL_SCREEN.png" class="img-fluid w-100 img-border" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 border-start border-top border-secondary p-4 pe-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">Un discernimento grande come il numero di città coinvolte</h4>
                                <!-- <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p> -->
                                <p class="m-0 fs-5">Furono mesi intensi, quelli dalla Primavera 2022 in poi, trascorsi tra un treno e l’altro, tra case e città diverse… ma era solo l’inizio: dovettero andare a Venezia, Assisi e poi fino in Portogallo per capire come si chiamasse questo desiderio che avevano nel cuore. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-column-reverse flex-md-row wow fadeInUp" data-wow-delay="0.5s">
                        <div class="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
                            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                                <h4 class="text-dark mb-2">Ci sposiamo!</h4>
                                <!-- <p class="text-uppercase text-primary mb-2" style="letter-spacing: 3px;">01 Jan 2050</p> -->
                                <p class="m-0 fs-5">Ebbene sì, cari amici e care famiglie! L’ingegnere chioggiotto sposerà la psicologa pordenonese il primo lunedì del giugno 2025! Due giovani squattrinati con poche (ma ben salde) certezze, tante persone carrrrine (spoiler: siete voi) e un Santuario. Cosa poter desiderare di più Grande di questo? </p>
                            </div>
                        </div>
                        <div class="col-md-6 border border-end-0 border-secondary p-4">
                            <div class="d-inline-flex align-items-center h-100">
                                <img src="img\STORY4_RAPUNZEL_SCREEN.png" class="img-fluid w-100 img-border" alt="">
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
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="" style="filter: blur(5px);">
            </div>
            <div class="position-absolute" style="top: -80px; left: 0; transform: rotate(150deg);">
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="" style="filter: blur(5px);">
            </div>
            <div class="container py-5 wow zoomIn" data-wow-delay="0.1s">
            <div class="wedding-date text-center bg-light p-5" style="border-style: double !important; border: 15px solid rgba(253, 93, 93, 0.5);">
            <div class="wedding-date-content">
            <div class="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4" style="border-style: double;">
            <h4 class="text-dark text-uppercase fw-bold mb-0" style="letter-spacing: 3px;">02 Giugno 2025</h4>
            </div>
            <h1 class="display-4" style="color: #743915;">Ma scusate, quanto manca?</h1>
            <p class="text-dark fs-5">Santuario della Madonna del Monte di Marsure, 
            Costa di, Via del Santuario, 43, 33081 Aviano PN</p>
            <div class="d-flex align-items-center justify-content-center mb-5" id="countdown">
            <div class="text-dark fs-6 me-2 d-flex flex-column align-items-center">
                <div id="days">00</div>
                <span class="ms-1">Day</span>
            </div>
            <div class="text-dark fs-6 me-2 d-flex flex-column align-items-center">
                <div id="hours">00</div>
                <span>Hours</span>
            </div>
            <div class="text-dark fs-6 me-2 d-flex flex-column align-items-center">
                <div id="minutes">00</div>
                <span>Minutes</span>
            </div>
            <div class="text-dark fs-6 me-0 d-flex flex-column align-items-center">
                <div id="seconds">00</div>
                <span>Seconds</span>
            </div>
            </div>
            <!--     <a class="btn btn-primary btn-primary-outline-0 py-3 px-5" href="#">Book Your Attendance</a>-->
            </div>
            <div class="position-absolute" style="top: 15%; right: -30px; transform: rotate(320deg); opacity: 0.5; z-index: 1;">
            <img src="img/attendance-bg.png" class="img-fluid" alt="" style="filter: blur(5px);">
            </div>
            <div class="position-absolute" style="top: 15%; left: -10px; transform: rotate(-320deg); opacity: 0.5; z-index: 1;">
            <img src="img/attendance-bg.png" class="img-fluid" alt="" style="filter: blur(5px);">
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

            // Adjust font size for mobile devices
            function adjustFontSizeForMobile() {
                if (window.innerWidth <= 768) {
                document.getElementById("countdown").style.fontSize = "0.8rem";
                } else {
                document.getElementById("countdown").style.fontSize = "2rem";
                }
            }

            // Call the function on load and on resize
            window.onload = adjustFontSizeForMobile;
            window.onresize = adjustFontSizeForMobile;
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
                            <p class="text-dark"><b>Santuario della Madonna del Monte di Marsure, Costa di, Via del Santuario, 43, 33081 Aviano PN</b><br><br>Avendo vissuto in otto case... <br>abbiamo scelto la nona: quella del cuore. </p>
                        </div>
                    </div>
                    <div class="col-12 border border-top-0 border-start-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.3s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-clock text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Quando:</h3>
                            <p class="text-dark"><b>Lunedi 02 Giugno 2025, ore 11:30.</b><br><br>Il tempo è denaro.<br>Infatti non ne abbiamo.</p>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 border border-bottom-0 border-end-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.5s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-road text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Strada:</h3>
                            <p class="text-dark">Percorrendo la <b>Pedemontana Orientale</b>, subito dopo l'incrocio di Aviano, troverete l'<b>indicazione per il Santuario</b>.<br>Dopo pochi minuti, alla fine del paese, dovrete intraprendere una <b>leggera salita</b>.<br>Non temete, è una strada per ogni tipo di stomaco: con qualche tornante sarete già arrivati allo spiazzo dei parcheggi!<br><br>In fondo ogni cammino verso il matrimonio può essere più o meno tortuoso, no?</p>
                        </div>
                    </div>
                    <div class="col-12 border border-top-0">
                        <div class="text-center p-3 wow fadeIn" data-wow-delay="0.7s">
                            <div class="mb-4 p-3 d-inline-flex">
                                <i class="fas fa-parking text-primary fa-3x"></i>
                            </div>
                            <h3 class="text-dark">Parcheggio:</h3>
                            <p class="text-dark">Appena giunti alla <b>fine della strada</b> che risale la collina, troverete <b>due parcheggi disponibili</b>: a sinistra uno asfaltato e a destra uno su sterrato.<br>
                                Dai parcheggi vedrete solo il retro del santuario: <b>costeggiate il lato con la stradina</b> di fiori e sassi e arriverete all'entrata principale!<br><br>Dietro ogni grande matrimonio, c'è sempre un parcheggio stra pieno: se arriverete in anticipo non avrete problemi!</p>
                        <div class="text-center"></div>
                            <img src="img\maps_post.png" class="img-fluid" alt="Parcheggio" style="width: 40%;">
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

       <!-- RSVP Form Start RIMETTERE FINE COMMENTO QUI E TOGLIERE QUEI 4 SOTTO ALLLA FINE
        <div class="container-fluid RSVP-form py-5" id="weddingRsvp">
            <div class="container py-5">
            <div class="mb-5 text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style="max-width: 800px;">
                <h1 class="display-2" style="font-family: 'Petit Formal Script', cursive; color:#fd5d5d;">RSVP Form</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-10">
                <div class="p-5 border-secondary position-relative" style="border-style: double;">
                    <div class="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn" data-wow-delay="0.1s" style="width: 75%; border-style: double; top: 0; left: 50%; transform: translate(-50%, -50%);">
                       Ma tu ci sei?
                    </div>
                    <form onsubmit="return verificaNome(event)">
                    <div class="row gx-4 gy-3">
                        <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <div class="form-group">
                            <div class="text-center"></div>
                                <label for="nomeCompleto" class="form-label text-dark">Inserisci il tuo <strong>nome completo</strong> (senza <strong>errori battitura</strong> o soprannomi strambi) per comunicarci la tua presenza<br>(<strong>Esempio: Mario Rossi</strong>)</label>
                                <input type="text" class="form-control py-3 border-0 text-dark" id="nomeCompleto" placeholder="Nome Cognome">
                            </div>
                        </div>
                        </div>
                        <div class="col-12 text-center wow fadeIn" data-wow-delay="0.1s">
                        <button type="submit" class="btn btn-primary btn-primary-outline-0 py-3 px-5">Verifica</button>
                        </div>
                    </div>
                    </form>
                    <div id="risultato" class="text-center mt-4"></div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <script>
            // Lista degli invitati
            const invitati = [
                { nome: "Mario Rossi", gruppo: "cerimonia" },
                { nome: "Giulia Bianchi", gruppo: "cerimonia+pranzo" },
                { nome: "Giovanni Verdi", gruppo: "cerimonia" }
            ];

            // Funzione per verificare il nome inserito
            function verificaNome(event) {
                event.preventDefault(); // Evita il refresh della pagina
                const nomeInserito = document.getElementById("nomeCompleto").value.trim().toLowerCase();
                const risultato = document.getElementById("risultato");

                // Cerca nella lista degli invitati ignorando maiuscole e spazi
                const invitato = invitati.find(invitato => invitato.nome.toLowerCase() === nomeInserito);

                if (invitato) {
                    if (invitato.gruppo === "cerimonia") {
                        risultato.innerHTML = `
                            <p class="text-success"><strong>Benvenuto</strong> alla cerimonia! <strong>Segui il link</strong> per segnalare la tua presenza e/o dei tuoi familiari</p>
                            <a href="https://forms.gle/rM8itWt9aVLC1iJi9" target="_blank" class="btn btn-primary py-2 px-4">Compila qui il modulo</a>
                        `;
                    } else if (invitato.gruppo === "cerimonia+pranzo") {
                        risultato.innerHTML = `
                            <p class="text-success"><strong>Benvenuto</strong> al ricevimento! <strong>Segui il link</strong> per segnalare la tua presenza e/o dei tuoi familiari</p>
                            <a href="https://forms.gle/GW13wPoFG3hegVRq9" target="_blank" class="btn btn-primary py-2 px-4">Compila qui il modulo</a>
                        `;
                    }
                } else {
                    risultato.innerHTML = `
                        <p class="text-danger">Nome non trovato. Sei sicuro di averlo inserito correttamente? <br> Controlla che non ci siano <strong>spazi o errori di battitura</strong> (Esempio corretto: Giovanni Maria Stefanuto) <br> Per problemi, <strong>scrivere su Whatsapp a Giovanni: +3318977891</strong></p>
                            </p>
--> <!--ANCHE QUESTA RIGA INTERA TOGLILA -->
                      <!-- <a href="https://modulo-generico.example.com" target="_blank" class="btn btn-secondary py-2 px-4">Modulo generico per verifiche</a> -->
<!--                    `;     -->
<!--                }          -->
<!--            }              -->
<!--        </script>          -->
        <!-- RSVP Form End -->

        <!-- Gift List and IBAN Start -->
        <div class="container-fluid gift-list-iban bg-light position-relative py-5" id="weddingGiftList">
            <div class="position-absolute" style="top: -35px; right: 0;">
                <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="position-absolute" style="top: -10px; left: 0; transform: rotate(150deg);">
                <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="container position-relative py-5">
                <div class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="display-4 text-primary">Volete costruire con noi questo matrimonio?</h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="bg-white p-4 border-secondary" style="border-style: double;">
                            <h3 class="text-dark">Lista Nozze</h3>
                            <p class="text-dark">Abbiamo creato una lista nozze per facilitare la scelta dei regali. Potete accedere alla lista nozze cliccando sul link qui sotto:</p>
                            <p class="text-dark"><strong>Nome utente:</strong> graziapietro<br><strong>Password:</strong> 020625</p>
                            <p class="text-dark">La lista nozze è stata creata al negozio pordenonese MASCHERIN. Potete chiamare il numero 0434 521437 oppure accedere al sito della lista tramite questo link:</p>
                            <a href="http://www.mascherin.it/listanozze/" target="_blank" class="btn btn-primary btn-primary-outline-0 py-2 px-4">Vai alla Lista Nozze</a>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="bg-white p-4 border-secondary" style="border-style: double;">
                            <h3 class="text-dark">IBAN</h3>
                           <!-- <p class="text-dark">Se preferite, potete contribuire al nostro futuro con un bonifico. Ecco il nostro IBAN:</p>-->
                            <p class="text-dark fw-bold mb-1">IBAN: IT65U0306920910100000017314</p>
                            <p class="text-dark fw-bold">Intestatario: Pietro Rossetti</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Gift List and IBAN End -->

        <!-- Gallery Start -->
        <div class="container-fluid gallery position-relative py-5" id="weddingGallery">
            <div class="position-absolute" style="top: -95px; right: 0;">
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="position-absolute" style="top: -80px; left: 0; transform: rotate(150deg);">
            <img src="img/tamp-bg-1.png" class="img-fluid d-none" alt="">
            </div>
            <div class="container position-relative py-5">
            <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 800px;">
            <h1 class="display-2 text-dark">Gallery</h1>
            <p class="fs-5 text-dark">Qui troverai tutte le foto che cerchi, e anche di più!</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (1).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (1).jpg" data-lightbox="Gallery-1" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
        
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (2).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (2).jpg" data-lightbox="Gallery-2" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (3).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (3).jpg" data-lightbox="Gallery-3" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (4).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (4).jpg" data-lightbox="Gallery-4" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (5).JPG" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (5).JPG" data-lightbox="Gallery-5" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (6).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (6).jpg" data-lightbox="Gallery-6" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (7).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (7).jpg" data-lightbox="Gallery-7" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div class="gallery-item">
                            <div class="gallery-img">
                                <img class="img-fluid w-100" src="img_gallery\gallery (8).jpg" alt="">
                                <div class="hover-style"></div>
                                <div class="search-icon">
                                    <a href="img_gallery_realdimension\gallery_realdimension (8).jpg" data-lightbox="Gallery-8" class="my-auto"><i class="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                <!-- <div class="col-12 text-center wow fadeIn" data-wow-delay="0.2s">
                        <a class="btn btn-primary btn-primary-outline-0 py-3 px-5 me-2" href="#">View All <i class="fas fa-arrow-right"></i></a>
                    </div> -->   
                </div>
                
            </div>
        </div>
        <!-- Gallery end -->

        <!-- Inserisci qui le tue foto/video-->
        <div class="container-fluid py-5 bg-light">
            <div class="container text-center">
            <h2 class="display-4 text-primary mb-4">Condividi le tue foto/video del matrimonio</h2>
            <a href="https://drive.google.com/drive/folders/1ZVlh0T8akFG_tsiKz31NkTq_yzB1lDW7?usp=sharing" target="_blank" class="btn btn-primary btn-primary-outline-0 py-3 px-5">Carica le tue foto/video</a>
            <p class="fs-5 text-dark mb-4">Abbiamo creato un drive dove puoi caricare tutte le foto e i video del nostro matrimonio.<br>Clicca sul pulsante qui sotto per accedere al drive e condividere i tuoi ricordi con noi!</p>
            </div>
        </div></div>

        <!-- Footer Start -->
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-4 text-center">
                        <div class="footer-item">
                            <h4 class="mb-4 text-white">Grace<strong class="text-primary">&</strong>Pit</h4>
                            <p class="text-white">Guardando il mondo da un'altra distanza <br>
                                Tra i giorni all'angolo e quelli migliori<br>
                                Le mani sanno cos'è la pazienza<br>
                                E gli occhi imparano le stagioni<br>
                                C'è un posto che tengo nascosto per te<br>
                                Un posto che sta qui da sempre<br>
                                C'era già prima di me e c'è ancora<br>
                                Si apre per noi eternamente ora<br>
                                <br><i>Eternamente ora, 2016</i>
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