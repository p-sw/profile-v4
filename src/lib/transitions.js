import { linear } from 'svelte/easing';

/**
   * @param {Element} node
   * @returns {{duration: number, tick: (t: number) => void}}
   */
export function typewriter(node, { speed = 1 }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent ?? "";
    const duration = text.length / (speed * 0.01);


    return {
        duration,
        tick: (t) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text?.slice(0, i) ?? "";
        }
    };
}

/** 
 * @param {Element} node
 * @param {import('svelte/transition').TransitionConfig & {in?: boolean}} [config]
 * @returns {{duration?: number, css: (t: number) => string}}
 */
export function spinfade(node, config) {
    return {
        duration: config?.duration ?? 80,
        css(t) {
            const easeFactor = linear(t);

            return `
                transform: rotateZ(${(config?.in ? (1 - easeFactor) : easeFactor) * 50}deg);
                opacity: ${easeFactor};
            `
        }
    }
}

/** 
 * @param {Element} node
 * @param {import('svelte/transition').TransitionConfig} [config]
 * @returns {{duration?: number, delay?: number, css: (t: number) => string}}
 */
export function fadeheight(node, config) {
    const originNodeHeight = node.clientHeight;

    return {
        delay: config?.delay,
        duration: config?.duration ?? 30,
        css(t) {
            const easeFactor = linear(t);

            return `
                opacity: ${easeFactor};
                height: ${originNodeHeight * easeFactor}px;
            `
        }
    }
}