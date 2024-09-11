"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import styles from "./topics.module.css";
// import SideBar from '../components/SideBar/SideBar';
import { FlowBitSideBar } from "../components/FlowBitSideBar/FlowBitSideBar";
import ContentArea from "../components/ContentArea/ContentArea";
import PrimaryLayout from "@/utils/components/PrimaryLayout";
import Hamburger from "../components/Hamburger/Hamburger";

// import { useRouter } from 'next/router';

const page = ({ params }: any) => {
  const [data, setData] = useState([]);
  const { slug } = params;
  const technologyId = slug?.split("-")[1];
  const technology = slug?.split("-")[0]

  console.log(technology)

  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if component has mounted

  const fetchData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: technologyId,
        }),
      };
      console.log("Request Options:", requestOptions);
      const response = await fetch(
        `https://sagar.alphaworldtech.com/Posts/getPostsById.php`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData?.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setHasMounted(true); // Component has mounted

    const handleResize = () => {
      const mobileThreshold = 769;
      setIsMobile(window.innerWidth < mobileThreshold);
    };

    // Check window size on mount (client-side only)
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return null if the component hasn't mounted yet to avoid hydration error
  if (!hasMounted) {
    return null;
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("Fetched Data:", data);

  const dataObject = [
    {
      topicName: "html5",
      overview: `  <h1>Introduction to HTML</h1>
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
&lt;/form&gt;</code></pre>`,
topics:[
  "Introduction to HTML",
  "HTML Document Structure",
  "HTML Elements",
  "HTML Attributes",
  "HTML Headings",
  "HTML Paragraphs",
  "HTML Text Formatting",
  "HTML Lists",
  "HTML Links",
  "HTML Images",
  "HTML Tables",
  "HTML Forms",
  "HTML Input Types",
]
    },
    {
      topicName: "react js",
      overview: `<h1>Introduction to React.js</h1>
<p>React.js is a declarative, component-based JavaScript library for building user interfaces. Developed by Facebook, React allows developers to create reusable UI components, efficiently manage the state of applications, and render changes dynamically using a virtual DOM. React is widely used for building single-page applications (SPAs) due to its speed and flexibility.</p>

<h2>Key Concepts of React.js</h2>

<h3>Components and JSX</h3>
<p>React applications are built using components, which are reusable pieces of the UI. JSX is a syntax extension for JavaScript that looks similar to HTML, allowing developers to define UI components in an intuitive manner.</p>

<h3>State and Props</h3>
<p>State is an object that holds data relevant to a component, and props are the mechanism by which data is passed between components. Together, state and props enable dynamic data handling within React applications.</p>

<h3>Example of a Functional Component</h3>

<pre><code>import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Click me
            &lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;</code></pre>
`,
topics: [
  "Introduction to React.js",
  "React.js Components",
  "React.js JSX",
  "React.js Props",
  "React.js State",
  "React.js Lifecycle Methods",
  "React.js Hooks",
  "React.js Forms",
  "React.js Events",
  "React.js Routing",
  "React.js Context API",
  "React.js Redux",
  "React.js Error Boundaries",
]

    },
    {
      topicName: "mysql",
      overview: `<h1>Introduction to MySQL</h1>
<p>MySQL is a popular open-source relational database management system (RDBMS) used for managing databases. It stores data in tables, enabling easy retrieval and manipulation through SQL (Structured Query Language). MySQL is widely used in combination with various web technologies like PHP, Python, and Node.js for dynamic websites and applications. It is known for its reliability, flexibility, and scalability, making it a suitable choice for small to large-scale applications.</p>

<h2>Key Concepts of MySQL</h2>

<h3>MySQL Database Structure</h3>
<p>In MySQL, data is organized into databases, tables, rows, and columns. A database contains multiple tables, and each table represents an entity. Columns define the attributes of the entity, while rows store the actual data.</p>

<h3>SQL Queries</h3>
<p>SQL is used to interact with MySQL databases. You can perform operations like inserting, updating, deleting, and retrieving data using SQL queries. For example:</p>

<pre><code>CREATE DATABASE school;
USE school;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);

INSERT INTO students (name, age) VALUES ('John Doe', 18);
SELECT * FROM students;</code></pre>

<h3>Indexes and Constraints</h3>
<p>Indexes in MySQL improve the speed of data retrieval operations. Constraints, such as <code>PRIMARY KEY</code> and <code>FOREIGN KEY</code>, are used to enforce rules on data to maintain integrity.</p>
`,
topics:[
  "Introduction to MySQL",
  "MySQL Database Structure",
  "MySQL Data Types",
  "MySQL Tables and Columns",
  "MySQL Primary and Foreign Keys",
  "MySQL Queries",
  "MySQL Joins",
  "MySQL Indexing",
  "MySQL Stored Procedures",
  "MySQL Triggers",
  "MySQL Transactions",
  "MySQL Backup and Restore",
  "MySQL User Permissions",
]
    },
    {
      topicName: "Node js",
      overview: `<h1>Introduction to Node.js</h1>
<p>Node.js is a powerful runtime environment built on Chrome’s V8 JavaScript engine that enables developers to write server-side code in JavaScript. It follows an event-driven, non-blocking I/O model, making it highly efficient for real-time applications such as chat applications, APIs, and streaming services. Node.js has a rich ecosystem, with a vast number of libraries and modules available through npm (Node Package Manager).</p>

<h2>Key Concepts of Node.js</h2>

<h3>Event-Driven Architecture</h3>
<p>Node.js is designed to handle multiple requests concurrently by using an event-driven, non-blocking architecture. This means Node.js applications do not wait for a task to complete before moving on to the next one, making it perfect for I/O-heavy applications.</p>

<h3>Modules and npm</h3>
<p>Node.js follows a modular structure, where code can be broken down into reusable components called modules. npm (Node Package Manager) is the default package manager for Node.js, allowing developers to install, update, and manage these modules.</p>

<h3>Example of a Simple Server</h3>
<p>A basic example of a Node.js server using the built-in <code>http</code> module:</p>

<pre><code>const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, Node.js!');
    res.end();
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});</code></pre>
`,
topics:[
  "Introduction to Node.js",
  "Node.js Architecture",
  "Node.js Modules",
  "Node.js Event Loop",
  "Node.js File System",
  "Node.js Streams",
  "Node.js Buffers",
  "Node.js HTTP Module",
  "Node.js NPM (Node Package Manager)",
  "Node.js Error Handling",
  "Node.js Asynchronous Programming",
  "Node.js Express Framework",
  "Node.js Middleware",
]
    },
    {
      topicName: "express js",
      overview: `<h1>Introduction to Express.js</h1>
<p>Express.js is a fast and minimalist web framework for Node.js, providing a robust set of features for building web and mobile applications. It simplifies the process of handling HTTP requests and responses, managing routes, middleware, and enabling easy integration with databases. Express.js is commonly used to build RESTful APIs and web applications due to its flexibility and simplicity.</p>

<h2>Key Concepts of Express.js</h2>

<h3>Routing in Express.js</h3>
<p>Routing refers to defining the various endpoints of your web application, and how your server responds to requests made to those endpoints. Express.js makes routing easy with its built-in methods like <code>app.get()</code> and <code>app.post()</code> for handling different HTTP methods.</p>

<h3>Middleware</h3>
<p>Middleware functions in Express.js are used to handle requests before sending a response. They have access to the request object, response object, and the next middleware function in the application’s request-response cycle.</p>

<h3>Example of a Basic Express App</h3>

<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});</code></pre>
`,
topics:[
  "Introduction to Express.js",
  "Express.js Installation",
  "Express.js Routing",
  "Express.js Middleware",
  "Express.js Request and Response Objects",
  "Express.js Template Engines",
  "Express.js Error Handling",
  "Express.js Sessions and Cookies",
  "Express.js Authentication",
  "Express.js File Upload",
  "Express.js Security Best Practices",
  "Express.js API Development",
  "Express.js Deployment",
]
    },
    {
      topicName: "css3",
      overview: `<h1>Introduction to CSS3</h1>
<p>CSS3 is the latest version of the Cascading Style Sheets (CSS) language, used to style and design the layout of web pages. CSS3 introduces new features such as flexbox, grid layouts, transitions, animations, and media queries to create responsive designs. It allows web developers to enhance user experience through more visually appealing and interactive designs.</p>

<h2>Key Concepts of CSS3</h2>

<h3>CSS Selectors</h3>
<p>CSS selectors are used to target and apply styles to specific elements on a web page. These can target elements by tag, class, ID, or attributes.</p>

<h3>Media Queries</h3>
<p>Media queries are used in CSS3 to make web pages responsive to different screen sizes and device types. By using media queries, developers can define different styles for devices like smartphones, tablets, and desktops.</p>

<h3>Example of Responsive Layout</h3>

<pre><code>body {
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-direction: row;
}

@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}</code></pre>
`,
topics:[
  "Introduction to CSS3",
  "CSS3 Syntax",
  "CSS3 Selectors",
  "CSS3 Box Model",
  "CSS3 Flexbox",
  "CSS3 Grid",
  "CSS3 Animations",
  "CSS3 Transitions",
  "CSS3 Pseudo-elements and Pseudo-classes",
  "CSS3 Media Queries",
  "CSS3 Responsive Design",
  "CSS3 Variables",
  "CSS3 Positioning",
]
    },
    {
      topicName: "next js",
      overview: `<h1>Introduction to Next.js</h1>
<p>Next.js is a React framework that enables developers to build server-rendered React applications effortlessly. It includes out-of-the-box features like static site generation (SSG), server-side rendering (SSR), dynamic routing, and API routes, making it a robust framework for modern web development. Next.js helps improve the performance and SEO of React applications by rendering pages on the server before sending them to the client.</p>

<h2>Key Concepts of Next.js</h2>

<h3>Static Site Generation (SSG)</h3>
<p>Next.js allows developers to generate static pages at build time, ensuring faster load times and better performance. This makes Next.js a great choice for content-heavy websites like blogs and e-commerce platforms.</p>

<h3>Server-Side Rendering (SSR)</h3>
<p>With SSR, Next.js renders the page on the server each time a request is made, delivering the rendered HTML to the browser. This approach improves SEO and allows pages to display faster for users.</p>

<h3>Example of a Next.js Page</h3>

<pre><code>import React from 'react';

function HomePage() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Welcome to Next.js!&lt;/h1&gt;
        &lt;/div&gt;
    );
}

export default HomePage;</code></pre>
`,
topics:[
  "Introduction to Next.js",
  "Next.js Pages",
  "Next.js Routing",
  "Next.js Static Site Generation (SSG)",
  "Next.js Server-side Rendering (SSR)",
  "Next.js API Routes",
  "Next.js Data Fetching",
  "Next.js Dynamic Routing",
  "Next.js CSS and Styling",
  "Next.js Image Optimization",
  "Next.js Authentication",
  "Next.js Deployment",
  "Next.js Performance Optimization",
]
    },
    {
      topicName: "python",
      overview: `<h1>Introduction to Python</h1>
<p>Python is a high-level, interpreted programming language known for its simplicity and versatility. It is widely used in web development, data analysis, artificial intelligence, automation, and more. Python’s readability and comprehensive standard library make it an excellent choice for both beginners and experienced developers.</p>

<h2>Key Concepts of Python</h2>

<h3>Data Structures</h3>
<p>Python provides built-in data structures such as lists, tuples, dictionaries, and sets, making it easy to store and manipulate collections of data.</p>

<h3>Functions and Modules</h3>
<p>Functions in Python are used to encapsulate code into reusable blocks. Modules are files containing Python code that can be imported and used in other Python scripts.</p>

<h3>Example of a Python Function</h3>

<pre><code>def greet(name):
    print(f"Hello, {name}!")

greet("Alice")</code></pre>

`,
topics:[
  "Introduction to Python",
  "Python Data Types",
  "Python Variables and Expressions",
  "Python Functions",
  "Python Control Structures",
  "Python Lists and Tuples",
  "Python Dictionaries and Sets",
  "Python Modules and Packages",
  "Python File Handling",
  "Python Object-oriented Programming",
  "Python Exception Handling",
  "Python Decorators",
  "Python Generators",
]
    },
    {
      topicName:"aws",
      overview:`<h1>Introduction to AWS</h1>
<p>Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services such as computing power, storage, databases, machine learning, and more. AWS enables businesses to scale their applications seamlessly, offering high availability, security, and flexibility. With AWS, you can deploy and manage applications in the cloud, reducing infrastructure costs and simplifying server management.</p>

<h2>Key Concepts of AWS</h2>

<h3>EC2 (Elastic Compute Cloud)</h3>
<p>EC2 is a service that provides virtual servers in the cloud. It allows users to launch, configure, and manage virtual machines, known as instances, to run applications.</p>

<h3>S3 (Simple Storage Service)</h3>
<p>AWS S3 is a scalable object storage service used to store and retrieve large amounts of data. It is highly durable and secure, making it ideal for backing up data, hosting static websites, and storing application assets.</p>

<h3>Example of Launching an EC2 Instance</h3>

<pre><code># Step 1: Open AWS Management Console
# Step 2: Navigate to EC2 Dashboard
# Step 3: Click "Launch Instance" and select AMI, instance type, and security groups
# Step 4: Configure instance details and launch your virtual server</code></pre>
`,
topics:[
"Introduction to AWS",
"AWS EC2 (Elastic Compute Cloud)",
"AWS S3 (Simple Storage Service)",
"AWS Lambda",
"AWS RDS (Relational Database Service)",
"AWS CloudFormation",
"AWS IAM (Identity and Access Management)",
"AWS VPC (Virtual Private Cloud)",
"AWS CloudFront",
"AWS Elastic Load Balancing",
"AWS Auto Scaling",
"AWS SNS (Simple Notification Service)",
"AWS CloudWatch",
]
    },
  ];


  const obj = dataObject.filter((ele)=>ele.topicName.toLowerCase()===decodeURIComponent(technology).toLowerCase());
  console.log(`object `, obj)
  const content:string = obj[0]["overview"];
  const topics: string [] = obj[0]["topics"];





  return (
    <>
      <Navbar />
      <div className={styles["black--border"]}>
        {isMobile ? <Hamburger topics={topics} /> : ""}
      </div>
      <PrimaryLayout>
        <div className={styles["topics--mainContainer"]}>
          {isMobile ? "" : <FlowBitSideBar topics={topics} />}
          <ContentArea htmlCode={content} />
        </div>
      </PrimaryLayout>
    </>
  );
};

export default page;
