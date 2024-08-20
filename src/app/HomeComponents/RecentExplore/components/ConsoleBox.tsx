"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../RecentExplore.module.css";

const ConsoleBox = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const code = 
`"use strict";

/** Array Methods **/

const deleteFromEnd = (array, size) => {
  const index = emptyIndex(array, size);

  if(index === 0) {
    console.log("Cannot pop the value from array, Array is empty");
    return;
  }

  if (index === -1) {
    array[size - 1] = null;
  } else {
    array[index - 1] = null;
  }
  return;
};

const searchElement = (array, size, ele) => {
  for (let i = 0; i < size; i++) {
    if (array[i] === ele) return true;
  }
  return false;
};

const emptyIndex = (array, size) => {
  for (let i = 0; i < size; i++) {
    if (array[i] === undefined || array[i] === null) return i;
  }
  return -1;
};

const insertIntoArray = (array, size, val) => {
  const index = emptyIndex(array, size);
  if (index < 0) {
    console.log("Array is full");
    return;
  }
  array[index] = val;
};

const arrayMethods = (size) => {
  const array = new Array(size);
  insertIntoArray(array, size, 1);
  insertIntoArray(array, size, 2);
  insertIntoArray(array, size, 3);
  insertIntoArray(array, size, 4);
  insertIntoArray(array, size, 5);
  deleteFromEnd(array, size);
  insertIntoArray(array, size, 6);
  console.log(\`Search element : \${searchElement(array, size, 4)}\`);
  return array;
};
module.exports = { arrayMethods };`;

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
      <pre>{code}</pre>
      <p onClick={handleCopyCode} className={styles.copyCode}>
        {" "}
        {copyStatus ? copyStatus : "Copy Code"}
      </p>
    </div>
  );
};

export default ConsoleBox;
