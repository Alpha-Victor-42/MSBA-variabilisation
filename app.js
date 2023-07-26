function data() {
  return {
    config: {
      version: 'v0.0.7'
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
        links: "",
        menu_title: "",
        text_block: "",
        rich_text: "",
        bold_text: "",
        headings: {
          h1: "",
          h3: "",
          heading_span: "",
          paragraph_span: ""
        }
      },
      icons: {

      },
      buttons: {
        primary: "",
        outlined: "",
        icon: ""
      },
      components: {
        menu_contact: "",
        situation_block: "",
        menu_portals_container: "",
        search_engine: {
          form: "",
          dropdown: "",
          dropdown_card: "",
          menu: ""
        },
        demarche_card: {
          card: "",
          title: "",
          icon: ""
        },
        advice_card: {
          card: "",
          title: "",
          author_name: ""
        },
        prestation_card: {
          card: "",
          title: ""
        },
        result_search_tag: {
          card: ""
        },
        article_card: {
          card: "",
          title: "",
          icon: ""
        },
        help_block: {
          title: "",
          panel: ""
        },
        etab_information_block: {
          title: "",
          icon: "",
          map: ""
        },
        summary_article: {
          card: ""
        },
        faq: {
          container: "",
          accordion_header: "",
          accordion_panel: ""
        },
        call_button: {
          button: "",
          tooltip: ""
        }
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
      links: `${prefix}-text_link`,
      menu_title: `${prefix}-menu_title`,
      text_block: `${prefix}-text_block`,
      rich_text: `${prefix}-rich_text`,
      bold_text: `${prefix}-bold_text`,
      headings: {
        h1: `${prefix}-heading_h1`,
        h3: `${prefix}-heading_h3`,
        heading_span: `${prefix}-heading_span_light`,
        paragraph_span: `${prefix}-paragraph_span_light`
      }
    },
    icons: {

    },
    buttons: {
      primary: `${prefix}-button`,
      outlined: `${prefix}-button_outlined`,
      icon: `${prefix}-button_icon`
    },
    components: {
      menu_contact: `${prefix}-menu_contact`,
      situation_block: `${prefix}-situation_block`,
      menu_portals_container: `${prefix}-menu_portals_container`,
      search_engine: {
        form: `${prefix}-se_form`,
        dropdown: `${prefix}-se_dropdown`,
        dropdown_card: `${prefix}-se_dropdown_card`,
        menu: `${prefix}-se_menu`
      },
      demarche_card: {
        card: `${prefix}-demarche_card`,
        title: `${prefix}-demarche_title`,
        icon: `${prefix}-demarche_card_icon`
      },
      advice_card: {
        card: `${prefix}-advice_card`,
        title: `${prefix}-advice_title`,
        author_name: `${prefix}-author_name`
      },
      prestation_card: {
        card: `${prefix}-prestation_card`,
        title: `${prefix}-prestation_title`
      },
      result_search_tag: {
        card: `${prefix}-result_search_tag`
      },
      article_card: {
        card: `${prefix}-article_card`,
        title: `${prefix}-article_title`,
        icon: `${prefix}-article_icon`
      },
      help_block: {
        title: `${prefix}-help_block_title`,
        panel: `${prefix}-help_block_panel`
      },
      etab_information_block: {
        title: `${prefix}-result_information_title`,
        icon: `${prefix}-purple_icon`,
        map: `${prefix}-result_map`
      },
      summary_article: {
        card: `${prefix}-summary_article_title`
      },
      faq: {
        container: `${prefix}-faq`,
        accordion_header: `${prefix}-faq_accordion_header`,
        accordion_panel: `${prefix}-faq_accordion_panel`
      },
      call_button: {
        button: `${prefix}-call_fixed_button`,
        tooltip: `${prefix}-call_button_tooltip`
      }
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
      this.setCharte('msba-2023.webflow.io', () => {
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