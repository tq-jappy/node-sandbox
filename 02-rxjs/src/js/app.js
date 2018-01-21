import Rx from 'rxjs/Rx';
import { of } from 'rxjs/add/observable/of';
import { map } from 'rxjs/add/operator/map';

const f0 = () => {
  Rx.Observable.of(1, 2, 3)
    .map(x => x + '!!!')
    .subscribe(
      x => console.log(x),
      err => console.log(err),
      () => console.log('1: completed!'));
};
// f0();

const f1 = () => {
  Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
  })
    .subscribe(value => console.log(value));
};
// f1();

const f2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("baz"), 1000);
  });
  Rx.Observable.fromPromise(promise)
    .subscribe(value => console.log(value));
};
// f2();

const f3 = () => {
  const observable3 = new Rx.Subject();
  observable3
    .delay(2000)
    .take(10)
    .subscribe(value => console.log(value));
  setInterval(() => observable3.next('*'), 100);
};
// f3();

const f4 = () => {
  const clicks = Rx.Observable.fromEvent(document.querySelector('#btn'), 'click');
  const ones = clicks.mapTo(1);
  const seed = 0;
  const count = ones.scan((acc, one) => acc + one, seed);
  count.subscribe(x => console.log(`Button ${x}`));
};
// f4();

const f5 = () => {
  const source = Rx.Observable.timer(0, 1000);
  const example = source.window(Rx.Observable.interval(3000));
  const count = example.scan((acc, curr) => acc + 1, 0);
  const subscribe = count.subscribe(v => console.log(`Window ${v}`));
  const subscribeTwo = example.mergeAll().subscribe(v => console.log(v));
};
f5();

/*
const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');
input.pluck('target', 'value').distinct().subscribe(value => console.log(value));
*/