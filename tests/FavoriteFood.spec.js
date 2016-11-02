describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter favorite food', function () {
		var testFood = [{
			name:'Jim',
			favoriteFood: 'pizza'
		}, {
			name:'Bob',
			favoriteFood: 'burrito'
	}];

		var myTest = $filter('favoriteFood')(testFood, 'burrito');
		expect(myTest[0].name).toBe('Bob');

	})


});
