let myTabs = document.querySelectorAll("#landing ul li");
let tabs = Array.from(myTabs);
tabs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.removeAttribute("id");
    });
    let title = document.getElementById("title");
    let paragraph = document.getElementById("paragraph");
    let img = document.getElementById("img");
    e.currentTarget.id = "active";
    switch (parseInt(e.currentTarget.dataset.child)) {
      case 1:
        title.innerText = "LAUNCH VEHICLE";
        paragraph.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        img.src = "imgs/technology/launch-vehicle-portrait.jpg";
        break;
      case 2:
        title.innerText = "SPACEPORT";
        paragraph.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
        img.src = "imgs/technology/spaceport-portrait.jpg";
        break;
      case 3:
        title.innerText = "SPACE CAPSULE";
        paragraph.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        img.src = "imgs/technology/space-capsule-portrait.jpg";
        break;
    }
  });
});
