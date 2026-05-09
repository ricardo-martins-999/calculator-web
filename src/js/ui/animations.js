import {
    interpolate,
    easeOutCubic,
} from '../utils/helpers.js';

export function animateValue({
    from,
    to,
    duration = 400,
    onUpdate,
    onComplete,
    easing = easeOutCubic
}) {
    const startTime = performance.now();
    let animationFrameId;

    function update(currentTime) {
        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easing(progress);

        const value = interpolate(from, to, easedProgress);

        onUpdate?.(value);

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(update);
        } else {
            onComplete?.(to);
        }
    }

    animationFrameId = requestAnimationFrame(update);

    return () => {
        cancelAnimationFrame(animationFrameId);
    };
}