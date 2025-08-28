### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
1.
getElementById: শুধুমাত্র একটা element খুঁজে আনে,id ইউনিক হওয়া উচিত।
                id="project-box"
                document.getElementById("project-box")

getElementsByClassName:যত ক্লাস আছে সব নিয়ে আসে ,একই নামের অনেক জায়গায়     
                       ক্লাস থাকতে পারে 
                       HTMLCollection (array-like, কিন্তু সত্যিকারের array না)।

querySelector: CSS selector দিয়ে প্রথম matching element আনে।
               document.querySelector(".myClass")
               document.querySelector("#myId")

querySelectorAll(): CSS selector দিয়ে সব matching element  
                    আনে।                

2.                    নতুন element তৈরি করা
                 document.createElement() ব্যবহার করি।
             const newDiv = document.createElement("div");

                   কন্টেন্ট / অ্যাট্রিবিউট যোগ করা
              লেখা যোগ → textContent বা innerHTML
              class / id → className, setAttribute()

            newDiv.textContent = "আমি নতুন একটা div!";
            newDiv.className = "card"; // class যোগ
           newDiv.setAttribute("id", "new-box"); // id সেট

                  DOM এ বসানো (Insert করা)
                     appendChild()
            container এর সবচেয়ে শেষে যোগ করবে।
             document.body.appendChild(newDiv);                  

3. What is **Event Bubbling** and how does it work? 
         vent Bubbling হলো DOM এ event trigger হলে সেটা ভেতরের element থেকে শুরু করে ধাপে ধাপে বাইরের parent element পর্যন্ত চলে যাওয়া।
         মানে →
         যদি তুমি একটা child element (যেমন button) এ click করো, তাহলে event টি প্রথমে সেই button এ হবে → তারপর তার parent div এ যাবে → তারপর body → তারপর document → window পর্যন্ত পৌঁছাবে।           
          <div id="parent" style="padding:20px; background:lightblue;">
                 Parent
               <button id="child">Click Me</button>
          </div>
          document.getElementById("child").addEventListener("click", function() {
          console.log("Child button clicked");
          });

         document.getElementById("parent").addEventListener("click", function() {
         console.log("Parent div clicked");
         });

        document.body.addEventListener("click", function() {
        console.log("Body clicked");
        });

4. What is **Event Delegation** in JavaScript? Why is it useful?
          Event Delegation মানে হলো –
          একটা parent element এ event listener বসানো, যাতে করে তার ভেতরের সব child element এর event গুলো automatically handle করা যায়।

         মানে:
          প্রতিটি child element এ আলাদা আলাদা listener বসানোর দরকার নেই → এক parent এ বসালেই সব child এর ইভেন্ট ধরা যাবে।
 <ul id="menu">
  <li class="item">Home</li>
  <li class="item">About</li>
  <li class="item">Contact</li>
</ul>
document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target && e.target.matches("li.item")) {
    console.log("Clicked:", e.target.textContent);
  }
});
 কেন Event Delegation দরকার?
 কম কোড → Efficient
প্রতিটি child এ আলাদা listener বসাতে হয় না।
Dynamic elements handle করা সহজ
DOM এ যদি পরে নতুন child যোগ হয়, তাহলেও parent এর listener ওগুলো ধরতে পারবে।
Performance ভালো
এক parent এ ১টা listener vs ১০০টা child এ ১০০টা listener → parent এরটা অনেক efficient।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

    preventDefault()	
    কোনো element এর default behavior বন্ধ করে (যেমন link এ না যাওয়া, form submit না হওয়া)	Default action বন্ধ করতে
    অনেক HTML element এর নিজের একটা default action থাকে।
    যেমন:
      <a> ট্যাগ → ক্লিক করলে অন্য পেজে নিয়ে যায়।

      <form> → submit করলে পেজ রিলোড হয়।

      preventDefault() 
        <a href="https://google.com" id="link">Go to Google</a>
         <script>
    document.getElementById("link").addEventListener("click", function(e) {
      e.preventDefault(); // লিংক কাজ করবে না
      console.log("Link click blocked!");
     });
     </script>


   stopPropagation()	

   Event এর উপরে propagate হওয়া বন্ধ করে (child → parent এ আর যাবে না)	Bubbling / Capturing বন্ধ করতে
   vent Bubbling বা Event Capturing থামায়।
   মানে → event আর parent element এর দিকে propagate করবে না।
   <div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation(); // ইভেন্ট আর parent এ যাবে না
  console.log("Child button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent div clicked");
});
</script>
