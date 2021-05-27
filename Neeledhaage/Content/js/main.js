// Home Page JS
 var theme = {
    breakpoints: {
      medium: 750,
      large: 990,
      widescreen: 1400
    },
    strings: {
      addToCart: "Add to cart",
      soldOut: "Sold out",
      unavailable: "Unavailable",
      regularPrice: "Regular price",
      salePrice: "Sale price",
      sale: "Sale",
      fromLowestPrice: "from [price]",
      vendor: "Vendor",
      showMore: "Show More",
      showLess: "Show Less",
      searchFor: "Search for",
      addressError: "Error looking up that address",
      addressNoResults: "No results for that address",
      addressQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
      authError: "There was a problem authenticating your Google Maps account.",
      newWindow: "Opens in a new window.",
      external: "Opens external website.",
      newWindowExternal: "Opens external website in a new window.",
      removeLabel: "Remove [product]",
      update: "Update",
      quantity: "Quantity",
      discountedTotal: "Discounted total",
      regularTotal: "Regular total",
      priceColumn: "See Price column for discount details.",
      quantityMinimumMessage: "Quantity must be 1 or more",
      cartError: "There was an error while updating your cart. Please try again.",
      removedItemMessage: "Removed \u003cspan class=\"cart__removed-product-details\"\u003e([quantity]) [link]\u003c\/span\u003e from your cart.",
      unitPrice: "Unit price",
      unitPriceSeparator: "per",
      oneCartCount: "1 item",
      otherCartCount: "[count] items",
      quantityLabel: "Quantity: [count]",
      products: "Products",
      loading: "Loading",
      number_of_results: "[result_number] of [results_count]",
      number_of_results_found: "[results_count] results found",
      one_result_found: "1 result found"
    },
    moneyFormat: "Rs. {{amount}}",
    moneyFormatWithCurrency: "Rs. {{amount}}",
    settings: {
      predictiveSearchEnabled: true,
      predictiveSearchShowPrice: true,
      predictiveSearchShowVendor: false
    } 
  }

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

// home page inline js
window.performance.mark('debut:theme_stylesheet_loaded.start');

    // function onLoadStylesheet() {
    //   performance.mark('debut:theme_stylesheet_loaded.end');
    //   performance.measure('debut:theme_stylesheet_loaded', 'debut:theme_stylesheet_loaded.start', 'debut:theme_stylesheet_loaded.end');

    //   var url = "//cdn.shopify.com/s/files/1/0551/8442/5114/t/1/assets/theme.css?v=13661997104517498723";
    //   var link = document.querySelector('link[href="' + url + '"]');
    //   link.loaded = true;
    //   link.dispatchEvent(new Event('load'));
    // }

    if (window.MSInputMethodContext && document.documentMode) {
        var scripts = document.getElementsByTagName('script')[0];
        var polyfill = document.createElement("script");
        polyfill.defer = true;
        polyfill.src = "//cdn.shopify.com/s/files/1/0551/8442/5114/t/1/assets/ie11CustomProperties.min.js?v=14620839920147293620";
  
        scripts.parentNode.insertBefore(polyfill, scripts);
      }

      window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');
      
      (function(){if ("sendBeacon" in navigator && "performance" in window) {var session_token = document.cookie.match(/_shopify_s=([^;]*)/);function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 55184425114,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token: session_token && session_token.length === 2 ? session_token[1] : "",page_type: "index"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());

      !function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);
      (function() {
        function asyncLoad() {
          var urls = ["\/\/www.powr.io\/powr.js?powr-token=shree-sanskriti-silver.myshopify.com\u0026external-type=shopify\u0026shop=shree-sanskriti-silver.myshopify.com","\/\/shopify.privy.com\/widget.js?shop=shree-sanskriti-silver.myshopify.com","\/\/cdn.secomapp.com\/promotionpopup\/cdn\/allshops\/shree-sanskriti-silver\/1619882738.js?shop=shree-sanskriti-silver.myshopify.com"];
          for (var i = 0; i < urls.length; i++) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = urls[i];
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
        };
        if(window.attachEvent) {
          window.attachEvent('onload', asyncLoad);
        } else {
          window.addEventListener('load', asyncLoad, false);
        }
      })();

      var __st={"a":55184425114,"offset":19800,"reqid":"2d185620-8729-4456-bbe0-6fa3977298a0","pageurl":"www.shreesanskritisilver.in\/","u":"c5100472614b","p":"home"};
      
      window.ShopifyPaypalV4VisibilityTracking = true;
      window.ShopifyAnalytics = window.ShopifyAnalytics || {};
      window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
      window.ShopifyAnalytics.meta.currency = 'INR';
      var meta = {"page":{"pageType":"home"},"page_view_event_id":"74cbe064c87cc3069fc19148dce347791b9623a5b2f72fa1d4c927f135097264","cart_event_id":"ca14a4536d0c8043fb891b1d164d12a3facf4187744138647f2bf6af344f829a"};
      for (var attr in meta) {
        window.ShopifyAnalytics.meta[attr] = meta[attr];
      }

      window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
  
    };
