import React, {memo} from 'react'
import { useSelector } from 'react-redux'

import Item from '../Item/Item'

const List = () => {
  const posts = useSelector(store => store.posts)

  return (
    <div>
      <div className="row justify-content-center">
        {
          posts.map((item, index) =>
            <Item item={item} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default memo(List);
