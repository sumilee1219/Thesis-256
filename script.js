const grid = document.getElementById("imageGrid");
const totalImages = 256;
const folder = "images/";
const prefix = "photo";

// --- Categories per image (multiple allowed) ---
const imageCategories = {
  3: ["space"],

  4: ["human","space"],
  5: ["human"],
  6: ["space"],

  7: ["space"],
  8: ["human", "space"],
  9: ["human"],

  10: ["human"],
  11: ["nature", "space"],
  12: ["human", "space"],

  13: ["space"],
  14: ["nature"],
  15: ["space"],

  18: ["human", "space"],

  19: ["human", "space"],
  21: ["nature", "space"],

  23: ["space"],

  25: ["human", "space","nature"],
  27: ["space"],

  28: ["space"],
  29: ["space"],
  30: ["space"],

  31: ["human","space"],
  32: ["nature"],  

  34: ["space"],
  36: ["human", "nature"],

  37: ["nature","space"],
  38: ["human","nature"],  
  39: ["nature"],

  40: ["human","space"],
  41: ["human","space"],
  42: ["human","space"],
  44: ["human","space"],
  45: ["human","space"],
  
  48: ["nature"],

  50: ["nature"],
  51: ["nature"],

  52:["nature","space"],
  54: ["human"],

  55:["human"],

  58:["human"],
  60: ["nature", "space"],

  61:["human"],

  64:["space"],
  65:["human"],
  66:["human"],

  69:["space"],  

  71:["nature"],
  72:["nature","space"],  
  73:["human","space"],
  74:["human"],
  76:["space"],
  78:["human", "space","nature"],
  79:["human", "space","nature"],
  81:["human"],
  83:["human", "space","nature"],
  84:["human", "space"],
  86:["human", "space","nature"],
  87:["space","nature"],
  88:["human"],
  89:["human","space"],
  91:["human","nature"],
  92:["nature"],
  93:["human"],
  94:["space"],
  96:["human"],
  98:["space","nature"],
  99:["space","nature"],
  100:["nature"],
  103:["nature"],
  104:["human", "space"],
  105:["nature"],
  107:["human"],
  108:["human"],
  109:["human"],
  110:["human", "space"],
  113:["space"],
  115:["human"],
  116:["nature"],
  119:["human", "space"],
  121:["human","nature"],
  122:["human"],
  123:["nature"],
  124:["human"],
  126:["human"],
  127:["human"],
  128:["human","nature"],
  130:["nature"],
  131:["human"],
  133:["human"],
  134:["nature"],
  135:["nature"],
  136:["nature"],
  138:["nature"],
  139:["nature"],
  140:["nature"],
  141:["human", "space"],
  142:["human", "space"],
  143:["space"],
  144:["space","nature"],
  146 :["space"],
  150:["human"],
  151:["human", "space"],
  152:["human","nature"],
  154:["human", "space"],
  155:["human", "space"],
  156:["human", "space"],
  157:["nature"],
  160:["space"],
  161:["human", "space"],
  163:["human", "space"],
  164:["human", "space"],
  165:["human"],
  166:["human", "space"],
  167:["human"],
  169:["space"],
  170:["space"],
  173:["human", "space","nature"],
  174:["human", "space"],
  175:["human"],
  176:["human"],
  179:["nature"],
  184:["human","nature"],
  188:["human", "space","nature"],
  192:["human"],
  193:["human"],
  194:["human", "space"],
  195:["space"],
  196:["space"],
  197:["space","nature"],
  198:["human", "space"],
  199:["human", "space"],
  200:["human", "space"],
  201:["human", "space"],
  202:["space"],
  203:["nature"],
  205:["human", "space","nature"],
  206:["space"],
  207:["human", "space","nature"],
  208:["human", "space"],
  209:["human","nature"],
  210:["human", "space"],
  211:["human", "space","nature"],
  212:["space"],
  213:["nature"],
  214:["human"],
  215:["human", "space","nature"],
  216:["human", "space"],
  222:["space"],
  223:["human", "space"],
  224:["human", "space","nature"],
  225:["space"],
  226:["human", "space"],
  227:["human","nature"],
  228:["space"],
  229:["human","nature"],
  230:["human"],
  231:["human", "space"],
  232:["human", "space","nature"],
  234:["nature", "space"],
  235:["human"],
  236:["space","nature"],
  237:["human","nature"],
  238:["human", "space"],
  240:["human"],
  242:["nature"],
  243:["human", "space"],
  244:["human", "space","nature"],
  245:["human", "space"],
  246:["nature"],
  247:["human", "space"],
  248:["human", "space"],
  249:["human", "space"],
  250:["human"],
  251:["human"],
  252:["space","nature"],
  253:["space"],
  254:["human", "space"],





  // ... continue for all images up to 256
};

