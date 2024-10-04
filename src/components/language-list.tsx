export const languageList = {
  python: {
    title: "Python",
    subTitle: "Python online compiler",
    language: {
      editor: "python",
      compiler: "python",
    },
    version: "3.10.0",
    codeSnippet: `def hello():
  print("Hello, World!")

hello()`,
  },
  r: {
    title: "R",
    subTitle: "R online compiler",
    language: {
      editor: "r",
      compiler: "rscript",
    },
    version: "4.1.1",
    codeSnippet: `hello <- function() {
  print("Hello, World!")
}

hello()`,
  },
  java: {
    title: "Java",
    subTitle: "Java online compiler",
    language: {
      editor: "java",
      compiler: "java",
    },
    version: "15.0.2",
    codeSnippet: `public class Main {
public static void main(String[] args) {
  System.out.println("Hello, World!");
  }
}`,
  },
  c: {
    title: "C",
    subTitle: "C online compiler",
    language: {
      editor: "c",
      compiler: "c",
    },
    version: "10.2.0",
    codeSnippet: `#include <stdio.h>

int main() {
    printf("Hello, World!");

    return 0;
}`,
  },
  "c++": {
    title: "C++",
    subTitle: "C++ online compiler",
    language: {
      editor: "c",
      compiler: "c++",
    },
    version: "10.2.0",
    codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello, World!";

    return 0;
}`,
  },
  csharp: {
    title: "C#",
    subTitle: "C# online compiler",
    language: {
      editor: "csharp",
      compiler: "csharp.net",
    },
    version: "5.0.201",
    codeSnippet: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
  },
  javascript: {
    title: "JavaScript",
    subTitle: "JavaScript online compiler",
    language: {
      editor: "javascript",
      compiler: "javascript",
    },
    version: "18.15.0",
    codeSnippet: `function hello() {
    console.log("Hello, World!");
}

hello();`,
  },
  go: {
    title: "Go",
    subTitle: "Go online compiler",
    language: {
      editor: "go",
      compiler: "go",
    },
    version: "1.16.2",
    codeSnippet: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
  },
  php: {
    title: "Php",
    subTitle: "Php online compiler",
    language: {
      editor: "php",
      compiler: "php",
    },
    version: "8.2.3",
    codeSnippet: `<?php
echo "Hello, World!";
?>`,
  },
  swift: {
    title: "Swift",
    subTitle: "Swift online compiler",
    language: {
      editor: "swift",
      compiler: "swift",
    },
    version: "5.3.3",
    codeSnippet: `import Swift

  print("Hello, World!")`,
  },
  typescript: {
    title: "TypeScript",
    subTitle: "TypeScript online compiler",
    language: {
      editor: "typescript",
      compiler: "typescript",
    },
    version: "5.0.3",
    codeSnippet: `function hello() {
    console.log("Hello, World!");
}

hello();`,
  },
  rust: {
    title: "Rust",
    subTitle: "Rust online compiler",
    language: {
      editor: "rust",
      compiler: "rust",
    },
    version: "1.68.2",
    codeSnippet: `fn main() {
    println!("Hello, World!");
}`,
  },
};
