const config = {
    version: 'v0.0.1'
}

function data() {
    return {
        url: window.location.href,
        classes: {

        },
        getCurrentCharte,
        setCharte,
        setConditionalCollectionsItems
    }
}

function setCharte(prefix) {

}

function setConditionalCollectionsItems(_class, dataAttribute, prefix) {

}

function getCurrentCharte() {
    switch (true) {
        default:
            this.setCharte('oa')
            this.classes.logo = 'https://assets-global.website-files.com/61f94b48d90359310ec28169/632abf38272edc1649ee5386_Logo_MSBA.svg'
        break;
    }
}

console.log(`MSBA 2023 - ${config.version} - initialisée avec succès ! 👌`)