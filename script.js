elet region = "";

        function setRegion(newRegion) {
            region = newRegion;
            document.getElementById("region").value = region;
        }

        function redirectToURL() {
            const uid = document.getElementById("uid").value;
            const key = "sounava777";
                
const url = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=${key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayData(data) {
        
    document.getElementById('accountId').textContent = data.basicInfo.accountId;
    document.getElementById('badgeId').textContent = data.basicInfo.badgeId;
    document.getElementById('bannerId').textContent = data.basicInfo.bannerId;
    document.getElementById('createAt').textContent = formattedCreateAt;
    document.getElementById('headPic').textContent = data.basicInfo.headPic;
    document.getElementById('lastLoginAt').textContent = data.basicInfo.lastLoginAt;
    document.getElementById('nickname').textContent = data.basicInfo.nickname;
    document.getElementById('exp').textContent = data.basicInfo.exp;
    document.getElementById('rank').textContent = data.basicInfo.rank;
    document.getElementById('csRank').textContent = data.basicInfo.csRank;
    document.getElementById('level').textContent = data.basicInfo.level;
    document.getElementById('liked').textContent = data.basicInfo.liked;
}
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) {
                event.preventDefault();
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
