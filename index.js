console.log("connected");
// Initial values
let heartCount = 0;
let coinCount = 100; 
let copyCount = 2;

// Navbar dhoro
const heartCountEl = document.getElementById("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");

// Call history dhoro
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history"); 

//Services container dhoro
const servicesBox = document.getElementById("services-box"); 
// Service Card Events er modhe kaj
servicesBox.addEventListener ("click",function(e){
     // Heart click er kaj
     if (e.target.closest(".fa-heart")) {
        heartCount ++;
        heartCountEl.textContent = heartCount;
    }

    //  Copy button
  if (e.target.closest("button") && e.target.closest("button").textContent.includes("Copy")) {
    const card = e.target.closest(".relative");//parent ta k dhoro  
    const number = card.querySelector(".font-extrabold").textContent.trim(); //

    navigator.clipboard.writeText(number);
    alert(`নাম্বার কপি হয়েছে ${number}`);

    copyCount++;
    copyCountEl.textContent = copyCount;
  }


   // 📞 Call button
  if (e.target.closest("button") && e.target.closest("button").textContent.includes("Call")) {
    const card = e.target.closest(".relative");
    const serviceName = card.querySelector("h3").textContent.trim();
    const number = card.querySelector(".font-extrabold").textContent.trim();

    if (coinCount < 20) {
      alert("আপনার পর্যাপ্ত কয়েন নেই । কল করার জন্য আপনার কমপক্ষে ২০ কয়েন লাগবে");
      return;
    }

    // Update coins
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    alert(`📞 Calling ${serviceName} ${number}...`);

   //Local time
    const time = new Date().toLocaleTimeString();

    // History item design ( aside-এর child style er moto)
    const historyItem = document.createElement("div");
    historyItem.className = "bg-gray-50 rounded-lg p-3 flex items-center justify-between shadow-sm";
    historyItem.innerHTML = `
      <div>
        <p class="font-semibold text-sm">${serviceName}</p>
        <p class="text-xs text-gray-500">${number}</p>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-600">${time}</p>
      </div>
    `;

    // Add to history list
    historyList.append(historyItem);
  }
});

//  Clear history button
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";

  // Navbar counters reset
  heartCount = 0;
  coinCount = 100;   //   initial coin set kore dese (যেমন 100)
  copyCount = 0;

  // UI তে আবার update হবে
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;
});








//------------- copy------------
// if (e.target.closest("button") && e.target.closest("button").textContent.includes("Copy")) {
//     const card = e.target.closest(".relative");//parent ta k dhoro ba .closest(".relative") মানে ওই element এর সবচেয়ে কাছে থাকা parent element খুঁজে বের করবে যেটার class "relative" আছে। 
      
//     const number = card.querySelector(".font-extrabold").textContent.trim(); // এখন আমরা card এর ভেতর খুঁজছি।


// .querySelector(".font-extrabold") → ওই card এর ভেতরে যেই element এর class "font-extrabold" আছে সেটা ধরবে।

// .textContent → সেই element এর ভেতরের লেখা (text) নেবে।

// .trim() → টেক্সট এর শুরু ও শেষে ফাঁকা জায়গা (space / newline) মুছে দেবে।
// ✅ ফলে তুমি পরিষ্কারভাবে ওই card এর number (যেমন 999 বা অন্য যেটা লেখা আছে) পেয়ে যাচ্ছো।

//     navigator.clipboard.writeText(number);
//     alert(`নাম্বার কপি হয়েছে ${number}`);

//     copyCount++;
//     copyCountEl.textContent = copyCount;