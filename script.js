document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const titles = ["I'm a software developer.", "I'm a web developer."];
    let titleIndex = 0;

    const subtitleText = document.getElementById("subtitle-text");

    function typeWriterEffect(text, element) {
        element.classList.add("typewriter-effect");
        let index = 0;

        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    element.innerHTML = "";
                    titleIndex = (titleIndex + 1) % titles.length;
                    typeWriterEffect(titles[titleIndex], element);
                }, 2000);
            }
        }
        type();
    }

    typeWriterEffect(titles[titleIndex], subtitleText);
});
