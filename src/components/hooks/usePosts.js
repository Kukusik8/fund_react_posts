import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
      console.log("Sorted ");
      if (sort) {
        return [...posts].sort((a, b) =>
          a[sort].localeCompare(b[sort])
        );
      }
      return posts;
    }, [sort, posts]);

    return sortedPost;
}

export const usePosts = posts,sort,query) => {
    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPost.filter((post) =>
        post.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    }, [filter.query, sortedPost]);
}