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
        }

        function displayData(data) {
                
        //document.getElementById('accountId').textContent = data.basicInfo.accountId;
        //document.getElementById('badgeId').textContent = data.basicInfo.badgeId;
        document.getElementById('bannerId').textContent = data.basicInfo.bannerId:
        document.getElementById('createAt').textContent = data.basicInfo.createAt;
        document.getElementById('headPic').textContent = data.basicInfo.headPic;
        document.getElementById('lastLoginAt').textContent = data.basicInfo.lastLoginAt;
        document.getElementById('nickname').textContent = data.basicInfo.nickname;
                
            const displayElement = document.getElementById("dataDisplay");
            displayElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }

        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) {
                event.preventDefault();
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
