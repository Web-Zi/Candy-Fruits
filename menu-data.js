
window.CANDY_FRUITS_MENU = {
  brand: {
    name: "Candy Fruits",
    nameAr: "كاندي فروتس",
    phone: "01207434002",
    phoneAlt: "01223338489",
    address: "شارع صلاح سالم - أمام مدرسة الليسية"
  },

  currency: "EGP",

  categories: [
    { id: "sory-fries", name: "بطاطس سوري", nameEn: "Syrian Fries" },
    { id: "betenko", name: "بيتزركو", nameEn: "Bitenko" },
    { id: "potato-classic", name: "بطاطس سوري", nameEn: "Syrian Potato" },
    { id: "potato", name: "بطاطس", nameEn: "Potato" },
    { id: "potato-burger", name: "البوريتو", nameEn: "Burrito" },
    { id: "galabito", name: "قلابيطو", nameEn: "Galabito" },
    { id: "extras", name: "إضافات", nameEn: "Extras" },
    { id: "toast", name: "التوستات (S / L)", nameEn: "Toast (Small / Large)" },
    { id: "combo", name: "الكومبو", nameEn: "Combo" }
  ],

  products: [
    // SYRIAN FRIES
    { id: "item-1", category: "sory-fries", name: "سوري موزاريلا", nameEn: "Syrian Mozzarella", price: 30 },
    { id: "item-2", category: "sory-fries", name: "سوري بسطرمة", nameEn: "Syrian Pastrami", price: 55 },
    { id: "item-3", category: "sory-fries", name: "بطاطس سوري", nameEn: "Syrian Potato", price: 50 },
    { id: "item-4", category: "sory-fries", name: "سوري فراخ بانيه", nameEn: "Syrian Chicken Pane", price: 60 },
    { id: "item-5", category: "sory-fries", name: "سوري حلوم", nameEn: "Syrian Halloumi", price: 60 },
    { id: "item-6", category: "sory-fries", name: "سوري بيدرو", nameEn: "Syrian Pedro", price: 60 },
    { id: "item-7", category: "sory-fries", name: "سوري تونة", nameEn: "Syrian Tuna", price: 65 },
    { id: "item-8", category: "sory-fries", name: "سوري كفتة", nameEn: "Syrian Kofta", price: 70 },
    { id: "item-9", category: "sory-fries", name: "صاروخ كبدة", nameEn: "Liver Rocket", price: 50 },
    { id: "item-10", category: "sory-fries", name: "سوري بيتزا", nameEn: "Syrian Pizza", price: 60 },
    { id: "item-11", category: "sory-fries", name: "دبادي (NEW)", nameEn: "Dabadi (New)", price: 85, uncertain: true },
    { id: "item-12", category: "sory-fries", name: "فرمشة (NEW)", nameEn: "Farmasha (New)", price: 85, uncertain: true },

    // SYRIAN POTATO
    { id: "item-13", category: "potato-classic", name: "سوري كلاسيك", nameEn: "Classic Syrian", price: 25 },
    { id: "item-14", category: "potato-classic", name: "سوري شاورما لحمة", nameEn: "Meat Shawarma Syrian", price: 85 },
    { id: "item-15", category: "potato-classic", name: "سوري تونة", nameEn: "Tuna Syrian", price: 35 },
    { id: "item-16", category: "potato-classic", name: "سوري بيض", nameEn: "Egg Syrian", price: 55 },
    { id: "item-17", category: "potato-classic", name: "راب صوص", nameEn: "Sauce Wrap", price: 65, uncertain: true },
    { id: "item-18", category: "potato-classic", name: "سوري فاهيتا", nameEn: "Fajita Syrian", price: 75 },
    { id: "item-19", category: "potato-classic", name: "سوري شاورما", nameEn: "Shawarma Syrian", price: 65 },
    { id: "item-20", category: "potato-classic", name: "سوري شاورما فراخ", nameEn: "Chicken Shawarma Syrian", price: 70 },
    { id: "item-21", category: "potato-classic", name: "سوري كبدة", nameEn: "Liver Syrian", price: 70 },
    { id: "item-22", category: "potato-classic", name: "حرش", nameEn: "Harsh", price: 85, uncertain: true },
    { id: "item-23", category: "potato-classic", name: "سوري سجق", nameEn: "Sausage Syrian", price: 75 },
    { id: "item-24", category: "potato-classic", name: "صاروخ", nameEn: "Rocket", price: 70 },
    { id: "item-25", category: "potato-classic", name: "مراجنجي (NEW)", nameEn: "Marangy (New)", price: 85, uncertain: true },
    { id: "item-26", category: "potato-classic", name: "نبش", nameEn: "Nabesh", price: 85, uncertain: true },

    // BETENKO
    { id: "item-27", category: "betenko", name: "بيتزركو بسطرمة", nameEn: "Bitenko Pastrami", price: 120 },
    { id: "item-28", category: "betenko", name: "بيتزركو كفتة", nameEn: "Bitenko Kofta", price: 130 },
    { id: "item-29", category: "betenko", name: "بيتزركو سجق", nameEn: "Bitenko Sausage", price: 130 },
    { id: "item-30", category: "betenko", name: "بيتزركو ميلانو", nameEn: "Bitenko Milano", price: 110 },
    { id: "item-31", category: "betenko", name: "بيتزركو بيدرو", nameEn: "Bitenko Pedro", price: 140 },
    { id: "item-32", category: "betenko", name: "بيتزركو فراخ", nameEn: "Bitenko Chicken", price: 120 },
    { id: "item-33", category: "betenko", name: "بيتزركو استريس", nameEn: "Bitenko Stress", price: 120, uncertain: true },
    { id: "item-34", category: "betenko", name: "بيتزركو فاهيتا", nameEn: "Bitenko Fajita", price: 130 },
    { id: "item-35", category: "betenko", name: "بيتزركو مشكل فراخ", nameEn: "Bitenko Mixed Chicken", price: 130 },
    { id: "item-36", category: "betenko", name: "بيتزركو هوت دوج", nameEn: "Bitenko Hot Dog", price: 110 },

    // POTATOES
    { id: "item-37", category: "potato", name: "بطاطس توابل", nameEn: "Seasoned Potatoes", price: 25 },
    { id: "item-38", category: "potato", name: "بطاطس صوص شيدر", nameEn: "Cheddar Sauce Potatoes", price: 40 },
    { id: "item-39", category: "potato", name: "فرايز مكسيكانو", nameEn: "Mexicano Fries", price: 50 },
    { id: "item-40", category: "potato", name: "فرايز شيز", nameEn: "Cheese Fries", price: 50 },
    { id: "item-41", category: "potato", name: "فرايز استريس", nameEn: "Stress Fries", price: 60, uncertain: true },
    { id: "item-42", category: "potato", name: "فرايز هوت دوج", nameEn: "Hot Dog Fries", price: 60 },
    { id: "item-43", category: "potato", name: "فرايز سجق", nameEn: "Sausage Fries", price: 60 },
    { id: "item-44", category: "potato", name: "فرايز بيب كورن", nameEn: "BBQ Corn Fries", price: 65, uncertain: true },

    // BURRITO / SPECIAL POTATOES
    { id: "item-45", category: "potato-burger", name: "جلطة السعادة", nameEn: "Joy Rush", price: 150 },
    { id: "item-46", category: "potato-burger", name: "فرقان ولهان", nameEn: "Furqan W Lahfan", price: 155, uncertain: true },
    { id: "item-47", category: "potato-burger", name: "الفيومية", nameEn: "Fayoumiya", price: 150 },
    { id: "item-48", category: "potato-burger", name: "لمبة وحش", nameEn: "Lamba Wahsh", price: 150, uncertain: true },
    { id: "item-49", category: "potato-burger", name: "خطيطة", nameEn: "Khatita", price: 160, uncertain: true },
    { id: "item-50", category: "potato-burger", name: "زحلقة", nameEn: "Zalqa", price: 140 },

    // GALABITO
    { id: "item-51", category: "galabito", name: "قلابيطو فراخ بانيه", nameEn: "Galabito Chicken Pane", price: 120 },
    { id: "item-52", category: "galabito", name: "قلابيطو شيش", nameEn: "Galabito Shish", price: 130 },
    { id: "item-53", category: "galabito", name: "قلابيطو استريس", nameEn: "Galabito Stress", price: 120, uncertain: true },
    { id: "item-54", category: "galabito", name: "قلابيطو فاهيتا", nameEn: "Galabito Fajita", price: 130 },
    { id: "item-55", category: "galabito", name: "قلابيطو بسطرمة", nameEn: "Galabito Pastrami", price: 120 },
    { id: "item-56", category: "galabito", name: "قلابيطو كفتة", nameEn: "Galabito Kofta", price: 130 },
    { id: "item-57", category: "galabito", name: "قلابيطو سجق", nameEn: "Galabito Sausage", price: 130 },
    { id: "item-58", category: "galabito", name: "قلابيطو هوت دوج", nameEn: "Galabito Hot Dog", price: 110 },
    { id: "item-59", category: "galabito", name: "قلابيطو بيدرو", nameEn: "Galabito Pedro", price: 140 },
    { id: "item-60", category: "galabito", name: "قلابيطو مشكل فراخ", nameEn: "Galabito Mixed Chicken", price: 130 },
    { id: "item-61", category: "galabito", name: "قلابيطو صواريخ", nameEn: "Galabito Rockets", price: 130 },
    { id: "item-62", category: "galabito", name: "قلابيطو ميلانو", nameEn: "Galabito Milano", price: 110 },

    // EXTRAS
    { id: "item-63", category: "extras", name: "صوص باربيكيو", nameEn: "BBQ Sauce", price: 5 },
    { id: "item-64", category: "extras", name: "صوص ألفريدو", nameEn: "Alfredo Sauce", price: 5 },
    { id: "item-65", category: "extras", name: "صوص سويت شيلي", nameEn: "Sweet Chili Sauce", price: 5 },
    { id: "item-66", category: "extras", name: "صوص رانش", nameEn: "Ranch Sauce", price: 5 },
    { id: "item-67", category: "extras", name: "طحينة", nameEn: "Tahini", price: 5 },
    { id: "item-68", category: "extras", name: "مخلل", nameEn: "Pickles", price: 10 },
    { id: "item-69", category: "extras", name: "كولسلو", nameEn: "Coleslaw", price: 20 },
    { id: "item-70", category: "extras", name: "كاريليكا", nameEn: "Garlic Sauce", price: 20, uncertain: true },
    { id: "item-71", category: "extras", name: "كاتز", nameEn: "Katz", price: 20, uncertain: true },
    { id: "item-72", category: "extras", name: "Cola", nameEn: "Cola", price: 25 },
    { id: "item-73", category: "extras", name: "بيض كلو", nameEn: "Egg", price: 25, uncertain: true },
    { id: "item-74", category: "extras", name: "سبيرو سباتس", nameEn: "Spiro Spathis", price: 15 },

    // COMBO
    { id: "item-75", category: "combo", name: "كومبو", nameEn: "Combo", price: 30 }
  ],

  toasts: [
    { id: "toast-1", category: "toast", name: "مشكل جبن", nameEn: "Mixed Cheese", small: 25, large: 35 },
    { id: "toast-2", category: "toast", name: "مشكل جبن بسطرمة", nameEn: "Cheese & Pastrami", small: 40, large: 55 },
    { id: "toast-3", category: "toast", name: "تركي مدخن", nameEn: "Smoked Turkey", small: 40, large: 55 },
    { id: "toast-4", category: "toast", name: "توست بيدرو", nameEn: "Pedro Toast", small: 55, large: 80 },
    { id: "toast-5", category: "toast", name: "توست بيتزا", nameEn: "Pizza Toast", small: 45, large: 60 },
    { id: "toast-6", category: "toast", name: "مشكل جبن كفتار", nameEn: "Mixed Cheese Toast", small: 50, large: 70, uncertain: true },
    { id: "toast-7", category: "toast", name: "مشكل جبن فراخ", nameEn: "Chicken Cheese Toast", small: 45, large: 60 },
    { id: "toast-8", category: "toast", name: "توست سجق", nameEn: "Sausage Toast", small: 50, large: 70 },
    { id: "toast-9", category: "toast", name: "توست فاهيتا", nameEn: "Fajita Toast", small: 55, large: 75 },
    { id: "toast-10", category: "toast", name: "توست بسطرمة", nameEn: "Pastrami Toast", small: 55, large: 75 },
    { id: "toast-11", category: "toast", name: "توست كبدة", nameEn: "Liver Toast", small: 55, large: 75 },
    { id: "toast-12", category: "toast", name: "توست هوت دوج", nameEn: "Hot Dog Toast", small: 40, large: 55 },
    { id: "toast-13", category: "toast", name: "توست سلامي", nameEn: "Salami Toast", small: 40, large: 55 },
    { id: "toast-14", category: "toast", name: "توست بيك بيكون", nameEn: "Beef Bacon Toast", small: 45, large: 55 },
    { id: "toast-15", category: "toast", name: "توست تونة", nameEn: "Tuna Toast", small: 40, large: 55, uncertain: true },
    { id: "toast-16", category: "toast", name: "توست مشكل صواريخ", nameEn: "Mixed Rocket Toast", small: 50, large: 80, uncertain: true },
    { id: "toast-17", category: "toast", name: "توست سجق", nameEn: "Sausage Toast (variant)", small: 55, large: 80 }
  ]
};
