// TangailBot Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderAllSections();
    setupSearch();
    setupChatBot();
    setupMobileMenu();
    lucide.createIcons();
});

// ==========================================
// 1. THEME TOGGLE (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const moonIcon = document.getElementById("theme-icon-moon");
    const sunIcon = document.getElementById("theme-icon-sun");

    const savedTheme = localStorage.getItem("tangailbot_theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        moonIcon.classList.remove("hidden");
        sunIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
    }

    themeToggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tangailbot_theme", isDark ? "dark" : "light");
        if (isDark) {
            moonIcon.classList.remove("hidden");
            sunIcon.classList.add("hidden");
        } else {
            moonIcon.classList.add("hidden");
            sunIcon.classList.remove("hidden");
        }
    });
}

// ==========================================
// 2. RENDER SECTIONS FROM DATA.JS
// ==========================================
function renderAllSections() {
    renderHeritage();
    renderUpazilas();
    renderTouristSpots('all');
    renderEmergency();
    renderEducation();
    renderPersonalities();
    renderJobs();
}

// Heritage Cards
function renderHeritage() {
    const container = document.getElementById("heritage-grid");
    if (!container) return;

    container.innerHTML = TANGAIL_DATA.giAndHeritages.map(item => `
        <div class="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
                <div class="relative h-44 rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-700">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    <span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg border backdrop-blur-md ${item.badgeColor}">
                        ${item.tag}
                    </span>
                </div>
                <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-1">${item.title}</h3>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${item.shortDesc}</p>
            </div>
            <div class="pt-3 border-t border-slate-200 dark:border-slate-700">
                <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">বিখ্যাত প্রাপ্তিস্থান:</span>
                <div class="flex flex-wrap gap-1">
                    ${item.bestPlaces.map(p => `<span class="text-[10px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-medium">${p}</span>`).join('')}
                </div>
                <button onclick="openHeritageModal('${item.id}')" class="mt-4 w-full py-2 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-emerald-700 dark:text-emerald-400 font-medium text-xs rounded-xl transition">
                    বিস্তারিত ইতিহাস ও তথ্য →
                </button>
            </div>
        </div>
    `).join('');
}

