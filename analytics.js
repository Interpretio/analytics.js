!(function(window, undefined) {

 //Opt analytics cookie
 function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
  // Cookie 
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function myCookie (converter) {
    function api (key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        // We're using "expires" because "max-age" is not supported by IE
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        var stringifiedAttributes = '';

        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += '; ' + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += '=' + attributes[attributeName];
        }
        return (document.cookie = key + '=' + value + stringifiedAttributes);
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.withConverter = myCookie;

    return api;
  }
   
   //Create XHR 
   function Xhr() {

   }
   
  
  Xhr.prototype.post = function(url,data,callback){
    console.log('writeKey',oanalytics.xhr.writeKey)
      if(data && oanalytics.xhr && oanalytics.xhr.writeKey) data.apiKey = this.writeKey;
     //  console.log('data1',data)
     //  $.ajax({
     //    url: url,
     //    data: JSON.stringify(data),
     //    type: "POST",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
      var xhr = new XMLHttpRequest();
      var async = true;
      if(data.async === false) async = false;
      xhr.open('POST', url, async);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Accept','application/json')
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send(JSON.stringify(data));
    }
     Xhr.prototype.delete = function(url,callback){
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send();

     //  $.ajax({
     //    url: url,
     //    type: "DELETE",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }
    Xhr.prototype.put = function(url,data,callback){
      if(data && this.apiKey) data.apiKey = this.apiKey;

      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send(JSON.stringify(data));
     //  $.ajax({
     //    url: url,
     //    data: JSON.stringify(data),
     //    headers:this.headers,
     //    type: "PUT",
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }
    Xhr.prototype.get = function(url,callback){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send();
     //  $.ajax({
     //    url: url,
     //    type: "GET",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }

var noop = function(){};
function Validate(){

}

function Analytics ( options) {
  options = options || {}
  this.host = options.host || 'http://localhost:3001/';
  this.xhr = new Xhr();
  this.Cookies = myCookie(function(){});
  this.xhr.headers = {
    Accept:'application/json',
    'Content-Type':'application/json'
  }
  this.authorized = false;
  this.cookieinfo = {user:'oajs_user_id',anonymous:'oajs_anonymous_id'};
  var that = this;
  function checkCookieExist(){
    if(! that.Cookies.get(that.cookieinfo.anonymous)){
      that.anonymous({ip:window.location.host},function(err,anonymous){
        console.log('anonymous',anonymous)
        if(anonymous)  that.Cookies.set(that.cookieinfo['anonymous'],anonymous._id);
      })
      
    }
    if(!that.Cookies.get(that.cookieinfo['user']) && getParameterByName('email') && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getParameterByName('email'))){
       that.identify(getParameterByName('email'),{},function(err,data){
         if(data && typeof data == 'object') that.Cookies.set(that.cookieinfo['user'],getParameterByName('email'))
       })
    }
  }
  function setAtuhorize (){
    that.authorized = true;
    checkCookieExist();
  }
  this.makeAuthorize = function(){
    that.xhr.writeKey = that.writeKey;
    setAtuhorize();
  }
}
Analytics.prototype.load = function(apiKey,fn){
  this.writeKey = apiKey;

  this.xhr.post(this.host + 'oa/validate',{apiKey:apiKey,async:false},function(err,data){
    if(data && data.valid) this.makeAuthorize()

  }.bind(this));
  
  //Here load api to authticate
}
Analytics.prototype.identify = function (contactId,properties, fn) {
  var that = this;
  this.enqueue('identify', {contactId:contactId,properties:properties,anonymous:this.Cookies.get(this.cookieinfo.anonymous)},function(err,data){
    if(data && typeof data == 'object') that.Cookies.set(that.cookieinfo.user,data.contactId)
  })
  return this
}
Analytics.prototype.reset = function (fn) {
  var that = this;
  that.Cookies.remove(that.cookieinfo['user'])
  return this
}
Analytics.prototype.group = function (groupId , properties, fn) {
  // validate(message, 'group')
  if(that.Cookies.get(this.cookieinfo.user)){
    this.enqueue('group',{contactId :that.Cookies.get(this.cookieinfo.user),groupId:groupId,properties:properties},fn)
  }
  return this;
}
Analytics.prototype.page = function (name,data ,fn) {
  var message = {name:name,properties:data};
  var that = this;
  message.activity_type = 'page';
  if(that.Cookies.set('oajs_user_id')){
    message.contactId = that.Cookies.set('oajs_user_id')
  }else{
    message.anonymous = that.Cookies.set('oajs_anonymous_id')
  }
  this.enqueue('page', message, fn)
  return this
}
Analytics.prototype.anonymous = function(properties,callback){
   this.xhr.post(this.host + 'api/anonymous' ,properties,callback)
  
}
Analytics.prototype.track = function (name,properties, fn) {
  // validate(message, 'track')
  var that = this;
  var message = {name:name,properties:properties};
  message.activity_type = 'track';
  if(that.Cookies.set('oajs_user_id')){
    message.contactId = that.Cookies.set('oajs_user_id')
  }else{
    message.anonymous = that.Cookies.set('oajs_anonymous_id')
  }
  this.enqueue('track', message, fn)
  return this
}
Analytics.prototype.enqueue = function (type, message, fn) {
  fn = fn || noop;

  if(typeof message == 'object') message = JSON.parse(JSON.stringify(message))
  else message = {};
  message.activity_type = type
  message.context = {};
  console.log('message',message)
  message.context['library'] = {
    name: 'oa-javascript',
    version: '1.0.0'
  }

  message.metadata = {};
  message.metadata['nodeVersion'] = '1.0.0';
  if (!message.timestamp) message.timestamp = new Date()
  if (!message.messageId) message.messageId = 'node-1' 

 
  this.makeRequest(message,fn)
}
Analytics.prototype.makeRequest = function (message, callback) {
   var type = message.activity_type;
   var endpoint ;
   if(type == 'identify'){
     endpoint = 'oa/i';
   }else if('track'){
     endpoint = 'oa/activities';
   }else if(type == 'group'){
      endpoint = 'oa/g'
   }
   this.xhr.post(this.host + endpoint ,message,callback)
  
}
 if(typeof window.oanalytics == 'undefined'){
   window.oanalytics = new Analytics({host:'http://localhost:3001/'});
 }
})(window, undefined);
