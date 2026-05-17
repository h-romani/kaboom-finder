function showVideo(item) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');

  videoPlayer.src = item.video;
  videoPlayer.play();

  document.getElementById("infoTitle").innerText = item.title;

  const list = document.getElementById("infoList");

  if (item.info && item.info.length) {
    list.innerHTML = item.info.map(i => `<li>${i}</li>`).join("");
    list.style.display = "block";
  } else {
    list.innerHTML = "";
    list.style.display = "none";
  }
  modal.style.display = 'flex';
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}

function showInfo(points) {
  const modal = document.getElementById("infoModal");
  const list = document.getElementById("infoList");

  list.innerHTML = points
    .map(point => `<li>${point}</li>`)
    .join("");

  modal.style.display = "flex";
}

function closeInfo() {
  document.getElementById("infoModal").style.display = "none";
}

let activeCategory = "All";
let searchQuery = "";

document
  .getElementById("searchInput")
  .addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderGallery(products);
  });

function renderFilters(data) {
    
    const filterBar = document.getElementById("filterBar");
  
    const categories = ["All", ...new Set(data.map(item => item.category))];
  
    filterBar.innerHTML = "";
  
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.innerText = cat;
  
      if (cat === activeCategory) btn.classList.add("active");
  
      btn.onclick = () => {
        activeCategory = cat;
        renderFilters(data);
        renderGallery(data);
      };
  
      filterBar.appendChild(btn);
    });
  }

function renderGallery(data) {
  const gallery = document.getElementById("gallery");
  const title = document.getElementById("categoryTitle");

  gallery.innerHTML = "";


  let filtered =
    activeCategory === "All"
      ? data
      : data.filter(item => item.category === activeCategory);

  
  filtered = filtered.filter(item => {
    const query = searchQuery.toLowerCase();
  
    return (
      item.title.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );
  }); 

  // 👉 CATEGORY TITLE LOGIC
  if (activeCategory === "All") {
    title.innerText = "All Products";
  } else {
    title.innerText = activeCategory;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => showVideo(item);

    card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" >
    <p>${item.price}</p>
  `;


  

    gallery.appendChild(card);
  });
}
  
  
renderGallery(products);
renderFilters(products);