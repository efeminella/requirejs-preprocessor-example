/*!
 * @version
 */
require.config( {
    paths : {
        ModuleA : 'app/module.a',
        ModuleB : 'app/module.b',
        ModuleC : 'app/module.c'
    }
});

require( ['ModuleC'], function( module ) {
    document.getElementById('message').innerHTML = module.name;
});