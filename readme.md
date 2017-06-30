# words-of-the-day [![Build Status](https://travis-ci.org/CodeDotJS/words-of-the-day.svg?branch=master)](https://travis-ci.org/CodeDotJS/words-of-the-day)

> Get word of the day and meanings from the different sources.

## Install

```
$ $ npm install words-of-the-day
```

## Usage

- __`Default`__

```js
const wordOfTheDay = require('words-of-the-day');


wordOfTheDay.wordThink().then(data => {
  console.log(data);
  /*
  { date: '2017/06/30',
    word: 'Secular',
    meaning: 'Secular  adj. 1. Worldly rather than spiritual.'
  }
   */
});

wordOfTheDay.merrimWebster().then(data => {
  console.log(data);
  // {data: information}
});

wordOfTheDay.dictionarWord().then(data => {
  console.log(data);
  // {data: information}
});

```
- __`Specific`__

```js
wordOfTheDay.merriamWebster('2016/10/10').then(data => {
	console.log(data);
});

wordOfTheDay.dictionaryWord('2016/01/03').then(data => {
	console.log(data);
});
```

## API

- __`wordOfTheDay.wordThink()`__

- __`wordOfTheDay.merriamWebster()`__

- __`wordOfTheDay.merriamWebster('yyyy/mm/dd')`__

`format : ` `yyyy/mm/dd`

`type :` `string`

- __`wordOfTheDay.dictionaryWord()`__

- __`wordOfTheDay.dictionaryWord('yyyy/mm/dd')`__

`format : ` `yyyy/mm/dd`

`type :` `string`

## Related

- [`worday`](https://github.com/CodeDotJS/worday) `:` `Your daily does of new words from the command line!`

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)
