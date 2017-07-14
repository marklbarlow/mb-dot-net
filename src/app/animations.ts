import { animate, AnimationMetadata, style, transition } from '@angular/animations';

export function getEnterTransition(): AnimationMetadata {
    return transition(':enter', [
        style({
            left: -100,
            opacity: 0.0,
            zIndex: 2
        }),
        animate(
            '1000ms ease-in-out',
            style({
                left: 0,
                opacity: 1.0,
                zIndex: 2
            })
        )
    ]);
}