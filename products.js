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
            "Fast, intense strobing ground-level flashes with rapid blinking white light bursts",
            "Pure white strobe effects with high-frequency flicker for strong visual impact",
            "Very low-height ground effect (no aerial shots), focused on rhythmic flashing sequence",
            "Typically 10–20 second burn style performance depending on ignition spread",
            "Commonly used for backyard parties, driveway celebrations, and pre-firework warm-up displays"
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
            "Soft ground-level bloom effect that opens into flower-like spark patterns",
            "Golden sparks with occasional red and green tint variations depending on burn cycle",
            "Smooth, slow-blooming ground effects with steady emission rather than bursts",
            "Each unit produces a short but visually layered bloom sequence",
            "Popular for backyard gatherings, family events, and casual celebration openings"
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
            "Steady cone fountain performance with continuous upward spark emission",
            "Gold-heavy sparks with occasional coloured crackle bursts (red, green, silver)",
            "Medium-height fountain effect with consistent spray pattern",
            "Each cone runs in a sustained burn sequence rather than discrete shots",
            "Commonly used for backyard parties, driveway displays, and holiday celebrations"
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
            "Dynamic fountain effect with star-like sparks that rise and scatter outward",
            "Multi-colour output including gold, red, green, and blue star bursts",
            "Moderate height fountain with shimmering, dancing spark motion",
            "Smooth continuous burn with visually rhythmic sparkle flow",
            "Popular for birthday parties, backyard celebrations, and evening events"
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
            "High-intensity fountain with aggressive spark output and dense emission",
            "Strong crackling effects combined with multi-colour bursts",
            "Higher vertical spray compared to standard fountains, creating dramatic presence",
            "Sustained multi-phase burn with escalating intensity",
            "Used for larger backyard events, school celebrations, and community gatherings"
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
            "High-energy fountain with chaotic multi-directional spark patterns",
            "Psychedelic mix of vibrant colours including neon-style green, purple, red, and gold",
            "Strong crackle bursts combined with swirling spark motion effect",
            "One of the most visually intense ground fountain sequences in the category",
            "Commonly used for major celebrations, night events, and standout backyard shows"
        ]
    },

    {
        id: "300",
        title: "Assorted Floral Boom 4-Pack",
        video: "video/air-bombs/assorted-floral-boom-4-pack.mp4",
        image: "images/air-bombs/assorted-floral-boom-4-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$13.49"
    },

    {
        id: "301",
        title: "Bombardo 6 pack",
        video: "video/air-bombs/bombardo-6-pack.mp4",
        image: "images/air-bombs/bombardo-6-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$6.99"
    },

    {
        id: "302",
        title: "Whistling Sonic Boom 6 Pack",
        video: "video/air-bombs/whistling-sonic-boom-6-pack.mp4",
        image: "images/air-bombs/whistling-sonic-boom-6-pack.png",
        duration: "20s",
        category: "Air Bombs",
        price: "$9.99"
    },

    {
        id: "400",
        title: "Fireball Class 4 Pack",
        video: "video/candles-barrages/fireball-class-4-pack.mp4",
        image: "images/candles-barrages/fireball-class-4-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$11.99"
    },

    {
        id: "401",
        title: "Meteoroids",
        video: "video/candles-barrages/meteoroids.mp4",
        image: "images/candles-barrages/meteoroids.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$8.99"
    },

    {
        id: "402",
        title: "Cannon Barrage 3 Pack",
        video: "video/candles-barrages/cannon-barrage-3-pack.mp4",
        image: "images/candles-barrages/cannon-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$19.99"
    },

    {
        id: "403",
        title: "Crackling Barrage 3 Pack",
        video: "video/candles-barrages/crackling-barrage-3-pack.mp4",
        image: "images/candles-barrages/crackling-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages",
        price: "$54.99"
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
            "Aggressive rapid-fire performance with loud crackling breaks and hard-hitting aerial bursts",
            "Features vibrant red, gold, and mixed-colour effects with a strong finale sequence",
            "Popular for backyard parties, birthday celebrations, and late-night cottage gatherings"
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
          "Premium performance cake with wide aerial spread",
          "Layered glittering effects and loud finale-style breaks",
          "Produces vivid blue, green, red, and gold colour effects",
          "Multi-shot sequence delivers extended firing duration",
          "Often used during Canada Day events and large family gatherings"
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
          "Heavy aerial performance with dense sky coverage",
          "Combines crackles, peonies, glitter tails, and finale bursts",
          "Rich mixed-colour display with bright gold and deep red tones",
          "Large-volume multi-shot cake built for dramatic finales",
          "Frequently chosen for outdoor celebrations and special events"
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
    
        info: [
          "Compact but energetic performance with quick aerial pacing",
          "Features crackling breaks and shimmering sky effects",
          "Bright mixed-colour bursts with silver and red highlights",
          "Fast-firing multi-shot cake with strong visual impact",
          "Popular for smaller backyard celebrations and casual parties"
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
    
        info: [
          "Balanced performance with smooth firing rhythm and strong aerial height",
          "Includes glittering effects, loud reports, and colourful burst patterns",
          "Produces vibrant gold, silver, red, and green sky effects",
          "Multi-shot cake designed for medium-length performances",
          "Commonly used for holiday gatherings, neighbourhood celebrations, and birthdays"
        ]
    },

    {
        id: "700",
        title: "Proud to be Canadian",
        video: "video/kit/sample.mp4",
        image: "images/kit/proud-to-be-canadian.png",
        duration: "1 min",
        category: "Kit",
        price: "$279.99"
    },

    {
        id: "701",
        title: "Blast off",
        video: "video/kit/sample.mp4",
        image: "images/kit/blast-off.png",
        duration: "1 min",
        category: "Kit",
        price: "$25.99"
    },

    {
        id: "702",
        title: "Milky Way",
        video: "video/kit/sample.mp4",
        image: "images/kit/milky-way.png",
        duration: "1 min",
        category: "Kit",
        price: "$24.99"
    },

    {
        id: "703",
        title: "Outer Space",
        video: "video/kit/sample.mp4",
        image: "images/kit/outer-space.png",
        duration: "1 min",
        category: "Kit",
        price: "$99.99"
    },

    {
        id: "704",
        title: "Rocket Launcher",
        video: "video/kit/sample.mp4",
        image: "images/kit/rocket-launcher.png",
        duration: "1 min",
        category: "Kit",
        price: "$79.99"
    },

    {
        id: "705",
        title: "Shooting Stars",
        video: "video/kit/sample.mp4",
        image: "images/kit/shooting-stars.png",
        duration: "1 min",
        category: "Kit",
        price: "$39.99"
    },

    {
        id: "706",
        title: "Treasure Chest",
        video: "video/kit/sample.mp4",
        image: "images/kit/treasure-chest.png",
        duration: "1 min",
        category: "Kit",
        price: "$95.00"
    },

    {
        id: "707",
        title: "UFO Attack",
        video: "video/kit/sample.mp4",
        image: "images/kit/ufo-attack.png",
        duration: "1 min",
        category: "Kit",
        price: "$99.99"
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