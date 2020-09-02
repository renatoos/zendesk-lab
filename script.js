
    var app = new Vue({
  el: '#app',
  data: {
    brand: "Zendesk",
    menu: [
        {
            id: "sunco-cfc",
            label: "SunCo CFC",
            url: "sunco.html",
            description: "Sunshine Conversations makes it easy to add conversational capabilities to your product or business. In these docs you’ll find everything you need to use the platform.",
            docs_url: "https://docs.smooch.io/guide/web-messenger/",
            logo: ""
        },
        {
            id: "sunco-legacy",
            label: "SunCo Legacy",
            url: "sunco-legacy.html",
            description: "Sunshine Conversations makes it easy to add conversational capabilities to your product or     business. In these docs you’ll find everything you need to use the platform.",
            docs_url: "https://docs.smooch.io/guide/web-messenger/",
            logo: ""
        },
        {
            id: "support",
            label: "Support",
            url: "support.html",
            description: "You can embed the Web Widget in any website to provide your customers with Zendesk functionality such as ticketing, live chat, talk, and Help Center content.",
            docs_url: "https://developer.zendesk.com/embeddables/docs/widget/introduction",
            logo: ""
        }
    ]
  }
});