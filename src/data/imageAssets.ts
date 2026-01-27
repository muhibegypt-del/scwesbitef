/**
 * SOUL CARAVAN IMAGE ASSETS
 * Curated and categorized from ImageKit library.
 * All images are production-ready.
 */

const BASE_URL = 'https://ik.imagekit.io/dzmabcda0/finals';

export const IMAGES = {
    // ===========================
    // WATER WELLS (9 images)
    // ===========================
    WATER: {
        // Child using water tap - great for hero / emotional
        CHILD_TAP_1: `${BASE_URL}/1-DSC00120.jpg`,
        CHILD_TAP_2: `${BASE_URL}/4-DSC00119.jpg`,
        CHILD_DRINKING: `${BASE_URL}/2-DSC00121.jpg`,
        // Well signage & installation
        SIGNAGE_INSTALL_1: `${BASE_URL}/3-DSC00170.jpg`,
        SIGNAGE_INSTALL_2: `${BASE_URL}/5-DSC00169.jpg`,
        // Water tank structures
        TANK_VILLAGE_1: `${BASE_URL}/6-DSC00850.jpg`,
        TANK_VILLAGE_2: `${BASE_URL}/7-DSC00848.jpg`,
        TANK_LANDSCAPE: `${BASE_URL}/8-DSC00857.jpg`,
        // Person collecting water
        GIRL_COLLECTING: `${BASE_URL}/9-DSC00914.jpg`,
    },

    // ===========================
    // MASJID
    // ===========================
    MASJID: {
        MAIN: 'https://ik.imagekit.io/dzmabcda0/WhatsApp%20Image%202026-01-22%20at%206.18.03%20PM.jpeg',
    },

    // ===========================
    // EDUCATION (7 images)
    // ===========================
    EDUCATION: {
        // Classroom portraits
        GIRL_DESK: `${BASE_URL}/10-DSC00188.jpg`,
        BOY_NOTEBOOK: `${BASE_URL}/27-DSC00246.jpg`,
        BOY_SMILING: `${BASE_URL}/28-DSC00262.jpg`,
        FRIENDS_BLACKBOARD: `${BASE_URL}/29-DSC00256.jpg`,
        // Tutoring / learning
        TUTOR_SESSION: `${BASE_URL}/31-DSC00213.jpg`,
        KIDS_CLASSROOM: `${BASE_URL}/32-DSC00187.jpg`,
    },

    // ===========================
    // HOT MEALS (4 images)
    // ===========================
    HOT_MEALS: {
        HALL_DISTRIBUTION: `${BASE_URL}/11-DSC00048.jpg`,
        CHILD_EATING: `${BASE_URL}/12-DSC00080.jpg`,
        GIRL_PLATE: `${BASE_URL}/13-DSC00025.jpg`,
        BOY_PLATE: `${BASE_URL}/14-DSC00018.jpg`,
    },

    // ===========================
    // FOOD PARCEL (5 images)
    // ===========================
    FOOD_PARCEL: {
        POT_SETUP: `${BASE_URL}/15-DSC00003.jpg`,
        COMMUNITY_DISTRIBUTION: `${BASE_URL}/20-DSC00749.jpg`,
        WOMAN_CARRYING_ORANGE: `${BASE_URL}/21-DSC00776.jpg`,
        WOMAN_CARRYING_BLUE: `${BASE_URL}/22-DSC00625.jpg`,
        PARCEL_CLOSEUP: `${BASE_URL}/23-DSC00606.jpg`,
        // New additions
        PARCEL_ADDITION_1: 'https://ik.imagekit.io/dzmabcda0/DSC00708.jpg',
        PARCEL_ADDITION_2: 'https://ik.imagekit.io/dzmabcda0/DSC00688.jpg',
    },

    // ===========================
    // QURBANI (7 images)
    // ===========================
    QURBANI: {
        QUEUE_OUTSIDE: `${BASE_URL}/16-DSC00788.jpg`,
        HANDING_BAG: `${BASE_URL}/17-DSC00819.jpg`,
        WIDE_QUEUE: `${BASE_URL}/18-DSC00784.jpg`,
        MOTHER_CHILD: `${BASE_URL}/19-DSC00785.jpg`,
        BANNER_GOATS: `${BASE_URL}/24-DSC00601.jpg`,
        COMMUNITY_GATHERING: `${BASE_URL}/25-DSC00589.jpg`,
        GOATS_HOLDING: `${BASE_URL}/26-DSC00564.jpg`,
        GOATS_BANNER_2: `${BASE_URL}/30-DSC00557.jpg`,
    },

    // ===========================
    // GENERAL / HERO (curated picks)
    // ===========================
    HERO: [
        `${BASE_URL}/9-DSC00914.jpg`,   // Girl at water well - iconic
        `${BASE_URL}/29-DSC00256.jpg`,  // Kids at blackboard - education
        `${BASE_URL}/13-DSC00025.jpg`,  // Girl with plate - food
        `${BASE_URL}/24-DSC00601.jpg`,  // Qurbani banner
        `${BASE_URL}/21-DSC00776.jpg`,  // Woman with parcel
    ],

    // ===========================
    // UPDATE ASSETS (2025)
    // ===========================
    UPDATES_2025: {
        EDUCATION: {
            HERO_MAIN: 'https://ik.imagekit.io/dzmabcda0/DSC00398.jpg',
            FEATURE_SCHOOL: 'https://ik.imagekit.io/dzmabcda0/DSC00535.jpg',
            MEAL_PROGRAM: 'https://ik.imagekit.io/dzmabcda0/2025?updatedAt=1768994319467',
            GALLERY_GENERIC: 'https://ik.imagekit.io/dzmabcda0/DSC00203.jpg',
        },
        WATER: {
            AMINA_STORY: 'https://ik.imagekit.io/dzmabcda0/DSC00133.JPG',
        },
    },
};

// Convenient arrays for page use
export const WATER_WELL_IMAGES = [
    IMAGES.WATER.GIRL_COLLECTING,
    IMAGES.WATER.CHILD_TAP_1,
    IMAGES.WATER.TANK_LANDSCAPE,
    IMAGES.WATER.SIGNAGE_INSTALL_1,
];

export const EDUCATION_IMAGES = [
    IMAGES.EDUCATION.FRIENDS_BLACKBOARD,
    IMAGES.EDUCATION.BOY_NOTEBOOK,
    IMAGES.EDUCATION.TUTOR_SESSION,
    IMAGES.EDUCATION.GIRL_DESK,
];

export const FOOD_RELIEF_IMAGES = [
    IMAGES.HOT_MEALS.GIRL_PLATE,
    IMAGES.HOT_MEALS.CHILD_EATING,
    IMAGES.FOOD_PARCEL.WOMAN_CARRYING_ORANGE,
    IMAGES.FOOD_PARCEL.POT_SETUP,
];

export const QURBANI_IMAGES = [
    IMAGES.QURBANI.BANNER_GOATS,
    IMAGES.QURBANI.HANDING_BAG,
    IMAGES.QURBANI.MOTHER_CHILD,
    IMAGES.QURBANI.GOATS_HOLDING,
];

export const ORPHAN_CARE_IMAGES = [
    IMAGES.EDUCATION.BOY_SMILING,
    IMAGES.HOT_MEALS.CHILD_EATING,
    IMAGES.EDUCATION.KIDS_CLASSROOM,
    IMAGES.FOOD_PARCEL.COMMUNITY_DISTRIBUTION,
];
