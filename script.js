var intId = "5f46e9a4bbf79d000c333448"

!function(o,p,s,e,c){
    var i,a,h,u=[],d=[];function t(){var t="You must provide a supported major version.";try{if(!c)throw new Error(t);var e,n="https://cdn.smooch.io/",r="smooch";if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var o=p.getElementsByTagName("script")[0],s=p.createElement("script");s.async=!0;var i=c.match(/([0-9]+)\.?([0-9]+)?\.?([0-9]+)?/),a=i&&i[1];if(i&&i[3])s.src=n+r+"."+c+".min.js";else{if(!(4<=a&&e["v"+a]))throw new Error(t);s.src=e["v"+a]}o.parentNode.insertBefore(s,o)}}catch(e){e.message===t&&console.error(e)}}o[s]={init:function(){i=arguments;var t={then:function(e){return d.push({type:"t",next:e}),t},catch:function(e){return d.push({type:"c",next:e}),t}};return t},on:function(){u.push(arguments)},render:function(){a=arguments},destroy:function(){h=arguments}},o.__onWebMessengerHostReady__=function(e){if(delete o.__onWebMessengerHostReady__,o[s]=e,i)for(var t=e.init.apply(e,i),n=0;n<d.length;n++){var r=d[n];t="t"===r.type?t.then(r.next):t.catch(r.next)}a&&e.render.apply(e,a),h&&e.destroy.apply(e,h);for(n=0;n<u.length;n++)e.on.apply(e,u[n])};var n=new XMLHttpRequest;n.addEventListener("load",t),n.open("GET","https://"+e+".webloader.smooch.io/",!0),n.responseType="json",n.send()
    }(window,document,"Smooch",intId,"5");


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
    integrationId: "5f46e9a4bbf79d000c333448",
    userId: "johndoe@example.com",
    jwtAuthn : "eyJraWQiOiJhcHBfNWY0NmU4ZDk0ZDlkODQwMDBjYWE4YzViIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE2MDUzMTAyOTIsInNjb3BlIjoiYXBwVXNlciIsInVzZXJJZCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.XdMdDE0P51MFUzDQh90YWue8lK84pbsKGPA0VHjM_Og",  
    isFixedIntro: true,
    isEmbedded: true,
    businessName: 'Zgroup Corporation',
    businessIconUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Purple127/v4/67/a4/5b/67a45b68-c821-842f-22f5-9fa83b605ce3/mzl.evidoiah.jpg/1200x630bb.jpg',
    buttonWidth: '90',
    buttonHeight: '90',
    soundNotificationEnabled: false,
    backgroundImageUrl: '', //'https://image.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg',
    menu: menuData,
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
    menuItems: {
      imageUpload: true,
      fileUpload: true,
      shareLocation: true
    },
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
      console.log(this.$data.integrationId)
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

  console.log(login)
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
    delegate: {
      // beforeDisplay(message) {
      //   if (message.role === 'business') {
      //     message.displayName = 'Operador W';
      //   }
      //   return message;
      // }
    },
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

  const url = "http://localhost:4567/sunco/jwt"
  
  fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})

}

//console.log(fetchApi());


feather.replace();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// This event triggers when the user sends a message
Smooch.on('message:sent', function (message, data) {
  console.log(`The user sent a message in conversation ${data.conversation.id}: `, message);
});

// data object
data = {
  conversation: {
      id: '<conversation-id>',
  },
};




// Customize typing indicator
Smooch.on('typing:start', function (data) {
  var iframe = document.querySelector('iframe');
  var iframeBody = iframe.contentDocument.body;
      var typingIndicator = iframeBody.getElementsByClassName('typing-indicator-container')[0];
      if (typingIndicator) {
          var nameChild = typingIndicator.querySelector('.from');
          if (nameChild) {
              nameChild.innerText = "Atendimento ZGroup";
          }
          var avatarChild = typingIndicator.querySelector('.typing-indicator-avatar');
          if (avatarChild) {
              avatarChild.src = "https://media.smooch.io/5f3d6e5b0796c6000c2cee50/icons/appicon.jpg";
              avatarChild.alt = "\'s avatar";
          }
      }
});



  var i = setInterval( function(){
    
     
          
  }, 1000);