// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"InstagramPost.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramPost =
/*#__PURE__*/
function () {
  function InstagramPost() {
    _classCallCheck(this, InstagramPost);

    this.imgurl = "";
    this.username = "";
    this.likes = 0;
    this.hashtags = [];
    console.log("InstagramPost");
  }

  _createClass(InstagramPost, [{
    key: "hasTag",
    value: function hasTag(tag) {
      for (var i = 0; i < this.hashtags.length; i++) {
        if (this.hashtags[i] == tag) {
          return true;
        }
      }

      return false;
    }
  }]);

  return InstagramPost;
}();

exports.default = InstagramPost;
},{}],"InstagramModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InstagramPost = _interopRequireDefault(require("./InstagramPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramModel =
/*#__PURE__*/
function () {
  function InstagramModel() {
    _classCallCheck(this, InstagramModel);

    var p1 = new _InstagramPost.default();
    p1.imgurl = "https://previews.123rf.com/images/candicedawn/candicedawn1401/candicedawn140100087/25202522-immage-of-a-red-zinnia-being-held.jpg";
    p1.hashtags = ["#sport", "#fun"];
    p1.username = "Joshua";
    var p2 = new _InstagramPost.default();
    p2.imgurl = "https://images-cdn.9gag.com/photo/amB5pGv_460s.jpg";
    p2.hashtags = ["#fun", "#nofilter"];
    p2.username = "Marsil";
    var p3 = new _InstagramPost.default();
    p3.imgurl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRIXFxUVFhIVEhAPEBIVFRIWFhUVFRUYHSggGBolGxUVITEhJSkrMC4uFyAzODMtNyguLisBCgoKDg0OFxAQGCsdFR0tLSsrLS0rLS0tKys3LS0rKy4rKy83KysrLS0tLS0rLS0tNysrKy0tKyswNzctKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABPEAACAQMDAQQGBQYICgsAAAABAgMABBEFEiExBhNBUQcUIjJhcRUjgZGxJEJSkqHRFjM0Q3N0gsE1RlRicoWTsrPENkRTg4SUoqO0wvD/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJhEAAgIBAwMEAwEAAAAAAAAAAAECEQMEElIUITEFE0GhFTJRQv/aAAwDAQACEQMRAD8APpUqVfGH2wqVKlQAzTre7ue8Nta94kchiLmaKLLqqscKece0KDTUt0McixktI0aLHlQd8kgjVS3QDcetbn0T/wARdf1yX/hQ151pv8RZ/wBatf8A5yV7WTR4lHE0v2as8THrMrllTf6p0aT6B1P/ACIf+agqrhN29q14LT8nRZXZu/hDBYS4k9nr+Y3zr0Tt7DqDRxfR7lCHYykNCrGPu2wAZVYe9jwrN9nZN3ZaVuTmzvzk4ycm4POPGuv8fp+P2zj/ACWo5fRR3iXcMC3M1rsgPde2J4nIEzKqkqOerip9Msb26TvLW1DQn3ZZphbLKP0o12sxXyYgA+GauvSd/wBHW/orT/iRVZdvLo22lxtG5iCPZDcrGPanfxBhkfm7cgjyo/HYLvb9h+S1FVf0YbUbma3kWCe3aO4dkWKPejRzl5FjBjl6EBnXOcEZHFT6jBewPDHJZnfO/dRBZ4Xy+3cdx/NAUE5+FWXpE1+yu5NMFvcwzSJqNsSsbq7KhbBJx0GQg+0V6LfaYJZ7eVv5gysv+m6d2D+qz/fQvTsH8+xv1LUf36PKJob1bhLU2g7+RHlVPWYT7CEBiT4cnjz58qZtvPW/UvVPynuu/wBvfw7O637M7+md3hVppF4bjtG02fZVLm2jH+Zb90G/915v2Vb/AOM/+rP+boXp+nf+ftifqOpXmX0jKWvrclzLaJaH1iFVaRGmiVQr4KFX6NnNR2F1NPI0ENuz3KPIkkQdAkXdSGNmklPAXcDjqTg4BxXqyaQF1A3Sj+MtxE5+McoZPvDt+qKyPomjHrOstjk6hMM+OBI5H+8aH6dg/n2Nep6j+/RSanY3tqhlurULCPelhmFyIh+lIu1WCjxIBx1PFD3dyVC7V3s7xxooZV3NK4VfaPAGT1q70/tgY4bqG4tNQnzPegSLay3EBiaeQKquTgoF4x0GMVk9HJMOnZOT31hz1/nY65dTosUcmOlSbpo6tNrssseTc+6VplteQ3MEkaXNv3Xe79jCaOUEoASCF6cGnaZZ3l0veWtsHhyQs0swt0kwcExAKzMuQfaIAPhmrj0yuV9WI6hLwj/YCrLtDI1vosHcu0ZUacgZGKMF7+3UjI8CuQfME1vH0/D7j7dv4YS9Rz+2u/dt9zF3klzFcRWklqy3UpIjTvEMMgClmZJunGMYIB5HHNOvhdwzwW0loRNcb+5UTwsrd2Nz7m/NwK13pVuRC2mTdCuowKW8QjpIJB9o/CrjX9P36hp0uP4profLfb8f7tX+O0/H7M/yWo/v0YCWyvlmS3NmO9kSSRV9ZhxsiKByT4cyL+2lqlne20RmntNsSlAzC4hcrvdUB2jrywrV3F5u7RRReCafI32yXCgj7kH31T+lKG+7xmZ2+jGNshRGgBMhmA9oMpcjf3fQjoaUtBgUW9v2VD1HUOSW76K6lSpV82fSipUqVACpUqVAFRHfyeY+4UbFOT1qrh4NHQV9X0uHij5Tqc3Jkd5qRT5fKr/s6sdwuSDn4Eiqa5shIpFWHY+IxnB6VS0uHijOeqz82bD0bRBEvVHQX0oHj/MwVirLTkGn2cuDu9Zs+cnHOoIOlay30SeNpWt76SFJZDM0fc20oDsqq2GdScewOKX8Gl9TjtFmde7MTrNhC++KUSqxUjafaHTFavHF128eDD3ZLw/PkM7cvK0tlBHPJAs8sqSPF3YcqlrLIAN6sOqDwqm7OWbfwcmgjVmdYNRgVAN0jOslwgXA6sTjj41HrReGSGe5vnmMJd44zFbRLueJoiSUUE+y54rEv2wuYJ5JLKXu1lbdJEyCWBnxgyBTgqxAGdpGccir2sncjcelQFOzzKww3d2q7Tw27vIsrjz4P3VY9urRrrSoliRpRI9kdse4koZoizAryBtyc+A5ryPX+0V3esvrU29UOUiRBFCGxjeVGSzYzyScZ4ojQ+1+oWcYiguAYRwkcsQmEY8kbIYDnoSQMcYo2sdmt7d9lrKxl0w20bJJJqFspzcXMu6NXyw2yOR72w5x5V6Zf6kI7i3iJ4n71R8XSPvB/wClXr541TVLq5mS4nnZ542V4m2oscJSQSARx42gZUZzknAyTRt92p1CaSGSS6y8DmSIiGBdrFSpyAvI2kjB86W1js3lvYNB2mwB9VLby3K8cb3EccgB+cIb+18asP8AGf8A1Z/zdebS9qr9547hrr66JZERu4g4WXbvBG3B9xaibtDfeteu+tflHddxv7mDHdb9+3bjGd3jRQWe7aFq3fSXcRPtW8/dnz2tEkin5e2R/ZrIeiaQes6yufaGozkjxwZHAP7DXnWn9oL2Cea4S7YSXBQzHuoGVig2oQpXC4GelbPsxYBl7+2unjvC0ryzbI2WbvpDIySw8BlDMSMEEZOCM0UJs2HZMTi1uVnVlK3F6Iwyd2TF3zlCOBkHJIPiKwdjp6Lp+mSAHcZdMzyce1NFnj7a1LWGoMSz6mwZl2lI7W3WELzghH3ENycnd+Apk3Z5fVYbVJXTuO4McuEZw1uysjEEbTyo4xUSinVrwNZHHw/Pk76V9KnmSJooGmVEug4R4oyneQhVY72GRkHgZPFS9oI2udFg7hGkLjTnCopZivf27E4HOAMk+QB8qZPZ3zqytqUm1gVP5NZjgjB/MoTS9GurKNYbK+ZYlAAjuIUu1Uge0UIKMuTzjJAJOAKfYW74I/TrGXtbdFP1nfSSoB72YLK4kyPkQv31v7NlmSGbzQOv/eIP7jWEOlsXaa5na4nKGMMyrHHEje8sUa8LnjJOScDJ4ofTY72FI4Y9QkEaKqIDb2rsFUYUFiuTwOtJzS8jXcWlyb+007/owSQ/D6tLR/xmP3Uz0kw3ffySSrcNpiLbyYiktViDxyFmMiue8OGEZ9nyNNTQpIpfWI7yRbktMzzd1A3ed/3W4FCu0Y7lMY8qWpxXlxG0M1+7RONrqLe1QsuQSNwXI6VHuRaotRflEpsV+P31GbNfj99HEimO4HWuD2MfFHU9Tl5MBNsP/wAaheHFGsQaiNHsY+JPVZuTBe6rtTYpUvYx8ULqs3JmYhPNFx0Hb9aOQ16pjYZA2Ks9NIDAnzqpjPNGwzbaLBqzfwEMM/CqztJrKWsJYn2umPGn6TeZXPwzXknbTWmuJ2H5qnaBVxOeS7gWt6u9y+5ungM1VZ5rq0kHWrGkP3ZrrdK5s++u4oKHKac1NArpoAkFcaunpmm4qQHZ4q47O6wYJQc+yTg/KqjbxTGHl1pCfc94tZ1dAynIIzSJrIej7WN6GI+8BitbtxWciDpruKaaTGoACvDzQRfFE3EnWs3qep4zUSVmsWWN7qAHWqm51oCqC8v2aqyaU+dOOIveXj9oDmhpdfbPFUZpVXtIW4vo9fNWNlq281jyKntpyhGKl4xWbzvhSrOfSR86VRsHZIgqaI9KZC1SZrpGFRGiFNBxSVPvpFInvdUaGJyD4YH215uZCzFj481sO0TfVfbWRJ+FaQM5DEp7CuYpDrV2SPU11BSrsfWiwO4pwWu/Ku4qbBDSeMZqRVrscRJ4FFi1I5qWyqB1X4U3ac9KLKYpjjiluChaLfmCZWX9LmvZ4Zt6Kw6ECvDinlXpfYTUjJAQx5Xipk7JcTUYrrEYqG3ulb2Qc4qSTxrOydpRarLtU15/e3BdzzWz7SzYRq8973nPnTiVQXs4oC4FGRyHpUVwlbDAitKpQlNK8UrA4lckNIVHI1KhMXfGlUW6lRtGaSCfNFRtWZs73GKvbecdRTopBwNTCQUGr1IGqGy0QdoGzF1rKE1qNXh3pgVlmjxxWsDOZIvSuEV2KustUScX50+uL8qIt7fcaTAbEpqwtrLPJou2ss1ZwW+KzbLUQKG0xXXiqyeLAqB4qzbLSATBmoZLaiZ5NtKN80rADFifCi9NvTAsidCwqwt480r6wBw2KTkCiM0/UHSRDnjPNeh7tygjxAry6O7G7b8a9Lsn+qU+GBUsiSMt2sGFb5Vgo1re9qjkNWGgTmtIEhKR02YUWgFRXK8VqBXhsVxulKX5UkJpAQkVG4qdkNPjsmbpRdBQJ3fxpUZ9GtXaW8raUimjbO7I8aGC5qdLetqIsuob4GjY5azTAjmpLS8fOPOpcSlM0xbdxms7qUGxsnoauow68kHBpl/AHTPj+FSnRTpmfX4U4CkwxxSL1dkEiDwzR9nxQEIB+dHWxqZMEXls1H+HxqstDVmqkjisJM2SHOeOaglcCiF+NQTx8ZNRZVFJfvg4qaDT5GG7oKZax95JuPQGrqe64wvSr+CBWibPeOatBHuWqBbvkDPOa0MQ4+ysZM0iZy4sAH4POa3OkE9yBWQ1KMhxitToDMY8noKd9iJIz3aeXGRWRSTB+2tD2skO81mYjzW2MyfgP31x24qJXpM9aNkoEmbmuA1PFaMx6VOmkv4ip3FKIJA4JxWo0q3UjFUv0Qw5q30oMvFRORpFFx9HpSpd81KsLNKPM7ccUQKiQ4pxr0jlI53onREBlGR4j8aGfGRVj2fX60fMfjSYj1210KN4gceFU992TIyV8fCtfpJ+rX5UUeazJTPCe0eiSQNlgcedUWPGvf8AX7KGWJlk2jIxnyrxLW9MFvJtDB0POR0FOykwGJiKMiY9agXn+6phnoKTKDIrwirO21leAeKi0nTVPLGjLvT4/hWTRrYdHdIw4PNRXcmRiqZl2n2DRtnPu4PWoopOwXdsDEUJbX+W9rNXZgByKhi0rPTinYmmMtYg8gZQcVqlGBj4UDptqEFGTy1lNmkIgoUFwG6ZrUyIFjAAwMVjppgDmtLZ3O+JTU32JydjI9o7fcxIrJyR7TXpGo227OKx99prbjxxVwyE1aALCIu2PCtEmiDbmgNHtyD8q1qNxiqnksccZV6dpwDc1ZtAuelMLgGonnJrLczZYzt1GMUNBb+NSv0pu84pbivbJdg86VC97SpD2Hn6DinCuRninV6p5xxos1Zdn4vrR8x+NV+6rTQW+sX5j8aTA9p00ewo+FFYofTVxGp+FFEVBmzJekG2cwZTPs8nrzXk0j7+uf7q+g5oVdShGQRg5rzbtX2NMeXhGR1IpeComKtkGMH7KnC4NQxxlc+GOoomCYGkzZHRckeOBSm1Ie6QTU3qIc4qW30RyelZspIjkRCAUyD40ZaRZHNGw6Xt96hZT7W0cfCpuylGgu2J8qdMsmfZp9jKFHPFTzXWT7NZs0+ABNRZDhqK9YDc5p95aq6ZPWsy0hjbGaKFuosryTJq+0W+HdbfEVlZJc4+NH2UpVto8qTicufIareGHHFVt3GfLihxOemaJS4wQCeKnaY49TT7gqYHhipw5ouSEOM45qvZWDYxxUuz08OaMiQtTWbikV8aif50jrSTHCTNNauAjFc3U0Zvyc4pUzIpUwMAktSbqGjOamFen8HlEoPhVho7YdfmPxqsDc0TbPgj50Ae2aZqA7sZPhRI1IedYOwuH2DyxRUc7ZGazZNGzGpipPXlYYIyD4VjzuzwePOnJO2eDWcpBaSBu2ejRLmROviorDPCVOQpx+Fb+4bd73NV89sGBGKncZ+93KG2n6Y5NXllcjjnmqS8tGj9penlWo7K6WlxbswPtilLudGPKmdaUHx5qglQ96alaYoxU9QSD9lD3BOd4pRibuSJmiJPXirCJUQZzWee/YdOtTQyGRfewfKjaJSD77U8L7PIrPOryHJ+yrG4YKOlH2lruQPj506oXkqY3JIU9RRVxMEmXHiK7fQjO5elQ6gmdrUVZx52WHee144ouR+lV8LZx8qfG2WqGjiaovIJ6IJDVURMM0Us1Q0a48riOlhxnFCE0eCcdahliqD0sGq+AJqR6U4eNMJoR6G6+5ylXa5TCzzeF6mQ0MtTItekeUGRipYeoodCPOpVYZpsD0DT5RsWihKprN2DNtAGTWisbYAe1WUmROe0JU8fOuba5LMAcDpQtxdeHhWTOWU7HzNjiod/NItmuN0qTFs46g5z0o/slmCbYp9h+SKAQ8c1JbTlWDDrQ32NITpgXbS0MdwWHCvz++qUXIPyr0PtHYi4gVgMkDr+NedXVkVOB0p4+52KfY7CV3cmtLpujRNGWDe15VmhbSDoMipoJZY/PFbvGylkL1dJQHLt/Zpl/chThOBjGPOqa51psHIwfPxoK31EvIpY8Z8ahxZpvVFzPARFuPUngVy6hzCD5VYdpGBWPb0P3UNJFlMeQqH2OHLLuV1u/sVJaPnmmIowRXLdsLij4Mn3LGI55qRpcUJHMAOtQ28u4knpWbRNF3aOakZuSaEWUAZPSh5rsscR9POs3E0jKgmceXWoM1Db6e5bLSceVFXkW0cc0bT0sOo7UyPNKg/Xfga7T2s6PeRhAKetRKfhRMEBY7RyTXoHGOZc0ogcira27OSYyxwasLLQghDO+ceFJsylOi70Cz2Jk9auDQcd5GOAelOluPKsZHNOVkMrnPxqKUZFcWTJ5FSYrMyBY35waJlGBQ1wuOaljl3LzSoKHKeM09G6VEp8KctIPk1mhzCSMx/P9tZDXLMo2PI1caHdd3IPI8UT2qsiW3DkGlGdM6fgzVkwA2nx8atorMEY4IqsWHjpyKlF0YzyTXZDKqM9zJbvRYnByMVSSdlR+a2B86tn1cGmPqikEcVcpJlKYJfHLRRg52Dmi5UwMfCq3TkLOzE0fmuSb7mU33ABHg9KEll56VZzMvnVDeTANREqKC94PAqcFVGPGq6zOMk+PSilXxPjVSQ2gyNi5GfdoreijjFVTOT0NdSDnJNZklmt3k8VI13njFBNsAzmmi8GcIM/GkVGwv2f0aVcy/kKVVZpukecxT5rX6DabVDbfaNZC1i3MoHmK9DtpNigHjArqZvN9iXcxp6p+lig31MeHNRm7B8DWbMNjYY9svO00OJ3TwyKbG4zU11eRIvtsqg8ZZgoP31LJeJjzd5G4DipIb0HiqJL2NWysiMnUgOp2jzPPAqSXUrfORNH+un76miXjZezyAjFBWlzyVxQUeqQjrNGOh99en31AmowrLkyptOcHeuD+2ihbWXIkOTxU9tNyKrvpC3xnvo8efeJjPl1pW2pQFgBLGSSAAHUkn4c1LQtjbN3p9uuAdufGrx41dAPHFZOTVIYVDTTJHxwXdUz5Yz1qfSe1Nu5IjmjlPiEdWI+wGudwfk6oQ7FbdxlXYeVD3SCQc1Jrt5Ejl5JVjU9C7KmflnrQNrqUEnEUschHUK6sfuFaxujDJjaGCxXBGOaDurXGMUXLq8AyGmjBHBBkQEH4jNRRXUUh9iRW+CsrfhWm4zSYTaQ7V+NItQsurw8r3sYI4IMiA/LrTPpGHxmi+RkQf31NNk7GOkH7f2VQXSHvPhVqb+M52yI2OSQ6nA8+DVM+ow7ye9T9df31rFUb40wqIe18KdLdAnbQMmpxHhHUnyDAmuW45z41UjZwsu4+gwKbNJ5/dXLdCQOKKNuM81iyFjZWqpc9KLjBXpwKmOB0oS5l+NSjoji7EvrB86VV/e0qZXtoodHXLgk8Dmr03ZkJOeOmKzdjIBmrCGQcYrrJouo5BUyuDVQHohZKlotUi2Bqx7K2cc2qWqTRpIndXR2SIsiZAjwdrAjNUUb4q/7AvnVrb+huvwjpUNo56WNGgTUdPghgijWcrGyxxJGrZu4feCjngHr8a9VPZnT849StckE49WgzgEAn3fiKxnba37zX9IXyE7/AOzQv/8AWtdLcv8ASaR7H2eqSMX2t3e4zxgLuxjdhScdaCTA+irRLU3Gq201rA5guiU3wxSbY5C4VVLDgAR9PjR3Y/srbfSurB7WFola17pGhiZE3xM77FIwvOOlO7O/Udpb+LoJ7eKcfNBGp+3LOa3GnWey4upMfxhiOfMLEE/uNAHnPZ/QrWbtDfj1aAwQQRRiLuYu6EjiNtwTGM+y/OPGrr0j9nLQaZcyQW1ukkYEiyRwRI6mCVXYBlXI9xlPzNC+icGS81i5PO+8aJW/zYmfaP1WWrzTIXutPvIZVZd8moxjcpVikk82xgD4bXGDQBR+i3TLea1bUpYlmnkeYq7qsjRxROyRxxA+6MKTxySxrvaKOz1DSWv0hSG4Fu9xC47tbiJ41ZlXeuCQSuCDwc9Ky3oh7YNaQpbSQXElo2XW5S3mdbdz/GxvhfaQOGO4ZIyc/DSdu+wVncRtqNnHE0yoZtqhJLW8TG4gjpuIzh1xyec+ABL6NdGhezGp3Uay3UoeXc4DiGNSwSOENwg2jORySTkmib/TbXVtMF4kCwzmJpYZVCieJ03YG9QNy5XBB4IPSiOwP+AYP6tJ+D15z2U1bX10+JLa2VrQRsEcxRElMtuOTMCed3gOlAGx9D2jWtxpcU09rBJIzzlneCJ3P179SwzUuoaDp+oaW15a2iW8vdSSwyJFFBOkkW4AMY+CMoRjJGDRXoNx9DweW6f4fz71Jqcne6I7aSEjiMEuxHRgdg3iRU9obXyGwTkZ++gCt9EGiWs+kwSzWtvJIzTlneCJ3P5RJ1ZgSfKhPQdodrNpavNbQSP3so3yQxSPgEYG5hmrv0J4+hrfGcZuMZ649Zlxmg/QD/glf6ab8RQAzWdB0zUdMuZoLOOGRFuVR1iiglWW33r70fVSV6HwNFdgp9I1CIiGyh3QpCJDJZwpkuhwQSPaztPNC6n2n06CzuLLTy09w4uFWGNJpSJpmYM0jkbUUMxJyRwOKZ6IbMQ3F7EBjZFYKfiwhkDH76AKb0lvYO3qNpZhLqK4gMkkdrHHGqbd7ZlUceyw4qrgsVQZIqftPeCPU9Qz172Hj/wkVKCVim4qdvxFZyZcUjqkY46VG+Dk1XTXjPJsQdfto+6kES4Yc48qz2jVIEv5do6YqlkvN1X9liZG3CqGTR5C525C5q4xBsZ3o867RH8H3867VURuZnYLZ8jCmrFdLnJG1Tj5Vfx9nJh0nX9Vv31YRWNyq475c+e01n1+n5HT0Go4maXS5ycbDU/0ZMp9w1oIrW6X+eX9VqMia4HWRD/ZNS9fg5DWg1HEzccTgcqfurWeiq0ia5mu5pwjwM0EcRaNF2yRRszHPtE5/CpoLpgPbVD8hio5LSzkYtLaROx/OaONm4+JFLrsHIfQ6jiXsms2lxrsJSeJxbWk29xIhRZJJY1Chs4LY3ZA6ZqzuO26LqsdjmIwvbGYz94OHDuNnXHRM/bWMl0zT2ABs48DOB3cWFz1xxxQ7aFp5GPVVA/0I/3Uuuwcg6DUcS27Q3sUXaOwnWWMpLbyQOQ6kAr3hBJB8dyD7K9Gl1i3VSxni4BJ+sTwGfOvHT2bsPC3HPhtjx+FMHZux/ydP1I/3Uddg5B0Go4mm9B13EunNJJLGsk1xNKwZ0Ukkhc4Jz+bV/2I7bJfRzPKYojHcSwqO8A3IgUq/tHxDfLisEdDsT1tUJ8+7iz+Fdk0WxP/AFWPOMZMUXgMDw8qOuwcg6DPxNB6LtbtRHc6c0yJLFcXSqpdQZYnlYq8fg3vEYHl8asJ5rbRtJFtJcCR0ikjjHCyzu+7aqRgk9Wx44rKDS7IxiN7ZWQElV2RhVJ6kDwPyrtjpVhC26O1Ct5gLkfInpS67ByDoM/EvPRVq0TWC6fO6x3USyRtEzKrNGzMUkjB99drAZHiKOubqDSdMSyEwmuRE0MEa4E08r5xtjBJC7mGT0A8aodR9WnULLbJIB7u9VYr8j1H2VDpkVvbZMFtHEx43qoD48t3XFHX4OQdBqOJeehu4jh0qKKWWNZEkuFZTIgIIuHB6mm9hb+IaCimWMN3Nz7JdA3Ly44zWdubG2dizWluzsSWZoImZiepJxyahfTbXoLS2ztQfyW3I3Gc7zkr4R/jTWtwv/RL0WdeYGo9C1/EmjW6tLGrZn9lnRSPyiTwJoX0D30SaUoeVFPey8M6qeo8Cao5tPtGx+SW+TIclrWIts9YLbi3H82AMcnnp41C+m27e9awHjp6rbqf5WpVcheNsAK/LzNV1eHkhdJm4su+xV+BbMoxjv7s58wbqQ1YdhLyNNQ1IvIi5Fnjc6rnEcvTJ5qnX89IjHCiqAhEUaIPrwxVUdguSmVzgY3fDNA39nbzAkwxSM0jjvGgSQ7PWMqQ56KEGAOevAOafUY/O5UQtLlutrsLuUil1DUWyrAzQ4YEMP5JF0I+NGT2qlNu4Y8uKrLGFIzlURB+UkBIEjRd8sPc5VAMkIsoz19qkgYsmTtQG4kZREnJdj3K87uFHhzjPjgVL1OHki+kzcWK00OJW3g/bnjPXFS3llG3Vgfma43tN72E70uE7lSObVVyR8JQWIzzjHSg7m2d0KBgGbukaUxIpYKkneOFHuZLIvGCdpPGaHqMK/0gWkzcWTrbxIMBgPtFQgxjJ3ZA5OOcDOMnyHI++mLZ/V92cMoj257pVdpGuQQ2/wB4YjB8fzqJv4txmEW2NWheMFYFyxaaNoxgnnaiOOgGXHJxwLU4uSDpM3FkPr0NKqX+C8n/AGy/c1Kp6zDyK6HPxNPSpUq+YPqxUqVKgBUqVKgBUqVKgBUqVKgYqVKlQAqVKlQIVKlSoAVKlSoAVKlSoA4/Q100qVaP9DNfuKlSpVBoKlSpUAKlSpUgFSpUqYz/2Q==";
    p3.hashtags = ["#globalwarming", "#ice", "#fun"];
    p3.username = "Stefan";
    this.posts = [p1, p2, p3];
    this.filteredPosts = [];
    console.log("InstagramModel, constructor");
  }

  _createClass(InstagramModel, [{
    key: "filterByTag",
    value: function filterByTag(tag) {
      console.log("filterByTag");
      this.filteredPosts = [];

      for (var i = 0; i < this.posts.length; i++) {
        var post = this.posts[i];

        if (post.hasTag(tag)) {
          this.filteredPosts.push(post);
        }
      }

      return this.filteredPosts;
    }
  }]);

  return InstagramModel;
}();

