import { Comments } from "./comments.model";
import { Post } from "./post.model";

export interface PostWithComments extends Post, Comments{}