// --- Metadata ---
const metadata = {
  1: { title: "Unknown", desc: "" },
2: { title: "Sans Relâche", desc: "Zoey, 2022" },
3: { title: "Flat Bells", desc: "Alexandre Estrela, 2023" },
4: { title: "Unknown", desc: "" },
5:{ title: "The Omek Interactive Grasp Teaser", desc: "" },
6: { title: "Roden Crater", desc: "ames Turrell"},
7: { title: "Reggio School, Madrid, Spain", desc: "Andrés Jaque, 2022" },
8: { title: "Unknown", desc: "" },
9: { title: "Unknown", desc: "Drôle de Monsieur / Paolo Zerbini" },
10: { title: "Caffeine Dreams", desc: "Bruce Nauman, 1987" },
11: { title: "Unknown", desc: "" },
12: { title: "Gong Jun", desc: "VOGUEplus, 2023" },
13: { title: "Momento duo in red", desc: "Aidan Elias" },
14: { title: "Fan Palm Cell Tower", desc: "Loren Javier" },
15: { title: "Unknown", desc: "" },
16: { title: "Unknown", desc: "" },
17: { title: "Unknown", desc: "" },
18: { title: "Unknown", desc: "" },
19: { title: "Unknown", desc: "" },
20: { title: "Unknown", desc: "" },
21: { title: "Unknown", desc: "" },
22: { title: "PK", desc: "Willem de Ridder" },
23: { title: "Untitled", desc: "Siah Armajani" },
24: { title: "Tower Pot", desc: "Aldo Moroni" },
25: { title: "The Beach", desc: "Bruno Caruso" },
26: { title: "Kagome Tomato Ketchup Advertisement Poster (With Tomato Image)", desc: "Shigeo Fukuda" },
27: { title: "Institutional Seat 1", desc: "Carolyn Lazard" },
28: { title: "The Stillness of Labor", desc: "Chris Larson" },
29: { title: "Curtain Wall", desc: "Rayyane Tabet" },
30: { title: "Streetview | Pool & Paper (Underground star ways)", desc: "Kahlil Robert Irving" },


31: { title: "deader than dead", desc: "Ligia Lewis" },
32: { title: "Waterhouse", desc: "Nils-Udo, 1982" },
33: { title: "Ditto", desc: "Barbara Stauffacher Solomon" },
34: { title: "Unheimlich", desc: "Casey Deming, Jonathan Kaiser" },
35: { title: "Happiness is Luxury", desc: "Alyssa Berg, David Cauchi, Darcy Megan Stanger (Dame Darcy), Frank Discussion, Ducklingmonster, Frank L. Gaard, Clay Geerdes, Paul Krassner, Deanna Lehman, Bob Levin, Amy Logheart, Claire Morel, Biljo White, David Wise, Stuart Wise" },
36: { title: "Shadows at the Crossroads", desc: "Ta-coumba T. Aiken, Rosemary Soyini Vinelle Guyton, Seitu Ken Jones" },
37: { title: "iss073e0457748", desc: "NASA, 2025" },
38: { title: "A film still from Big Fish", desc: "Tim Burton and featuring Ewan McGregor, 2003" },
39: { title: "Waterhouse", desc: "Nils Udo, 1982" },
40: { title: "Big Air Packages", desc: "Christo and Jeanne-Claude" },

41: { title: "“A Shot in the Dark", desc: "" },
42: { title: "Unknown", desc: "" },
43: { title: "Unknown", desc: "" },
44: { title: "Unknown", desc: "" },
45: { title: "The path of persistence", desc: "Adam Martinakis, 2012"},
46: { title: "Unknown", desc: "" },
47: { title: "Unknown", desc: "" },
48: { title: "Unknown", desc: "" },
49: { title: "Rythmes et silence — Poèmes Spatiaux", desc: "Ilse Garnier, 1980" },
50: { title: "A Large Oak", desc: "Lorenz Frølich, 1837" },
51: { title: "Cloud Study", desc: "J. C. Dahl 19th Century" },
52: { title: "Northern Red Oak", desc: "" },
53: { title: "Unknown", desc: "" },
54: { title: "Talking Heads", desc: "David Byrne, 1984" },
55: { title: "A Space Odyssey", desc: "Stanley Kubrick, 1968" },
56: { title: "Meccano parts list", desc: "1973" },
57: { title: "Kraft Marshmallows", desc: "Miracle Whip Ad - Top the Waldorf 1972" },
58: { title: "", desc: "Laure Vanhove & Lisa Mallinson" },
59: { title: "The Seould of Fluxus", desc: "Emmett Williams, 1993" },
60: { title: "Floating Pyramid", desc: "Pedro Reyes, 2004" },


61: { title: "Unknown", desc: "" },
62: { title: "Heavy Ghosted", desc: "Christine Sun Kim, 2024" },
63: { title: "Ghosted", desc: "Christine Sun Kim, 2024" },
64: { title: "How Many Ways Can You Disappear", desc: "Karyn Olivier, 2021" },
65: { title: "Criminal Data", desc: "Paolo Cirio, 2022" },
66: { title: "Movement Portraits—Renaldo", desc: "LaJuné McMillian, 2020" },
67: { title: "21", desc: "Garvin Sierra Vega, 2020" },
68: { title: "Vieques y Culebra", desc: "Garvin Sierra Vega, 2019" },
69: { title: "SOMEONE", desc: "Lauren Lee McCarthy, 2019" },
70: { title: "Untitled", desc: "Stanley Whitney, 2019" },

71: { title: "Papo Vives", desc: "Javier Orfón, 2018" },
72: { title: "Pellea[s]", desc: "Josephine Meckseper, 2019" },
73: { title: "One man’s ceiling is another man’s floor", desc: "Shiro Matsui, 2011" },
74: { title: "Rubber Pencil Devil", desc: "Alex Da Corte, 2018" },
75: { title: "untitled", desc: "Charles Ray, 2018" },
76: { title: "The Stranger", desc: "" },
77: { title: "Unknown", desc: "" },
78: { title: "You", desc: "Urs Fischer, 2007" },
79: { title: "Unknown", desc: "" },
80: { title: "Untitled", desc: "Michelle Grabner, 2023" },

81: { title: "Unknown", desc: "" },
82: { title: "Unknown", desc: "" },
83: { title: "Unknown", desc: "" },
84: { title: "Mirall", desc: "Jaume Plensa" },
85: { title: "Unknown", desc: "" },
86: { title: "The Cloud Pop Up", desc: "Shail Patal" },
87: { title: "Unknown", desc: "" },
88: { title: "Unknown", desc: "" },
89: { title: "Unknown", desc: "" },
90: { title: "daily reminder", desc: "Motamo" },

91: { title: "Blossom Chairs", desc: "Carlos Beñon Blazquez" },
92: { title: "Shell-phones", desc: "Katernia Shukshina" },
93: { title: "Mother Tongues and Father Throats", desc: "Slavs and Tatars, 2012" },
94: { title: "Staircase-III", desc: "Do Ho Suh, 2010" },
95: { title: "Unknown", desc: "" },
96: { title: "Unknown", desc: "" },
97: { title: "Unknown", desc: "" },
98: { title: "Unknown", desc: "" },
99: { title: "Unknown", desc: "" },
100: { title: "Giant Waterlily", desc: "Katie Scott" },

101: { title: "Feel the Poem in a Foreign City", desc: "Matilda" },
102: { title: "This Must Be the Place Leather Keychain", desc: "Alexa’s Americana" },
103: { title: "Spiral Jetty", desc: "Robert Smithson, 1970" },
104: { title: "Guillermo Santomà", desc: "" },
105: { title: "Unknown", desc: "" },
106: { title: "Unknown", desc: "" },
107: { title: "Unknown", desc: "" },
108: { title: "Unknown", desc: "" },
109: { title: "Unknown", desc: "" },
110: { title: "The Meditation Hall at Museum SAN", desc: "Tadao Ando" },

111: { title: "Unknown", desc: "" },
112: { title: "Unknown", desc: "" },
113: { title: "Unknown", desc: "" },
114: { title: "Unknown", desc: "" },
115: { title: "Unknown", desc: "" },
116: { title: "Unknown", desc: "" },
117: { title: "untitled lamp", desc: "Lydia Rosenberg, 2025" },
118: { title: "Screen (Spring)", desc: "Matt Paweski, 2025" },
119: { title: "The Rainbow Body", desc: "Ugo Rondinone, 2025" },
120: { title: "Untitled #1676", desc: "Lynne Woods Turner, 2023" },

121: { title: "Daily life amidst soaring temperatures in Gaza, Palestine", desc: "Majdi Fathi" },
122: { title: "Push-pull, empty-full ", desc: "Tana Hoban" },
123: { title: "Laptop Orchard", desc: "Benoit Lapray" },
124: { title: "The Eyes Never Lie", desc: "" },
125: { title: "Unknown", desc: "" },
126: { title: " Paloma Herrera", desc: "Howard Schatz, 1993" },
127: { title: "Unknown", desc: "" },
128: { title: "Spiral", desc: "Davis Bates" },
129: { title: "Unknown", desc: "" },
130: { title: "Album art for Ottico", desc: "TWOONKY" },

131: { title: "Unknown", desc: "Michael Wolf" },
132: { title: "Unknown", desc: "" },
133: { title: "Let's be good to each other", desc: "Ticklehead, 2016" },
134: { title: "Unknown", desc: "" },
135: { title: "Unknown", desc: "" },
136: { title: "Unknown", desc: "" },
137: { title: "Unknown", desc: "" },
138: { title: "Unknown", desc: "" },
139: { title: "Unknown", desc: "" },
140: { title: "Unknown", desc: "" },

141: { title: "Unknown", desc: "" },
142: { title: "Unknown", desc: "" },
143: { title: "Unknown", desc: "OOAA Arquitectura" },
144: { title: "", desc: "James Turrell" },
145: { title: "Unknown", desc: "" },
146: { title: "The In-Floor Hangout Area at the Delft Montessori School", desc: "Herman Hertzberger, 1966" },
147: { title: "Atmos Magazine", desc: "moonassi" },
148: { title: "The Future is in Our Hands ", desc: "Ruth Bernhard, 1938" },
149: { title: "One Language Traveller", desc: "FOS" },
150: { title: "minimalist self-portrait", desc: "Sergey Lis" },

151: { title: "The Dreamers", desc: "Bernardo Betolucci" },
152: { title: "Unknown", desc: "" },
153: { title: "Unknown", desc: "" },
154: { title: "Unknown", desc: "" },
155: { title: "The Sky is on the Earth", desc: "Asli Yilmazturk, 2017" },
156: { title: "Unknown", desc: "" },
157: { title: "Contact", desc: "Xenia Marie Ross Viray" },
158: { title: "Unknown", desc: "" },
159: { title: "Unknown", desc: "" },
160: { title: "Unknown", desc: "" },

161: { title: "Unknown", desc: "" },
162: { title: "", desc: "Barry Rosenthal" },
163: { title: "Unknown", desc: "" },
164: { title: "Unknown", desc: "" },
165: { title: "", desc: "Daria Blum" },
166: { title: "Primal Speech", desc: "Liz Magic Laser, 2016" },
167: { title: "Unknown", desc: "" },
168: { title: "Unknown", desc: "" },
169: { title: "Unknown", desc: "" },
170: { title: "Unknown", desc: "" },

171: { title: "Projects", desc: "UUTiles" },
172: { title: "Vintage Art Deco Nautilus Shell Table Lamp with Cast Metal Base", desc: "1930s" },
173: { title: "Unknown", desc: "" },
174: { title: "Bejing", desc: "Marc Riboud,1965"  },
175: { title: "Unknown", desc: "" },
176: { title: "Unknown", desc: "" },
177: { title: "Unknown", desc: "" },
178: { title: "Unknown", desc: "" },
179: { title: "", desc: "metaxis.digital" },
180: { title: "Unknown", desc: "" },

181: { title: "Unknown", desc: "" },
182: { title: "", desc: "Romina Malta" },
183: { title: "Unknown", desc: "" },
184: { title: "Unknown", desc: "" },
185: { title: "Wildcatter Labels", desc: "" },
186: { title: "r-chair", desc: "" },
187: { title: "Unknown", desc: "" },
188: { title: "", desc: "Amber Tree" },
189: { title: "Unknown", desc: "" },
190: { title: "Exit / Entry Stamps", desc: "Masahiko Sato" },

191: { title: "do not panic", desc: "" },
192: { title: "Unknown", desc: "" },
193: { title: "Unknown", desc: "" },
194: { title: "Unknown", desc: "" },
195: { title: "Centrum voor Cubische Constructies", desc: "Kubisch gewölbter Innenraum, 1970" },
196: { title: "Unknown", desc: "" },
197: { title: "Unknown", desc: "" },
198: { title: "Unknown", desc: "" },
199: { title: "Maurizio Cattelan", desc: "" },
200: { title: "Unknown", desc: "" },


201: { title: "Unknown", desc: "" },
202: { title: "", desc: "Carsten Holler" },
203: { title: "Unknown", desc: "" },
204: { title: "Unknown", desc: "" },
205: { title: "square of people", desc: "" },
206: { title: "Unknown", desc: "" },
207: { title: "Unknown", desc: "" },
208: { title: "Unknown", desc: "" },
209: { title: "Unknown", desc: "" },
210: { title: "Unknown", desc: "" },

211: { title: "Unknown", desc: "" },
212: { title: "Unknown", desc: "" },
213: { title: "Unknown", desc: "" },
214: { title: "Unknown", desc: "" },
215: { title: "Unknown", desc: "" },
216: { title: "Unknown", desc: "" },
217: { title: "Unknown", desc: "" },
218: { title: "Unknown", desc: "" },
219: { title: "Unknown", desc: "" },
220: { title: "Unknown", desc: "" },

221: { title: "Unknown", desc: "" },
222: { title: "Unknown", desc: "" },
223: { title: "Chair", desc: "Kumi Yamashita, 2016" },
224: { title: "Unknown", desc: "" },
225: { title: "Roden Crater", desc: "James Turrell" },
226: { title: "XXXLamp", desc: "Bart Lens, 2009" },
227: { title: "Unknown", desc: "" },
228: { title: "Unknown", desc: "" },
229: { title: "Unknown", desc: "" },
230: { title: "Man of the 20th Century", desc: "August Sander" },


231: { title: "Vivo Vitro Silico Situ", desc: "Zack Davis" },
232: { title: "Rubber House", desc: "Zeinstra van Gelderen"},
233: { title: "Unknown", desc: "" },
234: { title: "Light Green Leaves with Light", desc: "Hyun Jean Lee, 2012" },
235: { title: "Unknown", desc: "" },
236: { title: "Infaltable Gardens", desc: "" },
237: { title: "Unknown", desc: "" },
238: { title: "Bezuehungskiste", desc: "Sebastian Hempel, 2009" },
239: { title: "Unknown", desc: "" },
240: { title: "The Kiss", desc: "Phillip Leonian, 1973" },

241: { title: "Unknown", desc: "" },
242: { title: "My Beautiful Laundrette", desc: "Zinzi Edmundson" },
243: { title: "", desc: "Jaume Plensa" },
244: { title: "Unknown", desc: "" },
245: { title: "Unknown", desc: "" },
246: { title: "Unknown", desc: "" },
247: { title: "Déjà Vu II", desc: "Pia Männikkö"},
248: { title: "Parabiosis", desc: "Kendall Buster" },
249: { title: "Unknown", desc: "" },
250: { title: "Unknown", desc: "" },

251: { title: "Unknown", desc: "" },
252: { title: "Sino-French Science Park Church", desc: "Shanghai Dachuan Architects, 2019" },
253: { title: "Children’s Hospital", desc: "" },
254: { title: "Cocooning Cascades", desc: "" },
255: { title: "Unknown", desc: "" },
256: { title: "A 1983 launch poster for the Apple iMac G3", desc: "Think different campaign" },



  // …continue for all 256 images
};


