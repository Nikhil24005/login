// script.js
document.addEventListener('DOMContentLoaded', function() {
    // new Swiper('.testimonial-swiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     autoplay: {
    //         delay: 5000,
    //     },
    // });

    // Team Swiper
    new Swiper('.team-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    // Faculty Swiper
    new Swiper('.faculty-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Dynamically add testimonials
    // const testimonials = [
    //     { text: "This program changed my life. The guidance from mentors was invaluable.", author: "Jane Doe", position: "Software Engineer at Google" },
    //     { text: "I gained so much confidence and knowledge through this mentorship program.", author: "John Smith", position: "Data Scientist at Microsoft" },
    //     { text: "The Mentor-Mentee program helped me navigate my career path with clarity.", author: "Alice Johnson", position: "Product Manager at Amazon" }
    // ];

    // const testimonialWrapper = document.querySelector('.testimonial-swiper .swiper-wrapper');
    // testimonials.forEach(testimonial => {
    //     const slide = document.createElement('div');
    //     slide.className = 'swiper-slide';
    //     slide.innerHTML = `
    //         <blockquote>
    //             <p>${testimonial.text}</p>
    //             <footer>
    //                 <strong>${testimonial.author}</strong><br>
    //                 ${testimonial.position}
    //             </footer>
    //         </blockquote>
    //     `;
    //     testimonialWrapper.appendChild(slide);
    // });

    // Dynamically add team members and faculty
    const teamMembers = [
        { name: "Team Member 1", position: "Developer" },
        { name: "Team Member 2", position: "Designer" },
        { name: "Team Member 3", position: "Project Manager" },
        { name: "Team Member 4", position: "QA Specialist" },
        { name: "Team Member 1", position: "Developer" },
        { name: "Team Member 2", position: "Designer" },
        { name: "Team Member 3", position: "Project Manager" },
        { name: "Team Member 4", position: "QA Specialist" },
        { name: "Team Member 1", position: "Developer" },
        { name: "Team Member 2", position: "Designer" },
        { name: "Team Member 3", position: "Project Manager" },
        { name: "Team Member 4", position: "QA Specialist" },
        { name: "Team Member 1", position: "Developer" },
        { name: "Team Member 2", position: "Designer" },
        { name: "Team Member 3", position: "Project Manager" },
        { name: "Team Member 4", position: "QA Specialist" }
    ];

    const facultyMembers = [
        { name: "Prof. Smith", position: "Computer Science" },
        { name: "Dr. Johnson", position: "Data Science" },
        { name: "Prof. Williams", position: "Software Engineering" }
    ];

    function addMembers(members, wrapperSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        members.forEach(member => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="card">
                    <h3>${member.name}</h3>
                    <p>${member.position}</p>
                </div>
            `;
            wrapper.appendChild(slide);
        });
    }

    addMembers(teamMembers, '.team-swiper .swiper-wrapper');
    addMembers(facultyMembers, '.faculty-swiper .swiper-wrapper');
});