const resourceTypes = ["簡報", "教案", "短影音", "學習單", "影片", "遊戲", "互動網頁"];

const courses = [
  {
    topic: "三年級小記者",
    designer: "李主任",
    profile: "https://padlet.com/ma3238",
    resources: {
      "簡報": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/YDgnZeRAOEDpWwrA",
      "教案": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/jpoxajRvbg07abPE",
      "短影音": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/YBl3Z2KpPl2gWv16",
      "學習單": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/lkDVaKD2R06xQPp9",
      "影片": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/mDRxWBKN0BgPajb1",
      "遊戲": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/x5A7arRjbEkxawr6",
      "互動網頁": "https://padlet.com/ma3238/padlet-s025nn1p6k327kkp3f2e/wish/kxodWG5AOdKDQgP7"
    }
  },
  {
    topic: "音樂教學", designer: "子田老師", resources: {
      "簡報": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/goElQy5kN93GQ3yY",
      "教案": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/1xkVaqRO3NL2Ql0e",
      "短影音": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/Xb8YaLPOjemXayn1",
      "學習單": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/E1P8aXrmngANZwA9",
      "影片": "https://padlet.com/cew12345/1151121-22-https-padlet-com-cew12345-1151121-s025mhug5pg8dmjkd4zz/wish/wKmOZ5KwEJe7azMA",
      "遊戲": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/mlNDZ3KE2YJYZznG",
      "互動網頁": "https://padlet.com/ma1683/padlet-s025nn0ih1tclwyb4abb/wish/O7A9QmRD7p3JZ6x3"
    }
  },
  {
    topic: "劇本賞析到大作家", designer: "靖章老師", resources: {
      "簡報": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/mlNDZ3KE28eAZznG",
      "教案": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/PR3NWxyklRm9ab0O",
      "短影音": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/AL83WzvkOdL8W0Pg",
      "學習單": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/v3w8Zwxk21mgWN52",
      "影片": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/XGyBQb3MxDr0ZL6K",
      "遊戲": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/E851Q0Kpdj7daVAb",
      "互動網頁": "https://padlet.com/lcc0001/padlet-s025nn3614nrhn3fghx1/wish/AL83WzvNJJlzW0Pg"
    }
  },
  {
    topic: "捻花惹草", designer: "喬湞老師", resources: {
      "簡報": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/9kmlZV23xemAZpgV",
      "教案": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/O7A9QmRD7YonZ6x3",
      "短影音": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/j40PQD7wjwdjavXB",
      "學習單": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/LNV1Q7KpVkzrQmq3",
      "影片": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/lkDVaKDNr1eRQPp9",
      "遊戲": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/PVKBQO0AovOVZj5x",
      "互動網頁": "https://padlet.com/t0125ninakuo888/qq-s025nn0i2eg6o1m5qcbr/wish/lDK1ZRAJRvgEQJ9z"
    }
  },
  {
    topic: "臺灣的史前時代與大航海時代", designer: "芷霓老師", profile: "https://padlet.com/ma9260", resources: {
      "教案": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/BJkrQA1zezJwQEge",
      "短影音": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/L8KjW9BONOmoaJbv",
      "學習單": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/KxJvagRxAmjpWAg0",
      "影片": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/wKmOZ5KwEJ3eazMA",
      "遊戲": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/j40PQD7wj5ezavXB",
      "互動網頁": "https://padlet.com/ma9260/padlet-n7kijs6hrnhdddvz/wish/kxodWG5AOdpEQgP7"
    }
  },
  {
    topic: "一年級寫日記", designer: "蔡10", resources: {
      "簡報": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/J24jalRdwDn4Z0A1",
      "教案": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/BJkrQA1zezp2QEge",
      "短影音": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/E1P8aXrmng85ZwA9",
      "學習單": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/x5m7aoRjyjJGWkAV",
      "影片": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/lkDVaKDNrBGwQPp9",
      "遊戲": "https://padlet.com/howpai/115-1-s025nn0zqt71w6uaxyhk/wish/PR3NWxyklEB3ab0O"
    }
  },
  {
    topic: "小記者與故事創作", designer: "宥瑄", resources: {
      "簡報": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/mlNDZ3KE28nNZznG",
      "教案": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/L8KjW9BONM0YaJbv",
      "短影音": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/yEPVZkRbJN9DQb0Y",
      "學習單": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/lkROZP9VozOvWjMg",
      "影片": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/XGyBQb3MxEj3ZL6K",
      "遊戲": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/e9YpQNXAJ5JXWxjM",
      "互動網頁": "https://padlet.com/ocean20141/115-s025nn0u1l4i55h3d35u/wish/pRxDZ4KLk4oqQ183"
    }
  },
  {
    topic: "劇本改寫", designer: "珮瑄主任", resources: {
      "簡報": "https://padlet.com/ma5204/padlet-s025nmuwy135rtaqfxel/wish/0BA3ZpRJMLLxanPb",
      "教案": "https://padlet.com/ma5204/padlet-s025nmuwy135rtaqfxel/wish/Xb8YaLPOjOqVayn1",
      "短影音": "https://padlet.com/ma5204/padlet-s025nmuwy135rtaqfxel/wish/R7dXadKVqJVyW6bl",
      "學習單": "https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/3108266140/55cebcd4c0332dcb00af1fdc7cd181b5/___.pdf?token=r2pTLdeOSvz9LSBQFJ6o6AKDbJDMjdWg9_stHwzkV1O-hS0yhO1JZtznA65w7B2SrB52OOW01VAhwjnfpuknEukDCKZEJzDADDlDyLwo4EB85YySEEXU3s9MZZWGM2TIfMuAqlXFkM-HcFOlihjZSAzdfcERagxeXzCs0lJCd5a8eiVt_UJKBaiUVzFxLLcMZYsuYDwArZjZ8Fy7-MIjIloi5T_I1Cq1JeBZ77bJeqQYkbvgZTMdttzVWpshL1wH",
      "影片": "https://padlet.com/ma5204/padlet-s025nmuwy135rtaqfxel/wish/e9YpQNXNzzYAWxjM",
      "遊戲": "https://padlet.com/ma5204/padlet-s025nmuwy135rtaqfxel/wish/mlNDZ3KE2vO0ZznG"
    }
  },
  {
    topic: "美味寫作", designer: "傳迪老師", resources: {
      "遊戲": "https://padlet.com/ma2313_2/padlet-s025otupie79z7rzx0mk/wish/AL83WzvkObvOW0Pg"
    }
  },
  {
    topic: "部件識字", designer: "仁謙老師", resources: {
      "影片": "https://padlet.com/910429asdf/padlet-s025nn06jm50ze1n8k7m/wish/jpoxajRO69dnabPE"
    }
  }
];

