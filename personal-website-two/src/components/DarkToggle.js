import React from 'react'
import {Switch} from '@blueprintjs/core'
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";



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