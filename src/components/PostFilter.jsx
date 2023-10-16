import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/button/input/MyInput';


const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
        <MyInput
          value={filter.query}
          placeholder="Search..."
          onChange={(e) => setFilter({...filter,query:e.target.value})}
        />

        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
          defaultValue={"Sorf by"}
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
    );
}

export default PostFilter;
