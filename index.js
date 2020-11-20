const fs = require("fs")
const utils = require('loader-utils')

module.exports = async function(source, map) {
    
    this.cacheable()
    
    source = `<script lang='ts'>${source}</script>`;

    try {
        let isJade = utils.getOptions(this).template == 'jade',
            templatePath = this.resourcePath.replace('.tsx', isJade ? '.jade' : '.html')
            template = String(fs.readFileSync(templatePath))
        // jade render if template is jade
        isJade && (template = require('jade').render(template))

        source = `<template>${template}</template>` + source;

        // add watch
        this.addDependency(templatePath)
    }
    catch(err) {
        console.log(err)
    }
    
    return source
}