const accents = [
  ["#0284c7", "#dff5ff"], ["#0891b2", "#d8f8fb"], ["#0f766e", "#d7f8f2"],
  ["#2563a3", "#e1efff"], ["#0369a1", "#e0f2fe"], ["#2b7a78", "#ddf5ef"],
  ["#1877a5", "#e3f6ff"], ["#0d7792", "#dff7fa"], ["#3c6e9e", "#e7f0fb"], ["#176b87", "#e1f4f8"]
];

const icons = {
  "簡報": "▣", "教案": "≡", "短影音": "◉", "學習單": "▤", "影片": "▶", "遊戲": "◆", "互動網頁": "◎"
};

const grid = document.querySelector("#courseGrid");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const resetButton = document.querySelector("#resetButton");
const resultSummary = document.querySelector("#resultSummary");
const emptyState = document.querySelector("#emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
}

function courseCard(course, index) {
  const [accent, soft] = accents[index % accents.length];
  const available = resourceTypes.filter(type => course.resources[type]);
  const designer = course.profile
    ? `<a class="designer" href="${course.profile}" target="_blank" rel="noopener noreferrer" aria-label="開啟${escapeHtml(course.designer)}的作品首頁">設計者｜${escapeHtml(course.designer)}</a>`
    : `<span class="designer">設計者｜${escapeHtml(course.designer)}</span>`;

  const links = resourceTypes.map(type => {
    const url = course.resources[type];
    if (!url) return `<span class="resource-missing" aria-label="${type}尚未提供"><span class="resource-icon" aria-hidden="true">${icons[type]}</span>${type}｜尚未提供</span>`;
    return `<a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer"><span class="resource-icon" aria-hidden="true">${icons[type]}</span>開啟${type}</a>`;
  }).join("");

  return `
    <article class="course-card" style="--accent:${accent};--soft:${soft}">
      <div class="card-band" aria-hidden="true"></div>
      <div class="card-main">
        <div class="card-meta">${designer}<span class="count-badge">${available.length} 項成果</span></div>
        <h3>${escapeHtml(course.topic)}</h3>
        <div class="resource-list">${links}</div>
      </div>
    </article>`;
}

function render() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("zh-Hant-TW");
  const selectedType = typeFilter.value;
  const filtered = courses.filter(course => {
    const matchesKeyword = !keyword || `${course.topic} ${course.designer}`.toLocaleLowerCase("zh-Hant-TW").includes(keyword);
    const matchesType = selectedType === "all" || Boolean(course.resources[selectedType]);
    return matchesKeyword && matchesType;
  });

  grid.innerHTML = filtered.map(course => courseCard(course, courses.indexOf(course))).join("");
  const availableCount = selectedType === "all"
    ? filtered.reduce((sum, course) => sum + resourceTypes.filter(type => course.resources[type]).length, 0)
    : filtered.length;
  const resultLabel = selectedType === "all" ? "可開啟成果" : `${selectedType}作品`;
  resultSummary.textContent = `目前顯示 ${filtered.length} 個課程主題，共 ${availableCount} 項${resultLabel}。`;
  emptyState.hidden = filtered.length !== 0;
}

searchInput.addEventListener("input", render);
typeFilter.addEventListener("change", render);
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  typeFilter.value = "all";
  render();
  searchInput.focus();
});

render();
