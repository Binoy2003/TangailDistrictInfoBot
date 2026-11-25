// TangailBot Main Application Logic - 100% Bilingual (BN / EN)

let currentLang = localStorage.getItem("tangailbot_lang") || "bn";
let currentTouristCategory = 'all';

// ==========================================
// 1. COMPREHENSIVE BILINGUAL TRANSLATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
    bn: {
        top_badge: "ঐতিহ্য",
        top_slogan: "নদী, চর, খাল, বিল, গজারির বন — টাঙ্গাইলের শাড়ি, তার গরবের ধন।",
        top_location: "ঢাকা বিভাগ, বাংলাদেশ",
        top_emergency: "জরুরি ৯৯৯",
        brand_name: 'টাঙ্গাইল<span class="text-emerald-600 dark:text-emerald-400">বট</span>',
        footer_brand_name: 'টাঙ্গাইল<span class="text-emerald-400">বট</span>',
        float_btn_text: "টাঙ্গাইল বট",
        logo_sub: "ঐতিহ্য ও তথ্যের পোর্টাল",
        nav_home: "হোম",
        nav_heritage: "ঐতিহ্য ও জিআই",
        nav_sweets: "মিষ্টান্ন ও চমচম",
        nav_upazila: "উপজেলা",
        nav_admin: "জেলা প্রশাসন",
        mobile_nav_admin: "🏛️ জেলা প্রশাসন (ডিসি অফিস)",
        sec_admin_tag: "প্রশাসনিক বাতায়ন ও নাগরিক সেবা",
        sec_admin_title: "জেলা প্রশাসন টাঙ্গাইল • জেলা প্রশাসকের কার্যালয় (DC Office)",
        sec_admin_desc: "সকল প্রশাসনিক শাখা, দায়িত্বপ্রাপ্ত কর্মকর্তা, কর্মচারীবৃন্দ, কক্ষ নম্বর ও নাগরিক সেবার সম্পূর্ণ এক্সেল স্প্রেডশীট ডিরেক্টরি।",
        admin_sheet_badge: "ভেরিফাইড সরকারি ডিরেক্টরি",
        admin_sheet_sub: "১৮টি সক্রিয় শাখা • কক্ষ নম্বর • কর্মকর্তা ও কর্মচারী তালিকা",
        admin_print_btn: "প্রিন্ট / ভিউ",
        admin_portal_btn: "অফিসিয়াল পোর্টাল",
        admin_search_placeholder: "শাখা, কর্মকর্তা, কর্মচারী পদবি বা কক্ষ নম্বর লিখে খুঁজুন...",
        admin_tab_all: "সবগুলো শাখা (All)",
        admin_tab_lead: "শীর্ষ নেতৃত্ব",
        admin_tab_revenue: "রাজস্ব ও এল.এ",
        admin_tab_general: "সাধারণ ও সেবা",
        admin_tab_ict: "শিক্ষা ও ই-সেবা",
        admin_tab_localgov: "স্থানীয় সরকার",
        th_room: "কক্ষ নম্বর",
        th_branch: "শাখা / বিভাগ",
        th_officer: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও পদবি",
        th_contact: "যোগাযোগ নম্বর",
        th_staff: "কর্মচারীবৃন্দ ও সেবাসমূহ",
        th_action: "অ্যাকশন",
        admin_table_hint: "💡 যেকোনো শাখায় ক্লিক করে পূর্ণাঙ্গ কর্মচারী ও সেবার তালিকা দেখুন",
        nav_tourist: "দর্শনীয় স্থান",
        nav_emergency: "জরুরি সেবা",
        nav_education: "শিক্ষা",
        nav_jobs: "জব পোর্টাল",
        nav_bot_btn: "বট অ্যাসিস্ট্যান্ট",
        mobile_nav_home: "🏠 হোম",
        mobile_nav_heritage: "🍬 ঐতিহ্য ও জিআই পণ্য",
        mobile_nav_sweets: "🍯 মিষ্টান্ন ও চমচমের দোকান",
        mobile_nav_upazila: "🗺️ ১২টি উপজেলা",
        mobile_nav_tourist: "🕌 দর্শনীয় স্থান",
        mobile_nav_emergency: "☎️ জরুরি সেবা ডিরেক্টরি",
        mobile_nav_education: "🎓 শিক্ষা প্রতিষ্ঠান",
        mobile_nav_jobs: "💼 জব ও নোটিশ",
        mobile_nav_emergency_call: "জরুরি সেবা কল (৯৯৯)",
        hero_pill: "টাঙ্গাইল জেলা ইনফরমেশন হাব ও ইন্টারেক্টিভ বট",
        hero_title: 'ঐতিহ্যের টাঙ্গাইল জেলার সকল তথ্য<br>এখন <span class="gradient-text-green">টাঙ্গাইল বটে</span> এক ক্লিকে!',
        hero_subtitle: "পোড়াবাড়ির সুস্বাদু চমচম, বিশ্বখ্যাত তাঁতের শাড়ি, ১২টি উপজেলা, প্রত্নতাত্ত্বিক দর্শনীয় স্থান, সরকারি দপ্তর এবং ২৪ ঘণ্টা জরুরি হটলাইনের পূর্ণাঙ্গ ডিজিটাল বাতায়ন।",
        search_placeholder: "যেকোনো তথ্য খুঁজুন (যেমন: চমচম, মহেরা জমিদার বাড়ি, অ্যাম্বুলেন্স, সদর উপজেলা)...",
        search_popular_label: "জনপ্রিয় অনুসন্ধান:",
        chip_chomchom: "🍬 পোড়াবাড়ির চমচম",
        chip_joykali: "🏪 জয়কালী মিষ্টান্ন",
        chip_tube_doi: "🥛 ইনটু টিউব দই",
        chip_bridge: "🌉 বঙ্গবন্ধু সেতু",
        chip_mohera: "🏛️ মহেরা জমিদার বাড়ি",
        chip_mosque_201: "🕌 ২০১ গম্বুজ মসজিদ",
        chip_saree: "🥻 তাঁতের শাড়ি",
        chip_ambulance: "🚑 অ্যাম্বুলেন্স",
        stat_upazilas_num: "১২টি",
        stat_upazilas_label: "ঐতিহাসিক উপজেলা",
        stat_upazilas_sub: "সব উপজেলার তালিকা ও তথ্য",
        stat_pop_num: "৪০ লক্ষ+",
        stat_pop_label: "জনসংখ্যা (শুমারি ২০২২)",
        stat_pop_sub: "ধর্ম, নারী-পুরুষ ও শিক্ষা তথ্য",
        stat_area_num: "৩,৪১৪",
        stat_area_label: "বর্গ কিমি আয়তন",
        stat_area_sub: "টাঙ্গাইলের সম্পূর্ণ মানচিত্র",
        stat_gi_num: "৪টি পণ্য",
        stat_gi_label: "স্বীকৃত জিআই সনদপ্রাপ্ত",
        stat_gi_sub: "৪টি পণ্যের বিশেষ পরিচয়",
        stat_click_badge: "ক্লিক করুন",
        stat_popup_upazilas: "🗺️ ১২টি উপজেলার তালিকা ও তথ্য দেখতে ক্লিক করুন",
        stat_popup_pop: "📊 বিবিএস শুমারি: ধর্ম, নারী-পুরুষ ও শিক্ষার পূর্ণাঙ্গ ডেটা",
        stat_popup_area: "🧭 টাঙ্গাইলের সম্পূর্ণ স্যাটেলাইট ও ভৌগোলিক মানচিত্র",
        stat_popup_gi: "🏆 শাড়ি, চমচম, আনারস ও সন্দেশ — ৪টি জিআই সনদ তথ্য",
        sec_heritage_tag: "গৌরব ও স্বকীয়তা",
        sec_heritage_title: "টাঙ্গাইলের ৪টি স্বীকৃত জিআই (GI) পণ্য",
        sec_heritage_desc: "টাঙ্গাইল শাড়ি, পোড়াবাড়ির চমচম, মধুপুরের আনারস ও জামুর্কির সন্দেশ — বাংলাদেশ সরকার ও বিশ্বমঞ্চে স্বীকৃত ৪টি অনন্য জিআই পণ্য।",
        sec_sweets_tag: "মিষ্টির স্বর্গরাজ্য • টাঙ্গাইল",
        sec_sweets_title: "টাঙ্গাইলের ঐতিহ্যবাহী মিষ্টান্ন ও বিখ্যাত চমচমের দোকান",
        sec_sweets_desc: "পোড়াবাড়ির আসল চমচম, জয়কালী, গোপাল, ফণী মিষ্টান্ন ভান্ডার এবং ইনটুর বিখ্যাত টিউব দইয়ের নির্ভরযোগ্য তথ্য ও গাইড।",
        sec_upazila_tag: "উপজেলা পরিচিতি",
        sec_upazila_title: "টাঙ্গাইল জেলার ১২টি উপজেলা নির্দেশিকা",
        sec_upazila_desc: "প্রতিটি উপজেলার আয়তন, পৌরসভা, ইউনিয়ন, দ্রষ্টব্য স্থান এবং প্রশাসনের জরুরি যোগাযোগের নম্বর।",
        upazila_filter_placeholder: "উপজেলার নাম দিয়ে ফিল্টার করুন...",
        sec_tourist_tag: "পর্যটন ও ভ্রমণ গাইড",
        sec_tourist_title: "টাঙ্গাইলের সেরা দর্শনীয় ও প্রত্নতাত্ত্বিক স্থান",
        filter_tourist_all: "সবগুলো",
        filter_tourist_arch: "জমিদার বাড়ি ও প্রত্নতত্ত্ব",
        filter_tourist_mosque: "ঐতিহাসিক মসজিদ",
        filter_tourist_nature: "প্রকৃতি ও উদ্যান",
        sec_emergency_tag: "সার্বক্ষণিক জরুরি সেবা",
        sec_emergency_title: "জরুরি যোগাযোগ ও স্বাস্থ্যসেবা হটলাইন",
        sec_emergency_desc: "টাঙ্গাইল জেনারেল হাসপাতাল, কুমুদিনী হাসপাতাল, জেলা পুলিশ, অ্যাম্বুলেন্স এবং ফায়ার সার্ভিসের ভেরিফাইড নম্বর। যে কোনো নম্বরে সরাসরি কল করতে ট্যাপ করুন।",
        sec_edu_tag: "শিক্ষা ও বিদ্যাপিঠ",
        sec_edu_title: "ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠানসমূহ",
        sec_edu_desc: "টাঙ্গাইলের উচ্চশিক্ষা ও ঐতিহ্যবাহী শতবর্ষী বিদ্যাপীঠের তথ্য।",
        sec_persons_tag: "কীর্তিমান ব্যক্তিত্ব",
        sec_persons_title: "টাঙ্গাইলের বরেণ্য সূর্যসন্তান",
        sec_persons_desc: "যাঁদের আত্মত্যাগ, সমাজসেবা ও নেতৃত্বে আলোকিত হয়েছে সমগ্র বাংলাদেশ।",
        sec_jobs_tag: "ক্যারিয়ার ও বিজ্ঞপ্তি",
        sec_jobs_title: "টাঙ্গাইল জব ও নোটিশ পোর্টাল",
        sec_jobs_desc: "জেলা প্রশাসন, বিশ্ববিদ্যালয় ও স্থানীয় প্রতিষ্ঠানের সর্বশেষ নিয়োগ বিজ্ঞপ্তি।",
        sec_bot_tag: "ইন্টারেক্টিভ নলেজ বট",
        sec_bot_title: "টাঙ্গাইল বটকে যে কোনো প্রশ্ন করুন",
        sec_bot_desc: "টাঙ্গাইলের ইতিহাস, চমচমের দোকান, উপজেলা, দর্শনীয় স্থান বা যোগাযোগের নম্বর লিখে জিজ্ঞেস করুন।",
        chat_header_title: "টাঙ্গাইল বট AI",
        chat_header_status: "অনলাইন • তাৎক্ষণিক উত্তর প্রদানকারী",
        chat_welcome_title: "আসসালামু আলাইকুম! 👋",
        chat_welcome_msg: "আমি <strong>টাঙ্গাইল বট</strong>। টাঙ্গাইল জেলার যেকোনো স্থান, খাবার, উপজেলা বা জরুরি সেবা সম্পর্কে আমাকে প্রশ্ন করতে পারেন।",
        chat_welcome_sub: "নিচে দেওয়া যেকোনো প্রশ্নে ক্লিক করে সরাসরি উত্তর দেখতে পারেন:",
        chat_input_placeholder: "টাঙ্গাইল সম্পর্কে আপনার প্রশ্ন লিখুন...",
        bot_chip_chomchom: "🍬 চমচমের ইতিহাস ও সেরা দোকান",
        bot_chip_joykali: "🏪 জয়কালী ও গোপাল মিষ্টান্ন",
        bot_chip_tube_doi: "🥛 ইনটুর টিউব দই",
        bot_chip_bridge: "🌉 বঙ্গবন্ধু সেতু ও যমুনা নদী",
        bot_chip_mohera: "🏛️ মহেরা জমিদার বাড়ি",
        bot_chip_saree: "🥻 তাঁতের শাড়ির ইতিহাস",
        bot_chip_mosque_201: "🕌 ২০১ গম্বুজ মসজিদ",
        bot_chip_upazilas: "🗺️ ১২টি উপজেলা",
        bot_chip_emergency: "🚑 জরুরি অ্যাম্বুলেন্স",
        footer_desc: "ঐতিহ্যবাহী টাঙ্গাইল জেলার সকল তথ্য, উপজেলা পরিচিতি, ঐতিহ্য, দর্শনীয় স্থান ও নাগরিক সেবা সবার কাছে সহজে পৌঁছে দেওয়ার লক্ষ্যে একটি উন্মুক্ত তথ্য বাতায়ন।",
        footer_links_title: "গুরুত্বপূর্ণ লিংক",
        footer_link_admin: "জেলা প্রশাসন টাঙ্গাইল",
        footer_link_mbstu: "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
        footer_link_gov: "জাতীয় তথ্য বাতায়ন",
        footer_link_999: "জাতীয় জরুরি সেবা (৯৯৯)",
        footer_contact_title: "যোগাযোগ ও ফিডব্যাক",
        footer_contact_desc: "নতুন তথ্য সংযোজন বা সংশোধনের জন্য যোগাযোগ করুন:",
        footer_version: "ভার্সন: ১.০.০ • টাঙ্গাইল জেলা",
        footer_copy: "© ২০২৬ টাঙ্গাইল বট (TangailBot). সর্বস্বত্ব সংরক্ষিত।",
        footer_disclaimer: "তথ্য ব্যবহারে সংশ্লিষ্ট অফিশিয়াল সূত্রের সাথে যাচাই বাঞ্ছনীয়।"
    },
    en: {
        top_badge: "Heritage",
        top_slogan: "Rivers, chars, canals, wetlands, and sal forests — Tangail's saree, its proudest treasure.",
        top_location: "Dhaka Division, Bangladesh",
        top_emergency: "Emergency 999",
        brand_name: 'Tangail<span class="text-emerald-600 dark:text-emerald-400">Bot</span>',
        footer_brand_name: 'Tangail<span class="text-emerald-400">Bot</span>',
        float_btn_text: "TangailBot",
        logo_sub: "Heritage & Information Portal",
        nav_home: "Home",
        nav_heritage: "Heritage & GI",
        nav_sweets: "Sweets & Chomchom",
        nav_upazila: "Upazilas",
        nav_admin: "District Admin",
        mobile_nav_admin: "🏛️ District Administration (DC Office)",
        sec_admin_tag: "Civic Services & District Administration",
        sec_admin_title: "District Administration Tangail • DC Office Directory",
        sec_admin_desc: "Comprehensive Excel spreadsheet directory of all branches, room numbers, designated officers, employees, and citizen services of Tangail DC Office.",
        admin_sheet_badge: "Verified Official Directory",
        admin_sheet_sub: "18 Active Branches • Room Numbers • Officers & Staff",
        admin_print_btn: "Print / View",
        admin_portal_btn: "Official Portal",
        admin_search_placeholder: "Search by branch, officer, staff designation or room number...",
        admin_tab_all: "All Branches (All)",
        admin_tab_lead: "Leadership",
        admin_tab_revenue: "Revenue & LA",
        admin_tab_general: "General & Admin",
        admin_tab_ict: "Education & ICT",
        admin_tab_localgov: "Local Gov",
        th_room: "Room No",
        th_branch: "Branch & Section",
        th_officer: "Designated Officer & Designation",
        th_contact: "Contact Numbers",
        th_staff: "Staff & Core Services",
        th_action: "Action",
        admin_table_hint: "💡 Click on any branch to view full staff and services directory",
        nav_tourist: "Tourist Spots",
        nav_emergency: "Emergency",
        nav_education: "Education",
        nav_jobs: "Job Portal",
        nav_bot_btn: "AI Assistant",
        mobile_nav_home: "🏠 Home",
        mobile_nav_heritage: "🍬 Heritage & GI Products",
        mobile_nav_sweets: "🍯 Sweets & Chomchom Shops",
        mobile_nav_upazila: "🗺️ 12 Upazilas",
        mobile_nav_tourist: "🕌 Tourist Attractions",
        mobile_nav_emergency: "☎️ Emergency Directory",
        mobile_nav_education: "🎓 Educational Institutions",
        mobile_nav_jobs: "💼 Jobs & Notices",
        mobile_nav_emergency_call: "Emergency Call (999)",
        hero_pill: "Tangail District Information Hub & Interactive AI Bot",
        hero_title: 'All Information of Historic Tangail District<br>Now in <span class="gradient-text-green">TangailBot</span> in One Click!',
        hero_subtitle: "The complete digital portal to Porabari\'s mouth-watering Chomchom, world-famous handloom saree, 12 upazilas, archaeological wonders, and 24/7 verified emergency services.",
        search_placeholder: "Search anything (e.g., Chomchom, Mohera Zamindar Bari, Ambulance, Sadar Upazila)...",
        search_popular_label: "Popular Searches:",
        chip_chomchom: "🍬 Porabari Chomchom",
        chip_joykali: "🏪 Joykali Sweets",
        chip_tube_doi: "🥛 Intu Tube Yogurt",
        chip_bridge: "🌉 Bangabandhu Bridge",
        chip_mohera: "🏛️ Mohera Zamindar Bari",
        chip_mosque_201: "🕌 201 Dome Mosque",
        chip_saree: "🥻 Handloom Saree",
        chip_ambulance: "🚑 Ambulance Hotline",
        stat_upazilas_num: "12",
        stat_upazilas_label: "Historic Upazilas",
        stat_upazilas_sub: "Full directory & profiles",
        stat_pop_num: "4.0M+",
        stat_pop_label: "Population (Census 2022)",
        stat_pop_sub: "Gender, Religion & Literacy",
        stat_area_num: "3,414",
        stat_area_label: "Square Kilometers",
        stat_area_sub: "Full Tangail district map",
        stat_gi_num: "4 Items",
        stat_gi_label: "Recognized GI Products",
        stat_gi_sub: "Official GI certificates",
        stat_click_badge: "Click Here",
        stat_popup_upazilas: "🗺️ Click to view all 12 Upazilas directory & details",
        stat_popup_pop: "📊 Click to view Census 2022 demographics, religion & literacy",
        stat_popup_area: "🧭 Click to view full Tangail district satellite map",
        stat_popup_gi: "🏆 Click to view 4 recognized GI certified products",
        sec_heritage_tag: "Pride & Authenticity",
        sec_heritage_title: "Tangail\'s 4 Recognized GI Products",
        sec_heritage_desc: "Tangail Saree, Porabarir Chomchom, Madhupur Pineapple, and Jamurki Sondesh — 4 nationally and globally certified Geographical Indication products.",
        sec_sweets_tag: "Sweet Paradise • Tangail",
        sec_sweets_title: "Tangail\'s Traditional Confectioneries & Famous Chomchom Shops",
        sec_sweets_desc: "Reliable guide to authentic Porabari Chomchom, Joykali, Gopal, Phani Confectionery, and Intu\'s famous tube yogurt.",
        sec_upazila_tag: "Upazila Directory",
        sec_upazila_title: "Tangail District 12 Upazilas Guide",
        sec_upazila_desc: "Area, municipalities, unions, top attractions, and official administrative emergency contacts for each upazila.",
        upazila_filter_placeholder: "Filter by upazila name...",
        sec_tourist_tag: "Tourism & Travel Guide",
        sec_tourist_title: "Tangail\'s Top Tourist Attractions & Heritage Sites",
        filter_tourist_all: "All",
        filter_tourist_arch: "Palaces & Archaeology",
        filter_tourist_mosque: "Historic Mosques",
        filter_tourist_nature: "Nature & Sal Forests",
        sec_emergency_tag: "24/7 Emergency Services",
        sec_emergency_title: "Emergency Contacts & Health Hotlines",
        sec_emergency_desc: "Verified contacts for Tangail General Hospital, Kumudini Hospital, District Police, Ambulance, and Fire Service. Tap to call directly.",
        sec_edu_tag: "Education & Academia",
        sec_edu_title: "Prestigious Educational Institutions",
        sec_edu_desc: "Directory of renowned universities, government colleges, and century-old institutions in Tangail.",
        sec_persons_tag: "Distinguished Luminaries",
        sec_persons_title: "Tangail\'s Eminent Historical Personalities",
        sec_persons_desc: "Great leaders, philanthropists, and martyrs whose legacy illuminated the entire nation.",
        sec_jobs_tag: "Career & Notices",
        sec_jobs_title: "Tangail Job & Notice Portal",
        sec_jobs_desc: "Latest job circulars, notices, and examinations from district administration and local universities.",
        sec_bot_tag: "Interactive Knowledge Bot",
        sec_bot_title: "Ask Anything to TangailBot AI",
        sec_bot_desc: "Ask about Tangail\'s history, sweet shops, upazilas, tourist spots, or emergency helplines in natural language.",
        chat_header_title: "TangailBot AI",
        chat_header_status: "Online • Instant Knowledge Assistant",
        chat_welcome_title: "Welcome! 👋",
        chat_welcome_msg: "I am <strong>TangailBot</strong>. Ask me anything about Tangail\'s history, famous food, upazilas, tourist sites, or emergency services.",
        chat_welcome_sub: "Click any suggested prompt below or type your own question:",
        chat_input_placeholder: "Ask your question about Tangail here...",
        bot_chip_chomchom: "🍬 Porabari Chomchom History",
        bot_chip_joykali: "🏪 Joykali & Gopal Confectioneries",
        bot_chip_tube_doi: "🥛 Intu\'s Famous Tube Yogurt",
        bot_chip_bridge: "🌉 Bangabandhu Bridge & Jamuna",
        bot_chip_mohera: "🏛️ Mohera Zamindar Bari",
        bot_chip_saree: "🥻 Handloom Saree History",
        bot_chip_mosque_201: "🕌 201 Dome Mosque",
        bot_chip_upazilas: "🗺️ 12 Upazilas Directory",
        bot_chip_emergency: "🚑 Emergency Ambulance",
        footer_desc: "An open digital gateway designed to make the heritage, history, 12 upazilas, tourism, and civic services of Tangail accessible to everyone worldwide.",
        footer_links_title: "Essential Links",
        footer_link_admin: "District Administration Tangail",
        footer_link_mbstu: "Mawlana Bhashani Science & Tech University",
        footer_link_gov: "National Web Portal",
        footer_link_999: "National Emergency Service (999)",
        footer_contact_title: "Contact & Feedback",
        footer_contact_desc: "For inquiries, additions, or information updates:",
        footer_version: "Version: 1.0.0 • Tangail District",
        footer_copy: "© 2026 TangailBot. All rights reserved.",
        footer_disclaimer: "Verification with official sources is recommended for official administrative use."
    }
};

