// TangailBot Knowledge Base & Comprehensive Data Store (100% Bilingual BN/EN)

const TANGAIL_DATA = {
    overview: {
        title: "টাঙ্গাইল জেলা",
        enTitle: "Tangail District",
        division: "ঢাকা বিভাগ",
        enDivision: "Dhaka Division",
        established: "১৮৬৯ সালে মহকুমা, ১৯৬৯ সালে জেলা",
        enEstablished: "Subdivision in 1869, District in 1969",
        area: "৩,৪১৪.৩৫ বর্গ কিমি",
        enArea: "3,414.35 sq km",
        population: "৪০,৩৭,০১৬ জন (জনশুমারি ২০২২)",
        enPopulation: "4,037,016 People (Census 2022)",
        literacyRate: "৬৮.৯%",
        enLiteracyRate: "68.90%",
        upazilaCount: 12,
        thanaCount: 14,
        municipalityCount: 11,
        unionCount: 118,
        rivers: ["যমুনা", "ধলেশ্বরী", "লৌহজং", "বংশী", "ঝিনাই", "এলেংজানি", "খিল্লাই"],
        enRivers: ["Jamuna", "Dhaleshwari", "Louhajang", "Bangshi", "Jhinai", "Elengjani", "Khillai"],
        tagline: "নদী, চর, খাল, বিল, গজারির বন — টাঙ্গাইলের শাড়ি, তার গরবের ধন।",
        enTagline: "Rivers, chars, canals, wetlands, and sal forests — Tangail's saree, its proudest treasure.",
        description: "বাংলাদেশের ঢাকা বিভাগের একটি ঐতিহ্যবাহী ও ঐতিহাসিক জনপদ টাঙ্গাইল। টাঙ্গাইল শাড়ি, পোড়াবাড়ির চমচম, মধুপুরের আনারস এবং জামুর্কির সন্দেশ — বাংলাদেশের সর্বোচ্চ ৪টি স্বীকৃত ভৌগোলিক নির্দেশক (GI) পণ্যের অনন্য অহংকার এই জেলা।",
        enDescription: "A historic and culturally vibrant district in Dhaka Division, Bangladesh. Celebrated for its world-renowned handloom sarees, Porabari Chomchom, Madhupur pineapples, and Jamurki Sondesh — holding the highest count of 4 recognized Geographical Indication (GI) products in Bangladesh."
    },

    // বাংলাদেশ পরিসংখ্যান ব্যুরো (BBS) জনশুমারি ও গৃহগণনা ২০২২ এর পূর্ণাঙ্গ তথ্য
    demographics: {
        title: "টাঙ্গাইল জেলা জনশুমারি ও গৃহগণনা ২০২২",
        enTitle: "Tangail District Population & Housing Census 2022",
        source: "বাংলাদেশ পরিসংখ্যান ব্যুরো (BBS)",
        enSource: "Bangladesh Bureau of Statistics (BBS)",
        censusYear: "২০২২",
        enCensusYear: "2022",
        totalPopulation: "৪০,৩৭,০১৬",
        enTotalPopulation: "4,037,016",
        male: {
            count: "১৯,৫৩,৮০০ জন",
            enCount: "1,953,800",
            percentage: "৪৮.৪০%",
            enPercentage: "48.40%",
            percentNum: 48.40
        },
        female: {
            count: "২০,৮৩,০১৬ জন",
            enCount: "2,083,016",
            percentage: "৫১.৫৯%",
            enPercentage: "51.59%",
            percentNum: 51.59
        },
        transgender: {
            count: "২০০ জন",
            enCount: "200",
            percentage: "০.০১%",
            enPercentage: "0.01%",
            percentNum: 0.01
        },
        sexRatio: "৯৩.৮ (প্রতি ১০০ নারীতে পুরুষ ৯৩.৮ জন)",
        enSexRatio: "93.8 (93.8 males per 100 females)",
        literacyRate: {
            total: "৬৮.৯০%",
            enTotal: "68.90%",
            totalNum: 68.90,
            male: "৭১.২০%",
            enMale: "71.20%",
            maleNum: 71.20,
            female: "৬৬.৮০%",
            enFemale: "66.80%",
            femaleNum: 66.80
        },
        religion: [
            { name: "মুসলিম", enName: "Muslim", percentage: "৮৮.২২%", enPercentage: "88.22%", percentNum: 88.22, count: "৩৫,৬১,৫৮০ জন", enCount: "3,561,580", color: "bg-emerald-500", barColor: "from-emerald-500 to-teal-500", textCol: "text-emerald-700 dark:text-emerald-400" },
            { name: "হিন্দু", enName: "Hindu", percentage: "১০.৭৫%", enPercentage: "10.75%", percentNum: 10.75, count: "৪,৩৪,১৫০ জন", enCount: "434,150", color: "bg-amber-500", barColor: "from-amber-500 to-orange-500", textCol: "text-amber-700 dark:text-amber-400" },
            { name: "খ্রিস্টান (গারো সহ)", enName: "Christian (Garo)", percentage: "০.৯৫%", enPercentage: "0.95%", percentNum: 0.95, count: "৩৮,১২০ জন", enCount: "38,120", color: "bg-blue-500", barColor: "from-blue-500 to-indigo-500", textCol: "text-blue-700 dark:text-blue-400" },
            { name: "বৌদ্ধ ও অন্যান্য", enName: "Buddhist & Other", percentage: "০.০৮%", enPercentage: "0.08%", percentNum: 0.08, count: "৩,১৬৬ জন", enCount: "3,166", color: "bg-purple-500", barColor: "from-purple-500 to-pink-500", textCol: "text-purple-700 dark:text-purple-400" }
        ],
        householdCount: "৯,৮২,৫১০টি পরিবার",
        enHouseholdCount: "982,510 Households",
        density: "১,১৮২ জন / বর্গ কিমি",
        enDensity: "1,182 people / sq km",
        areaType: {
            rural: "৭৬.৫০% (পল্লি / গ্রাম)",
            enRural: "76.50% (Rural Villages)",
            urban: "২৩.৫০% (শহর ও পৌর এলাকা)",
            enUrban: "23.50% (Urban Municipalities)"
        },
        annualGrowthRate: "০.৮৫%",
        enAnnualGrowthRate: "0.85%"
    },

    giAndHeritages: [
        {
            id: "tangail-sari",
            title: "টাঙ্গাইল তাঁতের শাড়ি",
            enTitle: "Tangail Handloom Saree",
            tag: "জিআই পণ্য (GI Certified)",
            enTag: "GI Certified Heritage",
            icon: "sparkles",
            badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300",
            shortDesc: "বিশ্ববিখ্যাত ভৌগোলিক নির্দেশক (GI) সনদপ্রাপ্ত টাঙ্গাইলের প্রধান ঐতিহ্যবাহী শাড়ি।",
            enShortDesc: "World-renowned Geographical Indication (GI) certified traditional handloom saree of Tangail.",
            fullDesc: "টাঙ্গাইলের পাথরাইল, বাজিতপুর, করটিয়া ও বল্লার তাঁতিদের নিপুণ হাতের বুননে তৈরি হয় জামদানি, বালুচরি, হাফ সিল্ক, সুতি ও ডেনিম শাড়ি। দেশ-বিদেশের ফ্যাশনপ্রেমীদের কাছে এই শাড়ি অপরিসীম সমাদৃত। করটিয়া ও বাজিতপুরের ঐতিহ্যবাহী হাট থেকে সরাসরি পাইকারি ও খুচরা কেনা যায়। এটি বাংলাদেশের অত্যন্ত মর্যাদাপূর্ণ আন্তর্জাতিক জিআই পণ্য।",
            enFullDesc: "Masterfully handwoven by the historic weavers of Pathrail, Bajitpur, Korotia, and Balla, Tangail sarees come in Jamdani, Baluchari, Half Silk, Cotton, and Linen varieties. Cherished by fashion lovers worldwide, it is one of Bangladesh's most prestigious international GI items.",
            bestPlaces: ["পাথরাইল তাঁত পল্লী", "করটিয়া শাড়ির হাট", "বাজিতপুর হাট", "বল্লা বাজার"],
            enBestPlaces: ["Pathrail Weaver Village", "Korotia Saree Haat", "Bajitpur Haat", "Balla Market"],
            image: "images/tangail_saree.jpg"
        },
        {
            id: "porabari-chomchom",
            title: "পোড়াবাড়ির আসল চমচম",
            enTitle: "Porabari Original Chomchom",
            tag: "জিআই পণ্য (GI Certified)",
            enTag: "GI Certified Delicacy",
            icon: "utensils",
            badgeColor: "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300",
            shortDesc: "মিষ্টির রাজা হিসেবে খ্যাত প্রায় দুইশত বছরের ঐতিহ্যবাহী ভৌগোলিক নির্দেশক (GI) সনদপ্রাপ্ত পোড়াবাড়ির চমচম।",
            enShortDesc: "The undisputed King of Sweets — nearly two centuries old Geographical Indication (GI) certified delicacy of Porabari.",
            fullDesc: "অষ্টাদশ শতকে রাজা রামপালের আমলে দশরথ গৌড় পোড়াবাড়িতে প্রথম এই চমচম তৈরি করেন। ধলেশ্বরী নদীর মিষ্টি পানি ও খাঁটি গাভীর দুধের তৈরি ছানার নিখুঁত জ্বাল এবং পোড়া মাওয়ার প্রলেপে তৈরি হয় আসল পোড়াবাড়ির চমচম। এটি মুখে দিলে এক অবিস্মরণীয় স্বাদ রেখে যায় এবং বাংলাদেশ সরকার কর্তৃক অফিসিয়ালি জিআই পণ্য হিসেবে সনদপ্রাপ্ত।",
            enFullDesc: "Originated in the early 19th century by Dasharath Gour in Porabari using sweet water from the Dhaleshwari river and pure cow milk chhana. Coated in caramelized mawa, its golden brownish crust and juicy soft core melt effortlessly in the mouth.",
            bestPlaces: ["টাঙ্গাইল শহরের পাঁচআনি বাজার", "পোড়াবাড়ি বাজার", "নিরালা মোড়"],
            enBestPlaces: ["Panchani Bazar, Tangail", "Porabari Bazar", "Nirala Mor"],
            image: "images/porabari_chomchom.jpg"
        },
        {
            id: "modhupur-pineapple",
            title: "মধুপুরের আনারস",
            enTitle: "Madhupur Pineapple",
            tag: "জিআই পণ্য (GI Certified)",
            enTag: "GI Certified Agro Product",
            icon: "leaf",
            badgeColor: "bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-950 dark:text-teal-300",
            shortDesc: "রসালো ও সুমিষ্ট স্বাদের ভৌগোলিক নির্দেশক (GI) সনদপ্রাপ্ত মধুপুরের জলডুঙ্গি ও ক্যালেন্ডার আনারস।",
            enShortDesc: "Juicy, aromatic, and extraordinarily sweet Geographical Indication (GI) certified Joldugi & Giant Kew pineapples of Madhupur.",
            fullDesc: "মধুপুর গড়ের লাল মাটিতে চাষ হয় বিশ্বসেরা রসালো 'জলডুঙ্গি' ও 'জায়ান্ট কিউ' (ক্যালেন্ডার) জাতের আনারস। মধুপুরের জলডুঙ্গি অত্যন্ত মিষ্টি ও অনন্য সুঘ্রাণযুক্ত। মধুপুরের জলছত্র ও গারো বাজার দেশের বৃহত্তম আনারসের বাজার। এটি টাঙ্গাইল জেলার অন্যতম স্বীকৃত জিআই পণ্য।",
            enFullDesc: "Grown in the mineral-rich red soil of Madhupur Garh, Joldugi and Giant Kew varieties are celebrated for their natural fragrance and sweetness. Jolchotro and Garo Bazar in Madhupur are the largest wholesale pineapple trading hubs in Bangladesh.",
            bestPlaces: ["মধুপুর জলছত্র বাজার", "গারো বাজার", "পীরগাছা বাগান"],
            enBestPlaces: ["Madhupur Jolchotro Market", "Garo Bazar", "Pirgacha Orchards"],
            image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "jamurkir-sondesh",
            title: "জামুর্কির সন্দেশ",
            enTitle: "Jamurki Sondesh",
            tag: "জিআই পণ্য (GI Certified)",
            enTag: "GI Certified Delicacy",
            icon: "award",
            badgeColor: "bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-300",
            shortDesc: "টাঙ্গাইলের দেলদুয়ারের জামুর্কির শতবর্ষী ঐতিহ্যবাহী ও স্বীকৃত ভৌগোলিক নির্দেশক (GI) সনদপ্রাপ্ত মিষ্টি।",
            enShortDesc: "Century-old heritage sweet of Jamurki in Delduar upazila, officially recognized with prestigious GI certification.",
            fullDesc: "টাঙ্গাইল জেলার দেলদুয়ার উপজেলার জামুর্কি বাজারের শতবর্ষী ঐতিহ্যবাহী মিষ্টি 'জামুর্কির সন্দেশ'। ব্রিটিশ আমলে জামুর্কির মোদক সম্প্রদায়ের দক্ষ কারিগরদের হাত ধরে এই সন্দেশের উৎপত্তি। খাঁটি গাভীর দুধের তৈরি ছানা ও চিনির নিখুঁত পাকে কোনো কৃত্রিম ফ্লেভার ছাড়াই এটি তৈরি করা হয়। জামুর্কির সন্দেশের অতুলনীয় সুঘ্রাণ, দানাদার গঠন ও মুখে দিলেই মিলিয়ে যাওয়া স্বাদ একে বাংলাদেশের ৪টি অনন্য জিআই পণ্যের একটির মর্যাদা এনে দিয়েছে।",
            enFullDesc: "Originated during the British colonial period by the skilled Modak sweetmakers of Jamurki Bazar in Delduar. Crafted from fresh cow milk chhana and cane sugar without any artificial flavoring, its melt-in-mouth texture makes it one of Tangail's four official GI icons.",
            bestPlaces: ["দেলদুয়ারের জামুর্কি বাজার", "জামুর্কি প্রাচীন মিষ্টি পট্টি", "টাঙ্গাইল শহর"],
            enBestPlaces: ["Jamurki Bazar, Delduar", "Ancient Sweet Hub", "Tangail Town"],
            image: "images/jamurki_sondesh.jpg"
        }
    ],

    upazilas: [
        {
            id: "tangail-sadar",
            name: "টাঙ্গাইল সদর",
            enName: "Tangail Sadar",
            area: "৩৩৪.২৬ বর্গ কিমি",
            enArea: "334.26 sq km",
            unions: "১২টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "12 Unions, 1 Municipality",
            highlights: "জেলা সদর, করটিয়া জমিদার বাড়ি, সন্তোষে মওলানা ভাসানীর মাজার, এমবিএসটিইউ, পোড়াবাড়ি, লৌহজং নদী পার্ক।",
            enHighlights: "District Headquarters, Korotia Palace, Shrine of Mawlana Bhashani at Santosh, MBSTU Campus, Porabari.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০১৬",
            enOfficers: "UNO: 01730-331016",
            police: "টাঙ্গাইল সদর থানা: ০১৩২০-০৮৭৪১৭",
            enPolice: "Sadar Thana: 01320-087417",
            hospital: "টাঙ্গাইল ২৫০ শয্যা জেনারেল হাসপাতাল",
            enHospital: "Tangail 250-Bed General Hospital",
            desc: "টাঙ্গাইল জেলার প্রাণকেন্দ্র। প্রশাসনিক সদর দপ্তর, প্রধান বাণিজ্যিক কেন্দ্র এবং ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠানসমূহ এই উপজেলায় অবস্থিত।",
            enDesc: "The administrative and economic nerve center of Tangail district, hosting universities, premier colleges, and historic institutions."
        },
        {
            id: "mirzapur",
            name: "মির্জাপুর",
            enName: "Mirzapur",
            area: "৩৭৩.৮৯ বর্গ কিমি",
            enArea: "373.89 sq km",
            unions: "১৪টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "14 Unions, 1 Municipality",
            highlights: "মহেরা জমিদার বাড়ি, কুমুদিনী কমপ্লেক্স ও হাসপাতাল, মির্জাপুর ক্যাডেট কলেজ, ভারতেশ্বরী হোমস।",
            enHighlights: "Mohera Palace, Kumudini Hospital & Complex, Mirzapur Cadet College, Bharateswari Homes.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০১৭",
            enOfficers: "UNO: 01730-331017",
            police: "মির্জাপুর থানা: ০১৩২০-০৮৭৪৫৭",
            enPolice: "Mirzapur Thana: 01320-087457",
            hospital: "কুমুদিনী হাসপাতাল ও মির্জাপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Kumudini Hospital & Mirzapur Health Complex",
            desc: "দানবীর রণদা প্রসাদ সাহা (আর পি সাহা)-র স্মৃতিবিজড়িত পুণ্যভূমি। শিক্ষা ও স্বাস্থ্যসেবায় দেশের অন্যতম মর্যাদাপূর্ণ অঞ্চল।",
            enDesc: "Hallowed ground blessed by philanthropist Ranada Prasad Saha (R.P. Saha), renowned for premier educational and healthcare services."
        },
        {
            id: "modhupur",
            name: "মধুপুর",
            enName: "Madhupur",
            area: "৩৭০.৪৭ বর্গ কিমি",
            enArea: "370.47 sq km",
            unions: "১১টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "11 Unions, 1 Municipality",
            highlights: "মধুপুর জাতীয় উদ্যান (শালবন), দোখলা রেস্ট হাউস, আনারসের বাগান, রাবার বাগান, গারো ও কোচ আদিবাসী সংস্কৃতি।",
            enHighlights: "Madhupur National Park (Sal Forest), Dokhla VIP Rest House, Pineapple Orchards, Rubber Gardens, Garo & Koch Culture.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০১৮",
            enOfficers: "UNO: 01730-331018",
            police: "মধুপুর থানা: ০১৩২০-০৮৭৪৯৭",
            enPolice: "Madhupur Thana: 01320-087497",
            hospital: "মধুপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Madhupur Upazila Health Complex",
            desc: "শাল-গজারি বনাঞ্চল, পাহাড়ি লাল মাটি এবং রসালো আনারসের রাজধানী। গারো ও কোচ নৃগোষ্ঠীর বৈচিত্র্যময় সংস্কৃতির কেন্দ্র।",
            enDesc: "The capital of sweet pineapples and ancient Sal forests, enriched with indigenous Garo and Koch cultural traditions."
        },
        {
            id: "dhanbari",
            name: "ধনবাড়ী",
            enName: "Dhanbari",
            area: "১২৭.৯৫ বর্গ কিমি",
            enArea: "127.95 sq km",
            unions: "৭টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "7 Unions, 1 Municipality",
            highlights: "ধনবাড়ী ঐতিহাসিক নবাব প্যালেস (রয়্যাল রিসোর্ট), প্রাচীন নবাব মসজিদ ও ৭০০ বছরের ঝাড়বাতি।",
            enHighlights: "Historic Dhanbari Nawab Palace (Royal Resort), Ancient Nawab Mosque with 700-year-old chandelier.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০১৯",
            enOfficers: "UNO: 01730-331019",
            police: "ধনবাড়ী থানা: ০১৩২০-০৮৭৫৩৭",
            enPolice: "Dhanbari Thana: 01320-087537",
            hospital: "ধনবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Dhanbari Upazila Health Complex",
            desc: "ঢাকা বিশ্ববিদ্যালয়ের অন্যতম প্রতিষ্ঠাতা নওয়াব সৈয়দ নওয়াব আলী চৌধুরীর স্মৃতিধন্য ঐতিহাসিক নবাব মঞ্জিলের জন্য বিখ্যাত।",
            enDesc: "Famous for the historic palace of Nawab Syed Nawab Ali Chowdhury, co-founder of Dhaka University, and royal Mughal architecture."
        },
        {
            id: "gopalpur",
            name: "গোপালপুর",
            enName: "Gopalpur",
            area: "১৯৩.৩৭ বর্গ কিমি",
            enArea: "193.37 sq km",
            unions: "৭টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "7 Unions, 1 Municipality",
            highlights: "বিশ্বখ্যাত ২০১ গম্বুজ মসজিদ (দক্ষিণ পাথালিয়া), খাকড়ানা প্রাচীন মসজিদ, হেমনগর জমিদার বাড়ি।",
            enHighlights: "World-record 201 Dome Mosque (South Pathalia), Khakrana Ancient Mosque, Hemnagar Palace.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২০",
            enOfficers: "UNO: 01730-331020",
            police: "গোপালপুর থানা: ০১৩২০-০৮৭৫৭৭",
            enPolice: "Gopalpur Thana: 01320-087577",
            hospital: "গোপালপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Gopalpur Upazila Health Complex",
            desc: "বিশ্বের সর্বাধিক গম্বুজবিশিষ্ট দৃষ্টিনন্দন ২০১ গম্বুজ মসজিদের কারণে দেশ-বিদেশের পর্যটকদের অন্যতম আকর্ষণ কেন্দ্র।",
            enDesc: "A world-renowned spiritual destination famous for the architectural masterpiece of the 201 Dome Mosque along Jhinai River."
        },
        {
            id: "bhuapur",
            name: "ভূঞাপুর",
            enName: "Bhuapur",
            area: "২২৫.০২ বর্গ কিমি",
            enArea: "225.02 sq km",
            unions: "৬টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "6 Unions, 1 Municipality",
            highlights: "বঙ্গবন্ধু যমুনা সেতু পূর্ব সংযোগ, যমুনা নদী তীর, যমুনা রিসোর্ট, সিরাজকান্দী ঘাট।",
            enHighlights: "Bangabandhu Jamuna Bridge East Terminal, Jamuna Riverbank, Jamuna Resort, Sirajkandi Ghat.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২১",
            enOfficers: "UNO: 01730-331021",
            police: "ভূঞাপুর থানা: ০১৩২০-০৮৭৬১৭",
            enPolice: "Bhuapur Thana: 01320-087617",
            hospital: "ভূঞাপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Bhuapur Upazila Health Complex",
            desc: "যমুনা নদীর পূর্ব তীরে অবস্থিত ভূঞাপুর যমুনা বহুমুখী সেতুর মাধ্যমে উত্তরবঙ্গের সাথে যোগাযোগের মহাগুরুত্বপূর্ণ করিডোর।",
            enDesc: "Strategically located on the east bank of the mighty Jamuna River, connecting northern and central Bangladesh through the Jamuna Bridge."
        },
        {
            id: "ghatail",
            name: "ঘাটাইল",
            enName: "Ghatail",
            area: "৪৫০.৭১ বর্গ কিমি",
            enArea: "450.71 sq km",
            unions: "১৪টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "14 Unions, 1 Municipality",
            highlights: "সাগরদীঘি, গুপ্তবৃন্দাবন, ধলাপাড়া চৌধুরী বাড়ি প্রাচীন মসজিদ, ঘাটাইল সেনানিবাস ও গলফ ক্লাব।",
            enHighlights: "Sagardighi Lake, Guptabrindaban, Dhalapara Ancient Mosque, Ghatail Cantonment & Golf Club.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২২",
            enOfficers: "UNO: 01730-331022",
            police: "ঘাটাইল থানা: ০১৩২০-০৮৭৬৫৭",
            enPolice: "Ghatail Thana: 01320-087657",
            hospital: "ঘাটাইল উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Ghatail Upazila Health Complex",
            desc: "টাঙ্গাইল জেলার আয়তনে সর্ববৃহৎ উপজেলা। বনভূমি, প্রাচীন দীঘি ও ঐতিহাসিক স্থাপনায় সমৃদ্ধ।",
            enDesc: "The largest upazila in Tangail by geographical area, blessed with vast lakes, ancient mosques, and hilly sal vegetation."
        },
        {
            id: "kalihati",
            name: "কালিহাতী",
            enName: "Kalihati",
            area: "২৯৫.৬০ বর্গ কিমি",
            enArea: "295.60 sq km",
            unions: "১৩টি ইউনিয়ন, ২টি পৌরসভা",
            enUnions: "13 Unions, 2 Municipalities",
            highlights: "বল্লা তাঁত পল্লী, এলেঙ্গা রিসোর্ট, কাদিমহামজানি মাজার শরীফ, কালিহাতী আর এস হাই স্কুল।",
            enHighlights: "Balla Handloom Village, Elenga Resorts, Kadimhamzani Mazar Sharif, Charana Beel.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২৩",
            enOfficers: "UNO: 01730-331023",
            police: "কালিহাতী থানা: ০১৩২০-০৮৭৬৯৭",
            enPolice: "Kalihati Thana: 01320-087697",
            hospital: "কালিহাতী উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Kalihati Upazila Health Complex",
            desc: "বল্লার ঐতিহ্যবাহী তাঁত শিল্প ও এলেঙ্গার দৃষ্টিনন্দন রিসোর্টের জন্য সুপরিচিত কালিহাতী উপজেলা।",
            enDesc: "Celebrated for the age-old Balla weaving artisan tradition and premier scenic highway resort destinations in Elenga."
        },
        {
            id: "nagarpur",
            name: "নাগরপুর",
            enName: "Nagarpur",
            area: "২৬৬.৮৪ বর্গ কিমি",
            enArea: "266.84 sq km",
            unions: "১২টি ইউনিয়ন",
            enUnions: "12 Unions",
            highlights: "পাকুটিয়া জমিদার বাড়ি, নাগরপুর চৌধুরী বাড়ি, উপেন্দ্র সরোবর (বারো শিবালয়), গয়হাটা ঐতিহাসিক মঠ।",
            enHighlights: "Pakutia Palace, Nagarpur Chowdhury Bari, Upendra Sarobar (12 Shibaloy Temples), Gayhata Math.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২৪",
            enOfficers: "UNO: 01730-331024",
            police: "নাগরপুর থানা: ০১৩২০-০৮৭৭৩৭",
            enPolice: "Nagarpur Thana: 01320-087737",
            hospital: "নাগরপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Nagarpur Upazila Health Complex",
            desc: "ইউরোপীয় নির্মাণশৈলীর দৃষ্টিনন্দন পাকুটিয়া জমিদার বাড়ি ও প্রাচীন দীঘি সম্বলিত ইতিহাস ও প্রত্নতাত্ত্বিক সমৃদ্ধ উপজেলা।",
            enDesc: "An open museum of grand neoclassical European-styled palaces, sacred temple complexes, and century-old water bodies."
        },
        {
            id: "delduar",
            name: "দেলদুয়ার",
            enName: "Delduar",
            area: "১৮৪.৫৪ বর্গ কিমি",
            enArea: "184.54 sq km",
            unions: "৮টি ইউনিয়ন",
            enUnions: "8 Unions",
            highlights: "আতিয়া ঐতিহাসিক মসজিদ (১৬০৯ খ্রি.), দেলদুয়ার জমিদার বাড়ি, এলাসিন ধলেশ্বরী সেতু।",
            enHighlights: "Historic Atiya Mosque (1609 AD), Delduar Palace, Elasin Dhaleshwari Bridge, Jamurki Sondesh.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২৫",
            enOfficers: "UNO: 01730-331025",
            police: "দেলদুয়ার থানা: ০১৩২০-০৮৭৭৭৭",
            enPolice: "Delduar Thana: 01320-087777",
            hospital: "দেলদুয়ার উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Delduar Upazila Health Complex",
            desc: "১৬০৯ সালে প্রতিষ্ঠিত প্রখ্যাত আতিয়া মসজিদের স্মৃতিধন্য। যা পূর্বে বাংলাদেশের ১০ টাকার নোটে চিত্রিত ছিল।",
            enDesc: "Revered for the iconic 1609 AD Atiya Mosque (depicted on the former 10 Taka banknote) and famous GI Jamurki Sondesh."
        },
        {
            id: "basail",
            name: "বাসাইল",
            enName: "Basail",
            area: "১৫৭.৭৮ বর্গ কিমি",
            enArea: "157.78 sq km",
            unions: "৪টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "4 Unions, 1 Municipality",
            highlights: "বাসুলিয়া (চাপড়া বিলের প্রাকৃতিক সৌন্দর্য ও হিজল বাগান), আইসরা প্রাচীন বটবৃক্ষ।",
            enHighlights: "Basulia (Chapra Beel wetland scenery & Hijol forest), Ancient Banyan Tree of Aisra.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২৬",
            enOfficers: "UNO: 01730-331026",
            police: "বাসাইল থানা: ০১৩২০-০৮৭৮১৭",
            enPolice: "Basail Thana: 01320-087817",
            hospital: "বাসাইল উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Basail Upazila Health Complex",
            desc: "বর্ষাকালে চাপড়া বিল হয়ে ওঠে এক স্বপ্নময় জলরাশি, যা প্রকৃতিপ্রেমীদের কাছে বাসুলিয়া নামে বিপুল সমাদৃত।",
            enDesc: "During the monsoon season, Chapra Beel transforms into a scenic aquatic wonderland affectionately known as Tangail's Mini Cox's Bazar."
        },
        {
            id: "sakhipur",
            name: "সখীপুর",
            enName: "Sakhipur",
            area: "৪২৯.০২ বর্গ কিমি",
            enArea: "429.02 sq km",
            unions: "৮টি ইউনিয়ন, ১টি পৌরসভা",
            enUnions: "8 Unions, 1 Municipality",
            highlights: "বহেড়াতৈল মুক্তিযোদ্ধা স্মৃতিসৌধ, ড্রাগন ফলের বিস্তীর্ণ বাগান, শাল গজারির পাহাড়ি উপত্যকা।",
            enHighlights: "Boheratoil Liberation War Monument, Dragon Fruit Orchards, Rolling Sal Forest Hills.",
            officers: "উপজেলা নির্বাহী কর্মকর্তা (UNO): ০১৭৩০-৩৩১০২৭",
            enOfficers: "UNO: 01730-331027",
            police: "সখীপুর থানা: ০১৩২০-০৮৭৮৫৭",
            enPolice: "Sakhipur Thana: 01320-087857",
            hospital: "সখীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
            enHospital: "Sakhipur Upazila Health Complex",
            desc: "মুক্তিযুদ্ধের সময় বঙ্গবীর কাদের সিদ্দিকীর কাদেরিয়া বাহিনীর অন্যতম শক্তিশালী গোপন দুর্গ ও শালবনের পাহাড়ি ভূমি।",
            enDesc: "A historic hilly stronghold celebrated for the heroic Kaderia Bahini guerrilla resistance against occupying forces during 1971."
        }
    ],

    touristSpots: [
        {
            id: "mohera-zamindar-bari",
            name: "মহেরা জমিদার বাড়ি",
            enName: "Mohera Zamindar Bari Palace",
            location: "মির্জাপুর, টাঙ্গাইল",
            enLocation: "Mirzapur, Tangail",
            category: "প্রত্নতাত্ত্বিক ও স্থাপত্য",
            enCategory: "Archeological & Palace",
            entryFee: "১০০ টাকা (জনপ্রতি)",
            enEntryFee: "100 BDT (Per person)",
            time: "সকাল ৯:০০ - বিকেল ৫:০০",
            enTime: "9:00 AM - 5:00 PM",
            image: "images/mohera_palace.jpg",
            summary: "১৮৯০ সালের দিকে প্রতিষ্ঠিত প্রায় আট একর জমির ওপর নির্মিত অনিন্দ্য সুন্দর ইউরোপীয় স্থাপত্যের চারটি সুবিশাল প্রাসাদ।",
            enSummary: "Established around 1890 across 8 acres, featuring four majestic neoclassical European-styled grand white palaces.",
            details: "কালীচরণ সাহা ও আনন্দ সাহা জমিদারির সূচনা করেন। এখানে রয়েছে আনন্দ ভবন, মহারাজ লজ, চৌধুরী লজ ও কালীচরণ লজ। সুবিশাল বিশাখা সাগর দীঘি, সুন্দর ফোয়ারা ও বাগান বাড়িটিকে মনোমুগ্ধকর রূপ দিয়েছে। বর্তমানে এটি পুলিশ ট্রেনিং সেন্টার হিসেবে সংরক্ষিত।",
            enDetails: "Founded by Kalicharan Saha and Ananda Saha, featuring Ananda Bhaban, Maharaj Lodge, Chowdhury Lodge, and Kalicharan Lodge surrounded by Bishakha Sagar lake and ornamental fountains. Preserved as a premier heritage site.",
            howToGo: "ঢাকা-টাঙ্গাইল মহাসড়কের নাটিয়াপাড়া বাসস্ট্যান্ডে নেমে সিএনজি বা অটোতে মাত্র ৪ কিমি দূরে মহেরা জমিদার বাড়ি পৌঁছানো যায়।",
            enHowToGo: "Drop off at Natiapara bus stand on Dhaka-Tangail highway, then take a CNG or auto-rickshaw for 4 km to reach the palace.",
            mapQuery: "Mohera Zamindar Bari, Tangail"
        },
        {
            id: "dhanbari-nawab-palace",
            name: "ধনবাড়ী নবাব বাড়ি (নবাব মঞ্জিল)",
            enName: "Dhanbari Nawab Bari Palace (Nawab Manzil)",
            location: "ধনবাড়ী, টাঙ্গাইল",
            enLocation: "Dhanbari, Tangail",
            category: "প্রত্নতাত্ত্বিক ও রাজপ্রাসাদ",
            enCategory: "Archeological & Royal Palace",
            entryFee: "১০০ টাকা (রিসোর্ট ও দর্শন টিকিট)",
            enEntryFee: "100 BDT (Tour & Heritage Ticket)",
            time: "সকাল ৯:০০ - বিকেল ৫:০০",
            enTime: "9:00 AM - 5:00 PM",
            image: "images/dhanbari_nawab_palace.jpg",
            summary: "ঢাকা বিশ্ববিদ্যালয়ের অন্যতম প্রতিষ্ঠাতা নওয়াব আলী চৌধুরীর ঐতিহ্যবাহী মোঘল নির্মাণশৈলীর দৃষ্টিনন্দন প্রাসাদ ও নবাব মঞ্জিল।",
            enSummary: "The grand historic palace of Nawab Ali Chowdhury (co-founder of Dhaka University), blending Mughal architecture with vintage luxury.",
            details: "মোঘল স্থাপত্যে নির্মিত এই নীল ও সাদা খিলানযুক্ত সুবিশাল প্রাসাদে রয়েছে প্রাচীন বৈঠকখানা, বিরল আসবাবপত্র এবং ঐতিহাসিক নবাব মসজিদ যেখানে ৭০০ বছরের প্রাচীন মোঘল ঝাড়বাতি আজও আলো ছড়ায় ও ২৪ ঘণ্টা অবিরাম কুরআন তিলাওয়াত চলে।",
            enDetails: "Constructed in refined Mughal arcade style featuring vintage banquet halls, royal furnishings, and an ancient mosque with a 700-year-old chandelier where round-the-clock Quran recitation has continued for over a century.",
            howToGo: "ঢাকা-টাঙ্গাইল-জামালপুর মহাসড়কে ধনবাড়ী বাসস্ট্যান্ডে নেমে পায়ে হেঁটে বা রিকশায় ২ মিনিটে প্যালেসে যাওয়া যায়।",
            enHowToGo: "Drop off at Dhanbari bus stand on Dhaka-Tangail-Jamalpur highway; the palace is a 2-minute rickshaw ride away.",
            mapQuery: "Dhanbari Nawab Palace, Tangail"
        },
        {
            id: "201-gombuj-mosque",
            name: "২০১ গম্বুজ মসজিদ",
            enName: "201 Dome Mosque",
            location: "দক্ষিণ পাথালিয়া, গোপালপুর, টাঙ্গাইল",
            enLocation: "South Pathalia, Gopalpur, Tangail",
            category: "ধর্মীয় ও আধুনিক স্থাপত্য",
            enCategory: "Religious & Modern Landmark",
            entryFee: "বিনামূল্যে",
            enEntryFee: "Free Entry",
            time: "সার্বক্ষণিক উন্মুক্ত",
            enTime: "Open 24/7",
            image: "images/201_dome_mosque.jpg",
            summary: "বিশ্বের সবচেয়ে বেশি গম্বুজ এবং ৪৫১ ফুট সুউচ্চ একক মিনার বিশিষ্ট দৃষ্টিনন্দন আধুনিক স্থাপত্যশৈলীর মসজিদ।",
            enSummary: "World-record mosque featuring the highest number of domes (201) and a towering 451-foot single minaret.",
            details: "রফিকুল ইসলাম কল্যাণ ট্রাস্টের উদ্যোগে ঝিনাই নদীর তীরে নির্মিত এই মসজিদে একসাথে প্রায় ১৫ হাজার মুসল্লি নামাজ আদায় করতে পারেন। মসজিদের দেয়ালে সম্পূর্ণ পবিত্র কুরআন খচিত রয়েছে পিতলের হরফে।",
            enDetails: "Built along the Jhinai River with a prayer capacity of 15,000 worshippers, featuring the complete Holy Quran engraved in brass on its walls.",
            howToGo: "টাঙ্গাইল শহর থেকে গোপালপুরগামী বাসে বা সিএনজিতে গোপালপুর পৌঁছে সেখান থেকে অটোতে দক্ষিণ পাথালিয়া ২০১ গম্বুজ মসজিদে যাওয়া যায়।",
            enHowToGo: "From Tangail town, take a bus or CNG to Gopalpur upazila, then an auto-rickshaw to South Pathalia 201 Dome Mosque.",
            mapQuery: "201 Gombuj Mosque, Gopalpur, Tangail"
        },
        {
            id: "atiya-mosque",
            name: "ঐতিহাসিক আতিয়া মসজিদ",
            enName: "Historic Atiya Mosque",
            location: "দেলদুয়ার, টাঙ্গাইল",
            enLocation: "Delduar, Tangail",
            category: "ঐতিহাসিক ধর্মীয় প্রত্নতত্ত্ব",
            enCategory: "Historic Mosque & Archeology",
            entryFee: "বিনামূল্যে",
            enEntryFee: "Free Entry",
            time: "সার্বক্ষণিক উন্মুক্ত",
            enTime: "Open 24/7",
            image: "images/atiya_mosque.jpg",
            summary: "১৬০৯ খ্রিস্টাব্দে নির্মিত সুলতানি ও মোঘল স্থাপত্যের সংমিশ্রণে তৈরি চার গম্বুজবিশিষ্ট ঐতিহ্যবাহী লাল ইটের প্রত্নতাত্ত্বিক মসজিদ।",
            enSummary: "Erected in 1609 AD, this four-domed terracotta brick monument blends Sultanate and Mughal architectural styles.",
            details: "সাঈদ খান পন্নী সুফি শাহ বাবা আদম কাশ্মিরীর সম্মানে লৌহজং নদীর তীরে এই অনুপম মসজিদটি নির্মাণ করেন। বাংলাদেশের পুরোনো ১০ টাকার কাগজের নোটে এই ঐতিহাসিক মসজিদের ছবি অঙ্কিত ছিল।",
            enDetails: "Built by Sayeed Khan Panni in honour of Sufi Baba Adam Kashmiri on the bank of the Louhajang River. Its majestic facade was featured on Bangladesh's older 10 Taka banknote.",
            howToGo: "টাঙ্গাইল শহরের নিরালা মোড় বা সদর থেকে সিএনজি বা ব্যাটারিচালিত রিকশায় মাত্র ৬ কিলোমিটার দক্ষিণে আতিয়া মসজিদে যাওয়া যায়।",
            enHowToGo: "Located just 6 km south of Tangail town's Nirala Mor, easily reachable via CNG auto-rickshaw.",
            mapQuery: "Atiya Mosque, Delduar, Tangail"
        },
        {
            id: "korotia-zamindar-bari",
            name: "করটিয়া জমিদার বাড়ি",
            enName: "Korotia Zamindar Bari Palace",
            location: "করটিয়া, টাঙ্গাইল সদর",
            enLocation: "Korotia, Tangail Sadar",
            category: "ঐতিহাসিক প্রত্নতাত্ত্বিক ও স্থাপত্য",
            enCategory: "Historic Heritage & Palace",
            entryFee: "বিনামূল্যে",
            enEntryFee: "Free Entry",
            time: "সকাল ৯:০০ - বিকেল ৫:০০",
            enTime: "9:00 AM - 5:00 PM",
            image: "images/korotia_palace.jpg",
            summary: "পন্নি বংশের ঐতিহ্যবাহী রোকেয়া মঞ্জিল, সুরম্য প্রাসাদ ও সুপ্রাচীন করটিয়া জামে মসজিদ।",
            enSummary: "The historic Rokeya Manzil estate of the illustrious Panni dynasty and home to the historic Korotia Jame Mosque.",
            details: "ওয়াজেদ আলী খান পন্নী (চাঁদ মিয়া)-র স্মৃতিবিজড়িত এই ঐতিহাসিক বাড়িটি এককালে অবিভক্ত বাংলার শিক্ষা ও সংস্কৃতির প্রাণকেন্দ্র ছিল। কাঠের নিপুণ কারুকাজসমৃদ্ধ রোকেয়া মঞ্জিল পর্যটকদের মুগ্ধ করে। কাছেই অবস্থিত ঐতিহ্যবাহী সরকারি সা'দত কলেজ।",
            enDetails: "Steeped in the legacy of Wazed Ali Khan Panni (Chand Mia), this was once an intellectual capital of undivided Bengal. Features the iconic wooden ornamental Rokeya Manzil.",
            howToGo: "টাঙ্গাইল পুরাতন বাসস্ট্যান্ড থেকে করটিয়াগামী অটো বা সিএনজিতে মাত্র ১০-১৫ মিনিটে পৌঁছানো যায়।",
            enHowToGo: "Just a 10 to 15-minute auto-rickshaw journey from Tangail old bus stand to Korotia.",
            mapQuery: "Korotia Zamindar Bari, Tangail"
        },
        {
            id: "bangabandhu-bridge-resort",
            name: "বঙ্গবন্ধু সেতু (যমুনা সেতু)",
            enName: "Bangabandhu Jamuna Bridge & Riverfront",
            location: "ভূঞাপুর / কালিহাতী, টাঙ্গাইল",
            enLocation: "Bhuapur / Kalihati, Tangail",
            category: "প্রকৃতি ও আধুনিক প্রকৌশল",
            enCategory: "Engineering Wonder & Nature",
            entryFee: "মুক্ত দর্শন / রিসোর্ট ফি প্রযোজ্য",
            enEntryFee: "Free Viewing / Resort fees apply",
            time: "সার্বক্ষণিক উন্মুক্ত",
            enTime: "Open 24/7",
            image: "images/jamuna_bridge.jpg",
            summary: "দক্ষিণ এশিয়ার দীর্ঘতম সেতুর অন্যতম বঙ্গবন্ধু বহুমুখী সেতু এবং যমুনা নদীর দিগন্ত বিস্তৃত মোহনীয় জলরাশি ও সূর্যাস্ত।",
            enSummary: "One of South Asia's longest iconic bridges stretching over the majestic Jamuna River, with stunning sunset views.",
            details: "১৯৯৮ সালে যমুনা নদীর ওপর নির্মিত ৪.৮ কিলোমিটার দীর্ঘ এই সেতু উত্তরবঙ্গ ও ঢাকাকে সংযুক্ত করেছে। যমুনার উত্তাল বাতাস, সূর্যাস্ত এবং নদীর তীরে যমুনা রিসোর্ট ও পার্ক পর্যটকদের প্রধান আকর্ষণ।",
            enDetails: "Completed in 1998, this 4.8 km landmark bridge links North Bengal with Dhaka. Famous for refreshing river breezes, sunset horizons, and riverside leisure resorts.",
            howToGo: "টাঙ্গাইল শহর থেকে এলেঙ্গা হয়ে ভূঞাপুর কিংবা সরাসরি বঙ্গবন্ধু সেতু পূর্ব প্রান্তে সিএনজি বা বাসে সহজেই যাওয়া যায়।",
            enHowToGo: "Easily reached via bus or CNG from Tangail town through Elenga to the eastern approach of the bridge.",
            mapQuery: "Bangabandhu Bridge East Side, Tangail"
        },
        {
            id: "pakutia-zamindar-bari",
            name: "পাকুটিয়া জমিদার বাড়ি",
            enName: "Pakutia Zamindar Bari Palace",
            location: "নাগরপুর, টাঙ্গাইল",
            enLocation: "Nagarpur, Tangail",
            category: "প্রত্নতাত্ত্বিক ও স্থাপত্য",
            enCategory: "Archeological & Palace",
            entryFee: "বিনামূল্যে",
            enEntryFee: "Free Entry",
            time: "সকাল ৯:০০ - সন্ধ্যা ৬:০০",
            enTime: "9:00 AM - 6:00 PM",
            image: "images/pakutia_palace.jpg",
            summary: "পাশ্চাত্য ক্লাসিক্যাল শিল্পরীতি ও ভারতীয় শিল্পশৈলীর মিশেলে তৈরি নয়নাভিরাম তিনটি অট্টালিকা।",
            enSummary: "Three breathtaking neoclassical edifices combining European Renaissance motifs with traditional Indian artistry.",
            details: "১৯১৫ সালে রামকৃষ্ণ সাহা পোদ্দার এই প্রাসাদ গড়ে তোলেন। লতাপাতা, গ্রিক দেবী এবং রাজকীয় খিলানের কারুকাজ প্রাসাদের দেয়ালে সুস্পষ্ট। বর্তমানে এখানে বিসিআরজি ডিগ্রি কলেজ পরিচালিত হচ্ছে।",
            enDetails: "Constructed in 1915 by Ramkrishna Saha Poddar with Greek goddess sculptures, Corinthian pillars, and royal courtyards.",
            howToGo: "মির্জাপুর বা টাঙ্গাইল সদর থেকে নাগরপুরের পাকুটিয়া বাজারগামী বাস অথবা সিএনজিতে সরাসরি পৌঁছানো যায়।",
            enHowToGo: "Reachable directly by bus or CNG from Mirzapur or Tangail Sadar towards Pakutia Bazar.",
            mapQuery: "Pakutia Zamindar Bari, Nagarpur, Tangail"
        },
        {
            id: "basulia-chapra-beel",
            name: "বাসুলিয়া (চাপড়া বিল)",
            enName: "Basulia (Chapra Beel Wetlands)",
            location: "বাসাইল, টাঙ্গাইল",
            enLocation: "Basail, Tangail",
            category: "প্রকৃতি ও জলাভূমি",
            enCategory: "Wetlands & Aquatic Nature",
            entryFee: "বিনামূল্যে (নৌকা ভ্রমণ ভাড়া আলোচনা সাপেক্ষে)",
            enEntryFee: "Free (Boat hire negotiable)",
            time: "সকাল থেকে সূর্যাস্ত",
            enTime: "Morning to Sunset",
            image: "images/basulia_chapra_beel.jpg",
            summary: "বর্ষার মৌসুমে বিশাল জলরাশির মায়াবী রূপ এবং পানিতে নিমজ্জিত হিজল করচের বন।",
            enSummary: "Famed as Tangail's Mini Cox's Bazar, featuring vast shimmering water and submerged Hijol tree groves in monsoon.",
            details: "টাঙ্গাইলের মিনি কক্সবাজার খ্যাত বাসুলিয়া চাপড়া বিল বর্ষাকালে দিগন্ত বিস্তৃত জলরাশিতে রূপ নেয়। দর্শনার্থীরা নৌকায় চড়ে মুক্ত বাতাস ও সূর্যাস্ত উপভোগ করতে দূর-দূরান্ত থেকে আসেন।",
            enDetails: "A sprawling wetland basin where travelers take wooden boats to savor cool breezes, sunset reflections, and aquatic nature.",
            howToGo: "টাঙ্গাইল সদর থেকে সিএনজিতে বাসাইল উপজেলা সদর হয়ে মাত্র ২ কিমি দূরে বাসুলিয়ায় যাওয়া যায়।",
            enHowToGo: "Take a CNG from Tangail Sadar to Basail town, then proceed 2 km to reach the Basulia wetland viewpoint.",
            mapQuery: "Basulia Chapra Beel, Basail, Tangail"
        },
        {
            id: "modhupur-national-park",
            name: "মধুপুর জাতীয় উদ্যান (শালবন)",
            enName: "Madhupur National Park (Sal Forest)",
            location: "মধুপুর, টাঙ্গাইল",
            enLocation: "Madhupur, Tangail",
            category: "প্রকৃতি ও বন্যপ্রাণী",
            enCategory: "Nature & Wildlife Sanctuary",
            entryFee: "৫০ টাকা (প্রাপ্তবয়স্ক)",
            enEntryFee: "50 BDT (Adult)",
            time: "সকাল ৮:০০ - বিকেল ৫:৩০",
            enTime: "8:00 AM - 5:30 PM",
            image: "images/madhupur_national_park.jpg",
            summary: "বিশাল প্রাকৃতিক শাল-গজারির বনভূমি, হরিণ প্রজনন কেন্দ্র এবং বৈচিত্র্যময় বন্যপ্রাণী ও পাখির অভয়ারণ্য।",
            enSummary: "Vast primeval deciduous Sal forest featuring deer breeding centers, scenic watchtowers, and diverse wildlife.",
            details: "১৯৬২ সালে উদ্যান হিসেবে ঘোষিত এই বনে রয়েছে মায়াহরিণ, বানর, বুনো শুয়োর, চিতা বাঘ ও শত শত প্রজাতির পাখি। বনের মাঝে অবস্থিত দোখলা ভিআইপি রেস্ট হাউস ও ওয়াচ টাওয়ার থেকে শালবনের অপার সৌন্দর্য উপভোগ করা যায়।",
            enDetails: "Declared a national park in 1962, home to barking deer, rhesus macaques, wild boars, and diverse birds. Houses the legendary Dokhla VIP Rest House.",
            howToGo: "টাঙ্গাইল বা ঢাকা থেকে সরাসরি মধুপুরগামী বাসে চড়ে রসুলপুর গেটে নামলে জাতীয় উদ্যানের প্রধান ফটক পাওয়া যায়।",
            enHowToGo: "Board a direct bus towards Madhupur from Dhaka or Tangail and get off at Rasulpur Gate to enter the main park.",
            mapQuery: "Madhupur National Park, Tangail"
        },
        {
            id: "bhashani-mazar",
            name: "মওলানা ভাসানীর মাজার ও দরবার হল",
            enName: "Shrine of Mawlana Bhashani & Darbar Hall",
            location: "সন্তোষ, টাঙ্গাইল সদর",
            enLocation: "Santosh, Tangail Sadar",
            category: "ঐতিহাসিক ও ব্যক্তিত্ব",
            enCategory: "Memorial & Historical Shrine",
            entryFee: "বিনামূল্যে",
            enEntryFee: "Free Entry",
            time: "সকাল ৭:০০ - রাত ৯:০০",
            enTime: "7:00 AM - 9:00 PM",
            image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
            summary: "মজলুম জননেতা মওলানা আবদুল হামিদ খান ভাসানীর অন্তিম শয়ানস্থল ও ঐতিহাসিক স্মৃতি জাদুঘর।",
            enSummary: "The resting place of the legendary mass leader Mawlana Abdul Hamid Khan Bhashani and historical memorial museum.",
            details: "সন্তোষে প্রতিষ্ঠিত মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের সন্নিকটে অবস্থিত। এখানে রয়েছে ভাসানীর ব্যবহৃত স্মৃতিচিহ্ন, দরবার হল ও ঐতিহাসিক কাগমারী সম্মেলনের স্মৃতি।",
            enDetails: "Located adjacent to MBSTU campus at Santosh, preserving relics of Bhashani and memories of the historic 1957 Kagmari Conference.",
            howToGo: "টাঙ্গাইল শহরের নিরালা মোড় থেকে সন্তোষগামী অটোরিকশায় মাত্র ৪ কিলোমিটার দূরত্বে অবস্থিত।",
            enHowToGo: "Located 4 km west of Tangail town's Nirala Mor, easily accessible via battery-operated auto-rickshaw.",
            mapQuery: "Mawlana Bhashani Mazar, Santosh, Tangail"
        }
    ],

    emergencyServices: [
        {
            category: "জাতীয় হেল্পলাইন",
            enCategory: "National Emergency Helplines",
            items: [
                { title: "জাতীয় জরুরি সেবা (পুলিশ, অ্যাম্বুলেন্স, ফায়ার)", enTitle: "National Emergency Service (Police, Ambulance, Fire)", number: "999", type: "national", desc: "টোল ফ্রি ২৪ ঘণ্টা যেকোনো জরুরি পরিস্থিতিতে কল করুন", enDesc: "Toll-free 24/7 call for any immediate emergency assistance" },
                { title: "সরকারি তথ্য ও সেবা", enTitle: "Government Information & Services", number: "333", type: "national", desc: "নাগরিক সেবা, সামাজিক সমস্যা ও তথ্য সহায়তা", enDesc: "Citizen assistance, social issues, and official information" },
                { title: "নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন", enTitle: "Women & Child Helpline", number: "109", type: "national", desc: "টোল ফ্রি সহায়তা ২৪ ঘণ্টা", enDesc: "Toll-free 24/7 legal and rescue support" },
                { title: "দুদক অভিযোগ কেন্দ্র", enTitle: "Anti-Corruption Commission (ACC)", number: "106", type: "national", desc: "দুর্নীতি দমন কমিশন সরাসরি হটলাইন", enDesc: "Direct toll-free hotline to report corruption" }
            ]
        },
        {
            category: "হাসপাতাল ও স্বাস্থ্যসেবা",
            enCategory: "Hospitals & Healthcare Services",
            items: [
                { title: "টাঙ্গাইল ২৫০ শয্যা জেনারেল হাসপাতাল", enTitle: "Tangail 250-Bed General Hospital", number: "01730-324477", tel: "01730324477", type: "hospital", desc: "জেলা সদর হাসপাতাল, জরুরি বিভাগ সার্বক্ষণিক খোলা", enDesc: "District headquarters hospital, 24/7 emergency unit open" },
                { title: "কুমুদিনী হাসপাতাল (মির্জাপুর)", enTitle: "Kumudini Hospital (Mirzapur)", number: "01711-428915", tel: "01711428915", type: "hospital", desc: "দেশের অন্যতম বৃহৎ ও সুসজ্জিত দাতব্য সেবা হাসপাতাল", enDesc: "One of Bangladesh's largest philanthropic tertiary care hospitals" },
                { title: "শেখ হাসিনা মেডিকেল কলেজ হাসপাতাল", enTitle: "Sheikh Hasina Medical College Hospital", number: "01715-321456", tel: "01715321456", type: "hospital", desc: "বিশেষায়িত চিকিৎসা ও মেডিকেল শিক্ষা কেন্দ্র", enDesc: "Specialized tertiary care and medical education complex" },
                { title: "টাঙ্গাইল সিভিল সার্জন কার্যালয়", enTitle: "Civil Surgeon Office, Tangail", number: "02997752014", tel: "02997752014", type: "govt", desc: "জেলা স্বাস্থ্য প্রশাসন কন্ট্রোল রুম", enDesc: "District healthcare administration central control room" }
            ]
        },
        {
            category: "অ্যাম্বুলেন্স সার্ভিস",
            enCategory: "24/7 Ambulance Services",
            items: [
                { title: "টাঙ্গাইল রেড ক্রিসেন্ট অ্যাম্বুলেন্স", enTitle: "Red Crescent Ambulance Tangail", number: "01712-452189", tel: "01712452189", type: "ambulance", desc: "জরুরি রোগী পরিবহনে ২৪ ঘণ্টা প্রস্তুত", enDesc: "24/7 emergency critical patient transit support" },
                { title: "সদর হাসপাতাল অ্যাম্বুলেন্স ড্রাইভ সেল", enTitle: "Sadar Hospital Ambulance Dispatch", number: "01716-890123", tel: "01716890123", type: "ambulance", desc: "আইসিইউ ও সাধারণ অ্যাম্বুলেন্স সহায়তা", enDesc: "ICU ambulance and basic emergency transport" },
                { title: "কুমুদিনী হাসপাতাল অ্যাম্বুলেন্স", enTitle: "Kumudini Hospital Ambulance", number: "01711-123456", tel: "01711123456", type: "ambulance", desc: "মির্জাপুর ও ঢাকা রুটে জরুরি পরিবহন", enDesc: "Emergency transit for Mirzapur and Dhaka routes" }
            ]
        },
        {
            category: "পুলিশ প্রশাসন",
            enCategory: "Police & Law Enforcement",
            items: [
                { title: "টাঙ্গাইল জেলা পুলিশ কন্ট্রোল রুম", enTitle: "Tangail District Police Control Room", number: "01320-087298", tel: "01320087298", type: "police", desc: "সার্বক্ষণিক পুলিশি সহায়তা ও অভিযোগ কেন্দ্র", enDesc: "Round-the-clock emergency police assistance" },
                { title: "পুলিশ সুপার (SP), টাঙ্গাইল", enTitle: "Superintendent of Police (SP) Tangail", number: "01320-087200", tel: "01320087200", type: "police", desc: "জেলা পুলিশ প্রধানের কার্যালয়", enDesc: "Office of the District Police Chief" },
                { title: "টাঙ্গাইল সদর থানা ও ওসি", enTitle: "Tangail Sadar Police Station (OC)", number: "01320-087417", tel: "01320087417", type: "police", desc: "সদর এলাকার আইনশৃঙ্খলা রক্ষা", enDesc: "Law and order enforcement for Sadar area" },
                { title: "টাঙ্গাইল ট্রাফিক পুলিশ ইনচার্জ", enTitle: "Tangail Traffic Police In-Charge", number: "01320-087285", tel: "01320087285", type: "police", desc: "মহাসড়ক ও শহর ট্রাফিক নিয়ন্ত্রণ", enDesc: "Highway and municipal traffic management" }
            ]
        },
        {
            category: "ফায়ার সার্ভিস ও উদ্ধার",
            enCategory: "Fire Service & Rescue Squads",
            items: [
                { title: "টাঙ্গাইল ফায়ার সার্ভিস স্টেশন", enTitle: "Tangail Fire Service Station", number: "01730-002418", tel: "01730002418", type: "fire", desc: "অগ্নি দুর্ঘটনা ও যেকোনো জরুরি উদ্ধার অভিযান", enDesc: "Firefighting and critical disaster rescue operations" },
                { title: "মির্জাপুর ফায়ার সার্ভিস", enTitle: "Mirzapur Fire Station", number: "01730-002420", tel: "01730002420", type: "fire", desc: "মির্জাপুর ও মহাসড়ক দুর্ঘটনা রেসকিউ", enDesc: "Highway collision rescue and fire prevention" },
                { title: "মধুপুর ফায়ার স্টেশন", enTitle: "Madhupur Fire Station", number: "01730-002422", tel: "01730002422", type: "fire", desc: "মধুপুর ও পাহাড়ি অঞ্চল রেসকিউ টিম", enDesc: "Sal forest area and hilly tract disaster response" }
            ]
        },
        {
            category: "বিদ্যুৎ ও গ্যাস জরুরি সেবা",
            enCategory: "Electricity & Utility Emergency",
            items: [
                { title: "টাঙ্গাইল পল্লী বিদ্যুৎ সমিতি-১", enTitle: "Tangail Palli Bidyut Samity-1", number: "01769-400111", tel: "01769400111", type: "power", desc: "পল্লী বিদ্যুৎ অভিযোগ কেন্দ্র ও লাইন মেরামত", enDesc: "Rural power supply complaint & grid repair" },
                { title: "বিপিডিবি টাঙ্গাইল বিদ্যুৎ বিতরণ বিভাগ", enTitle: "BPDB Tangail Urban Power Distribution", number: "01713-850123", tel: "01713850123", type: "power", desc: "পৌরসভা ও শহর বিদ্যুৎ অভিযোগ", enDesc: "Municipal town power breakdown & emergency line repair" }
            ]
        }
    ],

    education: [
        {
            name: "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (MBSTU)",
            enName: "Mawlana Bhashani Science & Technology University (MBSTU)",
            type: "পাবলিক বিশ্ববিদ্যালয়",
            enType: "Public Science & Tech University",
            location: "সন্তোষ, টাঙ্গাইল",
            enLocation: "Santosh, Tangail",
            established: "১৯৯৯ সাল",
            enEstablished: "Established 1999",
            highlights: "বিজ্ঞান ও প্রযুক্তির বিভিন্ন বিশেষায়িত বিভাগ, সুপরিসর ক্যাম্পাস, সমৃদ্ধ ল্যাবরেটরি ও কেন্দ্রীয় গ্রন্থাগার।",
            enHighlights: "Specialized engineering and science faculties, expansive lakeside campus, advanced research labs, and modern central library.",
            website: "https://mbstu.ac.bd"
        },
        {
            name: "সরকারি সা'দত কলেজ",
            enName: "Government Saadat College",
            type: "সরকারি ঐতিহ্যবাহী অনার্স-মাস্টার্স কলেজ",
            enType: "Historic Honours-Masters College",
            location: "করটিয়া, টাঙ্গাইল",
            enLocation: "Korotia, Tangail",
            established: "১৯২৬ সাল",
            enEstablished: "Established 1926",
            highlights: "ওয়াজেদ আলী খান পন্নী কর্তৃক প্রতিষ্ঠিত অবিভক্ত বাংলার অন্যতম প্রথম মুসলিম উচ্চ শিক্ষা প্রতিষ্ঠান।",
            enHighlights: "Founded by Wazed Ali Khan Panni, it is celebrated as the premier Muslim higher education institution in undivided Bengal.",
            website: "https://saadatcollege.gov.bd"
        },
        {
            name: "শেখ হাসিনা মেডিকেল কলেজ, টাঙ্গাইল",
            enName: "Sheikh Hasina Medical College, Tangail",
            type: "সরকারি মেডিকেল কলেজ",
            enType: "Government Medical College",
            location: "টাঙ্গাইল সদর",
            enLocation: "Tangail Sadar",
            established: "২০১৪ সাল",
            enEstablished: "Established 2014",
            highlights: "এমবিবিএস ডিগ্রি প্রদানকারী বিশিষ্ট সরকারি চিকিৎসাবিদ্যা শিক্ষালয়।",
            enHighlights: "Government medical institute delivering accredited MBBS degrees with a modern 500-bed hospital complex.",
            website: "https://shmct.gov.bd"
        },
        {
            name: "মির্জাপুর ক্যাডেট কলেজ",
            enName: "Mirzapur Cadet College",
            type: "স্বনামধন্য সামরিক আবাসিক কলেজ",
            enType: "Prestigious Military Residential College",
            location: "মির্জাপুর, টাঙ্গাইল",
            enLocation: "Mirzapur, Tangail",
            established: "১৯৫৮ সাল",
            enEstablished: "Established 1958",
            highlights: "মেধা ও নেতৃত্বের উৎকর্ষ সাধনে দেশের শীর্ষ ক্যাডেট কলেজের অন্যতম।",
            enHighlights: "A premier national institution fostering rigorous academics, military discipline, and leadership excellence.",
            website: "https://mcc.army.mil.bd"
        },
        {
            name: "কুমুদিনী উইমেন্স মেডিকেল কলেজ",
            enName: "Kumudini Women's Medical College",
            type: "বেসরকারি মহিলা মেডিকেল কলেজ",
            enType: "Private Women's Medical College",
            location: "মির্জাপুর, টাঙ্গাইল",
            enLocation: "Mirzapur, Tangail",
            established: "২০০১ সাল",
            enEstablished: "Established 2001",
            highlights: "দেশি-বিদেশি ছাত্রীদের মানসম্মত চিকিৎসা শিক্ষাদানে আন্তর্জাতিক খ্যাতিসম্পন্ন।",
            enHighlights: "Internationally renowned for educating female physicians from Bangladesh, India, Nepal, and beyond.",
            website: "https://kumudini.org.bd"
        },
        {
            name: "বিন্দুবাসিনী সরকারি বালক উচ্চ বিদ্যালয়",
            enName: "Bindubashini Government Boys' High School",
            type: "ঐতিহ্যবাহী শতবর্ষী স্কুল",
            enType: "Historic Centenary Boys' School",
            location: "টাঙ্গাইল সদর",
            enLocation: "Tangail Sadar",
            established: "১৮৮০ সাল",
            enEstablished: "Established 1880",
            highlights: "জাতীয় পর্যায়ে বহুবার দেশসেরা মাধ্যমিক শিক্ষা প্রতিষ্ঠান হিসেবে স্বীকৃত।",
            enHighlights: "Repeatedly awarded the top secondary school nationwide for scholastic and extracurricular distinction.",
            website: ""
        },
        {
            name: "বিন্দুবাসিনী সরকারি বালিকা উচ্চ বিদ্যালয়",
            enName: "Bindubashini Government Girls' High School",
            type: "ঐতিহ্যবাহী শতবর্ষী বালিকা স্কুল",
            enType: "Historic Centenary Girls' School",
            location: "টাঙ্গাইল সদর",
            enLocation: "Tangail Sadar",
            established: "১৮৮২ সাল",
            enEstablished: "Established 1882",
            highlights: "নারী শিক্ষার আলোকবর্তিকা হিসেবে টাঙ্গাইলের শীর্ষস্থানীয় বালিকা বিদ্যালয়।",
            enHighlights: "A beacon of female empowerment and academic excellence in Tangail for more than 140 years.",
            website: ""
        },
        {
            name: "টাঙ্গাইল পলিটেকনিক ইনস্টিটিউট",
            enName: "Tangail Polytechnic Institute",
            type: "কারিগরি শিক্ষা প্রতিষ্ঠান",
            enType: "Government Polytechnic Institute",
            location: "দেওলা, টাঙ্গাইল সদর",
            enLocation: "Deola, Tangail Sadar",
            established: "১৯৯১ সাল",
            enEstablished: "Established 1991",
            highlights: "সিভিল, ইলেকট্রিক্যাল, কম্পিউটার, মেকানিক্যাল ও ইলেকট্রনিক্স টেকনোলজিতে ডিপ্লোমা ডিগ্রি।",
            enHighlights: "Delivering government-accredited 4-year engineering diplomas in Civil, Electrical, Computer, and Electronics.",
            website: "https://tpi.gov.bd"
        }
    ],

    famousPersonalities: [
        {
            name: "মওলানা আবদুল হামিদ খান ভাসানী",
            enName: "Mawlana Abdul Hamid Khan Bhashani",
            title: "মজলুম জননেতা",
            enTitle: "Leader of the Oppressed (Mojlum Jananeta)",
            desc: "ব্রিটিশ বিরোধী আন্দোলন, ১৯৫৭ সালের ঐতিহাসিক কাগমারী সম্মেলন ও স্বাধীনতা সংগ্রামের অন্যতম প্রধান কাণ্ডারী।",
            enDesc: "Titan of anti-colonial resistance, champion of rural peasantry, architect of the historic 1957 Kagmari Conference, and foundational leader in Bangladesh's independence struggle."
        },
        {
            name: "দানবীর রণদা প্রসাদ সাহা (আর পি সাহা)",
            enName: "Danobir Ranada Prasad Saha (R.P. Saha)",
            title: "সমাজসেবক ও শিক্ষানুরাগী",
            enTitle: "Great Philanthropist & Social Reformer",
            desc: "কুমুদিনী হাসপাতাল, ভারতেশ্বরী হোমস ও অসংখ্য জনহিতকর প্রতিষ্ঠানের প্রতিষ্ঠাতা মহৎ ব্যক্তিত্ব।",
            enDesc: "Founder of Kumudini Hospital, Bharateswari Homes, and Kumudini Welfare Trust, who devoted immense personal wealth to free healthcare and female education."
        },
        {
            name: "বঙ্গবীর আব্দুল কাদের সিদ্দিকী (বীর উত্তম)",
            enName: "Bangabir Abdul Kader Siddique (Bir Uttam)",
            title: "মুক্তিযুদ্ধকালীন কাদেরিয়া বাহিনীর প্রধান",
            enTitle: "Commander of Kaderia Bahini (1971)",
            desc: "১৯৭১ সালের মহান মুক্তিযুদ্ধে টাঙ্গাইলে গঠিত কাদেরিয়া বাহিনীর মাধ্যমে হানাদারদের বিরুদ্ধে বীরোচিত নেতৃত্ব প্রদান করেন।",
            enDesc: "Legendary guerrilla supreme commander of the 17,000-strong Kaderia Bahini, who liberated vast swathes of Tangail and surrounding regions in the 1971 war."
        },
        {
            name: "নওয়াব সৈয়দ নওয়াব আলী চৌধুরী",
            enName: "Nawab Syed Nawab Ali Chowdhury",
            title: "রাজনীতিবিদ ও শিক্ষানুরাগী",
            enTitle: "Co-Founder of Dhaka University & Statesman",
            desc: "ঢাকা বিশ্ববিদ্যালয় প্রতিষ্ঠার অন্যতম অগ্রদূত ও অবিভক্ত বাংলার প্রথম মুসলিম মন্ত্রী।",
            enDesc: "Pioneer behind the establishment of the University of Dhaka (1921) and the first Muslim minister in undivided Bengal."
        },
        {
            name: "প্রিন্সিপাল ইব্রাহীম খাঁ",
            enName: "Principal Ibrahim Khan",
            title: "বিশিষ্ট সাহিত্যিক ও শিক্ষাবিদ",
            enTitle: "Eminent Educationist & Playwright",
            desc: "করটিয়া সা'দত কলেজের প্রতিষ্ঠাতা অধ্যক্ষ ও বিশিষ্ট নাট্যকার-প্রাবন্ধিক।",
            enDesc: "Founding principal of Saadat College, prominent scholar, member of the constituent assembly, and celebrated author."
        },
        {
            name: "বিচারপতি আবু সাঈদ চৌধুরী",
            enName: "Justice Abu Sayeed Chowdhury",
            title: "সাবেক রাষ্ট্রপতি ও কূটনীতিক",
            enTitle: "Second President of Bangladesh & Diplomat",
            desc: "১৯৭১ সালে মুক্তিযুদ্ধের আন্তর্জাতিক সমর্থক ও স্বাধীন বাংলাদেশের দ্বিতীয় রাষ্ট্রপতি।",
            enDesc: "Special diplomatic envoy of Bangladesh's provisional government in 1971, mobilizing world opinion, and second President of Bangladesh."
        }
    ],

    jobsAndNotices: [
        {
            id: "job-1",
            title: "টাঙ্গাইল জেলা প্রশাসকের কার্যালয়ে বিভিন্ন পদে জনবল নিয়োগ",
            enTitle: "Recruitment of Staff at Tangail Deputy Commissioner's Office",
            organization: "জেলা প্রশাসকের কার্যালয়, টাঙ্গাইল",
            enOrganization: "Office of the Deputy Commissioner, Tangail",
            deadline: "চলমান বিজ্ঞপ্তি",
            enDeadline: "Active Circular",
            category: "সরকারি চাকরি",
            enCategory: "Government Service",
            link: "https://tangail.gov.bd"
        },
        {
            id: "job-2",
            title: "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে শিক্ষক ও কর্মকর্তা নিয়োগ",
            enTitle: "Faculty & Officer Recruitment at MBSTU",
            organization: "এমবিএসটিইউ (MBSTU)",
            enOrganization: "MBSTU University Authority",
            deadline: "বিশ্ববিদ্যালয় ওয়েবসাইট দেখুন",
            enDeadline: "Check University Portal",
            category: "বিশ্ববিদ্যালয় / শিক্ষা",
            enCategory: "University / Academic",
            link: "https://mbstu.ac.bd"
        },
        {
            id: "job-3",
            title: "কুমুদিনী কমপ্লেক্স ও হাসপাতালে নার্স এবং মেডিকেল টেকনোলজিস্ট নিয়োগ",
            enTitle: "Nurses & Medical Technologists Recruitment at Kumudini Complex",
            organization: "কুমুদিনী ওয়েলফেয়ার ট্রাস্ট",
            enOrganization: "Kumudini Welfare Trust",
            deadline: "নিয়মিত ওয়াক-ইন ও বিজ্ঞপ্তি",
            enDeadline: "Regular Walk-in & Circular",
            category: "স্বাস্থ্যসেবা",
            enCategory: "Healthcare Services",
            link: "https://kumudini.org.bd"
        },
        {
            id: "job-4",
            title: "টাঙ্গাইল পল্লী বিদ্যুৎ সমিতি মিটার রিডার ও লাইনম্যান নিয়োগ",
            enTitle: "Meter Readers & Linemen Recruitment at Tangail PBS",
            organization: "টাঙ্গাইল পল্লী বিদ্যুৎ সমিতি",
            enOrganization: "Tangail Palli Bidyut Samity",
            deadline: "অফিসিয়াল সার্কুলার অনুযায়ী",
            enDeadline: "As per Official Circular",
            category: "বিদ্যুৎ বিভাগ",
            enCategory: "Power Utility",
            link: "https://reb.tangail.gov.bd"
        }
    ],

    temples: [
        {
            id: "boro-kali-bari",
            name: "শ্রী শ্রী বড় কালী বাড়ি",
            enName: "Shree Shree Boro Kali Bari Temple",
            upazila: "টাঙ্গাইল সদর",
            enUpazila: "Tangail Sadar",
            location: "কালী বাড়ি রোড, টাঙ্গাইল শহর",
            enLocation: "Kali Bari Road, Tangail Town",
            established: "১৮৬৮ সালে প্রতিষ্ঠিত (১৫০+ বছরের প্রাচীন)",
            enEstablished: "Established in 1868 (150+ Years Old)",
            significance: "টাঙ্গাইল শহরের প্রধান কেন্দ্রীয় কালী মন্দির ও বৃহত্তম মিলনমেলা কেন্দ্র।",
            enSignificance: "Central historical Kali temple of Tangail and premier sacred pilgrimage hub.",
            details: "টাঙ্গাইল শহরের প্রাণকেন্দ্রে অবস্থিত শ্রী শ্রী বড় কালী বাড়ি দেড় শতাব্দীরও অধিক সময় ধরে এই অঞ্চলের ঐতিহ্য ও সনাতন ধর্মাবলম্বীদের প্রধান তীর্থস্থান। প্রতি বছর কার্তিক মাসের অমাবস্যা তিথিতে মহাসমারোহে শ্যামাপূজা (কালীপূজা) ও বিশাল মেলা অনুষ্ঠিত হয়। এছাড়া শারদীয় দুর্গাপূজা ও বাসন্তী পূজায় হাজারো ভক্তের পদচারণায় মুখরিত হয় এই প্রাঙ্গণ।",
            enDetails: "Located in the heart of Tangail town for over 150 years, celebrated for its grandeur during Shyama Puja (Kali Puja), historic fair, Durga Puja, and community charity.",
            features: ["শতবর্ষী নাটমন্দির ও জাগ্রত বিগ্রহ", "ঐতিহাসিক শ্যামাপূজা ও বার্ষিক মেলা", "ধর্মীয় ও সামাজিক জনকল্যাণমূলক কার্যক্রম"],
            enFeatures: ["Century-old Natmandir & Sacred Deity", "Historic Annual Shyama Puja Fair", "Social Welfare & Food Distribution"],
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Boro Kali Bari, Tangail"
        },
        {
            id: "joykali-mandir",
            name: "শ্রী শ্রী জয়কালী মন্দির",
            enName: "Shree Shree Joykali Mandir",
            upazila: "টাঙ্গাইল সদর",
            enUpazila: "Tangail Sadar",
            location: "পাঁচআনি বাজার, টাঙ্গাইল",
            enLocation: "Panchani Bazar, Tangail",
            established: "প্রাচীন ঐতিহাসিক মন্দির",
            enEstablished: "Ancient Heritage Temple",
            significance: "পাঁচআনি বাজারের শতবর্ষী জাগ্রত কালী মন্দির, যার নামানুসারে বিখ্যাত জয়কালী মিষ্টান্ন ভান্ডারের উৎপত্তি।",
            enSignificance: "Centuries-old revered shrine in Panchani Bazar, inspiring the famous Joykali Confectionery.",
            details: "টাঙ্গাইল শহরের ঐতিহ্যবাহী পাঁচআনি বাজারে অবস্থিত শ্রী শ্রী জয়কালী মন্দির। এই মন্দিরের পবিত্র আঙিনাকে কেন্দ্র করেই গড়ে উঠেছে টাঙ্গাইলের বিশ্বখ্যাত চমচমের বাজার। স্থানীয় মিষ্টির কারিগর ও ব্যবসায়ীরা প্রতিদিন এই মন্দিরে পূজা দিয়ে ব্যবসায়িক কার্যক্রম শুরু করেন।",
            enDetails: "Located in the sweet hub of Panchani Bazar, where local sweetmakers and artisans pray daily before opening business.",
            features: ["জাগ্রত কালী বিগ্রহ", "প্রতিদিন সকাল-সন্ধ্যা আরতি ও পূজা", "পাঁচআনি বাজারের ঐতিহাসিক ঐতিহ্য"],
            enFeatures: ["Sacred Kali Deity", "Daily Morning & Evening Aarti", "Heart of Sweetmaker Heritage"],
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Joykali Mandir, Pachani Bazar, Tangail"
        },
        {
            id: "baro-shibaloy-mandir",
            name: "উপেন্দ্র সরোবর বারো শিবালয় মন্দির",
            enName: "Upendra Sarobar 12 Shibaloy Temples",
            upazila: "নাগরপুর",
            enUpazila: "Nagarpur",
            location: "নাগরপুর সদর, টাঙ্গাইল",
            enLocation: "Nagarpur Sadar, Tangail",
            established: "১৯ শতকের শেষভাগ",
            enEstablished: "Late 19th Century",
            significance: "উপেন্দ্র সরোবরের চারপাশে সারিবদ্ধভাবে অবস্থিত ১২টি দৃষ্টিনন্দন প্রাচীন শিব মন্দির।",
            enSignificance: "A series of 12 ancient terracotta Shiva temples aligned on the banks of Upendra Sarobar lake.",
            details: "নাগরপুরের প্রখ্যাত জমিদার উপেন্দ্র নারায়ণ চৌধুরীর স্মৃতিধন্য সুবিশাল উপেন্দ্র সরোবর (দীঘি)-র পাড়ে অবস্থিত এই ঐতিহাসিক বারো শিবালয়। এখানে একই স্থাপত্যরীতির ১২টি শিব মন্দির নির্মাণ করা হয়েছিল যা প্রাচীন বঙ্গীয় মন্দির স্থাপত্যের এক অনুপম নিদর্শন। মহাশিবরাত্রিতে এখানে বিশেষ পূজা ও ভক্ত সমাগম ঘটে।",
            enDetails: "Constructed by Zamindar Upendra Narayan Chowdhury, showcasing 12 identical classical Bengali Shiva temples with terracotta embellishments.",
            features: ["১২টি সারিবদ্ধ প্রাচীন শিব মন্দির", "সুবিশাল উপেন্দ্র সরোবর দীঘি", "প্রাচীন পোড়ামাটির শিল্প ও খিলান"],
            enFeatures: ["12 Aligned Ancient Shiva Temples", "Vast Upendra Sarobar Lake", "Terracotta Carvings & Arches"],
            image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Baro Shibaloy, Upendra Sarobar, Nagarpur, Tangail"
        },
        {
            id: "santosh-jahnavi-mandir",
            name: "সন্তোষ জাহ্নবী মহাশ্মশান ও শ্মশান কালী মন্দির",
            enName: "Santosh Jahnavi Shamshan & Kali Mandir",
            upazila: "টাঙ্গাইল সদর",
            enUpazila: "Tangail Sadar",
            location: "সন্তোষ, টাঙ্গাইল",
            enLocation: "Santosh, Tangail",
            established: "১৯ শতক",
            enEstablished: "19th Century",
            significance: "দানশীলা জাহ্নবী চৌধুরানীর দানকৃত জমিতে প্রতিষ্ঠিত ঐতিহাসিক মহাশ্মশান ও কালী মন্দির।",
            enSignificance: "Historic sacred shrine and cremation grounds endowed by philanthropist Jahnavi Chowdhurani.",
            details: "সন্তোষের জমিদার জাহ্নবী চৌধুরানীর স্মৃতিবিজড়িত লৌকিক ও আধ্যাত্মিক স্থান। এখানে অবস্থিত শ্মশান কালী মন্দিরটি অত্যন্ত প্রাচীন ও ভক্তদের কাছে এক পবিত্র ধাম হিসেবে পরিগণিত। প্রতি বছর দীপাবলিতে প্রদীপ প্রজ্বালন উৎসব অনুষ্ঠিত হয়।",
            enDetails: "Situated on the banks of the Louhajang River, renowned for peaceful surroundings and annual Diwali lantern illumination festival.",
            features: ["ঐতিহাসিক শ্মশান কালী মন্দির", "লৌহজং নদী তীরবর্তী শান্ত পরিবেশ", "বার্ষিক দীপাবলি ও শ্যামাপূজা"],
            enFeatures: ["Historic Kali Shrine", "Serene Louhajang Riverfront", "Annual Diwali & Shyama Puja"],
            image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Santosh Jahnavi Mandir, Tangail"
        },
        {
            id: "pakutia-radhagobinda-mandir",
            name: "পাকুটিয়া রাধাগোবিন্দ জিউ মন্দির",
            enName: "Pakutia Radhagobinda Jiu Temple",
            upazila: "নাগরপুর",
            enUpazila: "Nagarpur",
            location: "পাকুটিয়া জমিদার বাড়ি কমপ্লেক্স, নাগরপুর",
            enLocation: "Pakutia Palace Complex, Nagarpur",
            established: "১৯১৫ সাল",
            enEstablished: "Established 1915",
            significance: "পাকুটিয়া জমিদার বাড়ি কমপ্লেক্সে অবস্থিত অসাধারণ কারুকার্যময় শতাব্দী প্রাচীন মন্দির।",
            enSignificance: "Magnificently crafted century-old temple nestled inside the Pakutia Palace estate.",
            details: "রামকৃষ্ণ সাহা পোদ্দার নির্মিত পাকুটিয়া জমিদার বাড়ির তিনটি সুরম্য প্রাসাদের অভ্যন্তরে রাধাগোবিন্দ জিউর মন্দিরটি প্রতিষ্ঠিত। নাটমন্দির ও মন্দিরের দেয়ালে ইউরোপীয় ক্লাসিক্যাল ও সনাতন শিল্পের অপূর্ব সংমিশ্রণ দেখতে পাওয়া যায়।",
            enDetails: "Constructed within the neoclassical Pakutia Palace by Ramkrishna Saha Poddar, celebrated for Dolyatra and Jhulan celebrations.",
            features: ["রাধাগোবিন্দ বিগ্রহ", "দৃষ্টিনন্দন ইউরোপীয় ও দেশীয় স্থাপত্যশৈলী", "ঝুলনযাত্রা ও দোল উৎসব"],
            enFeatures: ["Radhagobinda Idol", "Greco-Roman & Bengali Blend", "Annual Jhulan & Holi Festivals"],
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Pakutia Radhagobinda Mandir, Nagarpur, Tangail"
        },
        {
            id: "kumudini-mandir-complex",
            name: "মির্জাপুর কুমুদিনী নাটমন্দির ও কালী মন্দির",
            enName: "Mirzapur Kumudini Natmandir & Kali Temple",
            upazila: "মির্জাপুর",
            enUpazila: "Mirzapur",
            location: "কুমুদিনী কমপ্লেক্স, মির্জাপুর",
            enLocation: "Kumudini Complex, Mirzapur",
            established: "১৯৩৮ সাল",
            enEstablished: "Established 1938",
            significance: "দানবীর রণদা প্রসাদ সাহা (আর পি সাহা) প্রতিষ্ঠিত সুবিশাল নাটমন্দির ও দেশের অন্যতম শীর্ষ দুর্গোৎসব প্রাঙ্গণ।",
            enSignificance: "Premier national Durga Puja festival venue founded by philanthropist R.P. Saha.",
            details: "মির্জাপুরের লৌহজং নদীর তীরে কুমুদিনী ওয়েলফেয়ার ট্রাস্টের অভ্যন্তরে অবস্থিত। এই মন্দিরে প্রতি বছর দুর্গাপূজা উপলক্ষে বাংলাদেশের অন্যতম বৃহৎ ও রাজকীয় ধর্মীয় উৎসব অনুষ্ঠিত হয়, যেখানে দেশ-বিদেশের বিশিষ্ট ব্যক্তিবর্গ আগমন করেন এবং আর পি সাহার মানবসেবার আদর্শ উদ্ভাসিত হয়।",
            enDetails: "Located inside Kumudini Complex along the Louhajang River, hosting Bangladesh's most majestic Durga Puja celebrations with communal harmony.",
            features: ["বিশাল নাটমন্দির ও সুরম্য আঙিনা", "ঐতিহ্যবাহী প্রতিমা বিসর্জন ঘাট", "শত শত বছরের সাম্প্রদায়িক সম্প্রীতির স্মারক"],
            enFeatures: ["Grand Natmandir Courtyard", "Scenic Immersion Ghat on River", "Symbol of Inter-religious Harmony"],
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Kumudini Mandir, Mirzapur, Tangail"
        },
        {
            id: "mohera-zamindar-temples",
            name: "মহেরা জমিদার বাড়ি মন্দির কমপ্লেক্স",
            enName: "Mohera Palace Temple Complex",
            upazila: "মির্জাপুর",
            enUpazila: "Mirzapur",
            location: "মহেরা, মির্জাপুর, টাঙ্গাইল",
            enLocation: "Mohera, Mirzapur, Tangail",
            established: "১৮৯০ সাল",
            enEstablished: "Established 1890",
            significance: "মহেরা জমিদার পরিবারের নিজস্ব পূজার জন্য নির্মিত প্রাচীন শিব ও কালী মন্দির।",
            enSignificance: "Private royal Shiva and Kali temples built for the zamindar family.",
            details: "মহেরা জমিদার বাড়ির মহারাজ লজ ও বিশাখা সাগরের পাশেই অবস্থিত এই মন্দিরগুলো। জমিদার কালীচরণ সাহা ও আনন্দ সাহার প্রতিষ্ঠিত এই মন্দিরগুলোর প্রাচীন কারুকাজ ও টেরাকোটা অলংকরণ পর্যটকদের বিশেষভাবে আকর্ষণ করে।",
            enDetails: "Situated adjacent to Maharaj Lodge and Bishakha Sagar lake, featuring ornate terracotta artwork and stone lingams.",
            features: ["প্রাচীন শিব লিঙ্গ ও কালী মন্দির", "বিশাখা সাগর দীঘির মনোরম সান্নিধ্য", "হেরিটেজ স্থাপত্য"],
            enFeatures: ["Ancient Shiva & Kali Shrines", "Bishakha Sagar Lake Views", "Heritage Architecture"],
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Mohera Zamindar Bari Temple, Tangail"
        },
        {
            id: "delduar-radhagobinda-mandir",
            name: "দেলদুয়ার শ্রী শ্রী রাধাগোবিন্দ জিউ মন্দির",
            enName: "Delduar Radhagobinda Jiu Temple",
            upazila: "দেলদুয়ার",
            enUpazila: "Delduar",
            location: "দেলদুয়ার বাজার, টাঙ্গাইল",
            enLocation: "Delduar Bazar, Tangail",
            established: "শতবর্ষী প্রাচীন মন্দির",
            enEstablished: "Century-Old Heritage Temple",
            significance: "দেলদুয়ারের প্রাচীন বৈষ্ণব তীর্থ ও ঐতিহ্যবাহী রাস উৎসবের কেন্দ্রস্থল।",
            enSignificance: "Ancient Vaishnava pilgrimage center and epicentre of the famous Rash Yatra festival.",
            details: "শ্রী শ্রী রাধাগোবিন্দ জিউর এই মন্দিরে প্রতি বছর রাস পূর্ণিমা ও জন্মাষ্টমীতে ভক্তদের বিপুল সমাবেশ ঘটে। মন্দিরে প্রতিদিন ভোগরাগ ও নামসংকীর্তনের আয়োজন রয়েছে।",
            enDetails: "Famous for annual Rash Purnima celebrations, Janmashtami gatherings, daily prasad offerings, and devotional kirtan.",
            features: ["রাধাগোবিন্দ জিউর যুগল বিগ্রহ", "বাৎসরিক ঐতিহ্যবাহী রাসমেলা", "নিত্য পূজা ও অন্নপ্রসাদ বিতরণ"],
            enFeatures: ["Sacred Radha-Govinda Deities", "Annual Historic Rash Mela", "Daily Prasad Offerings"],
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Delduar Radhagobinda Mandir, Tangail"
        },
        {
            id: "elenga-shib-mandir",
            name: "কালিহাতী এলেঙ্গা প্রাচীন শিব মন্দির",
            enName: "Elenga Ancient Shiva Temple",
            upazila: "কালিহাতী",
            enUpazila: "Kalihati",
            location: "এলেঙ্গা, কালিহাতী",
            enLocation: "Elenga, Kalihati",
            established: "প্রাচীন আমল",
            enEstablished: "Ancient Heritage Era",
            significance: "এলেঙ্গার জমিদার বাড়ির নিকটস্থ শতবর্ষী ঐতিহাসিক শিব মন্দির।",
            enSignificance: "Historic Shiva sanctuary located near the former Elenga zamindar residence.",
            details: "কালিহাতীর এলেঙ্গায় অবস্থিত প্রাচীন এই শিব মন্দিরে বহু দূর-দূরান্ত থেকে ভক্তরা শিবের মাথায় জল ঢালতে আসেন। মহাশিবরাত্রি উপলক্ষে এখানে মেলা ও বিশেষ পূজা অনুষ্ঠিত হয়।",
            enDetails: "Devotees congregate from all around on Maha Shivaratri to offer sacred water; famous for traditional village fairs.",
            features: ["প্রাচীন শিবলিঙ্গ", "শিবরাত্রি উৎসব ও ভক্ত সমাগম", "ঐতিহাসিক পরিবেশ"],
            enFeatures: ["Ancient Shiva Lingam", "Maha Shivaratri Pilgrimage", "Serene Rural Heritage"],
            image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Elenga Shib Mandir, Kalihati, Tangail"
        },
        {
            id: "korotia-ramakrishna-ashram",
            name: "করটিয়া রামকৃষ্ণ সেবাশ্রম ও মন্দির",
            enName: "Korotia Ramakrishna Ashram & Temple",
            upazila: "টাঙ্গাইল সদর",
            enUpazila: "Tangail Sadar",
            location: "করটিয়া, টাঙ্গাইল",
            enLocation: "Korotia, Tangail",
            established: "বিংশ শতাব্দী",
            enEstablished: "20th Century",
            significance: "শ্রী রামকৃষ্ণ পরমহংসদেব ও স্বামী বিবেকানন্দের ভাবাদর্শে পরিচালিত আধ্যাত্মিক কেন্দ্র।",
            enSignificance: "Spiritual sanctuary inspired by the ideals of Sri Ramakrishna and Swami Vivekananda.",
            details: "করটিয়া সা'দত কলেজের নিকটবর্তী শান্ত-সুনিবিড় পরিবেশে অবস্থিত রামকৃষ্ণ সেবাশ্রম ও মন্দির। এখানে নিয়মিত প্রার্থনা, শ্রীশ্রীরামকৃষ্ণ কথামৃত পাঠ ও সমাজসেবামূলক কর্মকাণ্ড পরিচালিত হয়।",
            enDetails: "Located in a serene setting near Saadat College, conducting regular prayer, discourse, and humanitarian charity.",
            features: ["শ্রী রামকৃষ্ণ ভাবমন্দির", "দরিদ্র সেবা ও শিক্ষামূলক সহায়তা", "বার্ষিক তিথি উৎসব"],
            enFeatures: ["Universal Prayer Hall", "Humanitarian Relief & Education", "Annual Tithi Celebrations"],
            image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
            mapQuery: "Korotia Ramakrishna Ashram, Tangail"
        }
    ],

    famousSweets: [
        {
            id: "porabari-chomchom-origin",
            name: "পোড়াবাড়ির আসল চমচম (মিষ্টির রাজা)",
            enName: "Original Porabari Chomchom (King of Sweets)",
            shopType: "ঐতিহাসিক মিষ্টি ও জিআই ঐতিহ্য",
            enShopType: "Historic GI Sweet Heritage",
            location: "পোড়াবাড়ি বাজার ও পাঁচআনি বাজার, টাঙ্গাইল",
            enLocation: "Porabari Bazar & Panchani Bazar, Tangail",
            history: "অষ্টাদশ শতকের গোড়ার দিকে আসাম থেকে আগত দশরথ গৌড় পোড়াবাড়িতে প্রথম এই চমচম তৈরি করেন। পরবর্তীতে রামদয়াল গৌড় ও অন্যান্য কারিগরদের হাত ধরে এর স্বাদ বিশ্বজুড়ে সমাদৃত হয়।",
            enHistory: "Pioneered in the early 19th century by Dasharath Gour in Porabari using pure cow milk chhana and Dhaleshwari river water.",
            speciality: "ধলেশ্বরী নদীর মিষ্টি পানি ও খাঁটি গাভীর দুধের তৈরি ছানা। ভেতরে নরম রসে টইটম্বুর, বাইরে ঘন পোড়া মাওয়া ও চিনির প্রলেপ। এর হালকা পোড়া বাদামী আভা এবং অতুলনীয় স্বাদ মুখে দিলেই মিলিয়ে যায়।",
            enSpeciality: "Melt-in-mouth soft core soaked in syrup, wrapped in caramelized mawa with golden-brown crust. 100% natural pure ingredients.",
            famousItems: ["পোড়াবাড়ির আসল চমচম", "মাওয়া চমচম", "রসকদম্ব", "লেডিকেনি"],
            enFamousItems: ["Original Porabari Chomchom", "Mawa Chomchom", "Roshkodom", "Ledikeni"],
            priceRange: "৩৫০ - ৫৫০ টাকা / কেজি",
            enPriceRange: "350 - 550 BDT / kg",
            bestPlaces: "পোড়াবাড়ি বাজার মূল ঘাট ও টাঙ্গাইল পাঁচআনি বাজার",
            enBestPlaces: "Porabari Bazar Ghat & Panchani Bazar, Tangail",
            phone: "০১৭১২-০৮৭০০১",
            enPhone: "01712-087001",
            image: "images/porabari_chomchom.jpg",
            mapQuery: "Porabari Bazar, Tangail"
        },
        {
            id: "joykali-mishtanna-bhandar",
            name: "শ্রী শ্রী জয়কালী মিষ্টান্ন ভান্ডার",
            enName: "Shree Shree Joykali Confectionery",
            shopType: "শতবর্ষী ঐতিহ্যবাহী মিষ্টির দোকান",
            enShopType: "Centenary Heritage Sweet Shop",
            location: "পাঁচআনি বাজার, টাঙ্গাইল সদর",
            enLocation: "Panchani Bazar, Tangail Sadar",
            history: "পাঁচআনি বাজারের শ্রী শ্রী জয়কালী মন্দিরের কাছে অবস্থিত টাঙ্গাইল শহরের সবচেয়ে প্রাচীন ও ঐতিহ্যবাহী মিষ্টির দোকানগুলোর অন্যতম। টাঙ্গাইলে আসা পর্যটক, ভিআইপি ও স্থানীয়দের কাছে আসল পোড়াবাড়ির চমচম কেনার প্রধান ভরসা।",
            enHistory: "Located near Joykali Temple, this century-old establishment is the top trusted destination for authentic fresh Porabari Chomchom.",
            speciality: "শতভাগ খাঁটি গাভীর দুধের ছানা দিয়ে তৈরি নরম তুলতুলে চমচম। এদের মিষ্টিতে কোনো ভেজাল বা কৃত্রিম রঙ ব্যবহার করা হয় না। গরম গরম টাটকা চমচম পরিবেশনের জন্য এটি সুপরিচিত।",
            enSpeciality: "100% pure cow-milk chhana, prepared fresh without artificial colors or preservatives. Renowned for serving piping-hot delicacies.",
            famousItems: ["স্পেশাল পোড়াবাড়ির চমচম", "ছানার জিলাপি", "রসকদম্ব", "ক্ষীরমোহন", "ঘিয়ে ভাজা ছানার মিষ্টি"],
            enFamousItems: ["Special Porabari Chomchom", "Chhana Jilapi", "Roshkodom", "Kheer-Mohon", "Ghee Fried Chhana Sweet"],
            priceRange: "৪০০ - ৬০০ টাকা / কেজি",
            enPriceRange: "400 - 600 BDT / kg",
            bestPlaces: "পাঁচআনি বাজার মিষ্টি পট্টি, টাঙ্গাইল",
            enBestPlaces: "Panchani Bazar Sweet Street, Tangail",
            phone: "০১৭১১-৩৮২৬০৪",
            enPhone: "01711-382604",
            image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
            mapQuery: "Joykali Mishtanna Bhandar, Pachani Bazar, Tangail"
        },
        {
            id: "gopal-mishtanna-bhandar",
            name: "গোপাল মিষ্টান্ন ভান্ডার",
            enName: "Gopal Confectionery",
            shopType: "ঐতিহ্যের বিশ্বস্ত মিষ্টি প্রতিষ্ঠান",
            enShopType: "Trusted Heritage Confectionery",
            location: "পাঁচআনি বাজার, মিষ্টি পট্টি, টাঙ্গাইল",
            enLocation: "Panchani Bazar, Tangail Sadar",
            history: "বহু দশকের পুরনো ও বিশ্বস্ত মিষ্টির দোকান। কারিগরদের নিজস্ব তত্ত্বাবধানে আসল পোড়াবাড়ির চমচমের স্বাদ অক্ষুণ্ন রেখে বংশপরম্পরায় মিষ্টি তৈরি করে আসছে।",
            enHistory: "Decades-old family confectionery preserving ancestral recipes of authentic Porabari Chomchom with strict quality control.",
            speciality: "মাওয়ার নিখুঁত আবরণ ও মিষ্টির ভেতরটা রসে ভরপুর নরম। মুখে দিলে এলাচ ও খাঁটি গাভীর দুধের মাওয়ার চমৎকার সুবাস অনুভূত হয়।",
            enSpeciality: "Delicate mawa coating with intensely juicy core, infused with cardamom fragrance and pure dairy creaminess.",
            famousItems: ["খাঁটি পোড়াবাড়ির চমচম", "রসগোল্লা", "বালুসাই", "কালোজাম", "স্পেশাল প্যাঁড়া সন্দেশ"],
            enFamousItems: ["Pure Porabari Chomchom", "Roshogolla", "Balushai", "Kalojam", "Special Peda Sondesh"],
            priceRange: "৩৮০ - ৫০০ টাকা / কেজি",
            enPriceRange: "380 - 500 BDT / kg",
            bestPlaces: "পাঁচআনি বাজার, টাঙ্গাইল সদর",
            enBestPlaces: "Panchani Bazar, Tangail Sadar",
            phone: "০১৭১২-১৮৪৫৯২",
            enPhone: "01712-184592",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
            mapQuery: "Gopal Mishtanna Bhandar, Tangail"
        },
        {
            id: "phoni-mishtanna-bhandar",
            name: "ফণী মিষ্টান্ন ভান্ডার",
            enName: "Phoni Confectionery",
            shopType: "প্রসিদ্ধ আদি মিষ্টির দোকান",
            enShopType: "Famous Antique Sweet House",
            location: "পাঁচআনি বাজার, টাঙ্গাইল",
            enLocation: "Panchani Bazar, Tangail",
            history: "টাঙ্গাইলের পাঁচআনি বাজারের আরেক সুপরিচিত প্রাচীন মিষ্টি প্রতিষ্ঠান। যুগ যুগ ধরে গুণগত মান বজায় রেখে মিষ্টিপ্রেমীদের সেবা দিয়ে আসছে।",
            enHistory: "A legendary establishment in Panchani Bazar renowned for generations of consistency in artisanal sweetmaking.",
            speciality: "ঐতিহ্যবাহী সনাতন পদ্ধতিতে বড় কড়াইয়ে ধীর আঁচে ফুটন্ত চিনির রসে তৈরি করা হয় পোড়াবাড়ির লালচে চমচম। মিষ্টির দীর্ঘস্থায়িত্ব ও সুস্বাদের জন্য বিখ্যাত।",
            enSpeciality: "Slow-simmered in large brass cauldrons in sugar syrup, resulting in a rich reddish tint and remarkable shelf-life.",
            famousItems: ["আসল পোড়াবাড়ির চমচম", "ক্ষীরভোগ", "ছানার সন্দেশ", "স্পেশাল মিষ্টি দই"],
            enFamousItems: ["Authentic Porabari Chomchom", "Kheerbhog", "Chhana Sondesh", "Special Sweet Yogurt"],
            priceRange: "৩৬০ - ৪৮০ টাকা / কেজি",
            enPriceRange: "360 - 480 BDT / kg",
            bestPlaces: "পাঁচআনি বাজার, টাঙ্গাইল সদর",
            enBestPlaces: "Panchani Bazar, Tangail Sadar",
            phone: "০১৭১২-৫৯৮৪৪০",
            enPhone: "01712-598440",
            image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
            mapQuery: "Phoni Mishtanna Bhandar, Tangail"
        },
        {
            id: "intu-tube-doi",
            name: "ইনটু মিষ্টান্ন ভান্ডার ও ইনটুর টিউব দই",
            enName: "Intu Confectionery & Viral Tube Yogurt",
            shopType: "উদ্ভাবনী মিষ্টি ও জনপ্রিয় টিউব দই",
            enShopType: "Innovative Sweets & Tube Yogurt",
            location: "টাঙ্গাইল শহর (পুরাতন বাসস্ট্যান্ড ও নিরালা মোড় এলাকা)",
            enLocation: "Tangail Town (Old Bus Stand & Nirala Mor)",
            history: "টাঙ্গাইলের মিষ্টির ঐতিহ্যে ইনটু মিষ্টান্ন ভান্ডার নিয়ে এসেছে এক যুগান্তকারী ও আধুনিক উদ্ভাবন — 'টিউব দই' (Tube Doi/Yogurt)। দূরপাল্লার ভ্রমণকারী, শিশু ও মিষ্টিপ্রেমীদের মাঝে এটি তুমুল জনপ্রিয়।",
            enHistory: "Created the viral and widely acclaimed innovation of premium creamy yogurt packed in hygienic squeeze tubes for easy on-the-go enjoyment.",
            speciality: "বিশেষ ফুড-গ্রেড প্লাস্টিক টিউবে প্যাক করা প্রিমিয়াম স্বাদের সুস্বাদু ক্ষীরসা দই। চামচ ছাড়াই সহজে টিউব চেপে খাওয়া যায়। এটি বহন করা সহজ, নষ্ট হয় না এবং উপহারের জন্য চমৎকার। পাশাপাশি এদের তৈরি চমচম ও মালাই চমচমও দারুণ সুস্বাদু।",
            enSpeciality: "Premium kheer yogurt sealed in food-grade tubes, edible anywhere without spoons. Mess-free, durable, and an iconic souvenir from Tangail.",
            famousItems: ["ইনটুর বিখ্যাত টিউব দই", "হালকা মিষ্টির ক্ষীর দই", "স্পেশাল চমচম", "মালাই চমচম"],
            enFamousItems: ["Intu's Famous Tube Yogurt", "Kheer Shahi Yogurt", "Special Chomchom", "Malai Chomchom"],
            priceRange: "টিউব দই: ৫০-১০০ টাকা/পিস, চমচম: ৪০০-৫২০ টাকা/কেজি",
            enPriceRange: "Tube Yogurt: 50-100 BDT/pc, Chomchom: 400-520 BDT/kg",
            bestPlaces: "ইনটু মিষ্টান্ন ভান্ডার, টাঙ্গাইল",
            enBestPlaces: "Intu Mishtanna Bhandar, Tangail Town",
            phone: "০১৭১৫-২০৯৪২০",
            enPhone: "01715-209420",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
            mapQuery: "Intu Mishtanna Bhandar, Tangail"
        },
        {
            id: "misti-mela-nirala",
            name: "মিষ্টি মেলা ও খোকা মিষ্টান্ন ভান্ডার",
            enName: "Misti Mela & Khoka Confectionery",
            shopType: "জনপ্রিয় আধুনিক ও ঐতিহ্যবাহী শপ",
            enShopType: "Popular Modern & Heritage Shop",
            location: "নিরালা মোড় ও পুরাতন বাসস্ট্যান্ড, টাঙ্গাইল",
            enLocation: "Nirala Mor & Old Bus Stand, Tangail",
            history: "টাঙ্গাইলের প্রধান প্রাণকেন্দ্র নিরালা মোড় ও বাসস্ট্যান্ড সংলগ্ন আধুনিক সুযোগ-সুবিধাসম্পন্ন মিষ্টির দোকান। যারা যাতায়াতের পথে সহজে মিষ্টি কিনতে চান তাদের জন্য আদর্শ।",
            enHistory: "Centrally positioned at Nirala Mor for commuter convenience, providing authentic sweets with premium gift-packaging.",
            speciality: "টাটকা চমচমের পাশাপাশি সুস্বাদু মিষ্টি দই, কাঁচাগোল্লা, ক্ষীরকদম ও আকর্ষণীয় গিফট প্যাকেজিং।",
            enSpeciality: "Fresh Chomchom paired with Bogura-style sweet curd, Kachagolla, Kheer-kodom, and gift boxes.",
            famousItems: ["স্পেশাল রাজভোগ", "বগুড়ার স্বাদের মিষ্টি দই", "মাওয়া চমচম", "কাঁচাগোল্লা"],
            enFamousItems: ["Special Rajbhog", "Traditional Sweet Yogurt", "Mawa Chomchom", "Kachagolla"],
            priceRange: "৩৫০ - ৫৫০ টাকা / কেজি",
            enPriceRange: "350 - 550 BDT / kg",
            bestPlaces: "নিরালা মোড়, টাঙ্গাইল শহর",
            enBestPlaces: "Nirala Mor, Tangail Town",
            phone: "০১৭৩০-৭৮৯৪৫০",
            enPhone: "01730-789450",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
            mapQuery: "Misti Mela, Nirala Mor, Tangail"
        },
        {
            id: "jamurkir-sondesh-sweet",
            name: "জামুর্কির বিখ্যাত সন্দেশ (GI Certified)",
            enName: "Famous Jamurki Sondesh (GI Certified)",
            shopType: "স্বীকৃত জিআই পণ্য ও ঐতিহ্যবাহী মিষ্টি",
            enShopType: "GI Certified Traditional Confectionery",
            location: "জামুর্কি বাজার, দেলদুয়ার, টাঙ্গাইল",
            enLocation: "Jamurki Bazar, Delduar, Tangail",
            history: "ব্রিটিশ আমলে জামুর্কির মোদক পরিবারের হাত ধরে শুরু হওয়া প্রায় দেড় শতাব্দীর প্রাচীন ঐতিহ্য। এটি বাংলাদেশ সরকার ও আন্তর্জাতিকভাবে স্বীকৃত টাঙ্গাইল জেলার অন্যতম প্রধান ভৌগোলিক নির্দেশক (GI) পণ্য।",
            enHistory: "A 150-year heritage started by the Modak sweetmaker families during the British raj, recognized nationally as an official GI sweet.",
            speciality: "খাঁটি গাভীর দুধের তৈরি মাটির মতো নরম ও দানাদার ছানা এবং নিখুঁত এলাচের সুবাস। মুখে দিলেই মিলিয়ে যাওয়া মিষ্টির এক অনন্য স্বাদ। কোনো রাসায়নিক বা প্রিজারভেটিভ ছাড়া সম্পূর্ণ প্রাকৃতিক উপকরণে তৈরি।",
            enSpeciality: "Clay-soft granular texture made from pure cow milk chhana and pure cane sugar with cardamom scent. Free of all chemicals.",
            famousItems: ["আসল জামুর্কির সন্দেশ", "ক্ষীরসা সন্দেশ", "নলিনের মিষ্টি", "ছানার চমচম"],
            enFamousItems: ["Authentic Jamurki Sondesh", "Kheer-chhana Sondesh", "Nolin's Sweets", "Chhana Chomchom"],
            priceRange: "৪৫০ - ৬৫০ টাকা / কেজি",
            enPriceRange: "450 - 650 BDT / kg",
            bestPlaces: "জামুর্কি বাজার মোদক মিষ্টি পট্টি, দেলদুয়ার",
            enBestPlaces: "Jamurki Bazar Modak Patti, Delduar",
            phone: "০১৭২০-৫৫৪৪৩৩",
            enPhone: "01720-554433",
            image: "images/jamurki_sondesh.jpg",
            mapQuery: "Jamurki Bazar, Delduar, Tangail"
        }
    ],
// জেলা প্রশাসন টাঙ্গাইল (DC Office Tangail) - সকল শাখা, কক্ষ নম্বর, কর্মকর্তা ও কর্মচারীবৃন্দ (Excel Sheet Dataset)
    districtAdministration: {
        title: "জেলা প্রশাসকের কার্যালয়, টাঙ্গাইল",
        enTitle: "Office of the Deputy Commissioner, Tangail",
        dcName: "জেলা প্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট",
        enDcName: "Deputy Commissioner & District Magistrate",
        address: "জেলা প্রশাসকের কার্যালয়, কোর্ট রোড, টাঙ্গাইল - ১৯০০",
        enAddress: "DC Office, Court Road, Tangail - 1900",
        phone: "০২-৯৯৭৭০০০০১",
        email: "dctangail@mopa.gov.bd",
        website: "https://tangail.gov.bd",
        excelSheetName: "Tangail_DC_Office_Directory_2026.xlsx",
        branches: [
            {
                id: "dc-secretariat",
                room: "কক্ষ ২০২ (২য় তলা)",
                enRoom: "Room 202 (2nd Floor)",
                branch: "জেলা প্রশাসক ও জেলা ম্যাজিস্ট্রেট মহোদয়ের দপ্তর",
                enBranch: "Office of the Deputy Commissioner & DM",
                category: "শীর্ষ নেতৃত্ব (Leadership)",
                enCategory: "Leadership",
                officer: "জেলা প্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট",
                enOfficer: "Deputy Commissioner & District Magistrate",
                designation: "উপসচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Deputy Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০০০১",
                mobile: "০১৩২২-৯১০১৫০",
                email: "dctangail@mopa.gov.bd",
                staff: "গোপনীয় সহকারী (সিএ), প্রধান সহকারী, স্টেনো-টাইপিস্ট, প্রসেস সার্ভার",
                enStaff: "Confidential Assistant (CA), Head Assistant, Steno-Typist, Orderly",
                services: "জেলায় সরকারের সামগ্রিক প্রতিনিধি হিসেবে আইনশৃঙ্খলা, রাজস্ব প্রশাসন, দুর্যোগ ব্যবস্থাপনা, সমন্বয় ও উন্নয়ন কার্যক্রমের সার্বিক নেতৃত্ব।",
                enServices: "Overall head of district administration, law & order, revenue, disaster response, and inter-departmental coordination."
            },
            {
                id: "adc-general",
                room: "কক্ষ ২০৪ (২য় তলা)",
                enRoom: "Room 204 (2nd Floor)",
                branch: "অতিরিক্ত জেলা প্রশাসক (সার্বিক) এর দপ্তর",
                enBranch: "Office of Additional Deputy Commissioner (General)",
                category: "শীর্ষ নেতৃত্ব (Leadership)",
                enCategory: "Leadership",
                officer: "অতিরিক্ত জেলা প্রশাসক (সার্বিক)",
                enOfficer: "Additional Deputy Commissioner (General)",
                designation: "সিনিয়র সহকারী সচিব / উপসচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Senior Assistant Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০০২২",
                mobile: "০১৩২২-৯১০১৫২",
                email: "adctangail@mopa.gov.bd",
                staff: "সিএ টু এডিসি (সার্বিক), উচ্চমান সহকারী, অফিস সহকারী",
                enStaff: "CA to ADC (Gen), Upper Division Assistant, Office Assistant",
                services: "সাধারণ প্রশাসন, উপজেলা প্রশাসন সমন্বয়, আন্তঃদপ্তর সমন্বয়, সরকারি অনুষ্ঠান ও উন্নয়ন প্রকল্প পর্যবেক্ষণ।",
                enServices: "General administration, upazila oversight, inter-agency coordination, and state program implementation."
            },
            {
                id: "adm-office",
                room: "কক্ষ ২০৬ (২য় তলা)",
                enRoom: "Room 206 (2nd Floor)",
                branch: "অতিরিক্ত জেলা ম্যাজিস্ট্রেট (এডিএম) এর দপ্তর",
                enBranch: "Office of the Additional District Magistrate (ADM)",
                category: "শীর্ষ নেতৃত্ব (Leadership)",
                enCategory: "Leadership",
                officer: "অতিরিক্ত জেলা ম্যাজিস্ট্রেট (এডিএম)",
                enOfficer: "Additional District Magistrate (ADM)",
                designation: "সিনিয়র সহকারী সচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Senior Assistant Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০০৩৩",
                mobile: "০১৩২২-৯১০১৫৩",
                email: "admtangail@mopa.gov.bd",
                staff: "সিএ টু এডিএম, জুডিসিয়াল পেশকার, অফিস সহকারী",
                enStaff: "CA to ADM, Judicial Peshkar, Office Assistant",
                services: "ফৌজদারি কার্যবিধি অনুযায়ী এক্সিকিউটিভ কোর্ট পরিচালনা, জেলা আইনশৃঙ্খলা সেল, মোবাইল কোর্ট সমন্বয়, অস্ত্র লাইসেন্স অনুমোদন।",
                enServices: "Magisterial judicial courts, law & order cell, mobile court operations, firearms license verifications."
            },
            {
                id: "adc-revenue",
                room: "কক্ষ ২০৮ (২য় তলা)",
                enRoom: "Room 208 (2nd Floor)",
                branch: "অতিরিক্ত জেলা প্রশাসক (রাজস্ব) এর দপ্তর",
                enBranch: "Office of Additional Deputy Commissioner (Revenue)",
                category: "রাজস্ব ও এল.এ (Revenue & LA)",
                enCategory: "Revenue & LA",
                officer: "অতিরিক্ত জেলা প্রশাসক (রাজস্ব)",
                enOfficer: "Additional Deputy Commissioner (Revenue)",
                designation: "সিনিয়র সহকারী সচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Senior Assistant Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০০৪৪",
                mobile: "০১৩২২-৯১০১৫৪",
                email: "adcrevtangail@mopa.gov.bd",
                staff: "রাজস্ব পেশকার, প্রধান সহকারী, সহকারী রাজস্ব কর্মকর্তা",
                enStaff: "Revenue Peshkar, Head Assistant, Assistant Revenue Officer",
                services: "ভূমি রাজস্ব, নামজারি আপিল মামলা, অর্পিত ও খাস সম্পত্তি ব্যবস্থাপনা, জলমহাল ও বালুমহাল ইজারা তদারকি।",
                enServices: "Land revenue administration, mutation appeals, vested property and public waterbody lease management."
            },
            {
                id: "adc-education",
                room: "কক্ষ ২১১ (২য় তলা)",
                enRoom: "Room 211 (2nd Floor)",
                branch: "অতিরিক্ত জেলা প্রশাসক (শিক্ষা ও আইসিটি) এর দপ্তর",
                enBranch: "Office of ADC (Education & ICT)",
                category: "শিক্ষা ও আইসিটি (Education & ICT)",
                enCategory: "Education & ICT",
                officer: "অতিরিক্ত জেলা প্রশাসক (শিক্ষা ও আইসিটি)",
                enOfficer: "Additional Deputy Commissioner (Education & ICT)",
                designation: "সিনিয়র সহকারী সচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Senior Assistant Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০০৫৫",
                mobile: "০১৩২২-৯১০১৫৫",
                email: "adcedutangail@mopa.gov.bd",
                staff: "সহকারী প্রোগ্রামার, প্রশাসনিক কর্মকর্তা, অফিস সহকারী",
                enStaff: "Assistant Programmer, Administrative Officer, Office Assistant",
                services: "শিক্ষা প্রতিষ্ঠান তদারকি, পাবলিক পরীক্ষা সুষ্ঠু পরিচালনা, জেলা ইনোভেশন কার্যক্রম, ডিজিটাল সেবা ও তথ্য বাতায়ন।",
                enServices: "Educational institutional oversight, national board exams, district innovation, and e-governance systems."
            },
            {
                id: "ddlg-office",
                room: "কক্ষ ২০৭ (২য় তলা)",
                enRoom: "Room 207 (2nd Floor)",
                branch: "উপপরিচালক, স্থানীয় সরকার (ডিডিএলজি) এর দপ্তর",
                enBranch: "Office of Deputy Director, Local Government (DDLG)",
                category: "স্থানীয় সরকার (Local Gov)",
                enCategory: "Local Gov",
                officer: "উপপরিচালক, স্থানীয় সরকার",
                enOfficer: "Deputy Director, Local Government",
                designation: "উপসচিব, বিসিএস (প্রশাসন)",
                enDesignation: "Deputy Secretary, BCS (Admin)",
                phone: "০২-৯৯৭৭০০১৮৮",
                mobile: "০১৩২২-৯১০১৫৬",
                email: "ddlg.tangail@mopa.gov.bd",
                staff: "প্রশাসনিক কর্মকর্তা, সাঁট মুদ্রাক্ষরিক, প্রসেস সার্ভার",
                enStaff: "Administrative Officer, Typist, Process Server",
                services: "টাঙ্গাইলের ১১টি পৌরসভা ও ১১৮টি ইউনিয়ন পরিষদের কার্যক্রম তদারকি, গ্রাম আদালত ও স্থানীয় সরকার বাজেট অনুমোদন।",
                enServices: "Inspection of 11 municipalities and 118 union parishads, village courts, and local government grants."
            },
            {
                id: "ndc-nejarat",
                room: "কক্ষ ১০৫ (নিচতলা)",
                enRoom: "Room 105 (Ground Floor)",
                branch: "নেজারত শাখা (এনডিসি মহোদয়ের দপ্তর)",
                enBranch: "Nejarat Branch (Office of the NDC)",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "নেজারত ডেপুটি কালেক্টর (এনডিসি)",
                enOfficer: "Nejarat Deputy Collector (NDC)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০০৬৬",
                mobile: "০১৩২২-৯১০১৬০",
                email: "ndctangail@mopa.gov.bd",
                staff: "নাজির (ভারপ্রাপ্ত), সহকারী নাজির, সার্কিট হাউস পরিদর্শক, স্টোরকিপার",
                enStaff: "Nazir, Assistant Nazir, Circuit House Supervisor, Storekeeper",
                services: "সার্কিট হাউস ভিআইপি কক্ষ বরাদ্দ, ভিভিআইপি প্রটোকল, জেলা সম্মেলন কক্ষ বুকিং, জাতীয় দিবস উদযাপন ও লজিস্টিক ব্যবস্থাপনা।",
                enServices: "Circuit House reservations, protocol for state dignitaries, meeting hall bookings, logistics and supplies."
            },
            {
                id: "general-branch",
                room: "কক্ষ ১০৩ (নিচতলা)",
                enRoom: "Room 103 (Ground Floor)",
                branch: "সাধারণ শাখা (General Section)",
                enBranch: "General Administrative Section",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "সহকারী কমিশনার (সাধারণ শাখা)",
                enOfficer: "Assistant Commissioner (General Branch)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০০৭৭",
                mobile: "০১৩২২-৯১০১৬১",
                email: "genbranch.tangail@mopa.gov.bd",
                staff: "প্রধান সহকারী, উচ্চমান সহকারী, অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক",
                enStaff: "Head Assistant, Senior Clerk, Office Assistant cum Typist",
                services: "আগ্নেয়াস্ত্রের লাইসেন্স প্রদান ও বার্ষিক নবায়ন, পেট্রোল পাম্প ও বিস্ফোরক লাইসেন্স ছাড়পত্র, সিনেমা হল ও হোটেল পারমিট।",
                enServices: "Firearms license issuance & renewal, fuel station NOC, cinema hall and commercial hotel licenses."
            },
            {
                id: "e-service-frontdesk",
                room: "কক্ষ ১০১ (নিচতলা প্রধান ফটক)",
                enRoom: "Room 101 (Ground Floor Entrance)",
                branch: "জেলা ই-সেবা কেন্দ্র ও ফ্রন্ট ডেস্ক (e-Service Center)",
                enBranch: "District e-Service Center & Front Desk",
                category: "শিক্ষা ও আইসিটি (Education & ICT)",
                enCategory: "Education & ICT",
                officer: "সহকারী কমিশনার (আইসিটি ও ই-সেবা)",
                enOfficer: "Assistant Commissioner (ICT & e-Service)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০০৮৮",
                mobile: "০১৩২২-৯১০১৬৩",
                email: "eservice.tangail@mopa.gov.bd",
                staff: "তথ্য সেবা কর্মকর্তা, ওয়ান স্টপ সার্ভিস অপারেটর (৩ জন), ডিসপ্যাচ সহকারী",
                enStaff: "Information Service Officer, One-Stop Operators (3), Dispatch Clerk",
                services: "নাগরিকদের যেকোনো আবেদন গ্রহণ, প্রাপ্তিস্বীকার ও ট্র্যাকিং স্লিপ প্রদান, ওয়ান-স্টপ তথ্য পরামর্শ ও তাৎক্ষণিক সেবা।",
                enServices: "Application intake, SMS tracking receipt, citizen guidance, and direct one-stop public service delivery."
            },
            {
                id: "record-room",
                room: "কক্ষ ১০২ (নিচতলা)",
                enRoom: "Room 102 (Ground Floor)",
                branch: "রেকর্ড রুম ও খতিয়ান নকল শাখা (Record Room)",
                enBranch: "Record Room & Certified Land Records",
                category: "রাজস্ব ও এল.এ (Revenue & LA)",
                enCategory: "Revenue & LA",
                officer: "সহকারী কমিশনার ও রেকর্ড কিপার",
                enOfficer: "Assistant Commissioner & Record Keeper",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০০৯৯",
                mobile: "০১৩২২-৯১০১৬৪",
                email: "recordroom.tangail@mopa.gov.bd",
                staff: "রেকর্ড কিপার, সহকারী রেকর্ড কিপার, খতিয়ান নকলকারক (মুহুরি), বাঁধাইকারক",
                enStaff: "Record Keeper, Assistant Keeper, Record Scribes, Binder",
                services: "সিএস (CS), এসএ (SA), আরএস (RS), বিএস (BS) খতিয়ান/পর্চার সার্টিফাইড জাবেদা নকল ও মৌজা ম্যাপের সরকারি অনুলিপি প্রদান।",
                enServices: "Certified copies of CS, SA, RS, BS land records (Khatian) and authentic Mouza maps."
            },
            {
                id: "revenue-branch",
                room: "কক্ষ ২১০ (২য় তলা)",
                enRoom: "Room 210 (2nd Floor)",
                branch: "রাজস্ব শাখা (Revenue Section)",
                enBranch: "Land Revenue Section",
                category: "রাজস্ব ও এল.এ (Revenue & LA)",
                enCategory: "Revenue & LA",
                officer: "ভারপ্রাপ্ত কর্মকর্তা (রাজস্ব শাখা)",
                enOfficer: "Officer-in-Charge (Revenue Branch)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০১১০",
                mobile: "০১৩২২-৯১০১৬৫",
                email: "revenue.tangail@mopa.gov.bd",
                staff: "প্রধান সহকারী (রাজস্ব), কানুনগো, সার্ভেয়ার, নামজারি সহকারী",
                enStaff: "Head Assistant (Rev), Kanungo, Surveyor, Mutation Assistant",
                services: "খাস জমি বন্দোবস্ত ও গুচ্ছগ্রাম প্রকল্প, বালুমহাল ও সায়রাত ইজারা, চা বাগান ও কৃষি খাসজমি তদারকি।",
                enServices: "Government khas land allotment, sand quarry leasing, and rural rehabilitation projects."
            },
            {
                id: "la-branch",
                room: "কক্ষ ২১৩ (২য় তলা)",
                enRoom: "Room 213 (2nd Floor)",
                branch: "ভূমি হুকুমদখল শাখা (Land Acquisition - LA Branch)",
                enBranch: "Land Acquisition Branch (LA Section)",
                category: "রাজস্ব ও এল.এ (Revenue & LA)",
                enCategory: "Revenue & LA",
                officer: "ভূমি অধিগ্রহণ কর্মকর্তা (এলএও)",
                enOfficer: "Land Acquisition Officer (LAO)",
                designation: "সিনিয়র সহকারী কমিশনার, বিসিএস (প্রশাসন)",
                enDesignation: "Senior Assistant Commissioner, BCS (Admin)",
                phone: "০২-৯৯৭৭০০১২০",
                mobile: "০১৩২২-৯১০১৬৬",
                email: "la.tangail@mopa.gov.bd",
                staff: "অতিরিক্ত ভূমি অধিগ্রহণ কর্মকর্তা, কানুনগো (২ জন), সার্ভেয়ার (৪ জন), পেশকার",
                enStaff: "Additional LAO, Kanungo (2), Surveyors (4), Peshkar",
                services: "মহাসড়ক, রেললাইন ও সরকারি মেগা প্রকল্পের ভূমি অধিগ্রহণ, ৪ ধারা, ৭ ধারা ও ৮ ধারার নোটিশ জারি এবং ক্ষতিগ্রস্তদের ক্ষতিপূরণ চেক প্রদান।",
                enServices: "Acquisition of private land for national infrastructure, compensation assessment, and award cheque disbursement."
            },
            {
                id: "establishment-branch",
                room: "কক্ষ ২০৯ (২য় তলা)",
                enRoom: "Room 209 (2nd Floor)",
                branch: "সংস্থাপন শাখা (Establishment Section)",
                enBranch: "Establishment Section",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "সহকারী কমিশনার (সংস্থাপন)",
                enOfficer: "Assistant Commissioner (Establishment)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০১৩০",
                mobile: "০১৩২২-৯১০১৬৭",
                email: "est.tangail@mopa.gov.bd",
                staff: "প্রশাসনিক কর্মকর্তা, প্রধান সহকারী, সার্ভিস বুক ও জিপিএফ সহকারী",
                enStaff: "Administrative Officer, Head Assistant, GPF & Pension Clerk",
                services: "ডিসি অফিস ও উপজেলা নির্বাহী অফিসের কর্মকর্তা-কর্মচারীদের বদলি, পদোন্নতি, বার্ষিক ছুটি, পেনশন ও জিপিএফ নিষ্পত্তি।",
                enServices: "Personnel management, postings, leave records, pension settlements, and welfare for staff."
            },
            {
                id: "treasury-branch",
                room: "কক্ষ ১০৪ (নিচতলা)",
                enRoom: "Room 104 (Ground Floor)",
                branch: "ট্রেজারি ও স্ট্যাম্প শাখা (Treasury & Stamp Branch)",
                enBranch: "Treasury & Stamp Section",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "ট্রেজারি অফিসার (সহকারী কমিশনার)",
                enOfficer: "Treasury Officer (Assistant Commissioner)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০১৪০",
                mobile: "০১৩২২-৯১০১৬৮",
                email: "treasury.tangail@mopa.gov.bd",
                staff: "ট্রেজারি হিসাবরক্ষক, সহকারী হিসাবরক্ষক, স্ট্যাম্প ভেন্ডর সহকারী",
                enStaff: "Treasury Accountant, Assistant Accountant, Stamp Clerk",
                services: "জুডিসিয়াল ও নন-জুডিসিয়াল স্ট্যাম্প, কোর্ট ফি ও রেভিনিউ স্ট্যাম্প সংরক্ষণ ও সরবরাহ, গোপনীয় মূল্যবান দলিলাদি সংরক্ষণ।",
                enServices: "Judicial & non-judicial stamps, revenue stamps distribution, and custody of government valuables."
            },
            {
                id: "judicial-munshikhana",
                room: "কক্ষ ১০৮ (নিচতলা)",
                enRoom: "Room 108 (Ground Floor)",
                branch: "জুডিসিয়াল মুন্সিখানা শাখা (JM Branch)",
                enBranch: "Judicial Munshikhana Branch (JM)",
                category: "শীর্ষ নেতৃত্ব (Leadership)",
                enCategory: "Leadership",
                officer: "সহকারী কমিশনার (জেএম শাখা)",
                enOfficer: "Assistant Commissioner (JM Branch)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০১৫০",
                mobile: "০১৩২২-৯১০১৬৯",
                email: "jm.tangail@mopa.gov.bd",
                staff: "বেঞ্চ সহকারী (পেশকার), জারিকারক (প্রসেস সার্ভার ২ জন), অফিস সহকারী",
                enStaff: "Bench Clerk (Peshkar), Process Servers (2), Office Assistant",
                services: "জেলা ম্যাজিস্ট্রেটের আদালত পরিচালনা, ১৪৪ ধারা ও ফৌজদারি কার্যবিধির মামলা নিষ্পত্তি, নির্বাহী ম্যাজিস্ট্রেট কোর্ট ব্যবস্থাপনা।",
                enServices: "District Magistrate court trials, Section 144 orders, mobile court case registers, and summons."
            },
            {
                id: "disaster-relief",
                room: "কক্ষ ১১২ (নিচতলা)",
                enRoom: "Room 112 (Ground Floor)",
                branch: "জেলা ত্রাণ ও পুনর্বাসন শাখা (DRRO Office)",
                enBranch: "District Relief & Rehabilitation Branch",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "জেলা ত্রাণ ও পুনর্বাসন কর্মকর্তা (ডিআরআরও)",
                enOfficer: "District Relief & Rehabilitation Officer (DRRO)",
                designation: "প্রথম শ্রেণির কর্মকর্তা, দুর্যোগ ব্যবস্থাপনা অধিদপ্তর",
                enDesignation: "Class-1 Officer, Dept of Disaster Management",
                phone: "০২-৯৯৭৭০০১৬০",
                mobile: "০১৭৩০-৩৩৩৪৪৪",
                email: "drro.tangail@modmr.gov.bd",
                staff: "সহকারী ত্রাণ কর্মকর্তা, কম্পিউটার অপারেটর, গুদাম রক্ষক",
                enStaff: "Assistant Relief Officer, Data Operator, Warehouse Incharge",
                services: "বন্যা ও দুর্যোগে জরুরি খাদ্য সহায়তা, জিআর চাল ও নগদ অর্থ বণ্টন, ঢেউটিন ও গৃহনির্মাণ সহায়তা, কম্বল বিতরণ।",
                enServices: "Disaster emergency relief, GR food grain distribution, shelter rehabilitation, and cold wave assistance."
            },
            {
                id: "expatriate-cell",
                room: "কক্ষ ২০৩ (২য় তলা)",
                enRoom: "Room 203 (2nd Floor)",
                branch: "প্রবাসী কল্যাণ ও মানবসম্পদ উন্নয়ন সেল",
                enBranch: "Expatriates' Welfare & Helpline Cell",
                category: "প্রশাসন ও সেবা (General & Admin)",
                enCategory: "General & Admin",
                officer: "সহকারী কমিশনার (প্রবাসী কল্যাণ সেল)",
                enOfficer: "Assistant Commissioner (Expatriates' Cell)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০১৭০",
                mobile: "০১৩২২-৯১০১৭০",
                email: "probashi.tangail@mopa.gov.bd",
                staff: "প্রবাসী কল্যাণ সহকারী, কম্পিউটার অপারেটর",
                enStaff: "Expatriate Welfare Assistant, Computer Operator",
                services: "বিদেশে অবস্থানরত টাঙ্গাইল প্রবাসীদের দেশে আইনি সহায়তা, মরদেহ দেশে আনা ও পরিবারের ক্ষতিপূরণ ভাতা প্রক্রিয়া।",
                enServices: "Legal assistance for expatriates, repatriation of deceased workers, and welfare allowance processing."
            },
            {
                id: "confidential-branch",
                room: "কক্ষ ২০১ (২য় তলা)",
                enRoom: "Room 201 (2nd Floor)",
                branch: "গোপনীয় শাখা (Confidential Section)",
                enBranch: "Confidential Section (DC Secretariat)",
                category: "শীর্ষ নেতৃত্ব (Leadership)",
                enCategory: "Leadership",
                officer: "সহকারী কমিশনার (গোপনীয় শাখা)",
                enOfficer: "Assistant Commissioner (Confidential)",
                designation: "সহকারী কমিশনার ও এক্সিকিউটিভ ম্যাজিস্ট্রেট",
                enDesignation: "Assistant Commissioner & Executive Magistrate",
                phone: "০২-৯৯৭৭০০০১১",
                mobile: "০১৩২২-৯১০১৫১",
                email: "confidential.tangail@mopa.gov.bd",
                staff: "গোপনীয় সহকারী, বিশেষ বার্তাবাহক, সাঁট লিপিকার",
                enStaff: "Confidential Clerk, Special Messenger, Stenographer",
                services: "মহামান্য রাষ্ট্রপতি ও প্রধানমন্ত্রীর কার্যালয়ের বিশেষ পত্রালাপ, স্পর্শকাতর গোয়েন্দা রিপোর্ট ও উচ্চপর্যায়ের সমন্বয়।",
                enServices: "Direct correspondence with President & Prime Minister's offices, state security and intelligence coordination."
            }
        ]
    },
};


