<template>
<svg id='svg' width="80" height="80" viewBox='0 0 100 100'
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <path id='path1' fill='none' stroke='black' stroke-width='4' stroke-linecap="round"></path>
  <path id='path2' fill='none' stroke='black' stroke-width='4' stroke-linecap="round"></path>
  <path id='path3' fill='none' stroke='black' stroke-width='4' stroke-linecap="round"></path>
</svg>
</template>

<script>
/* eslint-disable */

import Segment from './segment';

export default {
  name: 'close',
	props: {
		state: {
			type: Boolean,
			default: false,
		},
	},
  mounted() {
		this.init();
		this.$nextTick(() => this.init);
	},
	watch: {
		state(val) {
			if (val) this.showClose();
			else this.showSort();
		},
	},
	methods: {
		init() {
			var ox = 50,
				oy = 50,
				r = 40,
				_r = r * Math.pow(2, 1 / 2) / 4,
				_$svg = document.getElementById('svg'),
				_$path1 = document.getElementById('path1'),
				_$path2 = document.getElementById('path2'),
				_$path3 = document.getElementById('path3');
			var getPathA = function() {
				var ax = ox - 2 * _r,
					ay = oy - _r,
					bx = ox + 2 * _r,
					by = oy - _r,
					cx = ox + 2 * _r,
					cy = oy + 2 * _r,
					dx = ox - 2 * _r,
					dy = oy - 2 * _r;
				return 'M' + ax + ' ' + ay + ' L' + bx + ' ' + by + ' A' + r + ' ' + r + ' 0 0 1 ' + cx + ' ' + cy + ' A' + r + ' ' + r + ' 0 0 1 ' + dx + ' ' + dy + ' L' + cx + ' ' + cy;
			}
			var getPathB = function() {
				var px = ox - _r,
					py = oy,
					qx = ox + _r,
					qy = oy;
				return 'M ' + px + ' ' + py + ' L' + qx + ' ' + qy;
			}
			var getPathC = function() {
				var a1x = ox - 2 * _r,
					a1y = oy + _r,
					b1x = ox + 2 * _r,
					b1y = oy + _r,
					c1x = ox + 2 * _r,
					c1y = oy - 2 * _r,
					d1x = ox - 2 * _r,
					d1y = oy + 2 * _r;
				return 'M' + a1x + ' ' + a1y + ' L' + b1x + ' ' + b1y + ' A' + r + ' ' + r + ' 0 0 0 ' + c1x + ' ' + c1y + ' A' + r + ' ' + r + ' 0 0 0 ' + d1x + ' ' + d1y + ' L' + c1x + ' ' + c1y;
			}

			_$path1.setAttribute('d', getPathA());
			_$path2.setAttribute('d', getPathB());
			_$path3.setAttribute('d', getPathC());

			var segment1 = new Segment(_$path1, _r, 3 * _r),
				segment2 = new Segment(_$path2),
				segment3 = new Segment(_$path3, _r, 3 * _r);

			function cubicIn(t) {
				return t * t;
			}

			this.showSort = function() { //显示排序
				segment1.draw(_r, 3 * _r, .4, {
					easing: cubicIn
				});
				segment2.draw('0%', '80%', .3, {

					easing: cubicIn
				});
				segment3.draw(_r, 3 * _r, .4, {

					easing: cubicIn
				});
			}
			this.showClose = function() { //显示关闭
				segment1.draw('100% -' + (r * 3 / 2), '100% -' + (r / 2), .4, {

					easing: cubicIn
				});
				segment2.draw('50%-2', '50%+2', .4, {

					easing: cubicIn
				});
				segment3.draw('100% -' + (r * 3 / 2), '100% -' + (r / 2), .4, {

					easing: cubicIn
				});
			}

			this.showSort();
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
