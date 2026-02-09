import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn, User, ShoppingBag, Target, LogOut, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileDropdown from '@/components/layout/ProfileDropdown';
import { useAuth } from '@/contexts/AuthContext';
import { useIsAdmin } from '@/hooks/useAdmin';
import ruchiLogo from '@/assets/ruchi-logo.png';
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'All Courses', path: '/courses' },
  { name: 'Notes', path: '/notes' },
  { name: 'Tests', path: '/tests' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Contact', path: '/contact' },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const { data: isAdmin } = useIsAdmin();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  return (<motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-card shadow-lg border-b border-border' : 'bg-transparent'}`}>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={ruchiLogo} alt="Logo" className="h-11 md:h-15 w-auto transition-all" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (<Link key={link.path} to={link.path} className={`relative text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path
            ? 'text-primary'
            : 'text-muted-foreground'}`}>
            {link.name}
            {location.pathname === link.path && (<motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />)}
          </Link>))}
        </div>

        {/* Desktop/Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              {isAdmin && (
                <Link to="/admin" className="hidden sm:block">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Shield className="w-5 h-5" />
                  </Button>
                </Link>
              )}
              <ProfileDropdown />
            </div>
          ) : (
            <Link to="/login" className="hidden lg:block">
              <Button variant="gradient" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-secondary transition-colors border border-transparent active:border-primary/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    <AnimatePresence>
      {isOpen && (<motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="lg:hidden fixed inset-x-4 top-24 z-50 bg-card/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl overflow-hidden shadow-primary/5"
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (<Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`flex items-center px-4 py-3.5 rounded-xl font-semibold text-lg transition-all ${location.pathname === link.path
            ? 'bg-primary/10 text-primary'
            : 'text-foreground hover:bg-secondary/80'}`}>
            {link.name}
          </Link>))}

          <div className="pt-4 mt-4 border-t border-border space-y-2">
            {user ? (<>
              <Link to="/profile" onClick={() => setIsOpen(false)} className="block">
                <Button variant="ghost" className="w-full justify-start h-12 rounded-xl">
                  <User className="w-4 h-4 mr-3 text-muted-foreground" />
                  My Profile
                </Button>
              </Link>

              <Link to="/notifications" onClick={() => setIsOpen(false)} className="block">
                <Button variant="ghost" className="w-full justify-start h-12 rounded-xl">
                  <Bell className="w-4 h-4 mr-3 text-muted-foreground" />
                  Notifications
                </Button>
              </Link>

              <Link to="/purchases" onClick={() => setIsOpen(false)} className="block">
                <Button variant="ghost" className="w-full justify-start h-12 rounded-xl">
                  <ShoppingBag className="w-4 h-4 mr-3 text-muted-foreground" />
                  My Store
                </Button>
              </Link>

              <Link to="/referrals" onClick={() => setIsOpen(false)} className="block">
                <Button variant="ghost" className="w-full justify-start h-12 rounded-xl">
                  <Target className="w-4 h-4 mr-3 text-muted-foreground" />
                  Refer & Earn
                </Button>
              </Link>

              {isAdmin && (<Link to="/admin" onClick={() => setIsOpen(false)} className="block">
                <Button variant="outline" className="w-full justify-start h-12 border-primary/50 text-primary hover:bg-primary/10 rounded-xl">
                  <Shield className="w-4 h-4 mr-3" />
                  Admin Panel
                </Button>
              </Link>)}

              <Button variant="ghost" className="w-full justify-start h-12 text-red-500 hover:text-red-600 hover:bg-red-500/10 rounded-xl" onClick={() => {
                setIsOpen(false);
                handleSignOut();
              }}>
                <LogOut className="w-4 h-4 mr-3" />
                Sign Out
              </Button>
            </>) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="block">
                <Button variant="gradient" className="w-full h-12 rounded-xl">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>)}
    </AnimatePresence>
  </motion.nav>);
};
export default Navbar;
