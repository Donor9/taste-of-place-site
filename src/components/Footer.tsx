import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-brown text-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Café Delice</h3>
            <p className="text-warm-cream/80 mb-4">
              Уютное кафе в центре Москвы, где каждая чашка кофе — это маленький праздник, 
              а каждое блюдо готовится с душой.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 hover:text-golden-accent cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-golden-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Меню</h4>
            <ul className="space-y-2 text-warm-cream/80">
              <li>
                <Link to="/menu" className="hover:text-golden-accent transition-colors">
                  Завтраки
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-golden-accent transition-colors">
                  Обеды
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-golden-accent transition-colors">
                  Напитки
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-golden-accent transition-colors">
                  Десерты
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-warm-cream/80">
              <li>
                <Link to="/" className="hover:text-golden-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-golden-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-golden-accent transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-golden-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-warm-cream/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-golden-accent" />
                <span className="text-sm">ул. Пушкина, 15, Москва</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-golden-accent" />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-golden-accent" />
                <span className="text-sm">Ежедневно 8:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-warm-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-cream/60 text-sm">
              © {currentYear} Café Delice. Все права защищены.
            </p>
            <p className="text-warm-cream/60 text-sm flex items-center gap-1">
              Сделано с <Heart className="w-4 h-4 text-red-400" /> для наших гостей
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;