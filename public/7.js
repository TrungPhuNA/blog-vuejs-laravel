(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookRight.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookRight.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BookRight"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BookRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/BookRight */ "./resources/js/components/BookRight.vue");
/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-plain-pagination */ "./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js");
/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import PaginateCustomer from "../../components/PaginateCustomer";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {
      articlesNew: [],
      articlesHot: [],
      currentPage: 1,
      totalPages: 30,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      paginationAnchorTexts: {
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last'
      }
    };
  },
  components: {
    BookRight: _components_BookRight__WEBPACK_IMPORTED_MODULE_1__["default"],
    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  methods: {
    getNewArticles: function getNewArticles() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get("api/articles?page=".concat(_this.currentPage));

              case 2:
                response = _context.sent;

                if (response.status === 200) {
                  _this.articlesNew = response.data;
                  _this.totalPages = response.data.last_page;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getArticlesHot: function getArticlesHot() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.get("api/articles/hot");

              case 2:
                response = _context2.sent;
                if (response.status === 200) _this2.articlesHot = response.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    currentPage: function currentPage() {
      this.getNewArticles();
    }
  },
  beforeCreate: function beforeCreate() {
    document.title = 'Trang chủ';
  },
  mounted: function mounted() {
    this.getNewArticles();
    this.getArticlesHot();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-3 col-md-12 primary-sidebar sticky-sidebar" },
      [
        _c("div", { staticClass: "widget-area mb-5" }, [
          _c(
            "div",
            {
              staticClass:
                "sidebar-widget widget-latest-posts mb-30 mt-0 wow fadeIn animated"
            },
            [
              _c(
                "h6",
                {
                  staticClass:
                    "widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2"
                },
                [_c("span", [_vm._v("Quảng cáo")])]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "author-content text-center",
                staticStyle: { width: "100%", overflow: "hidden" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "sidebar-widget widget_newsletter wow fadeIn animated"
            },
            [
              _c(
                "h6",
                {
                  staticClass:
                    "widget-header widget-header-style-4 mb-20 text-center text-uppercase border-top-1 border-bottom-1 pt-2 pb-2"
                },
                [_c("span", [_vm._v("Đăng ký nhận tin")])]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "newsletter" }, [
                _c("p", {}, [
                  _vm._v(
                    "Chúng tôi chỉ gửi tối đa 2 lần trên 1 tháng. Tuyên bố không spam mail!"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "subscribe_form relative mail_part",
                    attrs: {
                      action: "https://toidicode.com/mail/subscribe",
                      method: "POST"
                    }
                  },
                  [
                    _c("div", { staticClass: "form-newsletter-cover" }, [
                      _c("div", { staticClass: "form-newsletter" }, [
                        _c("label", { attrs: { for: "subscribe_form_email" } }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            name: "_token",
                            value: "y40eb7y64VK7ImetyuPJxdXOr91F7l1Q2I5oyOz7"
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "email",
                            id: "subscribe_form_email",
                            name: "email",
                            placeholder: "Nhập địa chỉ mail",
                            required: "",
                            maxlength: "150"
                          }
                        }),
                        _vm._v(" "),
                        _c("button", { attrs: { type: "submit" } }, [
                          _c("span", {
                            staticClass: "long-arrow long-arrow-right"
                          })
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container " }, [
    _c("section", { staticClass: "recent-news mb-30" }, [
      _c(
        "div",
        { staticClass: "row vertical-divider" },
        [
          _c("div", { staticClass: "col-lg-9 col-md-12" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "loop-grid-3" }, [
              _c("div", { staticClass: "row vertical-divider" }, [
                _c(
                  "div",
                  { staticClass: "col-md-8" },
                  _vm._l(_vm.articlesNew.data, function(article) {
                    return _c(
                      "article",
                      { key: article.id, staticClass: "row" },
                      [
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "page.article",
                                    params: {
                                      slug: article.a_slug,
                                      id: article.id
                                    }
                                  }
                                }
                              },
                              [
                                _c(
                                  "figure",
                                  { staticClass: "mb-md-0 mb-sm-3" },
                                  [
                                    _c("img", {
                                      staticClass: "lzi",
                                      attrs: {
                                        src: "/images/article_detail.png",
                                        alt: article.a_name
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8" }, [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c(
                            "h6",
                            {
                              staticClass: "post-title mb-10 font-weight-bold"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "page.article",
                                      params: {
                                        slug: article.a_slug,
                                        id: article.id
                                      }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(article.a_name) +
                                      "\n                                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "excerpt mb-1" }, [
                            _vm._v(_vm._s(article.a_description))
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", { staticClass: "ti-user" }, [
                              _vm._v(" " + _vm._s(article.auth.name))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-2" }, [
                              _c("span", { staticClass: "ti-comment-alt" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(article.a_total_comment) +
                                    " comment"
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(2, true)
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-4" },
                  [
                    _vm._l(_vm.articlesHot, function(article) {
                      return _c(
                        "article",
                        { key: article.id, staticClass: "wow" },
                        [
                          _c(
                            "figure",
                            { staticClass: "mb-15" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "page.article",
                                      params: {
                                        slug: article.a_slug,
                                        id: article.id
                                      }
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "lzi",
                                    attrs: {
                                      src: "/images/article_detail.png",
                                      alt: article.a_name
                                    }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "h6",
                            {
                              staticClass: "post-title font-weight-bold mb-10"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "page.article",
                                      params: {
                                        slug: article.a_slug,
                                        id: article.id
                                      }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(article.a_name) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", { staticClass: "ti-user" }, [
                              _vm._v(" " + _vm._s(article.auth.name) + " ")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-2" }, [
                              _c("span", { staticClass: "ti-comment-alt" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(article.a_total_comment) +
                                    " comment"
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "excerpt" }, [
                            _vm._v(_vm._s(article.a_description))
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "horizontal-divider mt-15 mb-15"
                          })
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "overflow-hidden" }),
                    _vm._v(" "),
                    _vm._m(3)
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "pagination-area pt-30 border-top-2 mt-30 font-heading wow fadeIn animated"
                },
                [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-xl-12" },
                        [
                          _c("v-pagination", {
                            attrs: {
                              "page-count": _vm.totalPages,
                              classes: _vm.bootstrapPaginationClasses,
                              labels: _vm.paginationAnchorTexts
                            },
                            model: {
                              value: _vm.currentPage,
                              callback: function($$v) {
                                _vm.currentPage = $$v
                              },
                              expression: "currentPage"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("BookRight")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      {
        staticClass:
          "font-weight-bold widget-header widget-header-style-3 mb-20"
      },
      [
        _c(
          "span",
          {
            staticClass:
              "d-inline-block block mb-10 widget-title font-family-normal"
          },
          [_vm._v("# Bài Viết Mới")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "line-dots" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "entry-meta meta-0 mb-10 font-small" }, [
      _c("a", { attrs: { href: "" } }, [
        _c("span", { staticClass: "post-cat position-relative" }, [
          _vm._v("# TIN TỨC & REVIEW CÔNG NGHỆ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "horizontal-divider mt-15 mb-15" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mt-15" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-block btn-warning",
            staticStyle: { "white-space": "pre-wrap" },
            attrs: { href: "", target: "_blank", rel: "noreferrer noopener" }
          },
          [
            _vm._v(
              "Hãy tham gia group facebook để cùng giao lưu\n                                            chia sẻ kiến thức!"
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BookRight.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/BookRight.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookRight.vue?vue&type=template&id=d49dcd50&scoped=true& */ "./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true&");
/* harmony import */ var _BookRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookRight.vue?vue&type=script&lang=js& */ "./resources/js/components/BookRight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d49dcd50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BookRight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BookRight.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/BookRight.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookRight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookRight.vue?vue&type=template&id=d49dcd50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookRight.vue?vue&type=template&id=d49dcd50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookRight_vue_vue_type_template_id_d49dcd50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/home/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=4c3f1cd4&scoped=true& */ "./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c3f1cd4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/home/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=4c3f1cd4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home/Home.vue?vue&type=template&id=4c3f1cd4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4c3f1cd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);