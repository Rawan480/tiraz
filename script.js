// ========== قاعدة البيانات العامة ==========
const dressDatabase = [
    // فساتين الساعة الرملية
    { id: 1, name: "فستان أزرق ملكي بقصة الحورية", image_url: "img/dresses/d1.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["cool"], price: 950 },
    { id: 2, name: "فستان أحمر ناري بخصر محدد", image_url: "img/dresses/d2.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["warm"], price: 880 },
    { id: 3, name: "فستان رمادي أنيق ملتف", image_url: "img/dresses/d3.jpg", suitable_body_shapes: ["الساعة الرملية"], suitable_undertones: ["neutral"], price: 790 },

    // فساتين الكمثري
    { id: 4, name: "فستان بقصة A-line وأكمام منفوخة", image_url: "img/dresses/d4.jpg", suitable_body_shapes: ["الكمثري"], suitable_undertones: ["cool"], price: 720 },
    { id: 5, name: "فستان بقصة Empire بلون الخوخ", image_url: "img/dresses/d5.jpg", suitable_body_shapes: ["الكمثري"], suitable_undertones: ["warm"], price: 810 },
    { id: 6, name: "فستان أسود كلاسيكي بتنورة واسعة", image_url: "img/dresses/d6.jpg", suitable_body_shapes: ["الكمثري", "التفاحة"], suitable_undertones: ["cool", "warm", "neutral"], price: 990 },

    // فساتين المثلث المقلوب
    { id: 7, name: "فستان وردي فاتح بتفاصيل عند الخصر", image_url: "img/dresses/d7.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["cool"], price: 750 },
    { id: 8, name: "فستان بياقة V عميقة ولون ترابي", image_url: "img/dresses/d8.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["warm"], price: 830 },
    { id: 9, name: "فستان بتنورة منفوشة ولون محايد", image_url: "img/dresses/d9.jpg", suitable_body_shapes: ["المثلث المقلوب"], suitable_undertones: ["neutral"], price: 910 },

    // فساتين التفاحة
    { id: 10, name: "فستان أخضر زمردي بقصة مستقيمة", image_url: "img/dresses/d10.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["cool"], price: 860 },
    { id: 11, name: "فستان برتقالي منقوش بقصة فضفاضة", image_url: "img/dresses/d11.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["warm"], price: 770 },
    { id: 12, name: "فستان شيفون بيج بكسرات ناعمة", image_url: "img/dresses/d12.jpg", suitable_body_shapes: ["التفاحة"], suitable_undertones: ["neutral"], price: 840 },

    // فساتين المستطيل
    { id: 13, name: "فستان بنفسجي بحزام لإضافة تحديد", image_url: "img/dresses/d13.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["cool"], price: 700 },
    { id: 14, name: "فستان ذهبي بطبقات متعددة", image_url: "img/dresses/d14.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["warm"], price: 920 },
    { id: 15, name: "فستان أبيض بكتف واحد", image_url: "img/dresses/d15.jpg", suitable_body_shapes: ["المستطيل"], suitable_undertones: ["neutral"], price: 890 }
];

const bodyShapeImages = {
    "الساعة الرملية": "img/shapes/glass.jpg", 
    "الكمثري": "img/shapes/camthah.jpg",
    "المثلث المقلوب": "img/shapes/mothl.jpg",
    "التفاحة": "img/shapes/apple.jpg",
    "المستطيل": "img/shapes/rec.jpg"
};

// ✅ قاعدة بيانات نصائح شكل الجسم
const bodyShapeAdvice = {
    "الساعة الرملية": "جسمك متوازن بشكل طبيعي. أبرزي جمال خصرك المحدد بالفساتين الملتفة والقصات التي تتبع منحنيات جسمك.",
    "الكمثري": "لتحقيق التوازن، اختاري فساتين تجذب الانتباه إلى الجزء العلوي من جسمك، مثل الفساتين ذات الياقات المميزة أو قصات A-line.",
    "المثلث المقلوب": "خففي من عرض كتفيكِ بإضافة حجم للجزء السفلي. الفساتين ذات التنانير الواسعة والمنفوشة مثالية لك.",
    "التفاحة": "أفضل خيار لكِ هي الفساتين ذات قصة Empire أو الفساتين الفضفاضة التي لا تركز على منطقة الخصر، لإعطاء إيحاء بالطول والنحافة.",
    "المستطيل": "مهمتك هي خلق منحنيات. اختاري الفساتين ذات الأحزمة، الكشكشة، أو الطبقات لإضافة حجم وتحديد لمظهرك."
};


const colorSwatches = {
    "cool": [ "img/colors/blue.jpeg", "img/colors/purple.png", "img/colors/green.png", "img/colors/pink.png" ],
    "warm": [ "img/colors/peach.png", "img/colors/orange.png", "img/colors/gold.png", "img/colors/brown.png" ],
    "neutral": [ "img/colors/gray.png", "img/colors/beige.png", "img/colors/white.png", "img/colors/black.png" ]
};

// ========== عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', function() {
    // ----------- صفحة النموذج (form.html) -----------
    if (document.getElementById('measurements-form')) {
        function populateSelect(elementId, start, end, unit) {
            const select = document.getElementById(elementId);
            if (!select) return;
            for (let i = start; i <= end; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `${i} ${unit}`;
                select.appendChild(option);
            }
        }

        populateSelect('height', 100, 200, 'سم');
        populateSelect('weight', 40, 180, 'كجم');
        populateSelect('shoulders', 60, 150, 'سم');
        populateSelect('bust', 60, 150, 'سم');
        populateSelect('waist', 50, 150, 'سم');
        populateSelect('hips', 60, 150, 'سم');

        function setupImageOptions(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            const hiddenInput = document.getElementById(containerId.replace('-options', ''));

            container.addEventListener('click', function(event) {
                const clickedImage = event.target.closest('.image-option');
                if (clickedImage) {
                    container.querySelectorAll('.image-option').forEach(img => {
                        img.classList.remove('selected');
                    });
                    clickedImage.classList.add('selected');
                    hiddenInput.value = clickedImage.dataset.value;
                }
            });
        }

        setupImageOptions('undertone-options');
        setupImageOptions('skin-tone-options');

        function calculateBodyShape(shoulders, bust, waist, hips) {
            const tolerance = 5; // نسبة التفاوت المسموح بها
            const shoulderHipsDiff = Math.abs(shoulders - hips);
            
            // المثلث المقلوب: أكتاف أعرض من الأرداف بشكل ملحوظ
            if (shoulders > hips + tolerance) {
                return "المثلث المقلوب";
            }
            // الكمثري: أرداف أعرض من الأكتاف بشكل ملحوظ
            else if (hips > shoulders + tolerance && hips > bust) {
                return "الكمثري";
            }
            // الساعة الرملية: أكتاف وأرداف متقاربة مع خصر محدد
            else if (shoulderHipsDiff <= tolerance && waist < shoulders * 0.75 && waist < hips * 0.75) {
                return "الساعة الرملية";
            }
             // التفاحة: الخصر أعرض أو مقارب للأكتاف والأرداف
            else if (waist >= shoulders || waist >= hips) {
                return "التفاحة";
            }
            // المستطيل: المقاسات الثلاثة (أكتاف، خصر، أرداف) متقاربة
            else if (shoulderHipsDiff <= tolerance && Math.abs(bust - hips) <= tolerance && waist > (shoulders * 0.75)) {
                return "المستطيل";
            }
             else {
                return "المستطيل"; // كحالة افتراضية إذا لم تتطابق الشروط الأخرى
            }
        }

        const form = document.getElementById('measurements-form');
        if(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const name = document.getElementById('user-name').value;
                const shoulders = parseInt(document.getElementById('shoulders').value);
                const bust = parseInt(document.getElementById('bust').value);
                const waist = parseInt(document.getElementById('waist').value);
                const hips = parseInt(document.getElementById('hips').value);
                const undertone = document.getElementById('undertone').value;
                const skinTone = document.getElementById('skin-tone').value;

                if (!undertone || !skinTone) {
                    alert("الرجاء اختيار الأندرتون ولون البشرة.");
                    return;
                }

                const bodyShape = calculateBodyShape(shoulders, bust, waist, hips);

                const resultUrl = `result.html?name=${encodeURIComponent(name)}&shape=${encodeURIComponent(bodyShape)}&undertone=${encodeURIComponent(undertone)}&skin-tone=${encodeURIComponent(skinTone)}`;
                window.location.href = resultUrl;
            });
        }
    }

    // ----------- صفحة النتيجة (result.html) -----------
    if (document.getElementById('result-container')) {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const undertone = params.get('undertone');
        const shape = params.get('shape');

        document.getElementById('welcome-message').textContent = `أهلاً بكِ، ${name}!`;
        document.getElementById('body-shape-result').textContent = shape;
        document.getElementById('body-shape-image').src = bodyShapeImages[shape] || '';
        document.getElementById('body-shape-image').alt = `شكل الجسم: ${shape}`;
        
        // ✅ عرض نصيحة شكل الجسم
        document.getElementById('body-shape-advice').textContent = bodyShapeAdvice[shape] || '';


        const undertoneMap = { cool: 'بارد', warm: 'دافئ', neutral: 'محايد'};
        document.getElementById('undertone-result').textContent = undertoneMap[undertone] || undertone;


        const colorContainer = document.getElementById('color-palette-container');
        const recommendedColors = colorSwatches[undertone] || [];
        colorContainer.innerHTML = '';
        if (recommendedColors.length > 0) {
            recommendedColors.forEach(colorSrc => {
                const img = document.createElement('img');
                img.src = colorSrc;
                img.classList.add('color-box');
                colorContainer.appendChild(img);
            });
        }

        const dressContainer = document.getElementById('dress-gallery-container');
        dressContainer.innerHTML = '';
        const recommendedDresses = dressDatabase.filter(dress =>
            dress.suitable_body_shapes.includes(shape) &&
            dress.suitable_undertones.includes(undertone)
        );

        if (recommendedDresses.length > 0) {
            recommendedDresses.forEach(dress => {
                // ✅ جعل الفساتين قابلة للنقر
                const link = document.createElement('a');
                link.href = `order.html?id=${dress.id}`;

                const dressItem = document.createElement('div');
                dressItem.className = 'dress-item';

                const img = document.createElement('img');
                img.src = dress.image_url;
                img.alt = dress.name;
                
                const nameDiv = document.createElement('div');
                nameDiv.className = 'dress-item-name';
                nameDiv.textContent = dress.name;

                dressItem.appendChild(img);
                dressItem.appendChild(nameDiv);
                link.appendChild(dressItem);
                dressContainer.appendChild(link);
            });
        } else {
            dressContainer.innerHTML = '<p>عذرًا، لم نجد فساتين تطابق اختياراتك تمامًا حاليًا. نقترح تجربة اختيارات أخرى.</p>';
        }
    }
});