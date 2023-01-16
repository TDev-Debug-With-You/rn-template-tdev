const DATA = {
    outputDisplay: {
        english: "It seems like this template is not yet implemented\n You can contribute to our repository if you want this template\n Otherwise select another configuration",
        french: "Il senble que ce template n'est pas encore implementé\n Vous pouvez contribuer dans notre repo si vous voulez vraiment ce template\n Autrement allez y avec une autre proche configuration"
    }
    ,
    topics_options: {
        english: [
            "Navigation",
            "State Management",
            "Storage",
            "Gestures",
            "Animations",
            "Maps(Geo location)",
            "Permissions",
            "Medias",
            "Notifications",
            "Styling"
        ],
        french: [
            "Navigation",
            "Gestion de l'état",
            "Stockage",
            "Gestes",
            "Animations",
            "Cartes(Géolocalisation)",
            "Permissions",
            "Médias",
            "Notifications",
            "Style"
        ]
    },
    selected_topic_options: {
        navigation: [
            "react-navigation V6",
            "react-native-navigation"
        ],
        state_management: [
            "redux",
            "@reduxjs/toolkit",
            "Context API",
            "MobX",
            "XState",
            "Jotai",
            "React Query"
        ],
        storage: [
            "AsyncStorage",
            "Realm",
            "WatermelonDB",
            "Apollo Client",
            "FireBase"
        ],
        gestures: [
            "react-native-gesture-handler", ,
            "RNGestureHandler"
        ],
        animations: [
            "react-native-animatable",
            "lottie-react-native",
            "react-native-reanimated",
            "React Native Animated (native api)", 
            "moti"
        ],
        maps: [
            "react-native-maps",
            "react-native-google-maps",
            "Airbnb's react-native-maps",
            "react-native-mapbox-gl"
        ],
        permissions: [
            "react-native-permissions",
            "react-native-unimodules"
        ],
        media: [
            "react-native-camera",
            "react-native-video",
            "react-native-sound",
            "react-native-image-picker"
        ],
        notifications: [
            "React Native Push Notifications",
            "React Native Firebase Notifications",
            "OneSignal"
        ],
        style: [
            "styled-components",
            "emotion",
            "react-native-paper",
            "Tailwind CSS",
            "aphrodite",
            "Bulma CSS"
        ],
        // performance_optimization: [
        //     "react-native-screens",
        //     "react-native-fast-image",
        //     "react-native-vector-icons",
        //     "react-native-navigation-performance"
        // ],
    },
    libs_selection: {
        english: {
            topics_selection: "Select the topics that you will need for your React Native project",
            topics: {
                navigation: "Select the library for navigation",
                state_management: "Select the library for state management",
                storage: "Select the library for storage",
                gestures: "Select the library for gesture handling",
                animations: "Select the library for animations",
                maps: "Select the library for maps and geo-location",
                permissions: "Select the library for handling device permissions",
                media: "Select the library for media handling",
                notifications: "Select the library for notifications",
                style: "Select the library for styling",
                // performance_optimization: "Select the library for performance optimization",
            },
        },
        french: {
            topics_selection: "Sélectionnez les sujets dont vous aurez besoin pour votre projet React Native",
            topics: {
                navigation: "Sélectionnez la bibliothèque pour la navigation",
                state_management: "Sélectionnez la bibliothèque pour la gestion de l'état",
                storage: "Sélectionnez la bibliothèque pour le stockage",
                gestures: "Sélectionnez la bibliothèque pour la gestion des gestes",
                animations: "Sélectionnez la bibliothèque pour les animations",
                maps: "Sélectionnez la bibliothèque pour les cartes et la géolocalisation",
                permissions: "Sélectionnez la bibliothèque pour la gestion des autorisations de périphériques",
                media: "Sélectionnez la bibliothèque pour la gestion des médias",
                notifications: "Sélectionnez la bibliothèque pour les notifications",
                style: "Sélectionnez la bibliothèque pour le style",
                // performance_optimization: "Sélectionnez la bibliothèque pour l'optimisation des performances",
            },
        }
    }
}


export default DATA;



export const topicsTranslations = {
    "Gestion de l'état": "state_management",
    "Médias": "media",
    "Stockage": "storage",
    "Gestes": "gestures",
    "Cartes(Géolocalisation)": "maps",
    "Maps(Geo location)": "maps",
    "Médias": "media",
    "Medias": "media",
    "Styling": "style"
}