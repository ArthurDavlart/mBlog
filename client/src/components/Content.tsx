import * as React from "react";
import {PreviewPaper} from "./PreviewPaper";
import {Paper} from "./Paper";
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";


const Content = ({papers}: {papers: Paper[]}) => {
    const previewPapers = papers.map((paper) => paper.previewPaper)
    return (<div className="content">
                <Switch>
                    <Route exact path="/">
                        <PrePapers previewPapers={previewPapers}/>
                    </Route>
                    {getPapersRoute(previewPapers)}
                </Switch>
            </div>);
}

function getPapersRoute(previewPapers: PreviewPaper[]){
    return previewPapers.map((previewPaper) => (
        <Route path={getPathByArticle(previewPaper.article)}>
            <GPaper previewPaper={previewPaper}/>
        </Route>
    ));
}

const PrePapers = ({previewPapers}: {previewPapers: PreviewPaper[]}) =>{
    console.log('prepapers');
    return (
        <div className="prepapers">
            {previewPapers.map((p) => <PrePaper previewPaper = {p} />)}
        </div>
    )
}

const PrePaper = ({previewPaper}: {previewPaper: PreviewPaper}) => {
    return (<div className="pre-paper">
        <div className="pre-pare-img">
            <img src={previewPaper.imgPath}/>
        </div>
        <div className="description">
            <div className="header">
                <Link to={getPathByArticle(previewPaper.article)}>{previewPaper.article}</Link>
            </div>
            <div className="annotations">{previewPaper.annotation}</div>
        </div>

    </div>);
}

function getPathByArticle(article: string){
    return `/${article}`;
}

const GPaper = ({previewPaper}: {previewPaper: PreviewPaper}) => {
    return (
        <h1>{previewPaper.article}</h1>
    )
}

export default Content;