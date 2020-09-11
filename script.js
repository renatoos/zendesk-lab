Vue.component("zen-footer", {
  template:
    "<footer class='mastfoot mt-auto'> <div class='inner'> <p>Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a>, by <a href='https://twitter.com/mdo'>@mdo</a>.</p> </div> </footer>",
});

Vue.component("zen-navbar", {
  template:
    "<header class='masthead mb-auto'> <div class='inner'>  <a href='index.html'> <h3 class='masthead-brand'>{{brand}}</h3> </a>  <nav class='nav nav-masthead justify-content-center'> <a v-for='item in menu' :key='item.message' class='nav-link' v-bind:href='item.url'> {{ item.label }} </a> </nav> </div> </header>",
  props: ["menu", "brand"],
});

var app = new Vue({
  el: "#app",
  data: {
    brand: "Zendesk",
    menu: [
      {
        id: "sunco-Aw",
        label: "SunCo AW",
        url: "sunco-aw.html",
        description:
          "Sunshine Conversations makes it easy to add conversational capabilities to your product or business. In these docs you’ll find everything you need to use the platform.",
        docs_url: "https://docs.smooch.io/guide/web-messenger/",
        logo: "",
      },
      {
        id: "sunco-legacy",
        label: "SunCo Legacy",
        url: "sunco-legacy.html",
        description:
          "Sunshine Conversations makes it easy to add conversational capabilities to your product or     business. In these docs you’ll find everything you need to use the platform.",
        docs_url: "https://docs.smooch.io/guide/web-messenger/",
        logo: "",
      },
      {
        id: "support",
        label: "Support",
        url: "support.html",
        description:
          "You can embed the Web Widget in any website to provide your customers with Zendesk functionality such as ticketing, live chat, talk, and Help Center content.",
        docs_url:
          "https://developer.zendesk.com/embeddables/docs/widget/introduction",
        logo: "",
      },
    ],
  },
});

const smoochLogin = () => {
  Smooch.login(
    "johndoe@example.com",
    "eyJraWQiOiJhcHBfNWY0NmU4ZDk0ZDlkODQwMDBjYWE4YzViIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTk4NDQ2MDksInNjb3BlIjoiYXBwVXNlciIsInVzZXJJZCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.AAcljsoyOLsJvFcZl2OUqyVb-zYS90cpwU--nZGmWaI"
  ).then(
    function () {
      console.log("Authentication Good");
    },
    function (err) {
      console.error("Authentication Bad");
    }
  );
};