import { quintOut } from "svelte/easing";
import { crossfade } from "svelte/transition";

// for smoothly moving players between selected and unselected columns
export const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 200),

  fallback(node) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `,
    };
  },
});

export const flipSettings = { duration: 200 };
