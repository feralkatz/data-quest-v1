import type { Budget, DateIdea, Mood } from "@/types";

export const MOODS: {
  value: Mood;
  label: string;
  emoji: string;
  description: string;
}[] = [
  {
    value: "romantic",
    label: "Romantic",
    emoji: "💕",
    description: "Candlelit vibes & sweet moments",
  },
  {
    value: "adventurous",
    label: "Adventurous",
    emoji: "🌄",
    description: "Thrill-seeking & exploration",
  },
  {
    value: "cozy",
    label: "Cozy",
    emoji: "☕",
    description: "Warm blankets & low-key comfort",
  },
  {
    value: "creative",
    label: "Creative",
    emoji: "🎨",
    description: "Make something together",
  },
  {
    value: "foodie",
    label: "Foodie",
    emoji: "🍽️",
    description: "Flavor-first experiences",
  },
];

export const BUDGETS: {
  value: Budget;
  label: string;
  range: string;
  emoji: string;
}[] = [
  { value: "free", label: "Free", range: "$0", emoji: "✨" },
  { value: "budget", label: "Budget", range: "$1–30", emoji: "💵" },
  { value: "moderate", label: "Moderate", range: "$30–80", emoji: "💳" },
  { value: "splurge", label: "Splurge", range: "$80+", emoji: "💎" },
];

