let region = "";

let itemData = [];

fetch('itemData.json')
  .then(res => res.json())
  .then(data => {
    itemData = data;
  })
  .catch(err => {
    console.error('Failed to load itemData.json:', err);
});

const key = "Sounava777-April-25";

function setRegion(newRegion) {
        region = newRegion;
        document.getElementById("region").value = region;
}

function redirectToURL() {
        const uid = document.getElementById("uid").value;
        
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

function like() {
        const uid = document.getElementById("likeUid").value;
        
        const url = `/api/like?region=${region}&uid=${uid}&key=${key}`;  
        fetch(url)
                .then(response => response.json())
                .then(data => {
                        sendLikes();
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

        const badgeItem = itemData.find(item => item.itemID == data.basicInfo.badgeId);
        document.getElementById('badgeId').textContent = badgeItem ? badgeItem.description : data.basicInfo.badgeId;
        
        const bannerItem = itemData.find(item => item.itemID == data.basicInfo.bannerId);
        document.getElementById('bannerId').textContent = bannerItem ? bannerItem.description : data.basicInfo.bannerId;

        document.getElementById('bannerIdId').textContent = data.basicInfo.bannerId;

        document.getElementById('createAt').textContent = unixToHumanTime(data.basicInfo.createAt);

        const avatarItem = itemData.find(item => item.itemID == data.profileInfo.avatarId);
        document.getElementById('headPic').textContent = avatarItem ? avatarItem.description : data.profileInfo.avatarId;

        document.getElementById('headPicId').textContent = data.profileInfo.avatarId;

        let iconName = avatarItem?.icon;
        const avatarImg = document.getElementById("avatarImg");

        if (iconName) {
                const imageUrl = `https://free-fire-data.vercel.app/api/images?iconName=${iconName}&key=${key}`;
                avatarImg.src = imageUrl;
                avatarImg.alt = avatarItem.description;
                avatarImg.style.display = "block";
            } else {
                avatarImg.style.display = "none";
        }

        iconName = bannerItem?.icon;
        const bannerImg = document.getElementById("bannerImg");

        if (iconName) {
                const imageUrl = `https://free-fire-data.vercel.app/api/images?iconName=${iconName}&key=${key}`;
                bannerImg.src = imageUrl;
                bannerImg.alt = bannerItem.description;
                bannerImg.style.display = "block";
            } else {
                bannerImg.style.display = "none";
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

        const petSkillItem = itemData.find(item => item.itemID == data.petInfo.selectedSkillId);
        document.getElementById('petSkill').textContent = petSkillItem ? petSkillItem.description : data.petInfo.selectedSkillId;

        const petSkinItem = itemData.find(item => item.itemID == data.petInfo.skinId);
        document.getElementById('petSkin').textContent = petSkinItem ? petSkinItem.description : data.petInfo.skinId;

        document.getElementById('clanName').textContent = data.clanBasicInfo.clanName;
        document.getElementById('clanId').textContent = data.clanBasicInfo.clanId;
        document.getElementById('clanLevel').textContent = data.clanBasicInfo.clanLevel;
        document.getElementById('memberNum').textContent = data.clanBasicInfo.memberNum;
        document.getElementById('clanCapacity').textContent = data.clanBasicInfo.capacity;
        document.getElementById('captainId').textContent = data.clanBasicInfo.captainId;

        const skillParts = data.profileInfo.equipedSkills.split(','); // Make array from string
        let skills = [];
        for (let i = 0; i < skillParts.length; i += 4) {
                const skillId = skillParts[i + 1]; // skillId is the 2nd item in every group
                if (skillId) skills.push(skillId);
        }

        document.getElementById('skills').textContent = skills.join(', ');

        const iconsContainer = document.getElementById('iconsContainer');
        iconsContainer.innerHTML = '';
        skills.forEach(skillId => {

                const iconPath = `res/img/icons/${skillId}.png`;
                const imgElement = document.createElement('img');
                imgElement.src = iconPath;
                imgElement.alt = `Icon ${skillId}`;
                imgElement.classList.add('m-1');
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

function sendLikes() {
        document.getElementById('likesSentText').textContent = "Likes sent successfully!";
}

/*document.addEventListener('keydown', function(event) {
        if (event.keyCode === 123) {
                event.preventDefault();
        }
});

document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
});*/
