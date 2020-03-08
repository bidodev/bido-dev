let i = 0;
const txt = `Hi, I'm Claudinei! Web Developer. System administrator, fascinated by computer science and new technologies.`; /* The text */
const speed = 40; /* The speed/duration of the effect in milliseconds */

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("profile__bio").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();
