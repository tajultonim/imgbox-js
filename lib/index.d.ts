import { ThumbnailSize, ContentType, CommentEnabled, LoggerEnabled, Images, IResponseObject, ImageScope, OrderBy } from './interfaces';
declare const imgbox: {
    (images: Images, options?: {
        auth_cookie?: string;
        album_title?: string;
        content_type?: ContentType;
        thumbnail_size?: ThumbnailSize;
        comments_enabled?: CommentEnabled;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
    deleteGallery(galleryEditUrl: string, options?: {
        auth_cookie?: string;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
    updateComment(galleryEditUrl: string, options?: {
        isEnabled?: boolean;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
    getImages(options: {
        auth_cookie: string;
        page?: number;
        scope?: ImageScope;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
    getGalleries(options: {
        auth_cookie: string;
        page?: number;
        order_by?: OrderBy;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
    deleteImages(images_url: string[], options: {
        auth_cookie: string;
        logger?: LoggerEnabled;
    }): Promise<IResponseObject>;
};
export { imgbox };
