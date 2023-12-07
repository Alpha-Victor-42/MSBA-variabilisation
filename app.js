function data() {
  return {
    config: {
      version: 'v0.1.2'
    },
    url: window.location.href,
    logo: "",
    // Permet de définir les blocs affichés ou pas selon l'url
    options: {
      currentCharte: '',
      home: {
        situation: true,
        search_engine: true,
        approche: true,
        actualite: true,
        testimonials: true,
        cta: true,
        faq: true,
        seo_content: true
      }
    },
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
      quaternary: ""
    },
    classes: {
      body: "",
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
        icon: "",
        outlined_light: "",
        outlined_full: "",
        disabled: ""
      },
      components: {
        header: {
          background: ""
        },
        footer: {
          background: ""
        },
        menu_contact: "",
        situation_block: "",
        menu_portals_container: "",
        search_engine: {
          form: "",
          dropdown: "",
          dropdown_card: "",
          menu: ""
        },
        portals_block: {
          card: ""
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
    initModule,
    desindexation,
    noEnter
  }
}

function setCharte(prefix, setParameters) {
  this.options.currentCharte = prefix

  this.classes = {
    body: `${prefix}-body`,
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
      outlined_light: `${prefix}-button_outlined_light`,
      outlined_full: `${prefix}-button_outlined_full`,
      disabled: `${prefix}-button_disabled`,
      icon: `${prefix}-button_icon`
    },
    components: {
      header: {
        background: `${prefix}-header_bg`
      },
      footer: {
        background: `${prefix}-footer_bg`
      },
      menu_contact: `${prefix}-menu_contact`,
      situation_block: `${prefix}-situation_block`,
      menu_portals_container: `${prefix}-menu_portals_container`,
      search_engine: {
        form: `${prefix}-se_form`,
        dropdown: `${prefix}-se_dropdown`,
        dropdown_card: `${prefix}-se_dropdown_card`,
        menu: `${prefix}-se_menu`
      },
      portals_block: {
        card: `${prefix}-portals_block_card`
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

  this.setConditionalCollectionsItems("[data-conditional-collection]", "data-source", prefix)
  setParameters()
}

function setConditionalCollectionsItems(_class, dataAttribute, prefix) {
  const conditionalCollections = document.querySelectorAll(_class);

  conditionalCollections.forEach(conditionalCollection => {

    const children = conditionalCollection.querySelectorAll("*");

    children.forEach(child => {
      const dataSourceValue = child.getAttribute(dataAttribute);
      if (dataSourceValue !== null) {
        if (!dataSourceValue.includes(prefix)) {
          child.style.display = "none"
        }
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
    case this.url.includes('av42'):
      this.setCharte('av42', () => {
        this.setLogo('https://uploads-ssl.webflow.com/649c0498976f3a3f955fb9fc/64ef1e3e0443573df843b6df_av42dark.png')
        this.setColors('#060030', '#0f4c81', '#f3e61f', '#f0a347'),
        this.options.home.faq = false

        this.desindexation()
      })
      break;
    case this.url.includes('hm'):
      this.setCharte('hm', () => {
        this.setLogo('https://uploads-ssl.webflow.com/649c0498976f3a3f955fb9fc/655c71ecb736f6193d11eeb9_logo-hm-v2.svg')
        this.setColors('#EA5906', '#EF7C00', '#FDC41D', '#575656')
        this.options.home.faq = false

        this.desindexation()
      })
    break;
    default:
      this.setCharte('vyv', () => {
        this.setLogo('https://assets-global.website-files.com/61f94b48d90359310ec28169/632abf38272edc1649ee5386_Logo_MSBA.svg')
        this.setColors('#472583', '#82358B', "#2CBFDC", "#201E62")
        this.options.home.faq = true
      })
      break;
  }

  this.initModule()
}

function desindexation() {
  const meta = document.createElement('meta')

  meta.setAttribute('name', 'robots')
  meta.setAttribute('content', 'noindex, nofollow')

  document.getElementsByTagName('head')[0].appendChild(meta)
}

function noEnter(event) {

  // Global function for blocking defaults webflow text fields */

  /* 
  * add this custom attribute on all webflow text fields
  * [key: x-on:keypress]
  * [value: noEnter(event)] 
  */

  if(event.key === "Enter") {
    event.preventDefault()
  }
  
}

function initModule() {
  console.log(`AlpineJS - Initialisé avec succès ! 👍`)
  console.log(`MSBA 2023 - ${this.config.version} - initialisée avec succès ! 👌`)
}