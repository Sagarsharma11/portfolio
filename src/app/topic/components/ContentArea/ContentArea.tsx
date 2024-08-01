import React from 'react';
import styles from "./ContentArea.module.css"

const ContentArea = () => {
  const htmlCode = `  <h1>Introduction to HTML</h1>
        <p>HTML (HyperText Markup Language) is the standard language used to create and design web pages. It forms the backbone of almost every website and is essential for structuring content on the web. HTML is a markup language that defines the structure and presentation of web content through a series of elements and tags.</p>

        <h2>Key Concepts of HTML</h2>

        <h3>HTML Document Structure</h3>
        <p>An HTML document is composed of nested elements and tags that define the document's structure. The basic structure of an HTML document includes the <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.</p>

        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Main Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

        <h3>HTML Elements</h3>
        <p>Elements are the building blocks of HTML. Each element is defined by a start tag, content, and an end tag. For example:</p>
        <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

        <h3>HTML Attributes</h3>
        <p>Attributes provide additional information about an element. They are included in the start tag and usually come in name-value pairs. For example:</p>
        <pre><code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</code></pre>

        <h3>HTML Headings</h3>
        <p>Headings are used to define the hierarchy of content. There are six levels of headings, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, with <code>&lt;h1&gt;</code> being the highest level.</p>
        <pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Subheading&lt;/h2&gt;</code></pre>

        <h3>HTML Paragraphs</h3>
        <p>The <code>&lt;p&gt;</code> tag is used to define paragraphs. It automatically adds space above and below the content.</p>
        <pre><code>&lt;p&gt;This is a paragraph of text.&lt;/p&gt;</code></pre>

        <h3>HTML Links</h3>
        <p>Links are created using the <code>&lt;a&gt;</code> tag. The <code>href</code> attribute specifies the URL of the page the link goes to.</p>
        <pre><code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</code></pre>

        <h3>HTML Images</h3>
        <p>The <code>&lt;img&gt;</code> tag is used to embed images. The <code>src</code> attribute specifies the image source, and the <code>alt</code> attribute provides alternative text for accessibility.</p>
        <pre><code>&lt;img src="image.jpg" alt="Description of image"&gt;</code></pre>

        <h3>HTML Lists</h3>
        <p>HTML supports both ordered lists (<code>&lt;ol&gt;</code>) and unordered lists (<code>&lt;ul&gt;</code>). List items are defined using the <code>&lt;li&gt;</code> tag.</p>
        <pre><code>&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;</code></pre>

        <h3>HTML Tables</h3>
        <p>Tables are defined using the <code>&lt;table&gt;</code> tag, with rows defined by <code>&lt;tr&gt;</code>, headers by <code>&lt;th&gt;</code>, and data cells by <code>&lt;td&gt;</code>.</p>
        <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header 1&lt;/th&gt;
      &lt;th&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Data 1&lt;/td&gt;
      &lt;td&gt;Data 2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

        <h3>HTML Forms</h3>
        <p>Forms are used to collect user input. They are defined using the <code>&lt;form&gt;</code> tag and can include various input elements such as text fields, radio buttons, and submit buttons.</p>
        <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>`;

  return (
    <div className={styles.contentArea}  dangerouslySetInnerHTML={{ __html: htmlCode }}>
    </div>
  )
}

export default ContentArea