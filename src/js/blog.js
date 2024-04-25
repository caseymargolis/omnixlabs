// Controls 'Show More' button on newsroom and blog.
// articleAmount = amount of articles shown onclick
let articleIndex = 0;
function showMoreArticles(articleAmount) {
  const articles = document
    .getElementById("allArticles")
    .getElementsByClassName("article-container");

  for (let i = 0; i < articleAmount; i++) {
    if (articles[articleIndex] === undefined) {
      document.getElementById("showMoreBtn").style.display = "none";
      break;
    } else {
      articles[articleIndex].style.display = "block";
      articleIndex++;
    }
  }
}

if (
  document.getElementById("newsMain") ||
  document.getElementById("blogMain")
) {
  document.getElementById("showMoreBtn").addEventListener("click", function () {
    showMoreArticles(6);
  });
  showMoreArticles(6);
}

// Encodes URL for twitter share button on blog and newsroom pages.
function getTwitterUrl() {
  const twitterShareBtn = document.getElementById("shareOnTwitter");
  let encodedUrl =
    "https://ew-template-test.netlify.app" +
    encodeURIComponent(
      twitterShareBtn
        .getAttribute("data-url")
        .replace(/‘/g, "%E2%80%98")
        .replace(/’/g, "%E2%80%99")
        .replace("—", "%E2%80%94")
    )
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
  encodedUrl =
    "https://twitter.com/intent/tweet?url=" +
    encodedUrl +
    "&text=" +
    twitterShareBtn.getAttribute("data-title");
  twitterShareBtn.href = encodedUrl;
}

if (document.getElementById("careersPositions")) {
  const jobPositions = document.getElementsByClassName("job-position");
  if (jobPositions.length == 0) {
    document.getElementById("no-positions-disclaimer").style.display = "block";
  }
}

// Assign author avatars and bios
let avatars = document.querySelectorAll(".avatar");
let authorBio = document.querySelectorAll(".author-bio-content");
let authorSocialMedia = document.querySelectorAll(".author-social-media");

