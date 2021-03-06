(function() {
    var themeSelectorDropdown = document.getElementById('themeSelectorDropdown');

    if (themeSelectorDropdown) {
        var htmlRoot = document.querySelector('html'),
            themeSelectors = document.querySelectorAll('.theme-selector');

        themeSelectors.forEach(function (el) {
            el.addEventListener('click', function() {
                var selectedTheme = el.getAttribute('data-sh-theme'),
                    selectedThemeMode = el.getAttribute('data-sh-theme-mode');

                htmlRoot.setAttribute('data-sh-theme', selectedTheme);
                htmlRoot.setAttribute('data-sh-theme-mode', selectedThemeMode);
                localStorage.setItem('theme', selectedTheme);
                localStorage.setItem('theme-mode', selectedThemeMode);
            }, false);
        });

        themeSelectorDropdown.addEventListener('show.bs.dropdown', function () {
            themeSelectors.forEach(function (el) {
                if (el.getAttribute('data-sh-theme') == htmlRoot.getAttribute('data-sh-theme')) {
                    el.classList.add('active');
                    el.setAttribute('aria-current', 'true');
                } else {
                    el.classList.remove('active');
                    el.removeAttribute('aria-current');
                }
            });
        });
    }
})();