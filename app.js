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

  if (type === "pmkisan") {
    title.innerText = "🌾 PM Kisan Samman Nidhi";

    text.innerText =
      "PM-KISAN के तहत eligible landholding farmer families को ₹6,000 प्रति वर्ष 3 बराबर किस्तों में Direct Benefit Transfer (DBT) के जरिए दिया जाता है।";

    eligibility.innerText =
      "Eligible landholding farmer families scheme के नियमों के अनुसार लाभ ले सकती हैं। कुछ categories को scheme से बाहर रखा गया है।";

    documents.innerText =
      "Aadhaar और bank account details सहित scheme में मांगी गई आवश्यक जानकारी/दस्तावेज जरूरी हो सकते हैं।";

    apply.innerText =
      "Official PM-KISAN website पर New Farmer Registration से registration किया जा सकता है। Registered farmers के लिए e-KYC mandatory है।";

    const officialLink = document.createElement("a");
    officialLink.href = "https://pmkisan.gov.in/";
    officialLink.target = "_blank";
    officialLink.rel = "noopener noreferrer";
    officialLink.innerText = "🔗 Official PM-Kisan Website";

    apply.appendChild(document.createElement("br"));
    apply.appendChild(document.createElement("br"));
    apply.appendChild(officialLink);
  }

  if (type === "awas") {
    title.innerText = "🏠 PM Awas Yojana";

    text.innerText =
      "PM Awas Yojana के अंतर्गत eligible beneficiaries के लिए housing support से जुड़ी सरकारी सहायता उपलब्ध है।";

    eligibility.innerText =
      "Eligibility संबंधित PM Awas Yojana और beneficiary category के current government rules पर depend करती है।";

    documents.innerText =
      "आवश्यक documents संबंधित योजना और आवेदन प्रक्रिया के अनुसार अलग हो सकते हैं।";

    apply.innerText =
      "Official government portal पर current eligibility और application process check करें।";
  }

  if (type === "mahila") {
    title.innerText = "👩 महिला योजनाएँ";

    text.innerText =
      "महिलाओं के लिए केंद्र और राज्य सरकार की अलग-अलग योजनाएँ उपलब्ध हैं।";

    eligibility.innerText =
      "हर महिला योजना की eligibility अलग होती है।";

    documents.innerText =
      "आवश्यक documents संबंधित योजना के अनुसार अलग हो सकते हैं।";

    apply.innerText =
      "जिस specific महिला योजना के लिए आवेदन करना हो, उसकी official government website पर current process check करें।";
  }
}

function closeDetails() {
  document.getElementById("details").style.display = "none";
  document.getElementById("yojanaList").style.display = "block";
}
