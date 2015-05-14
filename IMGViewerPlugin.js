/*global runtime, document, odf, gui, console, webodf*/

function IMGViewerPlugin() {
    "use strict";

    var imgElement = undefined, 
        self = this;

    this.initialize = function (viewerElement, documentUrl) {
        // If the URL has a fragment (#...), try to load the file it represents
        console.debug("initialize", viewerElement, documentUrl);
        imgElement=document.createElement("img");
        imgElement.setAttribute('src', documentUrl);
        imgElement.setAttribute('alt', 'na');
        // oImg.setAttribute('height', '1px');
        // oImg.setAttribute('width', '1px');
        viewerElement.appendChild(imgElement);
        viewerElement.style.overflow = "auto";
        self.onLoad();
    };

    this.isSlideshow = function () {
        return false;
    };

    this.onLoad = function () {};

    this.fitToWidth = function (width) {
        console.debug("fitToWidth", width);
        imgElement.width = width;
    };

    this.fitToHeight = function (height) {
        console.debug("fitToHeight", height);
    };

    this.fitToPage = function (width, height) {
        console.debug("fitToPage", width, height);
        imgElement.width = width;
    };

    this.fitSmart = function (width) {
        console.debug("fitSmart", width);
        imgElement.width = width;
    };

    this.getZoomLevel = function () {
        console.debug("getZoomLevel");
        return  imgElement.width / imgElement.naturalWidth;
    };

    this.setZoomLevel = function (value) {
        imgElement.width = value * imgElement.naturalWidth;
        console.debug("setZoomLevel", value);
    };

    // return a list of tuples (pagename, pagenode)
    this.getPages = function () {
        return [imgElement];
    };

    this.showPage = function (n) {
        console.debug("showPage", n);     
    };

    this.getPluginName = function () {
        return "IMGViewerPlugin";
    };

    this.getPluginVersion = function () {
        return "Unkown";
    };

    this.getPluginURL = function () {
        return "pluginURL";
    };
}
