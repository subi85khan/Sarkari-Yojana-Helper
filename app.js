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
  "📝 Apply Now"
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
  "📝 Apply Now"
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
    "📝 Apply Now"
  );
  }
  }

  if (type === "ujjwala") {
    title.innerText = "🔥 PM Ujjwala Yojana";

    text.innerText =
      "PM Ujjwala Yojana के तहत eligible महिलाओं को LPG connection से जुड़ी सुविधा दी जाती है।";

    eligibility.innerText =
      "Eligibility PMUY के current government rules के अनुसार तय होती है।";

    documents.innerText =
      "KYC, Aadhaar, address/family details और bank account से जुड़ी आवश्यक जानकारी मांगी जा सकती है।";

    apply.innerText =
      "PMUY की official website से आवेदन और current eligibility की जानकारी प्राप्त करें।";

    addLink(
      "https://www.pmuy.gov.in/",
      "🔗 PM Ujjwala Yojana Official Website"
    );
  }

  if (type === "eshram") {
    title.innerText = "👷 e-Shram Card";

    text.innerText =
      "e-Shram Portal असंगठित क्षेत्र के श्रमिकों का National Database तैयार करने के लिए बनाया गया है।";

    eligibility.innerText =
      "असंगठित क्षेत्र में काम करने वाले eligible workers e-Shram पर registration कर सकते हैं।";

    documents.innerText =
      "Aadhaar और Aadhaar से linked mobile number की आवश्यकता होती है। Bank account details भी registration में मांगी जा सकती हैं।";

    apply.innerText =
      "Official e-Shram website पर जाकर registration और अन्य सेवाओं की जानकारी प्राप्त करें।";

    addLink(
      "https://eshram.gov.in/",
      "🔗 e-Shram Official Website"
    );
  }
  if (type === "ration") {
    title.innerText = "🍚 Ration Card / NFSA";

    text.innerText =
      "National Food Security Act (NFSA) के तहत eligible परिवारों को सरकारी खाद्यान्न सहायता उपलब्ध कराई जाती है।";

    eligibility.innerText =
      "Ration की eligibility और लाभ संबंधित राज्य के नियमों तथा NFSA के तहत निर्धारित criteria के अनुसार तय होते हैं।";

    documents.innerText =
      "Aadhaar, ration card से जुड़ी जानकारी और राज्य के नियमों के अनुसार आवश्यक documents मांगे जा सकते हैं।";

    apply.innerText =
      "अपने राज्य के official Food & Civil Supplies portal पर ration card और खाद्यान्न से जुड़ी सेवाओं की जानकारी प्राप्त करें।";

    addLink(
      "https://nfsa.gov.in/",
      "🔗 NFSA Official Website"
    );
  }
  if (type === "scholarship") {
    title.innerText = "🎓 Student Scholarship";

    text.innerText =
      "Students के लिए केंद्र और राज्य सरकार की अलग-अलग scholarship और education schemes उपलब्ध हैं।";

    eligibility.innerText =
      "Eligibility scholarship, class/course, family income, category और संबंधित government rules के अनुसार अलग हो सकती है।";

    documents.innerText =
      "Aadhaar, income certificate, domicile, caste certificate और school/college documents जरूरत के अनुसार मांगे जा सकते हैं।";

    apply.innerText =
      "अपने राज्य के official scholarship portal पर जाकर उपलब्ध scholarships और application process check करें।";

    addLink(
      "https://scholarships.gov.in/",
      "🔗 National Scholarship Portal"
    );
  }
}

function addLink(url, text) {
  const link = document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerText = text;
link.className = "apply-btn";
  link.style.display = "inline-block";
  link.style.marginTop = "12px";
  link.style.fontWeight = "bold";

  document.getElementById("apply").appendChild(link);
}

function closeDetails() {
  document.getElementById("details").style.display = "none";
  document.getElementById("yojanaList").style.display = "block";
}
function selectCategory(category) {
  categoryFilter.value = category;
  filterYojana();

  document.getElementById("yojanaList").scrollIntoView({
    behavior: "smooth"
  });
}
function showUpdate(type) {
  if (type === "new") {
    alert("📢 नई सरकारी योजना की जानकारी जल्द यहाँ अपडेट की जाएगी।");
  }

  if (type === "date") {
    alert("📅 आवेदन करने से पहले योजना की अंतिम तारीख जरूर जांचें।");
  }

  if (type === "documents") {
    alert("📄 आवेदन से पहले Aadhaar, Bank Account और जरूरी documents तैयार रखें।");
  }
}
