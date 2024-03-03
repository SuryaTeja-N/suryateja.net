AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Associate Cloud Engineer",
    cardImage: "assets/images/education-page/cloud.svg",
    moocLink: "https://www.credential.net/8bb2c7c8-2dd0-4128-90b9-2291ee9a0b31",
  },
  {
    title: "University of California San Diego Data Structures and Algorithms Specialization",
    cardImage: "assets/images/education-page/ucs.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/P83NA7BN8T5Z",
  },
  {
    title: "Google Data Analytics Specialization",
    cardImage: "assets/images/education-page/dataana.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/HU2EJAZYX6CG",
  },
  {
    title: "Python",
    cardImage: "assets/images/education-page/python.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/certificate/YRJLL6JCV7S3",
  },
  {
    title: "Digital Circuits and Microcontrollers",
    cardImage: "assets/images/education-page/nptel.svg",
    moocLink: "https://drive.google.com/file/d/1RaKg38o2JDpN_P36NTbTGSfyJ8val9jNxw/view?usp=share_link",
  },
  {
    title: "Google Cybersecurity Specialization",
    cardImage: "assets/images/education-page/cyber.svg",
    moocLink: "https://www.credly.com/badges/3a417fdd-706d-49b3-a1e0-260e257b9804/linked_in_profile",
  },
  {
    title: "MSME Artificial Intelligence and Machine Learning",
    cardImage: "assets/images/education-page/msme.svg",
    moocLink: "https://drive.google.com/file/d/12xb6VslUT6f6b0Xdgulqu3paOQzk3wrW/view?usp=sharing",
  },
  {
    title: "JavaScript",
    cardImage: "assets/images/education-page/sololearn_svg.svg",
    moocLink: "https://www.sololearn.com/certificates/CC-VJVY4Z3H",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