// 12 Upazilas
function renderUpazilas(filterText = '') {
    const container = document.getElementById("upazila-grid");
    if (!container) return;

    const filtered = TANGAIL_DATA.upazilas.filter(u => 
        u.name.toLowerCase().includes(filterText.toLowerCase()) || 
        u.enName.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        container.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400">কোনো উপজেলা খুঁজে পাওয়া যায়নি।</div>`;
        return;
    }

    container.innerHTML = filtered.map(u => `
        <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white">${u.name}</h3>
                        <span class="text-xs text-slate-400">${u.enName}</span>
                    </div>
                    <span class="text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        ${u.area}
                    </span>
                </div>
                <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
                    <p class="flex items-center gap-1.5"><i data-lucide="layers" class="w-3.5 h-3.5 text-emerald-600"></i> <span>${u.unions}</span></p>
                    <p class="flex items-start gap-1.5"><i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i> <span class="line-clamp-2">${u.highlights}</span></p>
                </div>
            </div>
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button onclick="openUpazilaModal('${u.id}')" class="flex-1 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 font-medium text-xs rounded-lg transition text-center">
                    বিস্তারিত জানুন
                </button>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Upazila Filter Listener
document.getElementById("upazila-filter-input")?.addEventListener("input", (e) => {
    renderUpazilas(e.target.value);
});

// Tourist Spots
function renderTouristSpots(category = 'all') {
    const container = document.getElementById("tourist-grid");
    if (!container) return;

    let spots = TANGAIL_DATA.touristSpots;
    if (category !== 'all') {
        spots = spots.filter(s => s.category.includes(category));
    }

    container.innerHTML = spots.map(s => `
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col group">
            <div class="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img src="${s.image}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-3 left-4 right-4">
                    <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 text-white px-2 py-0.5 rounded backdrop-blur">
                        ${s.category}
                    </span>
                    <h3 class="font-bold text-lg text-white mt-1 leading-snug">${s.name}</h3>
                </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
                        <span>${s.location}</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        ${s.summary}
                    </p>
                    <div class="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 mb-4">
                        <div>
                            <span class="text-slate-400 block text-[10px]">প্রবেশ ফি:</span>
                            <span class="font-semibold text-slate-700 dark:text-slate-200">${s.entryFee}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">সময়সূচি:</span>
                            <span class="font-semibold text-slate-700 dark:text-slate-200">${s.time}</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button onclick="openTouristModal('${s.id}')" class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition text-center shadow-sm">
                        কীভাবে যাবেন ও তথ্য
                    </button>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}" target="_blank" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="গুগল ম্যাপে দেখুন">
                        <i data-lucide="navigation" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

function filterTouristSpots(category) {
    document.querySelectorAll(".tourist-filter-btn").forEach(btn => {
        btn.classList.remove("bg-emerald-600", "text-white");
        btn.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    });
    event.currentTarget.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    event.currentTarget.classList.add("bg-emerald-600", "text-white");
    renderTouristSpots(category);
}

// Emergency Services Directory
function renderEmergency() {
    const container = document.getElementById("emergency-container");
    if (!container) return;

    container.innerHTML = TANGAIL_DATA.emergencyServices.map(cat => `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>${cat.category}</span>
            </h3>
            <div class="space-y-3">
                ${cat.items.map(item => `
                    <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition">
                        <div class="pr-3">
                            <h4 class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">${item.title}</h4>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${item.desc}</p>
                            <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 inline-block">${item.number}</span>
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                            <button onclick="copyToClipboard('${item.number}')" title="নম্বর কপি করুন" class="p-2 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:text-emerald-600 transition">
                                <i data-lucide="copy" class="w-4 h-4"></i>
                            </button>
                            <a href="tel:${item.tel || item.number}" title="সরাসরি কল করুন" class="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center gap-1 shadow-sm transition">
                                <i data-lucide="phone" class="w-4 h-4"></i>
                                <span class="hidden sm:inline">কল</span>
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Education
function renderEducation() {
    const container = document.getElementById("education-list");
    if (!container) return;

    container.innerHTML = TANGAIL_DATA.education.map(edu => `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition">
            <div class="flex items-start justify-between gap-2 mb-1">
                <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">${edu.name}</h4>
                <span class="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full shrink-0">
                    ${edu.established}
                </span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span>${edu.type}</span> • <span>${edu.location}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${edu.highlights}</p>
            ${edu.website ? `
                <a href="${edu.website}" target="_blank" class="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    অফিসিয়াল ওয়েবসাইট ভিজিট করুন <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
            ` : ''}
        </div>
    `).join('');

    lucide.createIcons();
}

// Personalities
function renderPersonalities() {
    const container = document.getElementById("personalities-list");
    if (!container) return;

    container.innerHTML = TANGAIL_DATA.famousPersonalities.map(p => `
        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">${p.name}</h4>
            <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">${p.title}</span>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${p.desc}</p>
        </div>
    `).join('');
}

// Jobs & Notices
function renderJobs() {
    const container = document.getElementById("jobs-grid");
    if (!container) return;

    container.innerHTML = TANGAIL_DATA.jobsAndNotices.map(j => `
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition">
            <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                    ${j.category}
                </span>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white mt-2 mb-1 line-clamp-2">${j.title}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">${j.organization}</p>
            </div>
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span class="text-slate-400 text-[11px]">${j.deadline}</span>
                <a href="${j.link}" target="_blank" class="text-emerald-600 font-semibold hover:underline flex items-center gap-1">
                    সার্কুলার <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </a>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// ==========================================
// 3. UNIFIED GLOBAL SEARCH & AUTOCOMPLETE
// ==========================================
function setupSearch() {
    const input = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-results-dropdown");
    const clearBtn = document.getElementById("clear-search-btn");

    if (!input || !dropdown) return;

    input.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length === 0) {
            dropdown.classList.add("hidden");
            clearBtn.classList.add("hidden");
            return;
        }

        clearBtn.classList.remove("hidden");
        const results = executeSearch(query);
        renderSearchResults(results, dropdown);
    });

    clearBtn.addEventListener("click", () => {
        input.value = "";
        dropdown.classList.add("hidden");
        clearBtn.classList.add("hidden");
        input.focus();
    });

    document.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });
}

function quickSearch(term) {
    const input = document.getElementById("global-search-input");
    if (!input) return;
    input.value = term;
    input.dispatchEvent(new Event('input'));
    input.focus();
}

function executeSearch(query) {
    const results = [];

    // Search Upazilas
    TANGAIL_DATA.upazilas.forEach(u => {
        if (u.name.toLowerCase().includes(query) || u.enName.toLowerCase().includes(query) || u.highlights.toLowerCase().includes(query)) {
            results.push({ type: "উপজেলা", title: u.name, subtitle: u.enName + " • " + u.area, action: () => openUpazilaModal(u.id) });
        }
    });

    // Search Tourist Spots
    TANGAIL_DATA.touristSpots.forEach(s => {
        if (s.name.toLowerCase().includes(query) || s.location.toLowerCase().includes(query) || s.category.toLowerCase().includes(query) || s.summary.toLowerCase().includes(query)) {
            results.push({ type: "দর্শনীয় স্থান", title: s.name, subtitle: s.location + " (" + s.category + ")", action: () => openTouristModal(s.id) });
        }
    });

    // Search Heritage
    TANGAIL_DATA.giAndHeritages.forEach(h => {
        if (h.title.toLowerCase().includes(query) || h.shortDesc.toLowerCase().includes(query) || h.tag.toLowerCase().includes(query)) {
            results.push({ type: "ঐতিহ্য ও জিআই", title: h.title, subtitle: h.tag, action: () => openHeritageModal(h.id) });
        }
    });

    // Search Emergency
    TANGAIL_DATA.emergencyServices.forEach(cat => {
        cat.items.forEach(item => {
            if (item.title.toLowerCase().includes(query) || item.number.includes(query) || item.desc.toLowerCase().includes(query)) {
                results.push({ type: "জরুরি সেবা", title: item.title, subtitle: item.number + " (" + item.desc + ")", action: () => {
                    window.location.href = `tel:${item.tel || item.number}`;
                }});
            }
        });
    });

    // Search Education
    TANGAIL_DATA.education.forEach(edu => {
        if (edu.name.toLowerCase().includes(query) || edu.location.toLowerCase().includes(query)) {
            results.push({ type: "শিক্ষা প্রতিষ্ঠান", title: edu.name, subtitle: edu.type + " • " + edu.location, action: () => {
                const el = document.getElementById("education");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }});
        }
    });

    return results;
}

function renderSearchResults(results, dropdown) {
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="p-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
                <p>কোনো তথ্য পাওয়া যায়নি। অন্য শব্দ লিখে চেষ্টা করুন বা নিচে টাঙ্গাইল বটকে প্রশ্ন করুন।</p>
            </div>
        `;
        dropdown.classList.remove("hidden");
        lucide.createIcons();
        return;
    }

    dropdown.innerHTML = results.slice(0, 8).map((item, index) => `
        <div onclick="handleSearchSelect(${index})" class="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between group">
            <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mr-1">
                    ${item.type}
                </span>
                <span class="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 transition">${item.title}</span>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${item.subtitle}</p>
            </div>
            <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"></i>
        </div>
    `).join('');

    dropdown.classList.remove("hidden");
    window._lastSearchResults = results;
    lucide.createIcons();
}

function handleSearchSelect(index) {
    const item = window._lastSearchResults[index];
    if (item && item.action) {
        document.getElementById("search-results-dropdown").classList.add("hidden");
        item.action();
    }
}

// ==========================================
// 4. TANGAILBOT CHAT ENGINE
// ==========================================
function setupChatBot() {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("chat-input");

    if (!form || !input) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        appendUserMessage(text);
        input.value = "";

        // Simulate intelligent bot reply
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            const reply = generateBotReply(text);
            appendBotMessage(reply);
        }, 600);
    });
}

