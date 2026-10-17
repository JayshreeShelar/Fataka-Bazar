/* ============================================================
   FATAKA BAZAR - DATA FILE
   Edit prices / products / discount rules / contact here.
   ============================================================ */
const CONFIG = {
  shop: { mr: 'फटाका बाजार होलसेल डेपो', en: 'Fataka Bazaar Wholesale Depot' },
  phones: ['8830532500'],
  whatsapp: '918830532500',
  hours: { mr: 'सकाळी 9:00 ते रात्री 10:00', en: '9:00 AM to 10:00 PM' },
  // Discount applies automatically on the cart subtotal (highest matching tier)
  discountTiers: [
    { min: 2000, pct: 5 },
    { min: 5000, pct: 8 },
    { min: 10000, pct: 10 }
  ],
  // Optional coupon codes -> extra % discount
  coupons: { DIWALI26: 3 }
};

/* ---- CATEGORIES: येथे नवीन श्रेणी add/edit/delete करा (img = images/products/ मधील फाईल) ---- */
const CATEGORIES = [
  {"id": "crackers", "mr": "फटाके", "en": "Crackers", "c1": "#e11d48", "c2": "#5a0b1c", "d": {"mr": "लक्ष्मी, डिलक्स, साउंड व बिजली", "en": "Crackers - full range at one fixed rate"}, "img": "images/products/cat-crackers.svg"},
  {"id": "fancy", "mr": "फॅन्सी", "en": "Fancy", "c1": "#8b5cf6", "c2": "#372462", "d": {"mr": "सिवाकासी शॉट्स, नायग्रा, पाइप", "en": "Fancy - full range at one fixed rate"}, "img": "images/products/cat-fancy.svg"},
  {"id": "damu", "mr": "दामू फॅन्सी", "en": "Damu Fancy", "c1": "#0fa38f", "c2": "#064139", "d": {"mr": "किंग, क्वीन, कँडल, टॉर्नेडो", "en": "Damu Fancy - full range at one fixed rate"}, "img": "images/products/cat-damu.svg"},
  {"id": "sparklers", "mr": "फुलझडी", "en": "Sparklers", "c1": "#f59e0b", "c2": "#623f04", "d": {"mr": "प्लेन, 50-50 व इलेक्ट्रिक", "en": "Sparklers - full range at one fixed rate"}, "img": "images/products/cat-sparklers.svg"},
  {"id": "flowerpots", "mr": "फ्लॉवर पॉट्स", "en": "Flower Pots", "c1": "#f97316", "c2": "#632e08", "d": {"mr": "B व A ग्रेड कारंजे", "en": "Flower Pots - full range at one fixed rate"}, "img": "images/products/cat-flowerpots.svg"},
  {"id": "chakra", "mr": "जमीन चक्र", "en": "Chakkra", "c1": "#3b82f6", "c2": "#173462", "d": {"mr": "अशोका, स्पिनर, डिलक्स", "en": "Chakkra - full range at one fixed rate"}, "img": "images/products/cat-chakra.svg"},
  {"id": "special", "mr": "स्पेशल फटाके", "en": "Special", "c1": "#14b8a6", "c2": "#084942", "d": {"mr": "पीकॉक, हेलिकॉप्टर, MTP", "en": "Special - full range at one fixed rate"}, "img": "images/products/cat-special.svg"},
  {"id": "rocket", "mr": "रॉकेट बॉम्ब", "en": "Rocket Bomb", "c1": "#ef4444", "c2": "#5f1b1b", "d": {"mr": "आकाशात फुटणारा रॉकेट", "en": "Rocket Bomb - full range at one fixed rate"}, "img": "images/products/cat-rocket.svg"},
  {"id": "bomb", "mr": "बॉम्ब", "en": "Bomb", "c1": "#64748b", "c2": "#282e37", "d": {"mr": "सद्दाम, क्लासिक, पेपर बॉम्ब", "en": "Bomb - full range at one fixed rate"}, "img": "images/products/cat-bomb.svg"},
  {"id": "grandland", "mr": "ग्रँडलँड", "en": "Grandland", "c1": "#7c3aed", "c2": "#31175e", "d": {"mr": "1K ते 10K", "en": "Grandland - full range at one fixed rate"}, "img": "images/products/cat-grandland.svg"},
  {"id": "other", "mr": "इतर उत्पादने", "en": "Other Products", "c1": "#eab308", "c2": "#5d4703", "d": {"mr": "पॉप-पॉप, कॅप, हँड शॉट", "en": "Other Products - full range at one fixed rate"}, "img": "images/products/cat-other.svg"}
];

/* ---- PRODUCTS: id, cat, mr (मराठी नाव), en (English नाव), price, est (true = अंदाजे किंमत), img (फोटो), desc (वर्णन) ----
   बदल करण्यासाठी फक्त ही यादी edit करा. फोटो बदलायचा असल्यास images/products/ मध्ये फाईल टाका व img चा path बदला. */
