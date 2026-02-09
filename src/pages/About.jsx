import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen, Star, Calendar, Trophy, Target, Heart, CheckCircle, Quote, MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const qualifications = [
  { degree: 'M.Sc. in Chemistry', institution: 'Delhi University', year: '2010' },
  { degree: 'B.Ed. in Science Education', institution: 'IGNOU', year: '2012' },
  { degree: 'Ph.D. in Organic Chemistry', institution: 'IIT Delhi', year: '2015' },
  { degree: 'NET-JRF Qualified', institution: 'UGC', year: '2011' },
];
const achievements = [
  { icon: Trophy, value: '50+', label: 'IIT-JEE Selections' },
  { icon: Users, value: '50,000+', label: 'Students Taught' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Calendar, value: '12+', label: 'Years Experience' },
  { icon: Award, value: '100%', label: 'Board Results' },
  { icon: Target, value: '200+', label: 'NEET Selections' },
];
const timeline = [
  {
    year: '2012',
    title: 'Started Teaching Career',
    description: 'Began as a chemistry teacher at a prestigious coaching institute in Delhi.',
  },
  {
    year: '2015',
    title: 'Completed Ph.D.',
    description: 'Earned doctorate in Organic Chemistry from IIT Delhi with distinction.',
  },
  {
    year: '2017',
    title: 'Founded Chemistry Classes',
    description: 'Started Ruchi Upadhyay Chemistry Classes with a vision to make chemistry accessible.',
  },
  {
    year: '2020',
    title: 'Launched Online Platform',
    description: 'Expanded reach through online courses, reaching students across India.',
  },
  {
    year: '2024',
    title: '50,000+ Students',
    description: 'Milestone of teaching over 50,000 students with exceptional results.',
  },
];
const teachingPhilosophy = [
  {
    icon: Heart,
    title: 'Passion for Teaching',
    description: 'Every concept is taught with enthusiasm and dedication to make learning enjoyable.',
  },
  {
    icon: Target,
    title: 'Result-Oriented',
    description: 'Focused approach on exam preparation with proven strategies for success.',
  },
  {
    icon: Users,
    title: 'Student-Centric',
    description: 'Individual attention to every student, addressing their unique learning needs.',
  },
  {
    icon: BookOpen,
    title: 'Conceptual Clarity',
    description: 'Building strong fundamentals that help students tackle any problem with confidence.',
  },
];
const About = () => {
  return (<div className="min-h-screen bg-background">
    <Navbar />

    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary mb-4 md:mb-6 text-sm md:text-base">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Meet Your Instructor</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-4">
                Prof. Ruchi <span className="text-primary">Upadhyay</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2">
                Ph.D. (IIT Delhi) | M.Sc. Chemistry | B.Ed.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6">
                12+ Years of Teaching Excellence in Chemistry
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/courses" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 md:h-14">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-14">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-xs md:text-sm">Profile Photo</p>
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -right-2 sm:-right-4 top-4 sm:top-8 bg-card px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-warning" />
                    <span className="font-semibold text-card-foreground text-xs sm:text-sm">50+ IIT</span>
                  </div>
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute -left-2 sm:-left-4 bottom-4 sm:bottom-8 bg-card px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
                    <span className="font-semibold text-card-foreground text-xs sm:text-sm">4.9/5</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {achievements.map((stat, index) => (<motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-lg text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-2xl font-heading font-bold text-card-foreground">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Bio */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="w-4 h-4" />
                <span className="font-medium">About Me</span>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Passionate About Making Chemistry Simple
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
                <p>
                  With over 12 years of dedicated teaching experience, I have helped thousands of students
                  achieve their dreams of cracking competitive exams like IIT-JEE and NEET. My journey in
                  chemistry began with a deep fascination for understanding how the world works at a molecular level.
                </p>
                <p>
                  After completing my Ph.D. from IIT Delhi, I realized that my true calling was not just
                  research, but sharing my knowledge with the next generation. I believe that every student
                  can excel in chemistry with the right guidance and approach.
                </p>
                <p>
                  My teaching methodology focuses on building strong conceptual foundations rather than
                  rote memorization. I use real-world examples, interactive problem-solving sessions, and
                  personalized attention to ensure that every student understands and enjoys chemistry.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-primary/5 rounded-xl md:rounded-2xl border-l-4 border-primary">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3" />
                <p className="text-base md:text-lg italic text-foreground">
                  "Chemistry is not just about formulas and reactions. It's about understanding the
                  beautiful patterns that govern our universe."
                </p>
                <p className="text-xs md:text-sm text-primary mt-2 font-medium">— Dr. Ruchi Upadhyay</p>
              </div>
            </motion.div>

            {/* Qualifications */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
                <Award className="w-4 h-4" />
                <span className="font-medium">Qualifications</span>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Academic Excellence
              </h2>

              <div className="space-y-4">
                {qualifications.map((qual, index) => (<motion.div key={qual.degree} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl p-5 border border-border shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{qual.degree}</h4>
                      <p className="text-sm text-muted-foreground">{qual.institution}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {qual.year}
                      </span>
                    </div>
                  </div>
                </motion.div>))}
              </div>

              {/* Location */}
              <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-card-foreground">Teaching Location</h4>
                </div>
                <p className="text-muted-foreground">
                  Based in Delhi NCR with online classes available for students across India and abroad.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-8 md:py-12 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Teaching Philosophy</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
              My Approach to Teaching
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every student deserves the best education, and I ensure that through my unique teaching methods
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {teachingPhilosophy.map((item, index) => (<motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border border-border shadow-md text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-heading font-semibold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </motion.div>))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">My Journey</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (<motion.div key={item.year} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative pl-6 md:pl-8 pb-6 md:pb-8 border-l-2 border-primary/30 last:border-l-0 last:pb-0">
              <div className="absolute -left-2.5 md:-left-3 top-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
              </div>
              <div className="bg-card rounded-xl p-4 md:p-5 border border-border shadow-md ml-3 md:ml-4">
                <span className="inline-block px-2.5 md:px-3 py-0.5 md:py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-2">
                  {item.year}
                </span>
                <h4 className="text-base md:text-lg font-semibold text-card-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
              </div>
            </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Ready to Start Your Chemistry Journey?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Join thousands of successful students and experience the difference of learning with Dr. Ruchi Upadhyay
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
              <Link to="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-14">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-14">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
  </div>);
};
export default About;
