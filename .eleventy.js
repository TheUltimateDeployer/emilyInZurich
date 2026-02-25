// .eleventy.js
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
    eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths = [300, 600, 1200], formats = ["webp", "jpeg"]) {
        let metadata = await Image(src, {
            widths: widths,
            formats: formats,
            outputDir: "./docs/img/", // relative to the output directory
            urlPath: "/img/", // URL path in the final HTML
        });

        let imageAttributes = {
            alt,
            sizes: "100vw",
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(metadata, imageAttributes);
    });
    return {
        dir: {
            output: "docs"
        }
    };
};
