'use strict';

var mainModule = require('../../src/modules/main.js'),
	packageManifest = require('../../package.json');
console.log(mainModule)
describe(packageManifest.name, function () {
	describe('has a correct interface', function () {
		it('"version" is the same as in the package.json', function () {
			expect(mainModule.version).toEqual(packageManifest.version)
		})
	})
})
