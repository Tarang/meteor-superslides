Package.describe({
    summary: "Superslides for meteor"
});

Package.on_use(function (api) {
    api.use("jquery", "client");

    api.add_files([
        "lib/Superslides.js"
    ], "client", {bare: true});

    api.export("Superslides");
});