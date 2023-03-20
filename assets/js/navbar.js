const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy tabs
const tabs = $$(".navbar__tab");
const active = $(".navbar__tab.navbar__tab--active");

// Gắn sự kiện click
tabs.forEach((tab) => {
    tab.onclick = function () {
        $(".navbar__tab.navbar__tab--active").classList.remove(
            "navbar__tab--active"
        );
        this.classList.add("navbar__tab--active");
    };
});
