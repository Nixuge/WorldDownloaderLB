/// api_version=2
var script = registerScript({
    name: "TestScript",
    version: "1.0.0",
    authors: ["Nixuge"]
});

var apiadditions = Java.type("wdl.api.addition.DownloadActions");

script.registerModule({
    name: "WorldDownloader",
    category: "Misc",
    description: "Toggle on/off the world downloader"
    }, function (WorldDownloader) {
        WorldDownloader.on("enable", function() {
            var result = apiadditions.startDownload();
        });
        WorldDownloader.on("disable", function() {
            var result = apiadditions.stopDownload()
        });
});
