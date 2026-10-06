const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
  const value = search.value.toLowerCase();

  cards.forEach(function (card) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

function showDetails(type) {
  const details = document.getElementById("details");
  const yojanaList = document.getElementById("yojanaList");

  const title = document.getElementById("detailsTitle");
  const text = document.getElementById("detailsText");
  const eligibility = document.getElementById("eligibility");
  const documents = document.getElementById("documents");
  const apply = document.getElementById("apply");

  yojanaList.style.display = "none";
  details.style.display = "block";

  apply.innerHTML = "";

  if (type === "awas") {
  title.innerText = "🏠 PM Awas Yojana";

  text.innerText =
    "PM Awas Yojana के अंतर्गत eligible beneficiaries को housing support से जुड़ी सरकारी सहायता उपलब्ध है।";

  eligibility.innerText =
    "Eligibility beneficiary की category, income, existing house और संबंधित government rules पर depend करती है।";

  documents.innerText =
    "आवश्यक documents application category और local authority के current rules के अनुसार अलग हो सकते हैं।";

  apply.innerHTML =
    "Official PMAY-U website पर eligibility और application process check करें।";

  addLink(
    "https://pmaymis.gov.in/",
    "🔗 PM Awas Yojana Official Website"
  );
  }

function addLink(url, text) {
  const link = document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerText = text;

  link.style.display = "inline-block";
  link.style.marginTop = "12px";
  link.style.fontWeight = "bold";

  document.getElementById("apply").appendChild(link);
}

function closeDetails() {
  document.getElementById("details").style.display = "none";
  document.getElementById("yojanaList").style.display = "block";
}
