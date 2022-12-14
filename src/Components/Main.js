import {useState, useEffect} from 'react';
import EmojiDataList from "../EmojiDataList";
import EmojiCards from './EmojiCards';

const Main = () => {
  const [list, setList] = useState(EmojiDataList);
  const [keyword, setKeyword] = useState("");

  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value);
  }

  useEffect(_ => {
    //Filter based on description, category, alases
    const filterList = EmojiDataList.filter(singleEmoji => {

      if(singleEmoji.emoji === keyword) {
        return true;
      }

      if(singleEmoji.description.startsWith(keyword)) {
        return true;
      }
      
      if(singleEmoji.category.startsWith(keyword)) {
        return true;
      }

      if(singleEmoji.aliases.some(e => e.startsWith(keyword))) {
        return true;
      }

      return false;
    });

    setList(filterList);
  }, [keyword]);

  return (
    <main>
      <div className='search'>
        <input type="text" placeholder="Search Emojis Here ... đ" onKeyUp={typed}/>
        {keyword === "" ? false : ( <h3>đ¤Šđ Result for - {keyword} đ</h3> )}
      </div>

      <hr />
      {list.length === 0 ? (
        <h3 className='no-result'>đ No Emoji Found âšī¸đ</h3>
      ) : (
        <EmojiCards list={list} />
      )}

    </main>
  )
}

export default Main;