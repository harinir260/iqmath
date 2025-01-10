// document.addEventListener('DOMContentLoaded', function() {
//     const courses = [
//         {
//             title: "Full Stack Development",
//             description: "Learn how to build complete web applications with front-end and back-end technologies.",
//             image: "develop-full-stack-application-in-angular-and-springboot.png",
//             link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
//         },
//         {
//             title: "Cloud Computing Fundamentals",
//             description: "Understand cloud architecture, services, and deployment models.",
//             image: "cloud.jpeg",
//             link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
//         },
//         {
//             title: "Data Science with Python",
//             description: "Master data analysis, visualization, and machine learning using Python.",
//             image: "python.jpg",
//             link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
//         },
//         {
//             title: "Cybersecurity Essentials",
//             description: "Learn the basics of cybersecurity, ethical hacking, and protecting systems from cyber threats.",
//             image: "cybersecurity.jpeg",
//             link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
//         }
//     ];

//     const coursesList = document.getElementById('courses-list');

//     courses.forEach(course => {
//         const courseCard = document.createElement('div');
//         courseCard.classList.add('course-card');

//         courseCard.innerHTML = `
//             <img src="${course.image}" alt="${course.title}" class="course-image">
//             <div class="course-info">
//                 <h3 class="course-title">${course.title}</h3>
//                 <p class="course-description">${course.description}</p>
//                 <a href="${course.link}" class="course-button">Enroll Now</a>
//             </div>
//         `;

//         coursesList.appendChild(courseCard);
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        {
            title: "Full Stack Development",
            description: "Learn how to build complete web applications with front-end and back-end technologies.",
            image: "develop-full-stack-application-in-angular-and-springboot.png",
            price: 4999, // Price in INR
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
        },
        {
            title: "Cloud Computing Fundamentals",
            description: "Understand cloud architecture, services, and deployment models.",
            image: "cloud.jpeg",
            price: 5999,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
        },
        {
            title: "Data Science with Python",
            description: "Master data analysis, visualization, and machine learning using Python.",
            image: "python.jpg",
            price: 6999,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
        },
        {
            title: "Cybersecurity Essentials",
            description: "Learn the basics of cybersecurity, ethical hacking, and protecting systems from cyber threats.",
            image: "cybersecurity.jpeg",
            price: 7999,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeqh9cZdcJVPhtZ6iFkSNCNBa-Rs1riU3e6aDFa6zBRDRDAjg/viewform"
        }
    ];

    const coursesList = document.getElementById('courses-list');

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <button class="course-button" data-price="${course.price}" data-title="${course.title}">Enroll Now - ₹${course.price}</button>
            </div>
        `;

        coursesList.appendChild(courseCard);
    });

    // Handle Razorpay Payment on Button Click
    document.querySelectorAll('.course-button').forEach(button => {
        button.addEventListener('click', function () {
            const price = this.getAttribute('data-price');
            const title = this.getAttribute('data-title');

            const options = {
                key: "rzp_test_aIfnpuWEudWnID", // Replace with your Razorpay Key ID
                amount: price * 100, // Amount in paise
                currency: "INR",
                name: "IQMath Technologies",
                description: `Payment for ${title}`,
                image: "your-logo-url.png", // Optional: Add your company logo
                handler: function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    // Optionally send payment details to your server
                },
                prefill: {
                    name: "User Name", // Replace with logged-in user data
                    email: "user@example.com", // Replace with logged-in user data
                    contact: "9999999999", // Replace with logged-in user data
                },
                theme: {
                    color: "#222",
                },
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    });
});
