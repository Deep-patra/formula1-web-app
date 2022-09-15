export function clickAway(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (
			!event.composedPath().includes(node) &&
			!event.composedPath().includes(node.parentElement as HTMLElement)
		) {
			node.dispatchEvent(new CustomEvent('outClick'));
		}
	};

	document.addEventListener('click', handleClick, false);

	return {
		destroy() {
			document.addEventListener('click', handleClick, false);
		}
	};
}