// ==========================================
// 2. LIFECYCLE & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    setupSearch();
    setupChatBot();
    setupMobileMenu();
    lucide.createIcons();
});

// ==========================================
// 3. LANGUAGE SWITCHER (BILINGUAL BN / EN)
// ==========================================
function initLanguage() {
    applyLanguage(currentLang);
}

function toggleLanguage() {
    currentLang = (currentLang === "bn") ? "en" : "bn";
    localStorage.setItem("tangailbot_lang", currentLang);
    applyLanguage(currentLang);
    showToast(currentLang === "bn" ? "ভাষা পরিবর্তন: বাংলা" : "Language switched to English");
}

function applyLanguage(lang) {
    const isEn = (lang === "en");

    // Toggle button label
    const btnText = document.getElementById("lang-btn-text");
    if (btnText) {
        btnText.innerText = isEn ? "বাং" : "EN";
    }

    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
        langToggleBtn.setAttribute("title", isEn ? "বাংলা ভাষায় দেখুন" : "Switch to English");
    }

    // Apply translations to data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // Apply translations to placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.placeholder = TRANSLATIONS[lang][key];
        }
    });

    // Re-render all dynamic data cards with current language
    renderAllSections();
    lucide.createIcons();
}

// ==========================================
// 4. THEME TOGGLE (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const moonIcon = document.getElementById("theme-icon-moon");
    const sunIcon = document.getElementById("theme-icon-sun");

    const savedTheme = localStorage.getItem("tangailbot_theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        moonIcon?.classList.remove("hidden");
        sunIcon?.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        moonIcon?.classList.add("hidden");
        sunIcon?.classList.remove("hidden");
    }

    themeToggleBtn?.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tangailbot_theme", isDark ? "dark" : "light");
        if (isDark) {
            moonIcon?.classList.remove("hidden");
            sunIcon?.classList.add("hidden");
        } else {
            moonIcon?.classList.add("hidden");
            sunIcon?.classList.remove("hidden");
        }
    });
}

