




function addSiteToList(siteUrl, index) {
  const listItem = document.createElement('li');

  const link = document.createElement('a');
  link.href = siteUrl;
  link.target = "_blank";
  link.addEventListener('click', (event) => {
    event.preventDefault();
    chrome.tabs.create({ url: siteUrl });
  });


  const icon = document.createElement('img');
  icon.src = 'icons/globe.png';
  icon.alt = 'Website Icon'; 

  link.appendChild(icon); 
  link.append(siteUrl);


  const deleteButton = document.createElement('button');
  deleteButton.textContent = '✖';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    deleteSite(index);
  });

  listItem.appendChild(link);
  listItem.appendChild(deleteButton);
  siteList.appendChild(listItem);
}


const siteInput = document.getElementById('siteInput');
const addButton = document.getElementById('addButton');
const siteList = document.getElementById('siteList');
const noSitesMessage = document.getElementById('noSitesMessage');

const STORAGE_KEY = 'crucialSites';


async function loadSites() {
  siteList.innerHTML = ''; 
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEY);
    const sites = result[STORAGE_KEY] || []; 

    if (sites.length === 0) {
      noSitesMessage.style.display = 'block'; 
    } else {
      noSitesMessage.style.display = 'none'; 
      sites.forEach((site, index) => {
        addSiteToList(site, index);
      });
    }
  } catch (error) {
    console.error("Error loading sites from storage:", error);
    
  }
}


function addSiteToList(siteUrl, index) {
  const listItem = document.createElement('li');

  
  const link = document.createElement('a');
  link.href = siteUrl;
  link.textContent = siteUrl;
  link.target = "_blank"; 
 
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    chrome.tabs.create({ url: siteUrl });
  });


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'; 
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    deleteSite(index);
  });

  listItem.appendChild(link);
  listItem.appendChild(deleteButton);
  siteList.appendChild(listItem);
}


async function saveSites(sites) {
  try {
    await chrome.storage.sync.set({ [STORAGE_KEY]: sites });
    console.log("Sites saved:", sites);
  } catch (error) {
    console.error("Error saving sites to storage:", error);
  }
}


async function addNewSite() {
  let url = siteInput.value.trim();

  if (url) {
   
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    const result = await chrome.storage.sync.get(STORAGE_KEY);
    const sites = result[STORAGE_KEY] || [];

   
    if (!sites.includes(url)) {
      sites.push(url);
      await saveSites(sites);
      siteInput.value = ''; 
      loadSites(); 
    } else {
      alert("This site is already in your list!");
    }
  } else {
    alert("Please enter a website URL.");
  }
}


async function deleteSite(indexToDelete) {
  const result = await chrome.storage.sync.get(STORAGE_KEY);
  let sites = result[STORAGE_KEY] || [];

  if (indexToDelete > -1 && indexToDelete < sites.length) {
    sites.splice(indexToDelete, 1); 
    await saveSites(sites); 
    loadSites();
  }
}


addButton.addEventListener('click', addNewSite);

siteInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addNewSite();
  }
});


document.addEventListener('DOMContentLoaded', loadSites);