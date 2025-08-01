//buat scroll otomatis jika di klik di bagian navbarnya
function scrolltosection(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.onscroll = function(){
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 3) {
        navbar.classList.add("bawah");
        navbar.classList.remove("transparan");  
    } else {
        navbar.classList.add("transparan");
        navbar.classList.remove("bawah");
    }
    
};

// navbar di mode hp

// saat di tampilkan
const icon = document.getElementById('icon');
const gantimode = document.getElementById('ubahbentuk');

icon.addEventListener('click', () => {
  gantimode.classList.toggle('show');
});

//saat klik navbar maka navbar menghilang

const menuItems = gantimode.querySelectorAll('li span');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    gantimode.classList.remove('show');
  });
});

//slide gambar gamennya

const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


let index = 1;
let transitioning = false;

const images = [
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1741381848",
title: "Buy Grand Theft Auto V Enhanced / GTA V",
price: "Rp. 219.500"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
title: "Red Dead Redemption 2",
price: "Rp. 879.000"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/6b6b46089067683cecf6acfc92b39fc4c72e3fac/header.jpg?t=1744744220",
title: "Baldur's Gate 3",
price: "Rp. 699.999"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3241660/1ea445e044a2d5b09cfa8291350b63ebed6e5741/header.jpg?t=1743517226",
title: "R.E.P.O.",
price: "Rp. 90.999"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1736385712",
title: "Resident Evil 4",
price: "Rp. 297.999"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg?t=1744248682",
title: "SILENT HILL 2",
price: "Rp. 937.000"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg?t=1743699535",
title: "EA SPORTS FC™ 25",
price: "Rp. 239.700"
},
{
url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/609760/header.jpg?t=1734113861",
title: "The Eagle's Heir",
price: "Rp. 56.499"
},
];

function buildSlides() {
  slider.innerHTML = "";

  const cloneLast = createSlide(images[images.length - 1]);
  slider.appendChild(cloneLast);

  images.forEach(data => {
    const slide = createSlide(data);
    slider.appendChild(slide);
  });

  const cloneFirst = createSlide(images[0]);
  slider.appendChild(cloneFirst);

  setTimeout(() => updatePosition(), 50);
}

function createSlide(data) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = `url('${data.url}')`;

  const textBox = document.createElement("div");
  textBox.className = "slide-text";

  const title = document.createElement("div");
  title.className = "title";
  title.innerText = data.title;

  const price = document.createElement("div");
  price.className = "price";
  price.innerText = data.price;

  textBox.appendChild(title);
  textBox.appendChild(price);

  slide.appendChild(textBox);
  return slide;
}

function updatePosition(animate = true) {
  const allSlides = slider.querySelectorAll(".slide");
  allSlides.forEach(slide => slide.classList.remove("active"));
  if (allSlides[index]) allSlides[index].classList.add("active");

  slider.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
  slider.style.transform = `translateX(-${index * 100}%)`;
}

next.onclick = () => {
  if (transitioning) return;
  transitioning = true;
  index++;
  updatePosition();

  setTimeout(() => {
    if (index === images.length + 1) {
      index = 1;
      updatePosition(false);
    }
    transitioning = false;
  }, 510);
};

prev.onclick = () => {
  if (transitioning) return;
  transitioning = true;
  index--;
  updatePosition();

  setTimeout(() => {
    if (index === 0) {
      index = images.length;
      updatePosition(false);
    }
    transitioning = false;
  }, 510);
};



buildSlides();

//bagian login

const params = new URLSearchParams(window.location.search);
     nama = params.get("nama");

    if (nama) {
      document.getElementById("nama").textContent = nama;
    }
    
//pindah ke html lain atau log out

function login(){
  if(!nama){//jika belom login maka otomatis ke halaman login
    window.location.href = "html/login.html";
  }
  else{//jika sudah login maka keluar pop up, apakah yakin bener bener pengen log out?
    document.getElementById('logout').style.display="flex";
  }
}

//button untuk melanjutkan log out atau tidak jadi 

function batal(){//jika tidak jadi log out maka pop up hilang
  document.getElementById('logout').style.display="none";
}
function lanjut(){//jika memang mau log out maka diarahkan ke halaman login 
  window.location.href= "html/login.html";
}

//buat searcing 

function searchSteam() {
    const query = document.getElementById('steamSearchInput').value.trim();
    if (query) {
        const steamURL = 'https://store.steampowered.com/search/?term=' + encodeURIComponent(query);
        window.open(steamURL, '_blank'); // buka di tab baru
    } else {
        alert('Masukin nama game dulu bro!');
    }
}

//pembayaran

function bayar(){
    window.location.href = "html/bayar.html";
}

//bagian button tataporfil

const kontak = document.getElementById('isikontak');
const tombol = document.getElementById('tampilan');

tombol.addEventListener('click', () => {
  kontak.classList.toggle('tampilkan');

  if (kontak.classList.contains('tampilkan')) {
    tombol.innerText = "Sembunyikan ∧";
  } else {
    tombol.innerText = "Tampilkan Anggota ∨";
  }
});