const DEFAULT_PRODUCTS = [
  {"id": "crackers-1", "cat": "crackers", "mr": "2 इंच कुर्वी", "en": "2 inch Kurvi", "price": 15, "est": false, "img": "images/products/crackers-1.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-2", "cat": "crackers", "mr": "3 इंच लक्ष्मी", "en": "3 inch Laxmi", "price": 30, "est": false, "img": "images/products/crackers-2.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-3", "cat": "crackers", "mr": "4 इंच लक्ष्मी", "en": "4 inch Laxmi", "price": 40, "est": false, "img": "images/products/crackers-3.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-4", "cat": "crackers", "mr": "4 इंच लक्ष्मी डिलक्स गोल्ड", "en": "4 inch Laxmi Deluxe Gold", "price": 50, "est": false, "img": "images/products/crackers-4.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-5", "cat": "crackers", "mr": "5 इंच लक्ष्मी डिलक्स", "en": "5 inch Laxmi Deluxe", "price": 60, "est": false, "img": "images/products/crackers-5.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-6", "cat": "crackers", "mr": "डबल साउंड", "en": "Double Sound", "price": 40, "est": false, "img": "images/products/crackers-6.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-7", "cat": "crackers", "mr": "श्री साउंड", "en": "Shree Sound", "price": 60, "est": false, "img": "images/products/crackers-7.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "crackers-8", "cat": "crackers", "mr": "लाल बिजली (50 नग)", "en": "Lal Bijli (50 pcs)", "price": 40, "est": false, "img": "images/products/crackers-8.svg", "desc": "लालबुंद बिजली माळ, एकामागून एक आवाज."},
  {"id": "crackers-9", "cat": "crackers", "mr": "लाल बिजली (100 नग)", "en": "Lal Bijli (100 pcs)", "price": 70, "est": false, "img": "images/products/crackers-9.svg", "desc": "लालबुंद बिजली माळ, एकामागून एक आवाज."},
  {"id": "crackers-10", "cat": "crackers", "mr": "28 चोरसा", "en": "28 Chorsa", "price": 25, "est": false, "img": "images/products/crackers-10.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-11", "cat": "crackers", "mr": "28 जायंट", "en": "28 Giant", "price": 35, "est": false, "img": "images/products/crackers-11.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-12", "cat": "crackers", "mr": "24 डिलक्स", "en": "24 Deluxe", "price": 60, "est": false, "img": "images/products/crackers-12.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-13", "cat": "crackers", "mr": "28 डिलक्स", "en": "28 Deluxe", "price": 80, "est": false, "img": "images/products/crackers-13.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-14", "cat": "crackers", "mr": "50 डिलक्स", "en": "50 Deluxe", "price": 180, "est": false, "img": "images/products/crackers-14.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-15", "cat": "crackers", "mr": "100 डिलक्स", "en": "100 Deluxe", "price": 280, "est": false, "img": "images/products/crackers-15.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "crackers-16", "cat": "crackers", "mr": "टिन", "en": "Tin", "price": 200, "est": false, "img": "images/products/crackers-16.svg", "desc": "मजबूत टिन पॅकमध्ये जास्त नग."},
  {"id": "fancy-17", "cat": "fancy", "mr": "12 शॉट (सिवाकासी)", "en": "12 Shot (Sivakasi)", "price": 200, "est": false, "img": "images/products/fancy-17.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-18", "cat": "fancy", "mr": "15 शॉट (सिवाकासी)", "en": "15 Shot (Sivakasi)", "price": 300, "est": false, "img": "images/products/fancy-18.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-19", "cat": "fancy", "mr": "30 शॉट (सिवाकासी)", "en": "30 Shot (Sivakasi)", "price": 450, "est": false, "img": "images/products/fancy-19.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-20", "cat": "fancy", "mr": "60 शॉट (सिवाकासी)", "en": "60 Shot (Sivakasi)", "price": 950, "est": false, "img": "images/products/fancy-20.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-21", "cat": "fancy", "mr": "120 शॉट (सिवाकासी)", "en": "120 Shot (Sivakasi)", "price": 1850, "est": false, "img": "images/products/fancy-21.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-22", "cat": "fancy", "mr": "240 शॉट (सिवाकासी)", "en": "240 Shot (Sivakasi)", "price": 3250, "est": false, "img": "images/products/fancy-22.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-23", "cat": "fancy", "mr": "1 इंच (सिवाकासी)", "en": "1 inch (Sivakasi)", "price": 50, "est": false, "img": "images/products/fancy-23.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "fancy-24", "cat": "fancy", "mr": "2 इंच फॅन्सी (एव्हरग्रीन)", "en": "2 inch Fancy (Evergreen)", "price": 60, "est": false, "img": "images/products/fancy-24.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "fancy-25", "cat": "fancy", "mr": "3×1 फॅन्सी", "en": "3x1 Fancy", "price": 300, "est": false, "img": "images/products/fancy-25.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-26", "cat": "fancy", "mr": "4 इंच नायग्रा", "en": "4 inch Niagara", "price": 500, "est": false, "img": "images/products/fancy-26.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "fancy-27", "cat": "fancy", "mr": "4 इंच सिंगल", "en": "4 inch Single", "price": 500, "est": false, "img": "images/products/fancy-27.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "fancy-28", "cat": "fancy", "mr": "5 इंच 2 बाऊल पाइप", "en": "5 inch 2 Bowl Pipe", "price": 650, "est": false, "img": "images/products/fancy-28.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "fancy-29", "cat": "fancy", "mr": "व्हाईट हाऊस", "en": "White House", "price": 450, "est": false, "img": "images/products/fancy-29.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-30", "cat": "fancy", "mr": "युनिव्हर्सल सेल (30 शॉट)", "en": "Universal Cell (30 Shot)", "price": 6000, "est": false, "img": "images/products/fancy-30.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "fancy-31", "cat": "fancy", "mr": "6 इंच सिंगल पाइप", "en": "6 inch Single Pipe", "price": 1550, "est": false, "img": "images/products/fancy-31.svg", "desc": "उंच जाणारा फॅन्सी शॉट, आकाशात रंगांची उधळण."},
  {"id": "damu-32", "cat": "damu", "mr": "किंग", "en": "King", "price": 50, "est": false, "img": "images/products/damu-32.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "damu-33", "cat": "damu", "mr": "क्वीन", "en": "Queen", "price": 50, "est": false, "img": "images/products/damu-33.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "damu-34", "cat": "damu", "mr": "सम्राट कँडल", "en": "Samrat Candle", "price": 60, "est": false, "img": "images/products/damu-34.svg", "desc": "रंगीत ज्वाळा व ठिणग्यांचा कँडल, मुलांचा आवडता."},
  {"id": "damu-35", "cat": "damu", "mr": "टॉम अँड जेरी", "en": "Tom and Jerry", "price": 100, "est": false, "img": "images/products/damu-35.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "damu-36", "cat": "damu", "mr": "पप्पू शॉवर", "en": "Pappu Shower", "price": 200, "est": false, "img": "images/products/damu-36.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "damu-37", "cat": "damu", "mr": "सायरन कँडल", "en": "Siren Candle", "price": 150, "est": false, "img": "images/products/damu-37.svg", "desc": "रंगीत ज्वाळा व ठिणग्यांचा कँडल, मुलांचा आवडता."},
  {"id": "damu-38", "cat": "damu", "mr": "वंडर (मिक्स)", "en": "Wonder (Mix)", "price": 350, "est": false, "img": "images/products/damu-38.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "damu-39", "cat": "damu", "mr": "क्यूट", "en": "Cute", "price": 600, "est": false, "img": "images/products/damu-39.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "damu-40", "cat": "damu", "mr": "म्युझिक बटरफ्लाय", "en": "Music Butterfly", "price": 550, "est": false, "img": "images/products/damu-40.svg", "desc": "रंगीत पंख पसरून फिरणारी फुलपाखरू आतषबाजी."},
  {"id": "damu-41", "cat": "damu", "mr": "सी हॉर्स", "en": "Sea Horse", "price": 180, "est": false, "img": "images/products/damu-41.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "damu-42", "cat": "damu", "mr": "5G बॉक्स", "en": "5G Box", "price": 200, "est": false, "img": "images/products/damu-42.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "damu-43", "cat": "damu", "mr": "टॉर्नेडो", "en": "Tornado", "price": 180, "est": false, "img": "images/products/damu-43.svg", "desc": "गोल गोल फिरत उंच जाणारा रंगीत टॉर्नेडो."},
  {"id": "damu-44", "cat": "damu", "mr": "लुलु", "en": "Lulu", "price": 220, "est": false, "img": "images/products/damu-44.svg", "desc": "ठिणग्यांचा रंगीत कारंजा व आकर्षक आकृत्या."},
  {"id": "sparklers-45", "cat": "sparklers", "mr": "10 सेमी प्लेन", "en": "10 cm Plain", "price": 25, "est": false, "img": "images/products/sparklers-45.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-46", "cat": "sparklers", "mr": "10 सेमी 50-50", "en": "10 cm 50-50", "price": 35, "est": false, "img": "images/products/sparklers-46.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-47", "cat": "sparklers", "mr": "12 सेमी प्लेन", "en": "12 cm Plain", "price": 30, "est": false, "img": "images/products/sparklers-47.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-48", "cat": "sparklers", "mr": "12 सेमी 50-50", "en": "12 cm 50-50", "price": 40, "est": false, "img": "images/products/sparklers-48.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-49", "cat": "sparklers", "mr": "15 सेमी प्लेन", "en": "15 cm Plain", "price": 45, "est": false, "img": "images/products/sparklers-49.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-50", "cat": "sparklers", "mr": "15 सेमी 50-50", "en": "15 cm 50-50", "price": 50, "est": false, "img": "images/products/sparklers-50.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-51", "cat": "sparklers", "mr": "30 सेमी प्लेन", "en": "30 cm Plain", "price": 55, "est": false, "img": "images/products/sparklers-51.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-52", "cat": "sparklers", "mr": "30 सेमी 50-50", "en": "30 cm 50-50", "price": 60, "est": false, "img": "images/products/sparklers-52.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-53", "cat": "sparklers", "mr": "50 सेमी इलेक्ट्रिक", "en": "50 cm Electric", "price": 80, "est": false, "img": "images/products/sparklers-53.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "sparklers-54", "cat": "sparklers", "mr": "50 सेमी 50-50", "en": "50 cm 50-50", "price": 90, "est": false, "img": "images/products/sparklers-54.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "flowerpots-55", "cat": "flowerpots", "mr": "बिग (B ग्रेड)", "en": "Big (B Grade)", "price": 80, "est": false, "img": "images/products/flowerpots-55.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-56", "cat": "flowerpots", "mr": "स्पेशल (B ग्रेड)", "en": "Special (B Grade)", "price": 140, "est": false, "img": "images/products/flowerpots-56.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-57", "cat": "flowerpots", "mr": "अशोका (B ग्रेड)", "en": "Ashoka (B Grade)", "price": 200, "est": false, "img": "images/products/flowerpots-57.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-58", "cat": "flowerpots", "mr": "कलर कोटी (B ग्रेड)", "en": "Color Koti (B Grade)", "price": 250, "est": false, "img": "images/products/flowerpots-58.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-59", "cat": "flowerpots", "mr": "कलर कोटी डिलक्स (B ग्रेड)", "en": "Color Koti Deluxe (B Grade)", "price": 500, "est": false, "img": "images/products/flowerpots-59.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-60", "cat": "flowerpots", "mr": "बिग (A ग्रेड)", "en": "Big (A Grade)", "price": 100, "est": false, "img": "images/products/flowerpots-60.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-61", "cat": "flowerpots", "mr": "स्पेशल (A ग्रेड)", "en": "Special (A Grade)", "price": 160, "est": false, "img": "images/products/flowerpots-61.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-62", "cat": "flowerpots", "mr": "अशोका (A ग्रेड)", "en": "Ashoka (A Grade)", "price": 230, "est": false, "img": "images/products/flowerpots-62.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-63", "cat": "flowerpots", "mr": "कलर कोटी (A ग्रेड)", "en": "Color Koti (A Grade)", "price": 300, "est": false, "img": "images/products/flowerpots-63.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक."},
  {"id": "flowerpots-64", "cat": "flowerpots", "mr": "कलर कोटी डिलक्स (A ग्रेड)", "en": "Color Koti Deluxe (A Grade)", "price": 550, "est": true, "img": "images/products/flowerpots-64.svg", "desc": "रंगीबेरंगी ठिणग्यांचा कारंजा, सुरक्षित व आकर्षक. (किंमत अंदाजे, दुकानात खात्री करा.)"},
  {"id": "chakra-65", "cat": "chakra", "mr": "अशोका (B ग्रेड)", "en": "Ashoka (B Grade)", "price": 85, "est": true, "img": "images/products/chakra-65.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी. (किंमत अंदाजे, दुकानात खात्री करा.)"},
  {"id": "chakra-66", "cat": "chakra", "mr": "स्पेशल (B ग्रेड)", "en": "Special (B Grade)", "price": 140, "est": false, "img": "images/products/chakra-66.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-67", "cat": "chakra", "mr": "डिलक्स (B ग्रेड)", "en": "Deluxe (B Grade)", "price": 230, "est": false, "img": "images/products/chakra-67.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-68", "cat": "chakra", "mr": "स्पिनर स्पेशल (B ग्रेड)", "en": "Spinner Special (B Grade)", "price": 180, "est": false, "img": "images/products/chakra-68.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-69", "cat": "chakra", "mr": "स्पिनर डिलक्स (B ग्रेड)", "en": "Spinner Deluxe (B Grade)", "price": 300, "est": false, "img": "images/products/chakra-69.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-70", "cat": "chakra", "mr": "अशोका (A ग्रेड)", "en": "Ashoka (A Grade)", "price": 100, "est": false, "img": "images/products/chakra-70.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-71", "cat": "chakra", "mr": "स्पेशल (A ग्रेड)", "en": "Special (A Grade)", "price": 160, "est": false, "img": "images/products/chakra-71.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-72", "cat": "chakra", "mr": "डिलक्स (A ग्रेड)", "en": "Deluxe (A Grade)", "price": 250, "est": false, "img": "images/products/chakra-72.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-73", "cat": "chakra", "mr": "स्पिनर स्पेशल (A ग्रेड)", "en": "Spinner Special (A Grade)", "price": 200, "est": false, "img": "images/products/chakra-73.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "chakra-74", "cat": "chakra", "mr": "स्पिनर डिलक्स (A ग्रेड)", "en": "Spinner Deluxe (A Grade)", "price": 350, "est": false, "img": "images/products/chakra-74.svg", "desc": "जमिनीवर गोल फिरणारे रंगीत चक्र, ठिणग्यांची नक्षी."},
  {"id": "special-75", "cat": "special", "mr": "किट कॅट", "en": "Kit Kat", "price": 40, "est": false, "img": "images/products/special-75.svg", "desc": "छोट्या पॅकमध्ये रंगीत ठिणग्या."},
  {"id": "special-76", "cat": "special", "mr": "हेलिकॉप्टर (5 नग)", "en": "Helicopter (5 pcs)", "price": 120, "est": false, "img": "images/products/special-76.svg", "desc": "गोल फिरत उडणारा हेलिकॉप्टर, मजेदार."},
  {"id": "special-77", "cat": "special", "mr": "पेटा शॉट्स (5 नग)", "en": "Peta Shots (5 pcs)", "price": 250, "est": false, "img": "images/products/special-77.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "special-78", "cat": "special", "mr": "7 शॉट (5 नग)", "en": "7 Shot (5 pcs)", "price": 120, "est": false, "img": "images/products/special-78.svg", "desc": "आकाशात रंगीत शॉट्सची बरसात. मोकळ्या जागेत वापरा."},
  {"id": "special-79", "cat": "special", "mr": "फेदर पीकॉक", "en": "Feather Peacock", "price": 150, "est": false, "img": "images/products/special-79.svg", "desc": "मोरपंखासारखे रंग उधळणारा आकर्षक फटाका."},
  {"id": "special-80", "cat": "special", "mr": "पीकॉक (मध्यम)", "en": "Peacock (Medium)", "price": 200, "est": false, "img": "images/products/special-80.svg", "desc": "मोरपंखासारखे रंग उधळणारा आकर्षक फटाका."},
  {"id": "special-81", "cat": "special", "mr": "पीकॉक (मोठा)", "en": "Peacock (Large)", "price": 550, "est": false, "img": "images/products/special-81.svg", "desc": "मोरपंखासारखे रंग उधळणारा आकर्षक फटाका."},
  {"id": "special-82", "cat": "special", "mr": "झिल झिल", "en": "Zil Zil", "price": 25, "est": false, "img": "images/products/special-82.svg", "desc": "हातात धरून उडवायची फुलझडी, चमचमती ठिणग्या."},
  {"id": "special-83", "cat": "special", "mr": "ट्राय कलर (MTP)", "en": "Tri Color (MTP)", "price": 350, "est": false, "img": "images/products/special-83.svg", "desc": "तिरंगी रंगांची उधळण करणारा खास फटाका."},
  {"id": "special-84", "cat": "special", "mr": "सायरन (MTP) (3 नग)", "en": "Siren (MTP) (3 pcs)", "price": 250, "est": false, "img": "images/products/special-84.svg", "desc": "तिरंगी रंगांची उधळण करणारा खास फटाका."},
  {"id": "rocket-85", "cat": "rocket", "mr": "रॉकेट बॉम्ब", "en": "Rocket Bomb", "price": 180, "est": false, "img": "images/products/rocket-85.svg", "desc": "आकाशात उंच जाऊन फुटणारा रॉकेट."},
  {"id": "bomb-86", "cat": "bomb", "mr": "सद्दाम बॉम्ब", "en": "Saddam Bomb", "price": 80, "est": false, "img": "images/products/bomb-86.svg", "desc": "दमदार आवाजाचा बॉम्ब. काळजीपूर्वक वापरा."},
  {"id": "bomb-87", "cat": "bomb", "mr": "डिजिटल बॉम्ब 12 प्लाय", "en": "Digital Bomb 12 Ply", "price": 120, "est": true, "img": "images/products/bomb-87.svg", "desc": "दमदार आवाजाचा बॉम्ब. काळजीपूर्वक वापरा. (किंमत अंदाजे, दुकानात खात्री करा.)"},
  {"id": "bomb-88", "cat": "bomb", "mr": "क्लासिक बॉम्ब", "en": "Classic Bomb", "price": 150, "est": false, "img": "images/products/bomb-88.svg", "desc": "दमदार आवाजाचा बॉम्ब. काळजीपूर्वक वापरा."},
  {"id": "bomb-89", "cat": "bomb", "mr": "1/2 किलो पेपर बॉम्ब", "en": "1/2 kg Paper Bomb", "price": 150, "est": false, "img": "images/products/bomb-89.svg", "desc": "पेपर रॅप बॉम्ब, मोठा आवाज."},
  {"id": "bomb-90", "cat": "bomb", "mr": "250 ग्रॅम पेपर बॉम्ब (10 नग)", "en": "250 g Paper Bomb (10 pcs)", "price": 450, "est": false, "img": "images/products/bomb-90.svg", "desc": "पेपर रॅप बॉम्ब, मोठा आवाज."},
  {"id": "grandland-91", "cat": "grandland", "mr": "1K ग्रँडलँड", "en": "Grandland 1K", "price": 200, "est": false, "img": "images/products/grandland-91.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "grandland-92", "cat": "grandland", "mr": "2K ग्रँडलँड", "en": "Grandland 2K", "price": 450, "est": false, "img": "images/products/grandland-92.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "grandland-93", "cat": "grandland", "mr": "5K ग्रँडलँड", "en": "Grandland 5K", "price": 850, "est": false, "img": "images/products/grandland-93.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "grandland-94", "cat": "grandland", "mr": "10K ग्रँडलँड", "en": "Grandland 10K", "price": 1650, "est": false, "img": "images/products/grandland-94.svg", "desc": "पूर्ण पॅक बॉक्स, कुटुंबासाठी किफायतशीर."},
  {"id": "other-95", "cat": "other", "mr": "पॉप-पॉप", "en": "Pop-Pop", "price": 10, "est": false, "img": "images/products/other-95.svg", "desc": "फेकताच पट् असा आवाज, लहान मुलांसाठी हलका."},
  {"id": "other-96", "cat": "other", "mr": "बिडी-बॉम्ब", "en": "Bidi Bomb", "price": 15, "est": false, "img": "images/products/other-96.svg", "desc": "पारंपरिक आवाजाचा फटाका. सणासुदीला दणदणीत आनंद."},
  {"id": "other-97", "cat": "other", "mr": "थ्रो बॉम्ब", "en": "Throw Bomb", "price": 10, "est": false, "img": "images/products/other-97.svg", "desc": "फेकताच पट् असा आवाज, लहान मुलांसाठी हलका."},
  {"id": "other-98", "cat": "other", "mr": "रिंग कॅप", "en": "Ring Cap", "price": 20, "est": true, "img": "images/products/other-98.svg", "desc": "बंदुकीत वापरायचे कॅप रोल. (किंमत अंदाजे, दुकानात खात्री करा.)"},
  {"id": "other-99", "cat": "other", "mr": "रोल कॅप", "en": "Roll Cap", "price": 80, "est": false, "img": "images/products/other-99.svg", "desc": "बंदुकीत वापरायचे कॅप रोल."},
  {"id": "other-100", "cat": "other", "mr": "288 हँड शॉट", "en": "288 Hand Shot", "price": 1050, "est": false, "img": "images/products/other-100.svg", "desc": "हातात धरून उडवायचे मल्टी शॉट, एकापाठोपाठ फटाके."},
  {"id": "other-101", "cat": "other", "mr": "18 हँड शॉट", "en": "18 Hand Shot", "price": 650, "est": false, "img": "images/products/other-101.svg", "desc": "हातात धरून उडवायचे मल्टी शॉट, एकापाठोपाठ फटाके."}
];
const FEATURED_IDS = ["crackers-5", "crackers-13", "fancy-18", "fancy-20", "damu-37", "sparklers-48", "flowerpots-60", "chakra-70"];

function describe(p, lang) {
  if (p.desc) return p.desc;
  if (lang === 'en') {
    return p.en + ' - quality fireworks from Fataka Bazaar Wholesale Depot at our fixed rate. For safe use, light under adult supervision in an open area.';
  }
  return p.mr + ' – फटाका बाजार होलसेल डेपोचा एकच भाव, दर्जेदार फटाका. सुरक्षित वापरासाठी मोठ्यांच्या देखरेखीखाली व मोकळ्या जागेत फोडा.';
}

/* ---------- Generated product artwork (replace with photos via p.img) ---------- */
function productArt(p, big) {
  if (p.img) return '<img src="' + p.img + '" alt="" loading="lazy">';
  var n = parseInt(String(p.id).replace(/\D/g, ''), 10) || 0;
  var pals = [['#ff3b5c', '#7a0019'], ['#ffc61a', '#b36b00'], ['#8b5cf6', '#3b1a8a'], ['#10b981', '#064e3b'], ['#38bdf8', '#0c4a6e'], ['#fb923c', '#7c2d12']];
  var pal = pals[n % 6];
  var id = 'g' + Math.random().toString(36).slice(2, 8);
  var defs = '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + pal[0] + '"/><stop offset="1" stop-color="' + pal[1] + '"/></linearGradient>' +
    '<radialGradient id="' + id + 'b" cx=".5" cy=".5" r=".55"><stop offset="0" stop-color="' + pal[0] + '" stop-opacity=".5"/><stop offset="1" stop-color="' + pal[0] + '" stop-opacity="0"/></radialGradient></defs>';
  var b = '', i, a, x1, y1, x2, y2;
  if (p.cat === 'crackers') {
    b += '<g transform="rotate(-16 100 115)">';
    [58, 87, 116].forEach(function (x, k) {
      b += '<rect x="' + x + '" y="62" width="26" height="104" rx="6" fill="url(#' + id + ')" stroke="#ffe08a" stroke-opacity=".35"/>' +
        '<rect x="' + x + '" y="84" width="26" height="9" fill="#ffd54a"/><rect x="' + x + '" y="134" width="26" height="9" fill="#ffd54a"/>' +
        '<path d="M' + (x + 13) + ' 62 q 6 -16 15 -22" stroke="#ffe9a8" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
        '<circle cx="' + (x + 29) + '" cy="38" r="' + (k === 1 ? 6 : 4) + '" fill="#fff6c9"><animate attributeName="opacity" values="1;.3;1" dur="' + (0.8 + k * 0.3) + 's" repeatCount="indefinite"/></circle>';
    });
    b += '</g>';
  } else if (p.cat === 'fancy') {
    b += '<rect x="48" y="96" width="104" height="76" rx="8" fill="url(#' + id + ')" stroke="#ffe08a" stroke-opacity=".4"/>' +
      '<rect x="48" y="120" width="104" height="22" fill="#ffd54a" opacity=".9"/>' +
      '<circle cx="100" cy="131" r="7" fill="' + pal[1] + '"/>';
    for (i = 0; i < 9; i++) {
      a = Math.PI + (Math.PI * i) / 8; x1 = 100 + Math.cos(a) * 12; y1 = 92 + Math.sin(a) * 12; x2 = 100 + Math.cos(a) * (46 + (i % 2) * 14); y2 = 92 + Math.sin(a) * (46 + (i % 2) * 14);
      b += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (i % 2 ? '#ffd54a' : pal[0]) + '" stroke-width="3" stroke-linecap="round"/><circle cx="' + x2 + '" cy="' + y2 + '" r="3.5" fill="#fff"/>';
    }
  } else if (p.cat === 'damu') {
    b += '<path d="M84 172 L92 102 H108 L116 172 Z" fill="url(#' + id + ')" stroke="#ffe08a" stroke-opacity=".4"/><rect x="82" y="150" width="36" height="8" fill="#ffd54a"/>';
    for (i = 0; i < 13; i++) {
      a = Math.PI * 1.08 + (Math.PI * 0.84 * i) / 12; var r = 40 + (i % 3) * 14;
      x2 = 100 + Math.cos(a) * r; y2 = 100 + Math.sin(a) * r;
      b += '<path d="M100 100 Q ' + (100 + Math.cos(a) * r * 0.5) + ' ' + (100 + Math.sin(a) * r * 0.9 - 14) + ' ' + x2 + ' ' + (y2 + 12) + '" stroke="' + (i % 2 ? '#ffd54a' : '#ffffff') + '" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".9"/><circle cx="' + x2 + '" cy="' + (y2 + 12) + '" r="3" fill="#fff6c9"/>';
    }
  } else {
    b += '<path d="M66 172 L100 78 L134 172 Z" fill="url(#' + id + ')" stroke="#ffe08a" stroke-opacity=".4"/><rect x="74" y="140" width="52" height="9" fill="#ffd54a" transform="skewY(0)"/>';
    var cf = [[56, 70], [150, 64], [38, 112], [164, 110], [100, 44], [72, 40], [130, 40]];
    cf.forEach(function (c, k) { b += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + (k % 2 ? 4 : 5.5) + '" fill="' + (k % 2 ? '#ffd54a' : '#ffffff') + '"/>'; });
  }
  return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' + defs + '<circle cx="100" cy="100" r="96" fill="url(#' + id + 'b)"/>' + b + '</svg>';
}

/* ---------------------------- TEXT (Marathi / English) ---------------------------- */
const I18N = {
  mr: {
    nav_home: 'मुख्यपृष्ठ', nav_about: 'आमच्याबद्दल', nav_products: 'उत्पादने', nav_contact: 'संपर्क',
    search_ph: 'उत्पादने शोधा...', since: 'स्थापना 2015',
    title_home: 'मुख्यपृष्ठ', title_about: 'आमच्याबद्दल', title_products: 'उत्पादने', title_cart: 'माझी कार्ट', title_contact: 'संपर्क', title_admin: 'ॲडमिन पॅनेल',
    shop_now: 'आताच खरेदी करा', view_all: 'सर्व पहा', add_cart: 'कार्टमध्ये जोडा', added: 'कार्टमध्ये जोडले', enquire: 'चौकशी करा', enquire_wa: 'WhatsApp वर चौकशी करा',
    price_ask: 'भाव विचारा', items: 'उत्पादने', remove: 'काढा', scroll: 'खाली पहा',
    s1_eb: 'स्थापना 2015 · पिंपरी चिंचवड, पुणे', s1_t: 'फटाका <span>बाजार</span><small>होलसेल आणि रिटेल</small>', s1_p: 'प्रत्येक सणाला, आनंदाची आतषबाजी!',
    s2_eb: 'Fixed Rate · एकच भाव', s2_t: 'प्राईस लिस्ट <span>2026</span>', s2_p: 'किंमतीमध्ये कुठलाही बदल होणार नाही. सर्व फटाके एकाच भावात.',
    s3_eb: 'सोपी ऑर्डर', s3_t: '<span>WhatsApp</span> वर ऑर्डर करा', s3_p: 'फटाके निवडा, कार्टमध्ये जोडा आणि एका क्लिकमध्ये ऑर्डर पाठवा.',
    cat_t: 'आमच्या उत्पादनांच्या <span>श्रेणी</span>', cat_p: 'तुमच्या आवडीची श्रेणी निवडा',
    ft1_t: 'उत्तम दर्जाचे फटाके', ft1_p: 'सुरक्षित आणि विश्वासार्ह', ft2_t: 'एकच भाव', ft2_p: 'पारदर्शक व ठरलेला दर',
    ft3_t: 'वेळेवर डिलिव्हरी', ft3_p: 'डिलिव्हरी किंवा स्वतः पिकअप', ft4_t: 'सुरक्षित खरेदी', ft4_p: 'WhatsApp वर थेट पुष्टी',
    feat_t: 'लोकप्रिय <span>उत्पादने</span>', feat_p: 'ग्राहकांची आवडती निवड',
    steps_t: 'ऑर्डर करणे <span>सोपे आहे</span>', steps_p: 'फक्त 5 सोप्या पायऱ्या',
    s1t: 'उत्पादने पहा', s1p: 'वेबसाइटवर फटाके, फॅन्सी, दामू फॅन्सी व इतर श्रेणी पहा.',
    s2t: 'निवडा आणि कार्टमध्ये जोडा', s2p: 'किंमत पहा, प्रमाण निवडा आणि अनेक उत्पादने कार्टमध्ये जोडा.',
    s3t: 'ऑर्डर तपासा', s3p: 'कार्टमध्ये उत्पादनाचे नाव, प्रमाण, किंमत व अंदाजे एकूण रक्कम दिसते.',
    s4t: 'WhatsApp वर ऑर्डर पाठवा', s4p: '"WhatsApp वर ऑर्डर करा" दाबा; उत्पादने, रक्कम व तुमची माहिती असलेला मेसेज तयार उघडतो. तो दुकानाला पाठवा.',
    s5t: 'दुकानाकडून पुष्टी', s5p: 'दुकान उपलब्धता, डिलिव्हरी/पिकअप आणि पेमेंटची माहिती थेट तुम्हाला कळवते.',
    disc_t: 'दिवाळी <span>बचत ऑफर</span>', disc_p: 'मोठी ऑर्डर, मोठी बचत! कार्टमध्ये सवलत आपोआप लागू होते.',
    wish_t: 'दिवाळीच्या हार्दिक शुभेच्छा!', wish_p: 'प्रकाश, आनंद आणि समृद्धीचा हा सण, तुमच्या जीवनात सुख-समाधान घेऊन येवो!',
    /* about */
    hero_about_eb: 'आमच्याबद्दल', hero_about_t: 'आनंदासाठी सुरक्षित आणि <span>दर्जेदार</span> फटाके', hero_about_p: 'तुमच्या आनंदासाठी, सुरक्षित आणि दर्जेदार फटाके',
    story_t: 'आमची <span>कहाणी</span>',
    story_p1: 'फटाका बाजार होलसेल डेपो हे पिंपरी चिंचवड, पुणे येथील एक विश्वासार्ह फटाका दुकान आहे. 2015 पासून आम्ही दर्जेदार फटाके, उत्तम सेवा आणि ग्राहकांच्या विश्वासावर आमचा व्यवसाय उभारला आहे.',
    story_p2: 'आमचा भाव एकच आहे – गर्दी असो वा नसो, किंमतीमध्ये कुठलाही बदल होत नाही. होलसेल आणि रिटेल, दोन्ही ग्राहकांसाठी आम्ही तयार आहोत.',
    ck1: 'दर्जा व सुरक्षिततेची हमी', ck2: 'सर्व प्रकारचे फटाके – क्रॅकर्स, फॅन्सी, दामू फॅन्सी', ck3: 'ग्राहकांचे समाधान हेच आमचे उद्दिष्ट', ck4: 'पिंपरी चिंचवड येथे दोन शाखा',
    st1: 'स्थापना वर्ष', st2: 'शाखा', st3: 'उत्पादने', st4: 'एकच भाव',
    why_t: 'आम्हालाच का <span>निवडावे?</span>',
    csr_t: 'सामाजिक <span>बांधिलकी</span>', ft_tip: 'आमच्या नफ्यातील काही रक्कम अनाथ मुलांना देण्यात येणार आहे. तरी आपले सहकार्य मोलाचे आहे.',
    branch_t: 'आमच्या <span>शाखा</span>', br1: 'शाखा नं. 1', br2: 'शाखा नं. 2',
    b1a: 'साई हॉस्पिटल शेजारी, साने चौक, पुणे 19', b2a: 'कॉटनकिंग शेजारी, कृष्णानगर, पुणे 19', view_map: 'नकाशा पहा',
    quote_t: '“आनंदी सण, सुरक्षित सण – फटाका बाजारसोबत!”',
    /* products */
    hero_prod_eb: 'प्राईस लिस्ट 2026', hero_prod_t: 'आमची सर्व <span>उत्पादने</span>', hero_prod_p: 'सर्व प्रकारचे फटाके – एकाच ठिकाणी, एकच भाव',
    catalog_t: 'श्रेणी <span>निवडा</span>', all: 'सर्व', sort_def: 'क्रमवारी', sort_low: 'किंमत: कमी ते जास्त', sort_high: 'किंमत: जास्त ते कमी', sort_az: 'नावानुसार (A-Z)',
    no_result: 'कोणतेही उत्पादन सापडले नाही', page_search_ph: 'या यादीत शोधा...',
    other_cats: 'इतर <span>श्रेणी</span>', back_all: 'सर्व उत्पादने', hero_cat_eb: 'श्रेणी',
    /* cart */
    hero_cart_eb: 'तुमची निवड', hero_cart_t: 'माझी <span>कार्ट</span>', hero_cart_p: 'तुम्ही निवडलेली उत्पादने तपासा आणि ऑर्डर पाठवा',
    cart_empty: 'तुमची कार्ट रिकामी आहे', cart_empty_p: 'उत्पादने पाहून कार्टमध्ये जोडा', cart_items_t: 'तुमची <span>उत्पादने</span>',
    sum_t: 'ऑर्डर सारांश', sum_items: 'एकूण नग', sum_sub: 'एकूण किंमत', sum_disc: 'सवलत', sum_total: 'अंतिम रक्कम',
    coupon_ph: 'कूपन कोड', coupon_apply: 'लागू करा', coupon_ok: 'कूपन लागू झाला (+{p}%)', coupon_bad: 'चुकीचा कूपन कोड',
    tier_hint: 'आणखी {amt} च्या खरेदीवर {pct}% सवलत मिळवा!', tier_got: 'अभिनंदन! तुम्हाला सर्वाधिक सवलत मिळाली आहे.',
    est_note: 'ही अंदाजे रक्कम आहे. अंतिम पुष्टी दुकानाकडून मिळेल.',
    cust_t: 'तुमची माहिती', f_name: 'नाव', f_mobile: 'मोबाईल नंबर', f_mode: 'पर्याय', f_delivery: 'डिलिव्हरी', f_pickup: 'पिकअप', f_addr: 'पत्ता', f_note: 'सूचना (ऐच्छिक)',
    order_wa: 'WhatsApp वर ऑर्डर करा', continue_shop: 'खरेदी सुरू ठेवा', clear_cart: 'कार्ट रिकामी करा',
    err_name: 'कृपया नाव लिहा', err_mobile: 'कृपया योग्य 10 अंकी मोबाईल नंबर लिहा', err_addr: 'डिलिव्हरीसाठी पत्ता आवश्यक आहे', err_msg: 'कृपया संदेश लिहा',
    sugg_t: 'हे पण <span>आवडेल</span>', dr_title: 'तुमची कार्ट', dr_view: 'पूर्ण कार्ट पहा', dr_checkout: 'ऑर्डर पूर्ण करा',
    ty_t: 'धन्यवाद!', ty_order_p: 'तुमचा ऑर्डर मेसेज WhatsApp मध्ये तयार आहे. कृपया तो दुकानाला पाठवा. दुकान उपलब्धता, डिलिव्हरी/पिकअप आणि पेमेंटची माहिती लवकरच कळवेल. दिवाळीच्या हार्दिक शुभेच्छा!',
    ty_enq_p: 'तुमची चौकशी WhatsApp मध्ये तयार आहे. कृपया ती पाठवा, आम्ही लवकरच संपर्क करू. दिवाळीच्या हार्दिक शुभेच्छा!', ty_btn: 'ठीक आहे',
    /* contact */
    hero_ct_eb: 'संपर्क', hero_ct_t: 'आमच्याशी <span>संपर्क</span> करा', hero_ct_p: 'काही प्रश्न असतील तर आम्हाला नक्की कळवा',
    ct_info_t: 'संपर्क <span>माहिती</span>', lbl_addr: 'पत्ता', lbl_mobile: 'मोबाईल', lbl_time: 'वेळ', lbl_wa: 'WhatsApp',
    form_t: 'आम्हाला <span>संदेश</span> पाठवा', f_type: 'विषय', type_enq: 'चौकशी', type_bulk: 'होलसेल / मोठी ऑर्डर', type_other: 'इतर', f_msg: 'तुमचा संदेश', send_enq: 'WhatsApp वर पाठवा',
    ct_note: 'कृपया गर्दीच्या वेळेस सहकार्य करावे.',
    faq_t: 'नेहमी विचारले जाणारे <span>प्रश्न</span>',
    faq1q: 'ऑर्डर कशी करायची?', faq1a: 'उत्पादने कार्टमध्ये जोडा, कार्ट पेजवर तुमची माहिती भरा आणि "WhatsApp वर ऑर्डर करा" दाबा.',
    faq2q: 'भाव खरंच एकच असतो का?', faq2a: 'होय, आमचा भाव एकच आहे. किंमतीमध्ये कुठलाही बदल होत नाही.',
    faq3q: 'डिलिव्हरी मिळते का?', faq3a: 'डिलिव्हरी किंवा पिकअप – ऑर्डर करताना पर्याय निवडा; दुकान त्याची पुष्टी करेल.',
    faq4q: 'पेमेंट कसे करायचे?', faq4a: 'ऑर्डर पुष्टी झाल्यावर दुकान WhatsApp वर पेमेंटची माहिती देईल.',
    /* footer */
    ft_about: 'फटाका बाजार होलसेल डेपो – 2015 पासून पिंपरी चिंचवड येथील विश्वासार्ह फटाका दुकान. दर्जेदार फटाके, एकच भाव.',
    ft_links: 'जलद लिंक्स', ft_cats: 'श्रेणी', ft_contact: 'संपर्क',
    ft_cta_t: 'ऑर्डर द्यायची आहे?', ft_cta_p: 'WhatsApp वर थेट संपर्क करा', ft_copy: '© 2026 फटाका बाजार होलसेल डेपो. सर्व हक्क राखीव.',
    ft_safe: 'सुरक्षित फटाके फोडा – मोठ्यांच्या देखरेखीखाली, मोकळ्या जागेत.',
    nav_cart: 'कार्ट', est: 'अंदाजे'
  },
  en: {
    nav_home: 'Home', nav_about: 'About Us', nav_products: 'Products', nav_contact: 'Contact',
    search_ph: 'Search products...', since: 'Since 2015',
    title_home: 'Home', title_about: 'About Us', title_products: 'Products', title_cart: 'My Cart', title_contact: 'Contact', title_admin: 'Admin Panel',
    shop_now: 'Shop Now', view_all: 'View All', add_cart: 'Add to Cart', added: 'Added to cart', enquire: 'Enquire', enquire_wa: 'Enquire on WhatsApp',
    price_ask: 'Ask price', items: 'products', remove: 'Remove', scroll: 'Scroll down',
    s1_eb: 'Since 2015 · Pimpri Chinchwad, Pune', s1_t: 'Fataka <span>Bazaar</span><small>Wholesale and Retail</small>', s1_p: 'Every festival, a burst of joy!',
    s2_eb: 'Fixed Rate · एकच भाव', s2_t: 'Price List <span>2026</span>', s2_p: 'No change in prices. Every cracker at one fixed rate.',
    s3_eb: 'Easy Ordering', s3_t: 'Order on <span>WhatsApp</span>', s3_p: 'Pick crackers, add to cart and send your order in one click.',
    cat_t: 'Our Product <span>Categories</span>', cat_p: 'Pick the category you love',
    ft1_t: 'Quality Crackers', ft1_p: 'Safe and trusted', ft2_t: 'Fixed Rate', ft2_p: 'Transparent, fixed pricing',
    ft3_t: 'On-time Delivery', ft3_p: 'Delivery or self pickup', ft4_t: 'Safe Shopping', ft4_p: 'Direct confirmation on WhatsApp',
    feat_t: 'Popular <span>Products</span>', feat_p: 'Customer favourites',
    steps_t: 'Ordering is <span>Easy</span>', steps_p: 'Just 5 simple steps',
    s1t: 'Browse products', s1p: 'Visit the website and browse categories like Crackers, Fancy, Damu Fancy and more.',
    s2t: 'Select and add to cart', s2p: 'View prices, choose quantities and add multiple items to your cart.',
    s3t: 'Review the order', s3p: 'The cart shows product names, quantities, prices and the total estimated order value.',
    s4t: 'Send the order via WhatsApp', s4p: 'Click "Order on WhatsApp". WhatsApp opens with a ready message having products, quantities, total and your details. Send it to the shop.',
    s5t: 'Shop confirms the order', s5p: 'The shop confirms availability, delivery or pickup and payment instructions directly with you.',
    disc_t: 'Diwali <span>Savings Offer</span>', disc_p: 'Bigger order, bigger savings! Discount is applied automatically in the cart.',
    wish_t: 'Happy Diwali!', wish_p: 'May this festival of light, joy and prosperity bring happiness to your life!',
    hero_about_eb: 'About Us', hero_about_t: 'Safe and <span>quality</span> crackers for your joy', hero_about_p: 'For your happiness – safe and quality fireworks',
    story_t: 'Our <span>Story</span>',
    story_p1: 'Fataka Bazaar Wholesale Depot is a trusted firecracker shop in Pimpri Chinchwad, Pune. Since 2015 we have built our business on quality crackers, great service and the trust of our customers.',
    story_p2: 'Our rate is one fixed rate – busy or not, prices never change. We are ready for both wholesale and retail customers.',
    ck1: 'Guaranteed quality and safety', ck2: 'All types of crackers – Crackers, Fancy, Damu Fancy', ck3: 'Customer satisfaction is our goal', ck4: 'Two branches in Pimpri Chinchwad',
    st1: 'Established', st2: 'Branches', st3: 'Products', st4: 'Fixed Rate',
    why_t: 'Why <span>choose us?</span>',
    csr_t: 'Our Social <span>Commitment</span>', ft_tip: 'A part of our profit will be given to orphan children. Your support means a lot to us.',
    branch_t: 'Our <span>Branches</span>', br1: 'Branch 1', br2: 'Branch 2',
    b1a: 'Near Sai Hospital, Sane Chowk, Pune 19', b2a: 'Near Cotton King, Krishnanagar, Pune 19', view_map: 'View map',
    quote_t: '“Happy festival, safe festival – with Fataka Bazaar!”',
    hero_prod_eb: 'Price List 2026', hero_prod_t: 'All Our <span>Products</span>', hero_prod_p: 'Every type of cracker – one place, one fixed rate',
    catalog_t: 'Choose a <span>Category</span>', all: 'All', sort_def: 'Sort', sort_low: 'Price: Low to High', sort_high: 'Price: High to Low', sort_az: 'Name (A-Z)',
    no_result: 'No products found', page_search_ph: 'Search in this list...',
    other_cats: 'Other <span>Categories</span>', back_all: 'All products', hero_cat_eb: 'Category',
    hero_cart_eb: 'Your Selection', hero_cart_t: 'My <span>Cart</span>', hero_cart_p: 'Review your selected products and send the order',
    cart_empty: 'Your cart is empty', cart_empty_p: 'Browse products and add them to your cart', cart_items_t: 'Your <span>Items</span>',
    sum_t: 'Order Summary', sum_items: 'Total items', sum_sub: 'Subtotal', sum_disc: 'Discount', sum_total: 'Grand Total',
    coupon_ph: 'Coupon code', coupon_apply: 'Apply', coupon_ok: 'Coupon applied (+{p}%)', coupon_bad: 'Invalid coupon code',
    tier_hint: 'Add {amt} more to get {pct}% off!', tier_got: 'Congratulations! You got the maximum discount.',
    est_note: 'This is an estimated amount. Final confirmation will come from the shop.',
    cust_t: 'Your Details', f_name: 'Name', f_mobile: 'Mobile number', f_mode: 'Preference', f_delivery: 'Delivery', f_pickup: 'Pickup', f_addr: 'Address', f_note: 'Note (optional)',
    order_wa: 'Order on WhatsApp', continue_shop: 'Continue shopping', clear_cart: 'Clear cart',
    err_name: 'Please enter your name', err_mobile: 'Please enter a valid 10-digit mobile number', err_addr: 'Address is required for delivery', err_msg: 'Please write your message',
    sugg_t: 'You may <span>also like</span>', dr_title: 'Your Cart', dr_view: 'View full cart', dr_checkout: 'Checkout',
    ty_t: 'Thank you!', ty_order_p: 'Your order message is ready in WhatsApp. Please send it to the shop. The shop will confirm availability, delivery/pickup and payment soon. Happy Diwali!',
    ty_enq_p: 'Your enquiry is ready in WhatsApp. Please send it and we will contact you soon. Happy Diwali!', ty_btn: 'OK',
    hero_ct_eb: 'Contact', hero_ct_t: 'Get in <span>touch</span> with us', hero_ct_p: 'If you have any questions, please let us know',
    ct_info_t: 'Contact <span>Details</span>', lbl_addr: 'Address', lbl_mobile: 'Mobile', lbl_time: 'Hours', lbl_wa: 'WhatsApp',
    form_t: 'Send us a <span>message</span>', f_type: 'Subject', type_enq: 'Enquiry', type_bulk: 'Wholesale / Bulk order', type_other: 'Other', f_msg: 'Your message', send_enq: 'Send on WhatsApp',
    ct_note: 'Please cooperate during rush hours.',
    faq_t: 'Frequently asked <span>questions</span>',
    faq1q: 'How do I place an order?', faq1a: 'Add products to the cart, fill your details on the cart page and press "Order on WhatsApp".',
    faq2q: 'Is the rate really fixed?', faq2a: 'Yes, our rate is one fixed rate. Prices never change.',
    faq3q: 'Do you offer delivery?', faq3a: 'Delivery or pickup – choose your preference while ordering; the shop will confirm it.',
    faq4q: 'How do I pay?', faq4a: 'Once the order is confirmed, the shop will share payment details on WhatsApp.',
    ft_about: 'Fataka Bazaar Wholesale Depot – a trusted firecracker shop in Pimpri Chinchwad since 2015. Quality crackers, one fixed rate.',
    ft_links: 'Quick Links', ft_cats: 'Categories', ft_contact: 'Contact',
    ft_cta_t: 'Ready to order?', ft_cta_p: 'Contact us directly on WhatsApp', ft_copy: '© 2026 Fataka Bazaar Wholesale Depot. All rights reserved.',
    ft_safe: 'Burst crackers safely – under adult supervision, in open areas.',
    nav_cart: 'Cart', est: 'Approx'
  }
};
