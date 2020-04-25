import React from 'react'
import {Switch} from '@blueprintjs/core'
import { Icon} from "@blueprintjs/core";

class DarkToggle extends React.Component {
    render(){
        return(
            <div>
                <Switch 
                className='darkButton'
                onClick={this.props.click} 
                labelElement={<Icon icon="moon" />
                }> 
                 </Switch>
            </div>
        );
    }
}


export default DarkToggle;