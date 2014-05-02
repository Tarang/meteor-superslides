Package.describe({
    summary: "Superslides for meteor"
});

Package.on_use(function (api) {
    api.use("jquery", "client");

    api.add_files([
        "lib/superslides.js"
    ], "client", {bare: true});

    api.add_files([
        "lib/superslides.css"
    ], "client");

    api.export("Superslides");
});