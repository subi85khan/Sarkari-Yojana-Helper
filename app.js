 const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
  const value = search.value.toLowerCase();

  cards.forEach(function (card) {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
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
    title.innerText = "🌾 PM Kisan";
    text.innerText = "PM Kisan ek kendriya yojana hai jo eligible landholding farmer families ko financial support provide karti hai.";
    eligibility.innerText = "Eligible landholding farmer families, scheme ke official rules ke according.";
    documents.innerText = "Aadhaar, bank account details aur land-related documents ki zarurat ho sakti hai.";
    apply.innerText = "Official PM Kisan portal par jaakar registration aur application process check karein.";
  }

  if (type === "awas") {
    title.innerText = "🏠 PM Awas Yojana";
    text.innerText = "PM Awas Yojana eligible beneficiaries ko housing support dene ke liye government scheme hai.";
    eligibility.innerText = "Eligibility scheme ke current rules aur beneficiary category par depend karti hai.";
    documents.innerText = "Aadhaar, address proof, bank details aur anya required documents.";
    apply.innerText = "Official government portal par eligibility aur application process check karein.";
  }

  if (type === "mahila") {
    title.innerText = "👩 Mahila Yojana";
    text.innerText = "Mahilaon ke liye alag-alag government schemes available hain.";
    eligibility.innerText = "Har yojana ki eligibility alag hoti hai.";
    documents.innerText = "Aadhaar, bank account aur scheme ke according anya documents.";
    apply.innerText = "Jis specific mahila yojana ke liye apply karna ho, uski official website par process check karein.";
  }
}

function closeDetails() {
  document.getElementById("details").style.display = "none";
  document.getElementById("yojanaList").style.display = "block";
}
