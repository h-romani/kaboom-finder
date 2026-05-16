function showVideo(videoSrc) {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    modal.style.display = 'flex';
    videoPlayer.play();
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}

let activeCategory = "All";

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
  
    const filtered =
      activeCategory === "All"
        ? data
        : data.filter(item => item.category === activeCategory);
  
    // 👉 CATEGORY TITLE LOGIC
    if (activeCategory === "All") {
      title.innerText = "All Products";
    } else {
      title.innerText = activeCategory;
    }
  
    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.onclick = () => showVideo(item.video);
  
      card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" >
  
        <p style="font-size: 22px;font-weight: bold; text-align: center; margin-top: 5px; color: #0066b3">${item.price}</p>
    `;
    
  
      gallery.appendChild(card);
    });
  }
  
  
renderGallery(products);
renderFilters(products);