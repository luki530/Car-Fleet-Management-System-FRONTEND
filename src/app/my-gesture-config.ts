import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
    overrides = {
        pan: { direction: Hammer.DIRECTION_ALL },
        swipe: { direction: Hammer.DIRECTION_VERTICAL },
    } as any;
}
