import React from 'react';
import ReactDOM from 'react-dom';

const langPercent = [
  {name: 'javascript', usage: 67.8, about: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'},
  {name: 'html/css', usage: 63.5, about: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'},
  {name: 'sql', usage: 54.4, about: 'SQL (/ˌɛsˌkjuːˈɛl/ (About this soundlisten) S-Q-L,[4] /ˈsiːkwəl/ "sequel"; Structured Query Language)[5][6][7] is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.'},
  {name: 'python', usage: 41., about: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[27]"},
  {name: 'java', usage: 41.1, about: "Java is a general-purpose programming language that is class-based, object-oriented[15] (although not a pure object-oriented language, as it contains primitive types[16][unreliable source?]), and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client-server web applications, with a reported 9 million developers.[21]"},
  {name: 'bash/shell/powershell', usage: 36.6, about: "GNU Bash or simply Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.[7][8] First released in 1989,[9] it has been used widely as the default login shell for most Linux distributions and Apple's macOS Mojave and earlier versions. A version is also available for Windows 10.[10] It is also the default user shell in Solaris 11. [11]"},
  {name:'c#', usage: 31, about: "C# (pronounced see sharp, like the musical note C♯, but written with the number sign)[b] is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.[17] It was developed around 2000 by Microsoft as part of its .NET initiative, and later approved as an international standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). Mono is the name of the free and open-source project to develop a compiler and runtime for the language. C# is one of the programming languages designed for the Common Language Infrastructure (CLI)."},
  {name: 'php', usage: 26.4, about: "PHP: Hypertext Preprocessor (or simply PHP) is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994;[6] the PHP reference implementation is now produced by The PHP Group.[7] PHP originally stood for Personal Home Page,[6] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[8]"},
  {name: 'c++', usage: 23.5, about: "C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, and IBM, so it is available on many platforms.[6]"},
  {name: 'typescript', usage: 21.2, about: "TypeScript is designed for development of large applications and transcompiles to JavaScript.[5] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution."},
];

function LangList(props) {
  const langs = props.langs;
  const handleClick = () => {
    return (
      <div>
        <h1>name</h1>
        <p>about</p>
      </div>
    );
  }
  const listItems = langs.map((lang) =>
    <li onClick={handleClick}>{`${lang.name} - %${lang.usage}`}</li>
  );
  return (
    <div>
      <ol onClick={handleClick}>{listItems}</ol>
      <hr/>
    </div>
  );
}

function App() {
  return (
    <div>
      <LangList langs={langPercent} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
