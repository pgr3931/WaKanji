import {Text, TouchableOpacity, View} from "react-native";
import {setTheme} from "../../redux/actions/Actions";
import {connect} from "react-redux";
import React from "react";
import {setSetting} from "../../../persistence/DbConnection";

const SettingSelectionScreen = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<TouchableOpacity onPress={() => navigation.push('Details', {count: 1})}>*/}
            {/*    <Text>Details</Text>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity
                onPress={() => setSetting('theme',  props.theme === 'dark' ? 'light' : 'dark', props.setTheme)}><Text style={{fontSize: 30}}>{props.theme}</Text></TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingSelectionScreen);