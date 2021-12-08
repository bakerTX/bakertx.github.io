module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("styles.css");
    return {
      dir: {
        input: "pages",
        output: "_site",
        layouts: "_layouts"
      }
    }
  };