/* এই ফাইলে আপনার Firebase ও Cloudinary তথ্য বসান। ফাঁকা থাকলে সাইট "ডেমো মোডে" (শুধু ব্রাউজারে ডেটা) চলে।
   Fill in your Firebase and Cloudinary details. Left empty, the site runs in demo mode (data stays in the browser). */
window.SITE_CFG={
  firebase:{apiKey:'',authDomain:'',projectId:'',appId:''},
  adminEmail:'',            // অ্যাডমিনের ইমেইল (Firebase Authentication-এ যেটা বানাবেন)
  adminPage:'admin.html',   // অ্যাডমিন পেজের ফাইলের নাম (গোপন নামে বদলানো ভালো)
  cloudinary:{cloud:'',preset:''}  // ছবির জন্য (Cloudinary cloud name ও unsigned upload preset)
};