function sendPresetPrompt(promptText) {
    const input = document.getElementById("chat-input");
    if (!input) return;
    input.value = promptText;
    document.getElementById("chat-form").dispatchEvent(new Event('submit'));
}

function generateBotReply(userQuery) {
    const lower = userQuery.toLowerCase();

    // Check predefined knowledge patterns
    for (const item of BOT_RESPONSES) {
        for (const kw of item.keywords) {
            if (lower.includes(kw.toLowerCase())) {
                return item.answer;
            }
        }
    }

    // Dynamic search fallback in database
    const upazilaMatch = TANGAIL_DATA.upazilas.find(u => lower.includes(u.name.toLowerCase()));
    if (upazilaMatch) {
        return `🗺️ **${upazilaMatch.name} উপজেলা (${upazilaMatch.enName})**\n\n` +
               `• আয়তন: ${upazilaMatch.area}\n` +
               `• ইউনিয়ন ও পৌরসভা: ${upazilaMatch.unions}\n` +
               `• প্রধান আকর্ষণ: ${upazilaMatch.highlights}\n` +
               `• প্রশাসন: ${upazilaMatch.officers}\n` +
               `• থানা: ${upazilaMatch.police}\n` +
               `• স্বাস্থ্যসেবা: ${upazilaMatch.hospital}`;
    }

    const touristMatch = TANGAIL_DATA.touristSpots.find(s => lower.includes(s.name.toLowerCase()));
    if (touristMatch) {
        return `🏛️ **${touristMatch.name}**\n\n` +
               `📍 অবস্থান: ${touristMatch.location}\n` +
               `ℹ️ বিবরণ: ${touristMatch.summary}\n` +
               `🎟️ প্রবেশ ফি: ${touristMatch.entryFee}\n` +
               `⏰ সময়: ${touristMatch.time}\n` +
               `🚗 কীভাবে যাবেন: ${touristMatch.howToGo}`;
    }

    // Default polite response
    return `ধন্যবাদ আপনার প্রশ্নের জন্য! 😊\n\nআপনি টাঙ্গাইল সম্পর্কিত তথ্য জানতে চেয়েছেন। আপনি নিচের বিষয়গুলো সম্পর্কে স্পষ্ট জানতে চাইতে পারেন:\n` +
           `• 🍬 পোড়াবাড়ির চমচমের ইতিহাস ও সেরা দোকান\n` +
           `• 🥻 টাঙ্গাইল তাঁতের শাড়ির বিখ্যাত হাট ও পাথরাইল\n` +
           `• 🏛️ মহেরা জমিদার বাড়ি, আতিয়া মসজিদ বা ২০১ গম্বুজ মসজিদ\n` +
           `• 🗺️ ১২টি উপজেলার তথ্য\n` +
           `• 🏥 জরুরি স্বাস্থ্যসেবা ও অ্যাম্বুলেন্স নম্বর (বা ৯৯৯)\n\nঅনুগ্রহ করে প্রশ্নটি পুনরায় নির্দিষ্ট করে লিখুন।`;
}

