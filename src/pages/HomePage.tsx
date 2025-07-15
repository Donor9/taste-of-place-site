import HeroSection from '@/components/HeroSection';
import MenuPreview from '@/components/MenuPreview';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Coffee, MapPin, Clock, Phone } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: 'С любовью к деталям',
      description: 'Каждое блюдо готовится с особой заботой и вниманием к качеству'
    },
    {
      icon: Users,
      title: 'Уютная атмосфера',
      description: 'Место, где приятно провести время с друзьями или наедине с собой'
    },
    {
      icon: Coffee,
      title: 'Отборный кофе',
      description: 'Зерна прямой поставки, обжаренные специально для нашего кафе'
    }
  ];

  return (
    <>
      <HeroSection />
      
      <MenuPreview />

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему нас выбирают
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ждём вас в гости!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Забронируйте столик прямо сейчас или приходите к нам без записи. 
            Мы всегда рады новым гостям!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contacts">
                <MapPin className="w-5 h-5 mr-2" />
                Как добраться
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Ежедневно с 8:00 до 22:00</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;