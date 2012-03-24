define( ['ModuleA', 'ModuleB'], function( a, b ) {
	return {
		name:  a.name + ', ' + b.name + ', ' + 'Module C',
	}
});