document.addEventListener('DOMContentLoaded', () => {
    // Elements to translate
    const elementsToTranslate = {
        heroTitle: document.getElementById('hero-title'),
        heroSubtitle: document.getElementById('hero-subtitle'),
        aboutUsText: document.getElementById('about-us-text'),
        contactEmail: document.getElementById('contact-email'),
        contactPhone: document.getElementById('contact-phone'),
    };

    // Translations
    const translations = {
        en: {
            heroTitle: "Welcome to Farmbridge",
            heroSubtitle: "Rent the best agricultural equipment for your farm, without the high upfront costs.",
            aboutUsText: "Farmbridge is a platform dedicated to helping small-scale farmers access affordable agricultural machinery through a rental system. Our mission is to support farmers in increasing their productivity without significant investment in machinery.",
            contactEmail: "Email: info@farmbridge.com",
            contactPhone: "Phone: +1-800-FARM-123",
        },
        hi: {
            heroTitle: "फार्मब्रिज में आपका स्वागत है",
            heroSubtitle: "अपने खेत के लिए सबसे अच्छा कृषि उपकरण किराए पर लें, बिना बड़ी अग्रिम लागत के।",
            aboutUsText: "फार्मब्रिज छोटे किसानों को किराये के माध्यम से किफायती कृषि मशीनरी तक पहुँचने में मदद करता है। हमारा लक्ष्य किसानों की उत्पादकता को बढ़ाना है।",
            contactEmail: "ईमेल: info@farmbridge.com",
            contactPhone: "फोन: +1-800-FARM-123",
        },
        te: {
            heroTitle: "ఫార్మ్ బ్రిడ్జ్ కు స్వాగతం",
            heroSubtitle: "మీ పొలానికి ఉత్తమ వ్యవసాయ పరికరాలను అద్దెకు తీసుకోండి, అధిక ముందస్తు ఖర్చుల వద్ద.",
            aboutUsText: "ఫార్మ్ బ్రిడ్జ్ చిన్న స్థాయి రైతులకు అద్దె ద్వారా వ్యవసాయ యంత్రాలను అందిస్తుంది. రైతుల ఉత్పత్తిని పెంచడమే మా లక్ష్యం.",
            contactEmail: "ఇమెయిల్: info@farmbridge.com",
            contactPhone: "ఫోన్: +1-800-FARM-123",
        },
    };

    // Change Language Function
    window.changeLanguage = function (lang) {
        const langData = translations[lang];
        if (langData) {
            for (const key in elementsToTranslate) {
                if (elementsToTranslate[key]) {
                    elementsToTranslate[key].textContent = langData[key];
                }
            }
        }
    };

    // Example: Login button navigation
    document.getElementById('loginBtn').addEventListener('click', () => {
        window.location.href = "login.html";
    });

    document.getElementById('equipments').addEventListener('click', () => {
        window.location.href = "equipment.html";
    });
});