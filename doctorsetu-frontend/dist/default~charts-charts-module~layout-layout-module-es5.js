function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~charts-charts-module~layout-layout-module"], {
  /***/
  "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
    \******************************************************************/

  /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl, CircleManager, DataLayerManager, FitBoundsAccessor, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, coreDirectives, ɵa, ɵb, ɵc, ɵd, ɵe */

  /***/
  function node_modulesAgmCore__ivy_ngcc__Fesm2015AgmCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
      return AgmBicyclingLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
      return AgmCircle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
      return AgmCoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
      return AgmDataLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
      return AgmFitBounds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmFullscreenControl", function () {
      return AgmFullscreenControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
      return AgmGeocoder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
      return AgmInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
      return AgmKmlLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
      return AgmMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMapTypeControl", function () {
      return AgmMapTypeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
      return AgmMarker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPanControl", function () {
      return AgmPanControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
      return AgmPolygon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
      return AgmPolyline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
      return AgmPolylineIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
      return AgmPolylinePoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
      return AgmRectangle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmRotateControl", function () {
      return AgmRotateControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmScaleControl", function () {
      return AgmScaleControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmStreetViewControl", function () {
      return AgmStreetViewControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
      return AgmTransitLayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmZoomControl", function () {
      return AgmZoomControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
      return CircleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
      return DataLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
      return FitBoundsAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
      return GoogleMapsAPIWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
      return GoogleMapsScriptProtocol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
      return InfoWindowManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
      return KmlLayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
      return LAZY_MAPS_API_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
      return LayerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
      return LazyMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
      return MapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
      return MarkerManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
      return NoOpMapsAPILoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
      return PolygonManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
      return PolylineManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
      return RectangleManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coreDirectives", function () {
      return coreDirectives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FitBoundsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return AgmMapControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return BROWSER_GLOBALS_PROVIDERS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var MapsAPILoader = function MapsAPILoader() {
      _classCallCheck(this, MapsAPILoader);
    };

    MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) {
      return new (t || MapsAPILoader)();
    };

    MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapsAPILoader,
      factory: MapsAPILoader.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /**
     * Wrapper class that handles the communication with the Google Maps Javascript
     * API v3
     */


    var GoogleMapsAPIWrapper =
    /*#__PURE__*/
    function () {
      function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;

        _classCallCheck(this, GoogleMapsAPIWrapper);

        this._loader = _loader;
        this._zone = _zone;
        this._map = new Promise(function (resolve) {
          _this._mapResolver = resolve;
        });
      }

      _createClass(GoogleMapsAPIWrapper, [{
        key: "createMap",
        value: function createMap(el, mapOptions) {
          var _this2 = this;

          return this._zone.runOutsideAngular(function () {
            return _this2._loader.load().then(function () {
              var map = new google.maps.Map(el, mapOptions);

              _this2._mapResolver(map);

              return;
            });
          });
        }
      }, {
        key: "setMapOptions",
        value: function setMapOptions(options) {
          var _this3 = this;

          return this._zone.runOutsideAngular(function () {
            _this3._map.then(function (m) {
              m.setOptions(options);
            });
          });
        }
        /**
         * Creates a google map marker with the map context
         */

      }, {
        key: "createMarker",
        value: function createMarker() {
          var _this4 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this._zone.runOutsideAngular(function () {
            return _this4._map.then(function (map) {
              if (addToMap) {
                options.map = map;
              }

              return new google.maps.Marker(options);
            });
          });
        }
      }, {
        key: "createInfoWindow",
        value: function createInfoWindow(options) {
          var _this5 = this;

          return this._zone.runOutsideAngular(function () {
            return _this5._map.then(function () {
              return new google.maps.InfoWindow(options);
            });
          });
        }
        /**
         * Creates a google.map.Circle for the current map.
         */

      }, {
        key: "createCircle",
        value: function createCircle(options) {
          var _this6 = this;

          return this._zone.runOutsideAngular(function () {
            return _this6._map.then(function (map) {
              options.map = map;
              return new google.maps.Circle(options);
            });
          });
        }
        /**
         * Creates a google.map.Rectangle for the current map.
         */

      }, {
        key: "createRectangle",
        value: function createRectangle(options) {
          var _this7 = this;

          return this._zone.runOutsideAngular(function () {
            return _this7._map.then(function (map) {
              options.map = map;
              return new google.maps.Rectangle(options);
            });
          });
        }
      }, {
        key: "createPolyline",
        value: function createPolyline(options) {
          var _this8 = this;

          return this._zone.runOutsideAngular(function () {
            return _this8.getNativeMap().then(function (map) {
              var line = new google.maps.Polyline(options);
              line.setMap(map);
              return line;
            });
          });
        }
      }, {
        key: "createPolygon",
        value: function createPolygon(options) {
          var _this9 = this;

          return this._zone.runOutsideAngular(function () {
            return _this9.getNativeMap().then(function (map) {
              var polygon = new google.maps.Polygon(options);
              polygon.setMap(map);
              return polygon;
            });
          });
        }
        /**
         * Creates a new google.map.Data layer for the current map
         */

      }, {
        key: "createDataLayer",
        value: function createDataLayer(options) {
          var _this10 = this;

          return this._zone.runOutsideAngular(function () {
            return _this10._map.then(function (m) {
              var data = new google.maps.Data(options);
              data.setMap(m);
              return data;
            });
          });
        }
        /**
         * Creates a TransitLayer instance for a map
         * @returns a new transit layer object
         */

      }, {
        key: "createTransitLayer",
        value: function createTransitLayer() {
          var _this11 = this;

          return this._zone.runOutsideAngular(function () {
            return _this11._map.then(function (map) {
              var newLayer = new google.maps.TransitLayer();
              newLayer.setMap(map);
              return newLayer;
            });
          });
        }
        /**
         * Creates a BicyclingLayer instance for a map
         * @returns a new bicycling layer object
         */

      }, {
        key: "createBicyclingLayer",
        value: function createBicyclingLayer() {
          var _this12 = this;

          return this._zone.runOutsideAngular(function () {
            return _this12._map.then(function (map) {
              var newLayer = new google.maps.BicyclingLayer();
              newLayer.setMap(map);
              return newLayer;
            });
          });
        }
        /**
         * Determines if given coordinates are insite a Polygon path.
         */

      }, {
        key: "containsLocation",
        value: function containsLocation(latLng, polygon) {
          return this._map.then(function () {
            return google.maps.geometry.poly.containsLocation(latLng, polygon);
          });
        }
      }, {
        key: "subscribeToMapEvent",
        value: function subscribeToMapEvent(eventName) {
          var _arguments2 = arguments,
              _this13 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this13._map.then(function (m) {
              return m.addListener(eventName, function () {
                return _this13._zone.run(function () {
                  return observer.next(_arguments2[0]);
                });
              });
            });
          });
        }
      }, {
        key: "clearInstanceListeners",
        value: function clearInstanceListeners() {
          var _this14 = this;

          return this._zone.runOutsideAngular(function () {
            _this14._map.then(function (map) {
              google.maps.event.clearInstanceListeners(map);
            });
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(latLng) {
          var _this15 = this;

          return this._zone.runOutsideAngular(function () {
            return _this15._map.then(function (map) {
              return map.setCenter(latLng);
            });
          });
        }
      }, {
        key: "getZoom",
        value: function getZoom() {
          var _this16 = this;

          return this._zone.runOutsideAngular(function () {
            return _this16._map.then(function (map) {
              return map.getZoom();
            });
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds() {
          var _this17 = this;

          return this._zone.runOutsideAngular(function () {
            return _this17._map.then(function (map) {
              return map.getBounds();
            });
          });
        }
      }, {
        key: "getMapTypeId",
        value: function getMapTypeId() {
          var _this18 = this;

          return this._zone.runOutsideAngular(function () {
            return _this18._map.then(function (map) {
              return map.getMapTypeId();
            });
          });
        }
      }, {
        key: "setZoom",
        value: function setZoom(zoom) {
          var _this19 = this;

          return this._zone.runOutsideAngular(function () {
            return _this19._map.then(function (map) {
              return map.setZoom(zoom);
            });
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this20 = this;

          return this._zone.runOutsideAngular(function () {
            return _this20._map.then(function (map) {
              return map.getCenter();
            });
          });
        }
      }, {
        key: "panTo",
        value: function panTo(latLng) {
          var _this21 = this;

          return this._zone.runOutsideAngular(function () {
            return _this21._map.then(function (map) {
              return map.panTo(latLng);
            });
          });
        }
      }, {
        key: "panBy",
        value: function panBy(x, y) {
          var _this22 = this;

          return this._zone.runOutsideAngular(function () {
            return _this22._map.then(function (map) {
              return map.panBy(x, y);
            });
          });
        }
      }, {
        key: "fitBounds",
        value: function fitBounds(latLng, padding) {
          var _this23 = this;

          return this._zone.runOutsideAngular(function () {
            return _this23._map.then(function (map) {
              return map.fitBounds(latLng, padding);
            });
          });
        }
      }, {
        key: "panToBounds",
        value: function panToBounds(latLng, padding) {
          var _this24 = this;

          return this._zone.runOutsideAngular(function () {
            return _this24._map.then(function (map) {
              return map.panToBounds(latLng, padding);
            });
          });
        }
        /**
         * Returns the native Google Maps Map instance. Be careful when using this instance directly.
         */

      }, {
        key: "getNativeMap",
        value: function getNativeMap() {
          return this._map;
        }
        /**
         * Triggers the given event name on the map instance.
         */

      }, {
        key: "triggerMapEvent",
        value: function triggerMapEvent(eventName) {
          return this._map.then(function (m) {
            return google.maps.event.trigger(m, eventName);
          });
        }
      }]);

      return GoogleMapsAPIWrapper;
    }();

    GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) {
      return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GoogleMapsAPIWrapper,
      factory: GoogleMapsAPIWrapper.ɵfac
    });

    GoogleMapsAPIWrapper.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    var CircleManager =
    /*#__PURE__*/
    function () {
      function CircleManager(_apiWrapper, _zone) {
        _classCallCheck(this, CircleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
      }

      _createClass(CircleManager, [{
        key: "addCircle",
        value: function addCircle(circle) {
          var _this25 = this;

          this._apiWrapper.getNativeMap().then(function () {
            return _this25._circles.set(circle, _this25._apiWrapper.createCircle({
              center: {
                lat: circle.latitude,
                lng: circle.longitude
              },
              clickable: circle.clickable,
              draggable: circle.draggable,
              editable: circle.editable,
              fillColor: circle.fillColor,
              fillOpacity: circle.fillOpacity,
              radius: circle.radius,
              strokeColor: circle.strokeColor,
              strokeOpacity: circle.strokeOpacity,
              strokePosition: google.maps.StrokePosition[circle.strokePosition],
              strokeWeight: circle.strokeWeight,
              visible: circle.visible,
              zIndex: circle.zIndex
            }));
          });
        }
        /**
         * Removes the given circle from the map.
         */

      }, {
        key: "removeCircle",
        value: function removeCircle(circle) {
          var _this26 = this;

          return this._circles.get(circle).then(function (c) {
            c.setMap(null);

            _this26._circles["delete"](circle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(circle, options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this._circles.get(circle).then(function (c) {
                      var actualParam = options.strokePosition;
                      options.strokePosition = google.maps.StrokePosition[actualParam];
                      c.setOptions(options);
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getBounds",
        value: function getBounds(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getBounds();
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getCenter();
          });
        }
      }, {
        key: "getRadius",
        value: function getRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.getRadius();
          });
        }
      }, {
        key: "setCenter",
        value: function setCenter(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setCenter({
              lat: circle.latitude,
              lng: circle.longitude
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setEditable(circle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setDraggable(circle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setVisible(circle.visible);
          });
        }
      }, {
        key: "setRadius",
        value: function setRadius(circle) {
          return this._circles.get(circle).then(function (c) {
            return c.setRadius(circle.radius);
          });
        }
      }, {
        key: "getNativeCircle",
        value: function getNativeCircle(circle) {
          return this._circles.get(circle);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, circle) {
          var _this27 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var listener = null;

            _this27._circles.get(circle).then(function (c) {
              listener = c.addListener(eventName, function (e) {
                return _this27._zone.run(function () {
                  return observer.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return CircleManager;
    }();

    CircleManager.ɵfac = function CircleManager_Factory(t) {
      return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CircleManager,
      factory: CircleManager.ɵfac
    });

    CircleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /**
     * Manages all Data Layers for a Google Map instance.
     */


    var DataLayerManager =
    /*#__PURE__*/
    function () {
      function DataLayerManager(_wrapper, _zone) {
        _classCallCheck(this, DataLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new Data Layer to the map.
       */


      _createClass(DataLayerManager, [{
        key: "addDataLayer",
        value: function addDataLayer(layer) {
          var _this28 = this;

          var newLayer = this._wrapper.createDataLayer({
            style: layer.style
          }).then(function (d) {
            if (layer.geoJson) {
              // NOTE: accessing "features" on google.maps.Data is undocumented
              _this28.getDataFeatures(d, layer.geoJson).then(function (features) {
                return d.features = features;
              });
            }

            return d;
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "deleteDataLayer",
        value: function deleteDataLayer(layer) {
          var _this29 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this29._layers["delete"](layer);
          });
        }
      }, {
        key: "updateGeoJson",
        value: function updateGeoJson(layer, geoJson) {
          var _this30 = this;

          this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
              l.remove(feature); // NOTE: accessing "features" on google.maps.Data is undocumented

              var index = l.features.indexOf(feature, 0);

              if (index > -1) {
                l.features.splice(index, 1);
              }
            });

            _this30.getDataFeatures(l, geoJson).then(function (features) {
              return l.features = features;
            });
          });
        }
      }, {
        key: "setDataOptions",
        value: function setDataOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
          });
        }
        /**
         * Creates a Google Maps event listener for the given DataLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this31 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this31._layers.get(layer).then(function (d) {
              d.addListener(eventName, function (e) {
                return _this31._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
        /**
         * Extract features from a geoJson using google.maps Data Class
         * @param d : google.maps.Data class instance
         * @param geoJson : url or geojson object
         */

      }, {
        key: "getDataFeatures",
        value: function getDataFeatures(d, geoJson) {
          return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
              try {
                var features = d.addGeoJson(geoJson);
                resolve(features);
              } catch (e) {
                reject(e);
              }
            } else if (typeof geoJson === 'string') {
              d.loadGeoJson(geoJson, null, resolve);
            } else {
              reject("Impossible to extract features from geoJson: wrong argument type");
            }
          });
        }
      }]);

      return DataLayerManager;
    }();

    DataLayerManager.ɵfac = function DataLayerManager_Factory(t) {
      return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataLayerManager,
      factory: DataLayerManager.ɵfac
    });

    DataLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /**
     * Class to implement when you what to be able to make it work with the auto fit bounds feature
     * of AGM.
     */


    var FitBoundsAccessor = function FitBoundsAccessor() {
      _classCallCheck(this, FitBoundsAccessor);
    };
    /**
     * The FitBoundsService is responsible for computing the bounds of the a single map.
     */


    var FitBoundsService =
    /*#__PURE__*/
    function () {
      function FitBoundsService(loader) {
        var _this32 = this;

        _classCallCheck(this, FitBoundsService);

        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
          return _this32._includeInBounds$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
          return _this32._generateBounds(includeInBounds);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FitBoundsService, [{
        key: "_generateBounds",
        value: function _generateBounds(includeInBounds) {
          var bounds = new google.maps.LatLngBounds();
          includeInBounds.forEach(function (b) {
            return bounds.extend(b);
          });
          return bounds;
        }
      }, {
        key: "addToBounds",
        value: function addToBounds(latLng) {
          var id = this._createIdentifier(latLng);

          if (this._includeInBounds$.value.has(id)) {
            return;
          }

          var boundsMap = this._includeInBounds$.value;
          boundsMap.set(id, latLng);

          this._includeInBounds$.next(boundsMap);
        }
      }, {
        key: "removeFromBounds",
        value: function removeFromBounds(latLng) {
          var boundsMap = this._includeInBounds$.value;
          boundsMap["delete"](this._createIdentifier(latLng));

          this._includeInBounds$.next(boundsMap);
        }
      }, {
        key: "changeFitBoundsChangeSampleTime",
        value: function changeFitBoundsChangeSampleTime(timeMs) {
          this._boundsChangeSampleTime$.next(timeMs);
        }
      }, {
        key: "getBounds$",
        value: function getBounds$() {
          return this.bounds$;
        }
      }, {
        key: "_createIdentifier",
        value: function _createIdentifier(latLng) {
          return "".concat(latLng.lat, "+").concat(latLng.lng);
        }
      }]);

      return FitBoundsService;
    }();

    FitBoundsService.ɵfac = function FitBoundsService_Factory(t) {
      return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FitBoundsService,
      factory: FitBoundsService.ɵfac
    });

    FitBoundsService.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();

    var AgmGeocoder =
    /*#__PURE__*/
    function () {
      function AgmGeocoder(loader) {
        var _this33 = this;

        _classCallCheck(this, AgmGeocoder);

        var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
          loader.load().then(function () {
            return subscriber.next();
          });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _this33._createGeocoder();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits

        this.geocoder$ = connectableGeocoder$;
      }

      _createClass(AgmGeocoder, [{
        key: "geocode",
        value: function geocode(request) {
          var _this34 = this;

          return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
            return _this34._getGoogleResults(geocoder, request);
          }));
        }
      }, {
        key: "_getGoogleResults",
        value: function _getGoogleResults(geocoder, request) {
          var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
          return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                results = _ref2[0],
                status = _ref2[1];

            if (status === google.maps.GeocoderStatus.OK) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
          }));
        }
      }, {
        key: "_createGeocoder",
        value: function _createGeocoder() {
          return new google.maps.Geocoder();
        }
      }]);

      return AgmGeocoder;
    }();

    AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) {
      return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader));
    };

    AgmGeocoder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AgmGeocoder_Factory() {
        return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader));
      },
      token: AgmGeocoder,
      providedIn: "root"
    });

    AgmGeocoder.ctorParameters = function () {
      return [{
        type: MapsAPILoader
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MapsAPILoader
        }];
      }, null);
    })();

    var WindowRef =
    /*#__PURE__*/
    function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "getNativeWindow",
        value: function getNativeWindow() {
          return window;
        }
      }]);

      return WindowRef;
    }();

    var DocumentRef =
    /*#__PURE__*/
    function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "getNativeDocument",
        value: function getNativeDocument() {
          return document;
        }
      }]);

      return DocumentRef;
    }();

    var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
    var GoogleMapsScriptProtocol;

    (function (GoogleMapsScriptProtocol) {
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
      GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
    })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
    /**
     * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
     * LazyMapsAPILoaderConfig}.
     */


    var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

    var LazyMapsAPILoader =
    /*#__PURE__*/
    function (_MapsAPILoader) {
      _inherits(LazyMapsAPILoader, _MapsAPILoader);

      var _super = _createSuper(LazyMapsAPILoader);

      function LazyMapsAPILoader() {
        var _this35;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = arguments.length > 1 ? arguments[1] : undefined;
        var d = arguments.length > 2 ? arguments[2] : undefined;
        var localeId = arguments.length > 3 ? arguments[3] : undefined;

        _classCallCheck(this, LazyMapsAPILoader);

        _this35 = _super.call(this);
        _this35.localeId = localeId;
        _this35._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this35.callbackName = "agmLazyMapsAPILoader";
        _this35._config = config || {};
        _this35._windowRef = w;
        _this35._documentRef = d;
        return _this35;
      }

      _createClass(LazyMapsAPILoader, [{
        key: "load",
        value: function load() {
          var window = this._windowRef.getNativeWindow();

          if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
          }

          if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
          } // this can happen in HMR situations or Stackblitz.io editors.


          var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

          if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);

            return this._scriptLoadingPromise;
          }

          var script = this._documentRef.getNativeDocument().createElement('script');

          script.type = 'text/javascript';
          script.async = true;
          script.defer = true;
          script.id = this._SCRIPT_ID;
          script.src = this._getScriptSrc(this.callbackName);

          this._assignScriptLoadingPromise(script);

          this._documentRef.getNativeDocument().body.appendChild(script);

          return this._scriptLoadingPromise;
        }
      }, {
        key: "_assignScriptLoadingPromise",
        value: function _assignScriptLoadingPromise(scriptElem) {
          var _this36 = this;

          this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this36._windowRef.getNativeWindow()[_this36.callbackName] = function () {
              resolve();
            };

            scriptElem.onerror = function (error) {
              reject(error);
            };
          });
        }
      }, {
        key: "_getScriptSrc",
        value: function _getScriptSrc(callbackName) {
          var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
          var protocol;

          switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
              protocol = '';
              break;

            case GoogleMapsScriptProtocol.HTTP:
              protocol = 'http:';
              break;

            case GoogleMapsScriptProtocol.HTTPS:
              protocol = 'https:';
              break;
          }

          var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
          var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || (this.localeId !== 'en-US' ? this.localeId : null)
          };
          var params = Object.keys(queryParams).filter(function (k) {
            return queryParams[k] != null;
          }).filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
          }).map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];

            if (Array.isArray(i)) {
              return {
                key: k,
                value: i.join(',')
              };
            }

            return {
              key: k,
              value: queryParams[k]
            };
          }).map(function (entry) {
            return "".concat(entry.key, "=").concat(entry.value);
          }).join('&');
          return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
        }
      }]);

      return LazyMapsAPILoader;
    }(MapsAPILoader);

    LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) {
      return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
    };

    LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyMapsAPILoader,
      factory: LazyMapsAPILoader.ɵfac
    });

    LazyMapsAPILoader.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LAZY_MAPS_API_CONFIG]
        }]
      }, {
        type: WindowRef
      }, {
        type: DocumentRef
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();

    var MarkerManager =
    /*#__PURE__*/
    function () {
      function MarkerManager(_mapsWrapper, _zone) {
        _classCallCheck(this, MarkerManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
      }

      _createClass(MarkerManager, [{
        key: "convertAnimation",
        value: function convertAnimation(uiAnim) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(uiAnim === null)) {
                      _context2.next = 4;
                      break;
                    }

                    return _context2.abrupt("return", null);

                  case 4:
                    return _context2.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                      return google.maps.Animation[uiAnim];
                    }));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteMarker",
        value: function deleteMarker(markerDirective) {
          var _this37 = this;

          var markerPromise = this._markers.get(markerDirective);

          if (markerPromise == null) {
            // marker already deleted
            return Promise.resolve();
          }

          return markerPromise.then(function (marker) {
            return _this37._zone.run(function () {
              marker.setMap(null);

              _this37._markers["delete"](markerDirective);
            });
          });
        }
      }, {
        key: "updateMarkerPosition",
        value: function updateMarkerPosition(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setPosition({
              lat: marker.latitude,
              lng: marker.longitude
            });
          });
        }
      }, {
        key: "updateTitle",
        value: function updateTitle(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setTitle(marker.title);
          });
        }
      }, {
        key: "updateLabel",
        value: function updateLabel(marker) {
          return this._markers.get(marker).then(function (m) {
            m.setLabel(marker.label);
          });
        }
      }, {
        key: "updateDraggable",
        value: function updateDraggable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setDraggable(marker.draggable);
          });
        }
      }, {
        key: "updateIcon",
        value: function updateIcon(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setIcon(marker.iconUrl);
          });
        }
      }, {
        key: "updateOpacity",
        value: function updateOpacity(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setOpacity(marker.opacity);
          });
        }
      }, {
        key: "updateVisible",
        value: function updateVisible(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setVisible(marker.visible);
          });
        }
      }, {
        key: "updateZIndex",
        value: function updateZIndex(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setZIndex(marker.zIndex);
          });
        }
      }, {
        key: "updateClickable",
        value: function updateClickable(marker) {
          return this._markers.get(marker).then(function (m) {
            return m.setClickable(marker.clickable);
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation(marker) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var m;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this._markers.get(marker);

                  case 2:
                    m = _context3.sent;
                    _context3.t0 = m;
                    _context3.next = 6;
                    return this.convertAnimation(marker.animation);

                  case 6:
                    _context3.t1 = _context3.sent;

                    _context3.t0.setAnimation.call(_context3.t0, _context3.t1);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(marker) {
          var _this38 = this;

          var markerPromise = new Promise(function (resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this38, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.t0 = this._mapsWrapper;
                      _context4.t1 = {
                        lat: marker.latitude,
                        lng: marker.longitude
                      };
                      _context4.t2 = marker.label;
                      _context4.t3 = marker.draggable;
                      _context4.t4 = marker.iconUrl;
                      _context4.t5 = marker.opacity;
                      _context4.t6 = marker.visible;
                      _context4.t7 = marker.zIndex;
                      _context4.t8 = marker.title;
                      _context4.t9 = marker.clickable;
                      _context4.next = 12;
                      return this.convertAnimation(marker.animation);

                    case 12:
                      _context4.t10 = _context4.sent;
                      _context4.t11 = {
                        position: _context4.t1,
                        label: _context4.t2,
                        draggable: _context4.t3,
                        icon: _context4.t4,
                        opacity: _context4.t5,
                        visible: _context4.t6,
                        zIndex: _context4.t7,
                        title: _context4.t8,
                        clickable: _context4.t9,
                        animation: _context4.t10
                      };
                      return _context4.abrupt("return", _context4.t0.createMarker.call(_context4.t0, _context4.t11).then(resolve));

                    case 15:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });

          this._markers.set(marker, markerPromise);
        }
      }, {
        key: "getNativeMarker",
        value: function getNativeMarker(marker) {
          return this._markers.get(marker);
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, marker) {
          var _this39 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this39._markers.get(marker).then(function (m) {
              return m.addListener(eventName, function (e) {
                return _this39._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return MarkerManager;
    }();

    MarkerManager.ɵfac = function MarkerManager_Factory(t) {
      return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MarkerManager,
      factory: MarkerManager.ɵfac
    });

    MarkerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    var InfoWindowManager =
    /*#__PURE__*/
    function () {
      function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        _classCallCheck(this, InfoWindowManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
      }

      _createClass(InfoWindowManager, [{
        key: "deleteInfoWindow",
        value: function deleteInfoWindow(infoWindow) {
          var _this40 = this;

          var iWindow = this._infoWindows.get(infoWindow);

          if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
          }

          return iWindow.then(function (i) {
            return _this40._zone.run(function () {
              i.close();

              _this40._infoWindows["delete"](infoWindow);
            });
          });
        }
      }, {
        key: "setPosition",
        value: function setPosition(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            });
          });
        }
      }, {
        key: "setZIndex",
        value: function setZIndex(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setZIndex(infoWindow.zIndex);
          });
        }
      }, {
        key: "open",
        value: function open(infoWindow) {
          var _this41 = this;

          return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
              return _this41._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                return _this41._mapsWrapper.getNativeMap().then(function (map) {
                  return w.open(map, marker);
                });
              });
            }

            return _this41._mapsWrapper.getNativeMap().then(function (map) {
              return w.open(map);
            });
          });
        }
      }, {
        key: "close",
        value: function close(infoWindow) {
          return this._infoWindows.get(infoWindow).then(function (w) {
            return w.close();
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(infoWindow, options) {
          return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setOptions(options);
          });
        }
      }, {
        key: "addInfoWindow",
        value: function addInfoWindow(infoWindow) {
          var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
          };

          if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = {
              lat: infoWindow.latitude,
              lng: infoWindow.longitude
            };
          }

          var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

          this._infoWindows.set(infoWindow, infoWindowPromise);
        }
        /**
         * Creates a Google Maps event listener for the given InfoWindow as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, infoWindow) {
          var _this42 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this42._infoWindows.get(infoWindow).then(function (i) {
              i.addListener(eventName, function (e) {
                return _this42._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return InfoWindowManager;
    }();

    InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) {
      return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager));
    };

    InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InfoWindowManager,
      factory: InfoWindowManager.ɵfac
    });

    InfoWindowManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: MarkerManager
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      }, null);
    })();
    /**
     * Manages all KML Layers for a Google Map instance.
     */


    var KmlLayerManager =
    /*#__PURE__*/
    function () {
      function KmlLayerManager(_wrapper, _zone) {
        _classCallCheck(this, KmlLayerManager);

        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
      }
      /**
       * Adds a new KML Layer to the map.
       */


      _createClass(KmlLayerManager, [{
        key: "addKmlLayer",
        value: function addKmlLayer(layer) {
          var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
              clickable: layer.clickable,
              map: m,
              preserveViewport: layer.preserveViewport,
              screenOverlays: layer.screenOverlays,
              suppressInfoWindows: layer.suppressInfoWindows,
              url: layer.url,
              zIndex: layer.zIndex
            });
          });

          this._layers.set(layer, newLayer);
        }
      }, {
        key: "setOptions",
        value: function setOptions(layer, options) {
          this._layers.get(layer).then(function (l) {
            return l.setOptions(options);
          });
        }
      }, {
        key: "deleteKmlLayer",
        value: function deleteKmlLayer(layer) {
          var _this43 = this;

          this._layers.get(layer).then(function (l) {
            l.setMap(null);

            _this43._layers["delete"](layer);
          });
        }
        /**
         * Creates a Google Maps event listener for the given KmlLayer as an Observable
         */

      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, layer) {
          var _this44 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this44._layers.get(layer).then(function (m) {
              m.addListener(eventName, function (e) {
                return _this44._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }]);

      return KmlLayerManager;
    }();

    KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) {
      return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: KmlLayerManager,
      factory: KmlLayerManager.ɵfac
    });

    KmlLayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /**
     * This class manages Transit and Bicycling Layers for a Google Map instance.
     */


    var LayerManager =
    /*#__PURE__*/
    function () {
      function LayerManager(_wrapper) {
        _classCallCheck(this, LayerManager);

        this._wrapper = _wrapper;
        this._layers = new Map();
      }
      /**
       * Adds a transit layer to a map instance.
       * @param layer - a TransitLayer object
       * @param _options - TransitLayerOptions options
       * @returns void
       */


      _createClass(LayerManager, [{
        key: "addTransitLayer",
        value: function addTransitLayer(layer) {
          var newLayer = this._wrapper.createTransitLayer();

          this._layers.set(layer, newLayer);
        }
        /**
         * Adds a bicycling layer to a map instance.
         * @param layer - a bicycling layer object
         * @param _options - BicyclingLayer options
         * @returns void
         */

      }, {
        key: "addBicyclingLayer",
        value: function addBicyclingLayer(layer) {
          var newLayer = this._wrapper.createBicyclingLayer();

          this._layers.set(layer, newLayer);
        }
        /**
         * Deletes a map layer
         * @param layer - the layer to delete
         */

      }, {
        key: "deleteLayer",
        value: function deleteLayer(layer) {
          var _this45 = this;

          return this._layers.get(layer).then(function (currentLayer) {
            currentLayer.setMap(null);

            _this45._layers["delete"](layer);
          });
        }
      }]);

      return LayerManager;
    }();

    LayerManager.ɵfac = function LayerManager_Factory(t) {
      return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper));
    };

    LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LayerManager,
      factory: LayerManager.ɵfac
    });

    LayerManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      }, null);
    })();
    /**
     * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
     * Tag.
     * It's important that the Google Maps API script gets loaded first on the page.
     */


    var NoOpMapsAPILoader =
    /*#__PURE__*/
    function () {
      function NoOpMapsAPILoader() {
        _classCallCheck(this, NoOpMapsAPILoader);
      }

      _createClass(NoOpMapsAPILoader, [{
        key: "load",
        value: function load() {
          if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
          }

          return Promise.resolve();
        }
      }]);

      return NoOpMapsAPILoader;
    }();

    function createMVCEventObservable(array) {
      var eventNames = ['insert_at', 'remove_at', 'set_at'];
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
        return eventNames.map(function (eventName) {
          return array.addListener(eventName, function (index, previous) {
            return handler.apply(array, [{
              newArr: array.getArray(),
              eventName: eventName,
              index: index,
              previous: previous
            }]);
          });
        });
      }, function (_handler, evListeners) {
        return evListeners.forEach(function (evListener) {
          return evListener.remove();
        });
      });
    }

    var MvcArrayMock =
    /*#__PURE__*/
    function () {
      function MvcArrayMock() {
        _classCallCheck(this, MvcArrayMock);

        this.vals = [];
        this.listeners = {
          remove_at: [],
          insert_at: [],
          set_at: []
        };
      }

      _createClass(MvcArrayMock, [{
        key: "clear",
        value: function clear() {
          for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
          }
        }
      }, {
        key: "getArray",
        value: function getArray() {
          return _toConsumableArray(this.vals);
        }
      }, {
        key: "getAt",
        value: function getAt(i) {
          return this.vals[i];
        }
      }, {
        key: "getLength",
        value: function getLength() {
          return this.vals.length;
        }
      }, {
        key: "insertAt",
        value: function insertAt(i, elem) {
          this.vals.splice(i, 0, elem);
          this.listeners.insert_at.forEach(function (listener) {
            return listener(i);
          });
        }
      }, {
        key: "pop",
        value: function pop() {
          var _this46 = this;

          var deleted = this.vals.pop();
          this.listeners.remove_at.forEach(function (listener) {
            return listener(_this46.vals.length, deleted);
          });
          return deleted;
        }
      }, {
        key: "push",
        value: function push(elem) {
          var _this47 = this;

          this.vals.push(elem);
          this.listeners.insert_at.forEach(function (listener) {
            return listener(_this47.vals.length - 1);
          });
          return this.vals.length;
        }
      }, {
        key: "removeAt",
        value: function removeAt(i) {
          var deleted = this.vals.splice(i, 1)[0];
          this.listeners.remove_at.forEach(function (listener) {
            return listener(i, deleted);
          });
          return deleted;
        }
      }, {
        key: "setAt",
        value: function setAt(i, elem) {
          var deleted = this.vals[i];
          this.vals[i] = elem;
          this.listeners.set_at.forEach(function (listener) {
            return listener(i, deleted);
          });
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          this.vals.forEach(callback);
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, handler) {
          var listenerArr = this.listeners[eventName];
          listenerArr.push(handler);
          return {
            remove: function remove() {
              listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
          };
        }
      }, {
        key: "bindTo",
        value: function bindTo() {
          throw new Error('Not implemented');
        }
      }, {
        key: "changed",
        value: function changed() {
          throw new Error('Not implemented');
        }
      }, {
        key: "get",
        value: function get() {
          throw new Error('Not implemented');
        }
      }, {
        key: "notify",
        value: function notify() {
          throw new Error('Not implemented');
        }
      }, {
        key: "set",
        value: function set() {
          throw new Error('Not implemented');
        }
      }, {
        key: "setValues",
        value: function setValues() {
          throw new Error('Not implemented');
        }
      }, {
        key: "unbind",
        value: function unbind() {
          throw new Error('Not implemented');
        }
      }, {
        key: "unbindAll",
        value: function unbindAll() {
          throw new Error('Not implemented');
        }
      }]);

      return MvcArrayMock;
    }();

    var PolygonManager =
    /*#__PURE__*/
    function () {
      function PolygonManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolygonManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
      }

      _createClass(PolygonManager, [{
        key: "addPolygon",
        value: function addPolygon(path) {
          var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex
          });

          this._polygons.set(path, polygonPromise);
        }
      }, {
        key: "updatePolygon",
        value: function updatePolygon(polygon) {
          var _this48 = this;

          var m = this._polygons.get(polygon);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this48._zone.run(function () {
              l.setPaths(polygon.paths);
            });
          });
        }
      }, {
        key: "setPolygonOptions",
        value: function setPolygonOptions(path, options) {
          return this._polygons.get(path).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolygon",
        value: function deletePolygon(paths) {
          var _this49 = this;

          var m = this._polygons.get(paths);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this49._zone.run(function () {
              l.setMap(null);

              _this49._polygons["delete"](paths);
            });
          });
        }
      }, {
        key: "getPath",
        value: function getPath(polygonDirective) {
          return this._polygons.get(polygonDirective).then(function (polygon) {
            return polygon.getPath().getArray();
          });
        }
      }, {
        key: "getPaths",
        value: function getPaths(polygonDirective) {
          return this._polygons.get(polygonDirective).then(function (polygon) {
            return polygon.getPaths().getArray().map(function (p) {
              return p.getArray();
            });
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, path) {
          var _this50 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this50._polygons.get(path).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this50._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(agmPolygon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var polygon, paths, pathsChanges$;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._polygons.get(agmPolygon);

                  case 2:
                    polygon = _context5.sent;
                    paths = polygon.getPaths();
                    pathsChanges$ = createMVCEventObservable(paths);
                    return _context5.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                      newArr: paths.getArray()
                    }), // in order to subscribe to them all
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                      parentMVEvent.newArr.map(function (chMVC, index) {
                        return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                          return {
                            parentMVEvent: parentMVEvent,
                            chMVCEvent: chMVCEvent,
                            pathIndex: index
                          };
                        }));
                      }))).pipe( // start the merged ob with an event signinifing change to parent
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: null,
                        pathIndex: null
                      }));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
                      var parentMVEvent = _ref3.parentMVEvent,
                          chMVCEvent = _ref3.chMVCEvent,
                          pathIndex = _ref3.pathIndex;
                      var retVal;

                      if (!chMVCEvent) {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          eventName: parentMVEvent.eventName,
                          index: parentMVEvent.index
                        };

                        if (parentMVEvent.previous) {
                          retVal.previous = parentMVEvent.previous.getArray();
                        }
                      } else {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          pathIndex: pathIndex,
                          eventName: chMVCEvent.eventName,
                          index: chMVCEvent.index
                        };

                        if (chMVCEvent.previous) {
                          retVal.previous = chMVCEvent.previous;
                        }
                      }

                      return retVal;
                    })));

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return PolygonManager;
    }();

    PolygonManager.ɵfac = function PolygonManager_Factory(t) {
      return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolygonManager,
      factory: PolygonManager.ɵfac
    });

    PolygonManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    var PolylineManager =
    /*#__PURE__*/
    function () {
      function PolylineManager(_mapsWrapper, _zone) {
        _classCallCheck(this, PolylineManager);

        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
      }

      _createClass(PolylineManager, [{
        key: "addPolyline",
        value: function addPolyline(line) {
          var _this51 = this;

          var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
            return [PolylineManager._convertPoints(line), PolylineManager._convertIcons(line)];
          }).then(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                path = _ref5[0],
                icons = _ref5[1];

            return _this51._mapsWrapper.createPolyline({
              clickable: line.clickable,
              draggable: line.draggable,
              editable: line.editable,
              geodesic: line.geodesic,
              strokeColor: line.strokeColor,
              strokeOpacity: line.strokeOpacity,
              strokeWeight: line.strokeWeight,
              visible: line.visible,
              zIndex: line.zIndex,
              path: path,
              icons: icons
            });
          });

          this._polylines.set(line, polylinePromise);
        }
      }, {
        key: "updatePolylinePoints",
        value: function updatePolylinePoints(line) {
          var _this52 = this;

          var path = PolylineManager._convertPoints(line);

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this52._zone.run(function () {
              return l.setPath(path);
            });
          });
        }
      }, {
        key: "updateIconSequences",
        value: function updateIconSequences(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this53 = this;

            var icons, m;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._mapsWrapper.getNativeMap();

                  case 2:
                    icons = PolylineManager._convertIcons(line);
                    m = this._polylines.get(line);

                    if (!(m == null)) {
                      _context6.next = 6;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 6:
                    return _context6.abrupt("return", m.then(function (l) {
                      return _this53._zone.run(function () {
                        return l.setOptions({
                          icons: icons
                        });
                      });
                    }));

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setPolylineOptions",
        value: function setPolylineOptions(line, options) {
          return this._polylines.get(line).then(function (l) {
            l.setOptions(options);
          });
        }
      }, {
        key: "deletePolyline",
        value: function deletePolyline(line) {
          var _this54 = this;

          var m = this._polylines.get(line);

          if (m == null) {
            return Promise.resolve();
          }

          return m.then(function (l) {
            return _this54._zone.run(function () {
              l.setMap(null);

              _this54._polylines["delete"](line);
            });
          });
        }
      }, {
        key: "getMVCPath",
        value: function getMVCPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var polyline;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this._polylines.get(agmPolyline);

                  case 2:
                    polyline = _context7.sent;
                    return _context7.abrupt("return", polyline.getPath());

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getPath",
        value: function getPath(agmPolyline) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getMVCPath(agmPolyline);

                  case 2:
                    return _context8.abrupt("return", _context8.sent.getArray());

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, line) {
          var _this55 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this55._polylines.get(line).then(function (l) {
              l.addListener(eventName, function (e) {
                return _this55._zone.run(function () {
                  return observer.next(e);
                });
              });
            });
          });
        }
      }, {
        key: "createPathEventObservable",
        value: function createPathEventObservable(line) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var mvcPath;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.getMVCPath(line);

                  case 2:
                    mvcPath = _context9.sent;
                    return _context9.abrupt("return", createMVCEventObservable(mvcPath));

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }], [{
        key: "_convertPoints",
        value: function _convertPoints(line) {
          var path = line._getPoints().map(function (point) {
            return {
              lat: point.latitude,
              lng: point.longitude
            };
          });

          return path;
        }
      }, {
        key: "_convertPath",
        value: function _convertPath(path) {
          var symbolPath = google.maps.SymbolPath[path];

          if (typeof symbolPath === 'number') {
            return symbolPath;
          } else {
            return path;
          }
        }
      }, {
        key: "_convertIcons",
        value: function _convertIcons(line) {
          var icons = line._getIcons().map(function (agmIcon) {
            return {
              fixedRotation: agmIcon.fixedRotation,
              offset: agmIcon.offset,
              repeat: agmIcon.repeat,
              icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight
              }
            };
          }); // prune undefineds;


          icons.forEach(function (icon) {
            Object.entries(icon).forEach(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  key = _ref7[0],
                  val = _ref7[1];

              if (typeof val === 'undefined') {
                delete icon[key];
              }
            });

            if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
              delete icon.icon.anchor;
            }
          });
          return icons;
        }
      }]);

      return PolylineManager;
    }();

    PolylineManager.ɵfac = function PolylineManager_Factory(t) {
      return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PolylineManager,
      factory: PolylineManager.ɵfac
    });

    PolylineManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    var RectangleManager =
    /*#__PURE__*/
    function () {
      function RectangleManager(_apiWrapper, _zone) {
        _classCallCheck(this, RectangleManager);

        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
      }

      _createClass(RectangleManager, [{
        key: "addRectangle",
        value: function addRectangle(rectangle) {
          var _this56 = this;

          this._apiWrapper.getNativeMap().then(function () {
            return _this56._rectangles.set(rectangle, _this56._apiWrapper.createRectangle({
              bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
              },
              clickable: rectangle.clickable,
              draggable: rectangle.draggable,
              editable: rectangle.editable,
              fillColor: rectangle.fillColor,
              fillOpacity: rectangle.fillOpacity,
              strokeColor: rectangle.strokeColor,
              strokeOpacity: rectangle.strokeOpacity,
              strokePosition: google.maps.StrokePosition[rectangle.strokePosition],
              strokeWeight: rectangle.strokeWeight,
              visible: rectangle.visible,
              zIndex: rectangle.zIndex
            }));
          });
        }
        /**
         * Removes the given rectangle from the map.
         */

      }, {
        key: "removeRectangle",
        value: function removeRectangle(rectangle) {
          var _this57 = this;

          return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);

            _this57._rectangles["delete"](rectangle);
          });
        }
      }, {
        key: "setOptions",
        value: function setOptions(rectangle, options) {
          return this._rectangles.get(rectangle).then(function (r) {
            var actualStrokePosition = options.strokePosition;
            options.strokePosition = google.maps.StrokePosition[actualStrokePosition];
            r.setOptions(options);
          });
        }
      }, {
        key: "getBounds",
        value: function getBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.getBounds();
          });
        }
      }, {
        key: "setBounds",
        value: function setBounds(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
              north: rectangle.north,
              east: rectangle.east,
              south: rectangle.south,
              west: rectangle.west
            });
          });
        }
      }, {
        key: "setEditable",
        value: function setEditable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
          });
        }
      }, {
        key: "setDraggable",
        value: function setDraggable(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
          });
        }
      }, {
        key: "setVisible",
        value: function setVisible(rectangle) {
          return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
          });
        }
      }, {
        key: "createEventObservable",
        value: function createEventObservable(eventName, rectangle) {
          var _this58 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subsrciber) {
            var listener = null;

            _this58._rectangles.get(rectangle).then(function (r) {
              listener = r.addListener(eventName, function (e) {
                return _this58._zone.run(function () {
                  return subsrciber.next(e);
                });
              });
            });

            return function () {
              if (listener !== null) {
                listener.remove();
              }
            };
          });
        }
      }]);

      return RectangleManager;
    }();

    RectangleManager.ɵfac = function RectangleManager_Factory(t) {
      return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RectangleManager,
      factory: RectangleManager.ɵfac
    });

    RectangleManager.ctorParameters = function () {
      return [{
        type: GoogleMapsAPIWrapper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    var layerId = 0;
    /*
     * This directive adds a bicycling layer to a google map instance
     * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
     * */

    var AgmBicyclingLayer =
    /*#__PURE__*/
    function () {
      function AgmBicyclingLayer(_manager) {
        _classCallCheck(this, AgmBicyclingLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */

        this.visible = true;
      }

      _createClass(AgmBicyclingLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addBicyclingLayer(this);

          this._addedToManager = true;
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmBicyclingLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmBicyclingLayer;
    }();

    AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) {
      return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmBicyclingLayer,
      selectors: [["agm-bicycling-layer"]],
      inputs: {
        visible: "visible"
      }
    });

    AgmBicyclingLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    AgmBicyclingLayer.propDecorators = {
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-bicycling-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var AgmCircle =
    /*#__PURE__*/
    function () {
      function AgmCircle(_manager) {
        _classCallCheck(this, AgmCircle);

        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */

        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */

        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */

        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        // tslint:disable-next-line: no-output-native

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */

        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmCircle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addCircle(this);

          this._circleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._circleAddedToManager) {
            return;
          } // tslint:disable: no-string-literal


          if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          }

          if (changes['radius']) {
            this._manager.setRadius(this);
          } // tslint:enable: no-string-literal


          this._updateCircleOptionsChanges(changes);
        }
      }, {
        key: "_updateCircleOptionsChanges",
        value: function _updateCircleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmCircle._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this59 = this;

          var events = new Map();
          events.set('center_changed', this.centerChange);
          events.set('click', this.circleClick);
          events.set('dblclick', this.circleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragstart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('radius_changed', this.radiusChange);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this59._eventSubscriptions.push(_this59._manager.createEventObservable(eventName, _this59).subscribe(function (value) {
              switch (eventName) {
                case 'radius_changed':
                  _this59._manager.getRadius(_this59).then(function (radius) {
                    return eventEmitter.emit(radius);
                  });

                  break;

                case 'center_changed':
                  _this59._manager.getCenter(_this59).then(function (center) {
                    return eventEmitter.emit({
                      lat: center.lat(),
                      lng: center.lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit(value);
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeCircle(this);
        }
        /**
         * Gets the LatLngBounds of this Circle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          return this._manager.getCenter(this);
        }
      }]);

      return AgmCircle;
    }();

    AgmCircle.ɵfac = function AgmCircle_Factory(t) {
      return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager));
    };

    AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmCircle,
      selectors: [["agm-circle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["circleDraggable", "draggable"],
        editable: "editable",
        radius: "radius",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        latitude: "latitude",
        longitude: "longitude",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        centerChange: "centerChange",
        circleClick: "circleClick",
        circleDblClick: "circleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        radiusChange: "radiusChange",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmCircle.ctorParameters = function () {
      return [{
        type: CircleManager
      }];
    };

    AgmCircle.propDecorators = {
      latitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      longitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['circleDraggable']
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      centerChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      circleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      circleDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      radiusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-circle'
        }]
      }], function () {
        return [{
          type: CircleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['circleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        circleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        radiusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var layerId$1 = 0;
    /**
     * AgmDataLayer enables the user to add data layers to the map.
     *
     * ### Example
     * ```typescript
     * import { Component } from 'angular2/core';
     * import { AgmMap, AgmDataLayer } from
     * 'angular-google-maps/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  directives: [AgmMap, AgmDataLayer],
     *  styles: [`
     *    .agm-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
     * 	  </agm-data-layer>
     * </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = -25.274449;
     *   lng: number = 133.775060;
     *   zoom: number = 5;
     *
     * clicked(clickEvent) {
     *    console.log(clickEvent);
     *  }
     *
     *  styleFunc(feature) {
     *    return ({
     *      clickable: false,
     *      fillColor: feature.getProperty('color'),
     *      strokeWeight: 1
     *    });
     *  }
     *
     *  geoJsonObject: Object = {
     *    "type": "FeatureCollection",
     *    "features": [
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "G",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "71"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
     *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
     *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
     *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
     *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
     *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
     *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
     *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "red",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
     *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
     *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
     *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
     *            ],
     *            [
     *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
     *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "o",
     *          "color": "yellow",
     *          "rank": "15",
     *          "ascii": "111"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
     *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
     *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
     *              [132.71, -25.64], [131.87, -25.76]
     *            ],
     *            [
     *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
     *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "g",
     *          "color": "blue",
     *          "rank": "7",
     *          "ascii": "103"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
     *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
     *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
     *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
     *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
     *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
     *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
     *            ],
     *            [
     *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
     *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "l",
     *          "color": "green",
     *          "rank": "12",
     *          "ascii": "108"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
     *            ]
     *          ]
     *        }
     *      },
     *      {
     *        "type": "Feature",
     *        "properties": {
     *          "letter": "e",
     *          "color": "red",
     *          "rank": "5",
     *          "ascii": "101"
     *        },
     *        "geometry": {
     *          "type": "Polygon",
     *          "coordinates": [
     *            [
     *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
     *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
     *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
     *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
     *              [144.31, -28.26], [144.14, -27.41]
     *            ],
     *            [
     *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
     *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
     *            ]
     *          ]
     *        }
     *      }
     *    ]
     *  };
     * }
     * ```
     */

    var AgmDataLayer =
    /*#__PURE__*/
    function () {
      function AgmDataLayer(_manager) {
        _classCallCheck(this, AgmDataLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */

        this.geoJson = null;
      }

      _createClass(AgmDataLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addDataLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this60 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this60.layerClick.emit(ev);
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this60._manager.createEventObservable(obj.name, _this60).subscribe(obj.handler);

            _this60._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmDataLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this61 = this;

          if (!this._addedToManager) {
            return;
          } // tslint:disable-next-line: no-string-literal


          var geoJsonChange = changes['geoJson'];

          if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
          }

          var dataOptions = AgmDataLayer._dataOptionsAttributes.reduce(function (options, k) {
            return options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this61[k];
          }, {});

          this._manager.setDataOptions(this, dataOptions);
        }
      }]);

      return AgmDataLayer;
    }();

    AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) {
      return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager));
    };

    AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmDataLayer,
      selectors: [["agm-data-layer"]],
      inputs: {
        geoJson: "geoJson",
        style: "style"
      },
      outputs: {
        layerClick: "layerClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmDataLayer._dataOptionsAttributes = ['style'];

    AgmDataLayer.ctorParameters = function () {
      return [{
        type: DataLayerManager
      }];
    };

    AgmDataLayer.propDecorators = {
      layerClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      geoJson: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-data-layer'
        }]
      }], function () {
        return [{
          type: DataLayerManager
        }];
      }, {
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        geoJson: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * Adds the given directive to the auto fit bounds feature when the value is true.
     * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
     * @example
     * <agm-marker [agmFitBounds]="true"></agm-marker>
     */


    var AgmFitBounds =
    /*#__PURE__*/
    function () {
      function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        _classCallCheck(this, AgmFitBounds);

        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */

        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
      }
      /**
       * @internal
       */


      _createClass(AgmFitBounds, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._updateBounds();
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
            return _this62._updateBounds(details);
          });
        }
        /*
         Either the location changed, or visible status changed.
         Possible state changes are
         invisible -> visible
         visible -> invisible
         visible -> visible (new location)
        */

      }, {
        key: "_updateBounds",
        value: function _updateBounds(newFitBoundsDetails) {
          // either visibility will change, or location, so remove the old one anyway
          if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here

          }

          if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
          }

          if (!this._latestFitBoundsDetails) {
            return;
          }

          if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
          }
        }
        /**
         * @internal
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed$.next();

          this._destroyed$.complete();

          if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
          }
        }
      }]);

      return AgmFitBounds;
    }();

    AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) {
      return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService));
    };

    AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmFitBounds,
      selectors: [["", "agmFitBounds", ""]],
      inputs: {
        agmFitBounds: "agmFitBounds"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmFitBounds.ctorParameters = function () {
      return [{
        type: FitBoundsAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: FitBoundsService
      }];
    };

    AgmFitBounds.propDecorators = {
      agmFitBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[agmFitBounds]'
        }]
      }], function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      }, {
        agmFitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var infoWindowId = 0;
    /**
     * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        <agm-info-window [disableAutoPan]="true">
     *          Hi, this is the content of the <strong>info window</strong>
     *        </agm-info-window>
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmInfoWindow =
    /*#__PURE__*/
    function () {
      function AgmInfoWindow(_infoWindowManager, _el) {
        _classCallCheck(this, AgmInfoWindow);

        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */

        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */

        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
      }

      _createClass(AgmInfoWindow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

          this._infoWindowManager.addInfoWindow(this);

          this._infoWindowAddedToManager = true;

          this._updateOpenState();

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._infoWindowAddedToManager) {
            return;
          } // tslint:disable: no-string-literal


          if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
          }

          if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
          }

          if (changes['isOpen']) {
            this._updateOpenState();
          }

          this._setInfoWindowOptions(changes);
        } // tslint:enable: no-string-literal

      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this63 = this;

          this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this63.isOpen = false;

            _this63.infoWindowClose.emit();
          });
        }
      }, {
        key: "_updateOpenState",
        value: function _updateOpenState() {
          this.isOpen ? this.open() : this.close();
        }
      }, {
        key: "_setInfoWindowOptions",
        value: function _setInfoWindowOptions(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._infoWindowManager.setOptions(this, options);
        }
        /**
         * Opens the info window.
         */

      }, {
        key: "open",
        value: function open() {
          return this._infoWindowManager.open(this);
        }
        /**
         * Closes the info window.
         */

      }, {
        key: "close",
        value: function close() {
          var _this64 = this;

          return this._infoWindowManager.close(this).then(function () {
            _this64.infoWindowClose.emit();
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmInfoWindow-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._infoWindowManager.deleteInfoWindow(this);
        }
      }]);

      return AgmInfoWindow;
    }();

    AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) {
      return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmInfoWindow,
      selectors: [["agm-info-window"]],
      inputs: {
        isOpen: "isOpen",
        latitude: "latitude",
        longitude: "longitude",
        disableAutoPan: "disableAutoPan",
        zIndex: "zIndex",
        maxWidth: "maxWidth"
      },
      outputs: {
        infoWindowClose: "infoWindowClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "agm-info-window-content"]],
      template: function AgmInfoWindow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

    AgmInfoWindow.ctorParameters = function () {
      return [{
        type: InfoWindowManager
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    AgmInfoWindow.propDecorators = {
      latitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      longitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableAutoPan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      infoWindowClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-info-window',
          template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }]
      }], function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoWindowClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableAutoPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var layerId$2 = 0;

    var AgmKmlLayer =
    /*#__PURE__*/
    function () {
      function AgmKmlLayer(_manager) {
        _classCallCheck(this, AgmKmlLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */

        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */

        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */

        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */

        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */

        this.url = null;
        /**
         * The z-index of the layer.
         */

        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */

        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */

        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */

        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmKmlLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addKmlLayer(this);

          this._addedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._addedToManager) {
            return;
          }

          this._updatePolygonOptions(changes);
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          var options = Object.keys(changes).filter(function (k) {
            return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});

          if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this65 = this;

          var listeners = [{
            name: 'click',
            handler: function handler(ev) {
              return _this65.layerClick.emit(ev);
            }
          }, {
            name: 'defaultviewport_changed',
            handler: function handler() {
              return _this65.defaultViewportChange.emit();
            }
          }, {
            name: 'status_changed',
            handler: function handler() {
              return _this65.statusChange.emit();
            }
          }];
          listeners.forEach(function (obj) {
            var os = _this65._manager.createEventObservable(obj.name, _this65).subscribe(obj.handler);

            _this65._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmKmlLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmKmlLayer;
    }();

    AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) {
      return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager));
    };

    AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmKmlLayer,
      selectors: [["agm-kml-layer"]],
      inputs: {
        clickable: "clickable",
        preserveViewport: "preserveViewport",
        screenOverlays: "screenOverlays",
        suppressInfoWindows: "suppressInfoWindows",
        url: "url",
        zIndex: "zIndex"
      },
      outputs: {
        layerClick: "layerClick",
        defaultViewportChange: "defaultViewportChange",
        statusChange: "statusChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

    AgmKmlLayer.ctorParameters = function () {
      return [{
        type: KmlLayerManager
      }];
    };

    AgmKmlLayer.propDecorators = {
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preserveViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      screenOverlays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      suppressInfoWindows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      layerClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      defaultViewportChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      statusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-kml-layer'
        }]
      }], function () {
        return [{
          type: KmlLayerManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        screenOverlays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        suppressInfoWindows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        defaultViewportChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        statusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    var AgmMapControl = function AgmMapControl() {
      _classCallCheck(this, AgmMapControl);
    };

    AgmMapControl.ɵfac = function AgmMapControl_Factory(t) {
      return new (t || AgmMapControl)();
    };

    AgmMapControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMapControl,
      inputs: {
        position: "position"
      }
    });
    AgmMapControl.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
      }], null, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var AgmFullscreenControl =
    /*#__PURE__*/
    function (_AgmMapControl) {
      _inherits(AgmFullscreenControl, _AgmMapControl);

      var _super2 = _createSuper(AgmFullscreenControl);

      function AgmFullscreenControl() {
        _classCallCheck(this, AgmFullscreenControl);

        return _super2.apply(this, arguments);
      }

      _createClass(AgmFullscreenControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            fullscreenControl: true,
            fullscreenControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position]
            }
          };
        }
      }]);

      return AgmFullscreenControl;
    }(AgmMapControl);

    AgmFullscreenControl.ɵfac = function AgmFullscreenControl_Factory(t) {
      return ɵAgmFullscreenControl_BaseFactory(t || AgmFullscreenControl);
    };

    AgmFullscreenControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmFullscreenControl,
      selectors: [["agm-fullscreen-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmFullscreenControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAgmFullscreenControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmFullscreenControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFullscreenControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-fullscreen-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmFullscreenControl
          }]
        }]
      }], null, null);
    })();

    var AgmMapTypeControl =
    /*#__PURE__*/
    function (_AgmMapControl2) {
      _inherits(AgmMapTypeControl, _AgmMapControl2);

      var _super3 = _createSuper(AgmMapTypeControl);

      function AgmMapTypeControl() {
        _classCallCheck(this, AgmMapTypeControl);

        return _super3.apply(this, arguments);
      }

      _createClass(AgmMapTypeControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            mapTypeControl: true,
            mapTypeControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position],
              style: this.style && google.maps.MapTypeControlStyle[this.style],
              mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(function (mapTypeId) {
                return google.maps.MapTypeId[mapTypeId];
              })
            }
          };
        }
      }]);

      return AgmMapTypeControl;
    }(AgmMapControl);

    AgmMapTypeControl.ɵfac = function AgmMapTypeControl_Factory(t) {
      return ɵAgmMapTypeControl_BaseFactory(t || AgmMapTypeControl);
    };

    AgmMapTypeControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMapTypeControl,
      selectors: [["agm-map-type-control"]],
      inputs: {
        mapTypeIds: "mapTypeIds",
        style: "style"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmMapTypeControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    AgmMapTypeControl.propDecorators = {
      mapTypeIds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    var ɵAgmMapTypeControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmMapTypeControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapTypeControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-map-type-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmMapTypeControl
          }]
        }]
      }], null, {
        mapTypeIds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var AgmPanControl =
    /*#__PURE__*/
    function (_AgmMapControl3) {
      _inherits(AgmPanControl, _AgmMapControl3);

      var _super4 = _createSuper(AgmPanControl);

      function AgmPanControl() {
        _classCallCheck(this, AgmPanControl);

        return _super4.apply(this, arguments);
      }

      _createClass(AgmPanControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            panControl: true,
            panControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position]
            }
          };
        }
      }]);

      return AgmPanControl;
    }(AgmMapControl);

    AgmPanControl.ɵfac = function AgmPanControl_Factory(t) {
      return ɵAgmPanControl_BaseFactory(t || AgmPanControl);
    };

    AgmPanControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPanControl,
      selectors: [["agm-pan-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmPanControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAgmPanControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmPanControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPanControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-pan-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmPanControl
          }]
        }]
      }], null, null);
    })();

    var AgmRotateControl =
    /*#__PURE__*/
    function (_AgmMapControl4) {
      _inherits(AgmRotateControl, _AgmMapControl4);

      var _super5 = _createSuper(AgmRotateControl);

      function AgmRotateControl() {
        _classCallCheck(this, AgmRotateControl);

        return _super5.apply(this, arguments);
      }

      _createClass(AgmRotateControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            rotateControl: true,
            rotateControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position]
            }
          };
        }
      }]);

      return AgmRotateControl;
    }(AgmMapControl);

    AgmRotateControl.ɵfac = function AgmRotateControl_Factory(t) {
      return ɵAgmRotateControl_BaseFactory(t || AgmRotateControl);
    };

    AgmRotateControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmRotateControl,
      selectors: [["agm-rotate-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmRotateControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAgmRotateControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmRotateControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRotateControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-rotate-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmRotateControl
          }]
        }]
      }], null, null);
    })();

    var AgmScaleControl =
    /*#__PURE__*/
    function (_AgmMapControl5) {
      _inherits(AgmScaleControl, _AgmMapControl5);

      var _super6 = _createSuper(AgmScaleControl);

      function AgmScaleControl() {
        _classCallCheck(this, AgmScaleControl);

        return _super6.apply(this, arguments);
      }

      _createClass(AgmScaleControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            scaleControl: true
          };
        }
      }]);

      return AgmScaleControl;
    }(AgmMapControl);

    AgmScaleControl.ɵfac = function AgmScaleControl_Factory(t) {
      return ɵAgmScaleControl_BaseFactory(t || AgmScaleControl);
    };

    AgmScaleControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmScaleControl,
      selectors: [["agm-scale-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmScaleControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAgmScaleControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmScaleControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmScaleControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-scale-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmScaleControl
          }]
        }]
      }], null, null);
    })();

    var AgmStreetViewControl =
    /*#__PURE__*/
    function (_AgmMapControl6) {
      _inherits(AgmStreetViewControl, _AgmMapControl6);

      var _super7 = _createSuper(AgmStreetViewControl);

      function AgmStreetViewControl() {
        _classCallCheck(this, AgmStreetViewControl);

        return _super7.apply(this, arguments);
      }

      _createClass(AgmStreetViewControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            streetViewControl: true,
            streetViewControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position]
            }
          };
        }
      }]);

      return AgmStreetViewControl;
    }(AgmMapControl);

    AgmStreetViewControl.ɵfac = function AgmStreetViewControl_Factory(t) {
      return ɵAgmStreetViewControl_BaseFactory(t || AgmStreetViewControl);
    };

    AgmStreetViewControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmStreetViewControl,
      selectors: [["agm-street-view-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmStreetViewControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵAgmStreetViewControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmStreetViewControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmStreetViewControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-street-view-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmStreetViewControl
          }]
        }]
      }], null, null);
    })();

    var AgmZoomControl =
    /*#__PURE__*/
    function (_AgmMapControl7) {
      _inherits(AgmZoomControl, _AgmMapControl7);

      var _super8 = _createSuper(AgmZoomControl);

      function AgmZoomControl() {
        _classCallCheck(this, AgmZoomControl);

        return _super8.apply(this, arguments);
      }

      _createClass(AgmZoomControl, [{
        key: "getOptions",
        value: function getOptions() {
          return {
            zoomControl: true,
            zoomControlOptions: {
              position: this.position && google.maps.ControlPosition[this.position],
              style: this.style && google.maps.ZoomControlStyle[this.style]
            }
          };
        }
      }]);

      return AgmZoomControl;
    }(AgmMapControl);

    AgmZoomControl.ɵfac = function AgmZoomControl_Factory(t) {
      return ɵAgmZoomControl_BaseFactory(t || AgmZoomControl);
    };

    AgmZoomControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmZoomControl,
      selectors: [["agm-zoom-control"]],
      inputs: {
        style: "style"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: AgmMapControl,
        useExisting: AgmZoomControl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    AgmZoomControl.propDecorators = {
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    var ɵAgmZoomControl_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmZoomControl);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmZoomControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-map agm-zoom-control',
          providers: [{
            provide: AgmMapControl,
            useExisting: AgmZoomControl
          }]
        }]
      }], null, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * AgmMap renders a Google Map.
     * **Important note**: To be able see a map in the browser, you have to define a height for the
     * element `agm-map`.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *    </agm-map>
     *  `
     * })
     * ```
     */


    var AgmMap =
    /*#__PURE__*/
    function () {
      function AgmMap(_elem, _mapsWrapper, // tslint:disable-next-line: ban-types
      _platformId, _fitBoundsService, _zone) {
        _classCallCheck(this, AgmMap);

        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */

        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */

        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */

        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */

        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */

        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */

        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */

        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */

        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */

        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */

        this.fitBounds = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */

        this.mapTypeId = 'ROADMAP';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */

        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */

        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */

        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */

        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        // tslint:disable-next-line: max-line-length

        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */

        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */

        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */

        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */

        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */

        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */

        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /** @internal */


      _createClass(AgmMap, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
          } // todo: this should be solved with a new component and a viewChild decorator


          var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

          this._initMapInstance(container);
        }
      }, {
        key: "_initMapInstance",
        value: function _initMapInstance(el) {
          var _this66 = this;

          this._mapsWrapper.createMap(el, {
            center: {
              lat: this.latitude || 0,
              lng: this.longitude || 0
            },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            mapTypeId: this.mapTypeId.toLocaleLowerCase(),
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction
          }).then(function () {
            return _this66._mapsWrapper.getNativeMap();
          }).then(function (map) {
            return _this66.mapReady.emit(map);
          }); // register event listeners


          this._handleMapCenterChange();

          this._handleMapZoomChange();

          this._handleMapMouseEvents();

          this._handleBoundsChange();

          this._handleMapTypeIdChange();

          this._handleTilesLoadedEvent();

          this._handleIdleEvent();

          this._handleControlChange();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe all registered observable subscriptions
          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          }); // remove all listeners from the map instance


          this._mapsWrapper.clearInstanceListeners();

          if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
          }
        }
        /* @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._updateMapOptionsChanges(changes);

          this._updatePosition(changes);
        }
      }, {
        key: "_updateMapOptionsChanges",
        value: function _updateMapOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmMap._mapOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          this._mapsWrapper.setMapOptions(options);
        }
        /**
         * Triggers a resize event on the google map instance.
         * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
         * Returns a promise that gets resolved after the event was triggered.
         */

      }, {
        key: "triggerResize",
        value: function triggerResize() {
          var _this67 = this;

          var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          // Note: When we would trigger the resize event and show the map in the same turn (which is a
          // common case for triggering a resize event), then the resize event would not
          // work (to show the map), so we trigger the event in a timeout.
          return new Promise(function (resolve) {
            setTimeout(function () {
              return _this67._mapsWrapper.triggerMapEvent('resize').then(function () {
                if (recenter) {
                  _this67.fitBounds != null ? _this67._fitBounds() : _this67._setCenter();
                }

                resolve();
              });
            });
          });
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition(changes) {
          // tslint:disable: no-string-literal
          if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
            // no position update needed
            return;
          } // tslint:enable: no-string-literal
          // we prefer fitBounds in changes


          if ('fitBounds' in changes) {
            this._fitBounds();

            return;
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          this._setCenter();
        }
      }, {
        key: "_setCenter",
        value: function _setCenter() {
          var newCenter = {
            lat: this.latitude,
            lng: this.longitude
          };

          if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
          } else {
            this._mapsWrapper.setCenter(newCenter);
          }
        }
      }, {
        key: "_fitBounds",
        value: function _fitBounds() {
          switch (this.fitBounds) {
            case true:
              this._subscribeToFitBoundsUpdates();

              break;

            case false:
              if (this._fitBoundsSubscription) {
                this._fitBoundsSubscription.unsubscribe();
              }

              break;

            default:
              if (this._fitBoundsSubscription) {
                this._fitBoundsSubscription.unsubscribe();
              }

              this._updateBounds(this.fitBounds, this.fitBoundsPadding);

          }
        }
      }, {
        key: "_subscribeToFitBoundsUpdates",
        value: function _subscribeToFitBoundsUpdates() {
          var _this68 = this;

          this._zone.runOutsideAngular(function () {
            _this68._fitBoundsSubscription = _this68._fitBoundsService.getBounds$().subscribe(function (b) {
              _this68._zone.run(function () {
                return _this68._updateBounds(b, _this68.fitBoundsPadding);
              });
            });
          });
        }
      }, {
        key: "_updateBounds",
        value: function _updateBounds(bounds, padding) {
          if (!bounds) {
            return;
          }

          if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            var newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
          }

          if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);

            return;
          }

          this._mapsWrapper.fitBounds(bounds, padding);
        }
      }, {
        key: "_isLatLngBoundsLiteral",
        value: function _isLatLngBoundsLiteral(bounds) {
          return bounds != null && bounds.extend === undefined;
        }
      }, {
        key: "_handleMapCenterChange",
        value: function _handleMapCenterChange() {
          var _this69 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this69._mapsWrapper.getCenter().then(function (center) {
              _this69.latitude = center.lat();
              _this69.longitude = center.lng();

              _this69.centerChange.emit({
                lat: _this69.latitude,
                lng: _this69.longitude
              });
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleBoundsChange",
        value: function _handleBoundsChange() {
          var _this70 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this70._mapsWrapper.getBounds().then(function (bounds) {
              _this70.boundsChange.emit(bounds);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapTypeIdChange",
        value: function _handleMapTypeIdChange() {
          var _this71 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this71._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
              _this71.mapTypeIdChange.emit(mapTypeId);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapZoomChange",
        value: function _handleMapZoomChange() {
          var _this72 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this72._mapsWrapper.getZoom().then(function (z) {
              _this72.zoom = z;

              _this72.zoomChange.emit(z);
            });
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleIdleEvent",
        value: function _handleIdleEvent() {
          var _this73 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
            _this73.idle.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleTilesLoadedEvent",
        value: function _handleTilesLoadedEvent() {
          var _this74 = this;

          var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
            return _this74.tilesLoaded.emit(void 0);
          });

          this._observableSubscriptions.push(s);
        }
      }, {
        key: "_handleMapMouseEvents",
        value: function _handleMapMouseEvents() {
          var _this75 = this;

          var events = [{
            name: 'click',
            emitter: this.mapClick
          }, {
            name: 'rightclick',
            emitter: this.mapRightClick
          }, {
            name: 'dblclick',
            emitter: this.mapDblClick
          }];
          events.forEach(function (e) {
            var s = _this75._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 1),
                  event = _ref9[0];

              // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
              if (event.placeId && !_this75.showDefaultInfoWindow) {
                event.stop();
              }

              e.emitter.emit(event);
            });

            _this75._observableSubscriptions.push(s);
          });
        }
      }, {
        key: "_handleControlChange",
        value: function _handleControlChange() {
          var _this76 = this;

          this._setControls();

          this.mapControls.changes.subscribe(function () {
            return _this76._setControls();
          });
        }
      }, {
        key: "_setControls",
        value: function _setControls() {
          var _this77 = this;

          var controlOptions = {
            fullscreenControl: !this.disableDefaultUI,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: !this.disableDefaultUI,
            zoomControl: !this.disableDefaultUI
          };

          this._mapsWrapper.getNativeMap().then(function () {
            _this77.mapControls.forEach(function (control) {
              return Object.assign(controlOptions, control.getOptions());
            });

            _this77._mapsWrapper.setMapOptions(controlOptions);
          });
        }
      }]);

      return AgmMap;
    }();

    AgmMap.ɵfac = function AgmMap_Factory(t) {
      return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgmMap,
      selectors: [["agm-map"]],
      contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmMapControl, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapControls = _t);
        }
      },
      inputs: {
        longitude: "longitude",
        latitude: "latitude",
        zoom: "zoom",
        draggable: ["mapDraggable", "draggable"],
        disableDoubleClickZoom: "disableDoubleClickZoom",
        disableDefaultUI: "disableDefaultUI",
        scrollwheel: "scrollwheel",
        keyboardShortcuts: "keyboardShortcuts",
        styles: "styles",
        usePanning: "usePanning",
        fitBounds: "fitBounds",
        mapTypeId: "mapTypeId",
        clickableIcons: "clickableIcons",
        showDefaultInfoWindow: "showDefaultInfoWindow",
        gestureHandling: "gestureHandling",
        tilt: "tilt",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        controlSize: "controlSize",
        backgroundColor: "backgroundColor",
        draggableCursor: "draggableCursor",
        draggingCursor: "draggingCursor",
        fitBoundsPadding: "fitBoundsPadding",
        restriction: "restriction"
      },
      outputs: {
        mapClick: "mapClick",
        mapRightClick: "mapRightClick",
        mapDblClick: "mapDblClick",
        centerChange: "centerChange",
        boundsChange: "boundsChange",
        mapTypeIdChange: "mapTypeIdChange",
        idle: "idle",
        zoomChange: "zoomChange",
        mapReady: "mapReady",
        tilesLoaded: "tilesLoaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
      template: function AgmMap_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
    });
    /**
     * Map option attributes that can change over time
     */

    AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

    AgmMap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: GoogleMapsAPIWrapper
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: FitBoundsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AgmMap.propDecorators = {
      longitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      latitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      controlSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mapDraggable']
      }],
      disableDoubleClickZoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableDefaultUI: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrollwheel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggableCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggingCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      keyboardShortcuts: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      styles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      usePanning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fitBoundsPadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      mapTypeId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clickableIcons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showDefaultInfoWindow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      gestureHandling: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tilt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      restriction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      mapClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapRightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      centerChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      boundsChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapTypeIdChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      idle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      zoomChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      tilesLoaded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mapControls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [AgmMapControl]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'agm-map',
          providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
          template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
          styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mapDraggable']
        }],
        disableDoubleClickZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disableDefaultUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollwheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardShortcuts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        usePanning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapTypeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickableIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDefaultInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gestureHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapTypeIdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        zoomChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mapReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tilesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        controlSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggableCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggingCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fitBoundsPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restriction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mapControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmMapControl]
        }]
      });
    })();

    var markerId = 0;
    /**
     * AgmMarker renders a map marker inside a {@link AgmMap}.
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *      </agm-marker>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmMarker =
    /*#__PURE__*/
    function () {
      function AgmMarker(_markerManager) {
        _classCallCheck(this, AgmMarker);

        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If true, the marker is visible
         */

        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */

        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */

        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */

        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename

        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         */

        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */

        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */

        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */

        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        // tslint:disable-next-line: no-output-native

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */

        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
      }
      /* @internal */


      _createClass(AgmMarker, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this78 = this;

          this.handleInfoWindowUpdate();
          this.infoWindow.changes.subscribe(function () {
            return _this78.handleInfoWindowUpdate();
          });
        }
      }, {
        key: "handleInfoWindowUpdate",
        value: function handleInfoWindowUpdate() {
          var _this79 = this;

          if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
          }

          this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this79;
          });
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
          }

          if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
          }

          if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
          }

          if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);

            this._updateFitBoundsDetails();

            this._markerAddedToManger = true;

            this._addEventListeners();

            return;
          } // tslint:disable: no-string-literal


          if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);

            this._updateFitBoundsDetails();
          }

          if (changes['title']) {
            this._markerManager.updateTitle(this);
          }

          if (changes['label']) {
            this._markerManager.updateLabel(this);
          }

          if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
          }

          if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
          }

          if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
          }

          if (changes['visible']) {
            this._markerManager.updateVisible(this);
          }

          if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
          }

          if (changes['clickable']) {
            this._markerManager.updateClickable(this);
          }

          if (changes['animation']) {
            this._markerManager.updateAnimation(this);
          } // tslint:enable: no-string-literal

        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this._fitBoundsDetails$.asObservable();
        }
      }, {
        key: "_updateFitBoundsDetails",
        value: function _updateFitBoundsDetails() {
          this._fitBoundsDetails$.next({
            latLng: {
              lat: this.latitude,
              lng: this.longitude
            }
          });
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this80 = this;

          var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this80.openInfoWindow) {
              _this80.infoWindow.forEach(function (infoWindow) {
                return infoWindow.open();
              });
            }

            _this80.markerClick.emit(_this80);
          });

          this._observableSubscriptions.push(cs);

          var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
            _this80.markerDblClick.emit(null);
          });

          this._observableSubscriptions.push(dcs);

          var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this80.markerRightClick.emit(null);
          });

          this._observableSubscriptions.push(rc);

          var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
            return _this80.dragStart.emit(e);
          });

          this._observableSubscriptions.push(ds);

          var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
            return _this80.drag.emit(e);
          });

          this._observableSubscriptions.push(d);

          var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
            return _this80.dragEnd.emit(e);
          });

          this._observableSubscriptions.push(de);

          var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
            return _this80.mouseOver.emit(e);
          });

          this._observableSubscriptions.push(mover);

          var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
            return _this80.mouseOut.emit(e);
          });

          this._observableSubscriptions.push(mout);

          var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
            _this80.animationChange.emit(_this80.animation);
          });

          this._observableSubscriptions.push(anChng);
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return 'AgmMarker-' + this._id.toString();
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmMarker;
    }();

    AgmMarker.ɵfac = function AgmMarker_Factory(t) {
      return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager));
    };

    AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmMarker,
      selectors: [["agm-marker"]],
      contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
        }
      },
      inputs: {
        draggable: ["markerDraggable", "draggable"],
        visible: "visible",
        openInfoWindow: "openInfoWindow",
        opacity: "opacity",
        zIndex: "zIndex",
        clickable: ["markerClickable", "clickable"],
        latitude: "latitude",
        longitude: "longitude",
        title: "title",
        label: "label",
        iconUrl: "iconUrl",
        animation: "animation"
      },
      outputs: {
        animationChange: "animationChange",
        markerClick: "markerClick",
        markerDblClick: "markerDblClick",
        markerRightClick: "markerRightClick",
        dragStart: "dragStart",
        drag: "drag",
        dragEnd: "dragEnd",
        mouseOver: "mouseOver",
        mouseOut: "mouseOut"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmMarker;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmMarker.ctorParameters = function () {
      return [{
        type: MarkerManager
      }];
    };

    AgmMarker.propDecorators = {
      latitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      longitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['markerDraggable']
      }],
      iconUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      openInfoWindow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      opacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['markerClickable']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      animationChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      markerClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      markerDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      markerRightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      infoWindow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [AgmInfoWindow]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-marker',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmMarker;
            })
          }]
        }]
      }], function () {
        return [{
          type: MarkerManager
        }];
      }, {
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerDraggable']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        openInfoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['markerClickable']
        }],
        animationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        markerRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        infoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmInfoWindow]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * AgmPolygon renders a polygon on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    agm-map {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polygon [paths]="paths">
     *      </agm-polygon>
     *    </agm-map>
     *  `
     * })
     * export class MyMapCmp {
     *   lat: number = 0;
     *   lng: number = 0;
     *   zoom: number = 10;
     *   paths: LatLngLiteral[] = [
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ]
     *   // Nesting paths will create a hole where they overlap;
     *   nestedPaths: LatLngLiteral[][] = [[
     *     { lat: 0,  lng: 10 },
     *     { lat: 0,  lng: 20 },
     *     { lat: 10, lng: 20 },
     *     { lat: 10, lng: 10 },
     *     { lat: 0,  lng: 10 }
     *   ], [
     *     { lat: 0, lng: 15 },
     *     { lat: 0, lng: 20 },
     *     { lat: 5, lng: 20 },
     *     { lat: 5, lng: 15 },
     *     { lat: 0, lng: 15 }
     *   ]]
     * }
     * ```
     */


    var AgmPolygon =
    /*#__PURE__*/
    function () {
      function AgmPolygon(_polygonManager) {
        _classCallCheck(this, AgmPolygon);

        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */

        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */

        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */

        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */

        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */

        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */

        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */

        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */

        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */

        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */

        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */

        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */

        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */

        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
      }
      /** @internal */


      _createClass(AgmPolygon, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (!this._polygonAddedToManager) {
            this._init();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polygonAddedToManager) {
            this._init();

            return;
          }

          this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polygonManager.addPolygon(this);

          this._polygonAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this81 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this81.polyClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this81.polyDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this81.polyDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this81.polyDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this81.polyDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this81.polyMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this81.polyMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this81.polyMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this81.polyMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this81.polyMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this81.polyRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this81._polygonManager.createEventObservable(obj.name, _this81).subscribe(obj.handler);

            _this81._subscriptions.push(os);
          });

          this._polygonManager.createPathEventObservable(this).then(function (paths$) {
            var os = paths$.subscribe(function (pathEvent) {
              return _this81.polyPathsChange.emit(pathEvent);
            });

            _this81._subscriptions.push(os);
          });
        }
      }, {
        key: "_updatePolygonOptions",
        value: function _updatePolygonOptions(changes) {
          return Object.keys(changes).filter(function (k) {
            return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1;
          }).reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
          }, {});
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polygonManager.getPath(this);
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return this._polygonManager.getPaths(this);
        }
      }]);

      return AgmPolygon;
    }();

    AgmPolygon.ɵfac = function AgmPolygon_Factory(t) {
      return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager));
    };

    AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolygon,
      selectors: [["agm-polygon"]],
      inputs: {
        clickable: "clickable",
        draggable: ["polyDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        paths: "paths",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        visible: "visible",
        zIndex: "zIndex"
      },
      outputs: {
        polyClick: "polyClick",
        polyDblClick: "polyDblClick",
        polyDrag: "polyDrag",
        polyDragEnd: "polyDragEnd",
        polyDragStart: "polyDragStart",
        polyMouseDown: "polyMouseDown",
        polyMouseMove: "polyMouseMove",
        polyMouseOut: "polyMouseOut",
        polyMouseOver: "polyMouseOver",
        polyMouseUp: "polyMouseUp",
        polyRightClick: "polyRightClick",
        polyPathsChange: "polyPathsChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

    AgmPolygon.ctorParameters = function () {
      return [{
        type: PolygonManager
      }];
    };

    AgmPolygon.propDecorators = {
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['polyDraggable']
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      geodesic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      paths: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      polyClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyMouseDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyMouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyMouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyMouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyMouseUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyRightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyPathsChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polygon'
        }]
      }], function () {
        return [{
          type: PolygonManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polyDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        polyClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
     * or custom icons either along the entire line, or in a specific part of it.
     * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
     *
     * ### Example
     * ```html
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
     *          </agm-icon-sequence>
     *      </agm-polyline>
     *    </agm-map>
     * ```
     */


    var AgmPolylineIcon =
    /*#__PURE__*/
    function () {
      function AgmPolylineIcon() {
        _classCallCheck(this, AgmPolylineIcon);
      }

      _createClass(AgmPolylineIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.path == null) {
            throw new Error('Icon Sequence path is required');
          }
        }
      }]);

      return AgmPolylineIcon;
    }();

    AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) {
      return new (t || AgmPolylineIcon)();
    };

    AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylineIcon,
      selectors: [["agm-icon-sequence"]],
      inputs: {
        fixedRotation: "fixedRotation",
        offset: "offset",
        repeat: "repeat",
        anchorX: "anchorX",
        anchorY: "anchorY",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        path: "path",
        rotation: "rotation",
        scale: "scale",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight"
      }
    });
    AgmPolylineIcon.propDecorators = {
      fixedRotation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      offset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      repeat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      anchorX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      anchorY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      path: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      rotation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline agm-icon-sequence'
        }]
      }], null, {
        fixedRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        repeat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * AgmPolylinePoint represents one element of a polyline within a  {@link
     * AgmPolyline}
     */


    var AgmPolylinePoint =
    /*#__PURE__*/
    function () {
      function AgmPolylinePoint() {
        _classCallCheck(this, AgmPolylinePoint);

        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AgmPolylinePoint, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // tslint:disable: no-string-literal
          if (changes['latitude'] || changes['longitude']) {
            this.positionChanged.emit({
              lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
              lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
            });
          } // tslint:enable: no-string-literal

        }
        /** @internal */

      }, {
        key: "getFitBoundsDetails$",
        value: function getFitBoundsDetails$() {
          return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            lat: this.latitude,
            lng: this.longitude
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
            return {
              latLng: position
            };
          }));
        }
      }]);

      return AgmPolylinePoint;
    }();

    AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) {
      return new (t || AgmPolylinePoint)();
    };

    AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolylinePoint,
      selectors: [["agm-polyline-point"]],
      inputs: {
        latitude: "latitude",
        longitude: "longitude"
      },
      outputs: {
        positionChanged: "positionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FitBoundsAccessor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AgmPolylinePoint;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    AgmPolylinePoint.ctorParameters = function () {
      return [];
    };

    AgmPolylinePoint.propDecorators = {
      latitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      longitude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      positionChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline-point',
          providers: [{
            provide: FitBoundsAccessor,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return AgmPolylinePoint;
            })
          }]
        }]
      }], function () {
        return [];
      }, {
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var polylineId = 0;
    /**
     * AgmPolyline renders a polyline on a {@link AgmMap}
     *
     * ### Example
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *  selector: 'my-map-cmp',
     *  styles: [`
     *    .agm-map-container {
     *      height: 300px;
     *    }
     * `],
     *  template: `
     *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     *      <agm-polyline>
     *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
     *          </agm-polyline-point>
     *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
     *          </agm-polyline-point>
     *      </agm-polyline>
     *    </agm-map>
     *  `
     * })
     * ```
     */

    var AgmPolyline =
    /*#__PURE__*/
    function () {
      function AgmPolyline(_polylineManager) {
        _classCallCheck(this, AgmPolyline);

        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */

        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */

        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */

        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */

        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */

        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */

        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */

        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */

        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */

        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */

        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */

        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */

        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */

        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */

        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
      }
      /** @internal */


      _createClass(AgmPolyline, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this82 = this;

          if (this.points.length) {
            this.points.forEach(function (point) {
              var s = point.positionChanged.subscribe(function () {
                _this82._polylineManager.updatePolylinePoints(_this82);
              });

              _this82._subscriptions.push(s);
            });
          }

          if (!this._polylineAddedToManager) {
            this._init();
          }

          var pointSub = this.points.changes.subscribe(function () {
            return _this82._polylineManager.updatePolylinePoints(_this82);
          });

          this._subscriptions.push(pointSub);

          this._polylineManager.updatePolylinePoints(this);

          var iconSub = this.iconSequences.changes.subscribe(function () {
            return _this82._polylineManager.updateIconSequences(_this82);
          });

          this._subscriptions.push(iconSub);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._polylineAddedToManager) {
            this._init();

            return;
          }

          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            return options[k] = changes[k].currentValue;
          });

          this._polylineManager.setPolylineOptions(this, options);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return this._polylineManager.getPath(this);
        }
      }, {
        key: "_init",
        value: function _init() {
          this._polylineManager.addPolyline(this);

          this._polylineAddedToManager = true;

          this._addEventListeners();
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this83 = this;

          var handlers = [{
            name: 'click',
            handler: function handler(ev) {
              return _this83.lineClick.emit(ev);
            }
          }, {
            name: 'dblclick',
            handler: function handler(ev) {
              return _this83.lineDblClick.emit(ev);
            }
          }, {
            name: 'drag',
            handler: function handler(ev) {
              return _this83.lineDrag.emit(ev);
            }
          }, {
            name: 'dragend',
            handler: function handler(ev) {
              return _this83.lineDragEnd.emit(ev);
            }
          }, {
            name: 'dragstart',
            handler: function handler(ev) {
              return _this83.lineDragStart.emit(ev);
            }
          }, {
            name: 'mousedown',
            handler: function handler(ev) {
              return _this83.lineMouseDown.emit(ev);
            }
          }, {
            name: 'mousemove',
            handler: function handler(ev) {
              return _this83.lineMouseMove.emit(ev);
            }
          }, {
            name: 'mouseout',
            handler: function handler(ev) {
              return _this83.lineMouseOut.emit(ev);
            }
          }, {
            name: 'mouseover',
            handler: function handler(ev) {
              return _this83.lineMouseOver.emit(ev);
            }
          }, {
            name: 'mouseup',
            handler: function handler(ev) {
              return _this83.lineMouseUp.emit(ev);
            }
          }, {
            name: 'rightclick',
            handler: function handler(ev) {
              return _this83.lineRightClick.emit(ev);
            }
          }];
          handlers.forEach(function (obj) {
            var os = _this83._polylineManager.createEventObservable(obj.name, _this83).subscribe(obj.handler);

            _this83._subscriptions.push(os);
          });

          this._polylineManager.createPathEventObservable(this).then(function (ob$) {
            var os = ob$.subscribe(function (pathEvent) {
              return _this83.polyPathChange.emit(pathEvent);
            });

            _this83._subscriptions.push(os);
          });
        }
        /** @internal */

      }, {
        key: "_getPoints",
        value: function _getPoints() {
          if (this.points) {
            return this.points.toArray();
          }

          return [];
        }
      }, {
        key: "_getIcons",
        value: function _getIcons() {
          if (this.iconSequences) {
            return this.iconSequences.toArray();
          }

          return [];
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


          this._subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return AgmPolyline;
    }();

    AgmPolyline.ɵfac = function AgmPolyline_Factory(t) {
      return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager));
    };

    AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmPolyline,
      selectors: [["agm-polyline"]],
      contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
        }
      },
      inputs: {
        clickable: "clickable",
        draggable: ["polylineDraggable", "draggable"],
        editable: "editable",
        geodesic: "geodesic",
        visible: "visible",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        strokeWeight: "strokeWeight",
        zIndex: "zIndex"
      },
      outputs: {
        lineClick: "lineClick",
        lineDblClick: "lineDblClick",
        lineDrag: "lineDrag",
        lineDragEnd: "lineDragEnd",
        lineDragStart: "lineDragStart",
        lineMouseDown: "lineMouseDown",
        lineMouseMove: "lineMouseMove",
        lineMouseOut: "lineMouseOut",
        lineMouseOver: "lineMouseOver",
        lineMouseUp: "lineMouseUp",
        lineRightClick: "lineRightClick",
        polyPathChange: "polyPathChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

    AgmPolyline.ctorParameters = function () {
      return [{
        type: PolylineManager
      }];
    };

    AgmPolyline.propDecorators = {
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['polylineDraggable']
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      geodesic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      lineClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineMouseDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineMouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineMouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineMouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineMouseUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      lineRightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      polyPathChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      points: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [AgmPolylinePoint]
      }],
      iconSequences: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [AgmPolylineIcon]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-polyline'
        }]
      }], function () {
        return [{
          type: PolylineManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['polylineDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geodesic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        lineRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        polyPathChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        points: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylinePoint]
        }],
        iconSequences: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AgmPolylineIcon]
        }]
      });
    })();

    var AgmRectangle =
    /*#__PURE__*/
    function () {
      function AgmRectangle(_manager) {
        _classCallCheck(this, AgmRectangle);

        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */

        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename

        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */

        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */

        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */

        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */

        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */

        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */

        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native

        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */

        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */

        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */

        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */

        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */

        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */

        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
      }
      /** @internal */


      _createClass(AgmRectangle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._manager.addRectangle(this);

          this._rectangleAddedToManager = true;

          this._registerEventListeners();
        }
        /** @internal */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._rectangleAddedToManager) {
            return;
          } // tslint:disable: no-string-literal


          if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
            this._manager.setBounds(this);
          }

          if (changes['editable']) {
            this._manager.setEditable(this);
          }

          if (changes['draggable']) {
            this._manager.setDraggable(this);
          }

          if (changes['visible']) {
            this._manager.setVisible(this);
          } // tslint:enable: no-string-literal


          this._updateRectangleOptionsChanges(changes);
        }
      }, {
        key: "_updateRectangleOptionsChanges",
        value: function _updateRectangleOptionsChanges(changes) {
          var options = {};
          var optionKeys = Object.keys(changes).filter(function (k) {
            return AgmRectangle._mapOptions.indexOf(k) !== -1;
          });
          optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
          });

          if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
          }
        }
      }, {
        key: "_registerEventListeners",
        value: function _registerEventListeners() {
          var _this84 = this;

          var events = new Map();
          events.set('bounds_changed', this.boundsChange);
          events.set('click', this.rectangleClick);
          events.set('dblclick', this.rectangleDblClick);
          events.set('drag', this.drag);
          events.set('dragend', this.dragEnd);
          events.set('dragStart', this.dragStart);
          events.set('mousedown', this.mouseDown);
          events.set('mousemove', this.mouseMove);
          events.set('mouseout', this.mouseOut);
          events.set('mouseover', this.mouseOver);
          events.set('mouseup', this.mouseUp);
          events.set('rightclick', this.rightClick);
          events.forEach(function (eventEmitter, eventName) {
            _this84._eventSubscriptions.push(_this84._manager.createEventObservable(eventName, _this84).subscribe(function (value) {
              switch (eventName) {
                case 'bounds_changed':
                  _this84._manager.getBounds(_this84).then(function (bounds) {
                    return eventEmitter.emit({
                      north: bounds.getNorthEast().lat(),
                      east: bounds.getNorthEast().lng(),
                      south: bounds.getSouthWest().lat(),
                      west: bounds.getSouthWest().lng()
                    });
                  });

                  break;

                default:
                  eventEmitter.emit(value);
              }
            }));
          });
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._eventSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });

          this._eventSubscriptions = null;

          this._manager.removeRectangle(this);
        }
        /**
         * Gets the LatLngBounds of this Rectangle.
         */

      }, {
        key: "getBounds",
        value: function getBounds() {
          return this._manager.getBounds(this);
        }
      }]);

      return AgmRectangle;
    }();

    AgmRectangle.ɵfac = function AgmRectangle_Factory(t) {
      return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager));
    };

    AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmRectangle,
      selectors: [["agm-rectangle"]],
      inputs: {
        clickable: "clickable",
        draggable: ["rectangleDraggable", "draggable"],
        editable: "editable",
        strokePosition: "strokePosition",
        strokeWeight: "strokeWeight",
        visible: "visible",
        north: "north",
        east: "east",
        south: "south",
        west: "west",
        fillColor: "fillColor",
        fillOpacity: "fillOpacity",
        strokeColor: "strokeColor",
        strokeOpacity: "strokeOpacity",
        zIndex: "zIndex"
      },
      outputs: {
        boundsChange: "boundsChange",
        rectangleClick: "rectangleClick",
        rectangleDblClick: "rectangleDblClick",
        drag: "drag",
        dragEnd: "dragEnd",
        dragStart: "dragStart",
        mouseDown: "mouseDown",
        mouseMove: "mouseMove",
        mouseOut: "mouseOut",
        mouseOver: "mouseOver",
        mouseUp: "mouseUp",
        rightClick: "rightClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

    AgmRectangle.ctorParameters = function () {
      return [{
        type: RectangleManager
      }];
    };

    AgmRectangle.propDecorators = {
      north: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      east: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      south: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      west: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      clickable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['rectangleDraggable']
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      fillOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strokeWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      zIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      boundsChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rectangleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rectangleDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      drag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      mouseUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      rightClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-rectangle'
        }]
      }], function () {
        return [{
          type: RectangleManager
        }];
      }, {
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['rectangleDraggable']
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boundsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rectangleDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        mouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        north: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        east: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        south: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        west: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strokeOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var layerId$3 = 0;
    /*
     * This directive adds a transit layer to a google map instance
     * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
     * */

    var AgmTransitLayer =
    /*#__PURE__*/
    function () {
      function AgmTransitLayer(_manager) {
        _classCallCheck(this, AgmTransitLayer);

        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */

        this.visible = true;
      }

      _createClass(AgmTransitLayer, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._addedToManager) {
            return;
          }

          this._manager.addTransitLayer(this);

          this._addedToManager = true;
        }
        /** @internal */

      }, {
        key: "id",
        value: function id() {
          return this._id;
        }
        /** @internal */

      }, {
        key: "toString",
        value: function toString() {
          return "AgmTransitLayer-".concat(this._id.toString());
        }
        /** @internal */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._manager.deleteLayer(this);
        }
      }]);

      return AgmTransitLayer;
    }();

    AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) {
      return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager));
    };

    AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: AgmTransitLayer,
      selectors: [["agm-transit-layer"]],
      inputs: {
        visible: "visible"
      }
    });

    AgmTransitLayer.ctorParameters = function () {
      return [{
        type: LayerManager
      }];
    };

    AgmTransitLayer.propDecorators = {
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'agm-transit-layer'
        }]
      }], function () {
        return [{
          type: LayerManager
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @internal
     */


    function coreDirectives() {
      return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl];
    }
    /**
     * The angular-google-maps core module. Contains all Directives/Services/Pipes
     * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
     */


    var AgmCoreModule =
    /*#__PURE__*/
    function () {
      function AgmCoreModule() {
        _classCallCheck(this, AgmCoreModule);
      }

      _createClass(AgmCoreModule, null, [{
        key: "forRoot",

        /**
         * Please use this method when you register the module at the root level.
         */
        value: function forRoot(lazyMapsAPILoaderConfig) {
          return {
            ngModule: AgmCoreModule,
            providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
              provide: MapsAPILoader,
              useClass: LazyMapsAPILoader
            }, {
              provide: LAZY_MAPS_API_CONFIG,
              useValue: lazyMapsAPILoaderConfig
            }])
          };
        }
      }]);

      return AgmCoreModule;
    }();

    AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AgmCoreModule
    });
    AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AgmCoreModule_Factory(t) {
        return new (t || AgmCoreModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, {
        declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl],
        exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: coreDirectives(),
          exports: coreDirectives()
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-core.js.map

    /***/

  },

  /***/
  "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@agm/core/node_modules/tslib/tslib.es6.js ***!
    \****************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesAgmCoreNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    var __createBinding = Object.create ? function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      });
    } : function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    };

    function __exportStar(m, o) {
      for (var p in m) {
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    var __setModuleDefault = Object.create ? function (o, v) {
      Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
      });
    } : function (o, v) {
      o["default"] = v;
    };

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }

      __setModuleDefault(result, mod);

      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  }
}]);
//# sourceMappingURL=default~charts-charts-module~layout-layout-module-es5.js.map