Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Npm.depends({
    'machina': '0.3.8'
});

Package.on_use(function (api) {
    api.use(['stevezhu:lodash'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

    if(api.export)
        api.export('machina','server')
});

Package.on_test(function(api){

    api.use(['underscore'])
    api.use(['tinytest','test-helpers'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

});
