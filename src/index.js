import React from 'react';
import ReactDOM from 'react-dom';

const langPercent = [
  ['javascript', 67.8],
  ['html/css', 63.5],
  ['sql', 54.4],
  ['python', 41.7],
  ['java', 41.1],
  ['bash/shell/powershell', 36.6],
  ['c#', 31],
  ['php', 26.4],
  ['c++', 23.5],
  ['typescript', 21.2]
];


function LangList(props) {
  const langs = props.langs;
  const listItems = langs.map((lang, index) =>
    <li>{`${langs[index][0]} - %${langs[index][1]}`}</li>
  );
  return (
    <ol>{listItems}</ol>
  );
}
ReactDOM.render(<LangList langs={langPercent} />, document.getElementById('root'));
