import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [
            // styles at start of transition
            style({ opacity: 0, background: '#ffc7093b' }),
            style({ opacity: 0.5, background: '#ffff' }),
            style({ opacity: 0.7, background: '#ffff' }),
            // animation and styles at end of transition
            animate(3000, style({ opacity: 1 }))
        ]),
    ]);