exports.default = InstagramModel;
},{"./InstagramPost":"InstagramPost.js"}],"InstagramView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramView =
/*#__PURE__*/
function () {
  function InstagramView(InstaModel) {
    _classCallCheck(this, InstagramView);

    this.model = InstaModel;
    console.log("Instagramview, constructor");
  }

  _createClass(InstagramView, [{
    key: "renderPostList",
    value: function renderPostList() {
      console.log("renderPostList", this.model);
      var container = document.getElementById("postlist");

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (var i = 0; i < this.model.filteredPosts.length; i++) {
        var shownPost = this.model.filteredPosts[i];
        var newShownPost = document.createElement("article");
        newShownPost.setAttribute("class", "post");
        var newShownHeader = document.createElement("div");
        newShownHeader.setAttribute("class", "post__header");
        newShownHeader.innerHTML = shownPost.username;
        var newShownPic = document.createElement("img");
        var newShownPicSrc = shownPost.imgurl;
        newShownPic.setAttribute("src", newShownPicSrc);
        newShownPic.setAttribute("class", "post__picture");
        var newShownFooter = document.createElement("div");
        newShownFooter.setAttribute("class", "post__footer");
        newShownFooter.innerHTML = shownPost.hashtags + " ";
        var newShownBreak = document.createElement("div");
        newShownBreak.innerHTML = "<br/>";
        newShownPost.appendChild(newShownHeader);
        newShownPost.appendChild(newShownPic);
        newShownPost.appendChild(newShownFooter);
        container.appendChild(newShownPost);
        container.appendChild(newShownBreak);
      }
    }
  }]);

  return InstagramView;
}();

