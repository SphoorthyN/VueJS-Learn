# VueJs Blog

### Version One

This is my first attempt at branching in git, and by extension, GitHub. This is **version one** of my 'blog', using VueJS. This is more of an exercise in getting myself acquainted with what I can and cannot do with VueJS rather than the blog itself.

I've decided to use different versions to differentiate between blog layouts. For example, as of the creation of this version, **v1**, the layout in the **master** branch is as follows : 

This layout is arranged vertically, with the side-bar and the blog body appearing side by side

1. A 'side-bar' to the left, with a `flex` of `20`, or `20%` with the `flex-direction` equalling `column`.
    1. The 'side-bar' has a heading-section at the top, with the name of the blog inside it, with a `flex `of `1`, or `20%`
    2. The 'list' which shows the list of blog posts, arranged vertically. Using `flex `and the `overflow` equalling `auto` property, I managed to make just the list scrollable within the 'list'.
        1. This requires that the parent containers of this 'list' all be `flex`, and that the first parent have a specified `width`   
2. The 'blog-body' to the right, with a `flex` of `80`, or `20%`, with the `flex-direction` equalling `column`. This is a simple affair, with the blog title at the top and the blog post below it
    1. I used the `flex` / `overflow` trick to achieve the same scrolling effect for the blog-text.
___

In this version, **v1**, I want to try to make a vertical layout, with the blog-name at the top.


 




