!function () {
	function t(e, i, o) {
		function s(a, r) {
			if (!i[a]) {
				if (!e[a]) {
					var l = "function" == typeof require && require;
					if (!r && l) return l(a, !0);
					if (n) return n(a, !0);
					var h = new Error("Cannot find module '" + a + "'");
					throw h.code = "MODULE_NOT_FOUND", h
				}
				var u = i[a] = {exports: {}};
				e[a][0].call(u.exports, function (t) {
					var i = e[a][1][t];
					return s(i || t)
				}, u, u.exports, t, e, i, o)
			}
			return i[a].exports
		}

		for (var n = "function" == typeof require && require, a = 0; a < o.length; a++) s(o[a]);
		return s
	}

	return t
}()({
	1: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./../common/wrap-items-bw/index");
			return e.fn._viewpointOffset = function () {
				var t = this;
				return t.addClass("pulse-red"), setTimeout(function () {
					t.removeClass("pulse-red")
				}, 2e3), this
			}, e.fn.propertyindex = function () {
				return this.addClass("attantion-required"), this
			}, e.fn.unpropertyindex = function () {
				return this.removeClass("attantion-required"), this
			}, e.fn._viewpointOff = function (t) {
				var e = document.createElement("textarea");
				return e.value = this.text(), document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), this
			}, e.fn.viewpointOData = function (t) {
				var e = function (t, e) {
					if (!t || t.indexOf("jQuery") == -1) return e
				}, i = JSON.stringify(t, e), o = btoa(i);
				return this.val(o), this
			}, {
				_viewpointX: function (t, e) {
					var o = i.find(function (e) {
						return e.name == t
					});
					"undefined" != typeof o.options.autorotation && (e.extra.autorotation = o.options.autorotation), "undefined" != typeof o.options.autorotationDirection && (e.extra.autorotationDirection = o.options.autorotationDirection), "undefined" != typeof o.options.autorotationPause && (e.extra.autorotationPause = o.options.autorotationPause), "undefined" != typeof o.options.path && "undefined" != typeof o.options.path.settings && "undefined" != typeof o.options.path.settings.endless ? e.extra.endlessPath = o.options.path.settings.endless : e.extra.endlessPath = !1, "undefined" != typeof o.options.shadow && (e.extra.shadow = o.options.shadow), "undefined" != typeof o.options.shadowBlurRadius && (e.extra.shadowBlurRadius = o.options.shadowBlurRadius), "undefined" != typeof o.options.shadowSpreadRadius && (e.extra.shadowSpreadRadius = o.options.shadowSpreadRadius), "undefined" != typeof o.options.rotationAnimationDuration && (e.extra.rotationAnimationDuration = o.options.rotationAnimationDuration)
				}
			}
		}(jQuery)
	}, {"./../common/wrap-items-bw/index": 14}],
	2: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./__viewpointCommon"), t("./_accelerationRate"), t("./_accelerationX");
			var o = (t("./../common/_viewpointY"), t("./utils"));
			e.widget("theta.wp_carousel_config", {
				version: "1.0.0", options: {}, _create: function () {
					this.__accelerationY("theta_carousel_slides", []);
					var t = {
						height: "400",
						path: "ellipse",
						slideLayout: "image",
						extra: {
							autorotation: !1,
							autorotationDirection: "right",
							autorotationPause: 500,
							borderColor: "#000000",
							borderWidth: 3,
							cornerRadius: 0,
							endlessPath: !1,
							shadow: !1,
							shadowBlurRadius: 100,
							shadowSpreadRadius: 0,
							slideBgColor: "#ffffff",
							slideBgTansparent: !1,
							rotationAnimationDuration: 500,
							fontSize: 20,
							fontColor: "#000000",
							fontFamily: null,
							height: 200
						}
					};
					o._viewpointX(t.path, t), this.__accelerationY("theta_carousel_config", t), this.__accelerationY("theta_carousel_admin_view", {
						slidesListExpanded: !0,
						extraOptionsExpanded: !0
					}), this.__accelerationZ = e("<div class='section'>Shortcode: <b>[theta-carousel id='" + this.getId() + "']</b><div title='Copy' class='move-right clickable dashicons dashicons-admin-page'><div></div>"), this.__accelerationZ.appendTo(this.widget()), e(".dashicons", this.__accelerationZ).on("click", e.proxy(this.wrapItemsBorder, this)), this.wrapItems = e('<div class="section margin-in-content tool-box-container"></div>'), this.wrapItems.appendTo(this.widget()), this.wrapItems.__viewpointCommon(), this.wrapEnabledItems = e('<div class="section tool-box-container"></div>'), this.wrapEnabledItems.appendTo(this.widget()), this.wrapEnabledItems._accelerationX(), this._wrapEnabled = e('<div class="section no-padding margin-in-content tool-box-container"></div>'), this._wrapEnabled.appendTo(this.widget()), this._wrapEnabled._accelerationRate()
				}, getId: function () {
					return e("#theta_carousel_id", this.widget()).val()
				}, wrapItemsBorder: function () {
					e("b", this.__accelerationZ)._viewpointOff()
				}, __accelerationY: function (t, i) {
					var o = e("#" + t).val();
					null != o && "" != o || e("#" + t).viewpointOData(i)
				}, _destroy: function () {
					this.wrapItems.off("updated"), this.wrapItems.remove(), this._wrapEnabled.remove(), this.customPaging.remove()
				}
			})
		}(jQuery)
	}, {
		"./../common/_viewpointY": 30,
		"./utils": 1,
		"./_accelerationX": 5,
		"./_accelerationRate": 6,
		"./__viewpointCommon": 9
	}],
	3: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			var o = t("./../common/_viewpointY"), s = t("./utils"), n = "&#x3C;None&#x3E;",
				a = [n, "Arial", "Roboto", "Times New Roman", "Times", "Courier New", "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS", "Candara", "Arial Black", "Impact"];
			e.widget("theta.placeholder_types", {
				version: "1.0.0", options: {}, _create: function () {
					var t = e('<div style="text-align: center;" class="title">Slide Appearance</div><hr><table><tr><td class="td-lbl">Background Color:</td><td class="td-val"><input type="color" name="slideBgColor" value="#FFFFFF"></td><td class="td-lbl">Tansparent Background:</td><td class="td-val"><input type="checkbox" name="slideBgTansparent"></td><td class="td-lbl"></td><td class="td-val no-border-right"></td></tr><tr><td class="td-lbl">Corner Radius (<span></span>):</td><td class="td-val"><input type="range" name="cornerRadius" min="0" max="100" value="0"></td><td class="td-lbl">Border Width (<span></span>):</td><td class="td-val"><input type="range" name="borderWidth" min="0" max="10" value="3"></td><td class="td-lbl">Border Color:</td><td class="td-val no-border-right"><input type="color" name="borderColor" value="lightgray"></td></tr><tr><td class="td-lbl">Shadow:</td><td class="td-val"><input type="checkbox" name="shadow"></td><td class="td-lbl">Shadow Blur Radius (<span></span>):</td><td class="td-val"><input type="range" name="shadowBlurRadius" min="0" max="300" value="100"></td><td class="td-lbl">Shadow Spread Radius (<span></span>):</td><td class="td-val no-border-right"><input type="range" name="shadowSpreadRadius" min="-100" max="100" value="0"></td></tr><tr><td class="td-lbl">Font Family:</td><td class="td-val"><select name="fontFamily"></select></td><td class="td-lbl">Font Size (<span></span>):</td><td class="td-val"><input type="range" name="fontSize" min="0" max="100" value="20"></td><td class="td-lbl">Font Color:</td><td class="td-val no-border-right"><input type="color" name="fontColor" value="black"></td></tr></table><div style="text-align: center;" class="title">Carousel Options</div><hr><table><tr><td class="td-lbl">Autorotation:</td><td class="td-val"><input type="checkbox" name="autorotation"></td><td class="td-lbl">Autorotation Direction:</td><td class="td-val"><input type="radio" id="left" name="autorotationDirection" value="left"><label for="left">Left</label><input style="margin-left: 10px;" checked type="radio" id="right" name="autorotationDirection" value="right"><label for="right">Right</label></td><td class="td-lbl">Autorotation Pause (<span></span>):</td><td class="td-val no-border-right"><input type="range" name="autorotationPause" min="500" max="5000" value="0"></td></tr><tr><td class="td-lbl">Endless path:</td><td class="td-val"><input type="checkbox" name="endlessPath"></td><td class="td-lbl">Step Duration (<span></span>):</td><td class="td-val"><input type="range" name="rotationAnimationDuration" min="10" max="8000" value="500"></td><td class="td-lbl"></td><td class="td-val no-border-right"></td></tr><tr><td class="td-lbl">Height (<span></span>):</td><td class="td-val"><input type="range" name="height" min="100" max="4000" value="200"></td><td class="td-lbl"></td><td class="td-val"></td><td class="td-lbl"></td><td class="td-val no-border-right"></td></tr></table>');
					t.appendTo(this.widget()), e("input", this.widget()).on("input", e.proxy(this._placeholderPosition, this)), e("#theta_carousel_config").on("_focusOnSelect", e.proxy(this._placeholderType, this));
					for (var i = e('[name="fontFamily"]', this.widget()), o = 0; o < a.length; o++) {
						var s = a[o], r = document.createElement("option");
						r.value = r.innerHTML = s, s !== n && (r.style.fontFamily = s), i.get(0).add(r)
					}
					i.on("change", e.proxy(this._placeholderPosition, this)), this._placeholderTypes(), this._scrollOffset()
				}, _scrollOffset: function () {
					for (var t = e("input[type='range']", this.widget()), i = 0; i < t.length; i++) {
						var o = e(t[i]), s = o.parent().prev();
						e("span", s).text(o.val())
					}
				}, _placeholderType: function () {
					var t = e("#theta_carousel_config"), i = o.getPlaceholderPosition(t);
					s._viewpointX(i.path, i), e("#theta_carousel_config").viewpointOData(i).trigger("focusOnSelect"), this._placeholderTypes()
				}, _placeholderPosition: function () {
					for (var t = e("#theta_carousel_config"), i = o.getPlaceholderPosition(t), s = e("input", this.widget()), a = 0; a < s.length; a++) {
						var r = e(s[a]), l = r.val();
						"range" == r.attr("type") && (l = parseInt(l)), "checkbox" == r.attr("type") && (l = r.is(":checked")), "radio" == r.attr("type") && (l = e("input[name=" + r.attr("name") + "]:checked", this.widget()).val()), i.extra[r.attr("name")] = l
					}
					var h = e('[name="fontFamily"]', this.widget()).children("option:selected").val();
					h === n && (h = null), i.extra.fontFamily = h, e("#theta_carousel_config").viewpointOData(i).trigger("focusOnSelect"), this._scrollOffset()
				}, _placeholderTypes: function () {
					var t = e("#theta_carousel_config"), i = o.getPlaceholderPosition(t);
					for (var s in i.extra) {
						var a = e("[name=" + s + "]", this.widget()), r = i.extra[s];
						"checkbox" == a.attr("type") ? a.attr("checked", r) : "radio" == a.attr("type") ? (a.attr("checked", !1), e("[name=" + s + "][value=" + r + "]", this.widget()).attr("checked", !0)) : a.val(r)
					}
					var l = i.extra.fontFamily;
					l || (l = n), e(".selDiv option:eq(" + l + ")").prop("selected", !0), this._scrollOffset()
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./../common/_viewpointY": 30, "./utils": 1}],
	4: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./utils");
			var o = t("./../common/wrap-items-bw/index"), s = t("./../common/_viewpointY");
			e.widget("theta.scroll_logic", {
				version: "1.0.0", options: {}, _create: function () {
					var t = e("#plugin_dir_url").val();
					t = t.slice(0, t.length - 4), this.warning = e('<div class="warning">This path looks better with at least <span class="number-of-slides"></span> slides.</div>'), this.warning.css({visibility: "hidden"});
					for (var i = 0; i < o.length; i++) {
						var s = o[i], n = e('<div class="layout" data-name="' + s.name + '"><div>' + s.title + "</div></div>");
						n.appendTo(this.widget()), n.css({backgroundImage: "url(" + t + "/images/Configurations/" + s.icon + ")"}), n.on("click", e.proxy(this._customPaging, this))
					}
					e('<div class="spacer" style="clear: both;"></div>').appendTo(this.widget()), this.warning.appendTo(this.widget()), this._getPlaceholderPosition(), e("#theta_carousel_slides").on("updated", e.proxy(this._getPlaceholderPosition, this))
				}, _customPaging: function (t) {
					var i = e(t.currentTarget), o = i.data("name"), n = s.getPlaceholderPosition(e("#theta_carousel_config"));
					n.path = o, e("#theta_carousel_config").viewpointOData(n).trigger("updated").trigger("_focusOnSelect"), this._getPlaceholderPosition()
				}, _getPlaceholderPosition: function () {
					var t = s.getPlaceholderPosition(e("#theta_carousel_config"));
					e(".layout-selected", this.widget()).removeClass("layout-selected"), e("[data-name=" + t.path + "]", this.widget()).addClass("layout-selected");
					var i = s.getPlaceholderPosition(e("#theta_carousel_slides")), n = o.find(function (e) {
						return e.name == t.path
					});
					n.adaptiveHeight > i.length ? (this.warning.css({visibility: "visible"}), e(".number-of-slides", this.warning).text(n.adaptiveHeight)) : this.warning.css({visibility: "hidden"})
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./../common/wrap-items-bw/index": 14, "./../common/_viewpointY": 30, "./utils": 1}],
	5: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./scroll_logic"), t("./placeholder_types"), t("./scroll_config");
			var o = t("./../common/_viewpointY");
			e.widget("theta._accelerationX", {
				version: "1.0.0", options: {}, _create: function () {
					var t = e('<div class="tool-box"></div>');
					t.insertBefore(this.widget()), this.offsetMultiplier = e('<div class="move tb-button dashicons dashicons-editor-contract ok" title="Collapse"></div>'), this.offsetMultiplier.appendTo(t), this.offsetMultiplier.on("click", e.proxy(this._offsetMultiplier, this)), this._updateScroll(), e("#theta_carousel_admin_view").on("updated", e.proxy(this._updateScroll, this));
					var i = "YES";
					"YES" == i && e('<div style="text-align: center;color: #da6448;" class="title">This is a demo version of Theta Carousel.</div><div style="text-align: center;color: #da6448;" class="title">Changes within this panel will be ignored for a published post</div><div style="text-align: center;" class="title"><a target="_blank" href="http://theta-carousel.com/wp">Get a full version</a></div><hr>').appendTo(this.widget()), e('<div style="text-align: center;" class="title">Slide Layout</div>').appendTo(this.widget()), this.layouts = e('<div class="layouts"></div>'), this.layouts.appendTo(this.widget()), this.layouts.scroll_config(), e('<div style="text-align: center;" class="title">Carousel Path</div>').appendTo(this.widget()), this.layouts = e('<div class="layouts"></div>'), this.layouts.appendTo(this.widget()), this.layouts.scroll_logic(), this.slideView = e('<div class="extra-options"></div>'), this.slideView.appendTo(this.widget()), this.slideView.placeholder_types()
				}, _updateScroll: function () {
					var t = o.getPlaceholderPosition(e("#theta_carousel_admin_view"));
					t.extraOptionsExpanded ? (this.widget().css({
						height: "",
						overflowX: "",
						overflowY: ""
					}), this.offsetMultiplier.addClass("dashicons-editor-contract"), this.offsetMultiplier.removeClass("dashicons-editor-expand"), this.offsetMultiplier.attr("title", "Collapse")) : (this.widget().css({
						height: "305px",
						overflowX: "hidden",
						overflowY: "auto"
					}), this.offsetMultiplier.addClass("dashicons-editor-expand"), this.offsetMultiplier.removeClass("dashicons-editor-contract"), this.offsetMultiplier.attr("title", "Expand"))
				}, _offsetMultiplier: function () {
					var t = o.getPlaceholderPosition(e("#theta_carousel_admin_view"));
					t.extraOptionsExpanded = !t.extraOptionsExpanded, e("#theta_carousel_admin_view").viewpointOData(t).trigger("updated")
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./../common/_viewpointY": 30, "./placeholder_types": 3, "./scroll_logic": 4, "./scroll_config": 8}],
	6: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./utils"), t("./../easings_swing");
			var o = t("./../common/_viewpointY");
			e.widget("theta._accelerationRate", {
				version: "1.0.0", options: {}, _create: function () {
					this.currentItemView = e("#theta_carousel_slides"), this.configContainer = e("#theta_carousel_config");
					var t = e('<div class="tool-box" style="z-index:100"></div>');
					t.insertBefore(this.widget()), this.refresh = e('<div class="delete tb-button dashicons dashicons-update" title="Refresh"></div>'), this.refresh.appendTo(t), this.refresh.on("click", e.proxy(this.scrollToItemBoundary, this)), this.currentItemViewUpodate = e('<div class="slide center start-slide" style="float: none; display:block; margin-top: 10px;"><span class="title">Refresh Preview</span><span class="dashicons dashicons-update"></span></div>'), this.currentItemViewUpodate.appendTo(this.widget()), this.currentItemViewUpodate.on("click", e.proxy(this.scrollToItemBoundary, this)), this.currentItemIndex = e('<div class="theta-carousel-outer-container" style="background-color:#fff"><div class="slider-container theta-carousel-container" style="height: 212px;"></div></div>'), this.currentItemIndex.appendTo(this.widget()), this.sliderContainer = e(".sliderContainer", this.currentItemIndex), this.currentItemIndex.hide(), this.currentItemView.on("updated", e.proxy(this.scrollToItemBoundaryWidth, this)), this.configContainer.on("updated", e.proxy(this.scrollToItemBoundary, this)), this.configContainer.on("focusOnSelect", e.proxy(this._slidesPerRow, this)), this.scrollToItemBoundary()
				}, scrollToItemBoundaryWidth: function () {
					this.refresh.propertyindex(), this.currentItemViewUpodate.propertyindex()
				}, scrollToItemBoundary: function () {
					this.refresh.unpropertyindex(), this.currentItemViewUpodate.unpropertyindex();
					var t = o.getPlaceholderPosition(this.currentItemView);
					0 == t.length ? (this.currentItemIndex.hide(), this.currentItemViewUpodate.show()) : (this.currentItemIndex.show(), this.currentItemViewUpodate.hide()), this.sliderContainer.data("theta.carousel") && (this.sliderContainer.theta_carousel("destroy"), this.sliderContainer.off("motionStart"), this.sliderContainer.off("motionEnd")), this.currentItemIndex.empty(), this.sliderContainer = e('<div class="slider-container theta-carousel-container" style="height: 212px;"></div>'), this.sliderContainer.appendTo(this.currentItemIndex);
					var i = o.getPlaceholderPosition(this.configContainer);
					o.lazyLoaded(this.sliderContainer, i, t), o.initialSlide(this.sliderContainer, i), o.nextArrow(this.sliderContainer, i, t), o.initialSlide(this.sliderContainer, i), o.slidesPerRow(this.sliderContainer, i)
				}, _slidesPerRow: function () {
					if (this.sliderContainer.data("theta.carousel")) {
						var t = o.getPlaceholderPosition(this.configContainer);
						o.initialSlide(this.sliderContainer, t), o.slidesPerRow(this.sliderContainer, t)
					}
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./../common/_viewpointY": 30, "./../easings_swing": 31, "./utils": 1}],
	7: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./clipsToBounds"), e.widget("theta.clipsToBounds", {
				version: "1.0.0", options: {mObject: null, metaData: null}, _create: function () {
					if (this.options.mObject) {
						var t = this.scrollSpeedUpdate(this.options.mObject);
						this.options.metaData = t, this.options.metaData.slideTitle = t.title
					}
					var i = e('<div class="tool-box tool-box-inner"></div>');
					i.appendTo(this.widget()), this._TimeInterval = e('<div class="image-box"></div>'), this._TimeInterval.appendTo(this.widget()), this._TimeInterval.css({backgroundImage: "url(" + this.options.metaData.thumbnail.url + ")"}), this["delete"] = e('<div class="delete tb-button dashicons dashicons-trash" title="Delete"></div>'), this.move = e('<div class="move tb-button dashicons dashicons-leftright" title="Move"></div>'), this.edit = e('<div class="move tb-button dashicons dashicons-edit" title="Edit"></div>'), e('<div class="slide-properties-panel"><table><tr><td>Title</td><td><input type="text" name="title"></td></tr><tr><td>Link</td><td><input type="url" name="link"></td></tr></div>').appendTo(this.widget()), e('[name="title"]', this.widget()).val(this.options.metaData.slideTitle), e('[name="link"]', this.widget()).val(this.options.metaData.navigateUrl), e("input", this.widget()).on("input", e.proxy(this.NSTimeInterval, this)).on("focus", e.proxy(this.numberOfPlaceholdersInView, this)).on("blur", e.proxy(this.numberOfPlaceholdersInCarousel, this)), this["delete"].appendTo(i), this.edit.appendTo(i), this.move.appendTo(i), this["delete"].on("click", e.proxy(this.willDecelerate, this)), this.edit.on("click", e.proxy(this.carouselWillBegin, this))
				}, NSTimeInterval: function () {
					this.options.metaData.slideTitle = e('[name="title"]', this.widget()).val(), this.options.metaData.navigateUrl = e('[name="link"]', this.widget()).val()
				}, numberOfPlaceholdersInView: function () {
					e(".slide-properties-panel", this.widget()).css({opacity: 1})
				}, numberOfPlaceholdersInCarousel: function () {
					this.widget().trigger("updated"), e(".slide-properties-panel", this.widget()).css({opacity: .7})
				}, willDecelerate: function () {
					this.widget().trigger("delete")
				}, carouselWillBegin: function () {
					this.swipeToSlide || (this.swipeToSlide = wp.media({multiple: !1}), this.swipeToSlide.on("select", e.proxy(this._centerPadding, this))), this.swipeToSlide.open()
				}, scrollSpeedUpdate: function (t) {
					return {
						url: t.url,
						title: t.title,
						thumbnail: {width: t.sizes.thumbnail.width, height: t.sizes.thumbnail.height, url: t.sizes.thumbnail.url},
						full: {width: t.sizes.full.width, height: t.sizes.full.height, url: t.sizes.full.url}
					}
				}, _centerPadding: function () {
					var t = this.swipeToSlide.state().get("selection").toJSON();
					if (1 == t.length) {
						var e = this.scrollSpeedUpdate(t[0]);
						this.options.metaData = e, this.NSTimeInterval(), this.options.mObject = t[0], this._TimeInterval.css({backgroundImage: "url(" + this.options.metaData.thumbnail.url + ")"}), this.widget().trigger("updated")
					}
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./clipsToBounds": 7}],
	8: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./utils");
			var o = t("./../common/trsnaform-types/index"), s = t("./../common/_viewpointY");
			e.widget("theta.scroll_config", {
				version: "1.0.0", options: {}, _create: function () {
					var t = e("#plugin_dir_url").val();
					t = t.slice(0, t.length - 4);
					for (var i = 0; i < o.length; i++) {
						var s = o[i], n = e('<div class="layout" data-name="' + s.name + '" title="' + s.title + '"></div>');
						n.appendTo(this.widget()), n.css({backgroundImage: "url(" + t + "/images/SlideLayouts/" + s.icon + ")"}), n.on("click", e.proxy(this._customPaging, this))
					}
					e('<div class="spacer" style="clear: both;"></div>').appendTo(this.widget()), this._getPlaceholderPosition()
				}, _customPaging: function (t) {
					var i = e(t.currentTarget), o = i.data("name"), n = s.getPlaceholderPosition(e("#theta_carousel_config"));
					n.slideLayout = o, e("#theta_carousel_config").viewpointOData(n).trigger("updated"), this._getPlaceholderPosition()
				}, _getPlaceholderPosition: function () {
					var t = s.getPlaceholderPosition(e("#theta_carousel_config"));
					e(".layout-selected", this.widget()).removeClass("layout-selected"), e("[data-name=" + t.slideLayout + "]", this.widget()).addClass("layout-selected")
				}, _destroy: function () {
				}
			})
		}(jQuery)
	}, {"./../common/trsnaform-types/index": 28, "./../common/_viewpointY": 30, "./utils": 1}],
	9: [function (t, e, i) {
		!function (e, i) {
			"use strict";
			t("./clipsToBounds"), t("./utils");
			var o = t("./../common/_viewpointY");
			e.widget("theta.__viewpointCommon", {
				version: "1.0.0", options: {}, _create: function () {
					this.dataContainer = e("#theta_carousel_slides");
					var t = e('<div class="tool-box"></div>');
					t.insertBefore(this.widget()), this.emptySlide = e('<div class="slide center start-slide"><span class="title">Add Media</span><span class="dashicons dashicons-plus-alt"></span><br></div>'), this.emptySlide.appendTo(this.widget()), this.emptySlide.on("click", e.proxy(this._mobileFirst, this)), this._K16 = e('<div class="slides-container"></div>'), this._K16.appendTo(this.widget()), this._K16.sortable({placeholder: "slide-place-holder"}), this._K16.on("sortupdate", e.proxy(function () {
						this._waitForAnimate()
					}, this)), this._K16.disableSelection(), this.swipeToSlide = wp.media({multiple: !0}), this.swipeToSlide.on("select", e.proxy(this._centerPadding, this)), this["delete"] = e('<div class="tb-button dashicons dashicons-trash danger" title="Clear All"></div>'), this.verticalSwiping = e('<div class="tb-button dashicons dashicons-plus-alt ok" title="Add Slide"></div>'), this.offsetMultiplier = e('<div class="tb-button dashicons dashicons-editor-contract ok" title="Collapse"></div>'), this.offsetMultiplier.on("click", e.proxy(this._offsetMultiplier, this)), this._updateScroll(), e("#theta_carousel_admin_view").on("updated", e.proxy(this._updateScroll, this)), this["delete"].appendTo(t), this.verticalSwiping.appendTo(t), this.offsetMultiplier.appendTo(t), this.verticalSwiping.on("click", e.proxy(this._mobileFirst, this)), this["delete"].on("click", e.proxy(this.waitForAnimate, this)), this._pauseOnDotsHover(), e('<div class="spacer" style="clear: both;"></div>').appendTo(this.widget())
				}, _pauseOnDotsHover: function () {
					for (var t = o.getPlaceholderPosition(this.dataContainer), i = 0; i < t.length; i++) this._verticalSwiping(null, t[i]);
					this._lazyLoad(), t.length > 0 && setTimeout(e.proxy(function () {
						this.dataContainer.trigger("updated")
					}, this))
				}, _waitForAnimate: function () {
					var t = e(".slide", this._K16).map(function (t, i) {
						return e(i).clipsToBounds("option", "metaData")
					});
					this.dataContainer.viewpointOData(t).trigger("updated")
				}, _mobileFirst: function () {
					this.swipeToSlide.open()
				}, _centerPadding: function () {
					var t = this.swipeToSlide.state().get("selection").toJSON();
					t.length > 0 && 0 == e(".slide", this._K16).length && this.verticalSwiping._viewpointOffset();
					for (var i = 0; i < t.length; i++) this._verticalSwiping(t[i]);
					var s = o.getPlaceholderPosition(e("#theta_carousel_admin_view"));
					e(".slide", this._K16).length > 6 && s.slidesListExpanded && this.offsetMultiplier._viewpointOffset(), this._waitForAnimate()
				}, waitForAnimate: function () {
					confirm("All slides will be deleted. Are you sure?") && (e(".slide", this._K16).remove(), this._waitForAnimate(), this._lazyLoad())
				}, _verticalSwiping: function (t, i) {
					var o = e('<div class="slide"></div>');
					o.appendTo(this._K16), o.clipsToBounds({mObject: t, metaData: i}), o.on("delete", e.proxy(function (t) {
						e(t.target).remove(), this._waitForAnimate(), this._lazyLoad()
					}, this)), o.on("updated", e.proxy(function (t) {
						this._waitForAnimate()
					}, this)), this._K16.sortable("refresh"), this._lazyLoad()
				}, _lazyLoad: function () {
					var t = e(".slide", this._K16).length > 0;
					t ? this.widget().removeClass("empty") : this.widget().addClass("empty")
				}, _updateScroll: function () {
					var t = o.getPlaceholderPosition(e("#theta_carousel_admin_view"));
					t.slidesListExpanded ? (this.widget().removeClass("section-collapsed"), this.offsetMultiplier.addClass("dashicons-editor-contract"), this.offsetMultiplier.removeClass("dashicons-editor-expand"), this.offsetMultiplier.attr("title", "Collapse")) : (this.widget().addClass("section-collapsed"), this.offsetMultiplier.addClass("dashicons-editor-expand"), this.offsetMultiplier.removeClass("dashicons-editor-contract"), this.offsetMultiplier.attr("title", "Expand"))
				}, _offsetMultiplier: function () {
					var t = o.getPlaceholderPosition(e("#theta_carousel_admin_view"));
					t.slidesListExpanded = !t.slidesListExpanded, e("#theta_carousel_admin_view").viewpointOData(t).trigger("updated")
				}, _destroy: function () {
					this.swipeToSlide.off("select"), this.emptySlide.remove()
				}
			})
		}(jQuery)
	}, {"./../common/_viewpointY": 30, "./utils": 1, "./clipsToBounds": 7}],
	10: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Cubical Parabola",
				name: "cubical_parabola",
				icon: "CubicalParabola.png",
				adaptiveHeight: 18,
				options: {
					_slidingType: 224,
					_fallbackModeDistance: 12,
					reflectionType: 12,
					_shiftPathZ: 932,
					_shiftPathY: 519,
					autoplayoff: 350,
					scaleX: 1.63,
					scaleY: .38,
					path: {settings: {_slidingMode: -982, _flippTime: 339}, type: "cubic"},
					perspective: 1084,
					rotationAnimationDuration: 1161,
					shadow: !0,
					shadowBlurRadius: 24,
					shadowSpreadRadius: -10,
					_zoomY: !0,
					shiftPathY: {p1: {x: 0, y: 128}, p2: {x: 11, y: 54}, p3: {x: 46, y: 73}, p4: {x: 100, y: 104}}
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	11: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Ellipse Vert.",
				name: "ellipse_vert",
				icon: "EllipseVert.png",
				adaptiveHeight: 5,
				options: {
					_slidingType: 35,
					_fallbackModeDistance: 2,
					reflectionType: 2,
					_shiftPathZ: 480,
					_shiftPathY: 591,
					autoplayoff: 400,
					scaleX: 1.49,
					scaleY: .65,
					scaleZ: .93,
					path: {
						settings: {
							slidingMode: -1033,
							_slidingMode: -1825,
							_baunceOff: 90,
							flippItem: 39,
							a: 1e3,
							b: 719,
							endless: !0
						}, type: "ellipse"
					},
					perspective: 956,
					rotationAnimationDuration: 958,
					sensitivity: .3,
					_findLastInde: !0,
					shadow: !0,
					shadowBlurRadius: 28,
					shadowSpreadRadius: -10,
					_zoomY: !0,
					shiftPathY: {p1: {x: 0, y: 72}, p2: {x: 14, y: 34}, p3: {x: 30, y: 24}, p4: {x: 100, y: 0}},
					_slidingRotatin: !0,
					itemContentHeight: 2,
					transparencyAlgorithm: 637
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	12: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Ellipse",
				name: "ellipse",
				icon: "Ellipse.png",
				adaptiveHeight: 15,
				options: {
					_slidingType: 24,
					_shiftPathZ: 930,
					_shiftPathY: 596,
					autoplayoff: 300,
					path: {
						settings: {slidingMode: 651, _slidingMode: -3408, _autoplyon: 19, a: 1436, b: 1798, endless: !0},
						type: "ellipse"
					},
					perspective: 956,
					sensitivity: .2,
					shadow: !0,
					shadowBlurRadius: 156,
					shadowSpreadRadius: -42,
					_slidingRotatin: !0,
					reotationAngle: 58,
					transparencyAlgorithm: 1e3
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	13: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Ellipse 2",
				name: "ellipse2",
				icon: "Ellipse2.png",
				adaptiveHeight: 10,
				options: {
					_slidingType: 36,
					_shiftPathZ: 930,
					_shiftPathY: 441,
					autoplayoff: 550,
					path: {
						settings: {slidingMode: -99, _slidingMode: -2754, flippRotation: !0, a: 1359, b: 1194, endless: !0},
						type: "ellipse"
					},
					rotationAnimationDuration: 1161,
					sensitivity: .1,
					_zoomX: !0,
					shadow: !0,
					shadowBlurRadius: 32,
					shadowSpreadRadius: -10,
					_slidingRotatin: !0,
					reotationAngle: 39,
					transparencyAlgorithm: 1e3
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	14: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = [];
			return i.push(t("./ellipse")), i.push(t("./ellipse2")), i.push(t("./parabola")), i.push(t("./invert-rotation")), i.push(t("./line-left")), i.push(t("./line")), i.push(t("./line-popout")), i.push(t("./cubical-parabola")), i.push(t("./wave")), i.push(t("./spiral")), i.push(t("./ellipse-vert")), i
		}(jQuery)
	}, {
		"./cubical-parabola": 10,
		"./ellipse": 12,
		"./ellipse-vert": 11,
		"./ellipse2": 13,
		"./invert-rotation": 15,
		"./line": 18,
		"./line-left": 16,
		"./line-popout": 17,
		"./parabola": 19,
		"./spiral": 20,
		"./wave": 21
	}],
	15: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Invert Rotation",
				name: "invert_rotation",
				icon: "InvertRotation.png",
				adaptiveHeight: 5,
				options: {
					_slidingType: 74,
					_fallbackModeDistance: 4,
					reflectionType: 4,
					_shiftPathZ: 930,
					_shiftPathY: 320,
					autoplayoff: 820,
					path: {
						settings: {
							_autoplyoff: -20,
							slidingMode: -31,
							_slidingMode: -1009,
							width: 2300,
							depth: 340,
							_flippLeft: {p1: {x: -100, y: 0}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}, p4: {x: 100, y: 0}},
							nonFlip: {p1: {x: 0, y: 0}, p2: {x: 100, y: 10}, p3: {x: 0, y: 90}, p4: {x: 100, y: 100}},
							_flippRighgt: {p1: {x: -100, y: 50}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}, p4: {x: 100, y: 50}}
						}, type: "cubic_bezier"
					},
					rotationAnimationDuration: 1161,
					sensitivity: .5,
					_zoomX: !0,
					rewokeMovement: -2,
					shadow: !0,
					shadowBlurRadius: 26,
					shadowSpreadRadius: -10,
					rotation: !0,
					resolutionHeight: {p1: {x: 0, y: 0}, p2: {x: 47, y: -34}, p3: {x: 67, y: -21}, p4: {x: 100, y: -37}},
					reotationEasing: .3,
					zoomY: !0,
					_zoomY: !0,
					shiftPathY: {p1: {x: 0, y: 100}, p2: {x: 30, y: 70}, p3: {x: 70, y: 70}, p4: {x: 100, y: 60}},
					_slidingRotatin: !0,
					transparencyAlgorithm: 86
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	16: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Line Left",
				name: "line_left",
				icon: "LineLeft.png",
				adaptiveHeight: 3,
				options: {
					_slidingType: 160,
					_fallbackModeDistance: 6,
					reflectionType: 0,
					_shiftPathZ: 930,
					_shiftPathY: 381,
					autoplayoff: 300,
					path: {settings: {_autoplyoff: -272, _slidingMode: 57, _autoplyon: -1, flippItem: -41}, type: "line"},
					perspective: 351,
					rotationAnimationDuration: 1161,
					sensitivity: .7,
					shadow: !0,
					shadowBlurRadius: 26,
					shadowSpreadRadius: -10,
					_zoomY: !0,
					shiftPathX: 7,
					shiftPathY: {p1: {x: 0, y: 100}, p2: {x: 58, y: 94}, p3: {x: 72, y: 85}, p4: {x: 100, y: 55}}
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	17: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Line Popout",
				name: "line_popout",
				icon: "LinePopout.png",
				adaptiveHeight: 3,
				options: {
					_slidingType: 124,
					_fallbackModeDistance: 6,
					reflectionType: 3,
					_shiftPathZ: 930,
					_shiftPathY: 499,
					autoplayoff: 300,
					path: {settings: {_autoplyoff: 571, _slidingMode: -845, flippItem: -8}, type: "line"},
					perspective: 351,
					rotationAnimationDuration: 1161,
					sensitivity: -.7,
					shadow: !0,
					shadowBlurRadius: 24,
					shadowSpreadRadius: -10,
					_slidingRotatin: !0,
					itemContentHeight: -894,
					transparencyAlgorithm: 681
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	18: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Line",
				name: "line",
				icon: "Line.png",
				adaptiveHeight: 3,
				options: {
					_slidingType: 680,
					_fallbackModeDistance: 2,
					reflectionType: 2,
					_shiftPathZ: 930,
					_shiftPathY: 168,
					autoplayoff: 250,
					path: {settings: {_autoplyoff: -2124, _slidingMode: 43, flippItem: -91}, type: "line"},
					perspective: 787,
					rotationAnimationDuration: 1161,
					shadow: !0,
					shadowBlurRadius: 20,
					shadowSpreadRadius: -10,
					_slidingRotatin: !0,
					itemContentHeight: 1,
					reotationAngle: -58,
					transparencyAlgorithm: 176
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	19: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Parabola",
				name: "parabola",
				icon: "Parabola.png",
				adaptiveHeight: 3,
				options: {
					_slidingType: 247,
					_fallbackModeDistance: 3,
					reflectionType: 3,
					_shiftPathZ: 930,
					_shiftPathY: 380,
					path: {settings: {_slidingMode: -436, _flippTime: 519}},
					rotationAnimationDuration: 1161,
					shadow: !0,
					shadowBlurRadius: 26,
					shadowSpreadRadius: -10
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	20: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Spiral",
				name: "spiral",
				icon: "Spiral.png",
				adaptiveHeight: 30,
				options: {
					_slidingType: 28,
					_fallbackModeDistance: 8,
					reflectionType: 20,
					_shiftPathZ: 932,
					_shiftPathY: 461,
					autoplayoff: 350,
					scaleX: 1.97,
					scaleZ: 1.65,
					path: {settings: {_slidingMode: -6266, _baunceOff: 8, fi: 2}, type: "archimedes_spiral"},
					perspective: 1460,
					getComputedStyle: "scale",
					_reflectionType: "easeInQuad",
					rotationAnimationDuration: 910,
					sensitivity: -.2,
					shadow: !0,
					shadowBlurRadius: 28,
					shadowSpreadRadius: -10,
					autoplayon: !0,
					itemsWidth: {p1: {x: 0, y: 100}, p2: {x: 53, y: 90}, p3: {x: 52, y: 84}, p4: {x: 100, y: 55}},
					_slidingRotatin: !0,
					itemContentHeight: 20,
					reotationAngle: -77,
					transparencyAlgorithm: 771
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	21: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";
			return {
				title: "Wave",
				name: "wave",
				name: "wave",
				icon: "Wave.png",
				adaptiveHeight: 14,
				options: {
					_slidingType: 230,
					_fallbackModeDistance: 9,
					reflectionType: 9,
					_shiftPathZ: 930,
					_shiftPathY: 375,
					autoplayoff: 370,
					scaleX: 1.79,
					scaleY: 1.17,
					path: {
						settings: {
							_autoplyoff: 3,
							slidingMode: 235,
							_slidingMode: -1695,
							pathLength: 4528,
							width: 1078,
							height: 500,
							depth: 10,
							_flippLeft: {p1: {x: -100, y: 0}, p2: {x: 0, y: 100}, p3: {x: 0, y: -100}, p4: {x: 100, y: 0}},
							nonFlip: {p1: {x: 0, y: 0}, p2: {x: 100, y: 0}, p3: {x: 0, y: 100}, p4: {x: 100, y: 100}},
							_flippRighgt: {p1: {x: -100, y: 50}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}, p4: {x: 100, y: 50}}
						}, type: "cubic_bezier"
					},
					rotationAnimationDuration: 700,
					sensitivity: 1.1,
					shadow: !0,
					shadowBlurRadius: 29,
					shadowSpreadRadius: -10,
					_zoomY: !0,
					shiftPathX: 9,
					shiftPathY: {p1: {x: 0, y: 80}, p2: {x: 9, y: 26}, p3: {x: 54, y: 43}, p4: {x: 100, y: 15}}
				},
				appendArrows: function (t, e, i) {
					return t.appendDots = Math.floor(i.length / 2), t
				}
			}
		}(jQuery)
	}, {}],
	22: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./desktop-dragging");
			return {
				title: "Image Text Bottom",
				name: "image_text_bottom",
				icon: "image_text_bottom.png",
				slickPause: function (t) {
					i.demandCarousel.call(this, t)
				},
				slickGoTo: function (t) {
					var o = e('<div><img class="image-div" /><div class="slide-inner-title slide-title"></div></div>');
					return e(".image-div", o).attr("src", t.full.url).css({width: "100%"}), e(".slide-inner-title", o).text(t.slideTitle), o.css({paddingBottom: "5px"}), i.setPosition(o, t), o
				}
			}
		}(jQuery)
	}, {"./desktop-dragging": 29}],
	23: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";

			function i() {
				e(".slide-title", this.closest(".theta-carousel-outer-container")).fadeTo("fast", .001)
			}

			function o() {
				var t = e(".theta-current-item", this).data("title");
				e(".slide-title", this.closest(".theta-carousel-outer-container")).text(t).fadeTo("fast", 1)
			}

			var s = t("./desktop-dragging");
			return {
				demandCarousel: function (t) {
					o.call(t), t.on("motionStart", i), t.on("motionEnd", o), s.demandCarousel.call(this, t)
				}, slickGoToBase: function (t) {
					var i = e('<img class="image-div" />');
					return i.attr("src", t.full.url), i.data("title", t.slideTitle), s.setPosition(i, t), i
				}
			}
		}(jQuery)
	}, {"./desktop-dragging": 29}],
	24: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./data-slick");
			return {
				title: "Image Text Common Bottom",
				name: "image_text_common_bottom",
				icon: "image_text_common_bottom.png",
				position: "bottom",
				slickPause: function (t) {
					e('<div class="slide-outer-title slide-title"></div>').insertAfter(t), i.demandCarousel.call(this, t)
				},
				slickGoTo: function (t) {
					return i.slickGoToBase.call(this, t)
				}
			}
		}(jQuery)
	}, {"./data-slick": 23}],
	25: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./data-slick");
			return {
				title: "Image Text Common Top",
				name: "image_text_common_top",
				icon: "image_text_common_top.png",
				position: "top",
				slickPause: function (t) {
					e('<div class="slide-outer-title slide-title"></div>').insertBefore(t), i.demandCarousel.call(this, t)
				},
				slickGoTo: function (t) {
					return i.slickGoToBase.call(this, t)
				}
			}
		}(jQuery)
	}, {"./data-slick": 23}],
	26: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./desktop-dragging");
			return {
				title: "Image Text Top", name: "image_text_top", icon: "image_text_top.png", slickPause: function (t) {
					i.demandCarousel.call(this, t)
				}, slickGoTo: function (t) {
					var o = e('<div><div class="slide-inner-title slide-title"></div><img class="image-div" /></div>');
					return e(".image-div", o).attr("src", t.full.url).css({width: "100%"}), e(".slide-inner-title", o).text(t.slideTitle).css({paddingBottom: "30px"}), o.css({paddingTop: "5px"}), i.setPosition(o, t), o
				}
			}
		}(jQuery)
	}, {"./desktop-dragging": 29}],
	27: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./desktop-dragging");
			return {
				title: "Image", name: "image", icon: "image.png", slickPause: function (t) {
					i.demandCarousel.call(this, t)
				}, slickGoTo: function (t) {
					var o = e('<img class="image-div" />');
					return o.attr("src", t.full.url), o.attr("title", t.slideTitle), i.setPosition(o, t), o
				}
			}
		}(jQuery)
	}, {"./desktop-dragging": 29}],
	28: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = [];
			return i.push(t("./image")), i.push(t("./image-text-bottom")), i.push(t("./image-text-top")), i.push(t("./image-text-common-top")), i.push(t("./image-text-common-bottom")), i
		}(jQuery)
	}, {
		"./image": 27,
		"./image-text-bottom": 22,
		"./image-text-common-bottom": 24,
		"./image-text-common-top": 25,
		"./image-text-top": 26
	}],
	29: [function (t, e, i) {
		e.exports = function (t) {
			"use strict";

			function e() {
				var e = t(this).data("link");
				e && window.open(e, "_blank")
			}

			function i() {
				t(".theta-carousel-item", this).css({cursor: "default"}), t(".theta-current-item", this).off("click", e)
			}

			function o() {
				var i = t(".theta-current-item", this).data("link");
				i && (t(".theta-current-item", this).css({cursor: "pointer"}), t(".theta-current-item", this).on("click", e))
			}

			return {
				demandCarousel: function (t) {
					o.call(t), t.on("motionStart", i), t.on("motionEnd", o)
				}, setPosition: function (t, e) {
					t.data("link", e.navigateUrl)
				}
			}
		}(jQuery)
	}, {}],
	30: [function (t, e, i) {
		e.exports = function (e) {
			"use strict";
			var i = t("./../common/wrap-items-bw/index"), o = t("./../common/trsnaform-types/index");
			return {
				getPlaceholderPosition: function (t) {
					var e = t.val();
					if (null != e && "" != e) return JSON.parse(atob(e));
					throw"Settings object is undefined"
				}, lazyLoaded: function (t, e, i) {
					for (var s = o.find(function (t) {
						return t.name == e.slideLayout
					}), n = 0; n < i.length; n++) {
						var a = i[n], r = s.slickGoTo(a);
						r.addClass("theta-carousel-item"), Math.abs(a.full.height / a.full.width - 1) < .1 ? r.addClass("square") : a.full.height > a.full.width ? r.addClass("tall") : r.addClass("wide"), r.appendTo(t)
					}
				}, nextArrow: function (t, e, s) {
					t.css({height: e.extra.height + "px"}), t.addClass(e.path);
					var n = i.find(function (t) {
						return t.name == e.path
					}), a = n.appendArrows(n.options, e, s);
					a.filter = ".theta-carousel-item", "image" != e.slideLayout && "image_text_common_top" != e.slideLayout && "image_text_common_bottom" != e.slideLayout ? a.reflectionElement = ".image-div" : a.reflectionElement = null, t.theta_carousel(a);
					var r = o.find(function (t) {
						return t.name == e.slideLayout
					});
					r.slickPause(t)
				}, initialSlide: function (t, i) {
					t.css({height: i.extra.height + "px"}), e(".image-div", t).css({
						borderColor: i.extra.borderColor,
						borderStyle: "solid",
						borderWidth: i.extra.borderWidth + "px",
						backgroundColor: i.extra.slideBgTansparent ? "transparent" : i.extra.slideBgColor,
						borderRadius: i.extra.cornerRadius + "px"
					}), e(".slide-title", t.closest(".theta-carousel-outer-container")).css({
						color: i.extra.fontColor,
						fontSize: i.extra.fontSize
					}), i.extra.fontFamily && e(".slide-title", t.closest(".theta-carousel-outer-container")).css({fontFamily: i.extra.fontFamily})
				}, slidesPerRow: function (t, e) {
					t.theta_carousel({
						autorotation: e.extra.autorotation,
						autorotationDirection: e.extra.autorotationDirection,
						autorotationPause: e.extra.autorotationPause,
						"path.settings.endless": e.extra.endlessPath,
						shadow: e.extra.shadow,
						shadowBlurRadius: e.extra.shadowBlurRadius,
						shadowSpreadRadius: e.extra.shadowSpreadRadius,
						rotationAnimationDuration: e.extra.rotationAnimationDuration
					})
				}
			}
		}(jQuery)
	}, {"./../common/wrap-items-bw/index": 14, "./../common/trsnaform-types/index": 28}],
	31: [function (t, e, i) {
		!function () {
			function e(i, o, s) {
				function n(r, l) {
					if (!o[r]) {
						if (!i[r]) {
							var h = "function" == typeof t && t;
							if (!l && h) return h(r, !0);
							if (a) return a(r, !0);
							var u = new Error("Cannot find module '" + r + "'");
							throw u.code = "MODULE_NOT_FOUND", u
						}
						var c = o[r] = {exports: {}};
						i[r][0].call(c.exports, function (t) {
							var e = i[r][1][t];
							return n(e || t)
						}, c, c.exports, e, i, o, s)
					}
					return o[r].exports
				}

				for (var a = "function" == typeof t && t, r = 0; r < s.length; r++) n(s[r]);
				return n
			}

			return e
		}()({
			1: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = t("./../drag-logic.js"), a = t("./../opacityScale.js"), r = new s(i, {});
						this.previousItems = new n, this.previousItems.x = 1, this.nextItem = new n, this.nextItem.y = 1, e.extend(this, r), e.extend(this.settings, o), this.apply = function (t, e, i) {
							var o = this.layoutLogic.path.getPoint(i), s = this.layoutLogic.path.getPoint(i + .1), r = new n;
							r.wrapAround(o, s);
							var l = r.angle(this.previousItems);
							l *= this.layoutLogic.options.rewokeMovement, t.rotations.push(new a(this.nextItem, l))
						}
					}
				}(jQuery)
			}, {"./../opacityScale.js": 30, "./../drag-logic.js": 35, "./slideOffset.js": 2}],
			2: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (e, i) {
						this.layoutLogic = e, this.slidingRotatin = "positioning", this.settings = {}, t.extend(this.settings, i), this.withoutControls = function () {
							return 0
						}, this.apply = function (t, e, i) {
						}, this.revert = function () {
						}
					}
				}(jQuery)
			}, {}],
			3: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = t("./../inactive-slid.js"), a = new s(i, {});
						e.extend(this, a), e.extend(this.settings, o), this.apply = function (t, e, i) {
							var o = this.layoutLogic.path.pageBeing(), s = Math.abs(i - o),
								a = this.layoutLogic.options._slidingType * this.layoutLogic.options.nearEnd,
								r = 1 - Math.min(s / a, 1), l = this.layoutLogic.options.itemsWidth, h = n(r, l.p1, l.p2, l.p3, l.p4).y;
							e.page.css({opacity: h / 100})
						}
					}
				}(jQuery)
			}, {"./../inactive-slid.js": 10, "./slideOffset.js": 2}],
			4: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = new s(i, {});
						e.extend(this, n), e.extend(this.settings, o), this.apply = function (t, e, i) {
							var o = Math.abs(i - this.layoutLogic.path.pageBeing()),
								s = 1 - o / this.layoutLogic.options._slidingType;
							s = Math.max(s, 0), t.translateX += this.layoutLogic.options.itemContentHeight * s, t.translateY += this.layoutLogic.options.reotationAngle * s, t.translateZ += this.layoutLogic.options.transparencyAlgorithm * s
						}
					}
				}(jQuery)
			}, {"./slideOffset.js": 2}],
			5: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = new s(i, {});
						e.extend(this, n), e.extend(this.settings, o), this.apply = function (t, e, i) {
							e.fallbackMode || (e.fallbackMode = !0, e.page.css("box-reflect", "below " + this.layoutLogic.options.slidingType + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.layoutLogic.options.zoomX) + ", transparent), to(black))"))
						}, this.revert = function () {
							for (var t = 0; t < this.layoutLogic.defaultScrollInterpolator.length; t++) this.layoutLogic.defaultScrollInterpolator[t].fallbackMode = !1, this.layoutLogic.defaultScrollInterpolator[t].page.css("box-reflect", "")
						}
					}
				}(jQuery)
			}, {"./slideOffset.js": 2}],
			6: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = t("./../inactive-slid.js"), a = t("./../drag-logic.js"),
							r = t("./../opacityScale.js"), l = new s(i, {});
						e.extend(this, l), e.extend(this.settings, o), this.apply = function (t, e, i) {
							var o = this.layoutLogic.path.pageBeing(), s = Math.abs(i - o),
								l = this.layoutLogic.options._slidingType * this.layoutLogic.options.resolutionWidth,
								h = 1 - Math.min(s / l, 1), u = this.layoutLogic.options.resolutionHeight,
								c = n(h, u.p1, u.p2, u.p3, u.p4).y;
							i < o && this.layoutLogic.options.zoomY && (c *= -1);
							var d = new a;
							d.x = this.layoutLogic.options.targetPosition, d.y = this.layoutLogic.options.reotationEasing, d.z = this.layoutLogic.options.rotationCoefficient, t.rotations.push(new r(d, c))
						}
					}
				}(jQuery)
			}, {"./../inactive-slid.js": 10, "./../opacityScale.js": 30, "./../drag-logic.js": 35, "./slideOffset.js": 2}],
			7: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = new s(i, {});
						e.extend(this, n), e.extend(this.settings, o), this.apply = function (t, i, o) {
							var s = "0px 0px " + this.layoutLogic.options.shadowBlurRadius + "px " + this.layoutLogic.options.shadowSpreadRadius + "px #000000",
								n = i.page;
							this.layoutLogic.options.reflectionElement && (n = e(this.layoutLogic.options.reflectionElement, n)), n.css({
								"-webkit-box-shadow": s,
								"-moz-box-shadow": s,
								"box-shadow": s
							})
						}, this.revert = function () {
							for (var t = 0; t < this.layoutLogic.defaultScrollInterpolator.length; t++) {
								var i = this.layoutLogic.defaultScrollInterpolator[t].page;
								this.layoutLogic.options.reflectionElement && (i = e(this.layoutLogic.options.reflectionElement, i)), i.css({
									"-webkit-box-shadow": "",
									"-moz-box-shadow": "",
									"box-shadow": ""
								})
							}
						}
					}
				}(jQuery)
			}, {"./slideOffset.js": 2}],
			8: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./slideOffset.js"), n = t("./../inactive-slid.js"), a = new s(i, {});
						e.extend(this, a), e.extend(this.settings, o), this.apply = function (t, e, i) {
							var o = this.layoutLogic.path.pageBeing(), s = Math.abs(i - o),
								a = this.layoutLogic.options._slidingType * this.layoutLogic.options.shiftPathX,
								r = 1 - Math.min(s / a, 1), l = this.layoutLogic.options.shiftPathY, h = n(r, l.p1, l.p2, l.p3, l.p4).y;
							t.scale = h / 100
						}
					}
				}(jQuery)
			}, {"./../inactive-slid.js": 10, "./slideOffset.js": 2}],
			9: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";

					function e(e) {
						e.canFireBeforeCallback = function () {
							this.layoutLogic.options.autorotation ? this.beforeSnapToItem() : (this.shiftPathZ = !1, this.fallbackModeDistance && clearTimeout(this.fallbackModeDistance))
						}, e.beforeSnapToItem = function () {
							this.shiftPathZ || (this.shiftPathZ = !!this.move())
						}, e.move = t.proxy(function () {
							return "left" == this.layoutLogic.options.autorotationDirection ? this.layoutLogic.translateCoordinates() : "right" == this.layoutLogic.options.autorotationDirection ? this.layoutLogic.specialForIE() : void 0
						}, e), e.onMotionEnd = t.proxy(function () {
							this.shiftPathZ && (this.fallbackModeDistance && clearTimeout(this.fallbackModeDistance), this.fallbackModeDistance = setTimeout(this.move, this.layoutLogic.options.autorotationPause))
						}, e), e.destroy = function () {
							this.layoutLogic.widget().off("motionEnd", this.onMotionEnd)
						}
					}

					return function (t) {
						this.shiftPathZ = !1, this.layoutLogic = t, this.fallbackModeDistance = null, e(this), this.layoutLogic.widget().on("motionEnd", this.onMotionEnd), this.canFireBeforeCallback()
					}
				}(jQuery)
			}, {}],
			10: [function (t, e, i) {
				function o(t) {
					return t * t * t
				}

				function s(t) {
					return 3 * t * t * (1 - t)
				}

				function n(t) {
					return 3 * t * (1 - t) * (1 - t)
				}

				function a(t) {
					return (1 - t) * (1 - t) * (1 - t)
				}

				e.exports = function (t) {
					"use strict";
					return function (t, e, i, r, l) {
						var h = {x: 0, y: 0};
						return h.x = e.x * o(t) + i.x * s(t) + r.x * n(t) + l.x * a(t), h.y = e.y * o(t) + i.y * s(t) + r.y * n(t) + l.y * a(t), h
					}
				}(jQuery)
			}, {}],
			11: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";

					function i(t, e, i, s) {
						for (var n = o(0, t, e, i, s), a = n.x, r = n.y, l = n.x, h = n.y, u = 0; u <= 20; u++) {
							var c = o(.05 * u, t, e, i, s);
							a = Math.min(c.x, a), r = Math.min(c.y, r), l = Math.max(c.x, l), h = Math.max(c.y, h)
						}
						return {minX: a, minY: r, maxX: l, maxY: h, width: l - a, height: h - r}
					}

					var o = t("./inactive-slid.js"), s = [];
					return function (t, e, o, n) {
						var a = t.x + "." + t.y + "." + e.x + "." + e.y + "." + o.x + "." + o.y + "." + n.x + "." + n.y;
						return "undefined" == typeof s[a] && (s[a] = i(t, e, o, n)), s[a]
					}
				}(jQuery)
			}, {"./inactive-slid.js": 10}],
			12: [function (t, e, i) {
				t("./inactiveSlideOpacity.js")(), function (e) {
					"use strict";
					e.theta || (e.theta = new Object);
					var i = t("./default_behaviour.js"), o = t("./updates_optimizer.js"), s = t("./arrow_type.js"),
						n = t("./firstItem.js"), a = t("./current_content.js"), r = t("./_slidingEntrances.js"),
						l = t("./_zoomZ.js"), h = t("./native-snap.js"), u = t("./fireCallback.js"), c = t("./loop"),
						d = t("./carousel-controls.js"), p = t("./paths/page_info.js"), g = t("./paths/animate_type.js"),
						f = t("./paths/looped_logic.js"), y = t("./paths/current_page_detector.js"), m = t("./paths/page_style.js"),
						v = t("./paths/carousel_buffered.js"), x = t("./PageInfo/scroll_logic.js"),
						w = t("./PageInfo/layout_logic.js"), _ = t("./PageInfo/page_info_text_separator.js"),
						S = t("./PageInfo/bullets_container_style.js"), L = t("./PageInfo/bullets_container.js"),
						b = t("./PageInfo/customisable_transitions.js"), C = t("./PageInfo/entrances.js"), I = "1.6.4", A = {
							filter: "div",
							appendDots: 0,
							_slidingType: 70,
							getComputedStyle: "z",
							scaleX: 1,
							scaleY: 1,
							scaleZ: 1,
							perspective: 1e3,
							_fallbackModeDistance: null,
							reflectionType: null,
							sensitivity: 1,
							_findLastInde: !1,
							findLastIndex: 0,
							_reflectionType: "easeOutCubic",
							rotationAnimationDuration: 500,
							_shiftPathX: 10,
							shiftPathCoef: 50,
							path: {type: "parabola", settings: {}},
							_shiftPathZ: null,
							_shiftPathY: null,
							enabled: !0,
							_shiftPathCoef: !0,
							_autoplayon: !0,
							_autoplayoff: !0,
							autorotation: !1,
							autorotationDirection: "right",
							autorotationPause: 0,
							_zoomX: !1,
							rewokeMovement: 1,
							autoplayon: !1,
							nearEnd: 5,
							itemsWidth: {p1: {x: 0, y: 100}, p2: {x: 50, y: 50}, p3: {x: 50, y: 50}, p4: {x: 100, y: 0}},
							rotation: !1,
							targetPosition: 0,
							reotationEasing: 0,
							rotationCoefficient: 0,
							resolutionWidth: 5,
							resolutionHeight: {p1: {x: 0, y: 0}, p2: {x: 50, y: 0}, p3: {x: 50, y: 0}, p4: {x: 100, y: 0}},
							zoomY: !1,
							_zoomY: !1,
							shiftPathX: 5,
							shiftPathY: {p1: {x: 0, y: 100}, p2: {x: 50, y: 100}, p3: {x: 50, y: 100}, p4: {x: 100, y: 100}},
							shadow: !1,
							shadowBlurRadius: 100,
							shadowSpreadRadius: 0,
							reflectionElement: null,
							_slidingRotatin: !1,
							itemContentHeight: 0,
							reotationAngle: 0,
							transparencyAlgorithm: 0,
							reflection: !1,
							slidingType: 0,
							zoomX: .3,
							fallback: "auto",
							autoplayoff: 200
						};
					e.theta.carousel = function (t, I) {
						var A = this;
						A.page = e(t), A.page.data("theta.carousel", A), A.page.addClass("theta-carousel"), A._create = function () {
							this.options = e.extend(!0, {}, e.theta.carousel.zoomZ, I);
							var t = new c(this.widget().width(), this.widget().height());
							this.autoGenerateStyleTag = e('<div class="theta-carousel-inner-container"></div>'), this.autoGenerateStyleTag.appendTo(this.widget()), this.autoGenerateStyleTag.css({
								width: t.width + "px",
								height: t.height + "px"
							}), this.widget().attr("tabindex", 0).css({
								outline: "none",
								overflow: "hidden"
							}), this.autoGenerateStyleTag.css({
								transformStyle: "preserve-3d",
								overflow: "hidden",
								perspective: this.options.perspective + "px",
								transform: "translate3d(0px,0px, 100000px)"
							}), this.update(), this.renderCenterRightControls = [], this.framePadding(), this.heightMode(), this.zoomType(), this.defaultAnimatedStyles = new s(this), this.componentPath = new o(this), this.scroll_logic(), this.cellAlign = new i(this), this.stackScrollInterpolator = new a(this, e.proxy(this._treansform_logic, this)), this.componentUpdater = new n(this), this.autoRotator = new u(this), e(this.cellAlign).on("step", e.proxy(function (t, e) {
								this.scroll_logic(e)
							}, this)), e(this.cellAlign).on("done", e.proxy(function (t, e) {
								this.customisableTransitions(e), this.renderTopRightControls()
							}, this)), e(this.stackScrollInterpolator).on("end", e.proxy(function (t, e) {
								this._releaseScroll(e)
							}, this)), e(this.stackScrollInterpolator).on("start", e.proxy(this.arouselAutoRotate, this)), this.initialized = !0
						}, A.destroy = function () {
							for (var t = 0; t < this.renderCenterRightControls.length; t++) this.renderCenterRightControls[t].revert();
							null != this.enableMomentum && this.enableMomentum.destroy(), this.componentUpdater.destroy(), this.componentPath.destroy(), this.defaultAnimatedStyles.destroy(), this.autoRotator.destroy();
							for (var t = 0; t < this.defaultScrollInterpolator.length; t++) this.defaultScrollInterpolator[t].page.off("tap", this.moveTo), this.defaultScrollInterpolator[t].page.off("click", this.moveTo);
							this.widget().data("theta.carousel", null)
						}, A.translateCoordinates = function () {
							return this.enableMomentum.translateCoordinates()
						}, A.specialForIE = function () {
							return this.enableMomentum.specialForIE()
						}, A.moveTo = function (t) {
							this.enableMomentum.moveTo(t)
						}, A.invalidate = function () {
							this.layout_logic || this.scroll_logic()
						}, A.update = function () {
							var t = this.widget().contents().filter(function () {
								return !(8 != this.nodeType && e(this).hasClass("theta-ignore") || e(this).hasClass("theta-carousel-inner-container"))
							});
							t.appendTo(this.autoGenerateStyleTag), this.defaultScrollInterpolator = this.autoGenerateStyleTag.children().filter(this.options.filter).map(function (t, i) {
								var o = e(i), s = o.data("theta-order");
								return s || (s = t), {page: o, element: i, order: s}
							}).toArray(), this.defaultScrollInterpolator.sort(function (t, e) {
								return t.order - e.order
							});
							for (var i = 0; i < this.defaultScrollInterpolator.length; i++) this.defaultScrollInterpolator[i].index = i, this.defaultScrollInterpolator[i].element.index = i, this.defaultScrollInterpolator[i].page.hasClass("theta-carousel-element") || (this.defaultScrollInterpolator[i].page.addClass("theta-carousel-element"), this.defaultScrollInterpolator[i].page.css({position: "absolute"}), this.defaultScrollInterpolator[i].page.on("tap", e.proxy(this.moveTo, this, i)), this.defaultScrollInterpolator[i].page.click(e.proxy(function (t) {
								this.options.enabled && !this.options.autorotation && this.moveTo(t.index)
							}, this, this.defaultScrollInterpolator[i].element)));
							this.options.appendDots = Math.max(Math.min(this.options.appendDots, this.defaultScrollInterpolator.length - 1), 0), 0 == this.defaultScrollInterpolator.length && (this.options.appendDots = -1), this.initialized && (this.defaultAnimatedStyles.update(), this.invalidate()), this.initialSlideWidth()
						}, A.getIsInMotion = function () {
							return this.layout_logic
						}, A.getIsFallbackMode = function () {
							return this.enableMomentum.onScrollTriggered()
						}, A.widget = function () {
							return this.page
						}, A._setOption = function (t, e) {
							d.beforeSlide(A.options, t, e), "rotationAnimationDuration" !== t && "_reflectionType" !== t && ("filter" === t && this.update(), "perspective" === t && (this.autoGenerateStyleTag.css({perspective: e + "px"}), "scale" == this.options.getComputedStyle && this.scroll_logic()), 0 != t.indexOf("path") && "fallback" !== t || (this.framePadding(), this.zoomType(), this.scroll_logic()), "appendDots" !== t && "_slidingType" !== t && "getComputedStyle" !== t && "_fallbackModeDistance" !== t && "reflectionType" !== t && "scaleX" !== t && "scaleY" !== t && "scaleZ" !== t && "rewokeMovement" !== t && "itemsWidth" !== t && "nearEnd" !== t && "resolutionHeight" !== t && "resolutionWidth" !== t && "zoomY" !== t && "targetPosition" !== t && "reotationEasing" !== t && "rotationCoefficient" !== t && "shiftPathX" !== t && "shiftPathY" !== t && "shadowBlurRadius" !== t && "shadowSpreadRadius" !== t && "itemContentHeight" !== t && "reotationAngle" !== t && "transparencyAlgorithm" !== t && "autoplayoff" !== t || this.scroll_logic(), t.indexOf("autorotation") != -1 && this.autoRotator.canFireBeforeCallback(), t.indexOf("_zoomX") == -1 && t.indexOf("autoplayon") == -1 && t.indexOf("rotation") == -1 && t.indexOf("_zoomY") == -1 && t.indexOf("shadow") == -1 && t.indexOf("_slidingRotatin") == -1 && t.indexOf("reflection") == -1 || (this.heightMode(), this.scroll_logic()), "appendDots" === t && this.initialSlideWidth())
						}, A.zoomType = function () {
							null != this.enableMomentum && this.enableMomentum.destroy(), this.path.isEndless() ? this.enableMomentum = new l(this) : this.enableMomentum = new r(this), ("always" == this.options.fallback || "auto" == this.options.fallback && h.fallback()) && (this.enableMomentum = new h(this, this.enableMomentum)), this.autoRotator && this.autoRotator.canFireBeforeCallback()
						}, A.heightMode = function () {
							for (var t = 0; t < this.renderCenterRightControls.length; t++) this.renderCenterRightControls[t].revert();
							this.renderCenterRightControls = [], this.options._zoomX && this.renderCenterRightControls.push(new x(this, {})), this.options.autoplayon && this.renderCenterRightControls.push(new w(this, {})), this.options.rotation && this.renderCenterRightControls.push(new S(this, {})), this.options._zoomY && this.renderCenterRightControls.push(new b(this, {})), this.options.shadow && this.renderCenterRightControls.push(new L(this, {})), this.options._slidingRotatin && this.renderCenterRightControls.push(new _(this, {})), this.options.reflection && this.renderCenterRightControls.push(new C(this, {}))
						}, A.framePadding = function () {
							var t = null;
							if ("parabola" == this.options.path.type && (t = new v(this, this.options.path.settings)), "line" == this.options.path.type && (t = new m(this, this.options.path.settings)), "cubic" == this.options.path.type && (t = new g(this, this.options.path.settings)), "archimedes_spiral" == this.options.path.type && (t = new p(this, this.options.path.settings)), "ellipse" == this.options.path.type && (t = new y(this, this.options.path.settings)), "cubic_bezier" == this.options.path.type && (t = new f(this, this.options.path.settings)), null == t) throw"path " + this.options.path.type + " is not supported.";
							this.path = t, this.options.path.settings = this.path.settings
						}, A._lockScroll = function () {
							this.widget().trigger("change", {index: this.options.appendDots}), this.initialSlideWidth()
						}, A.initialSlideWidth = function () {
							for (var t = 0; t < this.defaultScrollInterpolator.length; t++) t === this.options.appendDots ? this.defaultScrollInterpolator[t].page.addClass("theta-current-item") : this.defaultScrollInterpolator[t].page.removeClass("theta-current-item")
						}, A.arouselAutoRotate = function () {
							this.layout_logic = !0, this.widget().addClass("theta-in-motion"), this.widget().trigger("motionStart", {index: this.options.appendDots})
						}, A.renderTopRightControls = function () {
							this.componentUpdater.renderCenterLeftControls(!1), this.widget().removeClass("theta-in-motion"), this.layout_logic = !1, this.widget().trigger("motionEnd", {index: this.options.appendDots})
						}, A.customisableTransitions = function (t) {
							this.options.appendDots != t && (this.options.appendDots = t, this._lockScroll()), this.scroll_logic()
						}, A._treansform_logic = function (t) {
							return this.enableMomentum._specialForIE(t)
						}, A._releaseScroll = function (t) {
							this.enableMomentum.dataset(t)
						}, A.scroll_logic = function (t) {
							return this.enableMomentum.datasetSelector(t)
						}, A.currentContentOffset = function () {
							var t = e(".theta-carousel-inner-container", this.widget());
							return new c(t.width(), t.height())
						}, A._create()
					}, e.theta.carousel.zoomZ = A, e.theta.carousel.version = I, e.fn.theta_carousel = function (t) {
						var i = arguments, o = !1, s = null, n = this.each(function () {
							var n = e(this), a = n.data("theta.carousel");
							if (a) if ("string" == typeof t) {
								if ("function" == typeof a[t]) {
									var r = Array.prototype.slice.call(i, 1);
									o = !0, s = a[t].apply(a, r)
								}
								"option" == t && (2 == i.length && (o = !0, s = d.enableKeyboardControls(a.options, i[1])), 3 == i.length && a._setOption(i[1], i[2]))
							} else {
								var l = e.extend(!0, {}, t);
								e.each(l, e.proxy(n.data("theta.carousel")._setOption, n.data("theta.carousel")))
							} else new e.theta.carousel(this, t)
						});
						return o ? s : n
					}
				}(jQuery)
			}, {
				"./PageInfo/scroll_logic.js": 1,
				"./PageInfo/layout_logic.js": 3,
				"./PageInfo/page_info_text_separator.js": 4,
				"./PageInfo/entrances.js": 5,
				"./PageInfo/bullets_container_style.js": 6,
				"./PageInfo/bullets_container.js": 7,
				"./PageInfo/customisable_transitions.js": 8,
				"./fireCallback.js": 9,
				"./default_behaviour.js": 13,
				"./inactiveSlideOpacity.js": 14,
				"./arrow_type.js": 15,
				"./_zoomZ.js": 16,
				"./native-snap.js": 17,
				"./updates_optimizer.js": 18,
				"./firstItem.js": 20,
				"./current_content.js": 21,
				"./paths/page_info.js": 22,
				"./paths/animate_type.js": 24,
				"./paths/looped_logic.js": 25,
				"./paths/current_page_detector.js": 26,
				"./paths/page_style.js": 27,
				"./paths/carousel_buffered.js": 28,
				"./_slidingEntrances.js": 31,
				"./loop": 32,
				"./carousel-controls.js": 34
			}],
			13: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (e) {
						this.layoutLogic = e, this._shouldUseShiftLayout = !1, this.renderTopLeftControls = null, this.queue = [], this._slidingType = [], this._scrollPos = null, this.slidesToShow = function () {
							this.queue = [], this._slidingType = []
						}, this.animate = function (t, e, i, o, s) {
							"undefined" == typeof o && (o = null), "undefined" == typeof s && (s = null), this.addDistance(Math.abs(e - t)), this.queue.length > 5 || (this.queue.push({
								from: t,
								to: e,
								_getCustomData: i,
								easing: o,
								duration: s
							}), this._shouldUseShiftLayout || this._setScrollHandler())
						}, this._baunceIn = function () {
							null != this._scrollPos && this._scrollPos.stop(!0, !0)
						}, this._setScrollHandler = function () {
							if (this.queue.length > 0) {
								var e = this.queue[0];
								this.queue = this.queue.slice(1), this.renderTopLeftControls = e._getCustomData, this._scrollPos = t(e);
								var i = Math.abs(e.from - e.to), o = null == e.easing ? this.getEasing(i) : e.easing,
									s = (null == e.duration ? this.layoutLogic.options.rotationAnimationDuration : e.duration) * this.renderAnnounceSlideMessage(i);
								this._scrollPos.animate({from: e.to}, {
									easing: o,
									duration: s,
									start: t.proxy(this.onStart, this),
									step: t.proxy(this._shouldUseStackLayout, this),
									done: t.proxy(this.onDone, this),
									always: t.proxy(this.onSlideAnimation, this)
								})
							}
						}, this.scrollStartActive = function () {
							return this.queue.length > 0 ? this.queue[this.queue.length - 1]._getCustomData : this.renderTopLeftControls
						}, this.onStart = function () {
							this._shouldUseShiftLayout = !0
						}, this._shouldUseStackLayout = function (e) {
							t(this).trigger("step", e)
						}, this.onDone = function () {
							t(this).trigger("done", this.renderTopLeftControls)
						}, this.onSlideAnimation = function () {
							this._shouldUseShiftLayout = !1, this._setScrollHandler(), this._scrollPos = null
						}, this.addDistance = function (e) {
							this._slidingType.push({
								date: new Date,
								value: e
							}), this._slidingType = t(this._slidingType).filter(function (t, e) {
								return new Date - e.date < 5e3
							})
						}, this.props = function () {
							for (var t = 0, e = new Date, i = 0; i < this._slidingType.length; i++) {
								var o = this._slidingType[i];
								e - o.date < this.layoutLogic.options.rotationAnimationDuration && (t += o.value)
							}
							return t
						}, this.renderAnnounceSlideMessage = function (t) {
							return this.layoutLogic.options.autorotation ? 1 : 0 == this.props() ? 1 : 1 / (this.props() / t)
						}, this.getEasing = function (t) {
							return this.renderAnnounceSlideMessage(t) > .4 ? this.layoutLogic.options._reflectionType : "linear"
						}
					}
				}(jQuery)
			}, {}],
			14: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function () {
						var e = {};
						t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
							e[i] = function (e) {
								return Math.pow(e, t + 2)
							}
						}), t.extend(e, {
							Sine: function (t) {
								return 1 - Math.cos(t * Math.PI / 2)
							}, Circ: function (t) {
								return 1 - Math.sqrt(1 - t * t)
							}, Elastic: function (t) {
								return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
							}, Back: function (t) {
								return t * t * (3 * t - 2)
							}, Bounce: function (t) {
								for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;) ;
								return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
							}
						});
						var i = {};
						t.each(e, function (t, e) {
							i["easeIn" + t] = e, i["easeOut" + t] = function (t) {
								return 1 - e(1 - t)
							}, i["easeInOut" + t] = function (t) {
								return t < .5 ? e(2 * t) / 2 : 1 - e(t * -2 + 2) / 2
							}
						}), t.each(i, function (e, i) {
							"undefined" == typeof t.easing[e] && (t.easing[e] = i)
						})
					}
				}(jQuery)
			}, {}],
			15: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";

					function e(t) {
						t.update = function () {
							for (var t = !1, e = 0; e < this.layoutLogic.defaultScrollInterpolator.length; e++) {
								var i = this.layoutLogic.defaultScrollInterpolator[e], o = null;
								i.size && (o = i.size), i.size = {
									height: i.page.height(),
									width: i.page.width()
								}, o && o.height == i.size.height && o.width == i.size.width || (t = !0)
							}
							t && this.layoutLogic.invalidate()
						}, t.destroy = function () {
							clearInterval(this.interval)
						}
					}

					return function (i) {
						e(this), this.layoutLogic = i, this.interval = setInterval(t.proxy(this.update, this), 500), this.update()
					}
				}(jQuery)
			}, {}],
			16: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";

					function i(t) {
						t._doubleFlip = function (t) {
							var e = this.layoutLogic.options.appendDots - t, i = 0, o = !1;
							t > this.layoutLogic.options.appendDots ? i = this.layoutLogic.defaultScrollInterpolator.length - t + this.layoutLogic.options.appendDots : (i = (this.layoutLogic.defaultScrollInterpolator.length - this.layoutLogic.options.appendDots + t) * -1, o = !0);
							var s = e * this.props();
							(Math.abs(i) < Math.abs(e) || o && Math.abs(i) == Math.abs(e)) && (s = i * this.props()),
								this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, s, t, 1 === Math.abs(i) ? null : "linear")
						}, t.translateCoordinates = function () {
							var t = this.layoutLogic.cellAlign._shouldUseShiftLayout ? this.layoutLogic.cellAlign.scrollStartActive() : this.layoutLogic.options.appendDots;
							return t--, t < 0 && (t = this.layoutLogic.defaultScrollInterpolator.length + t), this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, this.props(), t, null), !0
						}, t.specialForIE = function () {
							var t = this.layoutLogic.cellAlign._shouldUseShiftLayout ? this.layoutLogic.cellAlign.scrollStartActive() : this.layoutLogic.options.appendDots;
							return t++, t >= this.layoutLogic.defaultScrollInterpolator.length && (t -= this.layoutLogic.defaultScrollInterpolator.length), this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, -1 * this.props(), t, null), !0
						}, t._specialForIE = function (t) {
							var e = this.layoutLogic.scroll_logic(t), i = parseInt(t / this.props(), 10),
								o = this.layoutLogic.options.appendDots;
							this.layoutLogic.options.appendDots -= i;
							var s = o - this.layoutLogic.options.appendDots;
							return this.layoutLogic.options.appendDots < 0 && (this.layoutLogic.options.appendDots = this.layoutLogic.options.appendDots % this.layoutLogic.defaultScrollInterpolator.length + this.layoutLogic.defaultScrollInterpolator.length, s = this.layoutLogic.defaultScrollInterpolator.length - this.layoutLogic.options.appendDots + o), this.layoutLogic.options.appendDots >= this.layoutLogic.defaultScrollInterpolator.length && (this.layoutLogic.options.appendDots = this.layoutLogic.options.appendDots % this.layoutLogic.defaultScrollInterpolator.length, s = this.layoutLogic.defaultScrollInterpolator.length - o + this.layoutLogic.options.appendDots, s *= -1), o != this.layoutLogic.options.appendDots && this.layoutLogic._lockScroll(), {
								_slidingType: s * this.props(),
								_shouldUseCustomAnimation: e
							}
						}, t.dataset = function (t) {
							if (0 != t) {
								var e = this.layoutLogic.options.appendDots;
								Math.abs(t) > this.props() / 2 && (t < 0 ? e++ : e--);
								var i = !1;
								0 == this.layoutLogic.defaultScrollInterpolator.length ? e = 0 : (e < 0 && (e = e % this.layoutLogic.defaultScrollInterpolator.length + this.layoutLogic.defaultScrollInterpolator.length, i = "back"), e >= this.layoutLogic.defaultScrollInterpolator.length && (e %= this.layoutLogic.defaultScrollInterpolator.length, i = "forward"));
								var o = 0;
								o = i ? "back" === i ? (this.layoutLogic.defaultScrollInterpolator.length - e + this.layoutLogic.options.appendDots) * this.props() : (this.layoutLogic.defaultScrollInterpolator.length - this.layoutLogic.options.appendDots + e) * this.props() * -1 : (this.layoutLogic.options.appendDots - e) * this.props();
								var s = Math.abs(this.layoutLogic.options.rotationAnimationDuration * (t / this.props()));
								s = Math.min(s, this.layoutLogic.options.rotationAnimationDuration / 2), this.layoutLogic.cellAlign.animate(t, o, e, null, s)
							}
						}, t.datasetSelector = function (t) {
							if (0 == this.layoutLogic.defaultScrollInterpolator.length || this.layoutLogic.options.appendDots < 0) return !1;
							this.layoutLogic.intersection = this.layoutLogic.currentContentOffset();
							var e = 0;
							"undefined" != typeof t && (e = t);
							for (var i = this.swapLoad(), s = this.getCustomSlideAnimation(i), n = 0; n < this.layoutLogic.defaultScrollInterpolator.length; n++) this.layoutLogic.defaultScrollInterpolator[n]._flattenDepth = !1;
							for (var a = [], n = new o(this.layoutLogic, this.layoutLogic.options.appendDots); !n._flattenDeep(); n._intersection()) {
								var r = this.getWrappedRef(this.layoutLogic.defaultScrollInterpolator[n.difference()], i + e, s);
								r && (this.layoutLogic.defaultScrollInterpolator[n.difference()]._flattenDepth = !0), a[n.difference()] = r, i = this.delayValue(i, this.props())
							}
							i = this.swapLoad();
							for (var n = new o(this.layoutLogic, this.layoutLogic.options.appendDots - 1); !n._flattenDeep() && !this.layoutLogic.defaultScrollInterpolator[n.difference()]._flattenDepth; n._difference()) i = this._nonFlip(i, this.props()), a[n.difference()] = this.getWrappedRef(this.layoutLogic.defaultScrollInterpolator[n.difference()], i + e, s);
							for (var n = 0; n < this.layoutLogic.defaultScrollInterpolator.length; n++) this.base.wrappedRef(!a[n], this.layoutLogic.defaultScrollInterpolator[n]);
							return this.dataGap(), !1
						}, t.wrappedRef = function (t) {
						}
					}

					var o = function (t, e) {
						this.currentIndex = e, this.currentIndex == -1 && (this.currentIndex = t.defaultScrollInterpolator.length - 1), this.iterations = 0, this.layoutLogic = t, this._intersection = function () {
							this.currentIndex++, this.currentIndex == this.layoutLogic.defaultScrollInterpolator.length && (this.currentIndex = 0), this.iterations++
						}, this._difference = function () {
							this.currentIndex--, this.currentIndex == -1 && (this.currentIndex = this.layoutLogic.defaultScrollInterpolator.length - 1), this.iterations--
						}, this._flattenDeep = function () {
							return Math.abs(this.iterations) >= this.layoutLogic.defaultScrollInterpolator.length
						}, this.difference = function () {
							return this.currentIndex
						}
					};
					return function (o) {
						var s = t("./_slidingEntrances.js");
						this.base = new s(o), e.extend(this, this.base), i(this)
					}
				}(jQuery)
			}, {"./_slidingEntrances.js": 31}],
			17: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";

					function e(t) {
						t.onScrollTriggered = function () {
							return !0
						}, t.props = function () {
							return this.layoutLogic.options.autoplayoff
						}, t.swapLoad = function () {
							return 0
						}, t.delayValue = function (t, e) {
							return t + e
						}, t._nonFlip = function (t, e) {
							return t - e
						}, t.arouselAutoSlide = function () {
							return -1 * this.currentContentOffset()
						}, t.currentContentOffset = function () {
							return (this.layoutLogic.intersection.width + this.props()) / 2
						}, t.getWrappedRef = function (t, e) {
							var i = e - t.size.width / 2 + this.layoutLogic.intersection.width / 2,
								o = this.layoutLogic.intersection.height / 2 - t.size.height / 2;
							t.page.css({transform: "", left: i + "px", top: o + "px"});
							var s = e > this.arouselAutoSlide() && e < this.currentContentOffset();
							return s ? t.page.show() : t.page.hide(), s
						}, t.destroy = function () {
							this.base.destroy();
							for (var t = 0; t < this.layoutLogic.defaultScrollInterpolator.length; t++) this.layoutLogic.defaultScrollInterpolator[t].page.css({
								left: "0",
								top: "0"
							})
						}
					}

					function i() {
						if (document.body && void 0 !== document.body.style.perspective) return !0;
						var t = document.createElement("div"), e = t.style, i = ["Webkit", "Moz", "O", "Ms", "ms"], o = i.length;
						if (void 0 !== t.style.perspective) return !0;
						for (; --o > -1;) if (void 0 !== e[i[o] + "Perspective"]) return !0;
						return !1
					}

					var o = null;
					return o = function (i, o) {
						this.base = o, t.extend(this, this.base), e(this)
					}, o.fallback = function () {
						return !i()
					}, o
				}(jQuery)
			}, {}],
			18: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";

					function e(e) {
						e.update = function () {
							var e = this.layoutLogic.widget().width(), i = this.layoutLogic.widget().height(), o = null;
							if (0 != e && 0 != i && (null != this.layoutLogic.options._shiftPathZ && null != this.layoutLogic.options._shiftPathY && (o = Math.min(e / this.layoutLogic.options._shiftPathZ, i / this.layoutLogic.options._shiftPathY)), e != this._initPositionsAndInterpolators || i != this.animateNextPage || o != this.pauseOnHover)) {
								var s = t(".theta-carousel-inner-container", this.layoutLogic.widget());
								null != o && (e /= o, i /= o, e / i < this.layoutLogic.options._shiftPathZ / this.layoutLogic.options._shiftPathY ? i = e * (this.layoutLogic.options._shiftPathY / this.layoutLogic.options._shiftPathZ) : e = i * (this.layoutLogic.options._shiftPathZ / this.layoutLogic.options._shiftPathY), s.css({
									left: this.layoutLogic.widget().width() / 2 - e / 2,
									top: this.layoutLogic.widget().height() / 2 - i / 2
								})), e != this._initPositionsAndInterpolators && (s.width(e), this.layoutLogic.invalidate(), this._initPositionsAndInterpolators = e), i != this.animateNextPage && (s.height(i), this.layoutLogic.invalidate(), this.animateNextPage = i), o != this.pauseOnHover && (null == o ? s.css({
									transform: "translate3d(0px,0px, 100000px)",
									position: "static"
								}) : s.css({
									transform: "translate3d(0px,0px, 100000px) scale(" + o + ")",
									position: "relative"
								}), this.layoutLogic.invalidate(), this.pauseOnHover = o)
							}
						}, e.callbackOffsetMargin = function () {
							return this.pauseOnHover ? this.pauseOnHover : 1
						}, e.destroy = function () {
							clearInterval(this.interval)
						}
					}

					return function (i) {
						e(this), this.layoutLogic = i, this.interval = setInterval(t.proxy(this.update, this), 200), this.update(), this._initPositionsAndInterpolators = null, this.animateNextPage = null, this.pauseOnHover = null
					}
				}(jQuery)
			}, {}],
			19: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (e) {
						this.layoutLogic = e, this.onAnimateNextPage = [], this.contentOffset = 0, this._shouldUseShiftLayout = !1, this._lastScrollDate = !1, this.nextActiveItem = !1, this.onScrollEnd = function (t) {
							this.onAnimateNextPage.push({date: new Date, _slidingType: t}), this.nativeEventRun()
						}, this.stop = function () {
							this.nextActiveItem = !1, t(this).stop(!1, !1)
						}, this._enableLoop = function () {
							if (this._lastScrollDate) {
								this._lastScrollDate = !1, this.nextActiveItem = !0, t(this).stop(!1, !1);
								var e = this.getDataIndex.canFireBeforeCallback + this.getDataIndex.onBeforeSnap - this.contentOffset,
									i = this.getDataIndex.itemReached * Math.abs(e / this.getDataIndex.onBeforeSnap),
									o = 100 * this.layoutLogic.options.shiftPathCoef, s = i * i / (2 * o);
								i < 0 && (s *= -1);
								var n = s / (i / 2);
								t(this).animate({contentOffset: this.contentOffset + s}, {
									easing: "easeOutQuad",
									duration: 1e3 * n,
									step: t.proxy(this._shouldUseStackLayout, this),
									complete: t.proxy(this.onScrollBeginDrag, this),
									fail: t.proxy(this.onFail, this)
								})
							}
						}, this.run = function (e) {
							var i = this.scrollStartActive();
							if (this.onAnimateNextPage = [], 0 == i) return void t(this).trigger("complete");
							var o = 100 * this.layoutLogic.options._shiftPathX, s = i * i / (2 * o);
							i < 0 && (s *= -1);
							var n = s / (i / 2);
							this.contentOffset = e, this._shouldUseShiftLayout = !0, this._lastScrollDate = !0, this.getDataIndex = {
								itemReached: i,
								onBeforeSnap: s,
								canFireBeforeCallback: e
							}, t(this).animate({contentOffset: e + s}, {
								easing: "easeOutCirc",
								duration: 1e3 * n,
								step: t.proxy(this._shouldUseStackLayout, this),
								complete: t.proxy(this.onScrollBeginDrag, this),
								fail: t.proxy(this.onFail, this)
							})
						}, this._shouldUseStackLayout = function (e) {
							isNaN(e) || (this.contentOffset = e, t(this).trigger("step", e))
						}, this.onScrollBeginDrag = function () {
							this._shouldUseShiftLayout = !1, t(this).trigger("complete")
						}, this.onFail = function () {
							this.nextActiveItem || (this._shouldUseShiftLayout = !1, t(this).trigger("stop"))
						}, this.nativeEventRun = function () {
							this.onAnimateNextPage = t(this.onAnimateNextPage).filter(function (t, e) {
								return new Date - e.date < 5e3
							})
						}, this.scrollStartActive = function () {
							for (var t = 0, e = new Date, i = 0; i < this.onAnimateNextPage.length; i++) {
								var o = this.onAnimateNextPage[i];
								e - o.date < 200 && (t += o._slidingType)
							}
							return 5 * t
						}
					}
				}(jQuery)
			}, {}],
			20: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";

					function e(t) {
						t.isVerticalRotation = function () {
							return this.layoutLogic.options._findLastInde && !this.layoutLogic.enableMomentum.onScrollTriggered()
						}, t.intersecion = function () {
							return this.layoutLogic.enableMomentum.onScrollTriggered() ? 1 : this.layoutLogic.options.sensitivity / this.layoutLogic.componentPath.callbackOffsetMargin()
						}, t._findLastIndex = function () {
							return !this.layoutLogic.options.enabled || this.layoutLogic.options.autorotation
						}, t.renderCenterCenterControls = function () {
							return this.layoutLogic.options._autoplayoff
						}, t.renderCenterLeftControls = function (t) {
							this.argMapping = t
						}, t._getSlideAnimation = function () {
							return null == this.animatedFlatList || new Date - this.animatedFlatList > 50
						}, t._scrollEndOffset = function () {
							this.animatedFlatList = new Date
						}, t._argMapping = function (t) {
							this.layoutLogic.stackScrollInterpolator._argMapping(t), this.initialX = t
						}, t.tinderAnimatedStyles = function (t) {
							var e = this.initialX - t;
							e *= this.intersecion(), t = this.initialX - e, this.layoutLogic.stackScrollInterpolator.tinderAnimatedStyles(t)
						}, t.onMousewheel = function (t) {
							if (this.layoutLogic.options._shiftPathCoef && !this._findLastIndex() && (t.preventDefault(), !this.layoutLogic.getIsInMotion())) {
								var e = !1, i = !1, o = t.originalEvent;
								t.deltaY && (1 == t.deltaY ? e = !0 : t.deltaY == -1 && (i = !0)), o.wheelDelta && (o.wheelDelta >= 120 ? e = !0 : o.wheelDelta <= -120 && (i = !0)), o.detail && (o.detail == -3 ? e = !0 : 3 == o.detail && (i = !0)), e && (this.intersecion() > 0 && this.layoutLogic.translateCoordinates(), this.intersecion() < 0 && this.layoutLogic.specialForIE()), i && (this.intersecion() < 0 && this.layoutLogic.translateCoordinates(), this.intersecion() > 0 && this.layoutLogic.specialForIE())
							}
						}, t.onKeyDown = function (t) {
							this.layoutLogic.options._autoplayon && (this._findLastIndex() || (t.which != this._fadingExists() && t.which != this.fadingExists() || t.preventDefault(), this.layoutLogic.stackScrollInterpolator._baunceOut || this.layoutLogic.stackScrollInterpolator.inertia._shouldUseShiftLayout || new Date - this.scrollStartOffset < this.layoutLogic.options.findLastIndex || (this.scrollStartOffset = new Date, t.which == this._fadingExists() && (this.intersecion() > 0 && this.layoutLogic.translateCoordinates(), this.intersecion() < 0 && this.layoutLogic.specialForIE()), t.which == this.fadingExists() && (this.intersecion() < 0 && this.layoutLogic.translateCoordinates(), this.intersecion() > 0 && this.layoutLogic.specialForIE()))))
						}, t.onTouchRelease = function (t) {
							this._findLastIndex() || this.layoutLogic.stackScrollInterpolator._baunceOut || this.layoutLogic.stackScrollInterpolator.inertia._shouldUseShiftLayout || t.which != this._fadingExists() && t.which != this.fadingExists() || this.layoutLogic.cellAlign.slidesToShow()
						}, t.destroyable = function (t, e) {
							return this.tinderScrollInterpolator[t] = e, e
						}, t.destroy = function () {
							for (var t in this.tinderScrollInterpolator) this.layoutLogic.widget().off(t, this.tinderScrollInterpolator[t])
						}, t.fadingExists = function () {
							return this.layoutLogic.options._findLastInde ? 40 : 37
						}, t._fadingExists = function () {
							return this.layoutLogic.options._findLastInde ? 38 : 39
						}
					}

					return function (i) {
						e(this), this.layoutLogic = i, this.scrollStartOffset = new Date, this.animatedFlatList = null, this.argMapping = !1, this.tinderScrollInterpolator = [], this.layoutLogic.widget().keyup(this.destroyable("keyup", t.proxy(this.onTouchRelease, this))), this.layoutLogic.widget().keydown(this.destroyable("keydown", t.proxy(this.onKeyDown, this))), this.layoutLogic.widget().mousedown(this.destroyable("mousedown", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && (this.layoutLogic.widget().focus(), this._argMapping(this.isVerticalRotation() ? t.pageY : t.pageX), t.preventDefault())
						}, this))), this.layoutLogic.widget().mousemove(this.destroyable("mousemove", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && (this._getSlideAnimation() && (this._scrollEndOffset(), this.tinderAnimatedStyles(this.isVerticalRotation() ? t.pageY : t.pageX)), t.preventDefault())
						}, this))), this.layoutLogic.widget().mouseleave(this.destroyable("mouseleave", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && (this.argMapping || (this.layoutLogic.stackScrollInterpolator._entrances(!0), t.preventDefault()))
						}, this))), this.layoutLogic.widget().mouseup(this.destroyable("mouseup", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && (this.layoutLogic.stackScrollInterpolator._entrances(!0), t.preventDefault())
						}, this))), "undefined" != typeof this.layoutLogic.widget().get(0).onmousewheel ? this.layoutLogic.widget().on("mousewheel", this.destroyable("mousewheel", t.proxy(this.onMousewheel, this))) : this.layoutLogic.widget().on("DOMMouseScroll", this.destroyable("DOMMouseScroll", t.proxy(this.onMousewheel, this))), this.layoutLogic.widget().on("touchstart", this.destroyable("touchstart", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && this._argMapping(this.isVerticalRotation() ? t.originalEvent.touches[0].screenY : t.originalEvent.touches[0].screenX)
						}, this))), this.layoutLogic.widget().on("touchmove", this.destroyable("touchmove", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && (this._getSlideAnimation() && (this._scrollEndOffset(), this.tinderAnimatedStyles(this.isVerticalRotation() ? t.originalEvent.touches[0].screenY : t.originalEvent.touches[0].screenX)), t.preventDefault())
						}, this))), this.layoutLogic.widget().on("touchend", this.destroyable("touchend", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && this.layoutLogic.stackScrollInterpolator._entrances(!0)
						}, this))), this.layoutLogic.widget().on("touchcancel", this.destroyable("touchcancel", t.proxy(function (t) {
							!this._findLastIndex() && this.renderCenterCenterControls() && this.layoutLogic.stackScrollInterpolator._entrances(!0)
						}, this))), this.layoutLogic.widget().on("taphold", this.destroyable("taphold", function (t) {
							t.preventDefault()
						}))
					}
				}(jQuery)
			}, {}],
			21: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";

					function i(t) {
						t.nativeSnap = function () {
							return this.inertia._shouldUseShiftLayout || this._baunceOut
						}, t._argMapping = function (t) {
							this.inertia._shouldUseShiftLayout || (this._slidingType = 0), this.inertia.stop(), this._baunceOut = !0, this.momentumScrollEnd = t, this._bouncingRate = !0
						}, t.tinderAnimatedStyles = function (t) {
							this._baunceOut && (this._bouncingRate && t != this.momentumScrollEnd && (e(this).trigger("start"), this._bouncingRate = !1), this.inertia.onScrollEnd(t - this.momentumScrollEnd), this.tinderAnimatedStylesInternal(t))
						}, t.tinderAnimatedStylesInternal = function (t) {
							this._slidingType += t - this.momentumScrollEnd, this.momentumScrollEnd = t;
							var e = this.treansform_logic(this._slidingType);
							this._slidingType -= e._slidingType, e._shouldUseCustomAnimation && this.inertia._shouldUseShiftLayout && this.inertia._enableLoop()
						}, t._entrances = function (t) {
							this.inertia._shouldUseShiftLayout || (this._baunceOut = !1, t ? this.inertia.run(this.momentumScrollEnd) : (e(this).trigger("end", this._slidingType), this._slidingType = 0))
						}, t.bouncingRate = function () {
							this._baunceOut = !1
						}
					}

					return function (o, s) {
						var n = t("./inertia.js");
						i(this), this._baunceOut = !1, this.momentumScrollEnd = null, this._slidingType = 0, this.treansform_logic = s, this.inertia = new n(o), e(this.inertia).on("complete", e.proxy(this._entrances, this, !1)), e(this.inertia).on("stop", e.proxy(this.bouncingRate, this)), e(this.inertia).on("step", e.proxy(function (t, e) {
							this.tinderAnimatedStylesInternal(e)
						}, this))
					}
				}(jQuery)
			}, {"./inertia.js": 19}],
			22: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = new s(i, {fi: 10, _findLastIndx: 10});
						e.extend(this, a), e.extend(this.settings, o), this.frameOverflow = function (t) {
							var e = t * Math.PI * 2 / 360, i = this.settings.fi * t * Math.cos(e) / (2 * Math.PI),
								o = this.settings.fi * t * Math.sin(e) / (2 * Math.PI),
								s = -1 * Math.pow(t - this.pageBeing(), 2) / this.settings._findLastIndx;
							return new n(i, o, s)
						}, this.pageBeing = function () {
							return 450
						}, this.arouselAutoSlide = function () {
							return 10
						}, this.currentContentOffset = function () {
							return 650
						}
					}
				}(jQuery)
			}, {"./../scrollView.js": 29, "./scroll_config.js": 23}],
			23: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./../opacityScale.js"), n = t("./../drag-logic.js");
						this.settings = {
							_autoplyoff: 0,
							slidingMode: 0,
							_slidingMode: 0,
							_baunceOff: 0,
							_autoplyon: 0,
							flippItem: 0,
							flippRotation: !1,
							endless: !1
						}, this.layoutLogic = i, e.extend(this.settings, o), this.flippZone = function () {
							return this.layoutLogic.currentContentOffset()
						}, this.isEndless = function () {
							return this.settings.endless
						}, this.arouselAutoSlide = function () {
							return null
						}, this.currentContentOffset = function () {
							return null
						}, this.pageBeing = function () {
							return 0
						}, this.delayValue = function (t, e) {
							return t + e
						}, this._nonFlip = function (t, e) {
							return t - e
						}, this.getPoint = function (t) {
							var e = this.frameOverflow(t);
							e.x = e.x + this.settings._autoplyoff, e.y = e.y + this.settings.slidingMode, e.z = e.z + this.settings._slidingMode;
							var i = null;
							return i = this.rotate({a: e.x, b: e.y}, {
								a: 0,
								b: 0
							}, this.settings._baunceOff), e.x = i.a, e.y = i.b, i = this.rotate({a: e.z, b: e.y}, {
								a: 0,
								b: 0
							}, this.settings._autoplyon), e.z = i.a, e.y = i.b, i = this.rotate({a: e.z, b: e.x}, {
								a: 0,
								b: 0
							}, this.settings.flippItem), e.z = i.a, e.x = i.b, e
						}, this.rotate = function (t, e, i) {
							if (0 == i) return t;
							var o = i * (Math.PI / 180), s = Math.cos(o), n = Math.sin(o),
								a = s * (t.a - e.a) - n * (t.b - e.b) + e.a, r = n * (t.a - e.a) + s * (t.b - e.b) + e.b;
							return t.a = a, t.b = r, t
						}, this.defaultScrollInterpolatorRotation = function () {
							if (!this.settings.flippRotation) return null;
							if (0 == this.settings._autoplyon && 0 == this.settings.flippItem && 0 == this.settings._baunceOff) return null;
							var t = new n;
							t.x = this.settings._autoplyon, t.y = -1 * this.settings.flippItem, t.z = -1 * this.settings._baunceOff;
							var e = -1 * t.length();
							return new s(t, e)
						}
					}
				}(jQuery)
			}, {"./../opacityScale.js": 30, "./../drag-logic.js": 35}],
			24: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = new s(i, {_flippTime: 200});
						e.extend(this, a), e.extend(this.settings, o), this.frameOverflow = function (t) {
							var e = (t * t * t + 20 * t) / (1e3 * this.settings._flippTime), i = -2 * Math.abs(e);
							return new n(t, e, i)
						}
					}
				}(jQuery)
			}, {"./../scrollView.js": 29, "./scroll_config.js": 23}],
			25: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = t("./../layout_customizer.js"),
							r = t("./../inactive-slid.js"), l = new s(i, {
								_flippLeft: {p1: {x: -100, y: 0}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}, p4: {x: 100, y: 0}},
								_flippRighgt: {p1: {x: -100, y: 0}, p2: {x: 0, y: 0}, p3: {x: 0, y: 0}, p4: {x: 100, y: 0}},
								nonFlip: {p1: {x: 0, y: 0}, p2: {x: 50, y: 50}, p3: {x: 50, y: 50}, p4: {x: 100, y: 100}},
								pathLength: 1e3,
								zeroPosition: .5,
								width: 1e3,
								height: 1e3,
								depth: 1e3
							});
						e.extend(this, l), e.extend(this.settings, o), this.frameOverflow = function (t) {
							var e = Math.abs(t - this.arouselAutoSlide()),
								i = Math.abs(this.currentContentOffset() - this.arouselAutoSlide()), o = Math.min(e / i, 1),
								s = this.settings._flippLeft, l = this.settings.nonFlip, h = this.settings._flippRighgt,
								u = a(s.p1, s.p2, s.p3, s.p4), c = a(h.p1, h.p2, h.p3, h.p4);
							o = r(o, l.p1, l.p2, l.p3, l.p4).y / 100;
							var d = r(o, s.p1, s.p2, s.p3, s.p4), p = this._needsRTLAdaptations(d.x, u.minX, u.maxX),
								g = this._needsRTLAdaptations(d.y, u.minY, u.maxY), f = r(o, h.p1, h.p2, h.p3, h.p4).y;
							return f = this._needsRTLAdaptations(f, c.minY, c.maxY), p = this.settings.width * p - this.settings.width / 2, g = this.settings.height * g * -1, f = this.settings.depth * f * -1, new n(p, g, f)
						}, this._needsRTLAdaptations = function (t, e, i) {
							var o = Math.abs(i - e), s = Math.min(e, i);
							return 0 != o ? (t - s) / o : t - s
						}, this.arouselAutoSlide = function () {
							return 0
						}, this.currentContentOffset = function () {
							return this.settings.pathLength
						}, this.pageBeing = function () {
							return this.settings.pathLength * this.settings.zeroPosition
						}
					}
				}(jQuery)
			}, {
				"./../inactive-slid.js": 10,
				"./../layout_customizer.js": 11,
				"./../scrollView.js": 29,
				"./scroll_config.js": 23
			}],
			26: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = new s(i, {a: 200, b: 200});
						e.extend(this, a), e.extend(this.settings, o), this.frameOverflow = function (t) {
							t *= -1, t -= 180;
							var e = t * Math.PI * 2 / 360, i = this.settings.b * Math.sin(e), o = this.settings.a * Math.cos(e);
							return new n(o, 0, i)
						}, this.pageBeing = function () {
							return 90
						}, this.arouselAutoSlide = function () {
							return this.settings.endless ? -90 : 0
						}, this.currentContentOffset = function () {
							return this.settings.endless ? 270 : 180
						}
					}
				}(jQuery)
			}, {"./../scrollView.js": 29, "./scroll_config.js": 23}],
			27: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = new s(i, {});
						e.extend(this, a), e.extend(this.settings, o), this.frameOverflow = function (t) {
							var e = -1 * t;
							return new n(0, 0, e)
						}
					}
				}(jQuery)
			}, {"./../scrollView.js": 29, "./scroll_config.js": 23}],
			28: [function (t, e, i) {
				e.exports = function (e) {
					"use strict";
					return function (i, o) {
						var s = t("./scroll_config.js"), n = t("./../scrollView.js"), a = new s(i, {_flippTime: 200});
						e.extend(this, a), e.extend(this.settings, o), this.frameOverflow = function (t) {
							var e = -1 * t * t * (1 / this.settings._flippTime);
							return new n(t, 0, e)
						}
					}
				}(jQuery)
			}, {"./../scrollView.js": 29, "./scroll_config.js": 23}],
			29: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (t, e, i) {
						this.x = t, this.y = e, this.z = i
					}
				}(jQuery)
			}, {}],
			30: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (t, e) {
						this.vector = t, this.angle = e, this.getString = function () {
							return "rotate3d(" + this.vector.x + ", " + this.vector.y + ", " + this.vector.z + ", " + this.angle + "deg)"
						}
					}
				}(jQuery)
			}, {}],
			31: [function (t, e, i) {
				var o = t("./transitions.js");
				e.exports = function (t) {
					"use strict";

					function e(t) {
						t.onScrollTriggered = function () {
							return !1
						}, t.props = function () {
							return this.layoutLogic.options._slidingType
						}, t.swapLoad = function () {
							return this.layoutLogic.path.pageBeing()
						}, t.delayValue = function (t, e) {
							return this.layoutLogic.path.delayValue(t, e)
						}, t._nonFlip = function (t, e) {
							return this.layoutLogic.path._nonFlip(t, e)
						}, t.arouselAutoSlide = function () {
							return this.layoutLogic.path.arouselAutoSlide()
						}, t.currentContentOffset = function () {
							return this.layoutLogic.path.currentContentOffset()
						}, t.moveTo = function (t) {
							if (!this.layoutLogic.stackScrollInterpolator.nativeSnap() && (this.layoutLogic.cellAlign.slidesToShow(), this.layoutLogic.cellAlign._baunceIn(), t != this.layoutLogic.options.appendDots)) {
								if (t == this.layoutLogic.options.appendDots + 1) return void this.layoutLogic.specialForIE();
								if (t == this.layoutLogic.options.appendDots - 1) return void this.layoutLogic.translateCoordinates();
								t = Math.max(0, t), t = Math.min(t, this.layoutLogic.defaultScrollInterpolator.length - 1), this._doubleFlip(t)
							}
						}, t._doubleFlip = function (t) {
							var e = this.props() * (this.layoutLogic.options.appendDots - t);
							this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, e, t, "linear")
						}, t.translateCoordinates = function () {
							var t = this.layoutLogic.cellAlign._shouldUseShiftLayout ? this.layoutLogic.cellAlign.scrollStartActive() : this.layoutLogic.options.appendDots;
							return t > 0 && (t--, this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, this.props(), t, null), !0)
						}, t.specialForIE = function () {
							var t = this.layoutLogic.cellAlign._shouldUseShiftLayout ? this.layoutLogic.cellAlign.scrollStartActive() : this.layoutLogic.options.appendDots;
							return t < this.layoutLogic.defaultScrollInterpolator.length - 1 && (t++, this.layoutLogic.componentUpdater.renderCenterLeftControls(!0), this.layoutLogic.arouselAutoRotate(), this.layoutLogic.cellAlign.animate(0, -1 * this.props(), t, null), !0)
						}, t._specialForIE = function (t) {
							var e = this.layoutLogic.scroll_logic(t), i = this.props(), o = parseInt(t / i, 10),
								s = this.layoutLogic.options.appendDots;
							return this.layoutLogic.options.appendDots -= o, this.layoutLogic.options.appendDots = Math.max(0, this.layoutLogic.options.appendDots), this.layoutLogic.options.appendDots = Math.min(this.layoutLogic.options.appendDots, this.layoutLogic.defaultScrollInterpolator.length - 1), s != this.layoutLogic.options.appendDots && this.layoutLogic._lockScroll(), {
								_slidingType: (s - this.layoutLogic.options.appendDots) * i,
								_shouldUseCustomAnimation: e
							}
						}, t.dataset = function (t) {
							if (0 != t) {
								var e = this.layoutLogic.options.appendDots;
								Math.abs(t) > this.props() / 2 && (t < 0 ? e++ : e--), 0 == this.layoutLogic.defaultScrollInterpolator.length ? e = 0 : (e = Math.max(0, e), e = Math.min(e, this.layoutLogic.defaultScrollInterpolator.length - 1));
								var i = (this.layoutLogic.options.appendDots - e) * this.props(),
									o = Math.abs(this.layoutLogic.options.rotationAnimationDuration * (t / this.props()));
								o = Math.min(o, this.layoutLogic.options.rotationAnimationDuration / 2), this.layoutLogic.cellAlign.animate(t, i, e, null, o)
							}
						}, t.datasetSelector = function (t) {
							if (0 == this.layoutLogic.defaultScrollInterpolator.length || this.layoutLogic.options.appendDots < 0) return !1;
							this.layoutLogic.intersection = this.layoutLogic.currentContentOffset();
							var e = 0;
							"undefined" != typeof t && (e = t);
							var i = !1;
							(0 == this.layoutLogic.options.appendDots && e > 0 || this.layoutLogic.options.appendDots == this.layoutLogic.defaultScrollInterpolator.length - 1 && e < 0) && (e = Math.pow(Math.abs(e), .7) * (e / Math.abs(e)), i = !0);
							var o = this.swapLoad(), s = 0;
							(0 == this.layoutLogic.options.appendDots && e > 0 || this.layoutLogic.options.appendDots == this.layoutLogic.defaultScrollInterpolator.length - 1 && e < 0) && (s = e);
							for (var n = this.getCustomSlideAnimation(o + s), a = this.layoutLogic.options.appendDots; a < this.layoutLogic.defaultScrollInterpolator.length; a++) this.getWrappedRef(this.layoutLogic.defaultScrollInterpolator[a], o + e, n), o = this.delayValue(o, this.props());
							o = this.swapLoad();
							for (var a = this.layoutLogic.options.appendDots - 1; a >= 0; a--) o = this._nonFlip(o, this.props()), this.getWrappedRef(this.layoutLogic.defaultScrollInterpolator[a], o + e, n);
							return this.dataGap(), i
						}, t.getWrappedRef = function (t, e, i) {
							if (this.gapSet(i, t, e)) {
								var s = this.layoutLogic.path.getPoint(e), n = new o;
								n.translateZ = s.z * this.layoutLogic.options.scaleZ, n.translateX = s.x * this.layoutLogic.options.scaleX + this.layoutLogic.intersection.width / 2 - t.size.width / 2, n.translateY = s.y * this.layoutLogic.options.scaleY + this.layoutLogic.intersection.height / 2 - t.size.height / 2;
								var a = this.layoutLogic.path.defaultScrollInterpolatorRotation();
								a && n.rotations.push(a), "scale" == this.layoutLogic.options.getComputedStyle && (n.scale = this.layoutLogic.options.perspective / (this.layoutLogic.options.perspective - n.translateZ), n.translateZ = 0);
								for (var r = 0; r < this.layoutLogic.renderCenterRightControls.length; r++) "positioning" === this.layoutLogic.renderCenterRightControls[r].slidingRotatin && this.layoutLogic.renderCenterRightControls[r].apply(n, t, e);
								return n.apply(t.element), t.location = s, !0
							}
							return !1
						}, t.dataGap = function () {
							for (var t = [], e = 0; e < this.layoutLogic.defaultScrollInterpolator.length; e++) {
								var i = this.layoutLogic.defaultScrollInterpolator[e];
								i.location && t.push(i)
							}
							t.sort(function (t, e) {
								return t.location.z - e.location.z
							});
							for (var e = 0; e < t.length; e++) t[e].page.get(0).style.zIndex = e
						}, t.getCustomSlideAnimation = function (t) {
							var e = t, i = [];
							return null != this.layoutLogic.options.reflectionType && i.push({
								from: this._nonFlip(e, this.props() * (this.layoutLogic.options.reflectionType + 1)),
								to: this._nonFlip(e, this.props() * this.layoutLogic.options.reflectionType),
								hide: "before"
							}), null != this.layoutLogic.options._fallbackModeDistance && i.push({
								from: this.delayValue(e, this.props() * this.layoutLogic.options._fallbackModeDistance),
								to: this.delayValue(e, this.props() * (this.layoutLogic.options._fallbackModeDistance + 1)),
								hide: "after"
							}), i
						}, t.gapSet = function (t, e, i) {
							var o = e.page, s = !1;
							if (null != this.arouselAutoSlide() && i < this.arouselAutoSlide() || null != this.currentContentOffset() && i > this.currentContentOffset()) s = !0; else {
								0 == t.length && o.css({opacity: 1});
								for (var n = 0; n < t.length; n++) {
									var a = t[n];
									if ("before" == a.hide && i <= a.from || "after" == a.hide && i >= a.to) {
										s = !0;
										break
									}
									if (i > a.from && i < a.to) {
										var r = a.to - a.from, l = Math.abs(i - ("after" == a.hide ? a.from : a.to)), h = (r - l) / r;
										o.css({opacity: h});
										break
									}
									o.css({opacity: 1})
								}
							}
							return this.wrappedRef(s, e), !s
						}, t.destroy = function () {
							for (var t = 0; t < this.layoutLogic.defaultScrollInterpolator.length; t++) this.layoutLogic.defaultScrollInterpolator[t].page.css({
								left: "0",
								top: "0",
								transform: "",
								opacity: "1"
							}), this.layoutLogic.defaultScrollInterpolator[t].page.show()
						}, t.wrappedRef = function (t, e) {
							t ? e.page.hide() : e.page.show()
						}
					}

					return function (t) {
						this.layoutLogic = t, e(this)
					}
				}(jQuery)
			}, {"./transitions.js": 33}],
			32: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function (t, e) {
						this.width = t, this.height = e
					}
				}(jQuery)
			}, {}],
			33: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function () {
						this.translateX = 0, this.translateY = 0, this.translateZ = 0, this.scale = 1, this.scaleX = 1, this.scaleY = 1, this.scaleZ = 1, this.rotations = [], this.apply = function (t) {
							var e = "";
							0 == this.translateX && 0 == this.translateY && 0 == this.translateZ || (e = "translate3d(" + this.translateX + "px, " + this.translateY + "px, " + this.translateZ + "px)"), 1 != this.scale && (e += " scale(" + this.scale + ")"), 1 != this.scaleX && (e += " scaleX(" + this.scaleX + ")"), 1 != this.scaleY && (e += " scaleY(" + this.scaleY + ")"), 1 != this.scaleZ && (e += " scaleZ(" + this.scaleZ + ")");
							for (var i = 0; i < this.rotations.length; i++) e += " " + this.rotations[i].getString();
							t.style.transform = e, t.style.webkitTransform = e, t.style.msTransform = e
						}
					}
				}(jQuery)
			}, {}],
			34: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					var e = function () {
						this.enableKeyboardControls = function (t, e) {
							for (var i = e.split("."), o = t, s = 0; s < i.length; s++) o = o[i[s]];
							return o
						}, this.beforeSlide = function (t, e, i) {
							for (var o = e.split("."), s = t, n = 0; n < o.length - 1; n++) s = s[o[n]];
							s[o[o.length - 1]] = i
						}
					};
					return new e
				}(jQuery)
			}, {}],
			35: [function (t, e, i) {
				e.exports = function (t) {
					"use strict";
					return function () {
						this.x = 0, this.y = 0, this.z = 0, this.wrapAround = function (t, e) {
							this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z
						}, this.normalize = function () {
							var t = this.length();
							this.x /= t, this.y /= t, this.z /= t
						}, this.length = function () {
							return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
						}, this.angle = function (t) {
							var e = this.x * t.x + this.y * t.y + this.z * t.z, i = this.length(),
								o = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z), s = e / (i * o), n = Math.acos(s);
							return this.z > t.z && (n *= -1), 180 * n / Math.PI
						}, this._previousActiveItem = function () {
							var t = new vector;
							return t.y = this.y, t.z = this.z, t.x = -1 * (this.y * t.y + this.z * t.z) / this.x, t
						}
					}
				}(jQuery)
			}, {}]
		}, {}, [12])
	}, {}]
}, {}, [2]);