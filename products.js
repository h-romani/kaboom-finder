const products = [
    {
        id: "100",
        title: "Strobes 5 Pack",
        video: "video/ground-effects/strobes-5-pack.mp4",
        image: "images/ground-effects/strobes-5-pack.png",
        duration: "20s",
        category: "Ground Effects",
        price: "$2.99",
        info: [
            "fast ground-level strobe bursts",
            "high-frequency white flicker",
            "intense blinking light pattern",
            "no aerial lift (ground effect only)",
            "pure white dominant output",
            "10–20 sec burn style",
            "backyard parties, driveway shows, pre-show warmup"
          ]
    },
    
    {
        id: "102",
        title: "Ground Bloom 6 Pack",
        video: "video/ground-effects/ground-bloom-6-pack.mp4",
        image: "images/ground-effects/ground-bloom-6-pack.png",
        duration: "20s",
        category: "Ground Effects",
        price: "$3.49",
        info: [
            "soft blooming spark pattern",
            "flower-like ground spread",
            "slow steady burn sequence",
            "low-height ground effect",
            "gold base with red/green hints",
            "layered visual spark expansion",
            "family gatherings, casual backyard openings"
        ]
    },
    
    {
        id: "200",
        title: "Cone Collection 4 Pack",
        video: "video/fountains/cone-collection-4-pack.mp4",
        image: "images/fountains/cone-collection-4-pack.png",
        duration: "20s",
        category: "Fountains",
        price: "$6.79",
    
        info: [
            "continuous cone spray fountain",
            "steady upward spark stream",
            "medium-height ground fountain",
            "gold-heavy spark output",
            "red, green, silver crackle accents",
            "sustained burn (non-shot style)",
            "backyard parties, driveway celebrations, holidays"
          ]
    },

    {
        id: "201",
        title: "Dancing Stars",
        video: "video/fountains/dancing-stars.mp4",
        image: "images/fountains/dancing-stars.png",
        duration: "20s",
        category: "Fountains",
        price: "$6.99",
    
        info: [
            "dancing star spark fountain",
            "multi-colour star bursts",
            "moderate-height fountain effect",
            "gold, red, green, blue mix",
            "smooth continuous burn",
            "rhythmic sparkle flow",
            "birthdays, backyard events, evening celebrations"
          ]
    },

    {
        id: "202",
        title: "Burning High School",
        video: "video/fountains/burning-high-school.mp4",
        image: "images/fountains/burning-high-school.png",
        duration: "20s",
        category: "Fountains",
        price: "$18.99",
    
        info: [
            "high-intensity fountain output",
            "dense spark emission",
            "strong crackle + colour mix",
            "higher vertical spray than standard fountains",
            "multi-phase escalating burn",
            "red, green, gold bursts",
            "large backyard events, school shows, community nights"
          ]
    },

    {
        id: "203",
        title: "Psycho-delic Fountain",
        video: "video/fountains/psycho-delic-fountain.mp4",
        image: "images/fountains/psycho-delic-fountain.png",
        duration: "20s",
        category: "Fountains",
        price: "$22.99",
    
        info: [
            "chaotic multi-direction spark pattern",
            "neon-style colour mix effect",
            "strong crackle bursts",
            "swirling spark motion",
            "high visual intensity ground effect",
            "purple, green, red, gold tones",
            "major celebrations, night parties, standout backyard displays"
          ]
    },

    {
        id: "300",
        title: "Assorted Floral Boom 4-Pack",
        video: "video/air-bombs/assorted-floral-boom-4-pack.mp4",
        image: "images/air-bombs/assorted-floral-boom-4-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$13.49", 
        info: [
            "assorted floral effect shells",
            "multi-colour floral bursts",
            "mid–high aerial (~30–60m)",
            "red, green, blue, gold mix",
            "small shell pack variety",
            "small neighbour-friendly backyard shows"
          ]
    },

    {
        id: "301",
        title: "Bombardo 6 pack",
        video: "video/air-bombs/bombardo-6-pack.mp4",
        image: "images/air-bombs/bombardo-6-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$6.99", 
        info: [
            "whistling lift + pop effect",
            "air bomb mini report bursts",
            "inconsistent whistle-to-bang style",
            "low–mid aerial (~15–30m)",
            "6-shot small pack",
            "casual effects and noise"
        ]
    },

    {
        id: "302",
        title: "Whistling Sonic Boom 6 Pack",
        video: "video/air-bombs/whistling-sonic-boom-6-pack.mp4",
        image: "images/air-bombs/whistling-sonic-boom-6-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$9.99", 
        info: [
            "loud whistling ascent",
            "sharp sonic crack breaks",
            "rapid mini aerial bursts",
            "mid aerial (~20–40m)",
            "white flash + silver sparks",
            "6-shot whistle-based sequence",
            "quick backyard shows"
          ]
    },

    {
        id: "400",
        title: "Fireball Class 4 Pack",
        video: "video/candles-barrages/fireball-class-4-pack.mp4",
        image: "images/candles-barrages/fireball-class-4-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$11.99", 
        info: [
            "aerial shell-style bursts",
            "loud break + flash impact",
            "multi-colour peony explosions",
            "high aerial (~30–70m)",
            "red, green, gold mix",
            "4 individual heavy shots",
            "Canada Day, large backyard parties and finales"
          ]
    },

    {
        id: "401",
        title: "Meteoroids",
        video: "video/candles-barrages/meteoroids.mp4",
        image: "images/candles-barrages/meteoroids.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$8.99", 
        info: [
            "fast comet scatter effect",
            "meteor-style sky streaks",
            "silver + colour glitter trails",
            "mid aerial (~20–50m)",
            "gold, blue, green flickers",
            "rapid mini barrage shots",
            "backyard shows, mid-sequence of shot fillers, Canada Day"
          ]
    },

    {
        id: "402",
        title: "Cannon Barrage 3 Pack",
        video: "video/candles-barrages/cannon-barrage-3-pack.mp4",
        image: "images/candles-barrages/cannon-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$19.99", 
        info: [
            "mini barrage cannon bursts",
            "crackling star explosions",
            "quick rhythmic firing",
            "low–mid aerial (~15–35m)",
            "purple, green, red stars",
            "3 compact barrage units",
            "small parties, backyard celebrations, casual holidays"
          ]
    },

    {
        id: "403",
        title: "Crackling Barrage 3 Pack",
        video: "video/candles-barrages/crackling-barrage-3-pack.mp4",
        image: "images/candles-barrages/crackling-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$54.99", 
        info:  [
            "dense crackle-heavy bursts",
            "rapid sky crackling effect",
            "bright flash + spark rain",
            "mid aerial (~20–45m)",
            "white, gold, silver tones",
            "3 barrage cakes",
            "Canada Day, backyard night shows, filler between the bigger multi-shot cakes"
          ]
    },

    {
        id: "500",
        title: "Wham Bam",
        video: "video/multi-shot-cakes/wham-bam.mp4",
        image: "images/multi-shot-cakes/wham-bam.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$8.99"
    },

    {
        id: "501",
        title: "24 Shot Comet",
        video: "video/multi-shot-cakes/24-shot-comet.mp4",
        image: "images/multi-shot-cakes/24-shot-comet.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$9.99"
    },

    {
        id: "502",
        title: "party animal",
        video: "video/multi-shot-cakes/party-animal.mp4",
        image: "images/multi-shot-cakes/party-animal.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$32.99"
    },

    {
        id: "503",
        title: "Saturn Missiles",
        video: "video/multi-shot-cakes/saturn-missiles.mp4",
        image: "images/multi-shot-cakes/saturn-missiles.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$42.99"
    },

    {
        id: "504",
        title: "Danger Zone",
        video: "video/multi-shot-cakes/danger-zone.mp4",
        image: "images/multi-shot-cakes/danger-zone.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$21.99"
    },

    {
        id: "505",
        title: "Beerfest",
        video: "video/multi-shot-cakes/beerfest.mp4",
        image: "images/multi-shot-cakes/beerfest.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$59.98"
    },

    {
        id: "506",
        title: "Kaleidoscope",
        video: "video/multi-shot-cakes/kaleidoscope.mp4",
        image: "images/multi-shot-cakes/kaleidoscope.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$56.99"
    },

    {
        id: "507",
        title: "magic dragons",
        video: "video/multi-shot-cakes/magic-dragons.mp4",
        image: "images/multi-shot-cakes/magic-dragons.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$47.99"
    },

    {
        id: "508",
        title: "Pirate King",
        video: "video/multi-shot-cakes/pirate-king.mp4",
        image: "images/multi-shot-cakes/pirate-king.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$56.99"
    },

    {
        id: "509",
        title: "Rock and Roll",
        video: "video/multi-shot-cakes/rock-n-roll.mp4",
        image: "images/multi-shot-cakes/rock-n-roll.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$46.99"
    },

    {
        id: "510",
        title: "Air Strike",
        video: "video/multi-shot-cakes/air-strike.mp4",
        image: "images/multi-shot-cakes/air-strike.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$39.99"
    },

    {
        id: "511",
        title: "Bank Heist",
        video: "video/multi-shot-cakes/bank-heist.mp4",
        image: "images/multi-shot-cakes/bank-heist.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$59.99"
    },

    {
        id: "512",
        title: "Cake Pop 4 Pack",
        video: "video/multi-shot-cakes/cake-pop-4-pack.mp4",
        image: "images/multi-shot-cakes/cake-pop-4-pack.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$79.99"
    },

    {
        id: "513",
        title: "Jackpot",
        video: "video/multi-shot-cakes/jackpot.mp4",
        image: "images/multi-shot-cakes/jackpot.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$29.98"
    },

    {
        id: "514",
        title: "La Grande Finale",
        video: "video/multi-shot-cakes/la-grande-finale.mp4",
        image: "images/multi-shot-cakes/la-grande-finale.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$79.99"
    },

    {
        id: "515",
        title: "Strong & Free",
        video: "video/multi-shot-cakes/strong-free.mp4",
        image: "images/multi-shot-cakes/strong-free.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$79.99"
    },

    {
        id: "516",
        title: "Twilight Zone",
        video: "video/multi-shot-cakes/TwilightZone.mp4",
        image: "images/multi-shot-cakes/TwilightZone.jpg",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$-"
    },

    {
        id: "517",
        title: "Bursting Satellites",
        video: "video/multi-shot-cakes/BurstingSatellites.mp4",
        image: "images/multi-shot-cakes/BurstingSatellites.jpg",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$-"
    },

    {
        id: "518",
        title: "Ant Assault",
        video: "video/multi-shot-cakes/AntAssault.mp4",
        image: "images/multi-shot-cakes/AntAssault.jpg",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$-"
    },

    {
        id: "519",
        title: "Canadian Pride",
        video: "video/multi-shot-cakes/canadian-pride.mp4",
        image: "images/multi-shot-cakes/canadian-pride.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$65.99"
    },

    {
        id: "520",
        title: "Crackling Rain",
        video: "video/multi-shot-cakes/crackling-rain.mp4",
        image: "images/multi-shot-cakes/crackling-rain.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$49.99"
    },

    {
        id: "521",
        title: "Wave the Flag eh",
        video: "video/multi-shot-cakes/wave-the-flag-eh.mp4",
        image: "images/multi-shot-cakes/wave-the-flag-eh.png",
        duration: "20s",
        category: "Multi-shot Cakes",
        price: "$39.99"
    },

    {
        id: "600",
        title: "Kick ass",
        video: "video/kbx/kick-ass.mp4",
        image: "images/kbx/kick-ass.png",
        duration: "20s",
        category: "KBX",
        price: "$69.99",
        info: [
            "aggressive rapid-fire bursts",
            "loud crackling aerial breaks",
            "strong finale sequence",
            "mid–high aerial spread",
            "red, gold, multicolour flashes",
            "compact multi-shot performance",
            "backyard parties, birthdays, cottage nights"
          ]
    },

    {
        id: "601",
        title: "Awesome",
        video: "video/kbx/awesome.mp4",
        image: "images/kbx/awesome.png",
        duration: "20s",
        category: "KBX",
        price: "$79.99",
        info: [
            "wide aerial spread sequence",
            "glitter + layered burst effects",
            "extended multi-shot duration",
            "blue, green, red, gold palette",
            "loud finale-style breaks",
            "Canada Day, large family gatherings"
          ]
    },
    
    {
        id: "602",
        title: "Epic",
        video: "video/kbx/epic.mp4",
        image: "images/kbx/epic.png",
        duration: "20s",
        category: "KBX",
        price: "$79.99",
    
        info: [
            "dense aerial coverage bursts",
            "crackle + peony + glitter mix",
            "large-volume multi-shot design",
            "gold and deep red dominant tones",
            "extended dramatic finale sequence",
            "outdoor celebrations, major events, finale shows"
          ]
    },
    
    {
        id: "603",
        title: "OMG",
        video: "video/kbx/omg.mp4",
        image: "images/kbx/omg.png",
        duration: "20s",
        category: "KBX",
        price: "$59.99",
    
        info:  [
            "compact fast aerial pacing",
            "crackling burst effects",
            "shimmering sky spark trails",
            "bright red + silver highlights",
            "fast multi-shot firing",
            "high visual impact for size",
            "small backyard parties, casual celebrations"
          ]
    },
    
    {
        id: "604",
        title: "Wow",
        video: "video/kbx/wow.mp4",
        image: "images/kbx/wow.png",
        duration: "20s",
        category: "KBX",
        price: "$69.99",
    
        info:  [
            "smooth rhythmic firing",
            "medium–high aerial lift",
            "glitter + loud report bursts",
            "gold, silver, red, green mix",
            "multi-shot medium duration",
            "steady visual flow sequence",
            "holidays, birthdays, neighbourhood events"
          ]
    },

    {
        id: "700",
        title: "Proud to be Canadian",
        youtube: "https://www.youtube.com/watch?v=Xa05UYwHTh8",
        image: "images/kit/proud-to-be-canadian.png",
        duration: "1 min",
        category: "Kit",
        price: "$279.99",
        "info": [
            "multi-shot aerial cake",
            "backyard fireworks display",
            "fast-paced firing sequence",
            "strong finale burst",
            "peony-style colour breaks",
            "crackling star effects",
            "gold + strobe accents",
            "multi-colour palette (red, green, gold, blue)",
            "20–30+ shots per item inside (varies)",
            "148 shots total", 
            "layered vertical lifts",
            "rhythmic firing pattern",
            "Canada Day, Victoria Night parties, cottage nights"
          ]
          
    },

    {
        id: "701",
        title: "Blast off",
        youtube: "https://www.youtube.com/watch?v=7kZDYmA-tlw",
        image: "images/kit/blast-off.png",
        duration: "1 min",
        category: "Kit",
        price: "$25.99",
        info: [
            "quick-fire bursts",
            "silver comet trails",
            "glitter bursting designs - low pop frequency",
            "low–mid aerial reach (~10–30m)",
            "53 shots", 
            "silver, white tones",
            "small shot / tube-style bursts",
            "backyard shows, usually an opener firework to a combination of other kits"
        ]
        
    },

    {
        id: "702",
        title: "Milky Way",
        video: "video/kit/sample.mp4",
        image: "images/kit/milky-way.png",
        duration: "1 min",
        category: "Kit",
        price: "$24.99", 
        info:  [
            "steady firing rhythm",
            "starburst effects",
            "glitter + comet tails",
            "mid aerial height (~20–40m)",
            "blue, green, silver mix",
            "62 shots", 
            "medium shot count cake",
            "perfect for a quick and loud firework night"
          ]
    },

    {
        id: "703",
        title: "Outer Space",
        youtube: "https://www.youtube.com/watch?v=8NXLbio4LKU",
        image: "images/kit/outer-space.png",
        duration: "1 min",
        category: "Kit",
        price: "$99.99", 
        info: [
            "fast barrage sequence",
            "brocade + crackle breaks",
            "strobe-style bursts",
            "mid–high aerial (~30–50m)",
            "gold, red, multicolour",
            "higher shot count cake",
            "290 shots", 
            "cottage shows, finale firework"
        ]
    },

    {
        id: "704",
        title: "Rocket Launcher",
        youtube: "https://www.youtube.com/watch?v=z3R4F8KyTWg",
        image: "images/kit/rocket-launcher.png",
        duration: "1 min",
        category: "Kit",
        price: "$79.99", 
        info: [
            "rocket-style aerial shots",
            "fast lifts",
            "gold comet tails, crackle breaks",
            "high vertical reach (~40–80m)",
            "red, green, gold flashes",
            "single / multi rocket pack style",
            "223 shots", 
            "cottage skies,  similar to loud rocket-launching sounds, finale opener"
          ]
    },

    {
        id: "705",
        title: "Shooting Stars",
        youtube: "https://www.youtube.com/watch?v=MChzmxR33-s",
        image: "images/kit/shooting-stars.png",
        duration: "1 min",
        category: "Kit",
        price: "$39.99", 
        info: [
            "smooth star comet effects",
            "slow rhythmic burn",
            "sparkling tail trails",
            "mid aerial height (~20–50m)",
            "blue, silver, multicolour shimmer",
            "small shot count / fountain-cake hybrid",
            "79 shots", 
            "backyard shows, family fireworks nights"
          ]
    },

    {
        id: "706",
        title: "Treasure Chest",
        youtube: "https://www.youtube.com/watch?v=w0LgL2qPbPI",
        image: "images/kit/treasure-chest.png",
        duration: "1 min",
        category: "Kit",
        price: "$95.00", 
        info: [
            "most popular choice of the $100 kits", 
            "assorted multi-effect cake",
            "mixed rapid + slow firing",
            "crackling + peony bursts",
            "mid–high aerial (~30–60m)",
            "gold, red, green, strobe mix",
            "higher shot count variety pack style",
            "285 shots", 
            "most bang for the buck relative to shots and items", 
            "big backyard displays, the finales of the fireworks"
          ]
    },

    {
        id: "707",
        title: "UFO Attack",
        youtube: "https://www.youtube.com/watch?v=UEXlMOV2gWw", 
        image: "images/kit/ufo-attack.png",
        duration: "1 min",
        category: "Kit",
        price: "$99.99", 
        info: [
            "fast barrage aerial cake",
            "whistling + strobe effects",
            "flying saucer style crackle bursts",
            "similar to alien saucer sounds", 
            "mid–high aerial (~30–55m)",
            "green, white, red flashes",
            "multi-shot rapid sequence",
            "97 shots", 
            "night shows, themed parties, finale segment"
          ]
    },

    {
        id: "708",
        title: "Meteor Shower",
        youtube: "https://www.youtube.com/watch?v=HHRClZP569g",
        image: "images/kit/meteor-shower.webp",
        duration: "1 min",
        category: "Kit",
        price: "$69.99", 
        info: [
            "multi-shot barrage cake",
            "rapid comet rain effect",
            "silver + multicolour sparks",
            "mid aerial height (~20–45m)",
            "gold, red, green flickers",
            "dense sky-filling pattern",
            "186 shots", 
            "Canada Day, backyard shows, mid-display fillers of the fireworks shows"
          ]
    },

    {
        id: "709",
        title: "Air Raid",
        youtube: "https://www.youtube.com/watch?v=RERzxIa6xdQ",
        image: "images/kit/air-raid.webp",
        duration: "1 min",
        category: "Kit",
        price: "$139.99", 
        info : [
            "fast-fire barrage sequence",
            "loud crack + whistle mix",
            "strobe + crackle bursts",
            "mid–high aerial (~30–55m)",
            "red, green, white flashes",
            "high intensity shot clusters",
            "306 shots", 
            "second place for the most shots in a single kit", 
            "large backyard shows, party finale segment"
        ]
    },

    {
        id: "710",
        title: "Thunder & Lightning",
        youtube: "https://www.youtube.com/watch?v=r8cMMty88nk",
        image: "images/kit/thunder-lightning.webp",
        duration: "1 min",
        category: "Kit",
        price: "$169.99",
        info: [
            "heavy crackle + flash bursts",
            "loud thunder-like report effects",
            "strobe white + gold flicker",
            "mid–high aerial (~30–60m)",
            "gold, white dominant palette",
            "punchy timed firing rhythm",
            "342 shots", 
            "first place for the most shots in a single kit", 
            "Nighttime finale shows"
          ]
    },

    {
        id: "711",
        title: "Missile Tower",
        youtube: "https://www.youtube.com/watch?v=c95WrmUayOI",
        image: "images/kit/missile-tower.webp",
        duration: "1 min",
        category: "Kit",
        price: "$199.99", 
        info : [   
            "vertical missile barrage cake",
            "whistling launch sequence",
            "silver comet tails",
            "mid aerial (~25–45m)",
            "red, green, gold pops",
            "stacked rapid-fire tubes",            
            "starter stack of multi-shot cakes", 
            "99 shots", 
            "backyard displays, opener or mid-show impact piece"
        ]
    },

    {
        id: "712",
        title: "Missile Launch",
        youtube: "https://www.youtube.com/watch?v=cU4Om8lNOXU",
        image: "images/kit/missile-launch.webp",
        duration: "1 min",
        category: "Kit",
        price: "$299.99", 
        info: [
            "rapid missile-style firing",
            "whistling ascent bursts",
            "silver tail comets",
            "mid aerial (~25–40m)",
            "red, green, white flashes",
            "compact shot sequence (~20–30 shots typical)",
            "intermediate stack of multi-shot cakes", 
            "142 shots", 
            "Small–mid backyard shows and warm-up item"
          ]
    },

    {
        id: "713",
        title: "Missile Attack",
        youtube: "https://www.youtube.com/watch?v=9MGM21HEH0c",
        image: "images/kit/missile-attack.webp",
        duration: "1 min",
        category: "Kit",
        price: "$529.99", 
        info: [
            "fast barrage fire sequence",
            "heavy sky-filling bursts",
            "crackling + strobe breaks",
            "mid–high aerial (~30–60m)",
            "gold, red, green, silver mix",
            "dense comet + peony layering",
            "the STACK of multi-shot cakes in a single kit", 
            "someone would think that there was a multiple bombs happening outside", 
            "kids will love you but neighbors will HATE you", 
            "260 shots", 
            "Cottage finales and Big backyard shows"
          ]
    },

    {
        id: "714",
        title: "KBX Experience",
        youtube: "https://www.youtube.com/watch?v=9-j01wdOXMA",
        image: "images/kit/kbx-experience.webp",
        duration: "1 min",
        category: "Kit",
        price: "$349.99", 
        info: [
            "premium multi-effect show of all KBX cakes",
            "the most popular choice of the $100+ kits",
            "varied tempo firing (slow → fast)",
            "peony, willow, strobe combinations",
            "mid–high aerial (~30–70m)",
            "rich multicolour palette",
            "large shot count barrage format",
            "sound of death boxes", 
            "162 shots", 
            "full-show centerpiece, Canada or Victoria Day, major celebrations"
          ]
    },
  ];

  const combos = [
    {
        id: "combo-001",
        title: "Backyard Starter Pack",
        category: "Combo",
        products: ["100", "102", "200"]
    },

    {
        id: "combo-002",
        title: "Night Show Pack",
        category: "Combo",
        products: ["203", "202", "201"],
    },

    {
        id: "combo-003",
        title: "Ultimate Canadian Birthday",
        category: "Combo",
        products: ["510", "515", "519", "521"],
    }
  ];