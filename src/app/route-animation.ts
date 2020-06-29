import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  keyframes,
  state
} from '@angular/animations';
export const slideInAnimation =
  // trigger('routeAnimations', [
  // w prawo ( mozna dac Home => Login itp)
  // transition('* => *', [
  //   query(':enter, :leave',
  //     style({ position: 'fixed', width: '100%' }),
  //     { optional: true }),
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out',
  //         style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out',
  //         style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ])
  //,
  //w lewo xd
  //   transition('* => *', [
  //     query(':enter, :leave',
  //       style({ position: 'fixed', width: '100%' }),
  //       { optional: true }),
  //     group([
  //       query(':enter', [
  //         style({ transform: 'translateX(100%)' }),
  //         animate('0.5s ease-in-out',
  //           style({ transform: 'translateX(0%)' }))
  //       ], { optional: true }),
  //       query(':leave', [
  //         style({ transform: 'translateX(0%)' }),
  //         animate('0.5s ease-in-out',
  //           style({ transform: 'translateX(-100%)' }))
  //       ], { optional: true }),
  //     ])
  //   ])
  // ]);
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          left: '0',
        }),
      ], { optional: true }),
      group([
        query(':enter', [
          animate('2000ms ease-in-out', keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ], { optional: true }),
        query(':leave', [
          animate('2000ms ease-in-out', keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.3) translateX(-25%) rotate(0)', offset: 0.35 }),
            style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(0.3)', offset: 1 }),
          ])),
        ], { optional: true })
      ]),
    ])

  ]);
