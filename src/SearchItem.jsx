import { useState } from "react";
export default function SearchItem() {
    const posts = [
        { 
          title: 'How to create a react search bar',
        },
        {
          title: 'How to mock api data in Node',
        },
        
      ]
    const [state, setstate] = useState({
        query: '',
        list: []
      })
     const handleChange = (e) => {
        const results = posts.filter(post => {
            if (e.target.value === "") return posts
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setstate({
            query: e.target.value,
            list: results
        })
  
     }
     return (
      <div>
          <form>
          <input onChange={handleChange} value={state.query} type="search"/>
        </form>
        <ul>
          {(state.query === '' ? "" : state.list.map(post => {
            return <li key={post.title}>{post.title}</li>
          }))}
        </ul>
      </div>
    )
 }