const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const projectGrid = document.querySelector(".project-grid");

menuBtn.addEventListener("click", function () {
    navList.classList.toggle("drop-down");
    if (navList.classList.contains("drop-down")) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "scroll"
    }
})

const projects = [
    {
        imageSource: "./images/movies-app.png",
        title: "Movie search app",
        description: "Responsive app built with HTML, CSS3 and JavaScript",
        previewLink: "https://merry-paletas-3aa676.netlify.app",
        githubLink: "https://github.com/Geeluv/movie-search-app"
    },
    {
        imageSource: "./images/movies-app.png",
        title: "Leogram social media app",
        description: "Responsive app built with React and NodeJS",
        previewLink: "https://merry-paletas-3aa676.netlify.app",
        githubLink: "https://github.com/Geeluv/movie-search-app"
    },
    {
        imageSource: "./images/portfolio.png",
        title: "Portfolio website",
        description: "Responsive app built with HTML, CSS3 and JavaScript",
        previewLink: "https://lighthearted-begonia-71158c.netlify.app",
        githubLink: "https://github.com/Geeluv/portfolio"
    },
    {
        imageSource: "./images/movies-app.png",
        title: "Movie search app",
        description: "Responsive app built with HTML, CSS3 and JavaScript",
        previewLink: "https://merry-paletas-3aa676.netlify.app",
        githubLink: "https://github.com/Geeluv/movie-search-app"
    },
    {
        imageSource: "./images/movies-app.png",
        title: "Movie search app",
        description: "Responsive app built with HTML, CSS3 and JavaScript",
        previewLink: "https://merry-paletas-3aa676.netlify.app",
        githubLink: "https://github.com/Geeluv/movie-search-app"
    },
    {
        imageSource: "./images/movies-app.png",
        title: "Movie search app",
        description: "Responsive app built with HTML, CSS3 and JavaScript",
        previewLink: "https://merry-paletas-3aa676.netlify.app",
        githubLink: "https://github.com/Geeluv/movie-search-app"
    },
]

projectGrid.innerHTML = projects.map(project => (
    `
                <article class="project-item">
                    <img src=${project.imageSource} />
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <button><a href=${project.previewLink}>Live preview</a></button>
                        <button><a href=${project.githubLink}>Check on Github</a></button>
                    </div>
                </article>
                `
)).join("")