function appendUserMessage(text) {
    const chatContainer = document.getElementById("chat-messages");
    if (!chatContainer) return;

    const div = document.createElement("div");
    div.className = "flex items-start justify-end gap-2";
    div.innerHTML = `
        <div class="bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-3.5 text-sm max-w-[85%] shadow-sm">
            <p>${escapeHTML(text)}</p>
        </div>
        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0 font-bold">
            👤
        </div>
    `;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function appendBotMessage(text) {
    const chatContainer = document.getElementById("chat-messages");
    if (!chatContainer) return;

    // Convert basic markdown formatting to HTML
    let formatted = escapeHTML(text)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

    const div = document.createElement("div");
    div.className = "flex items-start gap-3";
    div.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm shrink-0">
            🤖
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-800 dark:text-slate-100 shadow-sm max-w-[85%]">
            <p class="leading-relaxed">${formatted}</p>
            <div class="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>টাঙ্গাইল বট AI</span>
                <button onclick="copyToClipboard('${escapeHTML(text).replace(/'/g, "\\'")}')" class="hover:text-emerald-500 flex items-center gap-1 transition">
                    <i data-lucide="copy" class="w-3 h-3"></i> কপি করুন
                </button>
            </div>
        </div>
    `;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    lucide.createIcons();
}

function showTypingIndicator() {
    const chatContainer = document.getElementById("chat-messages");
    if (!chatContainer) return;

    const div = document.createElement("div");
    div.id = "typing-indicator";
    div.className = "flex items-center gap-3";
    div.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm shrink-0">
            🤖
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-xs text-slate-400 flex items-center gap-1.5 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
            <span class="ml-1">উত্তর তৈরি হচ্ছে...</span>
        </div>
    `;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById("typing-indicator");
    if (el) el.remove();
}

