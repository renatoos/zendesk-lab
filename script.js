//5f46e9a4bbf79d000c333448 AW
//5f19ad569fdd5c000cd87fbe LEg
var intId = "5f19ad569fdd5c000cd87fbe"

!function (e, n, t, r) {
  function o() { try { var e; if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) { var t = n.getElementsByTagName("script")[0], r = n.createElement("script"); r.async = !0, r.src = e.url, t.parentNode.insertBefore(r, t) } } catch (e) { } } var s, p, a, i = [], c = []; e[t] = { init: function () { s = arguments; var e = { then: function (n) { return c.push({ type: "t", next: n }), e }, catch: function (n) { return c.push({ type: "c", next: n }), e } }; return e }, on: function () { i.push(arguments) }, render: function () { p = arguments }, destroy: function () { a = arguments } }, e.__onWebMessengerHostReady__ = function (n) { if (delete e.__onWebMessengerHostReady__, e[t] = n, s) for (var r = n.init.apply(n, s), o = 0; o < c.length; o++) { var u = c[o]; r = "t" === u.type ? r.then(u.next) : r.catch(u.next) } p && n.render.apply(n, p), a && n.destroy.apply(n, a); for (o = 0; o < i.length; o++)n.on.apply(n, i[o]) }; var u = new XMLHttpRequest; u.addEventListener("load", o), u.open("GET", "https://" + r + ".webloader.smooch.io/", !0), u.responseType = "json", u.send()
}(window, document, "Smooch", intId);


Vue.component("zen-footer", {
  template:
    "<div class='container navbar fixed-bottom'>© 2020 <div class='inner'> <p>My template for <a href='https://zendesk.com/'>Zendesk</a>.</p> </div></div>"
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
    authnOption: "anonymous",
    integrationId: "5f19ad569fdd5c000cd87fbe",
    userId: "johndoe@example.com",
    jwtAuthn : "eyJraWQiOiJhcHBfNWY0NmU4ZDk0ZDlkODQwMDBjYWE4YzViIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTk4NDQ2MDksInNjb3BlIjoiYXBwVXNlciIsInVzZXJJZCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.AAcljsoyOLsJvFcZl2OUqyVb-zYS90cpwU--nZGmWaI",  
    isFixedIntro: true,
    isEmbedded: true,
    customText: {
      headerText: "ZGroup",
      inputPlaceholder: "Type a messages...",
      sendButtonText: "Sender",
    },
    customColors: {
      brandColor: "#000000",
      conversationColor: "#b7b7b5",
      actionColor: "#191919"
    },
    businessName: 'Acme Corporation',
    businessIconUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Purple127/v4/67/a4/5b/67a45b68-c821-842f-22f5-9fa83b605ce3/mzl.evidoiah.jpg/1200x630bb.jpg',
    menuItems: {
      imageUpload: true,
      fileUpload: true,
      shareLocation: true
  },
    soundNotificationEnabled: false,
    backgroundImageUrl: '', //'https://image.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg',
    menu: menuData,
  },
  methods: {
    authenticateUser: function () {
        
        smoochLogin(this.userId, this.jwtAuthn);
        this.customText.headerText = this.userId;
        this.updateWidget();
  
    },
    logoutUser: function(){
      smoochLogout();
      this.updateWidget();
    },
    updateWidget: function () {
      smoochInit(this.$data);
    },
  },
  created(){
    this.updateWidget();
 }
  
});


function smoochLogin(userId, jwt){
  login = Smooch.login( userId, jwt ).then(
    function () {
      console.log("Authentication OK");
    },
    function (err) {
      console.error("Authentication Failed");
    }
  );
};

function smoochLogout(){
  logout = Smooch.logout().then(
    function () {
      console.log("Logout OK");
    },
    function (err) {
      console.error("Logout Failed");
    }
  );
};

function smoochInit(settings) {

  Smooch.destroy();

  Smooch.init({
    integrationId: settings.integrationId,
    fixedIntroPane: settings.isFixedIntro,
    //browserStorage: "sessionStorage",
    embedded: settings.isEmbedded,
    customText: settings.customText,
    customColors: 
        {
          brandColor: settings.customColors.brandColor.replace('#',''),
          conversationColor: settings.customColors.conversationColor.replace('#',''),
          actionColor: settings.customColors.actionColor.replace('#','')
        },
      businessName: settings.businessName,
      businessIconUrl : settings.businessIconUrl ,
      menuItems: settings.menuItems,
      soundNotificationEnabled: settings.soundNotificationEnabled,
      backgroundImageUrl: settings.backgroundImageUrl, 
  });

  if(settings.isEmbedded){
    Smooch.render(document.getElementById('chat-container'));
  }

}

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})



function fetchApi(){
  const url = "https://pokeapi.co/api/v2/pokemon/ditto"
  
  fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})

}

console.log(fetchApi());
