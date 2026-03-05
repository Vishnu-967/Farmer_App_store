/**
 * Farmer Portal - Native Telugu Translation Dictionary
 * Focus: High-fidelity, natural agricultural terminology
 */

const translations = {
    en: {
        nav_title: "Farmer Portal",
        welcome: "Welcome,",
        hello: "Hello,",
        overview_msg: "Here is your farming overview for today.",
        quick_actions: "Quick Actions",
        weather: "Weather",
        weather_desc: "Check local forecast",
        crop_info: "Crop Info",
        crop_info_desc: "Guidelines & tips",
        market_prices: "Market Prices",
        market_prices_desc: "Current Mandi rates",
        schemes: "Schemes",
        schemes_desc: "Govt. subsidies",
        buy_sell: "Buy and Sell",
        buy_sell_desc: "Seeds, Tools & more",
        profit_calc: "Farm Profit Calc",
        profit_calc_desc: "Expense & Profit",
        chat_support: "Chat Support",
        chat_support_desc: "Expert Advice",
        profile: "Profile",
        profile_desc: "Manage account",
        news_title: "Latest Farming News",
        view_all: "View all news &rarr;",
        logout: "Logout",
        guest_user: "Guest Farmer",
        default_user: "Farmer",
        logout_title: "Logged Out Successfully",
        logout_quote1: "Fields rest at sunset, but farmers never stop dreaming. <br> Come back soon and keep growing with us.",
        logout_quote2: "The strength of our nation grows from its farms. <br> Thank you for being its backbone. Visit again.",
        login_again: "Login Again",

        // Profile Specific
        profile_title: "Profile & Settings",
        personal_info: "Personal Info",
        farming_details: "Farming Details",
        portal_settings: "Portal Settings",
        help_support: "Help & Support",
        full_name: "Full Name",
        phone_number: "Phone Number",
        email: "Email Address",
        village: "Primary Village",
        land_size: "Land Size",
        main_crop: "Current Main Crop",
        secondary_crop: "Secondary Crop",
        soil_type: "Soil Type",
        bank_details: "Bank Details (Optional)",
        link_bank_btn: "+ Link Bank Account",
        bank_placeholder: "No bank details linked yet. Link your bank to receive direct government subsidies.",
        // Crops
        crop_paddy: "Paddy (Rice)",
        crop_wheat: "Wheat",
        crop_cotton: "Cotton",
        crop_tomato: "Tomato",
        crop_onion: "Onion",
        crop_carrot: "Carrot",

        // Crop Details (English)
        rice_soil: "Alluvial, clayey, and loamy soils that can retain water are ideal.",
        rice_season: "Kharif (June-July) and Rabi (November-December).",
        wheat_soil: "Well-drained fertile loamy and clayey loamy soils.",
        wheat_season: "Rabi (October-December).",
        cotton_soil: "Black cotton soil (Regur) is best, but also grows in loamy soils.",
        cotton_season: "Kharif (May-July).",
        tomato_soil: "Well-drained sandy loam or clay loam soils with high organic matter.",
        tomato_season: "Kharif (June-July), Rabi (October-November), and Summer (January-February).",
        onion_soil: "Sandy loam to clay loam soils with good drainage.",
        onion_season: "Kharif (June-July) and Rabi (October-November).",
        carrot_soil: "Deep, well-drained sandy loam soils allow for straight root development.",
        carrot_season: "Winter season (September-November).",

        // Crop Intelligence Labels
        sowing_harvesting_label: "🗓 Sowing & Harvesting",
        fertilizer_label: "💊 Fertilizer Recommendation",
        pest_control_label: "🐛 Pest & Disease Control",
        diseases_treatment_label: "🦠 Diseases & Treatment",
        irrigation_label: "💧 Irrigation Suggestions",
        yield_duration_label: "📈 Yield & Duration",

        // Rice Detailed
        rice_sowing_harvesting: "Sowing: June-July (Kharif), Nov-Dec (Rabi). Harvesting: Nov-Dec (Kharif), Mar-Apr (Rabi).",
        rice_fertilizer: "Urea, DAP, MOP (120:60:40 NPK ratio). Apply Zinc Sulfate if leaves turn yellowish.",
        rice_pest_control: "Stem borer, Leaf folder, Blast disease. Use Neem oil or recommended fungicides.",
        rice_diseases: "Blast, Sheath Blight, Bacterial Leaf Blight. Treatment: Use Tricyclazole or valid bio-fungicides.",
        rice_irrigation: "Maintain 2-5cm water level. Use Alternative Wetting and Drying (AWD) to save water.",
        rice_yield_duration: "Yield: 5-8 tonnes/hectare. Duration: 120-150 days (4-5 months).",

        // Wheat Detailed
        wheat_sowing_harvesting: "Sowing: Oct-Dec. Harvesting: March-April.",
        wheat_fertilizer: "120:50:40 NPK. First dose at sowing, second at first irrigation (21 days).",
        wheat_pest_control: "Rust (Brown/Yellow), Aphids. Use Propiconazole or recommended organic sprays.",
        wheat_diseases: "Leaf Rust, Loose Smut, Powdery Mildew. Treatment: Seed treatment with Carbendazim; spray Propiconazole.",
        wheat_irrigation: "4-6 irrigations required. Crown Root Initiation (CRI) stage is most critical.",
        wheat_yield_duration: "Yield: 4-5 tonnes/hectare. Duration: 110-140 days (4 months).",

        // Cotton Detailed
        cotton_sowing_harvesting: "Sowing: May-July. Harvesting: Oct-Jan (multiple pickings).",
        cotton_fertilizer: "100:50:50 NPK. Use organic manure (FYM) for better soil health.",
        cotton_pest_control: "Pink Bollworm, Whitefly. Use pheromone traps and avoid excessive nitrogen.",
        cotton_diseases: "Root Rot, Wilt, Leaf Spot. Treatment: Soil drenching with Copper Oxychloride; maintain drainage.",
        cotton_irrigation: "Drip irrigation is highly recommended. Critical stages: Flowering and Boll development.",
        cotton_yield_duration: "Yield: 2-3 tonnes/hectare. Duration: 160-180 days (6 months).",

        // Tomato Detailed
        tomato_sowing_harvesting: "Sowing: June-July, Oct-Nov. Harvesting: Starts after 70-80 days.",
        tomato_fertilizer: "100:80:60 NPK. Regular Boron application prevents fruit cracking.",
        tomato_pest_control: "Fruit borer, Leaf curl virus, Early blight. Maintain field sanitation.",
        tomato_diseases: "Early Blight, Late Blight, Fusarium Wilt. Treatment: Spray Mancozeb or Copper based fungicides.",
        tomato_irrigation: "Keep soil moist but not waterlogged. Drip irrigation prevents disease spread.",
        tomato_yield_duration: "Yield: 20-40 tonnes/hectare. Duration: 100-120 days (4 months).",

        // Onion Detailed
        onion_sowing_harvesting: "Sowing: June-July (Kharif), Oct-Nov (Rabi). Harvesting: Oct-Nov (Kharif), March-May (Rabi).",
        onion_fertilizer: "100:50:50 NPK + 20kg Sulfur. Apply half N and full P, K at planting.",
        onion_pest_control: "Thrips, Purple blotch. Use yellow sticky traps and avoid sprinkler irrigation at night.",
        onion_diseases: "Purple Blotch, Downy Mildew, Basal Rot. Treatment: Spray Hexaconazole or Mancozeb.",
        onion_irrigation: "Frequent light irrigations. Stop irrigation 15 days before harvesting.",
        onion_yield_duration: "Yield: 15-25 tonnes/hectare. Duration: 120-140 days (4-5 months).",

        // Carrot Detailed
        carrot_sowing_harvesting: "Sowing: Sept-Nov. Harvesting: Starts after 80-100 days.",
        carrot_fertilizer: "80:40:100 NPK. Avoid fresh manure; use well-decomposed compost.",
        carrot_pest_control: "Leaf spot, Root knot nematode. Practice crop rotation and deep summer plowing.",
        carrot_diseases: "Alternaria Leaf Blight, Powdery Mildew. Treatment: Apply Chlorothalonil or organic sulfur sprays.",
        carrot_irrigation: "Regular watering is essential for root crispness. Avoid soil crusting.",
        carrot_yield_duration: "Yield: 20-30 tonnes/hectare. Duration: 90-110 days (3.5 months).",
        // Schemes Features
        features: "Features",
        eligibility: "Eligibility Criteria",
        documents: "Required Documents",
        apply_link: "Apply Link",
        last_date: "Last Date Reminder",

        pm_kisan_title: "PM-KISAN (Direct Income Support)",
        pm_kisan_desc: "₹6,000 per year in three installments",
        pm_kisan_elig: "Small and marginal farmers with land up to 2 hectares.",
        pm_kisan_docs: "Aadhaar card, Land documents, Bank account details.",
        pm_kisan_rem: "Next installment due in April 2026.",

        pmfby_title: "PM Fasal Bima Yojana (Crop Insurance)",
        pmfby_desc: "Financial Protection against Crop Loss",
        pmfby_elig: "All farmers including sharecroppers and tenant farmers growing notified crops.",
        pmfby_docs: "Aadhaar, Bank Passbook, Land records/Rent agreement, Sowing certificate.",
        pmfby_rem: "Last date for Kharif: July 31, 2026.",

        pmksy_title: "PM Krishi Sinchayee (Irrigation)",
        pmksy_desc: "Drip & Sprinkler Subsidies",
        pmksy_elig: "Farmers with valid land ownership and access to a water source.",
        pmksy_docs: "Aadhaar, Land records, Quotation from registered dealer, Water source proof.",
        pmksy_rem: "Apply before Monsoon push: July 31, 2026.",

        kcc_title: "Kisan Credit Card (KCC)",
        kcc_desc: "Low-interest credit for farming needs",
        kcc_elig: "All farmers, including owner cultivators/tenant farmers.",
        kcc_docs: "KYC documents, Land ownership proof, Crop details.",
        kcc_rem: "Renew your KCC limit by May 30, 2026 to maintain low interest.",

        agri_mech_title: "Farm Equipment Subsidy",
        agri_mech_desc: "Subsidy on tractors and tools",
        agri_mech_elig: "Registered farmers and individual owners.",
        agri_mech_docs: "Farmer ID, Land record (Pattadar Passbook), Quotation of equipment.",
        agri_mech_rem: "Deadline for current batch: March 15, 2026.",
    },
    te: {
        nav_title: "రైతు పోర్టల్",
        welcome: "స్వాగతం,",
        hello: "నమస్కారం,",
        overview_msg: "ఈ రోజు మీ వ్యవసాయ సమాచారం ఇక్కడ ఉంది.",
        quick_actions: "త్వరిత సేవలు",
        weather: "వాతావరణం",
        weather_desc: "స్థానిక వాతావరణ సమాచారం",
        crop_info: "పంట సమాచారం",
        crop_info_desc: "సలహాలు మరియు సూచనలు",
        market_prices: "మార్కెట్ ధరలు",
        market_prices_desc: "ప్రస్తుత మండి ధరలు",
        schemes: "పథకాలు",
        schemes_desc: "ప్రభుత్వ రాయితీలు",
        buy_sell: "కొనుగోలు మరియు అమ్మకం",
        buy_sell_desc: "విత్తనాలు, పనిముట్లు మరియు మరిన్ని",
        profit_calc: "వ్యవసాయ లాభాల గణన",
        profit_calc_desc: "ఖర్చులు మరియు లాభం",
        chat_support: "రైతు చాట్ సపోర్ట్",
        chat_support_desc: "నిపుణుల సలహా",
        profile: "ప్రొఫైల్",
        profile_desc: "ఖాతా నిర్వహణ",
        news_title: "తాజా వ్యవసాయ వార్తలు",
        view_all: "అన్ని వార్తలు చూడండి &rarr;",
        logout: "లాగ్ అవుట్",
        // Profile Specific
        profile_title: "ప్రొఫైల్ మరియు సెట్టింగ్‌లు",
        personal_info: "వ్యక్తిగత సమాచారం",
        farming_details: "వ్యవసాయ వివరాలు",
        portal_settings: "పోర్టల్ సెట్టింగ్‌లు",
        help_support: "సహాయం మరియు మద్దతు",
        full_name: "పూర్తి పేరు",
        phone_number: "ఫోన్ నంబర్",
        email: "ఈమెయిల్ చిరునామా",
        village: "గ్రామం",
        land_size: "భూమి విస్తీర్ణం",
        main_crop: "ప్రస్తుత ప్రధాన పంట",
        secondary_crop: "రెండవ పంట",
        soil_type: "నేల రకం",
        bank_details: "బ్యాంక్ వివరాలు (ఐచ్ఛికం)",
        link_bank_btn: "+ బ్యాంక్ ఖాతాను అనుసంధానించండి",
        bank_placeholder: "ఇంకా బ్యాంక్ వివరాలు జత చేయలేదు. ప్రభుత్వ రాయితీలను నేరుగా పొందడానికి మీ బ్యాంక్ ఖాతాను జత చేయండి.",
        // Schemes
        schemes_title: "ప్రభుత్వ పథకాలు",
        nav_schemes: "ప్రభుత్వ పథకాల పోర్టల్",
        schemes_hero: "అందుబాటులో ఉన్న పథకాలు & రాయితీలు",
        schemes_sub: "రైతులకు ప్రత్యక్ష ఆర్థిక మరియు సాంకేతిక మద్దతు.",
        seasonal_pri: "కాలానుగుణ ప్రాధాన్యత",
        high_subsidy: "ఎక్కువ రాయితీ",
        limited_slots: "పరిమిత స్లాట్లు",
        pmfby_title: "పీఎం ఫసల్ బీమా యోజన (పంట బీమా)",
        pmfby_desc: "పంట నష్టానికి వ్యతిరేకంగా ఆర్థిక రక్షణ",
        what_covered: "ఏమి కవర్ చేయబడింది?",
        pmfby_covered: "ప్రకృతి వైపరీత్యాలు, కరువు, వరదలు, తెగుళ్లు మొదలైన వాటి వల్ల కలిగే పంట నష్టాలకు సమగ్ర రక్షణ.",
        pmfby_deadline: "ఖరీఫ్ చివరి తేదీ: జూలై 31, 2026.",
        pmksy_title: "పీఎం కృషి సించాయి యోజన (నీటి పారుదల)",
        pmksy_desc: "డ్రిప్ & స్ప్రింక్లర్ రాయితీలు",
        purpose: "ఉద్దేశ్యం",
        pmksy_purpose: "సూక్ష్మ నీటి పారుదల (డ్రిప్/స్ప్రింక్లర్) వ్యవస్థల కోసం ఆర్థిక సాయం అందించడం.",
        pmksy_deadline: "వర్షాకాలం ముందు దరఖాస్తు చేసుకోండి: జూలై 31, 2026.",
        agri_mech_title: "వ్యవసాయ యాంత్రీకరణ",
        agri_mech_desc: "వ్యవసాయ పరికరాల రాయితీ",
        benefits: "ప్రయోజనాలు",
        agri_mech_benefits: "ట్రాక్టర్లు, టిల్లర్లు మరియు హార్వెస్టర్లపై 40% నుండి 50% రాయితీ.",
        agri_mech_deadline: "ప్రస్తుత బ్యాచ్ చివరి తేదీ: మార్చి 15, 2026.",
        apply_online: "ఆన్‌లైన్ లో దరఖాస్తు చేసుకోండి",
        // Schemes Features
        features: "ప్రయోజనాలు",
        eligibility: "అర్హత ప్రమాణాలు",
        documents: "కావలసిన పత్రాలు",
        apply_link: "దరఖాస్తు లింక్",
        last_date: "చివరి తేదీ గడువు",

        pm_kisan_title: "పీఎం-కిసాన్ (నేరుగా ఆదాయ మద్దతు)",
        pm_kisan_desc: "సంవత్సరానికి మూడు విడతల్లో ₹6,000",
        pm_kisan_elig: "2 హెక్టార్ల వరకు భూమి ఉన్న చిన్న, సన్నకారు రైతులు.",
        pm_kisan_docs: "ఆధార్ కార్డు, భూమి పత్రాలు, బ్యాంక్ ఖాతా వివరాలు.",
        pm_kisan_rem: "తదుపరి విడత ఏప్రిల్ 2026లో అందుతుంది.",

        pmfby_title: "పీఎం ఫసల్ బీమా యోజన (పంట బీమా)",
        pmfby_desc: "పంట నష్టానికి వ్యతిరేకంగా ఆర్థిక రక్షణ",
        pmfby_elig: "నోటిఫై చేయబడిన పంటలు పండించే వాటాదారులు మరియు కౌలు రైతులు సహా అందరు రైతులు.",
        pmfby_docs: "ఆధార్, బ్యాంకు పాస్‌బుక్, భూమి రికార్డులు/అద్దె ఒప్పందం, విత్తిన ధృవీకరణ పత్రం.",
        pmfby_rem: "ఖరీఫ్ చివరి తేదీ: జూలై 31, 2026.",

        pmksy_title: "పీఎం కృషి సించాయి యోజన (నీటి పారుదల)",
        pmksy_desc: "డ్రిప్ & స్ప్రింక్లర్ రాయితీలు",
        pmksy_elig: "చెల్లుబాటు అయ్యే భూమి యాజమాన్యం మరియు నీటి వనరు ఉన్న రైతులు.",
        pmksy_docs: "ఆధార్, భూమి రికార్డులు, నమోదిత డీలర్ నుండి కొటేషన్, నీటి వనరు నిరూపణ.",
        pmksy_rem: "వర్షాకాలం ముందు దరఖాస్తు చేసుకోండి: జూలై 31, 2026.",

        kcc_title: "కిసాన్ క్రెడిట్ కార్డ్ (KCC)",
        kcc_desc: "వ్యవసాయ అవసరాల కోసం తక్కువ వడ్డీ రుణం",
        kcc_elig: "సొంత భూమి ఉన్న రైతులు మరియు కౌలు రైతులు అందరూ.",
        kcc_docs: "కేవైసీ పత్రాలు, భూమి యాజమాన్య నిరూపణ, పంట వివరాలు.",
        kcc_rem: "తక్కువ వడ్డీ రేటును కొనసాగించడానికి మీ KCC పరిమితిని మే 30, 2026 లోపు పునరుద్ధరించుకోండి.",
        // Weather
        weather_page_title: "వాతావరణ సమాచారం",
        weather_title: "స్మార్ట్ వాతావరణ డ్యాష్‌బోర్డ్",
        kadapa_ap: "కడప, ఆంధ్రప్రదేశ్",
        weather_analysis: "నిజ-సమయ వ్యవసాయ వాతావరణ విశ్లేషణ",
        auto_detect: "స్థానాన్ని గుర్తించండి",
        mostly_sunny: "ఎక్కువగా ఎండగా ఉంటుంది",
        feels_like: "అనిపించే ఉష్ణోగ్రత",
        humidity: "గాలిలో తేమ",
        wind_speed: "గాలి వేగం",
        visibility: "కనిపించే దూరం",
        uv_index: "యువి ఇండెక్స్",
        forecast_7day: "7-10 రోజుల వాతావరణ సూచన",
        hourly_forecast: "రాబోయే 24 గంటల వాతావరణం",
        rain_alerts: "వర్షం మరియు హెచ్చరికలు",
        sunrise: "సూర్యోదయం",
        sunset: "సూర్యాస్తమయం",
        day_length: "పగటి సమయం",
        farming_advice: "వ్యవసాయ సలహా",
        farming_guide: "వ్యవసాయ నిర్ణయ మార్గదర్శి",
        good_irrigation: "నీటి పారుదలకి అనుకూలం",
        irrigation_desc: "వేడి వల్ల ఆవిరి ఎక్కువగా ఉంటుంది. ఉదయాన్నే నీరు పెట్టడం మంచిది.",
        // Index / Login Page
        index_welcome: "రైతు పోర్టల్‌కు స్వాగతం",
        index_tagline: "రేపటి మంచి భవిష్యత్తు కోసం రైతులకు అండగా",
        username_label: "యూజర్ నేమ్",
        username_placeholder: "మీ యూజర్ నేమ్ నమోదు చేయండి",
        password_label: "పాస్‌వర్డ్",
        password_placeholder: "మీ పాస్‌వర్డ్ నమోదు చేయండి",
        remember_me: "నన్ను గుర్తుంచుకో",
        forgot_password: "పాస్‌వర్డ్ మరిచిపోయారా?",
        login_btn: "లాగిన్",
        new_to_portal: "పోర్టల్‌కు కొత్తవారా?",
        create_account: "ఖాతాను సృష్టించండి",
        motto: "రైతులే దేశానికి వెన్నెముక",
        // Crop Info Page
        select_crop: "పంటను ఎంచుకోండి",
        back: "వెనక్కి",
        crop_details_label: "పంట వివరాలు",
        soil_label: "అనుకూలమైన నేలలు",
        season_label: "పంట కాలం",
        // Market Prices Page
        market_prices: "మార్కెట్ ధరలు",
        market_prices_title: "మండి మార్కెట్ ధరలు",
        select_commodity: "పంట రకాన్ని ఎంచుకోండి",
        choose_crop: "-- పంటను ఎంచుకోండి --",
        choose_location: "-- ప్రాంతాన్ని ఎంచుకోండి --",
        market_placeholder: "మార్కెట్ ధరలను చూడటానికి పంట మరియు ప్రాంతాన్ని ఎంచుకోండి.",
        view_details: "వివరాలను చూడండి",
        min_price: "కనిష్ట ధర",
        avg_price: "సగటు ధర",
        max_price: "గరిష్ట ధర",
        arrival_qty: "వచ్చిన పరిమాణం",
        per: "ప్రతి",
        tonnes_reached: "టన్నులు మార్కెట్‌కు చేరుకున్నాయి",
        weekly_trend: "వారంవారీ సగటు ధర ధోరణి (గత 4 వారాలు)",
        // Buy & Sell Page
        buy_sell: "కొనుగోలు మరియు అమ్మకం",
        marketplace_title: "రైతు మార్కెట్ ప్లేస్",
        post_ad: "ప్రకటనను పోస్ట్ చేయండి",
        back_to_portal: "పోర్టల్‌కి తిరిగి వెళ్ళండి",
        all_items: "అన్ని వస్తువులు",
        equipment_vehicles: "పరికరాలు & వాహనాలు",
        seeds_fertilizers: "విత్తనాలు & ఎరువులు",
        livestock_tab: "పశుసంపద",
        tag_equipment: "పరికరాలు",
        contact_seller: "విక్రేతను సంప్రదించండి",
        search_items: "పరికరాలు లేదా విత్తనాల కోసం వెతకండి",
        category_all: "అన్నీ",
        category_seeds: "విత్తనాలు",
        category_tools: "పనిముట్లు",
        view_contact: "సంప్రదించండి",
        price: "ధర",
        // Calculator Page
        calc_header: "వ్యవసాయ సంబంధిత లెక్కలు",
        income_tab: "ఆదాయం మరియు ఖర్చులు",
        profit_tab: "లాభాల విశ్లేషణ",
        add_income: "ఆదాయాన్ని జోడించండి",
        add_expense: "ఖర్చును జోడించండి",
        item_name: "వివరము",
        amount: "మొత్తం (₹)",
        category: "వర్గము",
        total_income: "మొత్తం ఆదాయం",
        total_expense: "మొత్తం ఖర్చు",
        net_profit: "నికర లాభం",
        calculate: "లాభాన్ని లెక్కించండి",
        seed_cost: "విత్తనాల ఖర్చు",
        fertilizer_cost: "ఎరువుల ఖర్చు",
        labor_cost: "కూలీల ఖర్చు",
        market_price: "ఆశించిన మార్కెట్ ధర",
        estimated_profit: "మొత్తం అంచనా లాభం",
        // Chat Page
        chat_header: "రైతు చాట్ సపోర్ట్",
        expert_online: "వ్యవసాయ నిపుణులు అందుబాటులో ఉన్నారు",
        type_msg: "మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి...",
        send: "పంపండి",
        expert_greet: "నమస్కారం! నేను మీ వ్యవసాయ నిపుణుడిని. ఈ రోజు నేను మీకు ఏ విధంగా సహాయపడగలను?",
        // Crops - Native Terms
        crop_cotton: "పత్తి",
        crop_paddy: "వరి",
        crop_tomato: "టమోటా",
        crop_onion: "ఉల్లిపాయ",
        crop_carrot: "క్యారెట్",
        crop_wheat: "గోధుమ",

        // Crop Details (Telugu)
        rice_soil: "నీటిని నిలుపుకోగల ఒండ్రు, బంకమట్టి మరియు లోమీ నేలలు అనుకూలం.",
        rice_season: "ఖరీఫ్ (జూన్-జూలై) మరియు రబీ (నవంబర్-డిసెంబర్).",
        wheat_soil: "బాగా నీరు పోయే సారవంతమైన లోమీ మరియు బంకమట్టి నేలలు.",
        wheat_season: "రబీ (అక్టోబర్-డిసెంబర్).",
        cotton_soil: "నల్ల రేగడి నేలలు ఉత్తమం, లోమీ నేలల్లో కూడా పండుతుంది.",
        cotton_season: "ఖరీఫ్ (మే-జూలై).",
        tomato_soil: "సేంద్రియ పదార్థం ఎక్కువగా ఉన్న, నీరు నిలవని ఇసుక లోమ్ లేదా క్లే లోమ్ నేలలు.",
        tomato_season: "ఖరీఫ్ (జూన్-జూలై), రబీ (అక్టోబర్-నవంబర్) మరియు వేసవి (జనవరి-ఫిబ్రవరి).",
        onion_soil: "నీరు నిలవని ఇసుక లోమ్ నుండి క్లే లోమ్ నేలలు.",
        onion_season: "ఖరీఫ్ (జూన్-జూలై) మరియు రబీ (అక్టోబర్-నవంబర్).",
        carrot_soil: "లోతైన, నీరు నిలవని ఇసుక లోమ్ నేలలు వేర్లు తిన్నగా పెరగడానికి అనుకూలం.",
        carrot_season: "శీతాకాలం (సెప్టెంబర్-నవంబర్).",

        // Crop Intelligence Labels
        sowing_harvesting_label: "🗓 విత్తడం & కోత సమయం",
        fertilizer_label: "💊 ఎరువుల సిఫార్సు",
        pest_control_label: "🐛 తెగుళ్లు & నివారణ చిట్కాలు",
        diseases_treatment_label: "🦠 రోగాలు & నివారణా చర్యలు",
        irrigation_label: "💧 నీటి పారుదల సూచనలు",
        yield_duration_label: "📈 దిగుబడి & కాలపరిమితి",

        // Rice Detailed
        rice_sowing_harvesting: "విత్తడం: జూన్-జూలై (ఖరీఫ్), నవంబర్-డిసెంబర్ (రబీ). కోత: నవంబర్-డిసెంబర్ (ఖరీఫ్), మార్చి-ఏప్రిల్ (రబీ).",
        rice_fertilizer: "యూరియా, డీఏపీ, ఎంఓపీ (120:60:40 ఎన్‌పీకే నిష్పత్తి). ఆకులు పసుపు రంగులోకి మారితే జింక్ సల్ఫేట్ వాడండి.",
        rice_pest_control: "కాండం తొలిచే పురుగు, ఆకు ముడత, అగ్గి తెగులు. వేప నూనె లేదా సిఫార్సు చేసిన మందులు వాడండి.",
        rice_diseases: "అగ్గి తెగులు, పాము పొడ తెగులు, బ్యాక్టీరియా ఆకు ఎండు తెగులు. నివారణ: ట్రైసైక్లోజోల్ లేదా బయో-ఫంగిసైడ్లు వాడండి.",
        rice_irrigation: "పెరుగుదల దశలో 2-5 సెం.మీ నీరు ఉంచండి. నీటిని ఆదా చేయడానికి AWD పద్ధతిని వాడండి.",
        rice_yield_duration: "దిగుబడి: హెక్టారుకు 5-8 టన్నులు. కాలపరిమితి: 120-150 రోజులు (4-5 నెలలు).",

        // Wheat Detailed
        wheat_sowing_harvesting: "విత్తడం: అక్టోబర్-డిసెంబర్. కోత: మార్చి-ఏప్రిల్.",
        wheat_fertilizer: "120:50:40 ఎన్‌పీకే. మొదటి వాయిదా విత్తేటప్పుడు, రెండవది మొదటి తడి (21వ రోజు) సమయంలో.",
        wheat_pest_control: "తుప్పు తెగులు (గోధుమ/పసుపు), పేనుబంక. ప్రొపికోనజోల్ లేదా సిఫార్సు చేసిన సేంద్రియ మందులు వాడండి.",
        wheat_diseases: "ఆకు తుప్పు తెగులు, కాటుక తెగులు. నివారణ: కార్బండిజంతో విత్తన శుద్ధి; ప్రొపికోనజోల్ పిచికారీ చేయండి.",
        wheat_irrigation: "4-6 తడులు అవసరం. కిరీటం వేర్లు వచ్చే దశ (CRI) చాలా ముఖ్యం.",
        wheat_yield_duration: "దిగుబడి: హెక్టారుకు 4-5 టన్నులు. కాలపరిమితి: 110-140 రోజులు (4 నెలలు).",

        // Cotton Detailed
        cotton_sowing_harvesting: "విత్తడం: మే-జూలై. కోత: అక్టోబర్-జనవరి (విడతల వారీగా).",
        cotton_fertilizer: "100:50:50 ఎన్‌పీకే. మెరుగైన నేల ఆరోగ్యం కోసం పశువుల ఎరువును వాడండి.",
        cotton_pest_control: "గులాబీ రంగు పురుగు, తెల్లదోమ. ఫెరోమోన్ ట్రాప్‌లు వాడండి, నత్రజని మరీ ఎక్కువగా వాడకండి.",
        cotton_diseases: "వేరు కుళ్ళు తెగులు, వడలు తెగులు, ఆకు మచ్చ తెగులు. నివారణ: కాపర్ ఆక్సిక్లోరైడ్‌తో నేల తడపండి.",
        cotton_irrigation: "బిందు సేద్యం (Drip) ఉత్తమం. పూత మరియు కాయ దశలు చాలా ముఖ్యం.",
        cotton_yield_duration: "దిగుబడి: హెక్టారుకు 2-3 టన్నులు. కాలపరిమితి: 160-180 రోజులు (6 నెలలు).",

        // Tomato Detailed
        tomato_sowing_harvesting: "విత్తడం: జూన్-జూలై, అక్టోబర్-నవంబర్. కోత: 70-80 రోజుల తర్వాత ప్రారంభమవుతుంది.",
        tomato_fertilizer: "100:80:60 ఎన్‌పీకే. బోరాన్ వాడటం వల్ల కాయలు పగలకుండా ఉంటాయి.",
        tomato_pest_control: "కాయ తొలిచే పురుగు, ఆకు ముడత వైరస్, ముందస్తు మాగుడు తెగులు. పొలంలో పరిశుభ్రత పాటించండి.",
        tomato_diseases: "ముందస్తు మరియు ఆలస్యపు మాగుడు తెగులు, వడలు తెగులు. నివారణ: మాంకోజెబ్ లేదా కాపర్ ఆధారిత మందులు.",
        tomato_irrigation: "నేల తేమగా ఉండాలి కానీ నీరు నిలవకూడదు. బిందు సేద్యం వల్ల తెగుళ్లు తక్కువగా వస్తాయి.",
        tomato_yield_duration: "దిగుబడి: హెక్టారుకు 20-40 టన్నులు. కాలపరిమితి: 100-120 రోజులు (4 నెలలు).",

        // Onion Detailed
        onion_sowing_harvesting: "విత్తడం: జూన్-జూలై (ఖరీఫ్), అక్టోబర్-నవంబర్ (రబీ). కోత: అక్టోబర్-నవంబర్ (ఖరీఫ్), మార్చి-మే (రబీ).",
        onion_fertilizer: "100:50:50 ఎన్‌పీకే + 20 కిలోల గంధకం. సగం నత్రజని, పూర్తి భాస్వరం మరియు పొటాష్ నాటేటప్పుడు వాడండి.",
        onion_pest_control: "నల్లి (Thrips), ఊదారంగు మచ్చ తెగులు. పసుపు రంగు జిగురు అట్టలు వాడండి.",
        onion_diseases: "ఊదారంగు మచ్చ తెగులు, డౌనీ మిల్డ్యూ, మొదలు కుళ్ళు. నివారణ: హెక్సాకోనజోల్ లేదా మాంకోజెబ్ పిచికారీ చేయండి.",
        onion_irrigation: "తరచుగా తేలికపాటి తడులు ఇవ్వాలి. కోతకు 15 రోజుల ముందు నీరు ఆపివేయాలి.",
        onion_yield_duration: "దిగుబడి: హెక్టారుకు 15-25 టన్నులు. కాలపరిమితి: 120-140 రోజులు (4-5 నెలలు).",

        // Carrot Detailed
        carrot_sowing_harvesting: "విత్తడం: సెప్టెంబర్-నవంబర్. కోత: 80-100 రోజుల తర్వాత ప్రారంభమవుతుంది.",
        carrot_fertilizer: "80:40:100 ఎన్‌పీకే. తాజా ఎరువులు వాడకండి; బాగా చివికిన కంపోస్టు వాడండి.",
        carrot_pest_control: "ఆకు మచ్చ తెగులు, వేరు నాడి పురుగు. పంట మార్పిడి మరియు వేసవిలో లోతు దుక్కులు దున్నండి.",
        carrot_diseases: "ఆకు మాగుడు తెగులు, బూజు తెగులు. నివారణ: క్లోరోథలోనిల్ లేదా సేంద్రియ గంధకం పిచికారీ చేయండి.",
        carrot_irrigation: "వేర్లు కరకరలాడాలంటే క్రమంగా నీరు అందించాలి. నేల గట్టిపడకుండా చూడాలి.",
        carrot_yield_duration: "దిగుబడి: హెక్టారుకు 20-30 టన్నులు. కాలపరిమితి: 90-110 రోజులు (3.5 నెలలు).",
        // Logic terms
        avoid_spraying: "ఈ రోజు మందులు చల్లకండి - వర్షం పడే అవకాశం ఉంది",
        good_irrigation: "నీటి పారుదలకి మంచి రోజు",
        high_wind: "గాలి వేగం ఎక్కువగా ఉంది - జాగ్రత్త",
        guest_user: "అతిథి రైతు",
        default_user: "రైతు",
        logout_title: "విజయవంతంగా లాగ్ అవుట్ అయ్యారు",
        logout_quote1: "సూర్యాస్తమయం వేళ పొలాలు విశ్రమిస్తాయి, కానీ రైతుల కలలు ఎప్పటికీ ఆగవు. <br> త్వరలో తిరిగి రండి మరియు మాతో కలిసి అభివృద్ధి చెందండి.",
        logout_quote2: "మన దేశ బలం దాని పొలాల నుండి పెరుగుతుంది. <br> దాని వెన్నెముకగా ఉన్నందుకు మీకు ధన్యవాదాలు. మళ్ళీ సందర్శించండి.",
        login_again: "మళ్ళీ లాగిన్ చేయండి"

    }
};

