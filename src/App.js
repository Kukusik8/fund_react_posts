import React, { useEffect, useMemo, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
// import PostItem from "./components/PostItem";
import "./styles/app.css";
import PostLIst from "./PostLIst";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/button/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/button/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostsService";


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'',query:''})
  const [modal,setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  useEffect(() => {
    fetchPosts()
  },[])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]) 
  setModal(false)  
  }

 async function fetchPosts() {
          const posts = await PostService.getAll()
          setPosts(posts)
 }


  //Получение post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !==post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>get posts</button>
      <MyButton
        style={{ marginTop: "15px", marginBottom: "10px" }}
        onClick={() => setModal(true)}
      >
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostLIst
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"List of posts1"}
      />
    </div>
  );
}

export default App;
