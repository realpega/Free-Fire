let region = "";

function setRegion(newRegion) {
        region = newRegion;
        document.getElementById("region").value = region;
}

function redirectToURL() {
        const uid = document.getElementById("uid").value;
        const key = "83848373993037";
        const url = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=${key}`;
            
        fetch(url)
                .then(response => response.json())
                .then(data => {
                        displayData(data);
                })
                .catch(error => {
                        console.error('Error fetching data:', error);
                });
}

function unixToHumanTime(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString();
}

function getPetName(petId) {
    if (petId === "1300000001") {
        return "Kitty";
    } else if (petId === "1300000021") {
            return "Night Panther";
    } else if (petId === "1300000031") {
            return "Detective Panda";
    } else if (petId === "1300000041") {
            return "Shiba";
    } else if (petId === "1300000031") {
            return "Detective Panda";
    } else if (petId === "1300000051") {
            return "Spirit Fox";
    } else if (petId === "1300000061") {
            return "Robo";
    } else if (petId === "1300000071") {
            return "Poring";
    } else if (petId === "1300000081") {
            return "Ottero";
    } else if (petId === "1300000091") {
            return "Falco";
    } else if (petId === "1300000101") {
            return "Mr. Waggor";
    } else if (petId === "1300000031") {
            return "Detective Panda";
    } else if (petId === "1300000111") {
            return "Rockie";
    } else if (petId === "1300000112") {
            return "Beaston";
    } else if (petId === "1300000113") {
            return "Dreki";
    } else if (petId === "1300000114") {
            return "Moony";
    } else if (petId === "1300000115") {
            return "Dr. Beanie";
    } else if (petId === "1300000116") {
            return "Sensei Tig";
    } else if (petId === "1300000117") {
            return "Agent Hop";
    } else if (petId === "1300000118") {
            return "Yeti";
    } else if (petId === "1300000119") {
            return "Flash";
    } else if (petId === "1300000120") {
            return "Zasil";
    } else if (petId === "1300000121") {
            return "Finn";
    } else if (petId === "1300000123") {
            return "Fang";
    } else if (petId === "1300000124") {
            return "Arvon";
    } else if (petId === "1300000125") {
            return "Kactus";
    } else if (petId === "1300000126") {
            return "Pug";
    } else {
        return "";
    }
}

function getTitleName(title) {
    if (title === "904090001") {
        return "Warrior";
    } else if (title === "904090002") {
        return "Collector";
    } else if (title === "904090003") {
        return "Adventurer";
    } else if (title === "904090004") {
        return "Resurrector";
    } else if (title === "904090005") {
        return "Eliminator";
    } else if (title === "904090006") {
        return "Headhunter";
    } else if (title === "904090007") {
        return "Boom Master";
    } else if (title === "904090008") {
        return "Evo-lution";
    } else if (title === "904090009") {
        return "Skyfarer";
    } else if (title === "904090010") {
        return "Actor";
    } else if (title === "904090011") {
        return "Brand Face";
    } else if (title === "904090012") {
        return "Polymath";
    } else if (title === "904090013") {
        return "Well-Connected";
    } else if (title === "904090014") {
        return "1 Year Old";
    } else if (title === "904090015") {
        return "2 Years Old";
    } else if (title === "904090016") {
        return "Old 'n' Gold";
    } else if (title === "904090017") {
        return "BR Hero";
    } else if (title === "904090018") {
        return "BR Master";
    } else if (title === "904090019") {
        return "CS Hero";
    } else if (title === "904090020") {
        return "CS Master";
    } else if (title === "904090021") {
        return "Boom Artist";
    } else if (title === "904090022") {
        return "Headexpert";
    } else if (title === "904090023") {
        return "Evo King";
    } else if (title === "904090024") {
        return "4 Years Old";
    } else if (title === "904090025") {
        return "5 Years Old";
    } else if (title === "904090026") {
        return "6 Years Old";
    } else if (title === "904090027") {
        return "7 Years Old";
    } else if (title === "904190028") {
        return "Dominator";
    } else if (title === "904190029") {
        return "Uncrowned";
    } else if (title === "904190030") {
        return "Best Pal";
    } else if (title === "904190031") {
        return "Sharpshooter";
    } else if (title === "904190032") {
        return "Wrestler";
    } else if (title === "904190033") {
        return "Peacemaker";
    } else if (title === "904190034") {
        return "Ninja";
    } else if (title === "904190035") {
        return "Guerrilla";
    } else if (title === "904190036") {
        return "Chainkiller";
    } else if (title === "904190037") {
        return "Early Bird";
    } else if (title === "904290048") {
        return "Dawn Valor";
    } else if (title === "904290049") {
        return "FFWS Top Fan";
    } else if (title === "904490050") {
        return "Dragon Tamer";
    } else if (title === "904490051") {
        return "Versatile Hunter";
    } else if (title === "904490053") {
        return "Creative Mind";
    } else if (title === "904590052") {
        return "7th Anniv. Survivor";
    } else if (title === "904590053") {
        return "FPP Elite";
    } else if (title === "904590054") {
        return "Dawn Terminator";
    } else if (title === "904590055") {
        return "BR Dawnbringer";
    } else if (title === "904590056") {
        return "CS Dawnbringer";
    } else if (title === "904590057") {
        return "Dawnshot Artist";
    } else if (title === "904590058") {
        return "Terminator";
    } else if (title === "904590059") {
        return "Headshot Artist";
    } else if (title === "904690060") {
        return "CS Booyah Streak Pro";
    } else if (title === "904690061") {
        return "BR Booyah Streak Pro";
    } else if (title === "904790062") {
        return "Storm Conqueror";
    } else if (title === "904790063") {
        return "Storm Chaser";
    } else if (title === "904790064") {
        return "BR Stormbringer";
    } else if (title === "904790065") {
        return "CS Stormbringer";
    } else if (title === "904790066") {
        return "Stormshot Expert";
    } else {
        return "";
    }
}

function displayData(data) {
        document.getElementById('accountId').textContent = data.basicInfo.accountId;
        document.getElementById('badgeId').textContent = data.basicInfo.badgeId;
        document.getElementById('bannerId').textContent = data.basicInfo.bannerId;
        document.getElementById('createAt').textContent = unixToHumanTime(data.basicInfo.createAt);
        document.getElementById('headPic').textContent = data.basicInfo.headPic;
        document.getElementById('lastLoginAt').textContent = unixToHumanTime(data.basicInfo.lastLoginAt);
        document.getElementById('nickname').textContent = data.basicInfo.nickname;
        document.getElementById('exp').textContent = data.basicInfo.exp;
        document.getElementById('rank').textContent = data.basicInfo.rank;
        document.getElementById('csRank').textContent = data.basicInfo.csRank;
        document.getElementById('level').textContent = data.basicInfo.level;
        document.getElementById('liked').textContent = data.basicInfo.liked;

        const titleName getTitleName(data.basicInfo.title);
        if (titleName) {
                document.getElementById('title').textContent = titleName;
        } else {
                document.getElementById('title').textContent = data.basicInfo.title;
        }
        const petNickname = getPetName(data.petInfo.id);
        if (petNickname) {
                document.getElementById('petId').textContent = petNickname;
        } else {
                document.getElementById('petId').textContent = data.petInfo.id;
        }
        document.getElementById('petName').textContent = data.petInfo.name;
        document.getElementById('petStatus').textContent = data.petInfo.isSelected;
        document.getElementById('petLevel').textContent = data.petInfo.level;
        document.getElementById('petExp').textContent = data.petInfo.exp;
        document.getElementById('petSkill').textContent = data.petInfo.selectedSkillId;
        document.getElementById('petSkin').textContent = data.petInfo.skinId;

        document.getElementById('clanName').textContent = data.clanBasicInfo.clanName;
        document.getElementById('clanId').textContent = data.clanBasicInfo.clanId;
        document.getElementById('clanLevel').textContent = data.clanBasicInfo.clanLevel;
        document.getElementById('memberNum').textContent = data.clanBasicInfo.memberNum;
        document.getElementById('clanCapacity').textContent = data.clanBasicInfo.capacity;
        document.getElementById('captainId').textContent = data.clanBasicInfo.captainId;

        document.getElementById('signature').textContent = data.socialInfo.signature;

        document.getElementById('creditScore').textContent = data.creditScoreInfo.creditScore;
        document.getElementById('rewardState').textContent = data.creditScoreInfo.rewardState;

        document.getElementById('captainNickname').textContent = data.captainBasicInfo.nickname;
        document.getElementById('captainLevel').textContent = data.captainBasicInfo.level;
        document.getElementById('captainExp').textContent = data.captainBasicInfo.exp;
        document.getElementById('captainLiked').textContent = data.captainBasicInfo.liked;
}

document.addEventListener('keydown', function(event) {
        if (event.keyCode === 123) {
                event.preventDefault();
        }
});

document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
});
