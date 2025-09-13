function loadPageContent(pageKey) {
    fetch('JSON/content.json')
        .then(res => res.json())
        .then(data => {
            if (data.header) populateExistingElements(data.header);
            if (data.footer) populateExistingElements(data.footer);
            if (data[pageKey]) populateExistingElements(data[pageKey]);
        })
        .catch(err => console.error('Error loading content:', err));
}

function populateExistingElements(content) {
    for (let key in content) {
        const element = document.getElementById(key);
        if (!element) continue;
        element.innerHTML = content[key];
    }
}