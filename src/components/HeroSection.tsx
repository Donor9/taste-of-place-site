import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCafe from '@/assets/hero-cafe.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCafe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Добро пожаловать в
            <span className="text-primary block">Café Delice</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Уютное место в сердце города, где каждая чашка кофе — это искусство, 
            а каждое блюдо — маленький праздник вкуса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Забронировать столик
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/menu">
                Посмотреть меню
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>ул. Пушкина, 15</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Ежедневно 8:00 - 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;