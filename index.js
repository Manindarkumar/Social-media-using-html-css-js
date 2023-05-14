//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGE
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");


const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
var root = document.querySelector(":root");

//====================SIDEBR======================
//REMOVE ACTIVE CLASS FORM ALL MENU ITEMS
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//=================================MESSAGE=================

//SEARCH CHAT
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);
//HIGHLIGHT MRESSAGE CARD WHEN MESSAGE MENU ITEM IS CLICKED

messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//THEME/DISLAY CUSTOMIZATION
//opens model
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//close model

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// =========================== FONT ========================

//REMOVE ACTIVE CLASS FROMS SPANS OR FONT SIZZE SELECTORS
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    let fontSize;
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-10rem");
      root.style.setProperty("--sticky-top-right", "-33rem");
    }
    // CHANGE FONT SIZE OF THE ROOT HTML ELEMENYT
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// !CHANGE PRIMARY COLORS
const removeColorSelector = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};




colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    removeColorSelector();
    color.classList.toggle("active");

    color.addEventListener('click', () => {
      let primaryHue;
      if (color.classList.contains('color-1')) {
        primaryHue = 252;
      }
      else if (color.classList.contains('color-2')) {
        primaryHue = 52;
      } else if (color.classList.contains('color-3')) {
        primaryHue = 352;
      } else if (color.classList.contains('color-4')) {
        primaryHue = 152;
      } else if (color.classList.contains('color-5')) {
        primaryHue = 202;
      }

      root.style.setProperty('--primary-color-hue', primaryHue);
    })
  })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
  darkColorLightness = '17%'
  whiteColorLightness = '100%'
  lightColorLightness = '95%'


  Bg1.classList.add('active');

  Bg2.classList.remove('active')
  Bg3.classList.remove('active')
  changeBG();
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '20%'
  lightColorLightness = '15%'

  Bg2.classList.add('active');

  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBG();
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '10%'
  lightColorLightness = '0%'

  Bg3.classList.add('active');

  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBG();
})