// ==========================================
// 5. RENDER SECTIONS FROM DATA.JS
// ==========================================
function renderAllSections() {
    renderHeritage();
    renderSweets();
    renderUpazilas();
    renderTouristSpots(currentTouristCategory || 'all');
    renderEmergency();
    renderAdministration();
    renderEducation();
    renderPersonalities();
    renderJobs();
}

// 1. Heritage Cards (4 Recognized GI Products)
function renderHeritage() {
    const container = document.getElementById("heritage-grid");
    if (!container || !TANGAIL_DATA.giAndHeritages) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.giAndHeritages.map(item => {
        const title = isEn ? (item.enTitle || item.title) : item.title;
        const tag = isEn ? (item.enTag || item.tag) : item.tag;
        const desc = isEn ? (item.enShortDesc || item.shortDesc) : item.shortDesc;
        const places = isEn ? (item.enBestPlaces || item.bestPlaces) : item.bestPlaces;
        const labelPlaces = isEn ? "Famous Sources & Markets:" : "বিখ্যাত প্রাপ্তিস্থান:";
        const btnText = isEn ? "History & Full Details →" : "বিস্তারিত ইতিহাস ও তথ্য →";

        return `
            <div class="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all group">
                <div>
                    <div class="relative h-44 rounded-2xl overflow-hidden mb-4 bg-slate-200 dark:bg-slate-700">
                        <img src="${item.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                        <span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg border backdrop-blur-md ${item.badgeColor}">
                            ${tag}
                        </span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-1">${title}</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${desc}</p>
                </div>
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">${labelPlaces}</span>
                    <div class="flex flex-wrap gap-1">
                        ${places.map(p => `<span class="text-[10px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-medium">${p}</span>`).join('')}
                    </div>
                    <button onclick="openHeritageModal('${item.id}')" class="mt-4 w-full py-2 bg-white dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-emerald-700 dark:text-emerald-400 font-medium text-xs rounded-xl transition">
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// 2. Famous Sweets & Sweetmeat Shops
function renderSweets() {
    const container = document.getElementById("sweets-grid");
    if (!container || !TANGAIL_DATA.famousSweets) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.famousSweets.map(shop => {
        const name = isEn ? (shop.enName || shop.name) : shop.name;
        const shopType = isEn ? (shop.enShopType || shop.shopType) : shop.shopType;
        const location = isEn ? (shop.enLocation || shop.location) : shop.location;
        const speciality = isEn ? (shop.enSpeciality || shop.speciality) : shop.speciality;
        const items = isEn ? (shop.enFamousItems || shop.famousItems) : shop.famousItems;
        const price = isEn ? (shop.enPriceRange || shop.priceRange) : shop.priceRange;
        const labelItems = isEn ? "Famous Items:" : "বিখ্যাত আইটেম:";
        const labelPrice = isEn ? "Price Range:" : "দাম / মূল্য পরিসর:";
        const btnDetails = isEn ? "Shop & Sweet Details" : "দোকান ও মিষ্টির বিবরণ";
        const mapTitle = isEn ? "Location on Google Maps" : "গুগল ম্যাপে লোকেশন";

        return `
            <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col group">
                <div class="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img src="${shop.image}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                    <div class="absolute bottom-3 left-4 right-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white px-2.5 py-0.5 rounded-full backdrop-blur shadow-sm">
                            ${shopType}
                        </span>
                        <h3 class="font-bold text-lg text-white mt-1 leading-snug">${name}</h3>
                    </div>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500 shrink-0"></i>
                            <span class="font-medium">${location}</span>
                        </div>

                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-3">
                            ${speciality}
                        </p>

                        <div class="mb-3">
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">${labelItems}</span>
                            <div class="flex flex-wrap gap-1">
                                ${items.map(item => `
                                    <span class="text-[10px] bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-medium px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/60">
                                        ${item}
                                    </span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 mb-4 flex items-center justify-between">
                            <span class="text-slate-400">${labelPrice}</span>
                            <span class="font-bold text-amber-700 dark:text-amber-400 font-mono">${price}</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <button onclick="openSweetModal('${shop.id}')" class="flex-1 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold rounded-xl transition text-center shadow-sm">
                            ${btnDetails}
                        </button>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapQuery)}" target="_blank" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="${mapTitle}">
                            <i data-lucide="navigation" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// 3. 12 Upazilas Directory
function renderUpazilas(filterText = '') {
    const container = document.getElementById("upazila-grid");
    if (!container || !TANGAIL_DATA.upazilas) return;
    const isEn = (currentLang === "en");

    const filtered = TANGAIL_DATA.upazilas.filter(u => 
        u.name.toLowerCase().includes(filterText.toLowerCase()) || 
        u.enName.toLowerCase().includes(filterText.toLowerCase()) ||
        (u.enHighlights && u.enHighlights.toLowerCase().includes(filterText.toLowerCase())) ||
        (u.highlights && u.highlights.toLowerCase().includes(filterText.toLowerCase()))
    );

    if (filtered.length === 0) {
        container.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400">${isEn ? "No upazila found." : "কোনো উপজেলা খুঁজে পাওয়া যায়নি।"}</div>`;
        return;
    }

    container.innerHTML = filtered.map(u => {
        const name = isEn ? u.enName : u.name;
        const subName = isEn ? u.name : u.enName;
        const area = isEn ? (u.enArea || u.area) : u.area;
        const unions = isEn ? (u.enUnions || u.unions) : u.unions;
        const highlights = isEn ? (u.enHighlights || u.highlights) : u.highlights;
        const btnText = isEn ? "View Profile" : "বিস্তারিত জানুন";

        return `
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <h3 class="font-bold text-lg text-slate-900 dark:text-white">${name}</h3>
                            <span class="text-xs text-slate-400">${subName}</span>
                        </div>
                        <span class="text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                            ${area}
                        </span>
                    </div>
                    <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
                        <p class="flex items-center gap-1.5"><i data-lucide="layers" class="w-3.5 h-3.5 text-emerald-600"></i> <span>${unions}</span></p>
                        <p class="flex items-start gap-1.5"><i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i> <span class="line-clamp-2">${highlights}</span></p>
                    </div>
                </div>
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button onclick="openUpazilaModal('${u.id}')" class="flex-1 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 font-medium text-xs rounded-lg transition text-center">
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Upazila Filter Input Listener
document.getElementById("upazila-filter-input")?.addEventListener("input", (e) => {
    renderUpazilas(e.target.value);
});

// 4. Tourist Spots
function renderTouristSpots(category = 'all') {
    const container = document.getElementById("tourist-grid");
    if (!container || !TANGAIL_DATA.touristSpots) return;
    const isEn = (currentLang === "en");

    let spots = TANGAIL_DATA.touristSpots;
    if (category !== 'all') {
        spots = spots.filter(s => s.category.includes(category) || (s.enCategory && s.enCategory.toLowerCase().includes(category.toLowerCase())));
    }

    container.innerHTML = spots.map(s => {
        const name = isEn ? (s.enName || s.name) : s.name;
        const cat = isEn ? (s.enCategory || s.category) : s.category;
        const location = isEn ? (s.enLocation || s.location) : s.location;
        const summary = isEn ? (s.enSummary || s.summary) : s.summary;
        const fee = isEn ? (s.enEntryFee || s.entryFee) : s.entryFee;
        const time = isEn ? (s.enTime || s.time) : s.time;
        const labelFee = isEn ? "Entry Fee:" : "প্রবেশ ফি:";
        const labelTime = isEn ? "Timings:" : "সময়সূচি:";
        const btnText = isEn ? "How to Go & Info" : "কীভাবে যাবেন ও তথ্য";
        const mapTitle = isEn ? "View on Google Maps" : "গুগল ম্যাপে দেখুন";

        return `
            <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col group">
                <div class="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img src="${s.image}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-3 left-4 right-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 text-white px-2 py-0.5 rounded backdrop-blur">
                            ${cat}
                        </span>
                        <h3 class="font-bold text-lg text-white mt-1 leading-snug">${name}</h3>
                    </div>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
                            <span>${location}</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                            ${summary}
                        </p>
                        <div class="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 mb-4">
                            <div>
                                <span class="text-slate-400 block text-[10px]">${labelFee}</span>
                                <span class="font-semibold text-slate-700 dark:text-slate-200">${fee}</span>
                            </div>
                            <div>
                                <span class="text-slate-400 block text-[10px]">${labelTime}</span>
                                <span class="font-semibold text-slate-700 dark:text-slate-200">${time}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <button onclick="openTouristModal('${s.id}')" class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition text-center shadow-sm">
                            ${btnText}
                        </button>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}" target="_blank" class="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="${mapTitle}">
                            <i data-lucide="navigation" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function filterTouristSpots(category) {
    currentTouristCategory = category;
    document.querySelectorAll(".tourist-filter-btn").forEach(btn => {
        btn.classList.remove("bg-emerald-600", "text-white");
        btn.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    });
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
        window.event.currentTarget.classList.add("bg-emerald-600", "text-white");
    }
    renderTouristSpots(category);
}


// 6. Emergency Services Directory
function renderEmergency() {
    const container = document.getElementById("emergency-container");
    if (!container || !TANGAIL_DATA.emergencyServices) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.emergencyServices.map(cat => {
        const catTitle = isEn ? (cat.enCategory || cat.category) : cat.category;
        const copyTitle = isEn ? "Copy Number" : "নম্বর কপি করুন";
        const callTitle = isEn ? "Call directly" : "সরাসরি কল করুন";
        const callText = isEn ? "Call" : "কল";

        return `
            <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>${catTitle}</span>
                </h3>
                <div class="space-y-3">
                    ${cat.items.map(item => {
                        const title = isEn ? (item.enTitle || item.title) : item.title;
                        const desc = isEn ? (item.enDesc || item.desc) : item.desc;

                        return `
                            <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition">
                                <div class="pr-3">
                                    <h4 class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">${title}</h4>
                                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${desc}</p>
                                    <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 inline-block">${item.number}</span>
                                </div>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <button onclick="copyToClipboard('${item.number}')" title="${copyTitle}" class="p-2 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:text-emerald-600 transition">
                                        <i data-lucide="copy" class="w-4 h-4"></i>
                                    </button>
                                    <a href="tel:${item.tel || item.number}" title="${callTitle}" class="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center gap-1 shadow-sm transition">
                                        <i data-lucide="phone" class="w-4 h-4"></i>
                                        <span class="hidden sm:inline">${callText}</span>
                                    </a>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// 7. Education Institutions
function renderEducation() {
    const container = document.getElementById("education-list");
    if (!container || !TANGAIL_DATA.education) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.education.map(edu => {
        const name = isEn ? (edu.enName || edu.name) : edu.name;
        const established = isEn ? (edu.enEstablished || edu.established) : edu.established;
        const type = isEn ? (edu.enType || edu.type) : edu.type;
        const location = isEn ? (edu.enLocation || edu.location) : edu.location;
        const highlights = isEn ? (edu.enHighlights || edu.highlights) : edu.highlights;
        const webText = isEn ? "Visit Official Website" : "অফিসিয়াল ওয়েবসাইট ভিজিট করুন";

        return `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition">
                <div class="flex items-start justify-between gap-2 mb-1">
                    <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white">${name}</h4>
                    <span class="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full shrink-0">
                        ${established}
                    </span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span>${type}</span> • <span>${location}</span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${highlights}</p>
                ${edu.website ? `
                    <a href="${edu.website}" target="_blank" class="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                        ${webText} <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    </a>
                ` : ''}
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// 8. Famous Personalities
function renderPersonalities() {
    const container = document.getElementById("personalities-list");
    if (!container || !TANGAIL_DATA.famousPersonalities) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.famousPersonalities.map(p => {
        const name = isEn ? (p.enName || p.name) : p.name;
        const title = isEn ? (p.enTitle || p.title) : p.title;
        const desc = isEn ? (p.enDesc || p.desc) : p.desc;

        return `
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">${name}</h4>
                <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">${title}</span>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${desc}</p>
            </div>
        `;
    }).join('');
}

// 9. Jobs & Notices
function renderJobs() {
    const container = document.getElementById("jobs-grid");
    if (!container || !TANGAIL_DATA.jobsAndNotices) return;
    const isEn = (currentLang === "en");

    container.innerHTML = TANGAIL_DATA.jobsAndNotices.map(j => {
        const title = isEn ? (j.enTitle || j.title) : j.title;
        const category = isEn ? (j.enCategory || j.category) : j.category;
        const organization = isEn ? (j.enOrganization || j.organization) : j.organization;
        const deadline = isEn ? (j.enDeadline || j.deadline) : j.deadline;
        const linkText = isEn ? "Circular" : "সার্কুলার";

        return `
            <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                        ${category}
                    </span>
                    <h4 class="font-bold text-sm text-slate-900 dark:text-white mt-2 mb-1 line-clamp-2">${title}</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">${organization}</p>
                </div>
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span class="text-slate-400 text-[11px]">${deadline}</span>
                    <a href="${j.link}" target="_blank" class="text-emerald-600 font-semibold hover:underline flex items-center gap-1">
                        ${linkText} <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// ==========================================
// 6. GLOBAL UNIFIED SEARCH & AUTOCOMPLETE
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
            clearBtn?.classList.add("hidden");
            return;
        }

        clearBtn?.classList.remove("hidden");
        const results = executeSearch(query);
        renderSearchResults(results, dropdown);
    });

    clearBtn?.addEventListener("click", () => {
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
    const isEn = (currentLang === "en");

    // Search Upazilas
    TANGAIL_DATA.upazilas.forEach(u => {
        if (
            u.name.toLowerCase().includes(query) || 
            u.enName.toLowerCase().includes(query) || 
            (u.highlights && u.highlights.toLowerCase().includes(query)) ||
            (u.enHighlights && u.enHighlights.toLowerCase().includes(query))
        ) {
            results.push({
                type: isEn ? "Upazila" : "উপজেলা",
                title: isEn ? u.enName : u.name,
                subtitle: (isEn ? u.name : u.enName) + " • " + (isEn ? u.enArea : u.area),
                action: () => openUpazilaModal(u.id)
            });
        }
    });

    // Search Tourist Spots
    TANGAIL_DATA.touristSpots.forEach(s => {
        if (
            s.name.toLowerCase().includes(query) || 
            (s.enName && s.enName.toLowerCase().includes(query)) ||
            s.location.toLowerCase().includes(query) || 
            (s.enLocation && s.enLocation.toLowerCase().includes(query)) ||
            s.category.toLowerCase().includes(query) || 
            (s.enCategory && s.enCategory.toLowerCase().includes(query)) ||
            s.summary.toLowerCase().includes(query) ||
            (s.enSummary && s.enSummary.toLowerCase().includes(query))
        ) {
            results.push({
                type: isEn ? "Tourist Spot" : "দর্শনীয় স্থান",
                title: isEn ? (s.enName || s.name) : s.name,
                subtitle: (isEn ? (s.enLocation || s.location) : s.location) + " (" + (isEn ? (s.enCategory || s.category) : s.category) + ")",
                action: () => openTouristModal(s.id)
            });
        }
    });

    // Search Heritage & GI
    TANGAIL_DATA.giAndHeritages.forEach(h => {
        if (
            h.title.toLowerCase().includes(query) || 
            (h.enTitle && h.enTitle.toLowerCase().includes(query)) ||
            h.shortDesc.toLowerCase().includes(query) || 
            (h.enShortDesc && h.enShortDesc.toLowerCase().includes(query)) ||
            h.tag.toLowerCase().includes(query) ||
            (h.enTag && h.enTag.toLowerCase().includes(query))
        ) {
            results.push({
                type: isEn ? "Heritage & GI" : "ঐতিহ্য ও জিআই",
                title: isEn ? (h.enTitle || h.title) : h.title,
                subtitle: isEn ? (h.enTag || h.tag) : h.tag,
                action: () => openHeritageModal(h.id)
            });
        }
    });

    // Search Sweets & Confectioneries
    if (TANGAIL_DATA.famousSweets) {
        TANGAIL_DATA.famousSweets.forEach(shop => {
            if (
                shop.name.toLowerCase().includes(query) || 
                (shop.enName && shop.enName.toLowerCase().includes(query)) ||
                shop.location.toLowerCase().includes(query) || 
                (shop.enLocation && shop.enLocation.toLowerCase().includes(query)) ||
                shop.speciality.toLowerCase().includes(query) || 
                (shop.enSpeciality && shop.enSpeciality.toLowerCase().includes(query)) ||
                shop.famousItems.some(i => i.toLowerCase().includes(query)) ||
                (shop.enFamousItems && shop.enFamousItems.some(i => i.toLowerCase().includes(query)))
            ) {
                results.push({
                    type: isEn ? "Sweet & Chomchom" : "মিষ্টান্ন ও চমচম",
                    title: isEn ? (shop.enName || shop.name) : shop.name,
                    subtitle: (isEn ? (shop.enLocation || shop.location) : shop.location) + " • " + (isEn ? (shop.enPriceRange || shop.priceRange) : shop.priceRange),
                    action: () => openSweetModal(shop.id)
                });
            }
        });
    }


    // 2. Upazila match in database
    const upazilaMatch = TANGAIL_DATA.upazilas.find(u => 
        lower.includes(u.name.toLowerCase()) || 
        lower.includes(u.enName.toLowerCase()) ||
        lower.includes(u.id.toLowerCase())
    );
    if (upazilaMatch) {
        if (isEn) {
            return `🗺️ **${upazilaMatch.enName} Upazila (${upazilaMatch.name})**

` +
                   `• **Total Area:** ${upazilaMatch.enArea || upazilaMatch.area}
` +
                   `• **Municipalities & Unions:** ${upazilaMatch.enUnions || upazilaMatch.unions}
` +
                   `• **Key Highlights:** ${upazilaMatch.enHighlights || upazilaMatch.highlights}
` +
                   `• **Administration:** ${upazilaMatch.enOfficers || upazilaMatch.officers}
` +
                   `• **Police Station:** ${upazilaMatch.enPolice || upazilaMatch.police}
` +
                   `• **Health Complex:** ${upazilaMatch.enHospital || upazilaMatch.hospital}`;
        } else {
            return `🗺️ **${upazilaMatch.name} উপজেলা (${upazilaMatch.enName})**

` +
                   `• আয়তন: ${upazilaMatch.area}
` +
                   `• ইউনিয়ন ও পৌরসভা: ${upazilaMatch.unions}
` +
                   `• প্রধান আকর্ষণ: ${upazilaMatch.highlights}
` +
                   `• প্রশাসন: ${upazilaMatch.officers}
` +
                   `• থানা: ${upazilaMatch.police}
` +
                   `• স্বাস্থ্যসেবা: ${upazilaMatch.hospital}`;
        }
    }

    // 3. Tourist spot match in database
    const touristMatch = TANGAIL_DATA.touristSpots.find(s => 
        lower.includes(s.name.toLowerCase()) || 
        (s.enName && lower.includes(s.enName.toLowerCase())) ||
        lower.includes(s.id.toLowerCase())
    );
    if (touristMatch) {
        if (isEn) {
            return `🏛️ **${touristMatch.enName || touristMatch.name}**

` +
                   `📍 **Location:** ${touristMatch.enLocation || touristMatch.location}
` +
                   `🏷️ **Category:** ${touristMatch.enCategory || touristMatch.category}
` +
                   `ℹ️ **Overview:** ${touristMatch.enSummary || touristMatch.summary}
` +
                   `🎟️ **Entry Fee:** ${touristMatch.enEntryFee || touristMatch.entryFee}
` +
                   `⏰ **Timings:** ${touristMatch.enTime || touristMatch.time}
` +
                   `🚗 **How to Go:** ${touristMatch.enHowToGo || touristMatch.howToGo}`;
        } else {
            return `🏛️ **${touristMatch.name}**

` +
                   `📍 অবস্থান: ${touristMatch.location}
` +
                   `ℹ️ বিবরণ: ${touristMatch.summary}
` +
                   `🎟️ প্রবেশ ফি: ${touristMatch.entryFee}
` +
                   `⏰ সময়: ${touristMatch.time}
` +
                   `🚗 কীভাবে যাবেন: ${touristMatch.howToGo}`;
        }
    }

    // 4. Sweet Shop match in database
    if (TANGAIL_DATA.famousSweets) {
        const sweetMatch = TANGAIL_DATA.famousSweets.find(sw => 
            lower.includes(sw.name.toLowerCase()) || 
            (sw.enName && lower.includes(sw.enName.toLowerCase())) ||
            lower.includes(sw.id.toLowerCase()) ||
            sw.famousItems.some(i => lower.includes(i.toLowerCase())) ||
            (sw.enFamousItems && sw.enFamousItems.some(i => lower.includes(i.toLowerCase())))
        );
        if (sweetMatch) {
            if (isEn) {
                return `🍬 **${sweetMatch.enName || sweetMatch.name}**

` +
                       `📍 **Location:** ${sweetMatch.enLocation || sweetMatch.location}
` +
                       `🏷️ **Shop Type:** ${sweetMatch.enShopType || sweetMatch.shopType}
` +
                       `✨ **Speciality:** ${sweetMatch.enSpeciality || sweetMatch.speciality}
` +
                       `🍰 **Famous Items:** ${(sweetMatch.enFamousItems || sweetMatch.famousItems).join(', ')}
` +
                       `💰 **Price Range:** ${sweetMatch.enPriceRange || sweetMatch.priceRange}`;
            } else {
                return `🍬 **${sweetMatch.name}**

` +
                       `📍 অবস্থান: ${sweetMatch.location}
` +
                       `🏷️ ধরন: ${sweetMatch.shopType}
` +
                       `✨ বিশেষত্ব: ${sweetMatch.speciality}
` +
                       `🍰 বিখ্যাত আইটেম: ${sweetMatch.famousItems.join(', ')}
` +
                       `💰 মূল্য পরিসর: ${sweetMatch.priceRange}`;
            }
        }
    }



    // DC Office / District Administration match
    if (lower.includes("ডিসি অফিস") || lower.includes("জেলা প্রশাসন") || lower.includes("জেলা প্রশাসক") || lower.includes("dc office") || lower.includes("deputy commissioner") || lower.includes("শাখা") || lower.includes("কক্ষ নম্বর") || lower.includes("এডিসি")) {
        if (isEn) {
            return `🏛️ **Tangail District Administration (DC Office Directory)**:\n\n` +
                   `• **Head of District:** Deputy Commissioner & District Magistrate (Room 202, 2nd Floor)\n` +
                   `• **Phone:** 02-997700001 | **Email:** dctangail@mopa.gov.bd\n` +
                   `• **ADC General:** Room 204 (Phone: 02-997700022)\n` +
                   `• **ADM (Judicial & Magistrate Court):** Room 206 (Phone: 02-997700033)\n` +
                   `• **ADC Revenue:** Room 208 (Phone: 02-997700044)\n` +
                   `• **ADC Education & ICT:** Room 211 (Phone: 02-997700055)\n` +
                   `• **Land Acquisition (LA Branch):** Room 213 (Phone: 02-997700120)\n` +
                   `• **Record Room (Certified Land Records):** Room 102 (Ground Floor)\n` +
                   `• **District e-Service Center & Front Desk:** Room 101 (Ground Floor Entrance)\n` +
                   `• **Nejarat & Protocol (NDC):** Room 105 (Phone: 02-997700066)\n\n` +
                   `Please visit the 'District Administration (DC Office)' Excel section on this website to view all 18 branches, room numbers, staff, and direct calling lines!`;
        } else {
            return `🏛️ **জেলা প্রশাসন টাঙ্গাইল (জেলা প্রশাসকের কার্যালয় - ডিসি অফিস)**:\n\n` +
                   `• **জেলা প্রধান:** জেলা প্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট (কক্ষ ২০২, ২য় তলা)\n` +
                   `• **ফোন:** ০২-৯৯৭৭০০০০১ | **ইমেইল:** dctangail@mopa.gov.bd\n` +
                   `• **এডিসি (সার্বিক):** কক্ষ ২০৪ (ফোন: ০২-৯৯৭৭০০০২২)\n` +
                   `• **অতিরিক্ত জেলা ম্যাজিস্ট্রেট (এডিএম):** কক্ষ ২০৬ (ফোন: ০২-৯৯৭৭০০০৩৩)\n` +
                   `• **এডিসি (রাজস্ব):** কক্ষ ২০৮ (ফোন: ০২-৯৯৭৭০০০৪৪)\n` +
                   `• **এডিসি (শিক্ষা ও আইসিটি):** কক্ষ ২১১ (ফোন: ০২-৯৯৭৭০০০৫৫)\n` +
                   `• **ভূমি হুকুমদখল (এলএ শাখা):** কক্ষ ২১৩ (ফোন: ০২-৯৯৭৭০০১২০)\n` +
                   `• **রেকর্ড রুম (খতিয়ান ও পর্চা নকল):** কক্ষ ১০২ (নিচতলা)\n` +
                   `• **জেলা ই-সেবা কেন্দ্র ও ফ্রন্ট ডেস্ক:** কক্ষ ১০১ (নিচতলা প্রধান ফটক)\n` +
                   `• **নেজারত শাখা (এনডিসি):** কক্ষ ১০৫ (ফোন: ০২-৯৯৭৭০০০৬৬)\n\n` +
                   `ওয়েবসাইটের 'জেলা প্রশাসন টাঙ্গাইল' এক্সেল স্প্রেডশীট সেকশনে গেলে ১৮টি শাখার সব কর্মকর্তা, কর্মচারী, কক্ষ নম্বর ও সেবার তালিকা সরাসরি দেখতে পারবেন!`;
        }
    }

    // 6. Default polite fallback
    if (isEn) {
        return `Thank you for asking! 😊

You asked for information regarding Tangail district. You can ask specifically about:
` +
               `• 🍬 Authentic Porabari Chomchom, Joykali, Gopal or Phani Confectioneries
` +
               `• 🥛 Intu\'s Famous Tube Yogurt
` +
               `• 🛕 Sri Sri Boro Kali Bari, Upendra Sarobar 12 Shiv Mandir & other historic temples
` +
               `• 🥻 Famous Tangail Handloom Saree markets & Pathrail weaving hub
` +
               `• 🏛️ Mohera Zamindar Bari Palace, Atia Mosque or 201 Dome Mosque
` +
               `• 🗺️ Information about 12 Upazilas
` +
               `• 🏥 Emergency health services & ambulance numbers (or 999)

Please ask your question with specific names or topics!`;
    } else {
        return `ধন্যবাদ আপনার প্রশ্নের জন্য! 😊

আপনি টাঙ্গাইল সম্পর্কিত তথ্য জানতে চেয়েছেন। আপনি নিচের বিষয়গুলো সম্পর্কে স্পষ্ট জানতে চাইতে পারেন:
` +
               `• 🍬 পোড়াবাড়ির আসল চমচম, জয়কালী, গোপাল বা ফণী মিষ্টান্ন ভান্ডার
` +
               `• 🥛 ইনটুর বিখ্যাত টিউব দই
` +
               `• 🛕 শ্রী শ্রী বড় কালী বাড়ি, উপেন্দ্র সরোবর বারো শিবালয় বা অন্যান্য মন্দির
` +
               `• 🥻 টাঙ্গাইল তাঁতের শাড়ির বিখ্যাত হাট ও পাথরাইল
` +
               `• 🏛️ মহেরা জমিদার বাড়ি, আতিয়া মসজিদ বা ২০১ গম্বুজ মসজিদ
` +
               `• 🗺️ ১২টি উপজেলার তথ্য
` +
               `• 🏥 জরুরি স্বাস্থ্যসেবা ও অ্যাম্বুলেন্স নম্বর (বা ৯৯৯)

অনুগ্রহ করে প্রশ্নটি পুনরায় নির্দিষ্ট করে লিখুন।`;
    }
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
    const isEn = (currentLang === "en");

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
                <span>${isEn ? "TangailBot AI" : "টাঙ্গাইল বট AI"}</span>
                <button onclick="copyToClipboard('${escapeHTML(text).replace(/'/g, "\\'")}')" class="hover:text-emerald-500 flex items-center gap-1 transition">
                    <i data-lucide="copy" class="w-3 h-3"></i> ${isEn ? "Copy" : "কপি করুন"}
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
    const isEn = (currentLang === "en");

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
            <span class="ml-1">${isEn ? "Generating answer..." : "উত্তর তৈরি হচ্ছে..."}</span>
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
    const isEn = (currentLang === "en");

    chatContainer.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm shrink-0">
                🤖
            </div>
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-800 dark:text-slate-100 shadow-sm max-w-[85%]">
                <p class="font-semibold text-emerald-700 dark:text-emerald-400 mb-1">${isEn ? "Chat history reset!" : "চ্যাট হিস্ট্রি রিসেট করা হয়েছে!"}</p>
                <p>${isEn ? "You can ask any new question regarding Tangail district." : "নতুন করে টাঙ্গাইল জেলা সম্পর্কিত যেকোনো প্রশ্ন করতে পারেন।"}</p>
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

// ==========================================
// 8. MODAL SYSTEM (BILINGUAL STATS & DETAILS)
// ==========================================

// CARD 1: 12 UPAZILAS OVERVIEW MODAL
function openUpazilasOverviewModal() {
    const isEn = (currentLang === "en");
    const modalContent = document.getElementById("modal-content");
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="mb-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <i data-lucide="map" class="w-3.5 h-3.5"></i>
                <span>${isEn ? "12 Upazilas Directory" : "উপজেলা পরিচিতি নির্দেশিকা"}</span>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                ${isEn ? "12 Administrative Upazilas of Tangail" : "টাঙ্গাইল জেলার ১২টি উপজেলা"}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${isEn 
                    ? "Total Area: 3,414.35 sq km • 11 Municipalities & 118 Unions across Tangail District" 
                    : "মোট আয়তন: ৩,৪১৪.৩৫ বর্গ কিমি • ১১টি পৌরসভা ও ১১৮টি ইউনিয়ন নিয়ে গঠিত ঐতিহাসিক টাঙ্গাইল"}
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-h-[60vh] overflow-y-auto pr-1">
            ${TANGAIL_DATA.upazilas.map((u, i) => `
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-md transition flex flex-col justify-between group">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-1.5">
                            <div>
                                <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">#${i + 1}</span>
                                <h3 class="font-bold text-base text-slate-900 dark:text-white leading-tight">${isEn ? u.enName : u.name}</h3>
                                <span class="text-[11px] text-slate-400">${isEn ? u.name : u.enName}</span>
                            </div>
                            <span class="text-[10px] font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 shrink-0">
                                ${isEn ? (u.enArea || u.area) : u.area}
                            </span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-2">
                            ${isEn ? (u.enHighlights || u.highlights) : u.highlights}
                        </p>
                    </div>
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                        <span class="text-[10px] text-slate-400">${isEn ? (u.enUnions || u.unions) : u.unions}</span>
                        <button onclick="openUpazilaModal('${u.id}')" class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center gap-1 transition shadow-sm">
                            <span>${isEn ? "View Profile" : "বিস্তারিত দেখুন"}</span>
                            <i data-lucide="arrow-right" class="w-3 h-3"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button onclick="sendPresetPrompt('${isEn ? "Tell me about the 12 upazilas of Tangail" : "টাঙ্গাইল জেলার ১২টি উপজেলার নাম ও পরিচিতি বলো"}'); closeDetailModal(); scrollToBot();" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="bot" class="w-4 h-4"></i> ${isEn ? "Ask AI Assistant About Upazilas" : "বটকে উপজেলা নিয়ে প্রশ্ন করুন"}
            </button>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// CARD 2: DEMOGRAPHICS (CENSUS 2022) MODAL
function openDemographicsModal() {
    const d = TANGAIL_DATA.demographics;
    if (!d) return;
    const isEn = (currentLang === "en");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
        <div class="mb-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                <i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i>
                <span>${isEn ? "BBS Population & Housing Census 2022" : (d.source + " • " + d.censusYear)}</span>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                ${isEn ? (d.enTitle || "Tangail District Census 2022 & Demographics") : d.title}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${isEn 
                    ? `Total Population: <strong class="text-teal-600 dark:text-teal-400 font-bold">4,037,016</strong> • Households: ${d.enHouseholdCount || "982,510"} • Density: ${d.enDensity || "1,182 / sq km"}` 
                    : `মোট জনসংখ্যা: <strong class="text-teal-600 dark:text-teal-400 font-bold">${d.totalPopulation} জন</strong> • পরিবার: ${d.householdCount} • ঘনত্ব: ${d.density}`}
            </p>
        </div>

        <!-- Gender Distribution -->
        <div class="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <i data-lucide="users" class="w-4 h-4 text-teal-500"></i> ${isEn ? "Gender Distribution" : "লিঙ্গভিত্তিক জনসংখ্যা বন্টন"}
                </span>
                <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">${isEn ? (d.enSexRatio || "Sex Ratio: 93.8 males per 100 females") : d.sexRatio}</span>
            </div>

            <div class="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex mb-3 shadow-inner">
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-1000" style="width: ${d.male.percentNum}%" title="${isEn ? 'Male ' + d.male.percentage : 'ছেলে ' + d.male.percentage}"></div>
                <div class="bg-gradient-to-r from-rose-500 to-pink-500 h-full transition-all duration-1000" style="width: ${d.female.percentNum}%" title="${isEn ? 'Female ' + d.female.percentage : 'মেয়ে ' + d.female.percentage}"></div>
            </div>

            <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <div class="p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60">
                    <span class="text-[11px] text-blue-700 dark:text-blue-300 font-semibold block">${isEn ? (d.male.enName || "👨 Boys / Men") : "👨 ছেলে / পুরুষ"}</span>
                    <span class="text-base font-extrabold text-blue-900 dark:text-blue-200 block mt-0.5">${d.male.percentage}</span>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${isEn ? (d.male.enCount || "1,953,800") : d.male.count}</span>
                </div>

                <div class="p-2.5 rounded-xl bg-pink-50/80 dark:bg-pink-950/40 border border-pink-200/70 dark:border-pink-900/60">
                    <span class="text-[11px] text-pink-700 dark:text-pink-300 font-semibold block">${isEn ? (d.female.enName || "👩 Girls / Women") : "👩 মেয়ে / নারী"}</span>
                    <span class="text-base font-extrabold text-pink-900 dark:text-pink-200 block mt-0.5">${d.female.percentage}</span>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${isEn ? (d.female.enCount || "2,083,016") : d.female.count}</span>
                </div>

                <div class="p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/70 dark:border-purple-900/60">
                    <span class="text-[11px] text-purple-700 dark:text-purple-300 font-semibold block">${isEn ? (d.transgender.enName || "⚧️ Third Gender") : "⚧️ তৃতীয় লিঙ্গ"}</span>
                    <span class="text-base font-extrabold text-purple-900 dark:text-purple-200 block mt-0.5">${d.transgender.percentage}</span>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${isEn ? (d.transgender.enCount || "200") : d.transgender.count}</span>
                </div>
            </div>
        </div>

        <!-- Literacy Rate -->
        <div class="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-500"></i> ${isEn ? "Literacy Rate (7 Years & Above)" : "শিক্ষার হার (৭ বছর ও তদূর্ধ্ব)"}
                </span>
                <span class="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                    ${isEn ? "Overall: " + d.literacyRate.total : "সার্বিক: " + d.literacyRate.total}
                </span>
            </div>

            <div class="space-y-2.5 text-xs">
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-slate-600 dark:text-slate-300 font-medium">${isEn ? "👨 Male Literacy Rate" : "👨 পুরুষ শিক্ষার হার"}</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${d.literacyRate.male}</span>
                    </div>
                    <div class="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div class="bg-emerald-600 h-full rounded-full transition-all duration-1000" style="width: ${d.literacyRate.maleNum}%"></div>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-slate-600 dark:text-slate-300 font-medium">${isEn ? "👩 Female Literacy Rate" : "👩 নারী শিক্ষার হার"}</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${d.literacyRate.female}</span>
                    </div>
                    <div class="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div class="bg-teal-500 h-full rounded-full transition-all duration-1000" style="width: ${d.literacyRate.femaleNum}%"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Religious Demographic Distribution -->
        <div class="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
                <i data-lucide="landmark" class="w-4 h-4 text-amber-500"></i> ${isEn ? "Religious Demographic Distribution" : "ধর্মভিত্তিক জনসংখ্যা বন্টন"}
            </span>

            <div class="h-3.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex mb-3 shadow-inner">
                ${d.religion.map(r => `
                    <div class="bg-gradient-to-r ${r.barColor} h-full" style="width: ${r.percentNum}%" title="${isEn ? (r.enName || r.name) : r.name} ${r.percentage}"></div>
                `).join('')}
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                ${d.religion.map(r => `
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center gap-1.5 mb-1">
                                <span class="w-2.5 h-2.5 rounded-full ${r.color}"></span>
                                <span class="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                                    ${isEn ? (r.enName || r.name) : r.name}
                                </span>
                            </div>
                            <span class="text-base font-extrabold ${r.textCol} block">${r.percentage}</span>
                        </div>
                        <span class="text-[10px] text-slate-400 font-mono mt-1 block">${isEn ? (r.enCount || r.count) : r.count}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Other Metrics -->
        <div class="grid grid-cols-2 gap-2.5 mb-6 text-xs">
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <span class="text-slate-400 block text-[10px]">${isEn ? "Rural vs Urban Ratio:" : "পল্লি বনাম শহর অনুপাত:"}</span>
                <span class="font-bold text-slate-800 dark:text-white mt-0.5 block">${isEn ? "76.50% Rural" : d.areaType.rural}</span>
                <span class="text-[10px] text-slate-500">${isEn ? "23.50% Urban" : d.areaType.urban}</span>
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <span class="text-slate-400 block text-[10px]">${isEn ? "Annual Growth Rate:" : "বার্ষিক জনসংখ্যা বৃদ্ধির হার:"}</span>
                <span class="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">${d.annualGrowthRate}</span>
                <span class="text-[10px] text-slate-500">${isEn ? "Total Voters: ~60%" : "মোট ভোটার অনুপাত প্রায় ৬০%"}</span>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <button onclick="sendPresetPrompt('${isEn ? "Tell me more about Tangail population and census 2022" : "টাঙ্গাইল জেলার জনসংখ্যা ও জনমিতি সম্পর্কে আরও বিস্তারিত বলো"}'); closeDetailModal(); scrollToBot();" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="bot" class="w-4 h-4"></i> ${isEn ? "Ask AI Bot About Demographics" : "বটকে জনসংখ্যা নিয়ে প্রশ্ন করুন"}
            </button>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// CARD 3: FULL DISTRICT MAP MODAL
function openTangailMapModal() {
    const isEn = (currentLang === "en");
    const modalContent = document.getElementById("modal-content");
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="mb-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                <span>${isEn ? "Geographical Map & Profile" : "ভৌগোলিক মানচিত্র ও অবস্থান"}</span>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                ${isEn ? "Full Map & Boundaries of Tangail District" : "টাঙ্গাইল জেলার সম্পূর্ণ মানচিত্র ও ভৌগোলিক পরিচিতি"}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${isEn 
                    ? "Total Area: 3,414.35 sq km • Located at 24°15' N and 89°58' E in Dhaka Division" 
                    : "মোট আয়তন: ৩,৪১৪.৩৫ বর্গ কিলোমিটার • অবস্থান: ২৪°১৫′ উত্তর অক্ষাংশ ও ৮৯°৫৮′ পূর্ব দ্রাঘিমাংশ"}
            </p>
        </div>

        <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md mb-5 bg-slate-100 dark:bg-slate-800">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464878.1755139414!2d89.7046467385623!3d24.385317282699276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb4b3b18c7e9%3A0x6b10d7a1264c4897!2sTangail%20District!5e0!3m2!1sen!2sbd!4v1710000000000" 
                class="w-full h-72 sm:h-80 border-0" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div class="mb-4">
            <h3 class="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i data-lucide="compass" class="w-4 h-4 text-amber-500"></i>
                <span>${isEn ? "District Boundaries (Four Directions)" : "চতুর্সীমা (চারদিকের সীমানা)"}</span>
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                    <span class="text-[10px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">⬆️ ${isEn ? "North" : "উত্তরে"}</span>
                    <strong class="text-slate-900 dark:text-white text-xs">${isEn ? "Jamalpur District" : "জামালপুর জেলা"}</strong>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                    <span class="text-[10px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">⬇️ ${isEn ? "South" : "দক্ষিণে"}</span>
                    <strong class="text-slate-900 dark:text-white text-xs">${isEn ? "Dhaka & Manikganj" : "ঢাকা ও মানিকগঞ্জ"}</strong>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                    <span class="text-[10px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">➡️ ${isEn ? "East" : "পূর্বে"}</span>
                    <strong class="text-slate-900 dark:text-white text-xs">${isEn ? "Mymensingh & Gazipur" : "ময়মনসিংহ ও গাজীপুর"}</strong>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
                    <span class="text-[10px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">⬅️ ${isEn ? "West" : "পশ্চিমে"}</span>
                    <strong class="text-slate-900 dark:text-white text-xs">${isEn ? "Jamuna River & Sirajganj" : "যমুনা নদী ও সিরাজগঞ্জ"}</strong>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs">
            <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50">
                <span class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1.5 mb-1">
                    <i data-lucide="waves" class="w-3.5 h-3.5 text-blue-500"></i> ${isEn ? "Major River Network" : "প্রধান নদীসমূহ"}
                </span>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                    ${isEn ? "Jamuna, Dhaleshwari, Louhajang, Bangshi, Jhinai, Fatikjani, and Elengjani rivers." : "যমুনা, ধলেশ্বরী, লৌহজং, বংশী, ঝিনাই, ফটিকজানি ও এলেংজানি নদী।"}
                </p>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/50">
                <span class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 mb-1">
                    <i data-lucide="trees" class="w-3.5 h-3.5 text-emerald-500"></i> ${isEn ? "Sal Forests & National Park" : "শালবন ও পাহাড়ি বনাঞ্চল"}
                </span>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                    ${isEn ? "Madhupur & Sakhipur Red Soil Tract, Madhupur National Park & Dokhla Forest (~275 sq km)." : "মধুপুর ও সখীপুরের লাল মাটির ঐতিহ্যবাহী গজারির বন ও মধুপুর জাতীয় উদ্যান (~২৭৫ বর্গ কিমি)।"}
                </p>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <a href="https://www.google.com/maps/place/Tangail+District/@24.3853173,89.7046467,10z/" target="_blank" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="external-link" class="w-4 h-4"></i> ${isEn ? "Open in Full Google Maps" : "গুগল ম্যাপে বড় করে দেখুন"}
            </a>
            <button onclick="sendPresetPrompt('${isEn ? "Tell me about the geography and boundaries of Tangail" : "টাঙ্গাইল জেলার ভৌগোলিক অবস্থান ও নদীসমূহ সম্পর্কে বলো"}'); closeDetailModal(); scrollToBot();" class="w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="bot" class="w-4 h-4"></i> ${isEn ? "Ask AI Bot" : "বটকে প্রশ্ন করুন"}
            </button>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// CARD 4: 4 GI PRODUCTS OVERVIEW MODAL
function openGIProductsOverviewModal() {
    const isEn = (currentLang === "en");
    const modalContent = document.getElementById("modal-content");
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="mb-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                <i data-lucide="award" class="w-3.5 h-3.5"></i>
                <span>${isEn ? "Recognized GI Heritage" : "স্বীকৃত ভৌগোলিক নির্দেশক পণ্য"}</span>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                ${isEn ? "Tangail\'s 4 Recognized GI Products" : "টাঙ্গাইল জেলার ৪টি স্বীকৃত জিআই (GI) পণ্য"}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${isEn 
                    ? "Highest among all districts in Bangladesh: 4 internationally certified Geographical Indication products" 
                    : "বাংলাদেশের যেকোনো জেলার মধ্যে সর্বোচ্চ ৪টি অফিশিয়াল জিআই সনদপ্রাপ্ত ঐতিহ্যের অহংকার"}
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-h-[60vh] overflow-y-auto pr-1">
            ${TANGAIL_DATA.giAndHeritages.map((item, i) => {
                const title = isEn ? (item.enTitle || item.title) : item.title;
                const tag = isEn ? (item.enTag || item.tag) : item.tag;
                const desc = isEn ? (item.enShortDesc || item.shortDesc) : item.shortDesc;
                const place = isEn ? (item.enBestPlaces ? item.enBestPlaces[0] : item.bestPlaces[0]) : item.bestPlaces[0];

                return `
                    <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/60 hover:shadow-md transition flex flex-col justify-between group">
                        <div>
                            <div class="relative h-32 rounded-xl overflow-hidden mb-3 bg-slate-200 dark:bg-slate-700">
                                <img src="${item.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                                <span class="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-md border backdrop-blur-md ${item.badgeColor}">
                                    ${tag}
                                </span>
                            </div>
                            <div class="flex items-start justify-between gap-1 mb-1">
                                <h3 class="font-bold text-base text-slate-900 dark:text-white">${title}</h3>
                                <span class="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/70 px-2 py-0.5 rounded-full shrink-0">
                                    GI #${i === 0 ? "54" : i === 1 ? "42" : i === 2 ? "41" : "64"}
                                </span>
                            </div>
                            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-2">
                                ${desc}
                            </p>
                        </div>
                        <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                            <span class="text-[10px] text-slate-400 line-clamp-1 max-w-[50%]">${place}</span>
                            <button onclick="openHeritageModal('${item.id}')" class="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs flex items-center gap-1 transition shadow-sm">
                                <span>${isEn ? "View Story & Info" : "ইতিহাস ও বিস্তারিত"}</span>
                                <i data-lucide="arrow-right" class="w-3 h-3"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button onclick="sendPresetPrompt('${isEn ? "Tell me about Tangail\'s 4 GI certified products" : "টাঙ্গাইল জেলার ৪টি জিআই পণ্য সম্পর্কে বিস্তারিত বলো"}'); closeDetailModal(); scrollToBot();" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="bot" class="w-4 h-4"></i> ${isEn ? "Ask AI Bot About GI Products" : "বটকে জিআই পণ্য নিয়ে প্রশ্ন করুন"}
            </button>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// UPAZILA DETAIL MODAL
function openUpazilaModal(id) {
    const u = TANGAIL_DATA.upazilas.find(item => item.id === id);
    if (!u) return;
    const isEn = (currentLang === "en");

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="mb-4">
            <span class="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                ${isEn ? "Upazila Profile" : "উপজেলা প্রোফাইল"}
            </span>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-2">${isEn ? u.enName : u.name} (${isEn ? u.name : u.enName})</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${isEn ? "Tangail District, Dhaka Division" : "টাঙ্গাইল জেলা, ঢাকা বিভাগ"}</p>
        </div>

        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            ${isEn ? (u.enDesc || u.desc) : u.desc}
        </p>

        <div class="grid grid-cols-2 gap-3 mb-6 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="text-slate-400 block text-[11px]">${isEn ? "Total Area:" : "মোট আয়তন:"}</span>
                <span class="font-semibold text-slate-800 dark:text-white text-sm">${isEn ? (u.enArea || u.area) : u.area}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="text-slate-400 block text-[11px]">${isEn ? "Unions & Municipalities:" : "ইউনিয়ন ও পৌরসভা:"}</span>
                <span class="font-semibold text-slate-800 dark:text-white text-sm">${isEn ? (u.enUnions || u.unions) : u.unions}</span>
            </div>
        </div>

        <div class="space-y-3 mb-6 text-xs">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900">
                <span class="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">🌟 ${isEn ? "Key Highlights & Places to Visit:" : "প্রধান আকর্ষণ ও দর্শনীয় স্থান:"}</span>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${isEn ? (u.enHighlights || u.highlights) : u.highlights}</p>
            </div>

            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span class="font-bold text-slate-900 dark:text-white block mb-1">🏢 ${isEn ? "Administrative & Public Contacts:" : "প্রশাসনিক যোগাযোগ:"}</span>
                <p class="text-slate-600 dark:text-slate-300 mb-1">${isEn ? (u.enOfficers || u.officers) : u.officers}</p>
                <p class="text-slate-600 dark:text-slate-300 mb-1">${isEn ? "Police Station: " + (u.enPolice || u.police) : "থানা: " + u.police}</p>
                <p class="text-slate-600 dark:text-slate-300">${isEn ? "Health Complex: " + (u.enHospital || u.hospital) : "স্বাস্থ্য কমপ্লেক্স: " + u.hospital}</p>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.enName + ' Upazila Tangail')}" target="_blank" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="navigation" class="w-4 h-4"></i> ${isEn ? "View Location on Google Maps" : "গুগল ম্যাপে অবস্থান দেখুন"}
            </a>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// TOURIST SPOT DETAIL MODAL
function openTouristModal(id) {
    const s = TANGAIL_DATA.touristSpots.find(item => item.id === id);
    if (!s) return;
    const isEn = (currentLang === "en");

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
            <img src="${s.image}" alt="${isEn ? (s.enName || s.name) : s.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded">${isEn ? (s.enCategory || s.category) : s.category}</span>
                <h2 class="text-2xl font-bold mt-1">${isEn ? (s.enName || s.name) : s.name}</h2>
                <p class="text-xs text-slate-200 flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${isEn ? (s.enLocation || s.location) : s.location}</p>
            </div>
        </div>

        <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isEn ? "History & Overview:" : "ইতিহাস ও বিবরণ:"}</h4>
                <p class="leading-relaxed">${isEn ? (s.enDetails || s.details) : s.details}</p>
            </div>

            <div class="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                    <span class="text-slate-400 block text-[11px]">${isEn ? "Entry / Ticket Fee:" : "টিকিট / প্রবেশ মূল্য:"}</span>
                    <span class="font-bold text-slate-800 dark:text-white">${isEn ? (s.enEntryFee || s.entryFee) : s.entryFee}</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[11px]">${isEn ? "Visiting Hours:" : "পরিদর্শনের সময়:"}</span>
                    <span class="font-bold text-slate-800 dark:text-white">${isEn ? (s.enTime || s.time) : s.time}</span>
                </div>
            </div>

            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-900">
                <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-xs mb-1 flex items-center gap-1">
                    <i data-lucide="compass" class="w-3.5 h-3.5"></i> ${isEn ? "How to Go:" : "কীভাবে যাবেন:"}
                </h4>
                <p class="leading-relaxed text-slate-700 dark:text-slate-300">${isEn ? (s.enHowToGo || s.howToGo) : s.howToGo}</p>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}" target="_blank" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="navigation" class="w-4 h-4"></i> ${isEn ? "View Route on Google Maps" : "গুগল ম্যাপে রুট দেখুন"}
            </a>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// HERITAGE DETAIL MODAL
function openHeritageModal(id) {
    const item = TANGAIL_DATA.giAndHeritages.find(h => h.id === id);
    if (!item) return;
    const isEn = (currentLang === "en");

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
            <img src="${item.image}" alt="${isEn ? (item.enTitle || item.title) : item.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">${isEn ? (item.enTag || item.tag) : item.tag}</span>
                <h2 class="text-2xl font-bold mt-1">${isEn ? (item.enTitle || item.title) : item.title}</h2>
            </div>
        </div>

        <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isEn ? "Heritage History & Significance:" : "ঐতিহ্যের ইতিহাস ও তাৎপর্য:"}</h4>
                <p class="leading-relaxed text-sm">${isEn ? (item.enFullDesc || item.fullDesc) : item.fullDesc}</p>
            </div>

            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900">
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-xs mb-1.5">${isEn ? "Main Locations & Markets:" : "প্রধান প্রাপ্তিস্থান ও হাট:"}</h4>
                <div class="flex flex-wrap gap-1.5">
                    ${(isEn ? (item.enBestPlaces || item.bestPlaces) : item.bestPlaces).map(p => `<span class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800 font-medium">${p}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <button onclick="sendPresetPrompt('${isEn ? "Tell me more about " + (item.enTitle || item.title) : item.title + " সম্পর্কে বিস্তারিত জানতে চাই"}'); closeDetailModal(); scrollToBot();" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="bot" class="w-4 h-4"></i> ${isEn ? "Ask AI Bot About This" : "বটকে এই বিষয়ে প্রশ্ন করুন"}
            </button>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// SWEET SHOP DETAIL MODAL
function openSweetModal(id) {
    const shop = TANGAIL_DATA.famousSweets.find(item => item.id === id);
    if (!shop) return;
    const isEn = (currentLang === "en");

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <div class="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
            <img src="${shop.image}" alt="${isEn ? (shop.enName || shop.name) : shop.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">${isEn ? (shop.enShopType || shop.shopType) : shop.shopType}</span>
                <h2 class="text-2xl font-bold mt-1">${isEn ? (shop.enName || shop.name) : shop.name}</h2>
                <p class="text-xs text-slate-200 flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${isEn ? (shop.enLocation || shop.location) : shop.location}</p>
            </div>
        </div>

        <div class="space-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isEn ? "History & Tradition:" : "ইতিহাস ও ঐতিহ্য:"}</h4>
                <p class="leading-relaxed text-sm">${isEn ? (shop.enHistory || shop.history) : shop.history}</p>
            </div>

            <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isEn ? "Taste & Speciality:" : "স্বাদ ও বিশেষত্ব:"}</h4>
                <p class="leading-relaxed">${isEn ? (shop.enSpeciality || shop.speciality) : shop.speciality}</p>
            </div>

            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900">
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-xs mb-1.5">${isEn ? "Famous Special Items:" : "বিখ্যাত স্পেশাল আইটেম:"}</h4>
                <div class="flex flex-wrap gap-1.5">
                    ${(isEn ? (shop.enFamousItems || shop.famousItems) : shop.famousItems).map(item => `
                        <span class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800 font-medium">
                            ${item}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                    <span class="text-slate-400 block text-[11px]">${isEn ? "Price Range:" : "মূল্য পরিসর:"}</span>
                    <span class="font-bold text-slate-800 dark:text-white">${isEn ? (shop.enPriceRange || shop.priceRange) : shop.priceRange}</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[11px]">${isEn ? "Main Location:" : "প্রধান প্রাপ্তিস্থান:"}</span>
                    <span class="font-bold text-slate-800 dark:text-white">${isEn ? (shop.enBestPlaces || shop.bestPlaces) : shop.bestPlaces}</span>
                </div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapQuery)}" target="_blank" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="navigation" class="w-4 h-4"></i> ${isEn ? "View Route on Google Maps" : "গুগল ম্যাপে রুট দেখুন"}
            </a>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal").classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

// ==========================================
// DISTRICT ADMINISTRATION (DC OFFICE) EXCEL DIRECTORY
// ==========================================
let currentAdminCategory = 'all';

function renderAdministration(filterCategory = 'all', searchQuery = '') {
    const tableBody = document.getElementById("admin-table-body");
    const countEl = document.getElementById("admin-row-count");
    if (!tableBody || !TANGAIL_DATA.districtAdministration) return;

    const isEn = (currentLang === "en");
    currentAdminCategory = filterCategory;

    let branches = TANGAIL_DATA.districtAdministration.branches;

    // Filter by sheet category
    if (filterCategory !== 'all') {
        branches = branches.filter(b => b.category.includes(filterCategory) || b.enCategory.toLowerCase().includes(filterCategory.toLowerCase()));
    }

    // Filter by search query
    if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase().trim();
        branches = branches.filter(b => 
            b.branch.toLowerCase().includes(q) ||
            b.enBranch.toLowerCase().includes(q) ||
            b.officer.toLowerCase().includes(q) ||
            b.enOfficer.toLowerCase().includes(q) ||
            b.room.toLowerCase().includes(q) ||
            b.enRoom.toLowerCase().includes(q) ||
            b.staff.toLowerCase().includes(q) ||
            b.enStaff.toLowerCase().includes(q) ||
            b.services.toLowerCase().includes(q) ||
            b.enServices.toLowerCase().includes(q) ||
            b.designation.toLowerCase().includes(q) ||
            b.enDesignation.toLowerCase().includes(q) ||
            b.phone.includes(q) ||
            (b.mobile && b.mobile.includes(q))
        );
    }

    if (countEl) {
        countEl.innerText = isEn ? `${branches.length} Branches Displayed` : `${branches.length}টি শাখা প্রদর্শিত হচ্ছে`;
    }

    if (branches.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="py-8 text-center text-slate-400 font-medium">
                    ${isEn ? "No branch or officer matching your search." : "আপনার অনুসন্ধানের সাথে মিল রেখে কোনো শাখা বা কর্মকর্তা পাওয়া যায়নি।"}
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = branches.map((b, index) => {
        const room = isEn ? b.enRoom : b.room;
        const branchName = isEn ? b.enBranch : b.branch;
        const category = isEn ? b.enCategory : b.category;
        const officer = isEn ? b.enOfficer : b.officer;
        const designation = isEn ? b.enDesignation : b.designation;
        const staff = isEn ? b.enStaff : b.staff;
        const services = isEn ? b.enServices : b.services;
        const btnView = isEn ? "Full Profile" : "শাখার বিবরণ";

        return `
            <tr onclick="openAdminModal('${b.id}')" class="hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 transition cursor-pointer group border-b border-slate-100 dark:border-slate-800/60">
                <td class="py-3.5 px-3.5 text-center font-mono text-xs text-slate-400 border-r border-slate-100 dark:border-slate-800">${index + 1}</td>
                
                <td class="py-3.5 px-3.5 font-mono text-xs border-r border-slate-100 dark:border-slate-800 whitespace-nowrap">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800 text-[11px] shadow-sm">
                        <i data-lucide="door-open" class="w-3 h-3 text-emerald-600 shrink-0"></i>
                        <span>${room}</span>
                    </span>
                </td>

                <td class="py-3.5 px-3.5 border-r border-slate-100 dark:border-slate-800 max-w-xs">
                    <strong class="text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition font-semibold text-xs sm:text-sm block">
                        ${branchName}
                    </strong>
                    <span class="text-[10px] text-slate-400 block mt-0.5">${category}</span>
                </td>

                <td class="py-3.5 px-3.5 border-r border-slate-100 dark:border-slate-800 max-w-xs">
                    <span class="font-bold text-xs text-slate-800 dark:text-slate-200 block">${officer}</span>
                    <span class="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-0.5">${designation}</span>
                </td>

                <td class="py-3.5 px-3.5 border-r border-slate-100 dark:border-slate-800 whitespace-nowrap">
                    <div class="flex flex-col gap-1 text-xs">
                        <a href="tel:${b.phone}" onclick="event.stopPropagation()" class="font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 flex items-center gap-1 transition">
                            <i data-lucide="phone" class="w-3 h-3 text-emerald-600"></i> ${b.phone}
                        </a>
                        ${b.mobile ? `
                            <a href="tel:${b.mobile}" onclick="event.stopPropagation()" class="font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-600 flex items-center gap-1 transition text-[11px]">
                                <i data-lucide="smartphone" class="w-3 h-3 text-teal-500"></i> ${b.mobile}
                            </a>
                        ` : ''}
                    </div>
                </td>

                <td class="py-3.5 px-3.5 border-r border-slate-100 dark:border-slate-800 max-w-sm">
                    <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mb-1">
                        <strong class="text-[10px] text-slate-400 uppercase tracking-wider">${isEn ? "Staff:" : "কর্মচারী:"}</strong> ${staff}
                    </p>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        <strong class="text-[10px] text-slate-400 uppercase tracking-wider">${isEn ? "Services:" : "সেবা:"}</strong> ${services}
                    </p>
                </td>

                <td class="py-3.5 px-3.5 text-center">
                    <button onclick="event.stopPropagation(); openAdminModal('${b.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition shadow-sm flex items-center justify-center gap-1 mx-auto whitespace-nowrap">
                        <span>${btnView}</span>
                        <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    lucide.createIcons();
}

function filterAdminCategory(category) {
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.classList.remove("bg-emerald-600", "text-white");
        btn.classList.add("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    });
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
        window.event.currentTarget.classList.add("bg-emerald-600", "text-white");
    }
    const searchVal = document.getElementById("admin-search-input")?.value || '';
    renderAdministration(category, searchVal);
}

document.getElementById("admin-search-input")?.addEventListener("input", (e) => {
    renderAdministration(currentAdminCategory, e.target.value);
});

function exportOrPrintAdminDirectory() {
    window.print();
}

function openAdminModal(branchId) {
    const branches = TANGAIL_DATA.districtAdministration?.branches;
    if (!branches) return;
    const b = branches.find(item => item.id === branchId);
    if (!b) return;

    const isEn = (currentLang === "en");
    const modalContent = document.getElementById("modal-content");
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="mb-5">
            <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-emerald-300 dark:border-emerald-800 font-mono">
                    ${isEn ? b.enRoom : b.room}
                </span>
                <span class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium">
                    ${isEn ? b.enCategory : b.category}
                </span>
            </div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                ${isEn ? b.enBranch : b.branch}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ${isEn ? "District Administration Tangail • Office of the Deputy Commissioner" : "জেলা প্রশাসকের কার্যালয়, টাঙ্গাইল • জেলা প্রশাসন বাতায়ন"}
            </p>
        </div>

        <!-- Designated Officer Card -->
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 mb-4">
            <div class="flex items-start justify-between gap-2 mb-2">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block mb-0.5">
                        ${isEn ? "Designated Official in Charge" : "শাখার দায়িত্বপ্রাপ্ত কর্মকর্তা"}
                    </span>
                    <h3 class="font-bold text-base text-slate-900 dark:text-white">${isEn ? b.enOfficer : b.officer}</h3>
                    <p class="text-xs text-emerald-800 dark:text-emerald-300 font-medium">${isEn ? b.enDesignation : b.designation}</p>
                </div>
                <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <i data-lucide="user-check" class="w-5 h-5"></i>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-emerald-200/60 dark:border-emerald-800/60 text-xs">
                <div class="flex items-center gap-2">
                    <i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-600"></i>
                    <span class="text-slate-500 dark:text-slate-400">${isEn ? "Phone:" : "ফোন:"}</span>
                    <a href="tel:${b.phone}" class="font-mono font-bold text-slate-800 dark:text-white hover:text-emerald-600">${b.phone}</a>
                </div>
                ${b.mobile ? `
                    <div class="flex items-center gap-2">
                        <i data-lucide="smartphone" class="w-3.5 h-3.5 text-teal-600"></i>
                        <span class="text-slate-500 dark:text-slate-400">${isEn ? "Mobile:" : "মোবাইল:"}</span>
                        <a href="tel:${b.mobile}" class="font-mono font-bold text-slate-800 dark:text-white hover:text-teal-600">${b.mobile}</a>
                    </div>
                ` : ''}
                <div class="flex items-center gap-2 sm:col-span-2">
                    <i data-lucide="mail" class="w-3.5 h-3.5 text-blue-600"></i>
                    <span class="text-slate-500 dark:text-slate-400">${isEn ? "Official Email:" : "ইমেইল:"}</span>
                    <a href="mailto:${b.email}" class="font-mono text-emerald-600 hover:underline">${b.email}</a>
                </div>
            </div>
        </div>

        <!-- Staff and Employees -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 mb-4 text-xs">
            <h4 class="font-bold text-slate-900 dark:text-white text-xs mb-1.5 flex items-center gap-1.5">
                <i data-lucide="users" class="w-4 h-4 text-teal-500"></i>
                <span>${isEn ? "Branch Employees & Staff Positions:" : "শাখার কর্মচারীবৃন্দ ও পদবিসমূহ:"}</span>
            </h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                ${isEn ? b.enStaff : b.staff}
            </p>
        </div>

        <!-- Services -->
        <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 mb-6 text-xs">
            <h4 class="font-bold text-amber-900 dark:text-amber-200 text-xs mb-1.5 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-600"></i>
                <span>${isEn ? "Citizen Services & Responsibilities:" : "প্রদত্ত নাগরিক সেবাসমূহ ও কাজের পরিধি:"}</span>
            </h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                ${isEn ? b.enServices : b.services}
            </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-2.5">
            <a href="tel:${b.mobile || b.phone}" class="w-full sm:flex-1 py-3 sm:py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="phone-call" class="w-4 h-4"></i> ${isEn ? "Call Officer Directly" : "কর্মকর্তাকে কল করুন"}
            </a>
            <a href="mailto:${b.email}" class="w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl text-center shadow-md transition flex items-center justify-center gap-1.5 min-h-[44px]">
                <i data-lucide="mail" class="w-4 h-4"></i> ${isEn ? "Send Email" : "ইমেইল পাঠান"}
            </a>
            <button onclick="closeDetailModal()" class="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl transition min-h-[44px]">
                ${isEn ? "Close" : "বন্ধ করুন"}
            </button>
        </div>
    `;

    document.getElementById("detail-modal")?.classList.remove("hidden");
    document.getElementById("chat-widget-btn")?.classList.add("hidden");
    lucide.createIcons();
}

function closeDetailModal() {
    document.getElementById("detail-modal").classList.add("hidden");
    document.getElementById("chat-widget-btn")?.classList.remove("hidden");
}

// Modal key listeners
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
// 9. UTILITIES & HELPERS
// ==========================================
function copyToClipboard(text) {
    const isEn = (currentLang === "en");
    navigator.clipboard.writeText(text).then(() => {
        showToast(isEn ? "Copied: " + text : "নম্বরটি কপি করা হয়েছে: " + text);
    }).catch(() => {
        showToast(isEn ? "Copied!" : "কপি করা হয়েছে!");
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
    return String(str).replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
