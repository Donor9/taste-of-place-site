import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Flame } from 'lucide-react';

const MenuPage = () => {
  const menuSections = [
    {
      title: 'Завтраки',
      subtitle: 'Подаются до 14:00',
      items: [
        {
          name: 'Авокадо тост с яйцом пашот',
          description: 'Цельнозерновой хлеб, спелый авокадо, яйцо пашот, микрозелень',
          price: '390₽',
          tags: ['vegetarian']
        },
        {
          name: 'Французские тосты',
          description: 'Бриошь, ванильный крем, сезонные ягоды, кленовый сироп',
          price: '340₽',
          tags: []
        },
        {
          name: 'Овсяная каша с орехами',
          description: 'Овсянка на миндальном молоке, грецкие орехи, мёд, банан',
          price: '290₽',
          tags: ['vegetarian']
        },
        {
          name: 'Омлет с сыром и зеленью',
          description: 'Три яйца, сыр грюйер, свежая зелень, тост',
          price: '320₽',
          tags: []
        }
      ]
    },
    {
      title: 'Обеды',
      subtitle: 'Подаются с 12:00',
      items: [
        {
          name: 'Салат с киноа и авокадо',
          description: 'Киноа, авокадо, помидоры черри, огурцы, лимонная заправка',
          price: '450₽',
          tags: ['vegetarian']
        },
        {
          name: 'Куриная грудка гриль',
          description: 'Куриная грудка, овощи гриль, картофель, соус песто',
          price: '580₽',
          tags: []
        },
        {
          name: 'Крем-суп из тыквы',
          description: 'Тыква, кокосовое молоко, имбирь, тыквенные семечки',
          price: '350₽',
          tags: ['vegetarian']
        },
        {
          name: 'Паста с морепродуктами',
          description: 'Лингвини, креветки, мидии, чеснок, белое вино',
          price: '620₽',
          tags: ['spicy']
        }
      ]
    },
    {
      title: 'Напитки',
      subtitle: 'Кофе и не только',
      items: [
        {
          name: 'Эспрессо',
          description: 'Классический итальянский эспрессо из зёрен арабики',
          price: '120₽',
          tags: []
        },
        {
          name: 'Капучино',
          description: 'Эспрессо с молочной пенкой, возможно растительное молоко',
          price: '180₽',
          tags: []
        },
        {
          name: 'Авторский раф',
          description: 'Эспрессо, сливки, ванильный сироп, корица',
          price: '220₽',
          tags: []
        },
        {
          name: 'Матча латте',
          description: 'Японский зелёный чай матча с молоком',
          price: '250₽',
          tags: ['vegetarian']
        }
      ]
    },
    {
      title: 'Десерты',
      subtitle: 'Домашняя выпечка',
      items: [
        {
          name: 'Чизкейк New York',
          description: 'Классический чизкейк с ягодным соусом',
          price: '280₽',
          tags: []
        },
        {
          name: 'Шоколадный фондан',
          description: 'Тёплый шоколадный кекс с жидкой сердцевиной',
          price: '320₽',
          tags: []
        },
        {
          name: 'Тирамису',
          description: 'Классический итальянский десерт с кофе',
          price: '300₽',
          tags: []
        },
        {
          name: 'Сорбет',
          description: 'Освежающий сорбет из сезонных фруктов',
          price: '220₽',
          tags: ['vegetarian']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Меню
          </h1>
          <p className="text-lg text-muted-foreground">
            Свежие ингредиенты и авторские рецепты каждый день
          </p>
        </div>

        <div className="space-y-12">
          {menuSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="overflow-hidden">
              <CardHeader className="bg-accent/30 pb-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-6 hover:bg-accent/20 transition-colors">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.name}
                            </h3>
                            <div className="flex gap-1">
                              {item.tags.includes('vegetarian') && (
                                <Badge variant="secondary" className="text-xs">
                                  <Leaf className="w-3 h-3 mr-1" />
                                  Вегетарианское
                                </Badge>
                              )}
                              {item.tags.includes('spicy') && (
                                <Badge variant="destructive" className="text-xs">
                                  <Flame className="w-3 h-3 mr-1" />
                                  Острое
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-accent/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Особые пожелания?
          </h3>
          <p className="text-muted-foreground mb-4">
            Сообщите нам о ваших предпочтениях, и мы адаптируем любое блюдо под ваши потребности
          </p>
          <p className="text-sm text-muted-foreground">
            У нас есть веганские, безглютеновые и другие альтернативы
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;