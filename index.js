'use strict';

const got = require('got');
const cheerio = require('cheerio');

const showDate = new Date().toISOString().slice(0, 10).replace(/-/g, '/');

const wordThinkDotCom = () => {
	const url = 'http://www.wordthink.com/';

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const words = $('.title a, .pagetitle a, h2.attachment a').eq(0).text();
		const meanings = $('.post p').eq(0).text().trim();

		return {
			date: showDate,
			word: words,
			meaning: meanings
		};
	});
};

const merriamWebsterDotCom = day => {
	day = day || '';
	const moment = day || showDate;
	const url = `https://www.merriam-webster.com/word-of-the-day/${day}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const words = $('.article-header-container.wod-article-header .word-header h1').text();
		const meanings = $('.wod-article-container p').eq(0).text().split(':')[1].trim();

		return {
			date: moment,
			word: words,
			meaning: meanings
		};
	}).catch(err => {
		if (err) {
			err.message = 'could not find any words for specific date';
		}
		return err.message;
	});
};

const dictionaryDotCom = day => {
	day = day || '';
	const moment = day || showDate;
	const url = `${'http://www.dictionary.com/wordoftheday/'}${day.replace(/-/g, '/')}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const words = $('.definition-header strong').text();
		const meanings = $('.first').text();

		return {
			date: moment,
			word: words,
			meaning: meanings
		};
	}).catch(err => {
		if (err) {
			err.message = 'could not find any words for the specific date';
		}
		return err.message;
	});
};

exports.wordThink = wordThinkDotCom;
exports.merriamWebster = merriamWebsterDotCom;
exports.dictionaryWord = dictionaryDotCom;
