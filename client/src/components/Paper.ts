import {PreviewPaper} from "./PreviewPaper";

export class Paper{
    id: number;
    html: string;
    css: string;
    previewPaper: PreviewPaper;

    constructor(id: number, html: string, css: string, previewPaper: PreviewPaper) {
        this.id = id;
        this.html = html;
        this.css = css;
        this.previewPaper = previewPaper;
    }
}