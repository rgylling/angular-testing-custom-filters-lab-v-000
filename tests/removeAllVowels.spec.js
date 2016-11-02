describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove voewls', function (){
		var myTest = $filter('removeAllVowels')('aeiof');

		expect(myTest).toEqual('f');
	})

});
