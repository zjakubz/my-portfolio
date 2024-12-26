// projectsData.js
const projectsData = {
    '1': {
      title: 'Webové stránky na míru',
      year: '2023–2025',
      tags: ['HTML', 'CSS', 'JS'],
      overview:
        'Kompletní webové řešení s pokročilými funkcemi včetně responzivního designu, moderních animací a optimalizace pro vyhledávače.',
      client: 'Různé firmy, OSVČ/Podnikatelé',
      role: 'Developer a designer',
      duration: '1 týden až 1 měsíc na jeden web',
      challenge:
        'Každý klient potřebuje unikátní webovou prezentaci, která odpovídá jeho značce a specifickým požadavkům, přičemž je nutné zachovat rychlou odezvu a moderní design.',
      solution:
        'Tvořím moderní webové stránky na míru, případně modernizuji starší na moderní s aktuálními trendy.',
      results:
        'Vylepšená použitelnost a vyšší spokojenost klientů. Navíšení zákazníků a vyšší spokejenost od uživatelů.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress']
    },
    '2': {
      title: 'Mobilní aplikace',
      year: '2024',
      tags: ['Swift'],
      overview:
        'Hra nebo aplikace s otázkami a úkoly, pro iPhone A iPad.',
      client: 'Já',
      role: 'Mobilní vývojář a designér',
      duration: '1 měsíc',
      solution:
        'Vytvoření hry pro IOS, současně tvořím další aplikace pro IOS',
      technologies: ['Swift']
    },
   '3': {
    title: 'Jednoduché kódy pro automatizaci',
    year: '2023–2025',
    tags: ['Python', 'Kotlin', 'Ostatní'],
    overview:
        'Skripty pro třídění dat v Excelu, vyhledávání podniků podle zadaných kritérií na mapách a základní AI sledování objektů v kamerách.',
    client: 'OSVČ, osobní využití',
    role: 'Full Stack vývojář',
    duration: '~1 měsíc',
    challenge:
        'Potřeba efektivního řešení pro urychlení manuálních procesů při analýze a práci s tabulkami.',
    solution:
        'Vytvoření jednoduchých kódů pro automatizaci, které minimalizují chybovost a šetří čas při opakovaných úkolech.',
    results:
        'Zkrácení času analýzy o 60 % a výrazné usnadnění vyhodnocování lokácí, včetně efektivnějšího řazení dat v Excelu.',
    technologies: ['Python', 'Kotlin', 'Ostatní']
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

    document.addEventListener('DOMContentLoaded', function() {
        // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent the click from bubbling up
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('mobile-active');
                document.body.classList.toggle('menu-open');
            });
    
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = navLinks.contains(event.target);
                const isClickOnHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('mobile-active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('mobile-active');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    
        // Project-related functionality
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
    
        if (projectId && projectsData[projectId]) {
            // Your existing project code here...
        }
    });
});