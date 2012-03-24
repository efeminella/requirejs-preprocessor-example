var requirejs = require( 'requirejs' ),
	wrench    = require( 'wrench' );

var config = {
    baseUrl             : 'src',
    appDir              : '../',
    dir                 : '../deploy',
    mainConfigFile      : '../src/main.js',
    optimizeCss         : 'standard',
    fileExclusionRegExp : /(^\.|build|deploy)/,
    onBuildWrite: function( moduleName, path, contents ) 
    {
        console.log( 'Writing: ' + moduleName );  

        // test for the module of interest
        if ( moduleName === 'main' ) 
        {
            // output the original source
            console.log( contents );
                
            // perform transformations on the original source
            contents = contents.replace( /#version/i, new Date().toString() );
                
            // output modified source
            console.log( contents );
        }
        // return contents
        return contents;
    },
    modules : [{
        name: 'main'
    }],
};

wrench.rmdirSyncRecursive( config.dir, true );

requirejs.optimize( config, function( results ) 
{
    wrench.rmdirSyncRecursive( config.dir + '/src/app', true );
});