import Vue, { CreateElement, VNode } from 'vue';
import Rx from 'rxjs';
import DemoView from './components/demo';

Rx.Observable.fromEvent(document, 'DOMContentLoaded')
    .subscribe(() => {
        new Vue({
            el: '#app',
            render(createElement: CreateElement): VNode {
                return createElement(DemoView);
            },
        });
    });
