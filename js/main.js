$(document).ready(function() {
    setTimeout(function() {
        "use strict";
        $('.preloader').fadeOut();
        var urlImg = $('.urlImg').attr('src').replace('m1.jpg', '');
        "function" != typeof Object.create && (Object.create = function(t) {
                function e() {}
                return e.prototype = t, new e
            }),
            function(s, i) {
                var a = {
                    $elem: null,
                    $slider: null,
                    $before: null,
                    $after: null,
                    $dummy: null,
                    $overlay: null,
                    $images: null,
                    options: {},
                    width: 0,
                    height: 0,
                    val: .5,
                    init: function(t, e) {
                        var o = this;
                        this.$elem = s(e), this.options = s.extend({}, s.fn.cross2.options, this.$elem.data(), t), 1 == this.options.vertical && this.$elem.addClass("cross2-vertical"), this.val = this.options.value, this.$images = this.$elem.find("img"), this.$before = s('<div style="position: relative" class="cross2-item cross2-item-before"></div>'), this.$after = s('<div style="position: relative" class="cross2-item cross2-item-after"></div>'), this.$elem.append(this.$before), this.$elem.append(this.$after), this.$images.eq(0).parent().is("a") ? (this.$before.append(this.$images.eq(0).parent()), this.$after.append(this.$images.eq(1).parent())) : (this.$before.append(this.$images.eq(0)), this.$after.append(this.$images.eq(1))), this.options.titlesEnabled && (this.$before.append('<span style="z-index: 2" class="cross2-item-title">' + this.options.titleBefore + "</span>"), this.$after.append('<span style="z-index: 2" class="cross2-item-title">' + this.options.titleAfter + "</span>")), this.$before.css({
                            position: "absolute",
                            width: "100%",
                            zIndex: 2
                        }), this.$after.css({
                            position: "absolute",
                            width: "100%",
                            zIndex: 1
                        }), this.$dummy = s('<img src="' + this.$images.eq(0).attr("src") + '" alt="Cross2 Dummy" />'), this.$dummy.css({
                            position: "relative",
                            visibility: "hidden"
                        }), this.$elem.append(o.$dummy), this.$slider = s(0 == o.options.mousemoveEnabled ? '<a href="#" class="cross2-slider"><span></span></a>' : '<div class="cross2-slider"><span></span></div>'), this.$elem.append(o.$slider), this.$overlay = s('<div class="cross2-overlay" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 5;"></div>'), this.$elem.append(o.$overlay), this.$overlay.hide(), this.$slider.bind("click.cross2", function(t) {
                            0 == o.options.mousemoveEnabled && (s(this).focus(), o.refresh()), t.preventDefault()
                        }), 0 == this.options.mousemoveEnabled && (this.$slider.bind("focusin.cross2", function() {
                            o.$elem.addClass("cross2-focused")
                        }), this.$slider.bind("focusout.cross2", function() {
                            o.$elem.removeClass("cross2-focused")
                        })), 0 == this.options.mousemoveEnabled && this.$slider.bind("keydown.cross2", function(t) {
                            1 != o.options.vertical || 38 != t.keyCode && 40 != t.keyCode ? 0 != o.options.vertical || 37 != t.keyCode && 39 != t.keyCode || (o.set(37 == t.keyCode ? o.val - .05 : o.val + .05), o.refresh()) : (o.set(38 == t.keyCode ? o.val - .05 : o.val + .05), o.refresh())
                        }), this.$slider.css({
                            zIndex: 3
                        }), s(i).resize(function() {
                            o.refresh(), o.$elem.stop(!0, !1)
                        });
                        var n = 0;
                        return 0 == this.options.mousemoveEnabled && this.$slider.bind("dblclick.cross2", function() {
                            o.showHalfs()
                        }), 1 == this.options.clickEnabled && 0 == this.options.mousemoveEnabled && this.$elem.bind("mousedown.cross2", function(t) {
                            var e = 1 == o.options.vertical ? t.pageY - s(this).offset().top : t.pageX - s(this).offset().left;
                            o.moveToOffset(e)
                        }), 1 == this.options.mousemoveEnabled && this.$elem.bind("mousemove.cross2", function(t) {
                            var e = 1 == o.options.vertical ? t.pageY - s(this).offset().top : t.pageX - s(this).offset().left;
                            o.setOffset(e), o.refresh()
                        }), 1 == this.options.mousewheelEnabled && 0 == this.options.mousemoveEnabled && this.$elem.bind("mousewheel.cross2", function(t) {
                            if (t.deltaY < 0 && o.val == (1 == o.options.vertical ? 1 : 0) || 0 < t.deltaY && o.val == (1 == o.options.vertical ? 0 : 1)) return !1;
                            t.preventDefault();
                            var e = 1 == o.options.vertical ? o.val - .05 : o.val + .05,
                                s = 1 == o.options.vertical ? o.val + .05 : o.val - .05;
                            o.set(0 < t.deltaY ? e : s), o.refresh()
                        }), this.$slider.bind("dragstart.cross2", function() {
                            o.$elem.addClass("cross2-drag"), n = o.val, o.$overlay.show(), 0 == o.options.mousemoveEnabled && o.$slider.focus()
                        }).bind("drag.cross2", function(t, e) {
                            var s = 1 == o.options.vertical ? e.deltaY : e.deltaX,
                                i = 1 == o.options.vertical ? o.height : o.width,
                                a = n * i + s;
                            o.setOffset(a), o.refresh()
                        }).bind("dragend.cross2", function() {
                            o.$elem.removeClass("cross2-drag"), o.$overlay.hide()
                        }), o.refresh(), this
                    },
                    setOffset: function(t) {
                        var e = 1 == this.options.vertical ? this.height : this.width;
                        e < t ? t = e : t < 0 && (t = 0);
                        var s = t / e;
                        return this.val = s, this
                    },
                    set: function(t) {
                        var e = 1 == this.options.vertical ? this.height : this.width;
                        return this.setOffset(e * t), this
                    },
                    refresh: function() {
                        this.width = this.$dummy.outerWidth(), this.height = this.$dummy.outerHeight(), this.$elem.scrollTop(0), this.$elem.scrollLeft(0);
                        var t = 1 == this.options.vertical ? this.height : this.width,
                            e = Math.floor(t * this.val),
                            s = 1 == this.options.vertical ? "top" : "left";
                        this.$slider.css(s, e + "px");
                        var i = 1 == this.options.vertical ? "rect(0, " + this.width + "px," + e + "px, 0)" : "rect(0, " + e + "px," + this.height + "px, 0)";
                        return this.$before.css("clip", i), this
                    },
                    moveToOffset: function(t) {
                        var e = this,
                            s = 1 == this.options.vertical ? "top" : "left",
                            i = {
                                duration: this.options.animationDuration,
                                easing: this.options.easing,
                                step: function() {
                                    e.setOffset(parseInt(e.$slider.css(s))).refresh()
                                },
                                complete: function() {
                                    e.setOffset(parseInt(e.$slider.css(s))).refresh()
                                }
                            };
                        return 1 == this.options.vertical ? this.$slider.stop(!0, !1).animate({
                            top: t
                        }, i) : this.$slider.stop(!0, !1).animate({
                            left: t
                        }, i), this
                    },
                    moveTo: function(t) {
                        var e = 1 == this.options.vertical ? this.height : this.width;
                        return this.moveToOffset(e * t), this
                    },
                    showBefore: function() {
                        var t = 1 == this.options.vertical ? this.height : this.width;
                        return this.moveToOffset(t), this
                    },
                    showAfter: function() {
                        return this.moveToOffset(0), this
                    },
                    showHalfs: function() {
                        var t = 1 == this.options.vertical ? this.height : this.width;
                        return this.moveToOffset(t / 2), this
                    },
                    destroy: function() {
                        var t = this;
                        this.$elem.unbind(".cross2"), this.$elem.removeData(), this.$elem.removeClass("cross2-drag cross2-focused cross2-vertical"), this.$slider.unbind(".cross2"), this.$slider.remove(), this.$dummy.remove(), this.$overlay.remove(), this.$images.each(function() {
                            t.$elem.append(s(this))
                        }), this.$before.remove(), this.$after.remove()
                    }
                };
                s.fn.cross2 = function(e) {
                    return this.each(function() {
                        if (1 == s(this).data("cross2-init")) return !1;
                        s(this).data("cross2-init", !0);
                        var t = Object.create(a);
                        t.init(e, this), s.data(this, "cross2", t)
                    })
                }, s.fn.cross2.options = {
                    value: .85,
                    vertical: !1,
                    animationDuration: 150,
                    easing: "swing",
                    clickEnabled: !1,
                    mousemoveEnabled: !1,
                    mousewheelEnabled: !1,
                    titlesEnabled: !0,
                    titleBefore: "Before",
                    titleAfter: "After"
                }
            }
            (jQuery, window, document),
            function(p) {
                p.fn.drag = function(t, e, s) {
                    var i = "string" == typeof t ? t : "",
                        a = p.isFunction(t) ? t : p.isFunction(e) ? e : null;
                    return 0 !== i.indexOf("drag") && (i = "drag" + i), s = (t == a ? e : s) || {}, a ? this.bind(i, s, a) : this.trigger(i)
                };
                var u = p.event,
                    i = u.special,
                    f = i.drag = {
                        defaults: {
                            which: 1,
                            distance: 0,
                            not: ":input",
                            handle: null,
                            relative: !1,
                            drop: !0,
                            click: !1
                        },
                        datakey: "dragdata",
                        noBubble: !0,
                        add: function(t) {
                            var s = p.data(this, f.datakey),
                                i = t.data || {};
                            s.related += 1, p.each(f.defaults, function(t, e) {
                                void 0 !== i[t] && (s[t] = i[t])
                            })
                        },
                        remove: function() {
                            p.data(this, f.datakey).related -= 1
                        },
                        setup: function() {
                            if (!p.data(this, f.datakey)) {
                                var t = p.extend({
                                    related: 0
                                }, f.defaults);
                                p.data(this, f.datakey, t), u.add(this, "touchstart mousedown", f.init, t), this.attachEvent && this.attachEvent("ondragstart", f.dontstart)
                            }
                        },
                        teardown: function() {
                            (p.data(this, f.datakey) || {}).related || (p.removeData(this, f.datakey), u.remove(this, "touchstart mousedown", f.init), f.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", f.dontstart))
                        },
                        init: function(t) {
                            if (!f.touched) {
                                var e, s = t.data;
                                if (!(0 != t.which && 0 < s.which && t.which != s.which) && !p(t.target).is(s.not) && (!s.handle || p(t.target).closest(s.handle, t.currentTarget).length) && (f.touched = "touchstart" == t.type ? this : null, s.propagates = 1, s.mousedown = this, s.interactions = [f.interaction(this, s)], s.target = t.target, s.pageX = t.pageX, s.pageY = t.pageY, s.dragging = null, e = f.hijack(t, "draginit", s), s.propagates)) return (e = f.flatten(e)) && e.length && (s.interactions = [], p.each(e, function() {
                                    s.interactions.push(f.interaction(this, s))
                                })), s.propagates = s.interactions.length, !1 !== s.drop && i.drop && i.drop.handler(t, s), f.textselect(!1), f.touched ? u.add(f.touched, "touchmove touchend", f.handler, s) : u.add(document, "mousemove mouseup", f.handler, s), !(!f.touched || s.live) && void 0
                            }
                        },
                        interaction: function(t, e) {
                            var s = p(t)[e.relative ? "position" : "offset"]() || {
                                top: 0,
                                left: 0
                            };
                            return {
                                drag: t,
                                callback: new f.callback,
                                droppable: [],
                                offset: s
                            }
                        },
                        handler: function(t) {
                            var e = t.data;
                            switch (t.type) {
                                case !e.dragging && "touchmove":
                                    t.preventDefault();
                                case !e.dragging && "mousemove":
                                    if (Math.pow(t.pageX - e.pageX, 2) + Math.pow(t.pageY - e.pageY, 2) < Math.pow(e.distance, 2)) break;
                                    t.target = e.target, f.hijack(t, "dragstart", e), e.propagates && (e.dragging = !0);
                                case "touchmove":
                                    t.preventDefault();
                                case "mousemove":
                                    if (e.dragging) {
                                        if (f.hijack(t, "drag", e), e.propagates) {
                                            !1 !== e.drop && i.drop && i.drop.handler(t, e);
                                            break
                                        }
                                        t.type = "mouseup"
                                    }
                                case "touchend":
                                case "mouseup":
                                default:
                                    f.touched ? u.remove(f.touched, "touchmove touchend", f.handler) : u.remove(document, "mousemove mouseup", f.handler), e.dragging && (!1 !== e.drop && i.drop && i.drop.handler(t, e), f.hijack(t, "dragend", e)), f.textselect(!0), !1 === e.click && e.dragging && p.data(e.mousedown, "suppress.click", (new Date).getTime() + 5), e.dragging = f.touched = !1
                            }
                        },
                        hijack: function(s, i, a, t, e) {
                            if (a) {
                                var o, n, r, l = {
                                        event: s.originalEvent,
                                        type: s.type
                                    },
                                    d = i.indexOf("drop") ? "drag" : "drop",
                                    c = t || 0,
                                    h = isNaN(t) ? a.interactions.length : t;
                                s.type = i, s.originalEvent = null, a.results = [];
                                do {
                                    if (n = a.interactions[c]) {
                                        if ("dragend" !== i && n.cancelled) continue;
                                        r = f.properties(s, a, n), n.results = [], p(e || n[d] || a.droppable).each(function(t, e) {
                                            if (r.target = e, !(s.isPropagationStopped = function() {
                                                    return !1
                                                }) === (o = e ? u.dispatch.call(e, s, r) : null) ? ("drag" == d && (n.cancelled = !0, a.propagates -= 1), "drop" == i && (n[d][t] = null)) : "dropinit" == i && n.droppable.push(f.element(o) || e), "dragstart" == i && (n.proxy = p(f.element(o) || n.drag)[0]), n.results.push(o), delete s.result, "dropinit" !== i) return o
                                        }), a.results[c] = f.flatten(n.results), "dropinit" == i && (n.droppable = f.flatten(n.droppable)), "dragstart" != i || n.cancelled || r.update()
                                    }
                                }
                                while (++c < h);
                                return s.type = l.type, s.originalEvent = l.event, f.flatten(a.results)
                            }
                        },
                        properties: function(t, e, s) {
                            var i = s.callback;
                            return i.drag = s.drag, i.proxy = s.proxy || s.drag, i.startX = e.pageX, i.startY = e.pageY, i.deltaX = t.pageX - e.pageX, i.deltaY = t.pageY - e.pageY, i.originalX = s.offset.left, i.originalY = s.offset.top, i.offsetX = i.originalX + i.deltaX, i.offsetY = i.originalY + i.deltaY, i.drop = f.flatten((s.drop || []).slice()), i.available = f.flatten((s.droppable || []).slice()), i
                        },
                        element: function(t) {
                            if (t && (t.jquery || 1 == t.nodeType)) return t
                        },
                        flatten: function(t) {
                            return p.map(t, function(t) {
                                return t && t.jquery ? p.makeArray(t) : t && t.length ? f.flatten(t) : t
                            })
                        },
                        textselect: function(t) {
                            p(document)[t ? "unbind" : "bind"]("selectstart", f.dontstart).css("MozUserSelect", t ? "" : "none"), document.unselectable = t ? "off" : "on"
                        },
                        dontstart: function() {
                            return !1
                        },
                        callback: function() {}
                    };
                f.callback.prototype = {
                    update: function() {
                        i.drop && this.available.length && p.each(this.available, function(t) {
                            i.drop.locate(this, t)
                        })
                    }
                };
                var e = u.dispatch;
                u.dispatch = function(t) {
                    if (!(0 < p.data(this, "suppress." + t.type) - (new Date).getTime())) return e.apply(this, arguments);
                    p.removeData(this, "suppress." + t.type)
                };
                var a = u.fixHooks.touchstart = u.fixHooks.touchmove = u.fixHooks.touchend = u.fixHooks.touchcancel = {
                    props: "clientX clientY pageX pageY screenX screenY".split(" "),
                    filter: function(s, t) {
                        if (t) {
                            var i = t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || null;
                            i && p.each(a.props, function(t, e) {
                                s[e] = i[e]
                            })
                        }
                        return s
                    }
                };
                i.draginit = i.dragstart = i.dragend = f
            }
            (jQuery),
            function(a) {
                var t = function(t, e) {
                    var s = document.createElement("img"),
                        i = document.createElement("img");
                    s.setAttribute("alt", "before"), i.setAttribute("alt", "before"), s.setAttribute("src", t), i.setAttribute("src", e), a(".slider").append(s), a(".slider").append(i)
                };
                a(window).width() < 992 ? t(urlImg + "m1.jpg", urlImg + "m2.jpg") : t(urlImg + "d1.jpg", urlImg + "d2.jpg"), a(".slider").cross2({
                    vertical: !1,
                    value: .85,
                    titlesEnabled: !1
                }), a(document).ready(function() {
                    a(".step:first-child").find(".btnbox").addClass("fadeInUp"), a(".next").on("click", function(t) {
                        var e;
                        t.preventDefault(), (e = a(this)).closest(".step").hide().next().fadeIn(), e.closest(".step").next().find(".btnbox").addClass("fadeInUp"), a("li.active").removeClass("active").next().addClass("active")
                    })
                })
            }
            (jQuery);
    }, 1500);
    
    $(".go-to-age").on("click", function(t) {
        var s;
        t.preventDefault();
        (s = $(this)).closest(".step").hide().nextAll('.step--age').fadeIn();
        s.closest(".step").next().find(".btnbox").addClass("fadeInUp");
        $("li.active").removeClass("active").next().addClass("active");
        $(".progress > .bar").animate({
            width: "75%"
        });
        $('.text25').hide();
    });
});