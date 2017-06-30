import test from 'ava';
import m from './';

test('wordThink', async t => {
	const data = await m.wordThink();

	t.is(data.date, '2017/06/30');
	t.is(data.word, 'Secular');
	t.is(data.meaning, 'Secular  adj. 1. Worldly rather than spiritual. 2. Not specifically relating to religion or to a religious body. “A secular book.”');
});

test('merriamWebster', async t => {
	const data = await m.merriamWebster();

	t.is(data.date, '2017/06/30');
	t.is(data.word, 'fidelity');
	t.is(data.meaning, 'the quality or state of being faithful');
});

test('merriamWebsterDate', async t => {
	const data = await m.merriamWebster('2016/10/10');

	t.is(data.date, '2016/10/10');
	t.is(data.word, 'roister');
	t.is(data.meaning, 'to engage in noisy revelry');
});

test('dictionaryWord', async t => {
	const data = await m.dictionaryWord();

	t.is(data.date, '2017/06/30');
	t.is(data.word, 'divagate');
	t.is(data.meaning, 'to wander; stray.');
});

test('dictionaryWordDate', async t => {
	const data = await m.dictionaryWord('2016/10/04	');

	t.is(data.date, '2016/10/04	');
	t.is(data.word, 'potboiler');
	t.is(data.meaning, 'a mediocre work of literature or art produced merely for financial gain.');
});
