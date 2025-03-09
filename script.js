//your JS code here. If required.
function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        document.addEventListener("DOMContentLoaded", function () {
            const fontSizeInput = document.getElementById("fontsize");
            const fontColorInput = document.getElementById("fontcolor");

            const savedFontSize = getCookie("fontsize");
            const savedFontColor = getCookie("fontcolor");

            if (savedFontSize) {
                document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
                fontSizeInput.value = savedFontSize;
            }
            if (savedFontColor) {
                document.documentElement.style.setProperty("--fontcolor", savedFontColor);
                fontColorInput.value = savedFontColor;
            }

            document.getElementById("fontForm").addEventListener("submit", function (event) {
                event.preventDefault();
                const fontSize = fontSizeInput.value;
                const fontColor = fontColorInput.value;

                setCookie("fontsize", fontSize, 365);
                setCookie("fontcolor", fontColor, 365);

                document.documentElement.style.setProperty("--fontsize", fontSize + "px");
                document.documentElement.style.setProperty("--fontcolor", fontColor);
            });
        });
