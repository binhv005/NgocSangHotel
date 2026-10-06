import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import RoomList from './components/RoomList';
import WhyChooseUs from './components/WhyChooseUs';
import TravelGuide from './components/TravelGuide';
import Gallery from './components/Gallery';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import TravelGuideModal from './components/TravelGuideModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';
import { galleryImages } from './data/hotelData';

export default function App() {
  // Always scroll to top on page load / reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Scroll reveal observer & parallax controller
  useEffect(() => {
    // 1. Tag target elements across all sections with tailored animations
    const setupRevealTargets = () => {
      // 1. About section: Blur-to-Clear + Pop Scale + Image Card Reveal
      document.querySelectorAll('.about-content > .section-title, .about-content > .section-desc, .about-cta').forEach(el => {
        el.classList.add('reveal-blur-up');
      });
      document.querySelectorAll('.about-image-wrap').forEach(el => {
        el.classList.add('reveal-image-card');
      });
      document.querySelectorAll('.about-feature-item').forEach((el, i) => {
        el.classList.add('reveal-pop-scale', `delay-${i + 1}`);
      });

      // 2. Rooms section: Fade Down Header + 3D Tilt-Up Cards Stagger
      document.querySelectorAll('.rooms-section .section-header-flex, .rooms-section .section-title').forEach(el => {
        el.classList.add('reveal-fade-down');
      });
      document.querySelectorAll('.rooms-grid > .room-card').forEach((el, i) => {
        el.classList.add('reveal-card-tilt', `delay-${(i % 3) + 1}`);
      });

      // 3. Amenities section: Slide Left Header + Slide Right Quote + Pop-Scale 5 Cards
      document.querySelectorAll('.amenities-header').forEach(el => {
        el.classList.add('reveal-slide-left');
      });
      document.querySelectorAll('.amenities-quote-wrap').forEach(el => {
        el.classList.add('reveal-slide-right');
      });
      document.querySelectorAll('.amenities-grid > .amenity-card').forEach((el, i) => {
        el.classList.add('reveal-pop-scale', `delay-${(i % 5) + 1}`);
      });

      // 4. Why choose us section: Slide Left Info + Slide Right 4 Cards Stagger
      document.querySelectorAll('.why-left').forEach(el => {
        el.classList.add('reveal-slide-left');
      });
      document.querySelectorAll('.why-cards > .why-card').forEach((el, i) => {
        el.classList.add('reveal-slide-right', `delay-${(i % 4) + 1}`);
      });

      // 5. Experience / Travel guide section: Fade Up Header + Blur-Up Cards Stagger
      document.querySelectorAll('.experience-section .section-header-flex').forEach(el => {
        el.classList.add('reveal-fade-up');
      });
      document.querySelectorAll('.experience-grid > .exp-card').forEach((el, i) => {
        el.classList.add('reveal-blur-up', `delay-${(i % 3) + 1}`);
      });

      // 6. Gallery section: Slide Left Info + Zoom-In Cards Stagger
      document.querySelectorAll('.gallery-info-block').forEach(el => {
        el.classList.add('reveal-slide-left');
      });
      document.querySelectorAll('.gallery-card').forEach((el, i) => {
        el.classList.add('reveal-zoom-glow', `delay-${(i % 4) + 1}`);
      });

      // 7. CTA Split section: Slide Left Photo + Slide Right Form
      document.querySelectorAll('.cta-split-left').forEach(el => {
        el.classList.add('reveal-slide-left');
      });
      document.querySelectorAll('.cta-split-right').forEach(el => {
        el.classList.add('reveal-slide-right');
      });

      // 8. Footer columns: Smooth Fade Up Stagger
      document.querySelectorAll('.footer-col').forEach((el, i) => {
        el.classList.add('reveal-fade-up', `delay-${(i % 4) + 1}`);
      });

      // Tag background images for parallax
      document.querySelectorAll('.hero-img, .amenities-bg-img, .why-bg-img').forEach(el => {
        el.classList.add('parallax-bg');
      });
    };

    setupRevealTargets();

    const selector = '.reveal-fade-up, .reveal-fade-down, .reveal-slide-left, .reveal-slide-right, .reveal-blur-up, .reveal-pop-scale, .reveal-card-tilt, .reveal-zoom-glow, .reveal-image-card, .reveal-item, .reveal-item-left, .reveal-item-right, .reveal-item-zoom';

    const checkReveals = (initialLoad = false) => {
      const windowHeight = window.innerHeight;
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('revealed')) {
          const rect = el.getBoundingClientRect();
          // On initial load, only reveal elements in the top 70% of screen
          // On scroll, reveal as soon as element enters the bottom 12% of screen
          const triggerLine = initialLoad ? windowHeight * 0.7 : windowHeight * 0.88;
          if (rect.top <= triggerLine && rect.bottom >= 0) {
            el.classList.add('revealed');
          }
        }
      });
    };

    // Parallax controller
    let ticking = false;
    const handleParallax = () => {
      if (typeof window !== 'undefined' && window.innerWidth > 768) {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        // Hero background parallax
        const heroImg = document.querySelector('.hero-img');
        if (heroImg && scrolled < window.innerHeight) {
          const heroOffset = scrolled * 0.15;
          heroImg.style.transform = `translate3d(0, ${heroOffset}px, 0)`;
        }

        // Amenities background parallax
        const amenitiesSec = document.getElementById('amenities');
        const amenitiesBg = document.querySelector('.amenities-bg-img');
        if (amenitiesSec && amenitiesBg) {
          const rect = amenitiesSec.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.08;
            amenitiesBg.style.transform = `translate3d(0, ${offset - 25}px, 0) scale(1.06)`;
          }
        }

        // Why Choose Us background parallax
        const whySec = document.getElementById('why-us');
        const whyBg = document.querySelector('.why-bg-img');
        if (whySec && whyBg) {
          const rect = whySec.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.08;
            whyBg.style.transform = `translate3d(0, ${offset - 25}px, 0) scale(1.06)`;
          }
        }
      }
    };

    // 2. Setup IntersectionObserver
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      const allRevealElements = document.querySelectorAll(selector);
      allRevealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });
    }

    // 3. Initial check & Scroll listener
    checkReveals(true);
    handleParallax();

    const onScroll = () => {
      checkReveals(false);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Toast state
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleOpenBooking = (roomName = '') => {
    setBookingInitialData({ roomType: roomName });
    setBookingModalOpen(true);
  };

  const handleQuickSearch = (searchParams) => {
    if (searchParams.roomType !== 'all') {
      const typeMap = {
        deluxe: 'Phòng Deluxe',
        superior: 'Phòng Superior',
        family: 'Phòng Family'
      };
      setBookingInitialData({
        roomType: typeMap[searchParams.roomType] || '',
        checkIn: searchParams.checkIn,
        checkOut: searchParams.checkOut,
        guests: `${searchParams.adults + searchParams.children} Khách`
      });
      setBookingModalOpen(true);
    } else {
      const roomsEl = document.getElementById('rooms');
      if (roomsEl) {
        roomsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCallClick = (e, phoneNumber) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          showToast(`Đã sao chép số Hotline: ${phoneNumber}`);
        });
      } else {
        prompt('Số điện thoại liên hệ:', phoneNumber);
      }
    }
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return galleryImages.length - 1;
      if (nextIndex >= galleryImages.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div className="app-root">
      {/* 1. Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero & Quick Booking Bar */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onSearchBooking={handleQuickSearch}
        />

        {/* 3. About Section */}
        <About />

        {/* 4. Rooms Section */}
        <RoomList
          onSelectDetail={(room) => setSelectedRoomDetail(room)}
          onBook={(roomName) => handleOpenBooking(roomName)}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Travel Guide */}
        <TravelGuide
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 8. Gallery */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 9. Booking CTA Banner */}
        <BookingCTA
          onOpenBooking={() => handleOpenBooking()}
          onCallClick={handleCallClick}
          onShowToast={showToast}
        />
      </main>

      {/* 10. Footer & Contact */}
      <Footer onCallClick={handleCallClick} />

      {/* 11. Floating Actions (Call, Zalo, Messenger, Back to Top) */}
      <FloatingActions onCallClick={handleCallClick} />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
        onShowToast={showToast}
      />

      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookRoom={(roomName) => handleOpenBooking(roomName)}
      />

      <TravelGuideModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBook={() => handleOpenBooking()}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} isVisible={toastVisible} />
    </div>
  );
}