// analytics functions start here 

(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;
  
      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }
  
      if (jquery) {
        jquery('body').append(content);
      }
    };
  
    var hasLoggedConversion = function(token) {
      if (token) {
        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
      }
      return false;
    }
  
    var setCookieIfConversion = function(token) {
      if (token) {
        var twoMonthsFromNow = new Date(Date.now());
        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
  
        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
      }
    }
  
    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config;
      var first = document.getElementsByTagName('script')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = function(e) {
        var scriptFallback = document.createElement('script');
        scriptFallback.type = 'text/javascript';
        scriptFallback.onerror = function(error) {
                var Monorail = {
        produce: function produce(monorailDomain, schemaId, payload) {
          var currentMs = new Date().getTime();
          var event = {
            schema_id: schemaId,
            payload: payload,
            metadata: {
              event_created_at_ms: currentMs,
              event_sent_at_ms: currentMs
            }
          };
          return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
        },
        sendRequest: function sendRequest(endpointUrl, payload) {
          // Try the sendBeacon API
          if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
            var blobData = new window.Blob([payload], {
              type: 'text/plain'
            });
      
            if (window.navigator.sendBeacon(endpointUrl, blobData)) {
              return true;
            } // sendBeacon was not successful
      
          } // XHR beacon   
      
          var xhr = new XMLHttpRequest();
      
          try {
            xhr.open('POST', endpointUrl);
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.send(payload);
          } catch (e) {
            console.log(e);
          }
      
          return false;
        },
        isIos12: function isIos12() {
          return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
        }
      };
      Monorail.produce('monorail-edge.shopifysvc.com',
        'trekkie_storefront_load_errors/1.1',
        {shop_id: 55184425114,
        theme_id: 120607309978,
        app_name: "storefront",
        context_url: window.location.href,
        source_url: "https://cdn.shopify.com/s/trekkie.storefront.9308d80bdc62da15072a792f4c93dd268bf1a747.min.js"});
  
        };
        scriptFallback.async = true;
        scriptFallback.src = 'https://cdn.shopify.com/s/trekkie.storefront.9308d80bdc62da15072a792f4c93dd268bf1a747.min.js';
        first.parentNode.insertBefore(scriptFallback, first);
      };
      script.async = true;
      script.src = 'https://cdn.shopify.com/s/trekkie.storefront.9308d80bdc62da15072a792f4c93dd268bf1a747.min.js';
      first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":55184425114,"isMerchantRequest":null,"themeId":120607309978,"themeCityHash":"14577420004483383234","contentLanguage":"en","currency":"INR"},"isServerSideCookieWritingEnabled":true,"isPixelGateEnabled":true},"Performance":{"navigationTimingApiMeasurementsEnabled":true,"navigationTimingApiMeasurementsSampleRate":1},"Session Attribution":{}}
    );
  
    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;
  
      window.ShopifyAnalytics.lib = window.trekkie;
      
  
      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;
        (function () {
          if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
            return;
          }
          window.BOOMR = window.BOOMR || {};
          window.BOOMR.snippetStart = new Date().getTime();
          window.BOOMR.snippetExecuted = true;
          window.BOOMR.snippetVersion = 12;
          window.BOOMR.application = "storefront-renderer";
          window.BOOMR.themeName = "Debut";
          window.BOOMR.themeVersion = "17.12.0";
          window.BOOMR.shopId = 55184425114;
          window.BOOMR.themeId = 120607309978;
          window.BOOMR.url =
            "https://cdn.shopify.com/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
          var where = document.currentScript || document.getElementsByTagName("script")[0];
          var parentNode = where.parentNode;
          var promoted = false;
          var LOADER_TIMEOUT = 3000;
          function promote() {
            if (promoted) {
              return;
            }
            var script = document.createElement("script");
            script.id = "boomr-scr-as";
            script.src = window.BOOMR.url;
            script.async = true;
            parentNode.appendChild(script);
            promoted = true;
          }
          function iframeLoader(wasFallback) {
            promoted = true;
            var dom, bootstrap, iframe, iframeStyle;
            var doc = document;
            var win = window;
            window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
            bootstrap = function(parent, scriptId) {
              var script = doc.createElement("script");
              script.id = scriptId || "boomr-if-as";
              script.src = window.BOOMR.url;
              BOOMR_lstart = new Date().getTime();
              parent = parent || doc.body;
              parent.appendChild(script);
            };
            if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
              window.BOOMR.snippetMethod = "s";
              bootstrap(parentNode, "boomr-async");
              return;
            }
            iframe = document.createElement("IFRAME");
            iframe.src = "about:blank";
            iframe.title = "";
            iframe.role = "presentation";
            iframe.loading = "eager";
            iframeStyle = (iframe.frameElement || iframe).style;
            iframeStyle.width = 0;
            iframeStyle.height = 0;
            iframeStyle.border = 0;
            iframeStyle.display = "none";
            parentNode.appendChild(iframe);
            try {
              win = iframe.contentWindow;
              doc = win.document.open();
            } catch (e) {
              dom = document.domain;
              iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
              win = iframe.contentWindow;
              doc = win.document.open();
            }
            if (dom) {
              doc._boomrl = function() {
                this.domain = dom;
                bootstrap();
              };
              doc.write("<body onload='document._boomrl();'>");
            } else {
              win._boomrl = function() {
                bootstrap();
              };
              if (win.addEventListener) {
                win.addEventListener("load", win._boomrl, false);
              } else if (win.attachEvent) {
                win.attachEvent("onload", win._boomrl);
              }
            }
            doc.close();
          }
          var link = document.createElement("link");
          if (link.relList &&
            typeof link.relList.supports === "function" &&
            link.relList.supports("preload") &&
            ("as" in link)) {
            window.BOOMR.snippetMethod = "p";
            link.href = window.BOOMR.url;
            link.rel = "preload";
            link.as = "script";
            link.addEventListener("load", promote);
            link.addEventListener("error", function() {
              iframeLoader(true);
            });
            setTimeout(function() {
              if (!promoted) {
                iframeLoader(true);
              }
            }, LOADER_TIMEOUT);
            BOOMR_lstart = new Date().getTime();
            parentNode.appendChild(link);
          } else {
            iframeLoader(false);
          }
          function boomerangSaveLoadTime(e) {
            window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
          }
          if (window.addEventListener) {
            window.addEventListener("load", boomerangSaveLoadTime, false);
          } else if (window.attachEvent) {
            window.attachEvent("onload", boomerangSaveLoadTime);
          }
          if (document.addEventListener) {
            document.addEventListener("onBoomerangLoaded", function(e) {
              e.detail.BOOMR.init({
                producer_url: "https://monorail-edge.shopifysvc.com/v1/produce",
                ResourceTiming: {
                  enabled: true,
                  trackedResourceTypes: ["script", "img", "css"]
                },
              });
              e.detail.BOOMR.t_end = new Date().getTime();
            });
          } else if (document.attachEvent) {
            document.attachEvent("onpropertychange", function(e) {
              if (!e) e=event;
              if (e.propertyName === "onBoomerangLoaded") {
                e.detail.BOOMR.init({
                  producer_url: "https://monorail-edge.shopifysvc.com/v1/produce",
                  ResourceTiming: {
                    enabled: true,
                    trackedResourceTypes: ["script", "img", "css"]
                  },
                });
                e.detail.BOOMR.t_end = new Date().getTime();
              }
            });
          }
        })();
      
  
      
          window.ShopifyAnalytics.lib.page(
            null,
            {"pageType":"home"},
            "74cbe064c87cc3069fc19148dce347791b9623a5b2f72fa1d4c927f135097264"
          );
        
  
      var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
      var token = match? match[1]: undefined;
      if (!hasLoggedConversion(token)) {
        setCookieIfConversion(token);
        
      }
    });
  
    
        var eventsListenerScript = document.createElement('script');
        eventsListenerScript.async = true;
        eventsListenerScript.src = "//cdn.shopify.com/shopifycloud/shopify/assets/shop_events_listener-714e2e017903fad17d4471cb27d1f2c8a83b5a7a276f92420f7e5e40dbc9136e.js";
        document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
      
  })();
    // analytics functions ends here 
    window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

      // Home Page JS Ends here 