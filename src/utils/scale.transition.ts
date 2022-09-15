import { quintOut } from 'svelte/easing';

export function scale(node: HTMLElement, { duration = 200, easing = quintOut, delay = 0 }) {
	return {
		duration,
		easing,
		delay,
		css: (t: number) => `transform: scale3d(${t}, ${t}, 1)`
	};
}