function clearChatHistory() {
    const chatContainer = document.getElementById("chat-messages");
    if (!chatContainer) return;
    chatContainer.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm shrink-0">
                🤖
            </div>
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-800 dark:text-slate-100 shadow-sm max-w-[85%]">
                <p class="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">চ্যাট হিস্ট্রি রিসেট করা হয়েছে!</p>
                <p>নতুন করে টাঙ্গাইল জেলা সম্পর্কিত যেকোনো প্রশ্ন করতে পারেন।</p>
            </div>
        </div>
    `;
}

function scrollToBot() {
    const botSec = document.getElementById("bot-section");
    if (botSec) {
        botSec.scrollIntoView({ behavior: "smooth" });
        const input = document.getElementById("chat-input");
        if (input) setTimeout(() => input.focus(), 500);
    }
}

function openChatModal() {
    scrollToBot();
}

// ==========================================
// 5. MODAL SYSTEM
// ==========================================
function openUpazilaModal(id) {
    const u = TANGAIL_DATA.upazilas.find(item => item.id === id);
    if (!u) return;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="mb-4">
            <span class="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                উপজেলা প্রোফাইল
            </span>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-2">${u.name} উপজেলা (${u.enName})</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">টাঙ্গাইল জেলা, ঢাকা বিভাগ</p>
        </div>

        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            ${u.desc}
        </p>

        <div class="grid grid-cols-2 gap-3 mb-6 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="text-slate-400 block text-[11px]">মোট আয়তন:</span>
                <span class="font-semibold text-slate-800 dark:text-white text-sm">${u.area}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="text-slate-400 block text-[11px]">ইউনিয়ন ও পৌরসভা:</span>
                <span class="font-semibold text-slate-800 dark:text-white text-sm">${u.unions}</span>
            </div>
        </div>

        <div class="space-y-3 mb-6 text-xs">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900">
                <span class="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">🌟 প্রধান আকর্ষণ ও দর্শনীয় স্থান:</span>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${u.highlights}</p>
            </div>

            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="font-bold text-slate-900 dark:text-white block mb-1">🏢 প্রশাসনিক যোগাযোগ:</span>
                <p class="text-slate-600 dark:text-slate-300 mb-1">${u.officers}</p>
                <p class="text-slate-600 dark:text-slate-300 mb-1">পুলিশ: ${u.police}</p>
                <p class="text-slate-600 dark:text-slate-300">স্বাস্থ্য কমপ্লেক্স: ${u.hospital}</p>
            </div>
        </div>

        <div class="flex gap-2">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.name + ' উপজেলা টাঙ্গাইল')}" target="_blank" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5">
                <i data-lucide="navigation" class="w-4 h-4"></i> গুগল ম্যাপে অবস্থান দেখুন
            </a>
            <button onclick="closeDetailModal()" class="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition">
                বন্ধ করুন
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    lucide.createIcons();
}

function openTouristModal(id) {
    const s = TANGAIL_DATA.touristSpots.find(item => item.id === id);
    if (!s) return;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
            <img src="${s.image}" alt="${s.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded">${s.category}</span>
                <h2 class="text-2xl font-bold mt-1">${s.name}</h2>
                <p class="text-xs text-slate-200 flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${s.location}</p>
            </div>
        </div>

        <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">ইতিহাস ও বিবরণ:</h4>
                <p class="leading-relaxed">${s.details}</p>
            </div>

            <div class="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                    <span class="text-slate-400 block text-[11px]">টিকিট / প্রবেশ মূল্য:</span>
                    <span class="font-bold text-slate-800 dark:text-white">${s.entryFee}</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[11px]">পরিদর্শনের সময়:</span>
                    <span class="font-bold text-slate-800 dark:text-white">${s.time}</span>
                </div>
            </div>

            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900">
                <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-xs mb-1 flex items-center gap-1">
                    <i data-lucide="compass" class="w-3.5 h-3.5"></i> কীভাবে যাবেন:
                </h4>
                <p class="leading-relaxed text-slate-700 dark:text-slate-300">${s.howToGo}</p>
            </div>
        </div>

        <div class="flex gap-2">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}" target="_blank" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5">
                <i data-lucide="navigation" class="w-4 h-4"></i> গুগল ম্যাপে রুট দেখুন
            </a>
            <button onclick="closeDetailModal()" class="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition">
                বন্ধ করুন
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    lucide.createIcons();
}

function openHeritageModal(id) {
    const item = TANGAIL_DATA.giAndHeritages.find(h => h.id === id);
    if (!item) return;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">${item.tag}</span>
                <h2 class="text-2xl font-bold mt-1">${item.title}</h2>
            </div>
        </div>

        <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">ঐতিহ্যের ইতিহাস ও তাৎপর্য:</h4>
                <p class="leading-relaxed text-sm">${item.fullDesc}</p>
            </div>

            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900">
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-xs mb-1.5">প্রধান প্রাপ্তিস্থান ও হাট:</h4>
                <div class="flex flex-wrap gap-1.5">
                    ${item.bestPlaces.map(p => `<span class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800 font-medium">${p}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="flex gap-2">
            <button onclick="sendPresetPrompt('${item.title} সম্পর্কে বিস্তারিত জানতে চাই'); closeDetailModal(); scrollToBot();" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5">
                <i data-lucide="bot" class="w-4 h-4"></i> বটকে এই বিষয়ে প্রশ্ন করুন
            </button>
            <button onclick="closeDetailModal()" class="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition">
                বন্ধ করুন
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    lucide.createIcons();
}

function closeDetailModal() {
    document.getElementById("detail-modal").classList.add("hidden");
}

// Close modal on Escape or backdrop click
document.getElementById("detail-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "detail-modal") {
        closeDetailModal();
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDetailModal();
    }
});

// ==========================================
// 6. UTILITIES
// ==========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("নম্বরটি কপি করা হয়েছে: " + text);
    }).catch(() => {
        showToast("কপি করা হয়েছে!");
    });
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    if (!toast || !toastText) return;

    toastText.innerText = msg;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");

    setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0", "pointer-events-none");
    }, 2500);
}

function setupMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
        });
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
