$(document).ready(function() {
    let current = 0;
    const testimonials = $('#testimonial-carousel .testimonial');
    testimonials.hide().eq(current).show();

    setInterval(() => {
        testimonials.eq(current).fadeOut(500);
        current = (current + 1) % testimonials.length;
        testimonials.eq(current).fadeIn(500);
    }, 4000);
});