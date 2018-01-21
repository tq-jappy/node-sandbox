import Rx from 'rxjs/Rx';
import { of } from 'rxjs/add/observable/of';
import { map } from 'rxjs/add/operator/map';

Rx.Observable.of(1, 2, 3)
  .map(x => x + '!!!')
  .subscribe(
    x => console.log(x),
    err => console.log(err),
    () => console.log('1: completed!'));

Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
})
  .subscribe(value => console.log(value));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("baz"), 1000);
});
Rx.Observable.fromPromise(promise)
  .subscribe(value => console.log(value));

const observable3 = new Rx.Subject();
observable3
  .delay(2000)
  .take(10)
  .subscribe(value => console.log(value));
setInterval(() => observable3.next('*'), 100);

const clicks = Rx.Observable.fromEvent(document.querySelector('#btn'), 'click');
const ones = clicks.mapTo(1);
const seed = 0;
const count = ones.scan((acc, one) => acc + one, seed);
count.subscribe(x => console.log(`Button ${x}`));

/*
const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');
input.pluck('target', 'value').distinct().subscribe(value => console.log(value));
*/