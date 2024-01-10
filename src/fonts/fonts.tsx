// import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const [fontsLoaded] = useFonts({
    // poppins: require("../../assets/fonts/Poppins-Regular.tff"),
    Poppins_400Regular,
    Poppins_700Bold,
});

useEffect(() => {
    // Cargar la fuente aquí
    if (!fontsLoaded) {
        // Puedes mostrar un indicador de carga mientras se cargan las fuentes
    }
}, [fontsLoaded]);

export default fontsLoaded;