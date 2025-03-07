let region = "";

function setRegion(newRegion) {
        region = newRegion;
        document.getElementById("region").value = region;
}

function redirectToURL() {
        const uid = document.getElementById("uid").value;
        const key = "your-mom-will-die-if-you-use-this-key-on-your-website";
        const url = `https://free-fire-data.vercel.app/api/data?region=${region}&uid=${uid}&key=${key}`;        
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

function displayData(data) {
        document.getElementById('accountId').textContent = data.basicInfo.accountId;
        document.getElementById('badgeId').textContent = data.basicInfo.badgeId;
        document.getElementById('bannerId').textContent = data.basicInfo.bannerId;
        document.getElementById('createAt').textContent = unixToHumanTime(data.basicInfo.createAt);
        const avatarName = getAvatarName(data.basicInfo.headPic);
        if (avatarName) {
                document.getElementById('headPic').textContent = avatarName;
        } else {
                document.getElementById('headPic').textContent = data.basicInfo.headPic;
        }
        document.getElementById('lastLoginAt').textContent = unixToHumanTime(data.basicInfo.lastLoginAt);
        document.getElementById('nickname').textContent = data.basicInfo.nickname;
        document.getElementById('exp').textContent = data.basicInfo.exp;
        document.getElementById('rank').textContent = data.basicInfo.rank;
        document.getElementById('csRank').textContent = data.basicInfo.csRank;
        document.getElementById('level').textContent = data.basicInfo.level;
        document.getElementById('liked').textContent = data.basicInfo.liked;
        const titleName = getTitleName(data.basicInfo.title);
        if (titleName) {
                document.getElementById('title').textContent = titleName.toUpperCase();
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

        const skills = data.profileInfo.equipedSkills.map(skill => skill.skillId).join(', ');
        document.getElementById('skills').textContent = skills;

        const iconsContainer = document.getElementById('iconsContainer');
        iconsContainer.innerHTML = '';
        data.profileInfo.equipedSkills.forEach(skill => {
                const iconId = skill.skillId; const iconPath = `res/img/icons/${iconId}.png`;
                const imgElement = document.createElement('img');
                imgElement.src = iconPath; imgElement.alt = `Icon ${iconId}`;
                iconsContainer.appendChild(imgElement);
        });

        document.getElementById('signature').textContent = data.socialInfo.signature;

        document.getElementById('creditScore').textContent = data.creditScoreInfo.creditScore;
        document.getElementById('rewardState').textContent = data.creditScoreInfo.rewardState;

        document.getElementById('captainNickname').textContent = data.captainBasicInfo.nickname;
        document.getElementById('captainLevel').textContent = data.captainBasicInfo.level;
        document.getElementById('captainExp').textContent = data.captainBasicInfo.exp;
        document.getElementById('captainLiked').textContent = data.captainBasicInfo.liked;

        
}

/*document.addEventListener('keydown', function(event) {
        if (event.keyCode === 123) {
                event.preventDefault();
        }
});

document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
});*/
