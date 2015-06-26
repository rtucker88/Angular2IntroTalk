/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

import {PhotoView} from 'myPhoto';

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>My Photo App</h1> <photo-view></photo-view>',
    directives: [PhotoView]
})
class MyApp {
}

bootstrap(MyApp);