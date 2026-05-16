const products = [
    {
        id: "100",
        title: "Strobes 4 Pack",
        video: "video/ground-effects/strobes-5-pack.mp4",
        image: "images/ground-effects/strobes-5-pack.png",
        duration: "20s",
        category: "Ground Effects"
    },

    {
        id: "102",
        title: "Ground Bloom 6 Pack",
        video: "video/ground-effects/ground-bloom-6-pack.mp4",
        image: "images/ground-effects/ground-bloom-6-pack.png",
        duration: "20s",
        category: "Ground Effects"
    },

    {
        id: "200",
        title: "Cone Collection 4 Pack",
        video: "video/fountains/cone-collection-4-pack.mp4",
        image: "images/fountains/cone-collection-4-pack.png",
        duration: "20s",
        category: "Fountains"
    },

    {
        id: "201",
        title: "Dancing Stars",
        video: "video/fountains/dancing-stars.mp4",
        image: "images/fountains/dancing-stars.png",
        duration: "20s",
        category: "Fountains"
    },

    {
        id: "202",
        title: "Burning High School",
        video: "video/fountains/burning-high-school.mp4",
        image: "images/fountains/burning-high-school.png",
        duration: "20s",
        category: "Fountains"
    },

    {
        id: "203",
        title: "Psycho-delic Fountain",
        video: "video/fountains/psycho-delic-fountain.mp4",
        image: "images/fountains/psycho-delic-fountain.png",
        duration: "20s",
        category: "Fountains"
    },

    {
        id: "300",
        title: "Assorted Floral Boom 4-Pack",
        video: "video/air-bombs/assorted-floral-boom-4-pack.mp4",
        image: "images/air-bombs/assorted-floral-boom-4-pack.png",
        duration: "20s",
        category: "Air Bombs"
    },

    {
        id: "301",
        title: "Bombardo 6 pack",
        video: "video/air-bombs/bombardo-6-pack.mp4",
        image: "images/air-bombs/bombardo-6-pack.png",
        duration: "20s",
        category: "Air Bombs"
    },

    {
        id: "302",
        title: "Whistling Sonic Boom 6 Pack",
        video: "video/air-bombs/whistling-sonic-boom-6-pack.mp4",
        image: "images/air-bombs/whistling-sonic-boom-6-pack.png",
        duration: "20s",
        category: "Air Bombs"
    },

    {
        id: "400",
        title: "Fireball Class 4 Pack",
        video: "video/candles-barrages/fireball-class-4-pack.mp4",
        image: "images/candles-barrages/fireball-class-4-pack.png",
        duration: "20s",
        category: "Candles-Barrages"
    },

    {
        id: "401",
        title: "Meteoroids",
        video: "video/candles-barrages/meteoroids.mp4",
        image: "images/candles-barrages/meteoroids.png",
        duration: "20s",
        category: "Candles-Barrages"
    },

    {
        id: "402",
        title: "Cannon Barrage 3 Pack",
        video: "video/candles-barrages/cannon-barrage-3-pack.mp4",
        image: "images/candles-barrages/cannon-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages"
    },

    {
        id: "403",
        title: "Crackling Barrage 3 Pack",
        video: "video/candles-barrages/crackling-barrage-3-pack.mp4",
        image: "images/candles-barrages/crackling-barrage-3-pack.png",
        duration: "20s",
        category: "Candles-Barrages"
    },

    {
        id: "500",
        title: "wham bam",
        video: "video/multi-shot-cakes/wham-bam.mp4",
        image: "images/multi-shot-cakes/wham-bam.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "501",
        title: "24 shot comet",
        video: "video/multi-shot-cakes/24-shot-comet.mp4",
        image: "images/multi-shot-cakes/24-shot-comet.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "502",
        title: "party animal",
        video: "video/multi-shot-cakes/party-animal.mp4",
        image: "images/multi-shot-cakes/party-animal.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "503",
        title: "saturn missiles",
        video: "video/multi-shot-cakes/saturn-missiles.mp4",
        image: "images/multi-shot-cakes/saturn-missiles.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "504",
        title: "danger zone",
        video: "video/multi-shot-cakes/danger-zone.mp4",
        image: "images/multi-shot-cakes/danger-zone.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "505",
        title: "beerfest",
        video: "video/multi-shot-cakes/beerfest.mp4",
        image: "images/multi-shot-cakes/beerfest.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "506",
        title: "kaleidoscope",
        video: "video/multi-shot-cakes/kaleidoscope.mp4",
        image: "images/multi-shot-cakes/kaleidoscope.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "507",
        title: "magic dragons",
        video: "video/multi-shot-cakes/magic-dragons.mp4",
        image: "images/multi-shot-cakes/magic-dragons.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "508",
        title: "pirate king",
        video: "video/multi-shot-cakes/pirate-king.mp4",
        image: "images/multi-shot-cakes/pirate-king.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "509",
        title: "Rock and Roll",
        video: "video/multi-shot-cakes/rock-n-roll.mp4",
        image: "images/multi-shot-cakes/rock-n-roll.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "510",
        title: "Air Strike",
        video: "video/multi-shot-cakes/air-strike.mp4",
        image: "images/multi-shot-cakes/air-strike.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "511",
        title: "Bank Heist",
        video: "video/multi-shot-cakes/bank-heist.mp4",
        image: "images/multi-shot-cakes/bank-heist.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "512",
        title: "Cake Pop 4 Pack",
        video: "video/multi-shot-cakes/cake-pop-4-pack.mp4",
        image: "images/multi-shot-cakes/cake-pop-4-pack.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },


    {
        id: "513",
        title: "Jackpot",
        video: "video/multi-shot-cakes/jackpot.mp4",
        image: "images/multi-shot-cakes/jackpot.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "514",
        title: "La Grande Finale",
        video: "video/multi-shot-cakes/la-grande-finale.mp4",
        image: "images/multi-shot-cakes/la-grande-finale.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "515",
        title: "Strong & Free",
        video: "video/multi-shot-cakes/strong-free.mp4",
        image: "images/multi-shot-cakes/strong-free.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "516",
        title: "Twilight Zone",
        video: "video/multi-shot-cakes/TwilightZone.mp4",
        image: "images/multi-shot-cakes/TwilightZone.jpg",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "517",
        title: "Bursting Satellites",
        video: "video/multi-shot-cakes/BurstingSatellites.mp4",
        image: "images/multi-shot-cakes/BurstingSatellites.jpg",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "518",
        title: "Ant Assault",
        video: "video/multi-shot-cakes/AntAssault.mp4",
        image: "images/multi-shot-cakes/AntAssault.jpg",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "519",
        title: "Canadian Pride",
        video: "video/multi-shot-cakes/canadian-pride.mp4",
        image: "images/multi-shot-cakes/canadian-pride.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "520",
        title: "Crackling Rain",
        video: "video/multi-shot-cakes/crackling-rain.mp4",
        image: "images/multi-shot-cakes/crackling-rain.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "521",
        title: "Wave the Flag eh",
        video: "video/multi-shot-cakes/wave-the-flag-eh.mp4",
        image: "images/multi-shot-cakes/wave-the-flag-eh.png",
        duration: "20s",
        category: "Mult-shot Cakes"
    },

    {
        id: "600",
        title: "Kick ass",
        video: "video/kbx/kick-ass.mp4",
        image: "images/kbx/kick-ass.png",
        duration: "20s",
        category: "KBX"
    },

    {
        id: "601",
        title: "Awesome",
        video: "video/kbx/awesome.mp4",
        image: "images/kbx/awesome.png",
        duration: "20s",
        category: "KBX"
    },

    {
        id: "602",
        title: "Epic",
        video: "video/kbx/epic.mp4",
        image: "images/kbx/epic.png",
        duration: "20s",
        category: "KBX"
    },

    {
        id: "603",
        title: "OMG",
        video: "video/kbx/omg.mp4",
        image: "images/kbx/omg.png",
        duration: "20s",
        category: "KBX"
    },

    {
        id: "604",
        title: "Wow",
        video: "video/kbx/wow.mp4",
        image: "images/kbx/wow.png",
        duration: "20s",
        category: "KBX"
    },

    {
        id: "700",
        title: "Wow",
        video: "video/kit/sample.mp4",
        image: "images/kit/proud-to-be-canadian.png",
        duration: "1 min",
        category: "Kit"
    },



  ];