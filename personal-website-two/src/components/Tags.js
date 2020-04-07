import React from 'react'
import { Tag, Divider } from "@blueprintjs/core";

const Tags = () => {
    return(
        <div>
            <Tag  
                className="tags"
                minimal="true"
                interactive="true"
                intent="none">
                Programming </Tag>
                <Tag  
                className="tags"
                minimal="true"
                interactive="true"
                intent="danger">
                Eletronics </Tag>
                <Tag  
                className="tags"
                minimal="true"
                interactive="true"
                intent="warning">
                Networking and Security </Tag>
                <Tag  
                className="tags"
                minimal="true"
                interactive="true"
                intent="success">
                System Administration </Tag>
        </div>
    );
}

export default Tags;