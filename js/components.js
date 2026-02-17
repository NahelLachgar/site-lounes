// components.js

const teamImagePaths = [
    'images/equipe/lounes.webp',
    'images/equipe/lindsey.webp',
    'images/equipe/pierre.webp',
    'images/equipe/catherine.webp',
    'images/equipe/dominique.png',
    'images/equipe/alexandra.webp',
    'images/equipe/baptiste.webp',
    'images/equipe/isabelle.webp',
    'images/equipe/herve.webp',
    'images/equipe/stephanie.webp',
    'images/equipe/yohan.webp',
    'images/equipe/corinne.webp',
    'images/equipe/stephane.webp',
    'images/equipe/virginie.webp',
    'images/equipe/guillaume.webp',
    'images/equipe/celine.webp',
    'images/equipe/marc.webp',
    'images/equipe/arwen.webp',
    'images/equipe/thierry.webp',
    'images/equipe/erika.webp',
    'images/equipe/michel.webp',
    'images/equipe/teresa.webp',
    'images/equipe/jerome.webp',
    'images/equipe/sophie.webp',
    'images/equipe/hicham.webp',
    'images/equipe/anne-sophie.webp',
    'images/equipe/matheo.webp',
    'images/equipe/nathalie.webp',
    'images/equipe/vincent.png'
];

const programmeImagePaths = [
    'images/programme/coulee-verte.jpg',
    'images/programme/police.png',
    'images/programme/petite-enfance.webp',
    'images/programme/seniors.png',
    'images/programme/convivialite.png',
    'images/programme/commerce.png'
];

function preloadTeamImages() {
    if (window.__teamImagesPreloaded) {
        return;
    }

    window.__teamImagesPreloaded = true;

    const uniquePaths = [...new Set(teamImagePaths)];

    const warmImageCache = () => {
        uniquePaths.forEach((path, index) => {
            setTimeout(() => {
                const image = new Image();
                image.decoding = 'async';
                image.src = path;
            }, index * 25);
        });
    };

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(warmImageCache, { timeout: 1500 });
        return;
    }

    setTimeout(warmImageCache, 200);
}

function preloadProgrammeImages() {
    if (window.__programmeImagesPreloaded) {
        return;
    }

    window.__programmeImagesPreloaded = true;

    const uniquePaths = [...new Set(programmeImagePaths)];

    const warmImageCache = () => {
        uniquePaths.forEach((path, index) => {
            setTimeout(() => {
                const image = new Image();
                image.decoding = 'async';
                image.src = path;
            }, index * 25);
        });
    };

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(warmImageCache, { timeout: 1500 });
        return;
    }

    setTimeout(warmImageCache, 200);
}

function injectHeader(activePage = '') {
    const navHTML = `
    <!-- NAVIGATION -->
    <nav class="bg-white shadow-md fixed w-full z-50 top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
                <div class="flex items-center">
                    <a href="/" class="flex items-center">
                        <img src="images/logo.png" alt="Au Cœur du Plessis" class="h-16 w-auto">
                    </a>
                </div>
                <!-- Menu Desktop -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="${activePage === 'home' ? 'font-bold text-plessis-purple' : 'text-gray-600 hover:text-plessis-purple transition'}">Accueil</a>
                    <a href="programme.html" class="${activePage === 'programme' ? 'font-bold text-plessis-purple' : 'text-gray-600 hover:text-plessis-purple transition'}">Le Programme</a>
                    <a href="notre-mouvement.html" class="${activePage === 'mouvement' ? 'font-bold text-plessis-purple' : 'text-gray-600 hover:text-plessis-purple transition'}">Notre Mouvement</a>
                    <a href="notre-equipe.html" class="${activePage === 'equipe' ? 'font-bold text-plessis-purple' : 'text-gray-600 hover:text-plessis-purple transition'}">Notre Équipe</a>
                    <a href="contact.html"
                        class="px-5 py-2.5 rounded-full gradient-bg text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
                        Nous contacter
                    </a>
                </div>
                <!-- Bouton Menu Mobile -->
                <div class="flex items-center md:hidden">
                    <button id="mobile-menu-button" class="text-gray-600 hover:text-plessis-purple focus:outline-none">
                        <i class="ri-menu-line text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Menu Mobile -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
            <div class="px-4 pt-2 pb-4 space-y-2">
                <a href="/" class="block px-3 py-2 rounded-md ${activePage === 'home' ? 'bg-purple-50 text-plessis-purple font-bold' : 'text-gray-600 hover:bg-purple-50 hover:text-plessis-purple transition'}">Accueil</a>
                <a href="programme.html" class="block px-3 py-2 rounded-md ${activePage === 'programme' ? 'bg-purple-50 text-plessis-purple font-bold' : 'text-gray-600 hover:bg-purple-50 hover:text-plessis-purple transition'}">Le Programme</a>
                <a href="notre-mouvement.html" class="block px-3 py-2 rounded-md ${activePage === 'mouvement' ? 'bg-purple-50 text-plessis-purple font-bold' : 'text-gray-600 hover:bg-purple-50 hover:text-plessis-purple transition'}">Notre Mouvement</a>
                <a href="notre-equipe.html" class="block px-3 py-2 rounded-md ${activePage === 'equipe' ? 'bg-purple-50 text-plessis-purple font-bold' : 'text-gray-600 hover:bg-purple-50 hover:text-plessis-purple transition'}">Notre Équipe</a>
                <a href="contact.html" class="block px-3 py-2 rounded-md text-white bg-gradient-to-r from-plessis-purple to-plessis-orange font-bold">Nous contacter</a>
            </div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Initialize mobile menu
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    preloadTeamImages();
    preloadProgrammeImages();
}

function injectFooter() {
    const footerHTML = `
    <!-- FOOTER -->
    <footer class="bg-gray-50 pt-12 pb-8 border-t border-gray-200 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <img src="images/logo.png" alt="Au Cœur du Plessis" class="h-16 w-auto">
            </div>
            <div class="flex space-x-6 text-sm text-gray-500 items-center">
                <a href="mentions-legales.html" class="hover:text-plessis-purple transition">Mentions Légales</a>
                <a href="mailto:aucoeurduplessis@gmail.com" class="hover:text-plessis-purple transition" aria-label="Email">
                    <i class="ri-mail-line text-xl"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572997027975" target="_blank" rel="noopener noreferrer" class="hover:text-plessis-purple transition" aria-label="Facebook">
                    <i class="ri-facebook-circle-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/aucoeurduplessis" target="_blank" rel="noopener noreferrer" class="hover:text-plessis-purple transition" aria-label="Instagram">
                    <i class="ri-instagram-fill text-xl"></i>
                </a>
            </div>
        </div>
    </footer>
    `;

    const lastScript = document.body.lastElementChild;
    if (lastScript.tagName === 'SCRIPT') {
        lastScript.insertAdjacentHTML('beforebegin', footerHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}
