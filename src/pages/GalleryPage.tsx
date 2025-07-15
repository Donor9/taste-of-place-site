import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import heroCafe from '@/assets/hero-cafe.jpg';
import breakfast from '@/assets/breakfast.jpg';
import lunch from '@/assets/lunch.jpg';
import coffeeDessert from '@/assets/coffee-dessert.jpg';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: heroCafe,
      alt: 'Интерьер кафе',
      category: 'Интерьер',
      title: 'Уютный зал'
    },
    {
      src: breakfast,
      alt: 'Авокадо тост',
      category: 'Завтраки',
      title: 'Авокадо тост с яйцом'
    },
    {
      src: lunch,
      alt: 'Салат с курицей',
      category: 'Обеды',
      title: 'Салат с грилованной курицей'
    },
    {
      src: coffeeDessert,
      alt: 'Кофе и десерт',
      category: 'Напитки',
      title: 'Капучино с круассаном'
    },
    {
      src: heroCafe,
      alt: 'Барная стойка',
      category: 'Интерьер',
      title: 'Барная зона'
    },
    {
      src: breakfast,
      alt: 'Французские тосты',
      category: 'Завтраки',
      title: 'Французские тосты'
    },
    {
      src: lunch,
      alt: 'Суп дня',
      category: 'Обеды',
      title: 'Крем-суп из тыквы'
    },
    {
      src: coffeeDessert,
      alt: 'Десерт',
      category: 'Десерты',
      title: 'Шоколадный фондан'
    }
  ];

  const categories = ['Все', 'Интерьер', 'Завтраки', 'Обеды', 'Напитки', 'Десерты'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredItems = activeCategory === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Галерея
          </h1>
          <p className="text-lg text-muted-foreground">
            Взгляните на атмосферу нашего кафе и наши блюда
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:opacity-80 transition-opacity"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-sm font-medium mb-1">{item.title}</p>
                  <p className="text-xs opacity-80">{item.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 text-center">
          <Card className="bg-accent/30">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Каждое блюдо — произведение искусства
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы уделяем особое внимание не только вкусу, но и подаче каждого блюда. 
                Наши повара создают настоящие кулинарные шедевры, а фотографы помогают 
                запечатлеть эту красоту. Приходите и убедитесь сами — у нас вкусно не только 
                на вкус, но и на вид!
              </p>
            </div>
          </Card>
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryPage;