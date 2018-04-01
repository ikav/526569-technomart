      /********************/
      /* Общие переменные */
      /********************/

      /* Для определения возможности храниения в localStorage */
      var isStorageSupport = true; 
      var storage = "";

      /***************** Конец общих переменных ******************/

      /*==========================*/
      /*=== Частные переменные ===*/
      /*==========================*/
      
      /* Форма "Напишите нам" */
      var writeUsLink = document.querySelector(".write-us");
      var writeUsPopup = document.querySelector(".modal-write-us");
      var formWriteUs = writeUsPopup.querySelector("form");
      var nameClient = writeUsPopup.querySelector("[name=write-us-name]");
      var emailClient = writeUsPopup.querySelector("[name=write-us-email]");
      var textClient = writeUsPopup.querySelector("[name=write-us-message]");
      var writeUsClose = writeUsPopup.querySelector(".modal-close");

      /* Карта */
      var mapLink = document.querySelector(".contacts-button-map");
      var mapPopup = document.querySelector(".modal-map");
      var mapClose = mapPopup.querySelector(".modal-close");

      /* Форма "Товар добавлен в корзину" (только для первого) */
      var cartLink = document.querySelector(".buy");
      var cartPopup = document.querySelector(".modal-product-in-cart");
      var cartClose = cartPopup.querySelector(".modal-close");
      var cartOrder = cartPopup.querySelector(".product-in-cart-order");
      var cartContinueBuying = cartPopup.querySelector(".product-in-cart-continue-buying");

      /*======= Конец определения частных переменных ========*/
      
      /*****************************/
      /******* Общие действия ******/
      /*****************************/
      /* Хранилище доступно? */
      try {
        storage = localStorage.getItem("nameClient");
      } catch (err) {
        isStorageSupport = false;
      }

      /***************** Конец общих действий **************/

      /*============================*/
      /*=== Форма "Напишите нам" ===*/
      /*============================*/
      writeUsLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.add("modal-show");
        nameClient.focus();

        if (storage) {
          nameClient.value = storage;
          emailClient.focus;
        }
        storage = localStorage.getItem("emailClient");
        if (storage) {
          emailClient.value = storage;
          textClient.focus; 
        }
      });

      /* Если не заполнили поля, не отправляем форму */
      formWriteUs.addEventListener("submit", function(evt) {
        if (!nameClient.value || !emailClient.value || !textClient.value) {
          evt.preventDefault();
          writeUsPopup.classList.remove("modal-error");
          writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
          writeUsPopup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
            localStorage.setItem("nameClient", nameClient.value);
            localStorage.setItem("emailClient", emailClient.value);
          }
        }
      });
      /* Закрытие по кнопке Х */
      writeUsClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-show");
        writeUsPopup.classList.remove("modal-error");
      });
      
      /* Закрытие по ESC */
      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (writeUsPopup.classList.contains("modal-show")) {
            writeUsPopup.classList.remove("modal-show");
            writeUsPopup.classList.remove("modal-error");
          }
        }
      });

      /*=============*/
      /*=== Карта ===*/
      /*=============*/
      mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
      });
      /* Закрытие по кнопке X */
      mapClose.addEventListener("click", function(evt){
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      });
      /* Закрытие по ESC*/
      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
          }
        }
      });

      /* Форма "Товар добавлен в корзину" */
      cartLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
      });
      /* Оформляем заказ (заглушка. только убираем окно) */
      cartOrder.addEventListener("click", function(evt) {
        /* При реализации функционала не забыть evt.preventDefault(); */
        cartPopup.classList.remove("modal-show");
      });
      /* Продолжаем покупки (заглушка. только убираем окно) */
      cartContinueBuying.addEventListener("click", function(evt) {        
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      });

      /* Закрытие по кнопке X */
      cartClose.addEventListener("click", function(evt){
        evt.preventDefault();
        cartPopup.classList.remove("modal-show");
      });
      /* Закрытие по ESC */
      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
          }
        }
      });