// --- Build the grid ---
for (let i = 1; i <= totalImages; i++) {
  const item = document.createElement("div");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = `${folder}${prefix}${i}.jpg`;
  img.alt = metadata[i] ? metadata[i].title : `Photo ${i}`;
  img.dataset.index = i;
  img.dataset.category = JSON.stringify(imageCategories[i] || []);

  const addBtn = document.createElement("button");
  addBtn.classList.add("add-btn");
  addBtn.textContent = "+";

  item.appendChild(img);
  item.appendChild(addBtn); // add button **inside container**
  grid.appendChild(item);
}


// --- DOM elements ---
const buttons = document.querySelectorAll('.center-nav a');
const images = document.querySelectorAll('.grid .item img');
const body = document.body;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let currentIndex = 1;

// --- Category filtering ---
function activateCategory(categories) {
  const filters = Array.isArray(categories) ? categories : [categories];
   const aboutContent = document.getElementById('aboutContent');


  images.forEach(img => {
    const imgCats = JSON.parse(img.dataset.category);
    const btn = img.parentElement.querySelector(".add-btn");

    if (filters.includes('all') || imgCats.some(cat => filters.includes(cat))) {
      img.classList.add('active-category');
      img.classList.remove('disabled');
      if (btn) btn.style.display = "inline-block";
    } else {
      img.classList.remove('active-category');
      img.classList.add('disabled');
      if (btn) btn.style.display = "none";
    }
  });

  buttons.forEach(btn => {
    btn.classList.toggle('active-tab', filters.includes(btn.dataset.filter));
  });

const allTexts = document.querySelectorAll('.category-text');
allTexts.forEach(textDiv => textDiv.style.display = 'none'); // 모두 숨김

filters.forEach(filter => {
  const textDiv = document.getElementById(filter);
  if (textDiv) textDiv.style.display = 'block';
});

  const darkModeOn = !filters.includes('all')&& !filters.includes('about');

  // Apply to body
  body.classList.toggle('dark-mode', darkModeOn);

  // Apply to like button
  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) {
    likeBtn.classList.toggle('dark-mode', darkModeOn);




const closeCollection = document.getElementById('closeCollection');
if (closeCollection) {
  closeCollection.classList.toggle('dark-mode', darkModeOn)
}

const box = document.getElementById('box');

if (filters.includes('about')) {
  imageGrid.style.display = 'none';
  box.style.display = 'block';      // show the white box
  body.classList.remove('dark-mode');
  if (likeBtn) likeBtn.classList.remove('dark-mode');
  if (closeCollection) closeCollection.classList.remove('dark-mode');
} else {
  imageGrid.style.display = 'grid';
  box.style.display = 'none';       // hide the box
}


  }
}





