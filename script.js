'use strict';

const htmlObjects = {
	yearParagraph: document.getElementById('year'),
};

const date = new Date(Date.now());

htmlObjects.yearParagraph.textContent = htmlObjects.yearParagraph.textContent.replace(":year:", date.getFullYear());