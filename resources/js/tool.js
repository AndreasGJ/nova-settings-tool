Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: "settings-tool",
            path: "/settings",
            component: require("./SettingsTool")
        }
    ]);
    console.log("hejs hejsa");
});
