document.addEventListener('DOMContentLoaded', function() {
    // يجب تعريف قاعدة البيانات هنا أيضاً لتتمكن الصفحة من الوصول إليها
    // في المشاريع الكبيرة، يتم استيرادها من ملف مشترك
    const dressDatabase = [
        { id: 1, name: "فستان أزرق ملكي بقصة الحورية", image_url: "img/dresses/d1.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["cool"] },
        { id: 2, name: "فستان أحمر ناري بخصر محدد", image_url: "img/dresses/d2.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["warm"] },
        { id: 3, name: "فستان رمادي أنيق ملتف", image_url: "img/dresses/d3.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["neutral"] },
        { id: 4, name: "فستان بقصة A-line وأكمام منفوخة", image_url: "img/dresses/d4.jpg", suitable_body_shapes: ["الكمثري"], suitable_undertones: ["cool"] },
        { id: 5, name: "فستان بقصة Empire بلون الخوخ", image_url: "img/dresses/d5.jpg", suitable_body_shapes: ["الكمثري"], suitable_undertones: ["warm"] },
        { id: 6, name: "فستان أسود كلاسيكي بتنورة واسعة", image_url: "img/dresses/d6.jpg", suitable_body_shapes: ["الكمثري", "التفاحة"], suitable_undertones: ["cool", "warm", "neutral"] },
        { id: 7, name: "فستان وردي فاتح بتفاصيل عند الخصر", image_url: "img/dresses/d7.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["cool"] },
        { id: 8, name: "فستان بياقة V عميقة ولون ترابي", image_url: "img/dresses/d8.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["warm"] },
        { id: 9, name: "فستان بتنورة منفوشة ولون محايد", image_url: "img/dresses/d9.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["neutral"] },
        { id: 10, name: "فستان أخضر زمردي بقصة مستقيمة", image_url: "img/dresses/d10.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["cool"] },
        { id: 11, name: "فستان برتقالي منقوش بقصة فضفاضة", image_url: "img/dresses/d11.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["warm"] },
        { id: 12, name: "فستان شيفون بيج بكسرات ناعمة", image_url: "img/dresses/d12.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["neutral"] },
        { id: 13, name: "فستان بنفسجي بحزام لإضافة تحديد", image_url: "img/dresses/d13.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["cool"] },
        { id: 14, name: "فستان ذهبي بطبقات متعددة", image_url: "img/dresses/d14.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["warm"] },
        { id: 15, name: "فستان أبيض بكتف واحد", image_url: "img/dresses/d15.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["neutral"] }
    ];

    const params = new URLSearchParams(window.location.search);
    const dressId = parseInt(params.get('id')); // تحويل النص إلى رقم
    const orderContainer = document.getElementById('order-container');

    if (dressId) {
        const selectedDress = dressDatabase.find(dress => dress.id === dressId);

        if (selectedDress) {
            orderContainer.innerHTML = `
                <div class="order-details">
                    <img src="${selectedDress.image_url}" alt="${selectedDress.name}">
                    <h2>${selectedDress.name}</h2>
                    <p>فستان رائع تم اختياره ليتناسب مع ذوقك الرفيع وقوامك المميز. جاهزة لتكوني محط الأنظار؟</p>
                </div>
                <div class="order-form-container">
                    <h3>تأكيد الطلب</h3>
                    <form id="confirm-order-form" class="order-form">
                        <div class="form-group">
                            <label for="order-name">الاسم الكامل</label>
                            <input type="text" id="order-name" required>
                        </div>
                        <div class="form-group">
                            <label for="order-phone">رقم الجوال</label>
                            <input type="tel" id="order-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="order-address">العنوان</label>
                            <input type="text" id="order-address" required>
                        </div>
                        <button type="submit" class="main-button">إرسال الطلب</button>
                    </form>
                </div>
            `;
            
            document.getElementById('confirm-order-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('شكراً لكِ! تم استلام طلبك بنجاح وسنتواصل معكِ قريباً.');
                // يمكن هنا إضافة كود لإرسال البيانات للخادم
                this.reset();
            });

        } else {
            orderContainer.innerHTML = '<p>عفواً، لم نتمكن من العثور على الفستان المطلوب. قد يكون الرابط غير صحيح.</p>';
        }
    } else {
        orderContainer.innerHTML = '<p>لم يتم تحديد فستان. الرجاء العودة لصفحة النتائج واختيار فستان.</p>';
    }
});