import {Dimensions} from "react-native";
import { ScreenInfo } from 'react-native-responsive-grid';
import {useEffect, useState} from "react";

export interface ScreenInfo {
    mediaSize: string;
    mediaSizeWidth: string;
    mediaSizeHeight: string;
    width: string;
    height: string;
    aspectRatio: string;
    orientation: string;
}

const getScreenInfo = (): ScreenInfo => {
    return {
        ...ScreenInfo(),
        orientation: Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
    };
}

export function useScreenInfo() {
    let [screenInfo, setScreenInfo] = useState<ScreenInfo>(getScreenInfo())

    useEffect(() => {
        const handler = () => {
            setScreenInfo(getScreenInfo());
        }
        Dimensions.addEventListener('change', handler);
        return () => Dimensions.removeEventListener('change', handler);
    }, [])

    return screenInfo;
}
