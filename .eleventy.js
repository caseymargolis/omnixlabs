const { DateTime } = require("luxon");
const markdownFilter = require("./markdown-filter");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://www.omnixlabs.com"
        },
    });

    eleventyConfig.addCollection("sitemap", function(collectionApi) {
        const excludedDirs = ['admin', 'netlify', 'authors', 'static'];
        return collectionApi.getAll().filter(item => {
          // Exclude items whose URL path includes any of the excluded directories
          return !excludedDirs.some(dir => item.url.includes('/' + dir + '/'));
        });
      });
      
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/about/*.html');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
    eleventyConfig.addFilter("markdownFilter", markdownFilter);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}