import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';
import {useTheme} from '@/context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@/constants/Colors';
import {ROUTES} from '@/constants/Routes';
import { Link } from 'expo-router';
import {LinkHrefType} from "@/constants/Types";

export default function Header() {
    const {theme, toggleTheme} = useTheme();
    const textColor = useThemeColor({light: Colors.light.text, dark: Colors.dark.text}, 'text');
    const backgroundColor = useThemeColor({light: Colors.light.background, dark: Colors.dark.background}, 'background');

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: backgroundColor,
            padding: 10
        }}>
            <Link href={ROUTES.INDEX as LinkHrefType} style={{ marginHorizontal: 10 }}>
                <Image
                    source={require('@/assets/images/transistortrackerlogo.png')}
                    style={{ width: 30, height: 30 }}
                />
            </Link>
            <TouchableOpacity
                onPress={toggleTheme}
                style={{marginHorizontal: 10}}
                accessibilityRole="button"
                accessibilityLabel={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                accessibilityHint={`Changes app theme to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                <Icon
                    name={theme === 'light' ? 'moon-o' : 'sun-o'}
                    size={30}
                    color={textColor}
                />
            </TouchableOpacity>
        </View>
    );
}