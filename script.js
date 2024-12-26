// projectsData.js
const projectsData = {
    '1': {
        title: 'Webové Stránky na míru',
        year: '2023-2025',
        tags: ['HTML', 'CSS', 'JS'],
        overview: 'Kompletní webové řešení s pokročilými funkcemi včetně responzivního designu, moderních animací a optimalizace pro vyhledávače.',
        client: 'Různé firmy a OSVČ',
        role: 'Developer a Designer',
        duration: '1 týden - 1 měsíc na jeden web',
        challenge: 'Každý klient potřebuje unikátní webovou prezentaci, která odpovídá jeho značce a specifickým požadavkům, při zachování vysoké rychlosti načítání a moderního designu.',
        solution: 'Vytvořil jsem modulární systém vývoje pomocí moderních technologií, který umožňuje rychlou customizaci a implementaci podle potřeb klienta.',
        results: 'Dosaženo 40% zlepšení v konverzích a 50% zrychlení načítání stránek.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'SEO']
    },
    '2': {
        title: 'Mobilní aplikace',
        year: '2024',
        tags: ['Flutter', 'Firebase', 'Swift'],
        overview: 'Multiplatformní mobilní aplikace pro sledování fitness aktivit a sociální síťování.',
        client: 'FitConnect CZ',
        role: 'Mobilní vývojář',
        duration: '4 měsíce',
        challenge: 'Vytvoření plynulého uživatelského zážitku na iOS i Android při zachování vysokého výkonu.',
        solution: 'Využití Flutteru pro multiplatformní vývoj s nativními moduly pro specifické funkce platformy.',
        results: 'Úspěšné spuštění na obou platformách s více než 100 tisíci stažení v prvním měsíci.',
        technologies: ['Flutter', 'Firebase', 'Swift', 'Kotlin', 'Google Maps API']
    },
    '3': {
        title: 'AI Dashboard',
        year: '2023-2025',
        tags: ['Python', 'TensorFlow', 'D3.js'],
        overview: 'Platforma pro vizualizaci dat a analytiku strojového učení.',
        client: 'DataTech Analytics CZ',
        role: 'Full Stack vývojář',
        duration: '5 měsíců',
        challenge: 'Vizualizace komplexních AI metrik intuitivním způsobem pro netechnické uživatele.',
        solution: 'Vytvoření interaktivních dashboardů pomocí D3.js s real-time zpracováním dat.',
        results: 'Snížení času analýzy o 60 % a zlepšení přesnosti modelů o 25 %.',
        technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'PostgreSQL']
    }
};

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];
        
        // Update project title
        document.querySelector('[data-project-title]').textContent = project.title;
        
        // Update project year
        document.querySelector('[data-project-year]').textContent = project.year;
        
        // Update project tags
        const tagsContainer = document.querySelector('[data-project-tags]');
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        // Show correct image set and hide others
        document.querySelectorAll('.project-image-set').forEach(set => {
            set.style.display = 'none';
        });
        document.getElementById(`project${projectId}-images`).style.display = 'block';
        
        // Update project details
        document.querySelector('[data-project-overview]').textContent = project.overview;
        document.querySelector('[data-project-client]').textContent = project.client;
        document.querySelector('[data-project-role]').textContent = project.role;
        document.querySelector('[data-project-duration]').textContent = project.duration;
        document.querySelector('[data-project-challenge]').textContent = project.challenge;
        document.querySelector('[data-project-solution]').textContent = project.solution;
        document.querySelector('[data-project-results]').textContent = project.results;
        
        // Update technologies list
        const techList = document.querySelector('[data-project-technologies]');
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
        
        // Update navigation links
        const prevId = String(Number(projectId) - 1);
        const nextId = String(Number(projectId) + 1);
        
        const prevLink = document.querySelector('[data-project-prev]');
        const nextLink = document.querySelector('[data-project-next]');
        
        if (projectsData[prevId]) {
            prevLink.href = `project.html?id=${prevId}`;
        } else {
            prevLink.style.display = 'none';
        }
        
        if (projectsData[nextId]) {
            nextLink.href = `project.html?id=${nextId}`;
        } else {
            nextLink.style.display = 'none';
        }
    }
});