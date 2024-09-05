let region = "";

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
    document.getElementById('createAt').textContent = data.basicInfo.createAt;
    document.getElementById('headPic').textContent = data.basicInfo.headPic;
    document.getElementById('lastLoginAt').textContent = data.basicInfo.lastLoginAt;
    document.getElementById('nickname').textContent = data.basicInfo.nickname;
    document.getElementById('exp').textContent = data.basicInfo.exp;
    document.getElementById('rank').textContent = data.basicInfo.rank;
    document.getElementById('csRank').textContent = data.basicInfo.csRank;
    document.getElementById('level').textContent = data.basicInfo.level;
    document.getElementById('liked').textContent = data.basicInfo.liked;

    const createAtEpoch = parseInt(data.basicInfo.createAt, 10);
    const offsetMinutes = 330;
    const formattedCreateAt = convertEpochToTimeZone(createAtEpoch, offsetMinutes);
        
    document.getElementById('createAt').textContent = formattedCreateAt;
}
function convertEpochToTimeZone(epochTime, offsetMinutes) {
    const adjustedEpochTime = epochTime + offsetMinutes * 60;
    const date = new Date(adjustedEpochTime * 1000);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMins = Math.abs(offsetMinutes) % 60;
    const offsetSign = offsetMinutes >= 0 ? '+' : '-';
    const offsetString = `GMT${offsetSign}${offsetHours}:${String(offsetMins).padStart(2, '0')}`;

    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds} ${offsetString}`;
}
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) {
                event.preventDefault();
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
