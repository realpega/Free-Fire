let region = "";

        function setRegion(newRegion) {
            region = newRegion;
            document.getElementById("region").value = region;
        }

        function redirectToURL() {
            const uid = document.getElementById("uid").value;
            const url = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=sounava777`;
            
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
