* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-weight: 700;
}

/* Category Filters */
.filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 10px 25px;
    border: none;
    background: #f0f0f0;
    color: #555;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.filter-btn:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.filter-btn.active {
    background: #667eea;
    color: white;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Gallery Grid */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 10px;
}

.gallery-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    aspect-ratio: 1 / 1;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
}

.gallery-item:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Overlay */
.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.4s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.gallery-item:hover .overlay {
    transform: translateY(0);
}

.overlay .title {
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
}

.overlay .expand-icon {
    color: white;
    font-size: 1.2rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.overlay .expand-icon:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(90deg);
}

/* Hide items by category */
.gallery-item.hide {
    display: none;
}

/* Lightbox */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.lightbox.active {
    display: flex;
}

.lightbox-img {
    max-width: 85%;
    max-height: 80%;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.lightbox-caption {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 30px;
    border-radius: 10px;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1001;
}

.close-btn:hover {
    transform: rotate(90deg);
    color: #667eea;
}

.prev-btn, .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transition: all 0.3s ease;
    user-select: none;
    z-index: 1001;
}

.prev-btn {
    left: 20px;
}

.next-btn {
    right: 20px;
}

.prev-btn:hover, .next-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #667eea;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }

    h1 {
        font-size: 2rem;
    }

    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
    }

    .filter-btn {
        padding: 8px 18px;
        font-size: 0.85rem;
    }

    .lightbox-img {
        max-width: 95%;
        max-height: 70%;
    }

    .prev-btn, .next-btn {
        font-size: 2rem;
        padding: 5px 10px;
    }

    .prev-btn {
        left: 10px;
    }

    .next-btn {
        right: 10px;
    }

    .close-btn {
        top: 15px;
        right: 20px;
        font-size: 2.5rem;
    }

    .lightbox-caption {
        font-size: 1rem;
        padding: 8px 20px;
        bottom: 30px;
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
    }

    h1 {
        font-size: 1.5rem;
    }

    .overlay .title {
        font-size: 0.9rem;
    }
}