export class PreviewPaper {
    imgPath: string;
    article: string;
    annotation: string;

    constructor(imgPath: string, article: string, annotation: string) {
        this.imgPath = imgPath;
        this.article = article;
        this.annotation = annotation;
    }
}