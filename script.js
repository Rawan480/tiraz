// ========== قاعدة البيانات العامة ==========
const dressDatabase = [
    {
        id: 1,
        name: "فستان موف أنيق",
        image_url: "img/dresses/dress1.jpg",
        suitable_body_shapes: ["الساعة الرملية", "المستطيل"],
        suitable_undertones: ["cool", "neutral"]
    },
    {
        id: 6,
        name: "فستان أسود كلاسيك",
        image_url: "img/dresses/dress6.jpg",
        suitable_body_shapes: ["الساعة الرملية", "المثلث المقلوب", "الكمثري", "المستطيل", "التفاحة"],
        suitable_undertones: ["cool", "warm", "neutral"]
    }
];

const bodyShapeImages = {
    "الساعة الرملية": "img/shapes/glass.jpg", 
    "الكمثري": "img/shapes/camthah.jpg",
    "المثلث المقلوب": "img/shapes/mothl.jpg",
    "التفاحة": "img/shapes/apple.jpg",
    "المستطيل": "img/shapes/rec.jpg"
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
            const tolerance = 5;
            if (Math.abs(shoulders - hips) <= tolerance && bust >= (waist * 0.75)) {
                return "الساعة الرملية";
            } else if (hips > shoulders && hips > bust) {
                return "الكمثري";
            } else if (shoulders > hips && bust > hips) {
                return "المثلث المقلوب";
            } else if (bust >= (waist * 1.05) && waist >= hips) {
                return "التفاحة";
            } else if (Math.abs(shoulders - hips) <= tolerance && Math.abs(bust - hips) <= tolerance && Math.abs(waist - (shoulders * 0.75)) > tolerance) {
                return "المستطيل";
            } else {
                return "غير معروف";
            }
        }

        document.getElementById('measurements-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('user-name').value;
            const height = parseInt(document.getElementById('height').value);
            const weight = parseInt(document.getElementById('weight').value);
            const shoulders = parseInt(document.getElementById('shoulders').value);
            const bust = parseInt(document.getElementById('bust').value);
            const waist = parseInt(document.getElementById('waist').value);
            const hips = parseInt(document.getElementById('hips').value);
            const undertone = document.getElementById('undertone').value;
            const skinTone = document.getElementById('skin-tone').value;

            const bodyShape = calculateBodyShape(shoulders, bust, waist, hips);

            const resultUrl = `result.html?name=${encodeURIComponent(name)}&shape=${encodeURIComponent(bodyShape)}&undertone=${encodeURIComponent(undertone)}&skin-tone=${encodeURIComponent(skinTone)}`;
            window.location.href = resultUrl;
        });
    }

    // ----------- صفحة النتيجة (result.html) -----------
    if (document.getElementById('result-container')) {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const undertone = params.get('undertone');
        const shape = params.get('shape');
        const skinTone = params.get('skin-tone');

        document.getElementById('welcome-message').textContent = `أهلاً بكِ، ${name}!`;
        document.getElementById('body-shape-result').textContent = shape;
        document.getElementById('body-shape-image').src = bodyShapeImages[shape] || '';
        document.getElementById('body-shape-image').alt = `شكل الجسم: ${shape}`;

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
        } else {
            colorContainer.innerHTML = '<p>لم يتم العثور على ألوان موصى بها لهذا الأندرتون.</p>';
        }

        const dressContainer = document.getElementById('dress-gallery-container');
        dressContainer.innerHTML = '';
        const recommendedDresses = dressDatabase.filter(dress =>
            dress.suitable_body_shapes.includes(shape) &&
            dress.suitable_undertones.includes(undertone)
        );

        if (recommendedDresses.length > 0) {
            recommendedDresses.forEach(dress => {
                const img = document.createElement('img');
                img.src = dress.image_url;
                img.alt = dress.name;
                dressContainer.appendChild(img);
            });
        } else {
            dressContainer.innerHTML = '<p>عذرًا، لم نجد فساتين تطابق اختياراتك تمامًا حاليًا. نقترح تجربة اختيارات أخرى.</p>';
        }

        // عرض الأندرتون بالنص
        const undertoneText = document.getElementById('undertone-result');
        if (undertoneText) undertoneText.textContent = `نوع الأندرتون لديك: ${undertone}`;
    }
});
