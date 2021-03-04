import React from 'react';
import '../App.css';
import Content from './Content';
import {PreviewPaper} from "./PreviewPaper";
import {Paper} from "./Paper";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="site-name"><Link to='/'>mBlog</Link></div>
      </header>
        <Content papers={getPapers()}/>
      <footer></footer>
    </div>
  );
}

function getPapers(): Paper[]{
    return [new Paper(0,
        "",
        "",
        new PreviewPaper('', 'Заголовок 0', 'annotation 0')),
        new Paper(1,
            "",
            "",
            new PreviewPaper('', 'Заголовок 1', 'annotation 1')),
        new Paper(2,
            "",
            "",
            new PreviewPaper('', 'Заголовок 2', 'annotation 2')),
        new Paper(3,
            "",
            "",
            new PreviewPaper('', 'Заголовок 3', 'annotation 3')),]
}

// Сейчас такая реализация, так как не написан код, который получает предварительные данные статей
// от сервера.
// Так же возможно вынести в отдельный сервис
function getPreviewPapers(): PreviewPaper[]{
    return [
        new PreviewPaper('', 'Заголовок 2', 'annotation 2'),
        new PreviewPaper('', 'Заголовок 3', 'annotation 3'),
        new PreviewPaper('', 'Заголовок 4', 'annotation 4')];
}



export default App;