// --- Click on nav tab ---
buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    activateCategory(btn.dataset.filter);
  });
});

// --- Click on image to open lightbox ---
grid.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && !e.target.classList.contains("disabled")) {
    showLightbox(parseInt(e.target.dataset.index));
  }
});

// --- Lightbox functions ---
function showLightbox(index) {
  const img = document.querySelector(`.grid .item img[data-index='${index}']`);
  if (!img) return;
  currentIndex = index;

  lightbox.style.display = "block";
  lightboxImg.src = img.src;
  lightboxTitle.textContent = metadata[index] ? metadata[index].title : "";
  lightboxDesc.textContent = metadata[index] ? metadata[index].desc : "";

  const cats = JSON.parse(img.dataset.category);
  if (cats.length > 0) activateCategory(cats);
  else activateCategory('all');
}

// --- Close lightbox ---
closeBtn.addEventListener("click", () => lightbox.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

// --- Prev/Next arrows ---
function getVisibleImages() {
  return Array.from(images).filter(img => !img.classList.contains('disabled'));
}

prevBtn.addEventListener("click", () => {
  const visible = getVisibleImages();
  const currentPos = visible.findIndex(img => parseInt(img.dataset.index) === currentIndex);
  const prevPos = (currentPos - 1 + visible.length) % visible.length;
  showLightbox(parseInt(visible[prevPos].dataset.index));
});

nextBtn.addEventListener("click", () => {
  const visible = getVisibleImages();
  const currentPos = visible.findIndex(img => parseInt(img.dataset.index) === currentIndex);
  const nextPos = (currentPos + 1) % visible.length;
  showLightbox(parseInt(visible[nextPos].dataset.index));
});



const collectedImages = []; // store selected images

// Add button click for each image
document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation(); // prevent triggering lightbox
    const img = btn.previousElementSibling; // image inside the same item
    const index = parseInt(img.dataset.index);

    if (!collectedImages.includes(index)) {
      collectedImages.push(index);
      btn.textContent = "★"; // optional feedback
    }
  });
});

// Like button click to show collection
const likeBtn = document.getElementById("likeBtn");
const collectionModal = document.getElementById("collectionModal");
const collectionContent = document.getElementById("collectionContent");
const closeCollection = document.getElementById("closeCollection");


likeBtn.addEventListener("click", () => {
  collectionContent.innerHTML = ""; // clear previous
  collectedImages.forEach(i => {
    const imgData = document.querySelector(`.grid .item img[data-index='${i}']`);
    if (imgData) {
      const newImg = document.createElement("img");
      newImg.src = imgData.src;
      newImg.style.width = "auto";
      newImg.style.height = "200px";
      newImg.style.margin = "5px";
      collectionContent.appendChild(newImg);
    }
  });
  collectionModal.style.display = "block";
  downloadBtn.style.display = "block";
});

// Close modal
closeCollection.addEventListener("click", () => {
  collectionModal.style.display = "none";

});









