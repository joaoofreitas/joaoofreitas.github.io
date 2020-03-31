import React from 'react'
import { Tag } from 'antd';
import 'antd/dist/antd.css';

const HeaderTags = () => {
    return(
        <div className="tags">
          <Tag color="purple">Programming</Tag>
          <Tag color="red">Electronics</Tag>
          <Tag color="green">Networking and Security</Tag>
          {/*<Tag color="blue">UNIX/Linux System Administration</Tag>*/}
        </div>
    )
}

export default HeaderTags;