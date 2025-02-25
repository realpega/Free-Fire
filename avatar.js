function getAvatarName(headPic) {
    const avatarMap = {
        "902000003": "Default",
"902000004": "Primis",
"902000005": "Nulla",
"902000006": "Andrew",
"902000007": "Kelly",
"902000008": "Olivia",
"902000009": "Ford",
"902000010": "Nikita",
"902000011": "Season 2",
"902000012": "Misha",
"902000013": "Season 3",
"902000014": "Death Race",
"902000015": "It's a new world",
"902000016": "Paperbag Boy",
"902000017": "Off-white",
"902000018": "Sakura",
"902000020": "Taurus",
"902000021": "Gemini",
"902000022": "Cuddly Panda",
"902000023": "Hot Air Balloon",
"902000024": "Element - Metal",
"902000025": "Element - Wood",
"902000026": "Element - Water",
"902000027": "Element - Fire",
"902000028": "Element - Earth",
"902000029": "Ace of Spades",
"902000030": "Maxim",
"902000031": "Dino",
"902000032": "Go for Gold",
"902000033": "Colours",
"902000034": "Ace",
"902000035": "Baal",
"902000036": "Caesar",
"902000037": "Diablo",
"902000038": "Executioner",
"902000039": "Fox",
"902000040": "Genesis",
"902000041": "Hacker",
"902000042": "Iron",
"902000043": "Joker",
"902000044": "Knight",
"902000045": "Lion",
"902000046": "Mephisto",
"902000047": "Nightmare",
"902000048": "Omega",
"902000049": "Punk",
"902000050": "Queen",
"902000051": "Ranger",
"902000052": "Shadow",
"902000053": "Tarot",
"902000054": "Utopia",
"902000055": "Viking",
"902000056": "Witch",
"902000057": "X-ray",
"902000058": "Yankee",
"902000059": "Zephyr",
"902000060": "Graffiti Life",
"902000061": "Spraypaint",
"902000062": "Muay Thai",
"902000063": "Bonfire",
"902000064": "Airdrop",
"902000065": "Greenery",
"902000066": "Football",
"902000067": "UAV",
"902000068": "Ink",
"902000069": "S5 Heroic",
"902000070": "Lovers",
"902000071": "Love At First Sight",
"902000072": "World's Best Dad",
"902000073": "Scavenger",
"902000074": "White Walker",
"902000075": "Holy Tribute",
"902000076": "Crown Mosaic",
"902000077": "Iris",
"902000078": "Sovereign Crown",
"902000079": "Pink Bunny",
"902000080": "Paloma",
"902000081": "Miguel",
"902000082": "Captain's Helm",
"902000083": "Seadog",
"902000084": "Death Wish",
"902000085": "Smiley Clown",
"902000086": "The Third Eye",
"902000087": "Brazil",
"902000088": "Promotion Day",
"902000089": "Victoria's Memorial",
"902000090": "Mechanical Core",
"902000091": "The Professor",
"902000092": "Digital Heart",
"902000093": "Sorry Not Sorry",
"902000094": "8 Bit Chicken",
"902000095": "Winner's Heart",
"902000096": "Caroline",
"902000097": "Top Fighter",
"902000098": "Temptation",
"902000099": "Mad Pumpkin",
"902000100": "Angry Chicken",
"902000101": "Witch's Hat",
"902000102": "Antonio's Portrait",
"902000103": "Top Mercenary Portrait",
"902000104": "Purple Strike Portrait",
"902000105": "Top Mercenary Portrait (White)",
"902000106": "Polar Bear Portrait",
"902000107": "Lucky Gift Portrait",
"902000108": "The Gingerbread Man",
"902000109": "General's Fleet",
"902000110": "Wukong's Portrait",
"902000111": "Season 7 Heroic Avatar",
"902000112": "Death's Call",
"902000113": "Purple Helm",
"902000114": "Giant Rocket",
"902000115": "Boar's Blessings",
"902000116": "Banebdjedet",
"902000117": "Amun-Ra",
"902000118": "Eye of Horus",
"902000119": "Moco",
"902000120": "Pink Heart",
"902000121": "Blue Heart",
"902000122": "Dancing Eye Mask",
"902000123": "The Doc.",
"902000124": "The Assistant",
"902000125": "Season 8 Heroic Avatar",
"902000126": "Dragon's Sight",
"902000127": "Dragon's Bone",
"902000128": "Stare of the Dragon",
"902000129": "Season 9 Heroic Avatar",
"902000130": "Hayato's Portrait",
"902000131": "Red Bunny Egg",
"902000132": "Red Stripes",
"902000133": "Bloody Moon",
"902000134": "SPLASH!",
"902000135": "FFWC Avatar",
"902000136": "Purple Panther",
"902000137": "Sneaky Panther",
"902000141": "GOLPISTAS",
"902000142": "Red Canids",
"902000143": "PINK LADY",
"902000144": "TEREM",
"902000145": "4KING OF THE KING",
"902000146": "APOLLO SPY",
"902000147": "DON'T FAMILY",
"902000148": "KING OF SHOT",
"902000149": "MEMORIAL GAMER",
"902000150": "SLOW TEAMWORK",
"902000151": "SLOW TWOK",
"902000152": "SPS 3.7T E-SPORT CLAN",
"902000153": "SPS E-SPORT",
"902000154": "SAYONARA",
"902000155": "VEGA",
"902000156": "WISDOM",
"902000157": "WAG",
"902000158": "TOP",
"902000159": "Anáhac Negativo",
"902000160": "TEKA",
"902000161": "EVOS",
"902000162": "SFI",
"902000163": "Red Beam",
"902000164": "Blast Off",
"902000165": "Space Explosion",
"902000166": "Season 10 Heroic Avatar",
"902000167": "Agent *Classified*",
"902000168": "Space Giant",
"902000169": "Ancient Beast",
"902000170": "Battle Viking",
"902000171": "Ruby Wolverine",
"902000172": "Artificial Intelligence",
"902000173": "Infestation",
"902000174": "Yellow Dash",
"902000175": "Desert Warfare",
"902000176": "Sand Storm",
"902000177": "Desert Storm",
"902000178": "Future Hunter",
"902000179": "Deadly Shot",
"902000180": "Final Strike",
"902000181": "Season 11 Heroic Avatar",
"902000182": "Rafael's Story",
"902000183": "Water",
"902000184": "Fire",
"902000185": "Earth",
"902000186": "Lightning",
"902000187": "Sound of Music",
"902000188": "The Brick Warrior",
"902000189": "Traveler",
"902000190": "Adventurer",
"902000191": "Grandmaster Avatar",
"902000192": "Grand Totem",
"902000193": "Guild Avatar",
"902000194": "Cowboy 2.0",
"902000195": "Wild West",
"902000196": "Soul of a Cowboy",
"902000197": "Blood Devil's Head",
"902000198": "Blood Bath",
"902000199": "War of Blood",
"902000200": "Season 12 Heroic Avatar",
"902000201": "A124",
"902000202": "Joseph's Head",
"902000203": "Birthday Pic",
"902000204": "Deadly Vampire",
"902000206": "Happy Child",
"902000207": "FFC S1 Champions",
"902000208": "FFC S1 Second Place",
"902000209": "FFC S1 Third Place",
"902000210": "FFC S1 Top 50",
"902000211": "FFC S1 Top 100",
"902000212": "Flaming Ocean",
"902000213": "Death Pirate",
"902000214": "The Captain",
"902000216": "The Winning Shot",
"902000217": "Death Goalie",
"902000218": "Season 13 Heroic Avatar",
"902000219": "Shani's Avatar",
"902000220": "Alok's Avatar",
"902000221": "The Green Giant",
"902000222": "Ringing Bell",
"902000223": "The Flaming Eyes",
"902000224": "Flaming Skull",
"902000225": "Focus",
"902000226": "Inspiration",
"902000227": "Reflex",
"902000228": "Experience",
"902000229": "The Laser Beam",
"902000230": "Skull Hunter Avatar",
"902000231": "The Treasure Chest",
"902000232": "Freestyler",
"902000233": "Hip Bunny",
"902000234": "Blitz",
"902000235": "Face of Death",
"902000236": "Ninjas Unleashed",
"902000237": "Predator's Eye",
"902000238": "Season 14 Heroic Avatar",
"902000239": "Notora's Avatar",
"902000240": "Alvaro's Avatar",
"902000241": "Joy of Winter",
"902000242": "Bliss of Winter",
"902000243": "Auspicious Aura",
"902000244": "Yes Master?",
"902000245": "King of Rap",
"902000246": "Clandestines Unleashed",
"902000247": "A124 Bobblehead",
"902000248": "Andrew Bobblehead",
"902000249": "Antonio Bobblehead",
"902000250": "Caroline Bobblehead",
"902000251": "Ford Bobblehead",
"902000252": "Hayato Bobblehead",
"902000253": "Joseph Bobblehead",
"902000254": "Kelly Bobblehead",
"902000255": "Kla Bobblehead",
"902000256": "Laura Bobblehead",
"902000257": "Maxim Bobblehead",
"902000258": "Miguel Bobblehead",
"902000259": "Misha Bobblehead",
"902000260": "Moco Bobblehead",
"902000261": "Nikita Bobblehead",
"902000262": "Nurse Bobblehead",
"902000263": "Paloma Bobblehead",
"902000264": "Rafael Bobblehead",
"902000265": "Shani Bobblehead",
"902000266": "Wukong Bobblehead",
"902000267": "Radioactive Mask",
"902000268": "Radiation Max",
"902000269": "Sludge Skull",
"902000270": "Windhowler",
"902000271": "Agent Paws",
"902000272": "Agent Fox",
"902000273": "Season 15 Heroic Avatar",
"902000274": "Wastelander",
"902000275": "Wasteland Ruler",
"902000276": "The Kendoka",
"902000277": "Be my Valentine",
"902000278": "Jota's Avatar",
"902000279": "Steffie's Avatar",
"902000280": "Gamma Havoc",
"902000281": "Fury Rage",
"902000282": "Alvaro Bobblehead",
"902000283": "Notora Bobblehead",
"902000284": "Steffie Bobblehead",
"902000285": "Jota Bobblehead",
"902000286": "Golden Fox",
"902000287": "Fables and Legends",
"902000288": "Prism Fox",
"902000289": "Dragon Uprising",
"902000290": "Forsaken Creed",
"902000291": "Glittering Cloud",
"902000292": "Season 16 Heroic Avatar",
"902000293": "Death",
"902000294": "Neonlight Eggs",
"902000295": "Colorful Eggs",
"902000296": "Punkster",
"902000297": "Cyber Skull",
"902000298": "Luqueta's Avatar",
"902000299": "Kapella's Avatar",
"902000300": "Luqueta Bobblehead",
"902000301": "Kapella Bobblehead",
"902000302": "Mystic Patterns",
"902000304": "Desert Storm",
"902000305": "Game Streamer",
"902000306": "Silver Wing",
"902000307": "Apocalyptic Chaos",
"902000308": "Apocalyptic Doom",
"902000309": "Apocalyptic Perish",
"902000310": "Sushi Frenzy",
"902000311": "Puffer Fish",
"902000312": "Octopus",
"902000313": "Plague and Famine",
"902000314": "Captain Bubbles",
"902000315": "Rebel Academy",
"902000316": "Wicked Joker",
"902000317": "Season 17 Heroic Avatar",
"902000318": "Wolfrahh's Avatar",
"902000319": "Clu's Avatar",
"902000320": "Wolfrahh Bobblehead",
"902000321": "Clu Bobblehead",
"902000322": "Rampage II: Uprising",
"902000323": "Sushi Menace",
"902000324": "Royal Leader",
"902000325": "Victor's Glare",
"902000326": "Pyramid Top",
"902000327": "Redfaced Devil",
"902000328": "Fury Within",
"902000329": "Street Devil",
"902000330": "Psycho Maniac",
"902000331": "Spirited Fox",
"902000332": "Rapper Underworld",
"902000333": "Season 18 Heroic Avatar",
"902000334": "Pharaoh's Watch",
"902000335": "Fire Rising",
"902000336": "Jai's Avatar",
"902000337": "Jai Bobblehead",
"902000338": "MAX Avatar",
"902000339": "Red-eyed Skull",
"902000340": "Chained Flame",
"902000341": "Endless Flame",
"902000342": "Record Master",
"902000343": "Golden Headphones",
"902000344": "Winner's Stage",
"902000345": "Booyah Day 2020 Avatar",
"902000346": "Midnight Bat",
"902000347": "Swordsman's Legends",
"902000348": "Gamer's Paradise",
"902000349": "Sverr's Avatar",
"902000350": "Dasha's Avatar",
"902000351": "K's Avatar",
"902000352": "Sverr Bobblehead",
"902000353": "Dasha Bobblehead",
"902000354": "K Bobblehead",
"902000355": "Glare",
"902000356": "Fuji Folklore",
"902000357": "Triad's Wealth",
"902000358": "Specter Squad",
"902000359": "Crystal Skull",
"902000360": "Specter Junior",
"902000361": "One Punch Man Avatar",
"902000362": "Winterlands 2020 Avatar",
"902000363": "CS Ranked Glory Avatar",
"902000364": "CS Ranked Season 4 Heroic Avatar",
"902000365": "Season 19 Heroic Avatar",
"902000366": "Season 20 Heroic Avatar",
"902000367": "Chrono's Avatar",
"902000368": "Snowelle's Avatar",
"902000369": "Chrono Bobblehead",
"902000370": "Snowelle Bobblehead",
"902000371": "Celebrate Diversity",
"902026001": "Bloodwing City",
"902026002": "Bloodsuckers",
"902026003": "Bats at Night",
"902026004": "Willful Wonders",
"902026005": "Rabbit Trick",
"902026006": "Pokers",
"902026007": "Skyler's Avatar",
"902026008": "Shirou's Avatar",
"902026009": "Skyler Bobblehead",
"902026010": "Shirou Bobblehead",
"902026011": "CS Ranked Season 5 Heroic Avatar",
"902026012": "Season 21 Heroic Avatar",
"902026013": "Egg Day 2021",
"902026014": "Cobra Flash",
"902026015": "Water Fest 2021",
"902027001": "Theatre of Torment",
"902027002": "Cursed Magician",
"902027003": "Peekaboo",
"902027004": "Evil Enchanted",
"902027005": "Princess Afterdark",
"902027006": "Prince Afterdark",
"902027007": "Maro's Avatar",
"902027008": "Xayne's Avatar",
"902027009": "Maro Bobblehead",
"902027010": "Xayne Bobblehead",
"902027011": "CS Ranked Season 6 Heroic Avatar",
"902027012": "Season 22 Heroic Avatar",
"902027013": "FFWS 2021 Avatar",
"902027014": "K.O. Night Avatar",
"902027015": "Elite Pass Club Avatar",
"902027016": "Battle Royale Grandmaster Avatar",
"902027017": "Clash Squad Grandmaster Avatar",
"902027019": "Battle Royale Grandmaster Avatar",
"902027020": "Battle Royale Grandmaster Avatar",
"902027021": "Battle Royale Grandmaster Avatar",
"902027022": "Battle Royale Grandmaster Avatar",
"902027023": "Clash Squad Grandmaster Avatar",
"902027024": "Clash Squad Grandmaster Avatar",
"902027025": "Clash Squad Grandmaster Avatar",
"902027026": "Clash Squad Grandmaster Avatar",
"902027027": "Clash Squad Grandmaster Avatar",
"902028001": "Bounty Claw",
"902028002": "Guns for Hire",
"902028003": "Bounty Boss",
"902028004": "Looking pretty?",
"902028005": "Wildland Walkers",
"902028006": "Scarecrow",
"902028007": "D-bee's Avatar",
"902028008": "D-bee Bobblehead",
"902028009": "Azure Stormbringer",
"902028010": "Frost Sabertooth",
"902028011": "Volcanic Whirlwind",
"902028012": "Shadow Earthshaker",
"902028013": "Sauce Swagger",
"902028014": "CS Ranked Season 7 Heroic Avatar",
"902028015": "Season 23 Heroic Avatar",
"902028016": "McLaren Racing Avatar",
"902028017": "Ryu",
"902028018": "Chun-Li",
"902029001": "Mesmerizing Nights",
"902029002": "Magical Jubilee",
"902029003": "Faraway Serenity",
"902029004": "Quantic Unknown",
"902029005": "Silent Slither",
"902029006": "Truly Toxic",
"902029007": "Dimitri's Avatar",
"902029008": "Thiva's Avatar",
"902029009": "Dimitri Bobblehead",
"902029010": "Thiva Bobblehead",
"902029011": "Bright Lights",
"902029012": "Turquoise Warning",
"902029013": "CS Ranked Season 8 Heroic Avatar",
"902029014": "Season 24 Heroic Avatar",
"902029015": "Regal Gold",
"902029016": "BR-Ranked Heroic",
"902029017": "CS Ranked Heroic",
"902029018": "Guild Pride",
"902030001": "Palace of Poker",
"902030002": "Puppet Poker",
"902030003": "Turquoise Royalty",
"902030004": "Inferno Rage",
"902030005": "Sinister Legend",
"902030006": "Breath of Death",
"902030007": "Leon's Avatar",
"902030008": "Otho's Avatar",
"902030009": "Leon Bobblehead",
"902030010": "Otho Bobblehead",
"902030011": "Painted Wings",
"902030012": "Ornamental Marine",
"902030013": "CS Ranked Season 9 Heroic Avatar",
"902030014": "Season 25 Heroic Avatar",
"902030015": "Neon Punker",
"902030016": "The Honorable Avatar",
"902030017": "Honorable Wolf Avatar",
"902030018": "Honorable Lion Avatar",
"902030019": "LBFF Avatar",
"902031001": "Extraterrestrial Soul",
"902031002": "Extraterrestrial Mind",
"902031003": "Childhood Dream",
"902031004": "Paper Wings",
"902031005": "Folded Flap",
"902031006": "Soaring Swan",
"902031007": "Nairi's Avatar",
"902031008": "Nairi Bobblehead",
"902031009": "Invincible Trap Headpic",
"902031010": "Covered Ace",
"902031011": "Snowy Globe",
"902031012": "Winter Petal",
"902031013": "CS Ranked Season 10 Heroic Avatar",
"902031014": "Season 26 Heroic Avatar",
"902031015": "Lone Wolf Ranked Heroic Avatar",
"902031016": "Lone Wolf Ranked Master Avatar",
"902031017": "Hero's Shine",
"902031018": "Concealed",
"902031019": "CS Ranked Season 10 Master Avatar",
"902031020": "Season 26 Master Avatar",
"902031021": "Season 25 Master Avatar",
"902032001": "Bronzed Owl",
"902032002": "Machine Dolly",
"902032003": "Neon Dolly",
"902032004": "Azure Myth",
"902032005": "Ink of the Past",
"902032006": "Mountain Hymn",
"902032007": "Newbie Honor",
"902032010": "Scoped-In Headpic",
"902032011": "Bright Vibes",
"902032012": "Violet LBFF Avatar",
"902032013": "CS Cup Avatar I",
"902032014": "CS Cup Avatar II",
"902032015": "CS Cup Avatar III",
"902032016": "CS Cup Avatar IV",
"902032017": "CS Cup Avatar V",
"902032018": "CS Cup Avatar VI",
"902032019": "CS Ranked Season 11 Heroic Avatar",
"902032020": "CS Ranked Season 11 Master Avatar",
"902032021": "Season 27 Heroic Avatar",
"902032022": "Season 27 Master Avatar",
"902032023": "Creed Avatar",
"902032024": "Hidden Assassins",
"902033001": "Knight Mind Avatar",
"902033002": "Rook Master Avatar",
"902033003": "War of Chess",
"902033004": "Pink Facade Avatar",
"902033005": "Golden Facade Avatar",
"902033006": "Death Theatre",
"902033008": "Loyal Bladesmith Avatar",
"902033010": "Kenta Bobblehead",
"902033011": "Frenzy Bunny Avatar",
"902033012": "Honorable Fighters Avatar",
"902033013": "Cherished Emerald Avatar",
"902033014": "Golden Beast Avatar",
"902033015": "FFPL IV Avatar",
"902033016": "Girl Power! Avatar",
"902033017": "Turquoise Spirit Avatar",
"902033018": "Pink Courage Avatar",
"902033019": "Sharp Pride Avatar",
"902033020": "CS Ranked Season 12 Heroic Avatar",
"902033021": "CS Ranked Season 12 Master Avatar",
"902033022": "Season 28 Heroic Avatar",
"902033024": "LW Ranked Season 1 Heroic Avatar",
"902033025": "LW Ranked Season 1 Master Avatar",
"902033026": "Bomb Squad Ranked Heroic Avatar",
"902033027": "Bomb Squad Ranked Master Avatar",
"902033028": "Violet Haze",
"902033029": "Elite Pass Club Avatar",
"902034001": "Terror Wasp Avatar",
"902034002": "Bumble Conquer Avatar",
"902034003": "Bee Soldier Avatar",
"902034004": "Steamed Seafood Avatar",
"902034005": "Pot of Luck Avatar",
"902034006": "Skilled Cook Avatar",
"902034007": "Rampage Solar Avatar",
"902034008": "Rampage Ruby Avatar",
"902034009": "Rampage Arctic Avatar",
"902034010": "Rampage Myst Avatar",
"902034011": "Digital Play Avatar",
"902034012": "Innocent Moco",
"902034013": "CS Ranked Season 13 Heroic Avatar",
"902034014": "CS Ranked Season 13 Master Avatar",
"902034015": "BR-Ranked S29 Heroic Avatar",
"902034016": "BR-Ranked S29 Master Avatar",
"902034017": "LW-Ranked S2 Heroic Avatar",
"902034018": "LW-Ranked S2 Master Avatar",
"902034019": "Bomb Squad Ranked S1 Heroic Avatar",
"902034020": "Bomb Squad Ranked S1 Master Avatar",
"902034021": "Dawn of Glory Avatar",
"902034022": "Girl Power S4 Avatar",
"902034023": "Creator Avatar",
"902034024": "Sound Crafter Avatar",
"902034025": "A-Patroa Bobblehead",
"902034026": "Sightless Assassin Avatar",
"902034027": "Homer Bobblehead",
"902035001": "Shark Fright Avatar",
"902035002": "Death Tooth Avatar",
"902035003": "Ocean Beast Avatar",
"902035004": "Flame Oni Avatar",
"902035005": "Ice Oni Avatar",
"902035006": "Ninja Blade Avatar",
"902035007": "5th Anniversary Avatar",
"902035008": "Blue Beast Avatar",
"902035009": "Tech-modded Assassin Avatar",
"902035010": "Iris Bobblehead",
"902035011": "CS-Ranked S14 Heroic Avatar",
"902035012": "CS-Ranked S14 Master Avatar",
"902035013": "BR-Ranked S30 Heroic Avatar",
"902035014": "BR-Ranked S30 Master Avatar",
"902035015": "Brilliant Mind Avatar",
"902035016": "Adventurous Songster Avatar",
"902035017": "J.Biebs Bobblehead",
"902035018": "Champion Avatar",
"902035019": "FFL Avatar",
"902035020": "FFPL India Avatar",
"902035021": "FFIC Avatar",
"902035022": "FFIM Avatar",
"902035023": "FFML Avatar",
"902035024": "Pro League Avatar",
"902035025": "VFL Avatar",
"902035027": "FFEC Glory Avatar",
"902035028": "FFPC Glory Avatar",
"902035029": "MCPS Glory Avatar",
"902035030": "FF Cup Avatar",
"902035031": "FFPL S4 Avatar",
"902035032": "FFPS Avatar",
"902035033": "LBFF Glory Avatar",
"902036001": "Comic Monster Avatar",
"902036002": "Comic Villain Avatar",
"902036003": "Iron Beast Avatar",
"902036004": "Triangular Snowflake Avatar",
"902036005": "Bad Hat Avatar",
"902036006": "Cyan Iceworld Avatar",
"902036007": "Thieving Confidence Avatar",
"902036008": "Tatsuya Bobblehead",
"902036009": "The Golden Tiger Avatar",
"902036010": "Naïve Whiskers Avatar",
"902036011": "CS-Ranked S15 Heroic Avatar",
"902036012": "CS-Ranked S15 Master Avatar",
"902036013": "BR-Ranked S31 Heroic Avatar",
"902036014": "BR-Ranked S31 Master Avatar",
"902036015": "Deatheye's Pistol Avatar",
"902036016": "LW-Ranked S3 Heroic Avatar",
"902036017": "LW-Ranked S3 Master Avatar",
"902036018": "Bomb Squad Ranked S2 Heroic Avatar",
"902036019": "Bomb Squad Ranked S2 Master Avatar",
"902036020": "FFAL Galaxy Avatar",
"902036021": "FFWS Iceblue Avatar",
"902036022": "Change Maker Avatar",
"902036023": "Luna Bobblehead",
"902037001": "Evil Emoji Avatar",
"902037003": "Drachen Myth Avatar",
"902037004": "Flaming Glory Avatar",
"902037005": "Rocker Skull Avatar",
"902037006": "CS-Ranked S16 Heroic Avatar",
"902037007": "CS-Ranked S16 Master Avatar",
"902037008": "BR-Ranked S32 Heroic Avatar",
"902037009": "BR-Ranked S32 Master Avatar",
"902037011": "Cyber Cityscape Avatar",
"902037012": "Magic Squad Avatar",
"902037013": "Vivo Keyd Avatar",
"902037014": "Nigma Galaxy Avatar",
"902037015": "EVOS Phoenix Avatar",
"902037016": "HQ Esports Avatar",
"902037017": "Team Flash Avatar",
"902037020": "INFINITY VX Avatar",
"902037021": "ALPHA Avatar",
"902037022": "AV Radicals Avatar",
"902037023": "Expand Avatar",
"902037024": "Hotshot Esports Avatar",
"902037025": "LGDS Avatar",
"902037026": "VASTOMUNDO Avatar",
"902037027": "SES Alfaink Avatar",
"902037028": "RRQ Kazu Avatar",
"902037029": "Ignis Esports Avatar",
"902037030": "Naguará Avatar",
"902037031": "Prime Elite Avatar",
"902038001": "Crocochamp Avatar",
"902038002": "Crocoslayer Avatar",
"902038003": "Qualia Wave Avatar",
"902038004": "Project Qualia Avatar",
"902038005": "Meta Celebrity Avatar",
"902038006": "Santino Valentine Bobblehead",
"902038007": "Blizzard Avatar",
"902038013": "Technojoy Avatar",
"902038014": "Cape Breeze Avatar",
"902038015": "Pop-Pow Avatar",
"902038016": "CS-Ranked S17 Heroic Avatar",
"902038017": "CS-Ranked S17 Master Avatar",
"902038018": "BR-Ranked S33 Heroic Avatar",
"902038019": "BR-Ranked S33 Master Avatar",
"902038020": "Foodster Avatar",
"902038021": "Raptor Avatar",
"902038022": "Ballistic Avatar",
"902038023": "Trophy Avatar",
"902038024": "Thumbs Up Avatar",
"902038025": "Lightbulb Avatar",
"902038028": "Carnival Avatar",
"902039001": "Happy Fishy Avatar",
"902039002": "Bubble Waters Avatar",
"902039003": "Skate Mania Avatar",
"902039004": "Zesty Rollers Avatar",
"902039005": "Comic Chaos Avatar",
"902039006": "Chaos Signal Avatar",
"902039007": "Vengeful Beast Avatar",
"902039008": "Orion Bobblehead",
"902039009": "Scorpio Avatar",
"902039010": "Unveiled Truth Avatar",
"902039011": "Angry Bomb Avatar",
"902039012": "EVOS Champion Avatar",
"902039013": "Festive Dawn Avatar",
"902039014": "FFML S7 Avatar",
"902039015": "Crystal Void Avatar",
"902039016": "Aqua Lad Avatar",
"902039018": "CS-Ranked S18 Heroic Avatar",
"902039019": "CS-Ranked S18 Master Avatar",
"902039020": "BR-Ranked S34 Heroic Avatar",
"902039021": "BR-Ranked S34 Master Avatar",
"902040001": "Synthetic Strike Avatar",
"902040002": "Synthetic Surge Avatar",
"902040003": "T.R.A.P. City Avatar",
"902040004": "T.R.A.P. City Spirit Avatar",
"902040005": "Nano Scientists Avatar",
"902040006": "Sonia Bobblehead",
"902040007": "Chromatic T.R.A.P. Avatar",
"902040008": "Sunset Explorer Avatar",
"902040009": "Bunny Leader Avatar",
"902040010": "FFTC 2023 Avatar",
"902040011": "CS-Ranked S19 Heroic Avatar",
"902040012": "CS-Ranked S19 Master Avatar",
"902040013": "BR-Ranked S35 Heroic Avatar",
"902040014": "BR-Ranked S35 Master Avatar",
"902040015": "Achievement Collector Avatar",
"902040016": "Achievement Specialist Avatar",
"902040017": "6th Anniversary Avatar",
"902040024": "CS-Ranked S20 Heroic Avatar",
"902040025": "CS-Ranked S20 Master Avatar",
"902040027": "Diamond VIP Avatar",
"902040028": "Legendary VIP Avatar",
"902040029": "Super Cricketer Avatar",
"902040030": "Thala Bobblehead",
"902041001": "Jelly Assault Avatar",
"902041002": "Fishing Frenzy Avatar",
"902041003": "Rise of the Puppets Avatar",
"902041004": "Shadow Assassin Avatar",
"902041005": "Suzy Bobblehead",
"902041006": "Ink Stroke Avatar",
"902041007": "Ninja Fiery Flash Avatar",
"902041009": "CS-Ranked S21 Heroic Avatar",
"902041010": "CS-Ranked S21 Master Avatar",
"902041011": "BR-Ranked S36 Heroic Avatar",
"902041012": "BR-Ranked S36 Master Avatar",
"902041013": "Rampage Finale Avatar",
"902041014": "Tanjiro Avatar",
"902042001": "Galactic Odyssey Avatar",
"902042002": "Electri City Avatar",
"902042003": "Untamed Flame Avatar",
"902042004": "Ignis Bobblehead",
"902042005": "Diwali 2023 Avatar",
"902042006": "CS-Ranked S22 Heroic Avatar",
"902042007": "CS-Ranked S22 Master Avatar",
"902042008": "BR-Ranked S37 Heroic Avatar",
"902042009": "BR-Ranked S37 Master Avatar",
"902042010": "The \"80\" Avatar",
"902042011": "Frostfire Avatar",
"902042012": "Centurion League Avatar",
"902042013": "Premier Circle Avatar",
"902042014": "Hundred Honors Avatar",
"902042015": "Unity Unleashed Avatar",
"902042016": "Synergy Surge Avatar",
"902042025": "FFWS Magic Squad",
"902042035": "Glory of 2023",
"902043002": "Glossy Nightfall Avatar",
"902043004": "Tales of Puddles Avatar",
"902043006": "Fury Reverie Avatar",
"902043007": "Mechanical Genius Avatar",
"902043008": "Ryden Bobblehead",
"902043009": "Emperor's New Avatar",
"902043010": "Black, White, Meow Avatar",
"902043011": "CS-Ranked S23 Heroic Avatar",
"902043012": "CS-Ranked S23 Master Avatar",
"902043013": "CS-Ranked S24 Heroic Avatar",
"902043014": "CS-Ranked S24 Master Avatar",
"902043015": "BR-Ranked S38 Heroic Avatar",
"902043016": "BR-Ranked S38 Master Avatar",
"902043017": "JKT48 - Adel Avatar",
"902043018": "JKT48 - Christy Avatar",
"902043019": "JKT48 - Freya Avatar",
"902043020": "JKT48 - Gita Avatar",
"902043021": "JKT48 - Gracia Avatar",
"902043022": "JKT48 - Kathrina Avatar",
"902043023": "JKT48 - Marsha Avatar",
"902043024": "JKT48 - Shani Avatar",
"902043025": "JKT48 - Zee Avatar",
"902044001": "Pixel Reality Avatar",
"902044002": "Twilight's End Avatar",
"902044003": "Dual Guardian Avatar",
"902044004": "Kairos Bobblehead",
"902044005": "The Paradox Avatar",
"902044006": "Style Academy Avatar",
"902044007": "Silent Goat Avatar",
"902044008": "Silent Mule Avatar",
"902044009": "Silent Camel Avatar",
"902044010": "CS-Ranked S25 Heroic Avatar",
"902044011": "CS-Ranked S25 Master Avatar",
"902044012": "BR-Ranked S39 Heroic Avatar",
"902044013": "BR-Ranked S39 Master Avatar",
"902044014": "Trend Academy Avatar",
"902045001": "Lucky Goosy Avatar",
"902045002": "Majestic Roar Avatar",
"902045003": "Ocean Outlaws Avatar",
"902045004": "Doctor Maniac Avatar",
"902045005": "Kassie Bobblehead",
"902045006": "Bunny Mastermind Avatar",
"902045007": "Midnight Gamer Avatar",
"902045008": "7th Anniversary Avatar",
"902045009": "Anemospeeder Avatar",
"902045010": "BR-Ranked S40 Heroic Avatar",
"902045011": "BR-Ranked S40 Master Avatar",
"902045012": "CS-Ranked S26 Heroic Avatar",
"902045013": "CS-Ranked S26 Master Avatar",
"902045014": "BR-Ranked S41 Heroic Avatar",
"902045015": "BR-Ranked S41 Master Avatar",
"902045016": "JKT48 - Adel: Happy 7th! Avatar",
"902045017": "JKT48 - Christy: Happy 7th! Avatar",
"902045018": "JKT48 - Fiony: Happy 7th! Avatar",
"902045019": "JKT48 - Gracia: Happy 7th! Avatar",
"902045020": "JKT48 - Marsha: Happy 7th! Avatar",
"902045021": "JKT48 - Freya: Clu Avatar",
"902045022": "JKT48 - Gita: Caroline Avatar",
"902045023": "JKT48 - Kathrina: Moco Avatar",
"902045024": "JKT48 - Muthe: Sonia Avatar",
"902045025": "JKT48 - Zee: Kelly Avatar",
"902046001": "Last Laugh Avatar",
"902046002": "Ding Ding! Avatar",
"902046003": "Giddy Runaway Avatar",
"902046004": "Gloo Artist Avatar",
"902046005": "Lila Bobblehead",
"902046006": "Light Fest Avatar",
"902046007": "Street Savvy Avatar",
"902046008": "FFWS 2024 Fall Avatar",
"902046009": "Stellar Creator",
"902046010": "Stellar Partner",
"902046011": "CS-Ranked S27 Heroic Avatar",
"902046012": "CS-Ranked S27 Master Avatar",
"902046013": "BR-Ranked S42 Heroic Avatar",
"902046014": "BR-Ranked S42 Master Avatar",
"902046015": "CS-Ranked S28 Heroic Avatar",
"902046016": "CS-Ranked S28 Master Avatar",
"902046017": "FFWS 2024 GF - paiN Gaming Avatar",
"902046018": "FFWS 2024 GF - E1 Sports Avatar",
"902046019": "FFWS 2024 GF - Fluxo Avatar",
"902046020": "FFWS 2024 GF - Rezurrection X Avatar",
"902046021": "FFWS 2024 GF - CLG Avatar",
"902046022": "FFWS 2024 GF - Twisted Minds Avatar",
"902046023": "FFWS 2024 GF - Corinthians Avatar",
"902046024": "FFWS 2024 GF - WASK Avatar",
"902046025": "FFWS 2024 GF - Team Falcons Avatar",
"902046026": "FFWS 2024 GF - Bigetron Delta Avatar",
"902046027": "FFWS 2024 GF - HUA Esports Avatar",
"902046028": "FFWS 2024 GF - EVOS Divine Avatar",
"902046029": "FFWS 2024 GF - Six Karma Avatar",
"902046030": "FFWS 2024 GF - Attack All Around Avatar",
"902046031": "FFWS 2024 GF - RETA Esports Avatar",
"902046032": "FFWS 2024 GF - RRQ Kazu Avatar",
"902046033": "FFWS 2024 GF - WAG Avatar",
"902046034": "FFWS 2024 GF - Buriram United Esports Avatar",
"902046035": "Isagi Avatar",
"902046036": "Nagi Avatar",
"902046037": "Moo Deng Avatar",
"902046038": "Gilded Flourish Avatar",
"902047001": "BR-Ranked S43 Heroic Avatar",
"902047002": "BR-Ranked S43 Master Avatar",
"902047003": "CS-Ranked S29 Heroic Avatar",
"902047004": "CS-Ranked S29 Master Avatar",
"902047005": "Aurora Avatar",
"902047006": "Salute Avatar",
"902047007": "Mad Stitcher Avatar",
"902047008": "Wrapped & Ready Avatar",
"902047009": "Final Card Avatar",
"902047010": "Naruto Avatar",
"902047011": "Sasuke Avatar",
"902047012": "Sakura Avatar",
"902047013": "Kakashi Avatar",
"902047014": "Jiraiya Avatar",
"902047015": "Koda Bobblehead",
"902047016": "Hunting Season Avatar",
"902047017": "Top Hunter Avatar",
    };

    return avatarMap[headPic] || "";
}