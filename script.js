
    var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    brand: "Zendesk Brand",
    menu: [
        {
            label: "SunCo ",
            url: "sunco.html",
            description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula",
            docs_url: "",
            logo: "https://docs.smooch.io/guide/web-messenger/"
        },
        {
            label: "SunCo Legacy",
            url: "sunco-legacy.html",
            description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula",
            docs_url: "",
            logo: "https://docs.smooch.io/guide/web-messenger/"
        },
        {
            label: "Support",
            url: "support.html",
            description: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula",
            docs_url: "",
            logo: "https://developer.zendesk.com/embeddables/docs/widget/introduction"
        }
    ]
  }
});