// Bot knowledge patterns for intelligent conversation (100% Bilingual BN & EN)
const BOT_RESPONSES = [
    {
        keywords: ["জনসংখ্যা", "শুমারি", "আদমশুমারি", "জনমিতি", "ছেলে", "মেয়ে", "হিন্দু", "মুসলিম", "শিক্ষার হার", "ঘনত্ব"],
        enKeywords: ["population", "census", "demographics", "literacy", "religion", "gender", "male", "female", "muslim", "hindu", "density"],
        answer: "📊 **টাঙ্গাইল জেলা জনশুমারি ২০২২ (BBS পরিসংখ্যান)**:\n\n" +
                "• **মোট জনসংখ্যা**: ৪০,৩৭,০১৬ জন\n" +
                "• 👨 **ছেলে / পুরুষ**: ১৯,৫৩,৮০০ জন (**৪৮.৪০%**)\n" +
                "• 👩 **মেয়ে / নারী**: ২০,৮৩,০১৬ জন (**৫১.৫৯%**)\n" +
                "• ⚧️ **তৃতীয় লিঙ্গ**: ২০০ জন (০.০১%)\n" +
                "• 🎓 **শিক্ষার হার**: **৬৮.৯০%** (পুরুষ ৭১.২০%, নারী ৬৬.৮০%)\n\n" +
                "🕌 **ধর্মভিত্তিক অনুপাত**:\n" +
                "• মুসলিম: **৮৮.২২%** (৩৫,৬১,৫৮০ জন)\n" +
                "• হিন্দু: **১০.৭৫%** (৪,৩৪,১৫০ জন)\n" +
                "• খ্রিস্টান (গারো সম্প্রদায়): **০.৯৫%** (৩৮,১২০ জন)\n" +
                "• বৌদ্ধ ও অন্যান্য: **০.০৮%** (৩,১৬৬ জন)\n\n" +
                "বিস্তারিত চার্ট ও পরিসংখ্যান দেখতে উপরে '৪০ লক্ষ+' কার্ডটিতে ক্লিক করুন!",
        enAnswer: "📊 **Tangail District Census 2022 (BBS Statistics)**:\n\n" +
                  "• **Total Population**: 4,037,016\n" +
                  "• 👨 **Male**: 1,953,800 (**48.40%**)\n" +
                  "• 👩 **Female**: 2,083,016 (**51.59%**)\n" +
                  "• ⚧️ **Third Gender**: 200 (0.01%)\n" +
                  "• 🎓 **Literacy Rate**: **68.90%** (Male: 71.20%, Female: 66.80%)\n\n" +
                  "🕌 **Religious Demographics**:\n" +
                  "• Muslim: **88.22%** (3,561,580)\n" +
                  "• Hindu: **10.75%** (434,150)\n" +
                  "• Christian (Indigenous Garo): **0.95%** (38,120)\n" +
                  "• Buddhist & Others: **0.08%** (3,166)\n\n" +
                  "Click on the '4.0M+ Population' stat card above to view interactive charts and full demographic data!"
    },
    {
        keywords: ["ম্যাপ", "মানচিত্র", "সীমানা", "চতুর্সীমা", "নদী", "অবস্থান"],
        enKeywords: ["map", "boundary", "boundaries", "rivers", "geography", "location", "area"],
        answer: "🗺️ **টাঙ্গাইল জেলার মানচিত্র ও ভৌগোলিক চতুর্সীমা**:\n\n" +
                "• **মোট আয়তন**: ৩,৪১৪.৩৫ বর্গ কিলোমিটার\n" +
                "• ⬆️ **উত্তরে**: জামালপুর জেলা\n" +
                "• ⬇️ **দক্ষিণে**: ঢাকা ও মানিকগঞ্জ জেলা\n" +
                "• ➡️ **পূর্বে**: ময়মনসিংহ ও গাজীপুর জেলা\n" +
                "• ⬅️ **পশ্চিমে**: যমুনা নদী ও সিরাজগঞ্জ জেলা\n" +
                "• 🌊 **প্রধান নদী**: যমুনা, ধলেশ্বরী, লৌহজং, বংশী, ঝিনাই, ফটিকজানি\n\n" +
                "সম্পূর্ণ ইন্টারেক্টিভ গুগল ম্যাপ ও নদী-বনাঞ্চলের তথ্য দেখতে উপরে '৩,৪১৪ বর্গ কিমি' কার্ডে ক্লিক করুন!",
        enAnswer: "🗺️ **Tangail District Geographical Profile & Boundaries**:\n\n" +
                  "• **Total Area**: 3,414.35 square kilometers\n" +
                  "• ⬆️ **North**: Jamalpur District\n" +
                  "• ⬇️ **South**: Dhaka and Manikganj Districts\n" +
                  "• ➡️ **East**: Mymensingh and Gazipur Districts\n" +
                  "• ⬅️ **West**: Jamuna River and Sirajganj District\n" +
                  "• 🌊 **Major Rivers**: Jamuna, Dhaleshwari, Louhajang, Bangshi, Jhinai, Fatikjani\n\n" +
                  "Click on the '3,414 sq km' stat card above to explore the interactive Google Map and boundary breakdown!"
    },
    {
        keywords: ["জামুর্কি", "সন্দেশ", "জামুর্কির সন্দেশ"],
        enKeywords: ["jamurki", "sondesh", "jamurki sandesh"],
        answer: "🧁 **জামুর্কির সন্দেশ**: টাঙ্গাইলের দেলদুয়ার উপজেলার জামুর্কি বাজারের শতবর্ষী ঐতিহ্যবাহী মিষ্টি। খাঁটি গাভীর দুধের ছানা ও চিনির সুষম পাকে তৈরি এই সন্দেশ টাঙ্গাইলের ৪টি স্বীকৃত **জিআই (GI) সনদপ্রাপ্ত** পণ্যের অন্যতম!",
        enAnswer: "🧁 **Jamurki Sondesh**: A century-old traditional delicacy from Jamurki Bazar in Delduar upazila, Tangail. Made from pure cow milk curd and sugar without artificial preservatives, it is officially certified as one of Tangail's 4 recognized **Geographical Indication (GI)** heritage products!"
    },
    {
        keywords: ["জিআই", "ভৌগোলিক নির্দেশক", "স্বীকৃত পণ্য", "জিআই সনদ"],
        enKeywords: ["gi", "geographical indication", "gi products", "certified", "heritage products"],
        answer: "🏅 **টাঙ্গাইল জেলার ৪টি স্বীকৃত জিআই (GI) পণ্য**:\n" +
                "১. **টাঙ্গাইল শাড়ি** — জিআই সনদ নং ৫৪\n" +
                "২. **পোড়াবাড়ির চমচম** — জিআই সনদ নং ৪২\n" +
                "৩. **মধুপুরের আনারস** — জিআই সনদ নং ৪১\n" +
                "৪. **জামুর্কির সন্দেশ** — জিআই সনদ নং ৬৪\n\n" +
                "বাংলাদেশের যেকোনো জেলার মধ্যে টাঙ্গাইল সর্বোচ্চ ৪টি জাতীয় ও আন্তর্জাতিকভাবে স্বীকৃত জিআই পণ্যের অধিকারী!",
        enAnswer: "🏅 **Tangail's 4 Officially Recognized GI Certified Products**:\n" +
                  "1. **Tangail Handloom Saree** — GI Certificate #54\n" +
                  "2. **Porabari Chomchom** — GI Certificate #42\n" +
                  "3. **Madhupur Pineapple** — GI Certificate #41\n" +
                  "4. **Jamurki Sondesh** — GI Certificate #64\n\n" +
                  "Tangail holds the highest number of recognized GI products among all districts in Bangladesh!"
    },
    {
        keywords: ["চমচম", "মিষ্টি", "পোড়াবাড়ি", "পোড়াবাড়ি", "মিষ্টান্ন", "দশরথ"],
        enKeywords: ["chomchom", "sweets", "porabari", "porabarir chomchom", "sweetmeat", "dessert"],
        answer: "🍬 **পোড়াবাড়ির চমচম**: মিষ্টির রাজা হিসেবে বিশ্বখ্যাত! ব্রিটিশ আমলে দশরথ গৌড় পোড়াবাড়িতে ধলেশ্বরী নদীর বিশেষ মিষ্টি পানি এবং খাঁটি ছানা দিয়ে এই চমচমের সূচনা করেন। আসল চমচম কিনতে টাঙ্গাইল শহরের **পাঁচআনি বাজার** (জয়কালী, গোপাল, ফণী মিষ্টান্ন ভান্ডার) ও **পোড়াবাড়ি বাজারে** যাওয়া সর্বোত্তম।",
        enAnswer: "🍬 **Porabari Chomchom**: Acclaimed worldwide as the King of Sweets! Originated during the British era by Dasharath Gour in Porabari using pure cow milk curd and Dhaleshwari river water. For authentic Chomchom, visit **Panchani Bazar** (Joykali, Gopal, Phani sweet shops) or **Porabari Bazar** in Tangail."
    },
    {
        keywords: ["জয়কালী", "জয়কালী", "জয়কালী মিষ্টান্ন"],
        enKeywords: ["joykali", "joykali mistanna bhandar", "joykali sweets"],
        answer: "🏪 **শ্রী শ্রী জয়কালী মিষ্টান্ন ভান্ডার**: টাঙ্গাইল শহরের পাঁচআনি বাজারে অবস্থিত শতাব্দী প্রাচীন ও অত্যন্ত জনপ্রিয় মিষ্টির দোকান। পোড়াবাড়ির আসল চমচম, ছানার জিলাপি এবং রসকদম্বের জন্য এটি বিখ্যাত।",
        enAnswer: "🏪 **Shree Shree Joykali Mishtanna Bhandar**: A legendary century-old sweetmeat confectionery located in Panchani Bazar, Tangail town. Famous for hot authentic Porabari Chomchom, Chhana Jilapi, and Roshkodom. A must-visit destination for travelers!"
    },
    {
        keywords: ["গোপাল", "গোপাল মিষ্টান্ন", "গোপাল মিষ্টান্ন ভান্ডার"],
        enKeywords: ["gopal", "gopal confectionery", "gopal mishtanna bhandar"],
        answer: "🏪 **গোপাল মিষ্টান্ন ভান্ডার**: পাঁচআনি বাজারের অন্যতম সুপরিচিত ঐতিহ্যবাহী প্রতিষ্ঠান। ঘন মাওয়ায় মোড়ানো রসালো চমচম, বালুশাহী এবং পেঁড়া সন্দেশের জন্য এটি বিশেষভাবে সমাদৃত।",
        enAnswer: "🏪 **Gopal Mishtanna Bhandar**: A renowned heritage sweet house in Panchani Bazar. Highly praised for its thick mawa-coated juicy Chomchom, crispy Balushai, and Special Peda Sondesh."
    },
    {
        keywords: ["ফণী", "ফনি", "ফণী মিষ্টান্ন"],
        enKeywords: ["phoni", "foni", "phani", "phoni mishtanna bhandar"],
        answer: "🏪 **ফণী মিষ্টান্ন ভান্ডার**: পাঁচআনি বাজারের প্রাচীন মিষ্টির দোকানগুলোর অন্যতম। ঐতিহ্যবাহী পদ্ধতিতে দীর্ঘ সময় জ্বাল দিয়ে তৈরি লালচে পোড়াবাড়ির চমচম ও ক্ষীরভোগের জন্য এটি পরিচিত।",
        enAnswer: "🏪 **Phoni Mishtanna Bhandar**: One of Tangail's oldest sweet shops in Panchani Bazar, celebrated for slow-simmered reddish authentic Porabari Chomchom and creamy Kheerbhog."
    },
    {
        keywords: ["ইনটু", "টিউব দই", "ইনটুর দই", "দই"],
        enKeywords: ["intu", "tube doi", "tube yogurt", "intu yogurt"],
        answer: "🥛 **ইনটুর ভাইরাল টিউব দই**: টাঙ্গাইলের আধুনিক মিষ্টি উদ্ভাবন! স্বাস্থ্যসম্মত স্কুইজ টিউবে পরিবেশন করা ঘন ও সুস্বাদু ক্ষীর দই, যা চামচ ছাড়াই যেকোনো জায়গায় সহজে খাওয়া যায়। ভ্রমণপিপাসু ও ভোজনরসিকদের মধ্যে এটি অত্যন্ত জনপ্রিয়।",
        enAnswer: "🥛 **Intu's Viral Tube Yogurt**: A groundbreaking modern confectionery innovation in Tangail! Deliciously rich caramelized kheer yogurt packaged in hygienic squeeze tubes for easy on-the-go snacking. Wildly popular among travelers and foodies!"
    },
    {
        keywords: ["মন্দির", "কালীবাড়ি", "কালী বাড়ি", "শিবালয়", "শিব মন্দির", "পূজা"],
        enKeywords: ["temple", "temples", "kali bari", "mandir", "shibaloy", "hindu temple"],
        answer: "🛕 **টাঙ্গাইলের বিখ্যাত ঐতিহাসিক মন্দিরসমূহ**:\n" +
                "১. **শ্রী শ্রী বড় কালী বাড়ি** — টাঙ্গাইল সদর (১৫০+ বছরের প্রাচীন কেন্দ্রীয় মন্দির)\n" +
                "২. **শ্রী শ্রী জয়কালী মন্দির** — পাঁচআনি বাজার\n" +
                "৩. **উপেন্দ্র সরোবর বারো শিবালয়** — নাগরপুর\n" +
                "৪. **সন্তোষ জাহ্নবী মহাশ্মশান ও কালী মন্দির** — সন্তোষ\n" +
                "৫. **পাকুটিয়া রাধাগোবিন্দ জিউ মন্দির** — মির্জাপুর\n" +
                "৬. **কুমুদিনী নাটমন্দির ও কালী মন্দির** — মির্জাপুর\n" +
                "৭. **মহেরা জমিদার বাড়ি মন্দির চত্বর** — মির্জাপুর\n" +
                "৮. **দেলদুয়ার রাধাগোবিন্দ জিউ মন্দির** — দেলদুয়ার\n" +
                "৯. **এলেঙ্গা প্রাচীন শিব মন্দির** — কালিহাতী\n" +
                "১০. **করটিয়া রামকৃষ্ণ সেবাশ্রম ও মন্দির** — করটিয়া\n\n" +
                "ওয়েবসাইটের 'মন্দিরসমূহ' সেকশনে প্রতিটি মন্দিরের ইতিহাস ও গুগল ম্যাপ লোকেশন দেওয়া আছে!",
        enAnswer: "🛕 **Historic Centenary Temples of Tangail**:\n" +
                  "1. **Sri Sri Boro Kali Bari** — Tangail Sadar (150+ years old central temple)\n" +
                  "2. **Joykali Mandir** — Panchani Bazar\n" +
                  "3. **Upendra Sarobar 12 Shibaloy** — Nagarpur\n" +
                  "4. **Santosh Jahnavi Temple** — Santosh\n" +
                  "5. **Pakutia Radhagobinda Jiu Temple** — Mirzapur\n" +
                  "6. **Kumudini Natmandir & Kali Temple** — Mirzapur\n" +
                  "7. **Mohera Palace Temple Complex** — Mirzapur\n" +
                  "8. **Delduar Radhagobinda Temple** — Delduar\n" +
                  "9. **Elenga Ancient Shiva Temple** — Kalihati\n" +
                  "10. **Korotia Ramakrishna Ashram & Temple** — Korotia\n\n" +
                  "Explore the 'Temples' section on this website for photos, significance, and Google Maps directions!"
    },
    {
        keywords: ["শাড়ি", "শাড়ি", "তাঁত", "পাথরাইল", "করটিয়া", "বাজিতপুর", "তাঁতের শাড়ি"],
        enKeywords: ["saree", "sari", "handloom", "weaving", "pathrail", "tangail saree"],
        answer: "🥻 **টাঙ্গাইল তাঁতের শাড়ি**: আন্তর্জাতিকভাবে স্বীকৃত জিআই সনদপ্রাপ্ত বাংলাদেশের অহংকার! পাথরাইল, করটিয়া, বাজিতপুর ও বল্লার দক্ষ তাঁতিরা জামদানি, বালুচরি, হাফ সিল্ক ও সুতি শাড়ি বুনে থাকেন। শাড়ি কেনার জন্য পাথরাইল তাঁতপল্লী ও করটিয়া শাড়ির হাট সবচেয়ে বিখ্যাত।",
        enAnswer: "🥻 **Tangail Handloom Saree**: Internationally renowned GI-certified textile heritage of Bangladesh! Master weavers in Pathrail, Korotia, Bajitpur, and Balla handcraft fine Jamdani, Baluchari, Half Silk, and Cotton sarees. Visit **Pathrail Weaving Hub** and **Korotia Haat** for the best collection!"
    },
    {
        keywords: ["উপজেলা", "কয়টি", "থানা", "কয়টি", "কয়টা"],
        enKeywords: ["upazila", "upazilas", "how many upazilas", "sub-districts", "thana"],
        answer: "🗺️ টাঙ্গাইল জেলায় মোট **১২টি প্রশাসনিক উপজেলা** রয়েছে:\n" +
                "১. টাঙ্গাইল সদর\n" +
                "২. মির্জাপুর\n" +
                "৩. মধুপুর\n" +
                "৪. ধনবাড়ী\n" +
                "৫. গোপালপুর\n" +
                "৬. ভূঞাপুর\n" +
                "৭. ঘাটাইল\n" +
                "৮. কালিহাতী\n" +
                "৯. নাগরপুর\n" +
                "১০. দেলদুয়ার\n" +
                "১১. বাসাইল\n" +
                "১২. সখীপুর\n\n" +
                "প্রতিটি উপজেলার বিস্তারিত আয়তন, ইউনিয়ন ও আকর্ষণ দেখতে '১২টি উপজেলা' কার্ডে ক্লিক করুন!",
        enAnswer: "🗺️ Tangail District consists of **12 Administrative Upazilas**:\n" +
                  "1. Tangail Sadar\n" +
                  "2. Mirzapur\n" +
                  "3. Madhupur\n" +
                  "4. Dhanbari\n" +
                  "5. Gopalpur\n" +
                  "6. Bhuapur\n" +
                  "7. Ghatail\n" +
                  "8. Kalihati\n" +
                  "9. Nagarpur\n" +
                  "10. Delduar\n" +
                  "11. Basail\n" +
                  "12. Sakhipur\n\n" +
                  "Click on the '12 Upazilas' stat card above to view full profiles, unions, attractions, and administrative hotlines!"
    },
    {
        keywords: ["মহেরা", "জমিদার", "মহেরা জমিদার বাড়ি", "প্রাসাদ"],
        enKeywords: ["mohera", "zamindar", "mohera zamindar bari", "mohera palace"],
        answer: "🏛️ **মহেরা জমিদার বাড়ি**: মির্জাপুরে অবস্থিত ১৮৯০ সালের দৃষ্টিনন্দন ঐতিহাসিক প্রাসাদ। প্রায় ৮ একর এলাকা জুড়ে মহারাজ লজ, আনন্দ ভবন, চৌধুরী লজ, কালীচরণ লজ ও বিশাখা সাগর দীঘি রয়েছে। প্রবেশ ফি: ১০০ টাকা। ঢাকা-টাঙ্গাইল মহাসড়কের নাটিয়াপাড়া বাসস্ট্যান্ড থেকে সহজে সিএনজিযোগে যাওয়া যায়।",
        enAnswer: "🏛️ **Mohera Zamindar Bari Palace**: A majestic 1890s neoclassical estate in Mirzapur, Tangail, spanning 8 acres with four European palaces (Maharaj Lodge, Ananda Bhaban, Chowdhury Lodge, Kalicharan Lodge) and Bishakha Sagar lake. Entry fee: 100 BDT. Easily reached from Natiapara on the highway."
    },
    {
        keywords: ["২০১", "201", "গম্বুজ", "মসজিদ", "গোপালপুর"],
        enKeywords: ["201", "dome", "mosque", "201 dome mosque", "gopalpur"],
        answer: "🕌 **২০১ গম্বুজ মসজিদ**: গোপালপুরের দক্ষিণ পাথালিয়া গ্রামে অবস্থিত পৃথিবীর সবচেয়ে বেশি গম্বুজবিশিষ্ট দৃষ্টিনন্দন মসজিদ। এর রয়েছে ৪৫১ ফুট উঁচু একক মিনার এবং মসজিদের দেয়াল জুড়ে পিতলে খোদাই করা সম্পূর্ণ পবিত্র কুরআন শরিফ। একসঙ্গে ১৫ হাজার মুসল্লি নামাজ আদায় করতে পারেন।",
        enAnswer: "🕌 **The 201 Dome Mosque**: Located in South Pathalia village, Gopalpur, Tangail, holding the world record for the highest number of domes and a 451-foot minaret. The entire Holy Quran is inscribed in brass on its interior walls, accommodating 15,000 worshippers."
    },
    {
        keywords: ["আতিয়া", "আতিয়া", "১০ টাকা", "১০ টাকার নোট", "দেলদুয়ার"],
        enKeywords: ["atiya", "atiya mosque", "10 taka note", "delduar"],
        answer: "🕌 **ঐতিহাসিক আতিয়া মসজিদ**: দেলদুয়ার উপজেলায় অবস্থিত ১৬০৯ সালে নির্মিত সুলতানি ও মুঘল স্থাপত্যরীতির অপূর্ব সংমিশ্রণ। সুফি সাধক বাবা আদম কাশ্মীরির মাজার সংলগ্ন এই ঐতিহাসিক মসজিদটির ছবি বাংলাদেশ ব্যাংকের ১০ টাকার নোটে মুদ্রিত ছিল।",
        enAnswer: "🕌 **Historic Atiya Mosque**: Erected in 1609 AD in Delduar, blending Sultanate and Mughal terra-cotta craftsmanship in honor of Sufi saint Baba Adam Kashmiri. It was famously depicted on Bangladesh's older 10 Taka banknote."
    },
    {
        keywords: ["মধুপুর", "আনারস", "শালবন", "জাতীয় উদ্যান"],
        enKeywords: ["madhupur", "pineapple", "sal forest", "national park"],
        answer: "🍍 **মধুপুর**: বাংলাদেশের রসালো আনারস (জলডুগি ও জায়ান্ট কিউ) এবং লাল মাটির ঐতিহ্যবাহী শালবনের রাজধানী! এখানে রয়েছে ১৯৬২ সালে প্রতিষ্ঠিত মধুপুর জাতীয় উদ্যান, দোখলা ভিআইপি রেস্ট হাউস, হরিণ প্রজনন কেন্দ্র এবং আদিবাসী গারো সম্প্রদায়ের সংস্কৃতি।",
        enAnswer: "🍍 **Madhupur**: The capital of sweet pineapples and primeval Sal forests in Bangladesh! Features Madhupur National Park (established 1962), deer breeding reserve, Dokhla Forest Rest House, and indigenous Garo cultural heritage."
    },
    {
        keywords: ["হাসপাতাল", "ডাক্তার", "অ্যাম্বুলেন্স", "জরুরি", "এম্বুলেন্স", "স্বাস্থ্য"],
        enKeywords: ["hospital", "doctor", "ambulance", "emergency", "health", "kumudini"],
        answer: "🏥 **জরুরি স্বাস্থ্যসেবা হটলাইন**:\n" +
                "• টাঙ্গাইল ২৫০ শয্যা জেনারেল হাসপাতাল: **০১৭৩০-৩২৪৪৭৭**\n" +
                "• মির্জাপুর কুমুদিনী হাসপাতাল: **০১৭১১-৪২৮৯১৫**\n" +
                "• জেলা পুলিশ কন্ট্রোল রুম: **০১৩২০-০৮৭২৯৮**\n" +
                "• ফায়ার সার্ভিস: **০১৭৩০-০০৩২১১**\n" +
                "• জাতীয় জরুরি সেবা: **৯৯৯** (সার্বক্ষণিক ফ্রি কল)",
        enAnswer: "🏥 **Tangail Emergency Healthcare Hotlines**:\n" +
                  "• Tangail 250-Bed General Hospital: **01730-324477**\n" +
                  "• Kumudini Hospital (Mirzapur): **01711-428915**\n" +
                  "• Police Control Room: **01320-087298**\n" +
                  "• Fire Service & Rescue: **01730-003211**\n" +
                  "• National Emergency Helpline: **999** (Toll-free 24/7)"
    },
    {
        keywords: ["ভাসানী", "মওলানা", "কাগমারী", "সন্তোষ", "এমবিএসটিইউ"],
        enKeywords: ["bhashani", "mawlana bhashani", "santosh", "mbstu"],
        answer: "✊ **মজলুম জননেতা মওলানা আব্দুল হামিদ খান ভাসানী**: টাঙ্গাইলের সন্তোষে চিরনিদ্রায় শায়িত আছেন। এখানে তাঁর স্মৃতিবিজড়িত মাজার শরিফ, দরবার হল, জাদুঘর এবং তাঁর প্রতিষ্ঠিত ঐতিহ্যবাহী **মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (MBSTU)** অবস্থিত।",
        enAnswer: "✊ **Mawlana Abdul Hamid Khan Bhashani**: Revered leader of the oppressed, resting peacefully in Santosh, Tangail. Visit his memorial shrine, Darbar Hall, and **Mawlana Bhashani Science & Technology University (MBSTU)**."
    },
    {
        keywords: ["পুলিশ", "নিরাপত্তা", "থানা", "এসপি"],
        enKeywords: ["police", "security", "sp", "police station", "law enforcement"],
        answer: "🚓 **টাঙ্গাইল জেলা পুলিশ কন্ট্রোল রুম**: ০১৩২০-০৮৭২৯৮ | পুলিশ সুপার (SP): ০১৩২০-০৮৭২০০। যেকোনো তাৎক্ষণিক জরুরি প্রয়োজনে সরাসরি **৯৯৯** নম্বরে ডায়াল করুন।",
        enAnswer: "🚓 **Tangail District Police Control Room**: 01320-087298 | Superintendent of Police (SP): 01320-087200. In any immediate emergency, dial **999** for instant assistance."
    },
    {
        keywords: ["যমুনা", "সেতু", "বঙ্গবন্ধু সেতু", "ভূঞাপুর"],
        enKeywords: ["jamuna", "bridge", "bangabandhu bridge", "bhuapur", "yamuna"],
        answer: "🌉 **বঙ্গবন্ধু যমুনা সেতু**: ভূঞাপুর সীমান্তে অবস্থিত বাংলাদেশের যোগাযোগ ব্যবস্থার অন্যতম মাইলফলক। সেতু সংলগ্ন যমুনার মনোরম সূর্যাস্ত, চর এবং যমুনা রিসোর্ট পর্যটকদের জন্য আকর্ষণীয় গন্তব্য।",
        enAnswer: "🌉 **Bangabandhu Jamuna Bridge**: Located in Bhuapur connecting northern Bangladesh with the capital. Features spectacular river sunsets, sandbars, and the scenic recreational Jamuna Resort."
    },
    {
        keywords: ["বাসুলিয়া", "চাপড়া বিল", "বাসাইল", "মিনি কক্সবাজার"],
        enKeywords: ["basulia", "chapra beel", "basail", "mini cox's bazar"],
        answer: "🌊 **বাসুলিয়া চাপড়া বিল**: বাসাইল উপজেলায় অবস্থিত বিশাল জলরাশি। বর্ষাকালে এটি সাগরের মতো রূপ ধারণ করে বলে একে 'টাঙ্গাইলের মিনি কক্সবাজার' বলা হয়। পানিতে নিমজ্জিত হিজল গাছ ও নৌভ্রমণ এর প্রধান আকর্ষণ।",
        enAnswer: "🌊 **Basulia Chapra Beel**: Located in Basail, transforming during the monsoon into an oceanic wetland dubbed Tangail's 'Mini Cox\\'s Bazar', featuring boat rides through flooded Hijol groves."
    },
    {
        keywords: ["হাই", "হ্যালো", "কেমন", "বট", "টাঙ্গাইল বট"],
        enKeywords: ["hello", "hi", "hey", "bot", "tangailbot"],
        answer: "👋 আসসালামু আলাইকুম ও শুভেচ্ছা! আমি **টাঙ্গাইল বট** — ঐতিহ্যবাহী টাঙ্গাইল জেলার তথ্য সহায়তাকারী AI।\n\nটাঙ্গাইলের পোড়াবাড়ির চমচম, ৪টি জিআই পণ্য, তাঁতের শাড়ি, ১২টি উপজেলা, দর্শনীয় স্থান, ঐতিহাসিক মন্দির বা জরুরি হটলাইন সম্পর্কে যেকোনো প্রশ্ন করুন!",
        enAnswer: "👋 Hello and welcome! I am **TangailBot** — your smart digital assistant for Tangail District.\n\nFeel free to ask me anything about Tangail\\'s Porabari Chomchom, 4 GI certified products, handloom sarees, 12 upazilas, tourist sites, historic temples, or 24/7 emergency hotlines!"
    }
];
