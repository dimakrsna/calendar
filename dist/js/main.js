"use strict";

$(function () {

	var CALENDAR = {

		init: function init() {
			this.mainMenu();
			this.tooltips();
			this.filter();
		},

		mainMenu: function mainMenu() {
			var $btnOpen = $("#menuOpen"),
			    $btnClose = $("#menuClose"),
			    $menuContainer = $("#menu");

			function toggleMenu() {
				$menuContainer.toggleClass("menu-is-open");
			}

			$btnOpen.on("click", toggleMenu);
			$btnClose.on("click", toggleMenu);
		},

		tooltips: function tooltips() {

			function toggleTooltip(item) {
				var $tooltip = $(item).find(".tooltip"),
				    $cover = $(item).find(".cover__img"),
				    self = item,
				    timer = void 0;

				if ($tooltip.length && $cover.length) {

					$cover.mouseenter(function () {
						tooltipShow(self, $tooltip);
						clearTimeout(timer);
					});

					$cover.mouseleave(function () {
						timer = setTimeout(function () {
							tooltipHide(self, $tooltip);
						}, 300);
					});

					$tooltip.mouseenter(function () {
						tooltipShow(self, $tooltip);
						clearTimeout(timer);
					});

					$tooltip.mouseleave(function () {
						timer = setTimeout(function () {
							tooltipHide(self, $tooltip);
						}, 300);
					});
				}
			}

			function tooltipShow(item, tooltip) {
				tooltip.fadeIn(0);
				$(item).addClass("tooltip-is-open");
			}

			function tooltipHide(item, tooltip) {
				tooltip.fadeOut(0);
				$(item).removeClass("tooltip-is-open");
			}

			$(".grid__day").each(function (ind, element) {
				toggleTooltip(element);
			});
		},

		filter: function filter() {
			var $filter = $("#filter"),
			    $link = $(".nav__link");
		}
	};

	CALENDAR.init();

	window.CALENDAR = CALENDAR;
});