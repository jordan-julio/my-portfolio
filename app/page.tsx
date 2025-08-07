'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { 
  Menu, 
  X,
  Mail, 
  ExternalLink, 
  ChevronDown,
  User,
  Code,
  Award,
  Send,
  Phone,
  MapPin,
  Calendar,
  Download,
  Briefcase,
  GraduationCap,
  Shield,
  Database,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Professional Loading Screen
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 mx-auto mb-6 border-3 border-blue-500 border-t-transparent rounded-full"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-medium text-white tracking-wide"
        >
          JORDAN JULIO JAP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm mt-2"
        >
          Computer Science Graduate
        </motion.p>
      </div>
    </motion.div>
  );

  // Professional Navigation
  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-white shadow-sm border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">JJ</span>
            </div>
            <span className="text-slate-900 font-semibold text-lg">Jordan Julio Jap</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -1 }}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              className="ml-4 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );

  // Professional Hero Section
  const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-blue-600 font-medium text-lg">Hello, I&apos;m</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
                Jordan Julio Jap
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
                Computer Science Graduate, Full-Stack Developer & Cyber Security Enthusiast
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Passionate about cybersecurity and full-stack development with hands-on experience 
              in building scalable web applications. Graduated with distinction in Computer Science at UNSW.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              <span className="text-slate-500 font-medium">Connect:</span>
              {[
                { icon: Github, href: 'https://github.com/jordan-julio', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jordan-julio-jap-370331189', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jordan.julio.jap@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={'/me.jpeg'} alt="Jordan Julio" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </motion.div>
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Experience Section
  const ExperienceSection = () => {
    const experiences = [
      {
        title: 'Full Stack Developer',
        company: 'Voyage.io',
        period: 'Jan 2024 - Dec 2024',
        description: 'Developed and maintained web applications using NextJS, Express, PostgreSQL, AWS, and Docker. Focused on performance optimization, user experience, and developing more features.',
        achievements: ['Improved application load time by 30%', 'Implemented responsive design and new features', 'Collaborated with cross-functional teams']
      },
      {
        title: 'Full Stack Developer Intern',
        company: 'Meyd.it',
        period: '2023 - 2023',
        description: 'Developed a complete fashion e-commerce platform using NextJS, AdonisJS, and PostgreSQL. Implemented user authentication, payment processing, and inventory management.',
        achievements: ['Built responsive frontend with NextJS', 'Designed RESTful APIs', 'Optimized database queries']
      },
      {
        title: 'Web Developer Intern',
        company: 'Siam Savvy',
        period: '2023',
        description: 'Created a comprehensive tour and travel website using Wix platform. Focused on user experience and mobile responsiveness.',
        achievements: ['Delivered project 2 weeks ahead of schedule', 'Improved site performance by 40%', 'Implemented booking system']
      }
    ];

    return (
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-slate-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Skills Section
  const SkillsSection = () => {
    const skillCategories = [
      {
        title: 'Frontend Development',
        icon: Globe,
        skills: ['React', 'NextJS', 'TypeScript', 'Tailwind CSS', 'Material-UI']
      },
      {
        title: 'Backend Development',
        icon: Database,
        skills: ['Node.js', 'AdonisJS', 'Laravel', 'PostgreSQL', 'RESTful APIs']
      },
      {
        title: 'Cybersecurity',
        icon: Shield,
        skills: ['Network Security', 'Vulnerability Assessment', 'Security Auditing', 'Penetration Testing']
      },
      {
        title: 'Programming Languages',
        icon: Code,
        skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C']
      }
    ];

    return (
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  interface ImageSlideshowProps {
    images: string[];
    title: string;
  }

  // Beautiful Framer Motion Image Slideshow
  const ImageSlideshow = ({ images, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImage = () => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setDirection(-1);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
      setDirection(index > currentImageIndex ? 1 : -1);
      setCurrentImageIndex(index);
    };

    useEffect(() => {
      if (images && images.length > 1) {
        const interval = setInterval(() => {
          setDirection(1);
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }
    }, [images?.length]);

    // Animation variants
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9
      })
    };

    const transition = {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 }
    };

    if (!images || images.length === 0) {
      return (
        <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <Code className="w-16 h-16 text-slate-500" />
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <motion.div 
          className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
            <Code className="w-16 h-16 text-slate-500" />
          </div>
        </motion.div>
      );
    }

    return (
      <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
          >
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
              <Code className="w-16 h-16 text-slate-500" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <motion.button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        <motion.button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentImageIndex ? 1.2 : 1,
                backgroundColor: index === currentImageIndex ? '#ffffff' : 'rgba(255,255,255,0.5)'
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
    );
  };

  const ProjectsSection = () => {
    const projects = [
      {
        images: ['/meydit.png'],
        title: 'Meyd.it Fashion Platform',
        description: 'Complete e-commerce solution for fashion startup with user authentication, payment processing, and inventory management.',
        tech: ['NextJS', 'AdonisJS', 'PostgreSQL', 'Stripe API'],
        link: 'https://meyd.it',
        category: 'Full-Stack Development'
      },
      {
        images: ['/SiamWeb.png'],
        title: 'Siam Savvy Tour & Travel',
        description: 'Comprehensive tour and travel website with booking functionality and responsive design.',
        tech: ['Wix', 'JavaScript', 'CSS'],
        link: 'https://info618621.wixsite.com/my-site',
        category: 'UI Design with Wix'
      },
      {
        images: ['/inventoryweb.png'],
        title: 'Inventory Management System',
        description: 'Comprehensive inventory system with POS functionality, real-time reporting, and multi-user support.',
        tech: ['Laravel', 'MySQL', 'PHP', 'Bootstrap'],
        link: 'https://inventorysystem.btc-board.com/',
        category: 'Web Application PWA'
      },
      {
        images: ['/portfolio.png'],
        title: 'Portfolio Website',
        description: 'Modern, responsive portfolio website showcasing professional experience and technical skills.',
        tech: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://jj-portfolio.vercel.app/',
        category: 'Frontend Development'
      },
      {
        images: ['/voyage-1.png', '/voyage-2.png', '/voyage-3.png'],
        title: 'Voyage.io',
        description: 'A platform to bridge the gap between international students and sector stakeholders worldwide.',
        tech: ['Confidential'],
        link: 'https://voyage.io',
        category: 'Web Application'
      },
      {
        images: ['/kerjakit.png'],
        title: 'Freelance Marketplace (Coming Soon)',
        description: 'Freelance marketplace connecting clients with skilled professionals for various projects.',
        tech: ['Confidential'],
        link: '#',
        category: ''
      },
      {
        images: ['/bgcalendar.png'],
        title: 'Internal Calendar System with PWA and Notifications',
        description: 'A comprehensive calendar system with offline support and real-time notifications.',
        tech: ['NextJS with TS', 'Supabase', 'Cron Jobs', 'Firebase Cloud Messaging'],
        link: '#',
        category: 'Web Application PWA'
      }
    ];

    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative">
                  <ImageSlideshow images={project.images} title={project.title} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 text-slate-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-slate-400 font-semibold">
                      Coming Soon/Confidential
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return (
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities and exciting projects. 
              Let&apos;s connect and explore how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600">jordan.julio.jap@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Location</h4>
                      <p className="text-slate-600">Sydney, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Availability</h4>
                      <p className="text-slate-600">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/jordan-julio', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/jordan-julio-jap-370331189', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:jordan.julio.jap@gmail.com', label: 'Email' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Education & Achievements Section
  const EducationSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">University of New South Wales</p>
                  <p className="text-slate-500 mb-4">2022 - 2024</p>
                  <p className="text-slate-600 leading-relaxed">
                    Specializing in cybersecurity and software engineering. Relevant coursework includes 
                    data structures, algorithms, network security, and database systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Certifications & Awards</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">IYCL Mekari Competition</h4>
                  <p className="text-slate-600 text-sm">Achieved Rank #23 in competitive programming</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Star className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Silver Standard IAYP</h4>
                  <p className="text-slate-600 text-sm">International Award for Young People</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Dean&apos;s List</h4>
                  <p className="text-slate-600 text-sm">Academic excellence recognition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">JJ</span>
            </div>
            <span className="text-xl font-semibold">Jordan Julio Jap</span>
          </div>
          <p className="text-slate-400 mb-6">
            Computer Science Graduate, Full-Stack Developer & Cyber Security Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: 'https://github.com/jordan-julio', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jordan-julio-jap-370331189', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:jordan.julio.jap@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Jordan Julio Jap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;