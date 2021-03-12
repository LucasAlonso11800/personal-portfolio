const spanish = document.getElementById('spanish');
const english = document.getElementById('english');
const german = document.getElementById('german');

// CATCHING THE DOM

const firstLink = document.getElementById('first-link');
const secondLink = document.getElementById('second-link');
const thirdLink = document.getElementById('third-link');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const introButton = document.getElementById('intro-button');
const aboutTitle = document.getElementById('about-title');
const aboutText = document.getElementById('about-text');
const aboutLanguages = document.getElementById('about-languages');
const aboutLanguages2 = document.getElementById('about-languages-2');
const checkProjects = document.getElementById('check-projects');
const liveProject = document.querySelectorAll('.live-project');
const github = document.querySelectorAll('.github');
const contactTitle = document.getElementById('contact-title');
const contactText = document.getElementById('contact-text');
const contactText2 = document.getElementById('contact-text-2');
const contactText3 = document.getElementById('contact-text-3');

// SPANISH TRANSLATION

spanish.addEventListener('click', () => {
    firstLink.textContent = 'Sobre mi';
    secondLink.textContent = 'Portafolio';
    thirdLink.textContent = 'Contacto';
    title.textContent = 'Hola!, Soy Lucas';
    subtitle.textContent = 'Soy desarrollador web';
    introButton.textContent = 'Te cuento sobre mi?';
    aboutTitle.textContent = 'Tengo lo que estas buscando';
    aboutText.textContent = 'Soy un programador autodidacta que se esfuerza todos los dias para mejorar como desarrollador y perseguir sus sueños. Aprendi diferentes tecnologías por mi cuenta y planeo seguir aprendiendo todo lo posible para ser capaz de crear mejores proyectos cada vez.'
    aboutLanguages.textContent = 'Tambien me encanta aprender idiomas. Hasta aca puedo hablar 3.'
    spanish.textContent = 'Español, ';
    english.textContent = 'Ingles, ';
    german.textContent = 'y Aleman.';
    aboutLanguages2.textContent = 'Podes hacer click en cualquiera para traducir la página.'
    checkProjects.textContent = "Pasa a ver mis proyectos";
    liveProject.forEach(project => {
        project.textContent = 'Ver proyecto'
    });
    github.forEach(git => {
        git.textContent = 'Repositorio en GitHub'
    });
    contactTitle.textContent = 'Contactemonos!';
    contactText.textContent = 'Que te parecieron mis proyectos?';
    contactText2.textContent = 'Te gustaria que trabajemos juntos?';
    contactText3.textContent = 'Llamame, mandame un mensaje o un mail y lo charlamos';
});

// ENGLISH TRANSLATION

english.addEventListener('click', () => {
    firstLink.textContent = 'About me';
    secondLink.textContent = 'Portfolio';
    thirdLink.textContent = 'Contact';
    title.textContent = "Hi!, I'm Lucas";
    subtitle.textContent = "I'm a web developer";
    introButton.textContent = 'Find out more about me';
    aboutTitle.textContent = "I may have what you're looking for!";
    aboutText.textContent = "I'm a self-taught web developer, who works everyday to get better at programming and pursue my dreams. I've learnt a lot of different technologies on my own and i plan to keep on learning as much as i can, to make better projects each time."
    aboutLanguages.textContent = "I'm also passinante about languages. So far i can speak 3:"
    spanish.textContent = 'Spanish, ';
    english.textContent = 'English, ';
    german.textContent = 'and German.';
    aboutLanguages2.textContent = "You can click on each one to translate the page.";
    checkProjects.textContent = "Check out my projects";
    liveProject.forEach(project => {
        project.textContent = 'Live project'
    });
    github.forEach(git => {
        git.textContent = 'GitHub repository'
    });
    contactTitle.textContent = "Let's get in touch!";
    contactText.textContent = 'Did you like my projects?';
    contactText2.textContent = 'Would you like to work with me?';
    contactText3.textContent = "Give me a call, send me a message or an email and we'll get to know each other.";
});

// GERMAN TRANSLATION

german.addEventListener('click', () => {
    firstLink.textContent = 'Über mich';
    secondLink.textContent = 'Portfolio'
    thirdLink.textContent = 'Kontakt';
    title.textContent = 'Hallo!, Ich bin Lucas';
    subtitle.textContent = 'Ich bin Web Entwickler';
    introButton.textContent = 'Möchtest du über mich lesen?';
    aboutTitle.textContent = 'Ich habe, was du gerade brauchst';
    aboutText.textContent = 'Ich bin ein autodidaktischer Web Entwickler, der sich jeden tag anstrengt, um besser beim programmieren zu werden. Ich habe viele verschiedene Technologien allein gelernt und ich habe vor, weiter zu lernen, um jedes Mal bessere Projekte zu machen.'
    aboutLanguages.textContent = 'Ich interessiere mich auch für Sprachen. Bisher habe ich drei gelernt:'
    spanish.textContent = 'Spanisch, ';
    english.textContent = 'Englisch, ';
    german.textContent = 'und Deutsch.';
    aboutLanguages2.textContent = "Du kannst eine auswählen und clicken, um die Website zu übersetzen.";
    checkProjects.textContent = "Sieh meine Projekte an";
    liveProject.forEach(project => {
        project.textContent = 'Test Projekt'
    });
    github.forEach(git => {
        git.textContent = 'GitHub Ablage'
    });
    contactTitle.textContent = 'Kontaktieren wir';
    contactText.textContent = 'Haben meine Projekte dir gefallen?';
    contactText2.textContent = 'Möchtest du, dass wir zusammen arbeiten?';
    contactText3.textContent = 'Ruf mich and, schick mir eine Nachricht oder eine Mail und wir können darüber sprechen.';
});