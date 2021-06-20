import {Dimensions, useWindowDimensions} from "react-native";

// Todo: media query implementation
export function useMediaQuery() {
    const {width, fontScale, scale, height} = useWindowDimensions();
    console.log('width, fontScale, scale, height', width, fontScale, scale, height)
/*    Dimensions.addEventListener('change', () => {
        if (this.refs.root) { // avoid updating state when not necessary
            this.setState({
                orientation: Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
            });
        }
    });*/
    return {widthLabel: 'sm'};
}
