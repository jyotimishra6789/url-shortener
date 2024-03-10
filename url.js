var firstclick=0;
        function Q1() {
            var answer = document.getElementById("ans1");

            if (firstclick===0) {
                answer.style.display="block";
                firstclick=1;
            } else {
                answer.style.display = "none";
                firstclick=0;
            }
        }
        var firstclick1=0;
        function Q2() {
            var answer1 = document.getElementById("ans2");

            if (firstclick1===0) {
                answer1.style.display="block";
                firstclick1=1;
            } else {
                answer1.style.display = "none";
                firstclick1=0;
            }
        }
        var firstclick2 = 0;

        function Q3() {
            var answer2 = document.getElementById("ans3");
        
            if (firstclick2 === 0) {
                answer2.style.display = "block";
                firstclick2 = 1;
            } else {
                answer2.style.display = "none";
                firstclick2 = 0;  
            }
        }
        
        var firstclick3 = 0;
        
        function Q4() {
            var answer3 = document.getElementById("ans4");

            if (firstclick3===0) {
                answer3.style.display="block";
                firstclick3=1;
            } else {
                answer3.style.display = "none";
                firstclick3=0;
            }
        }
        document.getElementById('box').addEventListener('click', shortenUrl);

        async function shortenUrl() {
            const inputUrl = document.getElementById('link').value;

            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': 'c7ddd83576msh80eb27dac3d43b9p17bc60jsn153dd571a659',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    url: inputUrl
                })
            };

            try {
                const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options);
                const result = await response.text();
                console.log(result);

                // Display the result on the page or perform any other actions
                alert('Shortened URL: ' + result);
            } catch (error) {
                console.error(error);
                // Handle errors, display an error message, etc.
                alert('Error: ' + error.message);
            }
        }