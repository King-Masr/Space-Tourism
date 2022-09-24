let myTabs = document.querySelectorAll("#landing ul li");
let tabs = Array.from(myTabs);
tabs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.removeAttribute("id");
    });
    e.currentTarget.id = "active";
    let img = document.getElementById("img");
    let title = document.getElementById("title");
    let paragraph = document.getElementById("paragraph");
    let distance = document.getElementById("distance");
    let time = document.getElementById("time");
    switch (parseInt(e.currentTarget.dataset.child)) {
      case 1:
        img.src = "imgs/destination/moon.png";
        title.innerText = "MOON";
        paragraph.innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        distance.innerText = "384,400 km";
        time.innerText = "3 days";
        break;
      case 2:
        img.src = "imgs/destination/mars.png";
        title.innerText = "MARS";
        paragraph.innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        distance.innerText = "225 MIL. km";
        time.innerText = "9 months";
        break;
      case 3:
        img.src = "imgs/destination/europa.png";
        title.innerText = "EUROPA";
        paragraph.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        distance.innerText = "628 MIL. km";
        time.innerText = "3 years";
        break;
      case 4:
        img.src = "imgs/destination/titan.png";
        title.innerText = "TITAN";
        paragraph.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        distance.innerText = "1.6 BIL. km";
        time.innerText = "7 years";
        break;
    }
  });
});
