import rxjsConfig from 'recompose/rxjsObservableConfig';
import {componentFromStreamWithConfig} from 'recompose';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {combineLatest} from 'rxjs/operators/combineLatest';

const componentFromStream = componentFromStreamWithConfig(rxjsConfig);

const Scroll = componentFromStream(props$ => {
	const scroll$ = fromEvent(window, 'scroll', {passive: true}).startWith({});

	return props$.pipe(
		combineLatest(scroll$, (props, scroll) => props.render(scroll))
	);
});

export default Scroll;
