AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Student Assistant",
    cardImage: "assets/images/experience-page/utafortworth_logo.jpeg",
    place: "UTA Fort Worth",
    time: "(Jan, 2024 - present)",
    desp: "<li>Responsible for managing administrative and functional operations at UTA Fort Worth campus, ensuring smooth day-to-day functioning.</li><li>Overseeing IT security-related tasks to safeguard campus systems and data, implementing necessary measures to prevent cybersecurity threats.</li><li>Performing data maintenance tasks to ensure accuracy, integrity, and confidentiality of campus records and information.</li>",
  },
  {
    title: "Java Backend Developer",
    cardImage: "assets/images/experience-page/MMADpay.jpeg",
    place: "MMADPAY",
    time: "(June, 23 - , Aug, 23)",
    desp: "<li>Led the development of a versatile payment gateway solution designed to serve multiple merchant services, including prominent platforms like IRCTC iPay, by leveraging Spring Boot and Java technologies.</li><li>Implemented robust backend functionalities and integrations with Apache components to ensure seamless transactions and secure payment processing for diverse merchant partners.</li><li>Collaborated closely with stakeholders to gather requirements, design architecture, and conduct thorough testing, resulting in a scalable and reliable payment gateway solution that met the needs of various clients and merchant services.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/Wipro_exp.jpeg",
    place: "Wipro Limited",
    time: "(Sep, 20 - June, 23)",
    desp: "<li>Led network security enhancement initiatives at Novartis International, achieving a significant reduction in security breaches and manual workload through the implementation of automated SSL certificate management using OCSP automated tools.</li><li>Engineered SSL-toolkit solutions to automate SSL certificate lifecycle management, resulting in a substantial decrease in security breaches and enhanced compliance levels for the organization.</li><li>Orchestrated server migration projects with a 95% on-time completion rate using Agile methodologies, resulting in a 25% reduction in deployment time and improvements in security and compliance measures.</li><li>Pioneered the implementation of disaster recovery models and Hierarchical Storage Management (HSM) configurations, establishing a robust three-tier PKI architecture for secure key management and access control, thereby minimizing potential vulnerabilities.</li><li>Delivered regular security assessments and devised risk mitigation plans to proactively identify and address security threats, ensuring the continuous protection of organizational data and systems.</li><li>Utilized a tech stack comprising SSL/TLS, PKI Management, Python, PyQT5, HSM, and Google Cloud to execute various projects and enhance network security, server infrastructure, and data recovery processes.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "HackUTA",
    cardImage: "assets/images/experience-page/ulhacks.png",
    description:
      "I was part of team hackuta, and acted as mentor for guiding 100s of participants across the globe in their first steps towards building end-to-end full stack development projects.",
  },
  {
    title: "all in opensource",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects submitted by the participants of all in opensource.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "OdinProject",
    subtitle: "Mentor",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Odinproject is a opensource project that aims to make ease of learning full stack developement accessible to everyone. OdinProject was founded with the primary goal of helping people learn full stack development.",
    href: "https://github.com/SuryaTeja-N/Odin_Project",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3-2021 isglobal online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