exports.default = InstagramView;
},{}],"InstagramController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InstagramController =
/*#__PURE__*/
function () {
  function InstagramController(InstaModel, InstaView) {
    _classCallCheck(this, InstagramController);

    this.model = InstaModel;
    this.view = InstaView;
    console.log("Instagramcontroller, constructor");
  }

  _createClass(InstagramController, [{
    key: "searchForTag",
    value: function searchForTag(tag) {
      console.log("searchForTag", this.view, this.model);
      this.model.filterByTag(tag);
      this.view.renderPostList();
    }
  }]);

  return InstagramController;
}();

exports.default = InstagramController;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _InstagramModel = _interopRequireDefault(require("./InstagramModel"));

var _InstagramView = _interopRequireDefault(require("./InstagramView"));

var _InstagramController = _interopRequireDefault(require("./InstagramController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstaModel = new _InstagramModel.default();
var InstaView = new _InstagramView.default(InstaModel);
var InstaController = new _InstagramController.default(InstaModel, InstaView);
var addButton = document.getElementById("search__button");
addButton.addEventListener("click", function (ev) {
  ev.preventDefault();
  var input = document.getElementById("search__bar").value;
  InstaController.searchForTag(input);
});
},{"./InstagramModel":"InstagramModel.js","./InstagramView":"InstagramView.js","./InstagramController":"InstagramController.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50826" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Insta-Frontend.e31bb0bc.js.map