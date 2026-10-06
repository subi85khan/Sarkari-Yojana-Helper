const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const stateFilter = document.getElementById("stateFilter");
const categoryFilter = document.getElementById("categoryFilter");

function filterYojana() {
  const searchValue = search.value.toLowerCase();
  const stateValue = stateFilter.value;
  const categoryValue = categoryFilter.value;

  cards.forEach(function (card) {
    const text = card.innerText.toLowerCase();
    const type = card.dataset.type || "";
    const states = card.dataset.state || "";

    const searchMatch = text.includes(searchValue);
    const categoryMatch =
      categoryValue === "" || type.includes(categoryValue);
    const stateMatch =
      stateValue === "" || states.includes(stateValue);

    if (searchMatch && categoryMatch && stateMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

search.addEventListener("input", filterYojana);
stateFilter.addEventListener("change", filterYojana);
categoryFilter.addEventListener("change", filterYojana);

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

  if (type === "pmkisan") {
    title.innerText = "🌾 PM Kisan Samman Nidhi";

    text.innerText =
      "PM-KISAN के तहत eligible landholding farmer families को ₹6,000 प्रति वर्ष 3 बराबर किस्तों में DBT के जरिए दिया जाता है।";

    eligibility.innerText =
      "Eligible landholding farmer families scheme के नियमों के अनुसार लाभ ले सकती हैं।";

    documents.innerText =
      "Aadhaar, bank account details और scheme में मांगी गई आवश्यक जानकारी/दस्तावेज।";

    apply.innerText =
      "Official PM-KISAN website पर New Farmer Registration और e-KYC की सुविधा उपलब्ध है।";

    addLink(
      "https://pmkisan.gov.in/",
      "🔗 PM Kisan Official Website"
    );
  }

  if (type === "awas") {
    title.innerText = "🏠 PM Awas Yojana";

    text.innerText =
      "PM Awas Yojana के अंतर्गत eligible beneficiaries को housing support से जुड़ी सरकारी सहायता उपलब्ध है।";

    eligibility.innerText =
      "Eligibility beneficiary की category, income, existing house और संबंधित government rules पर depend करती है।";

    documents.innerText =
      "आवश्यक documents application category और local authority के current rules के अनुसार अलग हो सकते हैं।";

    apply.innerText =
      "Official PMAY-U website पर eligibility और application process check करें।";

    addLink(
      "https://pmaymis.gov.in/",
      "🔗 PM Awas Yojana Official Website"
    );
  }

  if (type === "mahila") {
    title.innerText = "👩 महिला योजनाएँ";

    text.innerText =
      "महिलाओं के लिए सरकार की कई योजनाएँ उपलब्ध हैं।";

    eligibility.innerText =
      "हर महिला योजना की eligibility अलग होती है।";

    documents.innerText =
      "आवश्यक documents संबंधित योजना के अनुसार अलग हो सकते हैं।";

    apply.innerText =
      "संबंधित योजना की official government website पर current application process check करें।";

    addLink(
      "https://wcd.gov.in/",
      "🔗 Official Women & Child Development Website"
    );
  }

  if (type === "ayushman") {
    title.innerText = "🏥 Ayushman Bharat";

    text.innerText =
      "Ayushman Bharat के तहत eligible beneficiaries को सरकारी स्वास्थ्य सेवाओं और स्वास्थ्य बीमा से जुड़ी सुविधाएँ मिलती हैं।";

    eligibility.innerText =
      "Eligibility संबंधित सरकारी database और current scheme rules के अनुसार तय होती है।";

    documents.innerText =
      "Aadhaar और scheme में मांगी गई आवश्यक जानकारी/दस्तावेज।";

    apply.innerText =
      "Ayushman Bharat की official website पर अपनी eligibility और उपलब्ध सुविधाओं की जानकारी check करें।";

    addLink(
      "https://pmjay.gov.in/",
      "🔗 Ayushman Bharat Official Website"
    );
  }
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
