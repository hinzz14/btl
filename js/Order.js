function changeImage(src) {
    var image = document.getElementById('image');
    
    // Tạo hiệu ứng mờ dần
    image.style.opacity = 0;

    // Thay đổi hình ảnh sau khi hiệu ứng hoàn tất
    setTimeout(function() {
        image.src = src;
        image.style.opacity = 1;
    }, 500); // Đảm bảo thời gian này khớp với thời gian chuyển đổi trong CSS
}
