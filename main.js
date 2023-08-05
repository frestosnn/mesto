(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._templateSelector=n,this._handleCardClick=r,this.openDeletePopup=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".photo__image"),this._photoTitle=this._element.querySelector(".photo__title"),this._likesNumber=this._element.querySelector(".photo__like-numbers"),this._setEventListners(),this._cardImage.src=this._link,this._photoTitle.textContent=this._name,this._cardImage.alt=this._name,this._likesNumber.textContent=this._likes.length,this._element}},{key:"_handlePhotoLike",value:function(){this._likeButton.classList.toggle("active")}},{key:"_setEventListners",value:function(){var t=this;this._likeButton=this._element.querySelector(".photo__like"),this._deleteButton=this._element.querySelector(".photo__delete");var e=0;this._likeButton.addEventListener("click",(function(){e+=1,t._likesNumber.textContent=t._likes.length+e,2===e&&(e-=2,t._likesNumber.textContent=t._likes.length-e),t._handlePhotoLike()})),this._deleteButton.addEventListener("click",(function(){t.openDeletePopup()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.validators=e,this.formEl=n,this.buttonEl=this.formEl.querySelector(this.validators.submitButtonSelector),this.inputList=Array.from(this.formEl.querySelectorAll(this.validators.inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this.formEl.querySelector(".".concat(t.id,"-error"));t.classList.add(this.validators.inputErrorClass),n.textContent=e,n.classList.add(this.validators.errorClass)}},{key:"_hideInputError",value:function(t){var e=this.formEl.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.validators.inputErrorClass),e.classList.remove(this.validators.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this.inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this.inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this.inputList)?(this.buttonEl.setAttribute("disabled",!0),this.buttonEl.classList.add(this.validators.inactiveButtonClass)):(this.buttonEl.removeAttribute("disabled"),this.buttonEl.classList.remove(this.validators.inactiveButtonClass))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close(n._popup)})),f(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&n.close(n._popup)})),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.removeEventListener("click",this._handleOverlayClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._handleOverlayClose),document.addEventListener("keydown",this._handleEscClose),this.closeButtons=Array.from(document.querySelectorAll(".popup__button-close")),this.closeButtons.forEach((function(e){e.addEventListener("click",(function(){t.close(t._popup)}))}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).image=e._popup.querySelector(".popup__img"),e.title=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t,e){m(d(u.prototype),"open",this).call(this),this.image.src=e,this.title.textContent=t,this.title.textContent=t}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,O(r.key),r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function O(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}(this,t)});function u(t,e,n){var r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=E(r=i.call(this,t)),c=function(t){t.preventDefault(),r.values=r._getInputValues(),r.handleForm(r.values)},(a=O(a="_setFormSubmit"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r.handleForm=e,r._form=r._popup.querySelector(n),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){k(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._setFormSubmit)}},{key:"close",value:function(){k(j(u.prototype),"close",this).call(this),this._form.removeEventListener("submit",this._setFormSubmit),this._form.reset()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.selectorUserName,r=e.selectorUserInfo,o=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).handleSubmit=e,n._confirmButton=document.querySelector(".popup__button-save_popup_delete"),n}return e=u,(n=[{key:"setEventListners",value:function(){var t=this;this._confirmButton.addEventListener("click",(function(e){e.preventDefault(),t.handleSubmit()}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y),A=document.querySelector(".profile__edit-button"),x=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.forms.formEdit),N=x.querySelector(".popup__input_user-info_name"),V=x.querySelector(".popup__input_user-info_job"),D=document.querySelector(".profile__add-button"),z=document.querySelector(".profile__avatar"),F=(document.querySelector(".photo__like-numbers"),{});function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M,G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.baseUrl,this.token=e.headers.authorization}var e,n;return e=t,(n=[{key:"_isChecked",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"editUserInfo",value:function(t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then(this._isChecked)}},{key:"changeAvatar",value:function(t){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then(this._isChecked)}},{key:"postNewCard",value:function(t){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then(this._isChecked)}},{key:"addLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"deleteLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){var e=new n(t,"#photo-template",Q,et).generateCard();return nt(e),e}function Q(t,e){$.open(t,e)}A.addEventListener("click",(function(){Y.open(),F.formEdit.resetValidation();var t=W.getUserInfo();N.value=t.name,V.value=t.about})),D.addEventListener("click",(function(){X.open(),F.formAdd.resetValidation()})),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(M.formSelector)).forEach((function(t){var e=new i(M,t),n=t.getAttribute("name");F[n]=e,e.enableValidation()}));var W=new T({selectorUserName:".profile__name",selectorUserInfo:".profile__description",selectorUserAvatar:".profile__avatar"}),X=new P(".popup_add_photo",(function(t){var e=K(t);ot.addItem(e),X.close(),rt.postNewCard(t).catch((function(t){console.log(t)}))}),".popup__form_card_add"),Y=new P(".popup_add_edit",(function(t){W.setUserInfo(t),Y.close(),rt.editUserInfo(t).catch((function(t){console.log(t)}))}),".popup__form"),Z=new P(".popup_avatar-change",(function(t){Z.close(),rt.changeAvatar(t).catch((function(t){console.log(t)}))}),".popup__form_avatar_change"),$=new _(".popup_add_big-photo"),tt=new U(".popup_remove-card",nt);function et(){tt.open()}function nt(t){t.remove()}var rt=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-72",headers:{authorization:"2f3c4c0e-a26e-49e4-99f6-32f26b0c276a","Content-Type":"application/json"}}),ot=new c({renderer:function(t){var e=K(t);ot.addItem(e)}},".photo");rt.getInitialCards().then((function(t){ot.renderItems(t)})).catch((function(t){console.log(t)})),rt.getUserInfo().then((function(t){W.setUserInfo(t),W.setUserAvatar(t)})).catch((function(t){console.log(t)})),z.addEventListener("click",(function(){Z.open()})),it.forEach((function(t){rt.addLike(t).catch((function(t){console.log(t)})),rt.deleteLike(t).catch((function(t){console.log(t)}))}));var it=rt.getInitialCards().then((function(t){return t.map((function(t){return t._id}))})).catch((function(t){console.log(t)}))})();