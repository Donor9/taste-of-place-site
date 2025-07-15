import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Coffee, Utensils, Cookie, Soup } from 'lucide-react';
import breakfastImg from '@/assets/breakfast.jpg';
import lunchImg from '@/assets/lunch.jpg';
import coffeeImg from '@/assets/coffee-dessert.jpg';

const MenuPreview = () => {
  const categories = [
    {
      title: 'Завтраки',
      description: 'Свежие круассаны, авокадо тосты, омлеты',
      icon: Utensils,
      image: breakfastImg,
      price: 'от 290₽'
    },
    {
      title: 'Обеды',
      description: 'Салаты, супы, горячие блюда',
      icon: Soup,
      image: lunchImg,
      price: 'от 450₽'
    },
    {
      title: 'Кофе',
      description: 'Эспрессо, капучино, авторские напитки',
      icon: Coffee,
      image: coffeeImg,
      price: 'от 180₽'
    },
    {
      title: 'Десерты',
      description: 'Домашние торты, печенье, мороженое',
      icon: Cookie,
      image: coffeeImg,
      price: 'от 220₽'
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наше меню
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свежие ингредиенты, авторские рецепты и любовь к своему делу — 
            в каждом блюде нашего кафе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="w-5 h-5 text-golden-accent" />
                    <span className="text-golden-accent font-medium text-sm">
                      {category.price}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/menu">
              Полное меню
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;