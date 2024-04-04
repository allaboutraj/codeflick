const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();
    //1. Convert markdown to HTML 
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted HTML",convertedHtml);

    //2. Sanitize html content
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    console.log("Sanitize HTML",sanitizedHtml);

    //3. Convert the sanitized html back to Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("Sanitize Markdown",sanitizedMarkdown);
    return sanitizedMarkdown;
}

// const input = `

// # Hello Worlds

// ### this is a Markdown

// - something

// <script> alert('whooo')</script>

// [Link](www.google.com)

// `;
// sanitizeMarkdownContent(input);

module.exports = sanitizeMarkdownContent;