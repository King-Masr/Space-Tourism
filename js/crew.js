let myTabs = document.querySelectorAll("#landing ul li");
let tabs = Array.from(myTabs);
tabs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.removeAttribute("id");
    });
    let name = document.getElementById("name");
    let title = document.getElementById("title");
    let paragraph = document.getElementById("paragraph");
    let img = document.getElementById("img");
    e.currentTarget.id = "active";
    switch (parseInt(e.currentTarget.dataset.child)) {
      case 1:
        title.innerText = "COMMANDER";
        name.innerText = "DOUGLAS HURLEY";
        paragraph.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        img.style.width = "514px";
        img.src = "imgs/crew/douglas-hurley.png";
        break;
      case 2:
        title.innerText = "MISSION SPECIALIST";
        name.innerText = "MARK SHUTTLEWORTH";
        paragraph.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        img.style.width = "433px";
        img.src = "imgs/crew/mark-shuttleworth.png";
        break;
      case 3:
        title.innerText = "PILOT";
        name.innerText = "VICTOR GLOVER";
        paragraph.innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
        img.style.width = "549px";
        img.src = "imgs/crew/victor-glover.png";
        break;
      case 4:
        title.innerText = "FLIGHT ENGINEER";
        name.innerText = "ANOUSHEH ANSARI";
        paragraph.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
        img.style.width = "575px";
        img.src = "imgs/crew/anousheh-ansari.png";
        break;
    }
  });
});
