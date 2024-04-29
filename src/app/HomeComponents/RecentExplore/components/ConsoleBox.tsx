"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "../RecentExplore.module.css";

const ConsoleBox = () => {
    const [copyStatus, setCopyStatus] = useState("");
    const code = `import React from 'react';
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, World!</h1>
            <div>
        );
    };
    
    import React from 'react';
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, World!</h1>
            <div>
        );
    };
    
    import React from 'react';
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, World!</h1>
            <div>
        );
    };
    
    
    import React from 'react';
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, World!</h1>
            <div>
        );
    };
    
    import React from 'react';
    function HelloWorld() {
        return (
            <div>
                <h1>Hello, World!</h1>
            <div>
        );
    };
    
    
    `

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        setCopyStatus("Copied!");
    
        // Clear previous timeout (if any) when copying again
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
    
        // Set new timeout to reset copy status after 2 seconds
        timeoutRef.current = setTimeout(() => {
          setCopyStatus("");
        }, 2000);
      };
    
      // Use useRef to hold the timeout reference
      const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Union type of NodeJS.Timeout or null
    
      // Clear timeout on component unmount
      useEffect(() => {
        return () => {
          // Check if timeoutRef.current is not null before clearing
          if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, []);
    return (
        <div className={styles["console--container"]}>
            <pre>
            {code}
            </pre>
            <p onClick={handleCopyCode} className={styles.copyCode}>  {copyStatus ? copyStatus : "Copy Code"}</p>
        </div>
    );
};

export default ConsoleBox;
