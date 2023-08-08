(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._templateSelector=n,this._handleCardClick=o,this.openDeletePopup=r,this._id=e._id,this._ownerId=e.owner._id,this._myId=c,this.likeCard=i,this.dislikeCard=u}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".photo__image"),this._photoTitle=this._element.querySelector(".photo__title"),this.likesNumber=this._element.querySelector(".photo__like-numbers"),this._setEventListners(),this._cardImage.src=this._link,this._photoTitle.textContent=this._name,this._cardImage.alt=this._name,this.likesNumber.textContent=this._likes.length,this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"handleTrashBin",value:function(){this._ownerId!==this._myId&&this._deleteButton.classList.add("photo__delete_inactive")}},{key:"_checkLikes",value:function(){var t=this;this._likes.some((function(e){return e._id===t._myId}))?(this.dislikeCard(this.likesNumber,this._id,this.likeButton),this._likes=this._likes.filter((function(e){return e._id!==t._myId}))):(this.likeCard(this.likesNumber,this._id,this.likeButton),this._likes.push({_id:this._myId}))}},{key:"checkLikeColor",value:function(){var t=this;this._likes.some((function(e){return e._id===t._myId}))?this.likeButton.classList.add("photo__like_active"):this.likeButton.classList.remove("photo__like_active")}},{key:"_setEventListners",value:function(){var t=this;this.likeButton=this._element.querySelector(".photo__like"),this._deleteButton=this._element.querySelector(".photo__delete"),this.likeButton.addEventListener("click",(function(){t._checkLikes()})),this._deleteButton.addEventListener("click",(function(){t.openDeletePopup()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.validators=e,this.formEl=n,this.buttonEl=this.formEl.querySelector(this.validators.submitButtonSelector),this.inputList=Array.from(this.formEl.querySelectorAll(this.validators.inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this.formEl.querySelector(".".concat(t.id,"-error"));t.classList.add(this.validators.inputErrorClass),n.textContent=e,n.classList.add(this.validators.errorClass)}},{key:"_hideInputError",value:function(t){var e=this.formEl.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.validators.inputErrorClass),e.classList.remove(this.validators.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this.inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this.inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this.inputList)?(this.buttonEl.setAttribute("disabled",!0),this.buttonEl.classList.add(this.validators.inactiveButtonClass)):(this.buttonEl.removeAttribute("disabled"),this.buttonEl.classList.remove(this.validators.inactiveButtonClass))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===u(r)?r:String(r)),o)}var r}var a=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),f(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this.closeButton=this._popup.querySelector(".popup__button-close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.removeEventListener("click",this._handleOverlayClose),document.removeEventListener("keydown",this._handleEscClose),this.closeButton.removeEventListener("click",this.close)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._handleOverlayClose),document.addEventListener("keydown",this._handleEscClose),this.closeButton.addEventListener("click",(function(){t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===h(r)?r:String(r)),o)}var r}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},v.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(o);if(r){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).image=e._popup.querySelector(".popup__img"),e.title=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t,e){v(b(u.prototype),"open",this).call(this),this.image.src=e,this.title.textContent=t,this.title.textContent=t}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,C(o.key),o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function C(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}(this,t)});function u(t,e,n){var o,r,c,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=E(o=i.call(this,t)),a=function(t){t.preventDefault(),o.values=o._getInputValues(),o.handleForm(o.values)},(c=C(c="_setFormSubmit"))in r?Object.defineProperty(r,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[c]=a,o.handleForm=e,o._form=o._popup.querySelector(n),o}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){g(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._setFormSubmit)}},{key:"close",value:function(){g(j(u.prototype),"close",this).call(this),this._form.removeEventListener("submit",this._setFormSubmit),this._form.reset()}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===P(r)?r:String(r)),o)}var r}var I=function(){function t(e){var n=e.selectorUserName,o=e.selectorUserInfo,r=e.selectorUserAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(o),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==T(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===T(r)?r:String(r)),o)}var r}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var A,x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(o);if(r){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._confirmButton=o._popup.querySelector(e),o.handleCardDelete=n,o}return e=u,(n=[{key:"open",value:function(t,e){B(U(u.prototype),"open",this).call(this),this._card=t,this._cardId=e}},{key:"setEventListeners",value:function(){var t=this;B(U(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t.handleCardDelete(t._card,t._cardId)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y),N=document.querySelector(".profile__edit-button"),D=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.forms.formEdit),V=D.querySelector(".popup__input_user-info_name"),z=D.querySelector(".popup__input_user-info_job"),F=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar"),H=(document.querySelector(".photo__like-numbers"),document.querySelector(".profile__avatar-container")),M=document.querySelector(".profile__avatar"),G=document.querySelector(".profile__add-avatar"),K=document.querySelector(".popup__button-save_add_newplace"),Q=document.querySelector(".popup__button-save_update_user-info"),W=document.querySelector(".popup__button-save_popup_avatar"),X={};function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function Z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==Y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==Y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===Y(r)?r:String(r)),o)}var r}function $(t,e,n){n.textContent=e}var tt,et=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.baseUrl,this.token=e.headers.authorization}var e,n;return e=t,(n=[{key:"_isChecked",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"editUserInfo",value:function(t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then(this._isChecked)}},{key:"changeAvatar",value:function(t){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then(this._isChecked)}},{key:"postNewCard",value:function(t){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then(this._isChecked)}},{key:"addLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"deleteLike",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}},{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then(this._isChecked)}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-72",headers:{authorization:"2f3c4c0e-a26e-49e4-99f6-32f26b0c276a","Content-Type":"application/json"}});function nt(t){var e=new n(t,"#photo-template",it,(function(){ft.open(e,e._id)}),ot,rt,A),o=e.generateCard();return e.handleTrashBin(),e.checkLikeColor(),o}function ot(t,e,n){et.addLike(e).then((function(e){t.textContent=e.likes.length,n.classList.add("photo__like_active")})).catch((function(t){console.log(t)}))}function rt(t,e,n){et.deleteLike(e).then((function(e){t.textContent=e.likes.length,n.classList.remove("photo__like_active")})).catch((function(t){console.log(t)}))}function it(t,e){st.open(t,e)}N.addEventListener("click",(function(){at.open(),X.formEdit.resetValidation();var t=ut.getUserInfo();V.value=t.name,z.value=t.about})),F.addEventListener("click",(function(){ct.open(),X.formAdd.resetValidation()})),tt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(tt.formSelector)).forEach((function(t){var e=new i(tt,t),n=t.getAttribute("name");X[n]=e,e.enableValidation()}));var ut=new I({selectorUserName:".profile__name",selectorUserInfo:".profile__description",selectorUserAvatar:".profile__avatar"}),ct=new O(".popup_add_photo",(function(t){$(0,"Создание...",K),et.postNewCard(t).then((function(t){pt.addItem(nt(t))})).then((function(){ct.close()})).catch((function(t){console.log(t)})).finally((function(){$(0,"Создать",K)}))}),".popup__form_card_add"),at=new O(".popup_add_edit",(function(t){ut.setUserInfo(t),$(0,"Сохранение...",Q),et.editUserInfo(t).catch((function(t){console.log(t)})).then((function(){at.close()})).finally((function(){$(0,"Сохранить",Q)}))}),".popup__form"),lt=new O(".popup_avatar-change",(function(t){$(0,"Сохранение...",W),et.changeAvatar(t).then((function(t){ut.setUserAvatar(t)})).catch((function(t){console.log(t)})).then((function(){lt.close()})).finally((function(){$(0,"Сохранить",W)}))}),".popup__form_avatar_change"),st=new _(".popup_add_big-photo"),ft=new x(".popup_remove-card",".popup__button-save_popup_delete",(function(t,e){et.deleteCard(e).then((function(){t.deleteCard()})).then((function(){ft.close()})).catch((function(t){console.log(t)}))})),pt=new a({renderer:function(t){var e=nt(t);pt.addItem(e)}},".photo"),yt=[function(){et.getInitialCards().then((function(t){return t})).catch((function(t){console.log(t)}))},function(){et.getInitialCards().then((function(t){A=t._id})).catch((function(t){console.log(t)}))}];Promise.All(yt).then((function(t){pt.renderItems(t).catch((function(t){console.log(t)}))})),et.getUserInfo().then((function(t){ut.setUserInfo(t),ut.setUserAvatar(t)})).catch((function(t){console.log(t)})),J.addEventListener("click",(function(){lt.open(),X.formAvatar.resetValidation()})),H.addEventListener("mouseover",(function(){M.style.opacity="0.3",G.style.opacity="1"})),H.addEventListener("mouseout",(function(){M.style.opacity="1",G.style.opacity="0"}))})();