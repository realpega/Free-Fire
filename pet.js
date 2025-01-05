function getPetName(petId) {
        const petMap = {
            "1300000001": "Kitty",
            "1300000021": "Night Panther",
            "1300000031": "Detective Panda",
            "1300000041": "Shiba",
            "1300000122": "Hoot",
            "1300000051": "Spirit Fox",
            "1300000061": "Robo",
            "1300000071": "Poring",
            "1300000081": "Ottero",
            "1300000091": "Falco",
            "1300000101": "Mr. Waggor",
            "1300000111": "Rockie",
            "1300000112": "Beaston",
            "1300000113": "Dreki",
            "1300000114": "Moony",
            "1300000115": "Dr. Beanie",
            "1300000116": "Sensei Tig",
            "1300000117": "Agent Hop",
            "1300000118": "Yeti",
            "1300000119": "Flash",
            "1300000120": "Zasil",
            "1300000121": "Finn",
            "1300000123": "Fang",
            "1300000124": "Arvon",
            "1300000125": "Kactus",
            "1300000126": "Pug"
        };
    
        return petMap[petId] || "";
    }    