/**
 * Global Translator Helper
 */
function applyGlobalTranslations(lang) {
    const t = translations[lang] || translations.en;

    // Auto-translate elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Handle special cases (concatenated text, specific components)
    const welcomeNav = document.querySelector('.welcome-text');
    if (welcomeNav) {
        const strong = welcomeNav.querySelector('strong');
        if (strong) {
            welcomeNav.innerHTML = `${t.welcome} <strong>${strong.innerText}</strong>`;
        }
    }

    const helloHeader = document.querySelector('.header-content h1');
    if (helloHeader) {
        const name = helloHeader.innerText.split(', ')[1] || helloHeader.innerText.split(' ')[1] || 'Madhu';
        helloHeader.innerText = `${t.hello} ${name}`;
    }
}

/**
 * Ensures all internal links carry forward the language and user state
 */
function persistStateInLinks(lang, user) {
    if (!lang && !user) return;

    const internalPages = [
        'dashboard.html', 'weather.html', 'crop_info.html',
        'market_prices.html', 'schemes.html', 'buy_sell.html',
        'profile.html', 'calculators.html', 'chat.html', 'logout.html'

    ];

    document.querySelectorAll('a').forEach(link => {
        let href = link.getAttribute('href');
        if (!href || href === '#' || href.startsWith('javascript:')) return;

        const isInternal = internalPages.some(page => href.includes(page));

        if (isInternal) {
            try {
                const url = new URL(href, window.location.origin);
                url.searchParams.set('lang', lang);
                if (user) url.searchParams.set('user', user);

                // Keep relative path if possible
                const newHref = href.split('?')[0] + '?' + url.searchParams.toString();
                link.setAttribute('href', newHref);
            } catch (e) {
                // Skip invalid URLs
            }
        }
    });
}

// Initial detection
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const user = urlParams.get('user');

    applyGlobalTranslations(lang);
    persistStateInLinks(lang, user);

    // Set language selector value if it exists
    const langSelect = document.getElementById('global-lang-select') || document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
});

function changePortalLanguage(lang) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', lang);
    window.location.search = urlParams.toString();
}
