var IoC = require('electrolyte');

IoC.register("dep/service1", require("./include/service1"));
IoC.register("dep/service2", require("./include/service2"));
IoC.register("dep/service3", require("./include/service3"));

var s = IoC.create("dep/service3");

exports = module.exports = function () {
	return {
		service: s
	};
};

exports["@require"] = ["NestedDependency"];
exports['@type'] = 'setter';