for (let i = 0; i < avatars.length; i++) {
  let author = avatars[i].getAttribute("data-author");

  switch (author) {
    case "Max Pulcini":
      avatars[i].src = "/img/max-pulcini.png";
      authorBio[i].innerText = "Max Pulcini is EverWash’s Director of Marketing & Communications, where he’s worked since August 2017. At EverWash, Max oversees communications strategy, content creation, press relations, and channel partnerships. A native of South Jersey, and a Philadelphia resident since 2009, Max joined EverWash following a career in journalism, which led to by-lines in Philadelphia-based publications such as Spirit News, Philadelphia City Paper, and Billy Penn, as well as national news outlets like The Daily Beast. A graduate of Temple University’s School of Media and Communications, Max has an affinity for Philadelphia sports teams, gaming, cured meats, and cheeses, despite his lactose intolerance.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/maxpulcini/";
      break;
    case "Harriet Ayoade":
      avatars[i].src = "/img/harriet-ayoade.png";
      authorBio[i].innerText = "Harriet Ayoade is EverWash’s Vice President of Marketing. Among her responsibilities, she oversees marketing and branding efforts. During the day, she's a big-picture, people-obsessed strategist, which she loves and couldn't imagine doing anything else. In her spare time, she indulges in her passion and writes fiction that captures her life's strange and beautiful experiences. In addition, she coaches and mentors others, emphasizing perseverance, self-care, and authenticity.  If she is not exploring the world with her family, working, mentoring, or writing, she is likely watching streaming shows, exhibiting her expertise in the art of binge-watching.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/harrietayoade/";
      break;
    case "Nash Goudie":
      avatars[i].src = "/img/nash-goudie.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet consectetur.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/nashgoudie/";
      break;
    case "Yamilette Roman":
      avatars[i].src = "/img/yamilette-roman.png";
      authorBio[i].innerText = "Yamilette Roman is EverWash's Marketing Specialist. She handles the company's social media strategy and fosters the employee advocacy program, among various other integral aspects of the marketing realm. Hailing from the vibrant Dominican Republic, Yamilette proudly embraces her Latina heritage while effortlessly communicating in both English and Spanish. She holds a bachelor's degree in Digital Marketing from Rutgers University. During her leisure time, you'll find Yamilette immersed in the world of literature, sipping café con leche, or watching the latest anime sensations.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/yamilette-roman/";
      break;
    case "Ryan Caldwell":
      avatars[i].src = "/img/ryan-caldwell.jpg";
      authorBio[i].innerText = "Ryan Caldwell serves as EverWash's B2B Marketing Manager, and has been with EverWash since April 2019. In this capacity, Ryan takes charge of EverWash's B2B communications, marketing email automations, and brand management. With a bachelor's degree in Graphic Design from Wayne State University, he steers the visual strategy, ensuring uniformity across all marketing materials and platforms. Hailing from the Metro-Detroit area, Ryan boasts a diverse professional background, having previously ventured into various fields including graphic design, sales, customer service, convention planning, logistics, and production. In his leisure hours, Ryan unwinds by channeling his creativity into artwork, using paints, pencils, and markers, often focusing on comic book sketches. Above all else, Ryan cherishes spending quality time with his wife and two daughters. Whether it's camping, embracing the thrill of rollercoasters, or embarking on cross-country journeys in search of exciting adventures, they bond over the joy of sharing remarkable tunes along the way.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/ryan-caldwell-709a60244/";
      break;
    case "Mike Christie":
      avatars[i].src = "/img/mike-christie.jpg";
      authorBio[i].innerText = "Mike is the Vice President of EverWash Assist. He is responsible for the sales and operation of the call center division. Mike is no stranger to the business of washing cars and serving customers. For 15 years, he owned and operated two full-service car washes in Connecticut. His unique perspective and understanding of the car wash customer has been very helpful in developing EverWash’s call center service.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/mikechristie60/";
      break;
    case "Rachel Fry":
      avatars[i].src = "/img/rachel-fry.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet consectetur.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/rachelfryhr/";
      break;
    case "Todd Rendle":
      avatars[i].src = "/img/todd-rendle.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet consectetur.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/toddrendle/";
      break;
    case "EverWash Newsroom":
      avatars[i].src = "/img/everwash-newsroom.png";
      authorBio[i].innerText = "The EverWash Newsroom is your source for the latest updates, press releases, and headlines from EverWash — the nation's largest car wash membership network. Our Newsroom features content tailor made for EverWash partners, prospect wash operators, car wash industry insiders, and any curious customers searching for a closer look at EverWash news and current events.";
      authorSocialMedia[i].href = "https://www.linkedin.com/company/everwash";
      break;
    default:
      avatars[i].src = "/img/everwash-newsroom.png";
      authorBio[i].innerText = "The EverWash Newsroom is your source for the latest updates, press releases, and headlines from EverWash — the nation's largest car wash membership network. Our Newsroom features content tailor made for EverWash partners, prospect wash operators, car wash industry insiders, and any curious customers searching for a closer look at EverWash news and current events.";
      authorSocialMedia[i].href = "https://www.linkedin.com/company/everwash";
  }
}

// PDF Download for articles

//
const links = document.querySelectorAll("#articleMain a[href$='.pdf']");

links.forEach((link) => {
  const button = document.createElement("button");
  button.classList.add(
    "btn",
    "btn-large",
    "btn-primary",
    "text-white",
    "text-decoration-none"
  );
  button.innerHTML = "Download PDF";
  button.onclick = () => {
    window.open(link.href, "_blank");
  };
  const newLine = document.createElement("br");
  link.parentNode.insertBefore(newLine, link);
  link.parentNode.replaceChild(button, link);
});

//Search Functionality

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent form submission

  const searchTerm = searchInput.value;
  const results = await fetchResults(searchTerm);

  displayResults(results);
});

async function fetchResults(searchTerm) {
  const response = await fetch(`/.netlify/functions/search?q=${searchTerm}`);
  const results = await response.json();

  return results;
}

function displayResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "No results found.";
    return;
  }

  const resultsList = document.createElement("ul");

  results.forEach((result) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = result.title;
    link.href = result.url;

    listItem.appendChild(link);
    resultsList.appendChild(listItem);
  });

  searchResults.appendChild(resultsList);
}