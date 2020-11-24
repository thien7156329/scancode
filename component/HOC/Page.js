import React from 'react';
import { Route } from 'react-router-native';

class Verify extends React.PureComponent{
    render(){
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

export default ({component: Component, ...rest}) => {
    return (
        <Route { ...rest } render={matchProps => (
            <Verify { ...rest }>
                <Component {...matchProps} />
            </Verify>
        )} />
    )
}

