import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(0.5), 500);
});
