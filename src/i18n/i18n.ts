import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        appName: "FasalGuru",
        welcomeTitle: "Welcome to FasalGuru",
        welcomeDesc: "Your AI-powered farming assistant for better crop management",

        // Module titles
        cropDisease: "Crop Disease Detection",
        soilAnalysis: "Soil Analysis",
        iotSensor: "IoT Sensor Data",
        weatherForecast: "Weather Forecast",
        insurance: "PMFBY Insurance",
        yieldEstimator: "Yield Estimator",
        satelliteInsights: "High-Resolution Crop Insights",

        // Module descriptions
        cropDiseaseDesc: "Upload crop images to detect diseases and get treatment recommendations",
        soilAnalysisDesc: "Analyze soil health, nutrients and get fertilizer recommendations",
        iotSensorDesc: "Monitor real-time environmental conditions and farm parameters",
        weatherForecastDesc: "7-day weather predictions and agricultural advisories",
        insuranceDesc: "Enrol farmers, submit claims & get yield estimation",
        yieldEstimatorDesc: "DSSAT-based yield estimator",
        satelliteInsightsDesc: "Get satellite-based vegetation and crop health analytics",

        // Stats
        accuracy: "94% Accuracy",
        npkAnalysis: "NPK Analysis",
        liveData: "Live Data",
        sevenDayForecast: "7-Day Forecast",
        insuranceLabel: "Insurance",
        aiModel: "AI Model",
        satelliteData: "Satellite Data",

        // Buttons
        openModule: "Open Module",
        askVoiceAssistant: "Ask Voice Assistant",
      },
    },

    hi: {
      translation: {
        appName: "फसल गुरु",
        welcomeTitle: "फसल गुरु में आपका स्वागत है",
        welcomeDesc: "बेहतर फसल प्रबंधन के लिए आपका एआई-संचालित सहायक",

        // Module titles
        cropDisease: "फसल रोग पहचान",
        soilAnalysis: "मृदा विश्लेषण",
        iotSensor: "IoT सेंसर डेटा",
        weatherForecast: "मौसम पूर्वानुमान",
        insurance: "पीएमएफबीवाई बीमा",
        yieldEstimator: "उपज अनुमान",
        satelliteInsights: "उच्च-रिज़ॉल्यूशन फसल जानकारी",

        // Module descriptions
        cropDiseaseDesc: "रोग पहचानने और उपचार सुझाव पाने के लिए फसल की तस्वीर अपलोड करें",
        soilAnalysisDesc: "मिट्टी की सेहत, पोषक तत्व जांचें और उर्वरक सुझाव पाएं",
        iotSensorDesc: "वास्तविक समय में पर्यावरण और खेत की स्थिति देखें",
        weatherForecastDesc: "7 दिनों का मौसम पूर्वानुमान और कृषि सलाह",
        insuranceDesc: "किसान नामांकन, दावा जमा करें और उपज अनुमान पाएं",
        yieldEstimatorDesc: "DSSAT आधारित उपज अनुमान",
        satelliteInsightsDesc: "उपग्रह आधारित वनस्पति और फसल स्वास्थ्य विश्लेषण पाएं",

        // Stats
        accuracy: "94% सटीकता",
        npkAnalysis: "NPK विश्लेषण",
        liveData: "लाइव डेटा",
        sevenDayForecast: "7-दिन पूर्वानुमान",
        insuranceLabel: "बीमा",
        aiModel: "AI मॉडल",
        satelliteData: "उपग्रह डेटा",

        // Buttons
        openModule: "मॉड्यूल खोलें",
        askVoiceAssistant: "वॉइस असिस्टेंट से पूछें",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