const dateIdeas: Record<Mood, Record<Budget, DateIdea[]>> = {
  romantic: {
    free: [
      {
        title: "Sunset Picnic at the Park",
        description:
          "Pack homemade snacks, a cozy blanket, and watch the sky turn golden together.",
        duration: "2–3 hours",
        tip: "Bring a playlist of songs that remind you of each other.",
        emoji: "🌅",
      },
      {
        title: "Love Letter Exchange",
        description:
          "Write heartfelt letters to each other, then read them aloud over tea at home.",
        duration: "1–2 hours",
        tip: "Hide the letters until you're both ready — the anticipation is half the magic.",
        emoji: "💌",
      },
      {
        title: "Stargazing Night",
        description:
          "Find a quiet spot away from city lights and map constellations together.",
        duration: "2 hours",
        tip: "Download a free stargazing app to name the stars you spot.",
        emoji: "✨",
      },
    ],
    budget: [
      {
        title: "Bookstore & Coffee Date",
        description:
          "Browse shelves hand-in-hand, pick a book for each other, then debrief over lattes.",
        duration: "2 hours",
        tip: "Set a $10 limit on the surprise book — creativity beats price.",
        emoji: "📚",
      },
      {
        title: "DIY Dessert Bar",
        description:
          "Buy ice cream, toppings, and sauces. Build outrageous sundaes for each other.",
        duration: "1 hour",
        tip: "Vote on whose creation wins — loser does the dishes.",
        emoji: "🍨",
      },
    ],
    moderate: [
      {
        title: "Couples Cooking Class",
        description:
          "Learn to make pasta from scratch at a local culinary studio.",
        duration: "3 hours",
        tip: "Wear matching aprons for bonus couple points.",
        emoji: "👨‍🍳",
      },
      {
        title: "Rooftop Dinner",
        description:
          "Reserve a table at a restaurant with skyline views and toast to your adventure.",
        duration: "2–3 hours",
        tip: "Ask for a corner table — quieter and more intimate.",
        emoji: "🌃",
      },
    ],
    splurge: [
      {
        title: "Private Sunset Cruise",
        description:
          "Charter a small boat for just the two of you as the sun dips below the horizon.",
        duration: "3 hours",
        tip: "Request champagne on board for the full cinematic moment.",
        emoji: "⛵",
      },
      {
        title: "Couples Spa Day",
        description:
          "Side-by-side massages, a soak in a private tub, and zero responsibilities.",
        duration: "Half day",
        tip: "Book the last slot of the day so you can linger without rushing.",
        emoji: "🧖",
      },
    ],
  },
  adventurous: {
    free: [
      {
        title: "Urban Hiking Challenge",
        description:
          "Pick 5 landmarks across the city and race to photograph them all.",
        duration: "3–4 hours",
        tip: "Loser buys the winner their favorite snack.",
        emoji: "🏃",
      },
      {
        title: "Geocaching Treasure Hunt",
        description:
          "Download a free geocaching app and hunt for hidden caches around town.",
        duration: "2–3 hours",
        tip: "Bring a small trinket to leave in the cache you find.",
        emoji: "🗺️",
      },
    ],
    budget: [
      {
        title: "Rock Climbing Intro",
        description:
          "Hit the local climbing gym for a beginner-friendly session together.",
        duration: "2 hours",
        tip: "Celebrate every route you finish, no matter how easy.",
        emoji: "🧗",
      },
      {
        title: "Kayak Rental",
        description:
          "Paddle side by side on a calm lake or river and explore hidden coves.",
        duration: "2–3 hours",
        tip: "Pack waterproof phone cases for epic action shots.",
        emoji: "🛶",
      },
    ],
    moderate: [
      {
        title: "Zip-Line Adventure",
        description:
          "Soar through the treetops on a guided zip-line course.",
        duration: "3 hours",
        tip: "Go for the sunset slot — views are unreal.",
        emoji: "🪂",
      },
      {
        title: "Escape Room Double Feature",
        description:
          "Tackle two themed escape rooms back-to-back and see who cracks codes faster.",
        duration: "2 hours",
        tip: "Pick opposite themes — mystery vs. sci-fi keeps it fresh.",
        emoji: "🔐",
      },
    ],
    splurge: [
      {
        title: "Hot Air Balloon Ride",
        description:
          "Float above the landscape at dawn with champagne waiting when you land.",
        duration: "3 hours",
        tip: "Book a weekday — fewer crowds, better photos.",
        emoji: "🎈",
      },
      {
        title: "Helicopter City Tour",
        description:
          "See your city from a breathtaking aerial perspective together.",
        duration: "1 hour",
        tip: "Sit on the same side for shared gasps at every landmark.",
        emoji: "🚁",
      },
    ],
  },
  cozy: {
    free: [
      {
        title: "Blanket Fort Movie Marathon",
        description:
          "Build an epic fort with every pillow in the house and binge a trilogy.",
        duration: "4+ hours",
        tip: "Make a snack tray beforehand so you never have to leave the fort.",
        emoji: "🏕️",
      },
      {
        title: "Rainy Day Board Game Battle",
        description:
          "Dust off classic board games and declare a best-of-three championship.",
        duration: "2–3 hours",
        tip: "Winner picks the next movie; loser makes hot chocolate.",
        emoji: "🎲",
      },
    ],
    budget: [
      {
        title: "Bakery Crawl",
        description:
          "Visit three local bakeries and rate each pastry like food critics.",
        duration: "2 hours",
        tip: "Share everything — half the fun is the taste test debate.",
        emoji: "🥐",
      },
      {
        title: "Thrift Store Styling",
        description:
          "Each pick an outfit for the other from a thrift store, then wear them out.",
        duration: "2 hours",
        tip: "Set a $15 cap — constraints spark the best creativity.",
        emoji: "👗",
      },
    ],
    moderate: [
      {
        title: "Pottery Painting Studio",
        description:
          "Paint mugs or bowls for each other at a cozy ceramics café.",
        duration: "2 hours",
        tip: "Paint something you'll actually use — daily reminders are sweet.",
        emoji: "🏺",
      },
      {
        title: "Fireplace Lounge Night",
        description:
          "Book a lounge with a real fireplace, order comfort food, and people-watch.",
        duration: "2–3 hours",
        tip: "Go on a weeknight for a quieter, more intimate atmosphere.",
        emoji: "🔥",
      },
    ],
    splurge: [
      {
        title: "Cabin Weekend Getaway",
        description:
          "Rent a secluded cabin with a hot tub, fireplace, and zero Wi-Fi.",
        duration: "Weekend",
        tip: "Bring a puzzle and a bottle of wine — that's the whole agenda.",
        emoji: "🏡",
      },
      {
        title: "Private Chef at Home",
        description:
          "Hire a chef to cook a multi-course comfort meal in your own kitchen.",
        duration: "3 hours",
        tip: "Request dishes from your childhood — nostalgia is the coziest spice.",
        emoji: "👩‍🍳",
      },
    ],
  },
  creative: {
    free: [
      {
        title: "Sidewalk Chalk Masterpiece",
        description:
          "Turn your driveway or a park path into a collaborative art gallery.",
        duration: "1–2 hours",
        tip: "Theme it: recreate your first date or dream vacation spot.",
        emoji: "🖍️",
      },
      {
        title: "Podcast Recording Date",
        description:
          "Use your phone to record a mini podcast episode about your love story.",
        duration: "1 hour",
        tip: "Prepare 5 fun questions for each other beforehand.",
        emoji: "🎙️",
      },
    ],
    budget: [
      {
        title: "Paint & Sip at Home",
        description:
          "Buy canvases and acrylics, follow a YouTube tutorial, and compare results.",
        duration: "2 hours",
        tip: "Paint portraits of each other — laughter guaranteed.",
        emoji: "🎨",
      },
      {
        title: "Record Store Dig",
        description:
          "Hunt for vinyl treasures at local shops, then listen to finds at home.",
        duration: "2–3 hours",
        tip: "Each pick one album the other has never heard.",
        emoji: "💿",
      },
    ],
    moderate: [
      {
        title: "Glass Blowing Workshop",
        description:
          "Create a custom ornament or paperweight with a guided glass artist.",
        duration: "2 hours",
        tip: "Make matching pieces — one for each of your desks.",
        emoji: "🔮",
      },
      {
        title: "Improv Comedy Class",
        description:
          "Take a beginner improv workshop and embrace the beautiful chaos.",
        duration: "2 hours",
        tip: "Say yes to everything — that's literally the first rule of improv.",
        emoji: "🎭",
      },
    ],
    splurge: [
      {
        title: "Professional Photo Shoot",
        description:
          "Hire a photographer for a styled couples session at your favorite spot.",
        duration: "2 hours",
        tip: "Bring outfit changes — casual and dressy tells a fuller story.",
        emoji: "📸",
      },
      {
        title: "Songwriting Session",
        description:
          "Work with a musician to write and record a song about your relationship.",
        duration: "3 hours",
        tip: "Frame the lyrics — it's the ultimate keepsake.",
        emoji: "🎵",
      },
    ],
  },
  foodie: {
    free: [
      {
        title: "Farmers Market Feast",
        description:
          "Sample free tastings, then assemble a picnic from the best finds.",
        duration: "2–3 hours",
        tip: "Split up and each surprise the other with one mystery ingredient.",
        emoji: "🥬",
      },
      {
        title: "Homemade Pizza Night",
        description:
          "Make dough from scratch and compete for the most creative topping combo.",
        duration: "2 hours",
        tip: "Blind taste-test each other's creations — no peeking.",
        emoji: "🍕",
      },
    ],
    budget: [
      {
        title: "Food Truck Tour",
        description:
          "Map out 4 food trucks and share small bites at each stop.",
        duration: "3 hours",
        tip: "Rate each truck 1–10 and crown a champion at the end.",
        emoji: "🚚",
      },
      {
        title: "International Grocery Adventure",
        description:
          "Visit an ethnic market, pick unfamiliar ingredients, and cook dinner together.",
        duration: "3 hours",
        tip: "Ask staff for recommendations — locals know best.",
        emoji: "🌍",
      },
    ],
    moderate: [
      {
        title: "Omakase Sushi Experience",
        description:
          "Let the chef surprise you with a curated tasting menu at the sushi bar.",
        duration: "2 hours",
        tip: "Sit at the bar — watching the craft is half the experience.",
        emoji: "🍣",
      },
      {
        title: "Wine & Cheese Pairing",
        description:
          "Visit a wine bar for a guided tasting with artisan cheeses.",
        duration: "2 hours",
        tip: "Take notes on favorites to recreate the board at home.",
        emoji: "🧀",
      },
    ],
    splurge: [
      {
        title: "Michelin-Star Tasting Menu",
        description:
          "Splurge on a multi-course chef's tasting at the city's finest restaurant.",
        duration: "3 hours",
        tip: "Request the wine pairing — each course becomes a new story.",
        emoji: "⭐",
      },
      {
        title: "Private Cooking with a Chef",
        description:
          "Book a renowned chef for a private lesson featuring a cuisine you've never tried.",
        duration: "3 hours",
        tip: "Choose something ambitious — Korean BBQ or handmade pasta.",
        emoji: "🔪",
      },
    ],
  },
};

export function getDateIdeas(mood: Mood, budget: Budget): DateIdea[] {
  return dateIdeas[mood][budget];
}
