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
    "https://omnix-local.netlify.app" +
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
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/maxpulcini/";
      break;
    case "Harriet Ayoade":
      avatars[i].src = "/img/harriet-ayoade.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/harrietayoade/";
      break;
    case "Nash Goudie":
      avatars[i].src = "/img/nash-goudie.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet consectetur.";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/nashgoudie/";
      break;
    case "Yamilette Roman":
      avatars[i].src = "/img/yamilette-roman.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/yamilette-roman/";
      break;
    case "Ryan Caldwell":
      avatars[i].src = "/img/ryan-caldwell.jpg";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/in/ryan-caldwell-709a60244/";
      break;
    case "Mike Christie":
      avatars[i].src = "/img/mike-christie.jpg";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
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
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/";
      break;
    default:
      avatars[i].src = "/img/everwash-newsroom.png";
      authorBio[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";
      authorSocialMedia[i].href = "https://www.linkedin.com/";
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
  const response = await fetch(`/netlify/functions/search?q=${searchTerm}`);
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