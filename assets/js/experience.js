AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Project Intern",
    cardImage: "assets/images/experience-page/antridrone.jpg",
    place: "Paras AntiDrone",
    time: "(January, 2024 - present)",
    desp: "<li>Involved in Hardware design of a SDR(Software Defined Radio).</li> <li>Designed and implemented a robust server cluster infrastructure to meet the demands of high-volume operations.</li> <li>Contributed to a successful bid acquisition from DEAL (Dehradun), securing a contract for the development and provision of handheld radios.</li>",
  },
  {
    title: "Team Manager",
    cardImage: "assets/images/experience-page/rugved.jpeg",
    place: "RUGVED Systems",
    time: "(November, 2020 - October, 2023)",
    desp: "<li>Assisted the conceptual team in bringing concepts to fruition by introducing various realist ideas and directing an action plan.</li> <li>Responsible for the team's finances by performing balance allocation, financial modelling and reporting.</li> <li>Constructed an Auto-fire Airsoft to shoot in the presence of a human using YOLO v5 and TCP/IP.</li>  <li>Technology: Altium Designer, GCC & CMAKE, C/C++, Micro Python, STM MCU, Raspberry Pi, Linux, Shell scripting.</li>",
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
    title: "",
    cardImage: "",
    description: "",
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
    title: "Techtatva 2022",
    image: "assets/images/experience-page/techtatva.jpeg",
    subtitle: "Core Organizer",
    desp: "Responsible for organizing a coding competition for participants to develop computer vision code. Implemented custom-rigged airsoft gun for autonomous shooting.Had over 150+ in registration.",
    href: ""
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
