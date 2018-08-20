let projects = [
    {
        title: "Jewelry Store Mockup",
        bgImg: "./assets/jewelry-bg.jpg",
        url: "https://billyderringer.github.io/jewelry-store/"
    },
    {
        title: "Charger Customs Mockup",
        bgImg: "./assets/charger-bg.jpg",
        url: "https://billyderringer.github.io/charger/"
    },
    {
        title: "National Parks Finder",
        bgImg: "./assets/national-park.jpg",
        url: "https://billyderringer.github.io/National-Park-Finder/"
    },
    {
        title: "Party Planet",
        bgImg: "./assets/party-balloons.jpg",
        url: "https://billyderringer.github.io/party-planet/"
    },
    {
        title: "Random Speller",
        bgImg: "./assets/dictionary.jpg",
        url: "https://billyderringer.github.io/random-speller/"
    },
    {
        title: "Project Math",
        bgImg: "./assets/addition.jpeg",
        url: "https://billyderringer.github.io/project-math/"
    }
]

const main = document.getElementById('projects')

const makeProjects = `
        <div class="project-container">
        ${projects.map(project => 
        `
        <div class="project-tile"
         style="background: 
         linear-gradient(
            rgba(0, 0, 0, 0.75), 
            rgba(0, 0, 0, 0.55)
         ), url(${project.bgImg}), 
            bottom / cover">
        <a href=${project.url}
           target="_blank"
           rel="noopener noreferrer">
            ${project.title}
        </a>
    </div>
        `
).join('')}
</div>
`
    

main.innerHTML = makeProjects

//*[@id="projects"]/text()[2]