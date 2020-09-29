//5f46e9a4bbf79d000c333448 AW
//5f19ad569fdd5c000cd87fbe LEg
var intId = "5f19ad569fdd5c000cd87fbe"

!function (e, n, t, r) {
  function o() { try { var e; if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) { var t = n.getElementsByTagName("script")[0], r = n.createElement("script"); r.async = !0, r.src = e.url, t.parentNode.insertBefore(r, t) } } catch (e) { } } var s, p, a, i = [], c = []; e[t] = { init: function () { s = arguments; var e = { then: function (n) { return c.push({ type: "t", next: n }), e }, catch: function (n) { return c.push({ type: "c", next: n }), e } }; return e }, on: function () { i.push(arguments) }, render: function () { p = arguments }, destroy: function () { a = arguments } }, e.__onWebMessengerHostReady__ = function (n) { if (delete e.__onWebMessengerHostReady__, e[t] = n, s) for (var r = n.init.apply(n, s), o = 0; o < c.length; o++) { var u = c[o]; r = "t" === u.type ? r.then(u.next) : r.catch(u.next) } p && n.render.apply(n, p), a && n.destroy.apply(n, a); for (o = 0; o < i.length; o++)n.on.apply(n, i[o]) }; var u = new XMLHttpRequest; u.addEventListener("load", o), u.open("GET", "https://" + r + ".webloader.smooch.io/", !0), u.responseType = "json", u.send()
}(window, document, "Smooch", intId);


Vue.component("zen-footer", {
  template:
    "<footer class='mastfoot mt-auto'> <div class='inner'> <p>My template for <a href='https://zendesk.com/'>Zendesk</a>.</p> </div> </footer>",
});

Vue.component("zen-navbar", {
  template:
    "<header class='masthead mb-auto'> <div class='inner'>  <a href='index.html'> <h3 class='masthead-brand'>{{brand}}</h3> </a>  <nav class='nav nav-masthead justify-content-center'> <a v-for='item in menu' :key='item.message' class='nav-link' v-bind:href='item.url'> {{ item.label }} </a> </nav> </div> </header>",
  props: ["menu", "brand"],
});

menuData = [
  {
    id: "sunco-Aw",
    label: "SunCo AW",
    url: "sunco-aw.html",
    description:
      "Sunshine Conversations makes it easy to add conversational capabilities to your product or business. ",
    docs_url: "https://docs.smooch.io/guide/web-messenger/",
    logo: "",
  },
  {
    id: "sunco-legacy",
    label: "SunCo Legacy",
    url: "sunco-legacy.html",
    description:
      "Sunshine Conversations makes it easy to add conversational capabilities to your product or business.",
    docs_url: "https://docs.smooch.io/guide/web-messenger/",
    logo: "",
  },
  {
    id: "support",
    label: "Support",
    url: "support.html",
    description:
      "You can embed the Web Widget in any website to provide your customers with Zendesk functionality",
    docs_url:
      "https://developer.zendesk.com/embeddables/docs/widget/introduction",
    logo: "",
  },
];

var app = new Vue({
  el: "#app",
  data: {
    brand: "Zendesk",
    integrationId: "5f19ad569fdd5c000cd87fbe",
    userId: "johndoe@example.com",
    jwtAuthn : "eyJraWQiOiJhcHBfNWY0NmU4ZDk0ZDlkODQwMDBjYWE4YzViIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTk4NDQ2MDksInNjb3BlIjoiYXBwVXNlciIsInVzZXJJZCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.AAcljsoyOLsJvFcZl2OUqyVb-zYS90cpwU--nZGmWaI",  
    isFixedIntro: true,
    isEmbedded: false,
    headerText: "ZGroup",
    menu: menuData,
  },
  methods: {
    changeUser: function () {
      smoochLogout();
    },
    updateWidget: function () {
      intId = this.integrationId
      smoochInit(intId, this.headerText, this.isFixedIntro, this.isEmbedded)
      
    },
  },
  beforeMount(){
    this.updateWidget();
    
 },
  updated(){
    //smoochLogin(this.userId, this.jwt)
  }
});

const smoochLogin = (userId, jwt) => {
  Smooch.login(
    "johndoe@example.com",
    "eyJraWQiOiJhcHBfNWY0NmU4ZDk0ZDlkODQwMDBjYWE4YzViIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTk4NDQ2MDksInNjb3BlIjoiYXBwVXNlciIsInVzZXJJZCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.AAcljsoyOLsJvFcZl2OUqyVb-zYS90cpwU--nZGmWaI"
  ).then(
    function () {
      console.log("Authentication OK");
    },
    function (err) {
      console.error("Authentication Failed");
    }
  );
};

const smoochLogout = () => {
  Smooch.logout().then(
    function () {
      console.log("Logout OK");
    },
    function (err) {
      console.log("Logout Failed");
    }
  );
};

function smoochInit(integrationId, headerText, isFixedIntro, isEmbedded) {

  Smooch.destroy();

  Smooch.init({
    integrationId: integrationId,
    fixedIntroPane: isFixedIntro,
    browserStorage: "sessionStorage",
    embedded: isEmbedded,
    customText: {
      headerText: headerText,
      inputPlaceholder: "Type a message...",
      sendButtonText: "Send",
    },
  });

  if(isEmbedded){
    Smooch.render(document.getElementById('chat-container'));
  }

}

