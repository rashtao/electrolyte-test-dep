var IoC = require('electrolyte');

IoC.register("dep/service1", require("./include/service1"));
IoC.register("dep/service2", require("./include/service2"));
IoC.register("dep/service3", require("./include/service3"));

var s = IoC.create("dep/service3");

exports = module.exports = function (injected) {
	return {
		service: s,
		injected: injected
	};
};

exports.NotAnnotated = require("./app_not_annotated");
exports.NotAnnotatedSetter = require("./app_not_annotated_setter");
exports.Setter= require("./app_setter");

exports["@require"] = ["NestedDependency"];
