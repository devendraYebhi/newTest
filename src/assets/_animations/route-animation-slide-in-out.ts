import { trigger, state, animate, transition, style, query, group } from '@angular/animations';
export const routeAnimationSlideInOut =
    trigger('routeAnimation', [
        transition('1 => 2, 1=> 3, 2 => 3', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
            ]),
        ]),
        transition('3 => 2, 2 => 1, 3 => 1', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
            ]),
        ]),
    ])