function data() {
  return {
    config: {
      version: 'v0.0.6'
    },
    url: window.location.href,
    logo: "",
    // Permet de définir les blocs affichés ou pas selon l'url
    options: { 
      faq: true
    },
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
      quaternary: ""
    },
    classes: {
      texts: {
        headings: {
          h1: "",
          h2: "",
          h3: "",
          h4: "",
          h5: "",
          h6: "",
        },
        bold: "",
        paragraph: "",
        highlight: ""
      },
      borders: {
        radius: ""
      },
      shadows: {
        box: ""
      },
      components: {
        top_bar: "",
        navlinks: "",
        breadcrumb: {
          link: ""
        },
        situation_banner: "",
        cards: {
          approach: {
            properties: "", // Ex: box-shadow, border-radius, background-color, ...
            icon: "",
            title: "",
            hr: "",
            description: "",
            highlight_text: ""
          },
          posts: {
            properties: "",
            updated_at: "",
            hr: "",
            icon: "",
            title: "",
            summary: "",
            highlight_text: ""
          },
          testimonials: {
            properties: "",
            stars: {
              enabled: "",
              disabled: ""
            },
            title: "",
            comment: "",
            hr: "",
            author: {
              name: "",
              description: ""
            }
          },
          portals: {
            properties: "",
            icon: "",
            title: "",
            description: ""
          },
          solutions: {
            properties: "",
            icon: "",
            title: "",
            tags: "",
            hr: "",
            type: "",
            phone: "",
            address: ""
          }
        },
        inputs: {
          text_field: "",
          textarea: "",
          checkbox: "",
          dropdown: ""
        },
        buttons: {
          primary: "",
          secondary: "",
          outlined: "",
          disaled: ""
        },
        header: {
          properties: "" // Ex: background-color
        },
        footer: {
          properties: "" // Ex : background-color, ...
        },
        tags: "",
        cta: ""
      }
    },
    getCurrentCharte,
    setCharte,
    setConditionalCollectionsItems,
    setColors,
    setLogo,
    initModule
  }
}

function setCharte(prefix, setParameters) {
  this.classes = {
    texts: {
      headings: {
        h1: `${prefix}-h1`,
        h2: `${prefix}-h2`,
        h3: `${prefix}-h3`,
        h4: `${prefix}-h4`,
        h5: `${prefix}-h5`,
        h6: `${prefix}-h6`,
      },
      bold: `${prefix}-bold-text`,
      paragraph: `${prefix}-paragraph`,
      highlight: `${prefix}-highlight-text`
    },
    borders: {
      radius: `${prefix}-border-radius`
    },
    shadows: {
      box: `${prefix}-box-shadow`
    },
    components: {
      top_bar: `${prefix}-top-bar`,
      navlinks: `${prefix}-navlink`,
      breadcrumb: {
        link: `${prefix}-breadcrumb-link`
      },
      situation_banner: `${prefix}-situation-banner`,
      cards: {
        approach: {
          properties: `${prefix}-card-approach`, // Ex: box-shadow, border-radius, background-color, ...
          icon: `${prefix}-card-approach-icon`,
          title: `${prefix}-card-approach-title`,
          hr: `${prefix}-card-approach-hr`,
          description: `${prefix}-card-approach-desc`,
          highlight_text: `${prefix}-card-approach-highlight-text`
        },
        posts: {
          properties: `${prefix}-card-post`,
          updated_at: `${prefix}-card-post-updated-at`,
          hr: `${prefix}-card-post-hr`,
          icon: `${prefix}-card-post-icon`,
          title: `${prefix}-card-post-title`,
          summary: `${prefix}-card-post-summary`,
          highlight_text: `${prefix}-card-post-highlight-text`
        },
        testimonials: {
          properties: `${prefix}-card-testimonials-hr`,
          stars: {
            enabled: `${prefix}-card-testimonials-star-enabled`,
            disabled: `${prefix}-card-testimonials-star-disabled`
          },
          title: `${prefix}-card-testimonials-title`,
          comment: `${prefix}-card-testimonials-comment`,
          hr: `${prefix}-card-testimonials-hr`,
          author: {
            name: `${prefix}-card-testimonials-author-name`,
            description: `${prefix}-card-testimonials-author-desc`
          }
        },
        portals: {
          properties: `${prefix}-card-portals`,
          icon: `${prefix}-card-portals-icon`,
          title: `${prefix}-card-portals-title`,
          description: `${prefix}-card-portals-desc`
        },
        solutions: {
          properties: `${prefix}-card-solutions`,
          icon: `${prefix}-card-solutions-icon`,
          title: `${prefix}-card-solutions-title`,
          tags: `${prefix}-card-solutions-tags`,
          hr: `${prefix}-card-solutions-hr`,
          type: `${prefix}-card-solutions-type`,
          phone: `${prefix}-card-solutions-phone`,
          address: `${prefix}-card-solutions-address`
        }
      },
      inputs: {
        text_field: `${prefix}-input-text`,
        textarea: `${prefix}-input-textarea`,
        checkbox: `${prefix}-input-checkbox`,
        dropdown: `${prefix}-input-dropdown`
      },
      buttons: {
        primary: `${prefix}-button-primary`,
        secondary: `${prefix}-button-secondary`,
        outlined: `${prefix}-button-outlined`,
        disabled: `${prefix}-button-disabled`
      },
      header: {
        properties: `${prefix}-header` // Ex: background-color
      },
      footer: {
        properties: `${prefix}-footer` // Ex : background-color, ...
      },
      tags: `${prefix}-tags`,
      cta: `${prefix}-cta`,
    }
  }

  this.setConditionalCollectionsItems(".conditional-collection", "data-source", prefix)
  setParameters()
}

function setConditionalCollectionsItems(_class, dataAttribute, prefix) {
  const conditionalCollections = document.querySelectorAll(_class);

  conditionalCollections.forEach(conditionalCollection => {

    const children = conditionalCollection.querySelectorAll("*");

    children.forEach(child => {
      const dataSourceValue = child.getAttribute(dataAttribute);

      if (dataSourceValue !== prefix && dataSourceValue !== null) {
        child.style.display = "none"
      }
    });
  });
}

function setColors(primary, secondary, tertiary, quaternary) {
  this.colors = {
    primary,
    secondary,
    tertiary,
    quaternary
  }
}

function setLogo(url) {
  this.logo = url
}

function getCurrentCharte() {
  switch (true) {
    default:
      this.setCharte('oa', () => {
        this.setLogo('https://assets-global.website-files.com/61f94b48d90359310ec28169/632abf38272edc1649ee5386_Logo_MSBA.svg')
        this.setColors('#472583', '#82358B', "#2CBFDC", "#201E62")
        this.options.faq = true
      })
      break;
  }

  this.initModule()
}

function initModule() {
  console.log(`AlpineJS - Initialisé avec succès ! 👍`)
  console.log(`MSBA 2023 - ${this.config.version} - initialisée avec succès ! 👌`)
}