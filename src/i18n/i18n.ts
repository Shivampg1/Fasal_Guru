import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        appName: "FasalGuru",
        welcomeTitle: "Welcome to FasalGuru",
        welcomeDesc: "Your AI-powered farming assistant for better crop management",

        cropDisease: "Crop Disease Detection",
        soilAnalysis: "Soil Analysis",
        iotSensor: "IoT Sensor Data",
        weatherForecast: "Weather Forecast",
        insurance: "PMFBY Insurance",
        yieldEstimator: "Yield Estimator",
        satelliteInsights: "High-Resolution Crop Insights",
        openModule: "Open Module",
      },
    },

    hi: {
      translation: {
        appName: "फसल गुरु",
        welcomeTitle: "फसल गुरु में आपका स्वागत है",
        welcomeDesc: "बेहतर फसल प्रबंधन के लिए आपका एआई-संचालित सहायक",

        cropDisease: "फसल बीमारी पहचान",
        soilAnalysis: "मृदा विश्लेषण",
        iotSensor: "IoT सेंसर डेटा",
        weatherForecast: "मौसम पूर्वानुमान",
        insurance: "पीएमएफबीवाई बीमा",
        yieldEstimator: "उपज अनुमान",
        satelliteInsights: "उच्च-रिज़ॉल्यूशन फसल जानकारियाँ",
        openModule: "मॉड्यूल खोलें",
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
