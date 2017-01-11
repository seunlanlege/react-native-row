import React from 'react';
import RN from 'react-native';

const RNView = RN.View;

const View = (props) => {

    const { dial = 0, style, ...otherProps } = props;
    const _dial = dial > 0 && dial < 10 ? dial : 0

    const justifyContent = _dial === 0 ? null : _dial > 6 ? 'flex-end' :
            _dial > 3 ? 'center' : 'flex-start';

    const alignItems = _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
            _dial % 3 === 2 ? 'center' : 'flex-start';

    return (
        <RNView style={[{justifyContent, alignItems}, style]} {...otherProps} >
            {props.children}
        </RNView>
    );
};

export default View