import React from 'react';
import ReactDOM from 'react-dom';

const langPercent = [
  {name: 'javascript', usage: 67.8},
  {name: 'html/css', usage: 63.5},
  {name: 'sql', usage: 54.4},
  {name: 'python', usage: 41.7},
  {name: 'java', usage: 41.1},
  {name: 'bash/shell/powershell', usage: 36.6},
  {name:'c#', usage: 31},
  {name: 'php', usage: 26.4},
  {name: 'c++', usage: 23.5},
  {name: 'typescript', usage: 21.2}
];


function LangList(props) {
  const langs = props.langs;
  const listItems = langs.map((lang) =>
    <li>{`${lang.name} - %${lang.usage}`}</li>
  );
  return (
    <ol>{listItems}</ol>
  );
}
ReactDOM.render(<LangList langs={langPercent} />, document.getElementById('root'));
